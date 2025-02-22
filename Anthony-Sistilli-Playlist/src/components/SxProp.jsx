import { Button } from "@mui/material"

const SxProp = () => {

  const test = true;

  return (
    <div>
      <Button
        variant='contained'
        sx={{
          width: '200px',
          p: 4,
          mr: 2,
          border: 5,
          borderColor: 'secondary.main',
        }}
      >
        Button 1
      </Button>
      <Button
        variant='outlined'
        sx={[
          {
            zIndex: 'tooltip',
            '&.MuiButton-root': {
              height: '120px',
            },
          },
          test && {
            border: 10
          }
        ]}
      >
        Button 1
      </Button>
    </div>
  );
}
export default SxProp