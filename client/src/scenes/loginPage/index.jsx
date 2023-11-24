import { Box, Typography, useTheme, useMediaQuery } from "@mui/material"


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box
      width="100%"
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
    >
      <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
        >
          Mind&Muscle
        </Typography>
    </Box>
  )
}

export default LoginPage