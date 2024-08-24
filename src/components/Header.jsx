import { IconButton, Stack, Typography, Box, Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
export default function Header() {
  const navigate = useNavigate();

  function handleCartButtonClick() {
    navigate("/cart");
  }

  return (
    <>
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        position={"fixed"}
        top={0}
        sx={{
          backgroundColor: "white",
          padding: { xs: "5px", sm: "8px", md: "12px" },
          width:"100%",
          boxSizing:"border-box"
        }}
        alignItems={"center"}
      >
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "50px" },
                fontWeight: "550",
                fontFamily: "Baskervville SC",
              }}
            >
              WeebWe
            </Typography>
            <Box
              src={logo}
              component={"img"}
              sx={{
                width: {
                  xs: "50px",
                  sm: "60px",
                },
                height: {
                  xs: "50px",
                  sm: "60px",
                },
              }}
            ></Box>
          </Stack>
        </Link>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ xs: 0, sm: 2 }}
        >
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <Badge badgeContent={10} color="primary">
            <IconButton onClick={handleCartButtonClick}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </Badge>
          <IconButton>
            <MenuOutlinedIcon />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
