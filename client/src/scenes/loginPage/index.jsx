import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "scenes/loginPage/form";
import React from 'react';

const LoginPage = () => {
  const theme = useTheme();
  const isNotMobileScreen = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          FriendSpace
        </Typography>
      </Box>
      {/* Form Box */}
      <Box
        width={isNotMobileScreen ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to FriendSpace, a place to keep everyone updated!
        </Typography>
        <Form></Form>
      </Box>
    </Box>
  );
};
export default LoginPage;
