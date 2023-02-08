import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Avatar,
  Box,
  Card,
  Chip,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import { ColorModeContext, tokens } from "../../theme";
import { useContext, useRef, useState, useEffect } from "react";
import { ClickAwayListener } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth";

const Topbar = () => {

  const dispatch = useDispatch();

  const theme = useTheme();
  console.log(theme.palette.primary.light);
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const anchorRef = useRef(null);

  const handleLogout = () =>{
    dispatch(logout());
  };


  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*Seacrh bar*/}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      {/*Settings section*/}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>

        {/*Profile section*/}

        <Chip
          sx={{
            height: "48px",
            alignItems: "center",
            borderRadius: "27px",
            transition: "all .2s ease-in-out",
            borderColor: colors.berry[100],
            backgroundColor: colors.berry[100],
            '&[aria-controls="menu-list-grow"], &:hover': {
              borderColor: colors.berry[200],
              background: `${colors.berry[200]}!important`,
            },
          }}
          icon={
            <Avatar
              src={`../../assets/user.jpg`}
              sx={{
                height: "35px",
                width: "auto",
                margin: "8px 0 8px 8px !important",
                cursor: "pointer",
              }}
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
            />
          }
          label={
            <IconButton>
              <SettingsOutlinedIcon
                size="1.5rem"
                color={theme.palette.primary.main}
              />
            </IconButton>
          }
          variant="outlined"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          color="primary"
        />

        {/* Box for settings and log out  */}

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          popperOptions={{
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, 14],
                },
              },
            ],
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <Card>
                <Box sx={{ p: 2 }}>
                  <Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Typography
                        component="span"
                        variant="h4"
                        sx={{ fontWeight: 400 }}
                      >
                        Dr. Sergio Brito
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2">Urologo</Typography>
                  </Stack>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Divider />
                  <List
                    component="nav"
                    sx={{
                      width: "100%",
                      maxWidth: 350,
                      minWidth: 300,
                      borderRadius: "10px",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        borderRadius: "10px",
                      }}
                    >
                      <ListItemIcon>
                        <SettingsOutlinedIcon stroke={1.5} size="1.3rem" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2">
                            Account Settings
                          </Typography>
                        }
                      />
                    </ListItemButton>
                    <ListItemButton
                      sx={{
                        borderRadius: "10px",
                      }}
                      onClick={handleLogout}
                    >
                      <ListItemIcon>
                        <LogoutIcon stroke={1.5} size="1.3rem" />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="body2">Logout</Typography>
                        }
                      />
                    </ListItemButton>
                  </List>
                </Box>
              </Card>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </Box>
    </Box>
  );
};

export default Topbar;
