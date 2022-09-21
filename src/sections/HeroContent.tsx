import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Content, ProgressButton } from "src/components";

export const HeroContent: FC = () => (
    <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent={{ xs: "center", md: "space-between" }}
        sx={{ py: 20 }}
    >
        <Box sx={{ display: { xs: "none", md: "flex" }, p: 8 }}>&nbsp;</Box>
    </Stack>
);
