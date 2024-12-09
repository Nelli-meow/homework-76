import * as React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { useCallback, useState } from 'react';


const initialState = {
  author: '',
  message: '',
};

const Form = () => {
  const [form, setForm] = useState(initialState)

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();

    setForm({...initialState});
  };

  const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }, []);


  return (
    <Container fixed>
      <h1>Чатик</h1>
      <form onSubmit={submitPost}>
        <Box mb={5} mt={5}>
          <TextField
            label="Author"
            name="author"
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