import { useContext } from "react"
import { MyContext } from "../App"
import { Box, Stack } from "@mui/material"
import { InputText } from "../widgets/InputText"
import { Submit } from "../widgets/Submit"

export const PageLeft = () => {
  const { sx, utenteTrovato, formik } = useContext(MyContext);

  return (
    <Box sx={sx.left}>
      {!utenteTrovato &&
        <Box component={'form'} sx={sx.styleForm} onSubmit={(e: React.FormEvent<HTMLFormElement>) => formik.handleSubmit(e)}>
          <InputText
            type={'email'}
            variant={'outlined'}
            name="email"
            sx={formik.values.email ? sx.inputEr : sx.inputText}
            placeholder={formik.errors.email ? '*email obbligatoria' : 'email'}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <InputText
            type={'password'}
            variant={'outlined'}
            name="password"
            sx={formik.values.password ? sx.inputEr : sx.inputText}
            placeholder={formik.errors.password ? '*password obbligatoria' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
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
        </Box>}
    </Box>
  )
}