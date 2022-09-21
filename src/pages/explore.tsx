import { FC, useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Content } from "src/components";
import { IPage } from "src/types";

type TExploreProjects = IPage;
const Page: FC<TExploreProjects> = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <>
            <Content
                sx={{
                    display: "flex",
                    minHeight: "300px",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#060606",
                }}
            >
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        mb: 3,
                    }}
                >
                    Explore{" "}
                    <Typography component="span" sx={{ font: "inherit" }}>
                        0+
                    </Typography>{" "}
                    Projects!
                </Typography>
                <Stack alignItems="center">
                    <TextField
                        color="primary"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            sx: {
                                borderRadius: "5em",
                                minWidth: "280px",
                            },
                            startAdornment: (
                                <Search fontSize="small" sx={{ mr: 1 }} />
                            ),
                        }}
                        placeholder="Filter by name, address, or category"
                        onChange={(e) => setSearch(e.currentTarget.value)}
                    />
                </Stack>
            </Content>
        </>
    );
};

Page.displayName = "Explore Projects";

export default Page;
