// app/components/Navbar.js

"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0', boxShadow: '0 1px 12px 0 rgba(204, 204, 204, 0.52)' }} >
      <Toolbar className="flex justify-between py-4 px-[13px]">
        <Image
          src="/hedamo-logo.webp"
          alt="Hedamo Logo"
          width={100}
          height={40}
          priority
          className="h-10 w-auto"
        />

        <Box className="flex items-center gap-4 py-[6px] px-[22px]"> 
          <Box className="hidden md:flex gap-7"> 
            {["Home", "About", "Products", "Packages", "Contact"].map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#222227",
                  fontWeight: "medium",
                  fontSize: "15px",
                  textTransform: 'none',
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          
          <IconButton sx={{ color: '#222227' }}>
            <PersonOutlineIcon />
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
}