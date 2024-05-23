import React, { useState } from "react";
import {Button, Typography, Paper } from "@mui/material";
import PasswordOptions from "./PasswordOptions";
import GeneratedPassword from "./GeneratedPassword";
import PreviousPasswords from "./PreviousPasswords";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeAlphabets, setIncludeAlphabets] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [previousPasswords, setPreviousPasswords] = useState(
    JSON.parse(localStorage.getItem("previousPasswords")) || []
  );

  const generatePassword = () => {
    const numbers = "0123456789";
    const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
    let charset = "";
    let password = "";

    if (includeNumbers) charset += numbers;
    if (includeAlphabets) charset += alphabets;
    if (includeSpecialChars) charset += specialChars;

    if (charset.length === 0) {
      alert("Please select at least one character set");
      return;
    }

    const selectedSets = [];
    if (includeNumbers) selectedSets.push(numbers);
    if (includeAlphabets) selectedSets.push(alphabets);
    if (includeSpecialChars) selectedSets.push(specialChars);

    selectedSets.forEach((set) => {
      password += set[Math.floor(Math.random() * set.length)];
    });

    for (let i = password.length; i < 12; i++) {
      password += charset[Math.floor(Math.random() * charset.length)];
    }

    password = password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    setPassword(password);
    const updatedPasswords = [password, ...previousPasswords.slice(0, 4)];
    setPreviousPasswords(updatedPasswords);
    localStorage.setItem("previousPasswords", JSON.stringify(updatedPasswords));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, maxWidth: 800, mx: "auto", textAlign: "center" }}
    >
      <Typography variant="h4" gutterBottom>
        Password Generator
      </Typography>
      <Typography variant="body1" gutterBottom>
        Clicking on the generate password allows you to create various types of
        passwords and utilize them.
      </Typography>
      <PasswordOptions
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeAlphabets={includeAlphabets}
        setIncludeAlphabets={setIncludeAlphabets}
        includeSpecialChars={includeSpecialChars}
        setIncludeSpecialChars={setIncludeSpecialChars}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={generatePassword}
        sx={{ mb: 2 }}
      >
        Generate Password
      </Button>
      <GeneratedPassword
        password={password}
        copyToClipboard={copyToClipboard}
      />
      <PreviousPasswords previousPasswords={previousPasswords} />
    </Paper>
  );
};

export default PasswordGenerator;
