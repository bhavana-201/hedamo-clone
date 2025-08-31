// app/theme/theme.js
'use client';
import { createTheme } from '@mui/material/styles';
import { Figtree } from 'next/font/google';

const figtree = Figtree({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: figtree.style.fontFamily,
  },
});

export default theme;