import { FC, ReactNode } from "react";
import {
    Box,
    Card,
    CardTypeMap,
    CardContent,
    CardHeader,
    Divider,
} from "@mui/material";

interface IContent {
    header?: ReactNode;
    children: ReactNode;
}
export const Content: FC<IContent & CardTypeMap["props"]> = ({
    children,
    header,
    ...props
}) => (
    <Card {...props}>
        {typeof header === "string" ? (
            <>
                <CardHeader
                    title={header}
                    titleTypographyProps={{
                        sx: { fontSize: "1.2em", fontWeight: "bold" },
                    }}
                />
                <Divider />
            </>
        ) : (
            header
        )}
        <CardContent>
            <Box sx={{ position: "relative" }}>{children}</Box>
        </CardContent>
    </Card>
);
