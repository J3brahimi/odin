import { Box, TextField, Button } from "@mui/material";

import { useTranslation } from "next-i18next";

const PasswordBox = ({ password, setPassword, onConfirm }) => {
  const { t } = useTranslation();
  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      gap="8px"
      borderRadius="6px"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      textAlign="center"
    >
      <TextField
        label="رمز عبور"
        id="fullWidth"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button sx={{ padding: "12px" }} variant="outlined" onClick={onConfirm}>
        ورود
      </Button>
    </Box>
  );
};

export default PasswordBox;
