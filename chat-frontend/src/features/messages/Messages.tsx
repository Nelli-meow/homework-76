import { Container, Grid2, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { useEffect } from 'react';
import { fetchMessagesThunk } from './messagesThunk.ts';
import { selectFetchingMessages, selectMessagesItem } from './messagesSlice.ts';
import MessageItem from './components/MessageItem.tsx';

const Messages = () => {
  const dispatch = useAppDispatch();
  const messages = useAppSelector(selectMessagesItem);
  const isFetching = useAppSelector(selectFetchingMessages);

  useEffect(() => {
    dispatch(fetchMessagesThunk());
  },[dispatch]);


  return (
    <Grid2>
      <Container>
        {isFetching ? (
          <Typography>Loading messages...</Typography>
        ) : messages.length === 0 ? (
          <Typography>No messages</Typography>
        ) : (
          <>
            {messages.slice().reverse().map((message) => (
              <MessageItem
                key={message.id}
                author={message.author}
                message={message.message}
                dateTime={message.dateTime}
              />
            ))}
          </>
        )}
      </Container>
    </Grid2>
  );
};

export default Messages;