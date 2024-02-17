import { Typography } from "@mui/material";
import React from "react";


export function MyParent({ name, children }: { name: string, children: React.ReactNode }) {
  return (
    <>
      <Typography>{name}</Typography>
      {children}
    </>
  );
}