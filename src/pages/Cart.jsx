import Header from "../components/Header";
import Footer from "../components/Footer";
import {Typography,Stack} from "@mui/material";

export default function Cart()
{
    return (
        <>
        <Header></Header>
        <Stack sx={{marginTop:{xs:"60px",sm:"100px"}}}>
        <Typography>This is Cart</Typography>
        </Stack>
        <Footer></Footer>
        </>
    )
}