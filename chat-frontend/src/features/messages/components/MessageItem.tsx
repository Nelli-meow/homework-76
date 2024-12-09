import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';
import dayjs from 'dayjs';


interface Props {
  message: string;
  author: string;
  dateTime: string;
}

const MessageItem: React.FC<Props> = ({author, message, dateTime}) => {
  const formattedDate = dayjs(dateTime).format('DD.MM.YYYY HH:mm');

  return (
    <Paper  elevation={3} sx={{ mb: 3, p: 4, display: 'grid', alignItems: 'center', justifyContent: 'flex-start' }}>
      <Box mb={2}>
        <Typography variant="h4" component="strong" sx={{ mr: 2 }}>
          {author}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {formattedDate}
        </Typography>
      </Box>
      <Typography variant="body1" sx={{ textAlign: 'start' }}>
        {message}
      </Typography>
    </Paper>
  );
};

export default MessageItem;