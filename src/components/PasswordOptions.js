import React from 'react';
import { Box, FormControlLabel, Checkbox } from '@mui/material';

const PasswordOptions = ({ includeNumbers, setIncludeNumbers, includeAlphabets, setIncludeAlphabets, includeSpecialChars, setIncludeSpecialChars }) => (
  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
    <FormControlLabel
      control={<Checkbox checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />}
      label="Include Numbers"
    />
    <FormControlLabel
      control={<Checkbox checked={includeAlphabets} onChange={(e) => setIncludeAlphabets(e.target.checked)} />}
      label="Include Alphabets"
    />
    <FormControlLabel
      control={<Checkbox checked={includeSpecialChars} onChange={(e) => setIncludeSpecialChars(e.target.checked)} />}
      label="Include Special Characters"
    />
  </Box>
);

export default PasswordOptions;
