import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Stack } from "@mui/material"
import { useState } from "react";

const MuiDialog = () => {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Stack>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogTitle id='dialog-title'>
          Submit the test?
        </DialogTitle>
        <DialogContent id="dialog-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="outlined" autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
   </Stack>
  )
}
export default MuiDialog