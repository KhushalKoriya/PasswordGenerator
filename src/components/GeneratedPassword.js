import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const GeneratedPassword = ({ password, copyToClipboard }) => (
  password && (
    <Box sx={{ mb: 2 }}>
      <TextField value={password} variant="outlined" fullWidth disabled sx={{ mb: 2, bgcolor: 'white', borderRadius: 1 }} />
      <Button variant="contained" color="secondary" onClick={copyToClipboard} sx={{ width: '100%' }}>
        Copy to Clipboard
      </Button>
    </Box>
  )
);

export default GeneratedPassword;
