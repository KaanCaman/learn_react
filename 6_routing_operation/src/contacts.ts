// https://reactrouter.com/en/main/start/tutorial#setup

// Yukarıda ki belirtilen linkteki dokumanda her şey javascript üzerinde yazılmış olup.
// Bu dokümanda ise typescript üzerinde yazılmıştır.
// Bu dokümanda ki kodlar, yukarıda ki linkteki dokümandaki kodlarla aynıdır.
// Sadece javascript ve typescript farkı vardır.
// Javascriptten Typescript'e dönüştürme işlemi ve
// Kodların Yorum satırları benim[KAAN CAMAN] tarafıdan yapılmıştır.

// Bu dosya, kişilerle ilgili işlevleri içerir.
// Bu işlevler, kişilerin oluşturulması, alınması, güncellenmesi ve silinmesi gibi temel işlevleri içerir.
// Bu işlevler, yerel depolama kullanarak çalışır ve ağ isteklerini taklit eder.
// Bu işlevler, gerçek bir veritabanı kullanmaz, bu nedenle veriler sayfayı yeniden yüklediğinizde kaybolur.

// en :
// In the document in the link above, everything is written in javascript.
// In this document, everything is written in typescript.
// The code in this document is the same as in the document linked above.
// There is only a difference between javascript and typescript.
// Javascript to Typescript conversion process and
// Comment lines of the codes were made by me [KAAN CAMAN].

// The file contains functions related to contacts.
// These functions include basic operations such as creating, getting, updating, and deleting contacts.
// These functions work using local storage and mimic network requests.
// These functions do not use a real database, so the data is lost when you refresh the page.

import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

import { ContactInfo } from "./types/contact_types";

/**
 * Get a list of contacts - Kişi listesini al
 *
 * @param {string} query - The search query - Arama sorgusu
 *
 * @returns {Promise<ContactInfo[]>} - A list of contacts - Kişi listesi
 *
 * @example
 *
 * const contacts = await getContacts("John");
 *
 * console.log(contacts);
 *
 * /// [
 * ///   {
 * ///     id: "123",
 * ///     first: "John",
 * ///     last: "Doe",
 * ///    createdAt: 1234567890
 * ///   }
 * /// ]
 *
 *
 */

export async function getContacts(query: string): Promise<ContactInfo[]> {
  await fakeNetwork(`getContacts:${query}`);
  let contacts: ContactInfo[] | null = await localforage.getItem("contacts");
  if (!contacts) contacts = [];
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }
  return contacts.sort(sortBy("last", "createdAt"));
}

/**
 * Create a new contact - Yeni bir kişi oluştur
 *
 * @returns {Promise<ContactInfo>} - The newly created contact - Yeni oluşturulan kişi
 *
 * @example
 *
 * const contact = await createContact();
 *
 * console.log(contact);
 *
 * /// {
 * ///   id: "123",
 * ///   createdAt: 1234567890
 * /// }
 *
 */
export async function createContact(): Promise<ContactInfo> {
  await fakeNetwork();
  const id = Math.random().toString(36).substring(2, 9);
  const contact: ContactInfo = {
    id: id,
    first: "",
    last: "",
    avatar: undefined,
    twitter: "",
    notes: "",
    favorite: false,

    createdAt: Date.now(),
  };
  const contacts = await getContacts("");
  contacts.unshift(contact);
  await set(contacts);
  return contact;
}

/**
 * Get a contact by id - Id'ye göre kişi al
 *
 * @param {string} id - The id of the contact - Kişi id'si
 *
 * @returns {Promise<ContactInfo | null>} - The contact or null if not found - Kişi veya bulunamazsa null
 *
 * @example
 *
 * const contact = await getContact("123");
 *
 * console.log(contact);
 *
 * /// {
 * ///   id: "123",
 * ///   createdAt: 1234567890
 * /// }
 *
 *
 * */
export async function getContact(id: string): Promise<ContactInfo | null> {
  await fakeNetwork(`contact:${id}`);
  const contacts = await localforage.getItem<ContactInfo[]>("contacts");
  if (!contacts) throw new Error("No contacts found");
  const contact = contacts.find((contact) => contact.id === id);
  console.log(contact, `gelen id ${id}`,"getContact fonksiyonu içindeki console.log");
  return contact!;
}

/**
 * Update a contact - Kişiyi güncelle
 *
 * @param {string} id - The id of the contact - Kişi id'si
 *
 * @param {Partial<ContactInfo>} updates - The updates to apply - Uygulanacak güncellemeler
 *
 * @returns {Promise<ContactInfo>} - The updated contact - Güncellenmiş kişi
 *
 * @example
 *
 * const contact = await updateContact("123", { first: "John" });
 *
 * console.log(contact);
 *
 * /// {
 * ///   id: "123",
 * ///   first: "John",
 * ///   createdAt: 1234567890
 * /// }
 *
 *
 * */

export async function updateContact(
  id: string,
  updates: Partial<ContactInfo>
): Promise<ContactInfo> {
  await fakeNetwork();
  const contacts: ContactInfo[] | null = await localforage.getItem<
    ContactInfo[]
  >("contacts");
  if (!contacts) throw new Error("No contacts found");
  const contact = contacts.find((contact) => contact.id === id);
  if (!contact) throw new Error(`No contact found for : ${id}`);
  Object.assign(contact, updates);
  await set(contacts);
  return contact;
}

/**
 * Delete a contact - Kişiyi sil
 *
 * @param {string} id - The id of the contact - Kişi id'si
 *
 * @returns {Promise<boolean>} - True if the contact was deleted, false if not found - Kişi silindi ise true, bulunamadı ise false
 *
 * @example
 *
 * const result = await deleteContact("123");
 *
 * console.log(result);
 *
 * /// true
 *
 *
 * */
export async function deleteContact(id: string): Promise<boolean> {
  const contacts: ContactInfo[] | null = await localforage.getItem("contacts");
  if (contacts === null) return false;
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}

function set(contacts: ContactInfo[]): Promise<ContactInfo[]> {
  return localforage.setItem("contacts", contacts);
}

// Fake network request - Sahte ağ isteği
let fakeCache: { [key: string]: boolean } = {};

/**
 * Fake network request - Sahte ağ isteği
 *
 * @param {string} key - The cache key - Önbellek anahtarı
 *
 * @returns {Promise<void>} - A promise that resolves when the request is complete - İstek tamamlandığında çözülen bir söz
 *
 * @example
 *
 * /// await fakeNetwork();
 *
 */
async function fakeNetwork(key?: string): Promise<void> {
  if (key) {
    fakeCache = {};
  }

  if (fakeCache[key!]) {
    return;
  }

  fakeCache[key ?? "type"] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
