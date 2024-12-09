import { Box, Paper, Typography } from '@mui/material';

const MessageItem = () => {
  return (
    <Paper  elevation={3} sx={{ mb: 3, p: 4, display: 'grid', alignItems: 'center', justifyContent: 'flex-start' }}>
      <Box mb={2}>
        <Typography variant="body1" component="strong" sx={{ mr: 2 }}>

        </Typography>
        <Typography variant="body2" color="textSecondary">

        </Typography>
      </Box>
      <Typography variant="body1" sx={{ textAlign: 'start' }}>

      </Typography>
    </Paper>
  );
};

export default MessageItem;