import { Box, Paper } from "@mui/material"
import { Masonry } from "@mui/lab"

const heights = [200, 250, 150, 300, 100, 200, 250, 150, 300, 100];

const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, height: 400 }}>
      <Masonry columns={4}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height,
              border: '1px solid',
            }}
          >
            Item {index + 1}
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}
export default MuiMasonry