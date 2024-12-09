import { Message } from '../../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchMessagesThunk } from './messagesThunk.ts';

interface IMessageInitialState {
  messagesItems: Message[];
  fetchingMessages: boolean;
}

const initialState: IMessageInitialState = {
  messagesItems: [],
  fetchingMessages: false,
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessagesThunk.pending, (state) => {
        state.fetchingMessages = true;
      })
      .addCase(fetchMessagesThunk.fulfilled, (state, {payload: messages}) => {
        state.fetchingMessages = false;
        state.messagesItems = messages;
      })
      .addCase(fetchMessagesThunk.rejected, (state) => {
        state.fetchingMessages = false;
      })
  }
});

export const messagesReducer = messagesSlice.reducer;