import { Stack, Typography } from "@mui/material";

export default function HomePageBody()
{
    return (
        <>
        <Typography>Body starts here</Typography>
        <Stack height={"100vw"} sx={{backgroundColor:"lightgreen"}}></Stack>
        <Stack height={"100vw"} sx={{backgroundColor:"pink"}}></Stack>
        <Stack height={"100vw"} sx={{backgroundColor:"lightblue"}}></Stack>
        </>
    )
}