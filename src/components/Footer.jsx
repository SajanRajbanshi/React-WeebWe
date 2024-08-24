import { Stack, Typography, Box } from "@mui/material";
import facebookIcon from "../assets/facebookIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack
          direction={"column"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"30%"}
        >
          <Typography>Socials</Typography>
          <Stack direction={"row"} gap={{ xs: 0.5, sm: 1 }}>
            <a href="https://www.facebook.com/profile.php?id=61551927054241" target="_blank">
            <Box
              src={facebookIcon}
              component={"img"}
              sx={{
                width: {
                  xs: "30px",
                  sm: "40px",
                },
                height: {
                  xs: "30px",
                  sm: "40px",
                },
              }}
            ></Box>
            </a>
            <a href="https://www.instagram.com/weebwe_/" target="_blank">
            <Box
              src={instagramIcon}
              component={"img"}
              sx={{
                width: {
                  xs: "30px",
                  sm: "40px",
                },
                height: {
                  xs: "30px",
                  sm: "40px",
                },
              }}
            ></Box>
            </a>
          </Stack>
        </Stack>
        <Link to={"/"} style={{textDecoration:"none",color:"black"}}>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            src={logo}
            component={"img"}
            sx={{
              width: {
                xs: "60px",
                sm: "100px",
              },
              height: {
                xs: "60px",
                sm: "100px",
              },
            }}
          ></Box>
          <Typography
            sx={{
              fontSize: { xs: "30px", sm: "50px" },
              fontWeight: "550",
              fontFamily: "Baskervville SC",
            }}
          >
            WeebWe
          </Typography>
        </Stack>
        </Link>
        
        <Stack
          direction={"column"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"30%"}
        >
        <Link to={"/support"} style={{textDecoration:"none",color:"black"}}>
          <Typography>Support</Typography>
        </Link>
        <Link to={"/terms&conditions"} style={{textDecoration:"none",color:"black"}}>

          <Typography>Terms & Conditions</Typography>
        </Link>
        <Link to={"/about"} style={{textDecoration:"none",color:"black"}}>
          <Typography>About</Typography>
        </Link>
        </Stack>
      </Stack>
    </>
  );
}
