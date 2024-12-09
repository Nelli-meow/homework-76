import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { ChatMessageMutation, Message } from '../../types';

export const fetchMessagesThunk = createAsyncThunk<Message[], void>(
  'messages/fetchMessagesThunk',
  async () => {
    const messagesResponse = await axiosApi<Message[]>('/messages');
    return messagesResponse.data || [];
  }
);

export const addMessagesThunk = createAsyncThunk<void, ChatMessageMutation[]>(
  'messages/addMessagesThunk',
  async (ChatMessageMutation) => {
     await axiosApi.post('/messages', {...ChatMessageMutation});
  }
);