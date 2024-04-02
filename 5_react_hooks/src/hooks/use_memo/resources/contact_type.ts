//
// define the type of the state
// contactList: string[] -> the list of contacts
// contact: string -> the contact to be added
//
// state'in tipini tanımla
// contactList: string[] -> kişilerin listesi
// contact: string -> eklenecek kişi
interface ConState {
  contactList: string[];
  contact: string;
}

// define the type of the action
// type: ConActionTypes -> the type of the action
// payload: string -> the contact to be added or deleted
//
// action'ın tipini tanımla
// type: ConActionTypes -> action'ın tipi
// payload: string -> eklenecek veya silinecek kişi
interface ConAction {
  type: ConActionTypes;
  payload: string;
}

// define the action types
// ADD_CONTACT -> add a contact
// DELETE_CONTACT -> delete a contact
//
// aksiyon tiplerini tanımla
// ADD_CONTACT -> kişi ekle
// DELETE_CONTACT -> kişi sil
enum ConActionTypes {
  ADD_CONTACT = "ADD_CONTACT",
  DELETE_CONTACT = "DELETE_CONTACT",
}

// export the types
// tipleri export et
export type { ConState, ConAction };
export { ConActionTypes };
