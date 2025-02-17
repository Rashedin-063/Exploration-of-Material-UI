// import LongTextSnackbar from "./LongTextSnackbar"
import CustomizedSnackbars from "./CustomizedSnackbar"
import CustomSnackbar2 from "./CustomSnackbar2"
import SimpleSnackbar from "./SimpleSnackbar"
import TransitionsSnackbar from "./TransitionSnackbar"

const SnackbarContainer = () => {
  return (
    <div>
      <SimpleSnackbar />
      {/* <LongTextSnackbar/> */}
      <TransitionsSnackbar />
      <CustomizedSnackbars />
      <CustomSnackbar2/>
    </div>
  )
}
export default SnackbarContainer