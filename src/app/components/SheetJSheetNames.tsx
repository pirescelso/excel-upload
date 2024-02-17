"use client";

import React from "react";
import * as XLSX from "xlsx"

export function SheetJSheetNames() {
    const [names, setNames] = React.useState([]);
    React.useEffect(() => { (async() =>{
      /* parse workbook */
      const url = "https://sheetjs.com/data/PortfolioSummary.xls";
      const file = await (await fetch(url)).arrayBuffer();
      const workbook = XLSX.read(file) as any;
      /* display sheet names */
      setNames(workbook.SheetNames);
    })(); }, []);
    return ( <>
      <b>Sheet Names</b><br/>
      <ol start={0}>{names.map(n => (<li key={0}>{n}</li>))}</ol>
    </> )
  }