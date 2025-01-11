import { Box, Button, Stack, Typography } from "@mui/material"
import palette from "../../../../theme/palette"

const MetricCard = () => {
  return (
    <Stack 
      sx={{ 
        bgcolor: palette.primary.light, 
        padding: 2, 
        borderRadius: 2, 
        mt: 2,
        }}
        direction='row'
        > 
      <Stack>
        <Typography sx={{ fontSize: 32, fontWeight: 'semibold' }}>
          29
        </Typography>
        <Typography>
          Open Jobs
        </Typography>
      </Stack>
      <Box sx={{ flexGrow: 1 }} />
      <Button>
        View All
      </Button>
    </Stack>
  )
}

export default MetricCard