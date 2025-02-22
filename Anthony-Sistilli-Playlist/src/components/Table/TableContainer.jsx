import { Stack } from "@mui/material"
import BasicTable from "./BasicTable"
import DataTable from "./DataTable"

const TableContainer = () => {
  return (
    <Stack spacing={4}>
      <BasicTable />
      <DataTable/>
    </Stack>
  )
}
export default TableContainer