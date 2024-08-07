import { Theme } from "@emotion/react";
import { SxProps, TextField } from "@mui/material";

type TypeVariant = 'outlined' | 'filled' | 'standard';

interface InputTextProps {
    type: string;
    sx: SxProps<Theme>;
    variant: TypeVariant;
    name: string;
    placeholder: string;
    value: string;
    error?: boolean;
    helperText?: string | false;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({ type, sx, variant, name, placeholder, value, error, helperText, onChange, ...other }: InputTextProps) => {
    return (
        <TextField
            type={type}
            sx={sx}
            variant={variant}
            name={name}
            placeholder={placeholder}
            value={value}
            error={error}
            helperText={helperText}
            onChange={onChange}
            {...other}
        />
    )
}
