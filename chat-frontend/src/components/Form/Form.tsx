import * as React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { useCallback, useState } from 'react';
import { ChatMessageMutation } from '../../types';

interface Props {
  onSubmit: (message: ChatMessageMutation) => void;
}

const initialState = {
  author: '',
  message: '',
};

const Form: React.FC<Props> = ({onSubmit}) => {
  const [oneMessage, setOneMessage] = useState(initialState);

  const submitMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!oneMessage.author || !oneMessage.message) {
      console.log('Both fields are required.');
      return;
    }

    onSubmit(oneMessage);
    setOneMessage(initialState);
  };

  const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setOneMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);


  return (
    <Container fixed>
      <h1>Чатик</h1>
      <form onSubmit={submitMessage}>
        <Box mb={5} mt={5}>
          <TextField
            label="Author"
            name="author"
            value={oneMessage.author}
            onChange={inputChangeHandler}
            variant="outlined"
            fullWidth
            id="authorName"
            placeholder="Enter your name"
            required
          />
        </Box>

        <Box mb={5}>
          <TextField
            label="Message"
            name="message"
            value={oneMessage.message}
            onChange={inputChangeHandler}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            id="message"
            placeholder="Leave a message here"
            required
          />
        </Box>

        <Button variant="outlined" type="submit">Enter</Button>
      </form>
      <hr/>
    </Container>
  );
};

export default Form;