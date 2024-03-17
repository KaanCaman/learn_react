
// ContactInfo interface
// This interface is used to define the shape of the contact object
// Bu arayüz, iletişim nesnesinin şeklini tanımlamak için kullanılır
export interface ContactInfo {
    id: string;
    first: string;
    last: string;
    avatar?: string;
    twitter: string;
    notes: string;
    favorite: boolean;
    createdAt: number
}