import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { memo } from 'react'

export const typedMemo: <T>(_: T) => T = memo


export const sx = (props: SxProps<Theme>) => props;