// import LongTextSnackbar from "./LongTextSnackbar"
import SimpleSnackbar from "./SimpleSnackbar"
import TransitionsSnackbar from "./TransitionSnackbar"

const SnackbarContainer = () => {
  return (
    <div>
      <SimpleSnackbar />
      {/* <LongTextSnackbar/> */}
      <TransitionsSnackbar/>
    </div>
  )
}
export default SnackbarContainer