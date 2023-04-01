import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { HashLink as Link } from "react-router-hash-link";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "./header.scss";


const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="header">
      <Container maxWidth="xl" className="header__container">
        <Toolbar disableGutters>
          <Link to="/">
            <RocketLaunchIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}
            />
          </Link>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link smooth to="/#explore-planets">
                  <Typography textAlign="center">Planets</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link smooth to="/#resources">
                  <Typography textAlign="center">Resources</Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Link smooth to="/#fun-facts">
                  <Typography textAlign="center">Fun Facts</Typography>
                </Link>
              </MenuItem>

              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Link smooth to="/#about-us">
                  <Typography textAlign="center">About Us</Typography>
                </Link>
              </MenuItem> */}
            </Menu>
          </Box>
          <Link to="/">
            <RocketLaunchIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
          </Link>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mr: 3, color: "black", display: "block" }}
            >
              <Link to="/#explore-planets">
                <Typography textAlign="center">Planets</Typography>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mr: 3, color: "black", display: "block" }}
            >
              <Link to="/#resources">
                <Typography textAlign="center">Resources</Typography>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mr: 3, color: "black", display: "block" }}
            >
              <Link to="/#fun-facts">
                <Typography textAlign="center">Fun Facts</Typography>
              </Link>
            </Button>
            {/* <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, mr: 3, color: "black", display: "block" }}
            >
              <Link to="/#about-us">
                <Typography textAlign="center">About Us</Typography>
              </Link>
            </Button> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
