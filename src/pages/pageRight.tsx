import { useContext } from "react"
import { MyContext } from "../App"
import { Box } from "@mui/material";
import { CustomBtn } from "../widgets/CustomBtn";


export const PageRight = () => {
    const { sx, utenteTrovato, Logout } = useContext(MyContext);
    return (
        <Box sx={sx.right}>
              {utenteTrovato &&
              <Box component={'div'} sx={{
                position: 'relative',
                display: 'flex',
                fleDirection: 'row',
                justifyContent: 'right',
                height: '4rem',
                width: '100%',
                border: '0.4rem double gold',
              }}>
                <CustomBtn
                  variant={'contained'}
                  size={'medium'}
                  sx={sx.boxLogout}
                  onClick={Logout}
                >
                  Logout
                </CustomBtn>
              </Box>}
              <Box sx={sx.subBox}>

              </Box>
            </Box>
    )
}