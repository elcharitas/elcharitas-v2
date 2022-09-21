import {
    Box,
    Container,
    Divider,
    Link,
    Stack,
    Typography,
} from "@mui/material";

export const Credits = () => (
    <>
        <Divider />
        <Container>
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2.5}
                justifyContent="space-between"
                sx={{ py: 3, textAlign: "center" }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { xs: "center", md: "start" },
                    }}
                >
                    &copy; 2015 - {new Date().getFullYear()}. &nbsp;
                    <Link href="https://github.com/elcharitas">
                        Jonathan Irhodia
                    </Link>
                    &nbsp; Proudly
                    <Box
                        sx={{ width: "1em", mx: 1 }}
                        component="svg"
                        viewBox="0 0 48 48"
                    >
                        <g>
                            <rect
                                x="16"
                                y="6"
                                fill="#E6E6E6"
                                width="16"
                                height="36"
                            ></rect>{" "}
                            <path
                                fill="#078754"
                                d="M48,40c0,1.105-0.895,2-2,2H32V6h14c1.105,0,2,0.895,2,2V40z"
                            ></path>
                            <path
                                fill="#078754"
                                d="M16,42H2c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h14V42z"
                            ></path>
                        </g>
                    </Box>
                    Nigerian.
                </Typography>
                <Stack
                    direction="row"
                    spacing={3}
                    justifyContent="center"
                    sx={{ fontSize: "small" }}
                >
                    <Link
                        href="https://blog.elcharitas.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Blog
                    </Link>
                    <Link
                        href="https://github.com/elcharitas"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </Link>
                    <Link
                        href={"https://twitter.com/iamelcharitas"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </Link>
                    <Link
                        href="https://t.me"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Say Hello!
                    </Link>
                </Stack>
            </Stack>
        </Container>
    </>
);
