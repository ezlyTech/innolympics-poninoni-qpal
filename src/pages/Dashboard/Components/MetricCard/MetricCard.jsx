import { Box, Button, Stack, Typography } from "@mui/material"
import palette from "../../../../theme/palette"

const MetricCard = ({
  number,
  label,
}) => {
  return (
    <Stack 
      sx={{ 
        bgcolor: palette.primary.light, 
        padding: 2, 
        borderRadius: 2, 
        mt: 2,
        width: '100%'
      }}
      direction='row'
      justifyContent='space-between'
      alignItems='start'
    > 
      <Stack>
        <Typography 
          variant="h5" 
          color="primary" 
          fontWeight={600}
        >
          {number}
        </Typography>
        <Typography 
          variant="subtitle2" 
          color="GrayText"
        >
          {label}
        </Typography>
      </Stack>
      {/* <Button
        size="small"
      >
        View All
      </Button> */}
    </Stack>
  )
}

export default MetricCard