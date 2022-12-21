import * as React from "react";
import { useTheme, Box, ButtonGroup, Button } from "@mui/material";
import {
  GridToolbarContainer,
  useGridApiContext,
  GridToolbarQuickFilter,
  GridToolbarColumnsButton,
  GridToolbarFilterButton
} from "@mui/x-data-grid-premium";

export const BuggyToolbar = ({
  specialActions,
  showQuickFilter = true,
  ...props
}) => {
  const apiRef = useGridApiContext();
  const theme = useTheme();

  const defaultActionButtonStyleProps = {
    borderRadius: 0,
    marginLeft: 1,
    marginBottom: 0.5,
    padding: theme.spacing(0.5, 1.5),
    lineHeight: "initial",
    textTransform: "initial",
    color: `inherit`,
    backgroundColor: theme.palette.grey[300],
    minHeight: theme.spacing(3.75),
    border: `none`,
    "&:hover": {
      backgroundColor: theme.palette.grey[400],
      border: "none"
    }
  };

  const downloadExcel = () => apiRef.current.exportDataAsExcel();
  const downloadCsv = () => apiRef.current.exportDataAsCsv();

  return (
    // Grid Toolbar Container is a flexbox with the QuickFilter off to the left and the button groups off to the right.
    // The QuickFilter and the block of button groups stack on smaller screens, with QuickFilter going full-width.
    <GridToolbarContainer
      sx={{
        display: "flex",
        flexDirection: "row",
        marginBottom: 1,
        gap: 1,
        padding: 0,
        alignItems: "flex-end",
        justifyContent: "space-between"
      }}
      {...props}
    >
      {showQuickFilter && <GridToolbarQuickFilter sx={{ flexGrow: 1 }} />}
      <Box display="flex" flexDirection="column" flexGrow="1">
        <ButtonGroup
          sx={{ gap: 1, justifyContent: "flex-end" }}
          aria-label="default datagrid action buttons"
        >
          <GridToolbarColumnsButton sx={{ ...defaultActionButtonStyleProps }} />
          <GridToolbarFilterButton sx={{ ...defaultActionButtonStyleProps }} />
          <Button
            sx={{ ...defaultActionButtonStyleProps }}
            size="small"
            //startIcon={<FileDownloadIcon />}
            onClick={downloadExcel}
          >
            Excel Export (testing)
          </Button>
          <Button
            sx={{ ...defaultActionButtonStyleProps }}
            size="small"
            //startIcon={<FileDownloadIcon />}
            onClick={downloadCsv}
          >
            CSV Export
          </Button>
        </ButtonGroup>
        {specialActions}
      </Box>
    </GridToolbarContainer>
  );
};
