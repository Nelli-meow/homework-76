import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi.ts';
import { Message } from '../../types';

export const fetchMessagesThunk = createAsyncThunk<Message[], void>(
  'messages/fetchMessagesThunk',
  async () => {
    const messagesResponse = await axiosApi<Message[]>('/messages');
    return messagesResponse.data || [];
  }
);