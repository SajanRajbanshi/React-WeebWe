import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePageBody from "../components/HomePageBody";
import { Stack } from "@mui/material";

export default function Home()
{
    return ( <>
        <Header></Header>
        <Stack sx={{marginTop:{xs:"60px",sm:"100px"}}}>
            <HomePageBody></HomePageBody>
        </Stack>
        <Footer></Footer>
    </>)
   
}