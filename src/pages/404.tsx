import { FC } from "react";
import NextLink from "next/link";
import { Button, Stack, Typography } from "@mui/material";
import { IPage } from "src/types";

type TError = IPage;
const Page: FC<TError> = () => {
    return (
        <Stack
            sx={{ minHeight: "80vh" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography
                variant="h4"
                fontWeight="bold"
                fontFamily="Poppins"
                gutterBottom
            >
                Oops! 😭
            </Typography>
            <Typography sx={{ my: 1, width: 300, textAlign: "center" }}>
                I did all I could to prevent this from happening, but it seems
                like you've found a missing page.
            </Typography>
            <NextLink href="/" passHref>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ color: "white", textTransform: "capitalize" }}
                >
                    Go Home 🏠
                </Button>
            </NextLink>
        </Stack>
    );
};

Page.displayName = "Oops! This page is missing...";

export default Page;
