import { FC } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import NextProgress from "next-progress";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MainLayout } from "src/layout";
import { EColor } from "src/types";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: EColor.Primary,
        },
    },
    typography: {
        fontFamily: "Nunito",
    },
});

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <NextProgress color={EColor.Primary} />
        <MainLayout>
            <Head>
                <title>{`${Component.displayName} | elcharitas.dev`}</title>
            </Head>
            <Component {...pageProps} />
        </MainLayout>
    </ThemeProvider>
);

export default App;
