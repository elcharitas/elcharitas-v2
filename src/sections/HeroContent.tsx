import { FC } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Content, ProgressButton } from "src/components";
import { AddBox } from "@mui/icons-material";
import { getGravatar } from "src/utils";

export const HeroContent: FC = () => (
    <Stack
        spacing={1}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{ py: 5 }}
    >
        <Content
            header={
                <Stack direction="row" justifyContent="center" sx={{ pt: 3 }}>
                    <Avatar
                        src={getGravatar(process.env.NEXT_PUBLIC_EMAIL)}
                        sx={{ width: 80, height: 80, borderRadius: 10 }}
                    />
                </Stack>
            }
            sx={{ maxWidth: 380 }}
        >
            <Typography variant="h6" align="justify">
                Jonathan Irhodia
            </Typography>
            <Typography align="justify" fontSize="sm">
                React Frontend Developer
            </Typography>
            <Typography align="justify" fontSize="sm">
                {process.env.NEXT_PUBLIC_EMAIL}
            </Typography>
        </Content>
        <Box sx={{ display: { xs: "none", md: "flex" }, p: 8 }}>&nbsp;</Box>
    </Stack>
);
