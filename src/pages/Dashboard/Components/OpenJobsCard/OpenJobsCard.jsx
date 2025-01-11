import { Box, Button, Card, Stack, Typography} from "@mui/material"
import palette from "../../../../theme/palette"

const OpenJobsCard = () => {
  return (
    <Card sx={{p: 2}}>
      <Stack sx={{mb: 2}}>  
        <Typography>
          Company Driver
        </Typography>
        <Stack direction='row'>
          <Typography>
            10 applicants
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography>
            1,000/day
          </Typography>
        </Stack>
      </Stack>
      <Button sx={{bgcolor: palette.primary.light, fontSize: 10 }}>
        View Details
      </Button>
    </Card>
  )
}

export default OpenJobsCard