/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import AddHomeIcon from "@mui/icons-material/Home";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionIcon from '@mui/icons-material/Description';
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// eslint-disable-next-line react/prop-types
const Sidebar = ({ open, handleDrawerClose}) => {
  const theme = useTheme();

  // Define menu items
  const home = [{ name: "Home", path: "/", Icon: <AddHomeIcon /> }];
  const categories = [
    { name: "Category 1", path: "/category1", Icon: <AccessibilityIcon /> },
    { name: "Category 2", path: "/category2", Icon: <AccessibilityIcon /> },
    { name: "Category 3", path: "/category3", Icon: <AccessibilityIcon /> },
    { name: "Category 4", path: "/category4", Icon: <AccessibilityIcon /> },
    { name: "Category 5", path: "/category5", Icon: <AccessibilityIcon /> },
  ];
  const data = [
    { name: "Debut", path: "/Debut", Icon: <SsidChartIcon /> },
    { name: "Credit", path: "/Credit", Icon: <PieChartIcon /> },
    { name: "Compare", path: "/Compare", Icon: <LeaderboardIcon /> },
    { name: "CashFlow", path: "/CashFlow", Icon: <LeaderboardIcon /> },
  ];
  const settings = [
    { name: "Settings", path: "/settings", Icon: <SettingsIcon /> },
    { name: "Account", path: "/account", Icon: <AccountCircleIcon /> },
  ];
  const create = [
    { name: "Createinovonce", path: "/Createinov", Icon: <DescriptionIcon /> },

  ];

  // Render the sidebar only for authenticated users

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {home.map((item) => (
          <SidebarItem key={item.name} item={item} open={open} />
        ))}
      </List>
      <Divider />
      <List>
        {categories.map((item) => (
          <SidebarItem key={item.name} item={item} open={open} />
        ))}
      </List>
      <Divider />
      <List>
        {data.map((item) => (
          <SidebarItem key={item.name} item={item} open={open} />
        ))}
      </List>
      <Divider />
      <List>
      <List>
        {create.map((item) => (
          <SidebarItem key={item.name} item={item} open={open} />
        ))}
      </List>

      <Divider />
      {settings.map((item) => (
          <SidebarItem key={item.name} item={item} open={open} />
        ))}
      </List>
    </Drawer>
  );
};

// SidebarItem Component for cleaner code
const SidebarItem = ({ item, open }) => (
  <ListItem disablePadding sx={{ display: "block" }}>
    <Link to={item.path} style={{ textDecoration: "none", color: "inherit" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {item.Icon}
        </ListItemIcon>
        <ListItemText
          primary={item.name}
          sx={{ opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
    </Link>
  </ListItem>
);

export default Sidebar;
