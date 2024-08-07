import { Button, ButtonProps } from "@mui/material";

export const CustomBtn = (props: ButtonProps) => {
    return (
        <Button {...props}>{props.children}</Button>
    )
}