import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const PreviousPasswords = ({ previousPasswords }) => {
  const copyToClipboard = (password) => {
    navigator.clipboard.writeText(password);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Passwords History
      </Typography>
      <List component={Paper} sx={{ maxHeight: "auto", overflow: 'auto', bgcolor: 'background.paper' }}>
        {previousPasswords.map((pwd, index) => (
          <ListItem key={index}>
            <ListItemText primary={pwd} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="copy" onClick={() => copyToClipboard(pwd)}>
                <FileCopyIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PreviousPasswords;
