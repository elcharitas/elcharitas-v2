import React, { FC, ReactNode } from "react";
import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Navbar } from "./Navbar";
import { Credits } from "./Credits";

const LayoutRoot = styled("div")(() => ({
    display: "flex",
    flex: "1 1 auto",
    maxWidth: "100%",
    paddingTop: 64,
}));

interface IMainLayout {
    children: ReactNode;
}
export const MainLayout: FC<IMainLayout> = ({ children }) => (
    <>
        <LayoutRoot>
            <Box
                sx={{
                    display: "flex",
                    flex: "1 1 auto",
                    flexDirection: "column",
                    width: "100%",
                    minHeight: "85vh",
                    paddingTop: "8px",
                }}
            >
                <Container>{children}</Container>
            </Box>
        </LayoutRoot>
        <Navbar />
        <Credits />
    </>
);
