import { Stack } from "@mui/material"
import BasicTable from "./BasicTable"
import DataTable from "./DataTable"
import EnhancedTable from "./EnhancedTableHead"

const TableContainer = () => {
  return (
    <Stack spacing={4}>
      <BasicTable />
      <DataTable />
      <EnhancedTable/>
    </Stack>
  )
}
export default TableContainer