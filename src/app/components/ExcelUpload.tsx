"use client";

import { TextField } from "@mui/material";
import { useState } from "react";
import * as XLSX from "xlsx";
import { BasicTable } from "./BasicTable";

export function ExcelUpload() {
  const [data, setData] = useState<any>([]);
  const handleFileUpload = (e: any) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);

    reader.onload = (e) => {
      const data = e.target?.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet, {range: 2, header: ["Home", "Separator", "Away", "GolsHome", "GolsAway"]});
      setData(parsedData);
      console.log(parsedData);
      
    }
  }
  return (
    <>
      <TextField type="file" onChange={handleFileUpload} />
      <BasicTable data={data} />
    </>
  )
}