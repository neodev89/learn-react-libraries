import { blue, green, red } from "@mui/material/colors";
import { sx } from "../sxFunc/sxFunc";

const personalBlue = 'rgb(0, 0, 85)';

export const useSxStylePrincipal = () => {
    return {
        principal: sx({
            position: 'relative',
            display: 'flex',
            height: '100%',
            width: '100%',
            padding: 0.5,
            border: '0.2rem solid blue',
        }),
        central: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            width: '100%',
            margin: '0.2rem',
        }),
        left: sx({
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'auto',
            minHeight: '10rem',
            width: '35%',
            border: '0.2rem solid red',
            margin: 0.2,
            backgroundColor: personalBlue,
        }),
        right: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            minHeight: '10rem',
            width: '65%',
            border: '0.2rem solid red',
            margin: 0.2,
            padding: 0.4,
        }),
        inputEr: sx({
            fontSize: 12,
            margin: '0.2rem',
            backgroundColor: 'white',
            borderRadius: '13px',
            border: '1px solid red',
        }),
        inputText: sx({
            fontSize: 12,
            margin: '0.2rem',
            backgroundColor: 'white',
            borderRadius: '13px',
            border: '1px solid transparent',
            '& .MuiOutlinedInput-root': {
                borderRadius: '14px',
                border: '1px solid transparent',
                '&:hover': {
                    border: '1px solid transparent',
                },
                '& .Mui-focused': {
                    border: '1px solid transparent',
                },
            },
        }),
        styleForm: sx({
            display: 'flex',
            flexDirection: 'column',
            height: '50%',
            width: '50%',
            padding: 1,
            border: '0.1rem solid green',
            borderRadius: '10px',
            backgroundColor: 'rgb(255, 255, 255)',
        }),
        recordBox: sx({
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            padding: 1,
            border: '0.4rem double red',
        }),
        recordForm: sx({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: 'calc(100% / 3)',
            padding: 1,
            margin: 0,
            border: '0.1rem solid green',
            borderRadius: '10px',
            backgroundColor: blue['A700'],
        }),
        inputSubmit: sx({
            height: '100%',
            width: '40%',
            backgroundColor: 'blue',
            color: 'white',
            fontWeight: 650,
            '&:hover': {
                backgroundColor: red['A700'],
                color: 'white',
            },
            '&:focus': {
                backgroundColor: green[500]
            }
        }),
        boxLogout: sx({
            height: 'auto',
            width: '6rem',
            fontSize: 16,
            fontWeight: 600,
        }),
        subBox: sx({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            border: '0.5rem double gold',
            height: '100%',
            width: '100%',

        }),
        styleTitle: sx({
            width: '100%',
            textAlign: 'center',
            fontWeight: 600,
            color: red[600],
            textShadow: '-2px 0 white',
        }),
    }
}