import { FC } from "react";
import {
    AppBar,
    Button,
    Container,
    Box,
    Link,
    Typography,
    Toolbar,
    Tooltip,
    Stack,
    styled,
    Avatar,
} from "@mui/material";
import { Coffee } from "@mui/icons-material";
import NextLink from "next/link";
import { getGravatar } from "src/utils";
import Image from "next/image";

const NavbarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: "transparent",
    boxShadow: theme.shadows[3],
}));

export const Navbar: FC = () => (
    <>
        <NavbarRoot>
            <Toolbar
                disableGutters
                sx={{
                    minHeight: 60,
                    left: 0,
                    px: 2,
                    justifyContent: "space-around",
                    backgroundColor: "#111",
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                    }}
                >
                    <Box sx={{ lineHeight: 0, position: "relative" }}>
                        <NextLink href="/" passHref>
                            <Tooltip title="elcharitas.dev">
                                <Typography
                                    sx={{
                                        ml: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                    }}
                                >
                                    <Image
                                        src={getGravatar(
                                            process.env.NEXT_PUBLIC_EMAIL
                                        )}
                                        width="16px"
                                        height="16px"
                                        style={{
                                            borderRadius: "50%",
                                        }}
                                    />{" "}
                                    &nbsp; elcharitas
                                    <Typography
                                        component="span"
                                        color="primary"
                                        fontWeight="bold"
                                    >
                                        .dev
                                    </Typography>
                                </Typography>
                            </Tooltip>
                        </NextLink>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />

                    <Stack spacing={2} direction="row" alignItems="center">
                        <Stack direction="row" spacing={1}>
                            <Tooltip title="">
                                <Link href="https://buymeacoffee.com/elcharitas">
                                    <Button
                                        sx={{ textTransform: "capitalize" }}
                                        variant="outlined"
                                    >
                                        <Typography
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                fontSize: "0.95em",
                                            }}
                                        >
                                            <Coffee
                                                sx={{
                                                    fontSize: "1.4em",
                                                    mr: 1,
                                                }}
                                            />
                                            Buy Me a Coffee
                                        </Typography>
                                    </Button>
                                </Link>
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Container>
            </Toolbar>
        </NavbarRoot>
    </>
);
