import { Button, styled, Typography } from "@mui/material"

const TypographyContainer = () => {

  const MyCustomButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(4)
  }))

  return (
    <div>
      <Typography my={4} variant='myVariant' component='h4'>
        This is customized typography
      </Typography>
      <Typography my={4} variant='h4' component='h4' sx={{color: 'myCustomColor.superLight'}}>
        This is customized colored typography
      </Typography>
      <MyCustomButton color="secondary" variant="contained">
        Customized Button
      </MyCustomButton>
    </div>
  );
}
export default TypographyContainer