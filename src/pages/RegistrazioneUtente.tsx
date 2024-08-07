import { Box, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { MyContext, valuesObj } from "../App";
import { InputText } from "../widgets/InputText";
import { Submit } from "../widgets/Submit";
import { useFormik } from "formik";
import * as yup from 'yup';

export const RegistrazioneUtente = () => {
    const { sx, setUtenteTrovato, setRegistrati } = useContext(MyContext);

    const validationSchema = yup.object({
        email: yup
            .string()
            .email('*inserisci una email valida')
            .required('L\'email è obbligatoria'),
        password: yup
            .string()
            .min(8, ("La password dev'essere lunga almeno 8 caratteri"))
            .required('La password è obbligatoria'),
    });

    let currentId = 1;

    const incrementId = () => {
        return currentId++;
    };

    interface User {
        id: number;
        email: string;
        password: string;
    }

    const formik1 = useFormik<User>({
        initialValues: {
            id: -1,
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            const user: User = {
                id: incrementId(),
                email: values.email,
                password: values.password,
            };
            valuesObj.push(user);
            console.log(valuesObj);
            setRegistrati(false);
            setUtenteTrovato(true);
            resetForm();
        }
    });

    return (
        <Box component={'form'} sx={sx.recordForm} onSubmit={formik1.handleSubmit}>
            <Typography variant={'h3'} sx={sx.styleTitle}>Utente non registrato</Typography>
            <InputText
                type={'email'}
                variant={'outlined'}
                name="email"
                sx={formik1.values.email ? sx.inputEr : sx.inputText}
                placeholder={formik1.errors.email ? '*email obbligatoria' : 'email'}
                value={formik1.values.email}
                onChange={formik1.handleChange}
                error={formik1.touched.email && Boolean(formik1.errors.email)}
                helperText={formik1.touched.email && formik1.errors.email}
            />
            <InputText
                type={'password'}
                variant={'outlined'}
                name="password"
                sx={formik1.values.password ? sx.inputEr : sx.inputText}
                placeholder={formik1.errors.password ? '*password obbligatoria' : 'password'}
                value={formik1.values.password}
                onChange={formik1.handleChange}
                error={formik1.touched.password && Boolean(formik1.errors.password)}
                helperText={formik1.touched.password && formik1.errors.password}
            />
            <Stack spacing={1} sx={{
                flexDirection: 'row',
                justifyContent: 'right',
                height: '2rem',
                width: '100%',
                margin: '0.2rem',
                padding: '0 0.5rem',
            }}>
                <Submit
                    sx={sx.inputSubmit}
                    type={'submit'}
                >
                    Invia
                </Submit>
            </Stack>
        </Box>
    );
};
