export interface Message {
    id: string;
    message: string;
    author: string;
    dateTime: string;
}

export interface ChatMessageMutation {
  message: string;
  author: string;
  dateTime: string;
}