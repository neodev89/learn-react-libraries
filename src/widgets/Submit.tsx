import { Theme } from "@emotion/react";
import { SxProps, Button } from "@mui/material";
import React, { ReactNode } from "react";


type ButtonType = 'button' | 'submit' | 'reset';

interface SubmitProps {
    sx: SxProps<Theme>;
    type: ButtonType;
    children: ReactNode;
}

export const Submit = ({ sx, type, children }: SubmitProps) => {
    return (
        <Button
            sx={sx}
            type={type}
        >
            {children}
        </Button>
    )
}