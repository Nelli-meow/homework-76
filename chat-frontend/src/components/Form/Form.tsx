import * as React from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { useState } from 'react';
import axiosApi from '../../axiosApi.ts';


const Form = () => {
  const [form, setForm] = useState({
    author: '',
    message: '',
  })

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();

  };

  const inputChangeHandler =  async (e: React.ChangeEvent<HTMLInputElement>) => {

      const { name, value } = e.target;
      setForm(prevState => ({
        ...prevState,
        [name]: value,
      }));

    console.log(form)

  };


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