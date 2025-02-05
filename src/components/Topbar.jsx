import { IconButton, styled, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import TranslateIcon from '@mui/icons-material/Translate';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Link } from 'react-router-dom'; // Don't forget to import Link if using routing

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const settings = [
  { name: "mode", path: "/mode", Icon: <Brightness4Icon /> },
  { name: "Notifications", path: "/notifications", Icon: <CircleNotificationsIcon /> },
  { name: "Language", path: "/lang", Icon: <TranslateIcon /> },
];

// eslint-disable-next-line react/prop-types
const Topbar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ color: "#fff" }}>
        </Typography>
        <List sx={{ display: "flex", alignItems: "center", marginLeft: 2 }}>
          {settings.map((item) => (
            <ListItem key={item.name} disablePadding sx={{ display: "inline-block" }}>
              <Tooltip title={item.name} placement="bottom">
                <Link to={item.path} style={{ textDecoration: "none", color: "inherit" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                      color: "#fff", // White color for text and icons
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.08)", // Light white background on hover
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: "#fff", // White color for icons
                      }}
                    >
                      {item.Icon}
                    </ListItemIcon>
                  </ListItemButton>
                </Link>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
