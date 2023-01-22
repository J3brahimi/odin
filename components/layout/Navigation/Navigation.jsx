import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { Menu as MenuIcon, Adb as AdbIcon } from "@mui/icons-material";

import Image from "next/image";
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navigation = () => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      p={4}
    >
      <Box sx={{ display: { md: "flex" } }}>
        <Image
          src="/images/logo.png"
          width={breakpoint ? 36 : 48}
          height={breakpoint ? 36 : 48}
          alt="odin logo"
        />
      </Box>

      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display: { md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        ODIN
      </Typography>
    </Box>
  );
};

export default Navigation;
