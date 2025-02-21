import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';

function SlideTransition(props) {
  return <Slide {...props} direction='right' />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

export default function TransitionsSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const [open, setOpen] = React.useState(false)

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };


  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };


    const handleClick2 = () => {
      setOpen(true);
    };

  const handleClose2 = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button> */}

      {/* <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message='I love snacks'
        key={state.Transition.name}
        autoHideDuration={1200}
      /> */}
      <Button variant='contained' color='success' onClick={handleClick2}>
        Open
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose2}
        TransitionComponent={SlideTransition}
        message='I love snacks'
        autoHideDuration={1200}
      />
    </div>
  );
}
