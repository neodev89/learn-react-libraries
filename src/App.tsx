import React, { useEffect, useState, createContext } from 'react';
import * as yup from 'yup';
import './App.css';
import { Stack, Box } from '@mui/material';
import { useSxStylePrincipal } from './styleSxPrincipal/styleSxPrincipal';
import { useFormik } from 'formik';
import { fetcher } from './userAccess/listUserAccess';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PageLeft } from './pages/pageLeft';
import { PageRight } from './pages/pageRight';
import { RegistrazioneUtente } from './pages/RegistrazioneUtente';

const queryClient = new QueryClient();

export const MyContext = createContext<any>({});

interface valProps {
  id: number;
  email: string;
  password: string
}
export const valuesObj: valProps[] = [];

function App() {
  const sx = useSxStylePrincipal();

  const [utenteTrovato, setUtenteTrovato] = useState<boolean>(false);
  const [registrati, setRegistrati] = useState<boolean>(false);

  const Logout = () => {
    setUtenteTrovato(false);
  }

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Inserisci una email valida')
      .required('L\'email è obbligatoria'),
    password: yup
      .string()
      .min(8, 'La password deve essere lunga almeno 8 caratteri')
      .required('La password è obbligatoria'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const listUsers = await fetcher();
      const user = listUsers.find(user =>
        user.email === values.email && user.password === values.password
      );

      if (user) {
        const userWidthId = { ...user, id: user.id };
        valuesObj.push(userWidthId);
        console.log(valuesObj);
        setUtenteTrovato(true);
      } else {
        console.log(`Attenzione! Non sei registrato!`);
        setRegistrati(true);
      }

      resetForm();
    },
  });

  useEffect(() => {
    console.log(utenteTrovato);
    console.log(registrati);
  }, [utenteTrovato, registrati]);

  return (
    <MyContext.Provider value={{
      sx, utenteTrovato, setUtenteTrovato, formik, Logout, setRegistrati,
    }}>
      <div className="App">
        <Stack spacing={1} sx={sx.principal}>
          {registrati ?
            (
              <Box sx={sx.recordBox}>
                <RegistrazioneUtente />
              </Box>
            )
            :
            (
              <Box sx={sx.central}>
                <PageLeft />
                <PageRight />
              </Box>
            )}
        </Stack>
      </div>
    </MyContext.Provider>
  );
}

export default App;
