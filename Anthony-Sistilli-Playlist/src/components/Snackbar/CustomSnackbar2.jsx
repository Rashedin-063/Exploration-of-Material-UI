import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const SnackbarAlert = React.forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});


export default function CustomSnackbar2() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <Button variant='contained' onClick={handleClick}>
        Open Snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={3000} onClick={handleClose}>
        <SnackbarAlert onClick={handleClose} severity='success'>
          Form submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </div>
  );
}
