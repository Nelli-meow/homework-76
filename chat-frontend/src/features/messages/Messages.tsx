import { Grid2 } from '@mui/material';
import { useAppDispatch } from '../../app/hooks.ts';
import { useEffect } from 'react';
import { fetchMessagesThunk } from './messagesThunk.ts';

const Messages = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMessagesThunk());
  },[dispatch]);


  return (
    <Grid2>
      <Grid2 container direction="column" justify="center" alignItems="center">

      </Grid2>
    </Grid2>
  );
};

export default Messages;