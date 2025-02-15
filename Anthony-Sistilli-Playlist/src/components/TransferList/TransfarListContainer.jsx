import { Stack } from "@mui/material"
import SelectAllTransferList from "./SelectAllTransferList"
import TransferList from "./TransferList"

const TransfarListContainer = () => {
  return (
    <Stack spacing={4}>
      <TransferList />
      <SelectAllTransferList/>
    </Stack>
  )
}
export default TransfarListContainer