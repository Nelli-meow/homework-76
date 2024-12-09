export interface Message {
    id: string;
    message: string;
    author: string;
    dateTime: string;
}

export type MessageWithoutId = Omit<Message, 'id'>
