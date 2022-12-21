import * as React from "react";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { rows, columns } from "./data";
import { BuggyToolbar } from "./BuggyToolbar";

export default function ExcelExport() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGridPremium
        rows={rows}
        columns={columns}
        components={{
          Toolbar: BuggyToolbar
        }}
      />
    </div>
  );
}
