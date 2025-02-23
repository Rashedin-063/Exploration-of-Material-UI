import { Stack } from "@mui/material"
import BasicTable from "./BasicTable"
import DataTable from "./DataTable"
import EnhancedTable from "./EnhancedTableHead"
import DenseTable from "./DenseTable"
import CustomizedTables from "./CustomizedTable"
import CustomPaginationActionsTable from "./CustomPaginationTable"

const TableContainer = () => {
  return (
    <Stack spacing={4} mt={4}>
      <BasicTable />
      <DataTable />
      <DenseTable/>
      <EnhancedTable />
      <CustomizedTables />
      <CustomPaginationActionsTable/>
    </Stack>
  )
}
export default TableContainer