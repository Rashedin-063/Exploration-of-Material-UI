import { Button, Snackbar, Stack, Alert } from "@mui/material"
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />
})


const MuiSnackbar = () => {

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => { 
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Stack>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message='form submitted successfully'
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      /> */}
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <SnackbarAlert onClose={handleClose} severity='error'>
          Form submitted successfully
        </SnackbarAlert>
        </Snackbar>
    </Stack>
  );
}
export default MuiSnackbar