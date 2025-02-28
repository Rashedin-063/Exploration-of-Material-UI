import { Stack } from "@mui/material"
import BasicBreadcrumbs from "./BasicBreadcrumb"
import ActiveLastBreadcrumb from "./ActiveLastBreadcrum"
// import CustomSeparator from "./CustomSeparator"
import CollapsedBreadcrumbs from "./CollapsedBreadcrumb"

const BreadcrumbContainer = () => {
  return (
    <Stack spacing={2}>
      <BasicBreadcrumbs />
      <ActiveLastBreadcrumb />
      {/* <CustomSeparator/> */}
      <CollapsedBreadcrumbs/>
    </Stack>
  )
}
export default BreadcrumbContainer