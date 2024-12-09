import { Message } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

interface IMessageInitialState {
  messages: Message[];
  fetchingMessages: boolean;
}

const initialState: IMessageInitialState = {
  messages: [],
  fetchingMessages: false,
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {}
});

export const messagesReducer = messagesSlice.reducer;