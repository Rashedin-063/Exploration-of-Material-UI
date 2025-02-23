import { Stack } from "@mui/material"
import BasicTable from "./BasicTable"
import DataTable from "./DataTable"
import EnhancedTable from "./EnhancedTableHead"
import DenseTable from "./DenseTable"
import CustomizedTables from "./CustomizedTable"
import CustomPaginationActionsTable from "./CustomPaginationTable"
import StickyHeadTable from "./StickyHeadTable"
import ColumnGroupingTable from "./ColumnGroupingTable"
import CollapsibleTable from "./CollapsibleTable"
import SpanningTable from "./SpanningTable"
import ReactVirtualizedTable from './VirtuosoTable';

const TableContainer = () => {
  return (
    <Stack spacing={4} mt={4}>
      <BasicTable />
      <DataTable />
      <DenseTable/>
      <EnhancedTable />
      <CustomizedTables />
      <CustomPaginationActionsTable />
      <StickyHeadTable />
      <ColumnGroupingTable />
      <CollapsibleTable />
      <SpanningTable />
      <ReactVirtualizedTable/>
    </Stack>
  )
}
export default TableContainer