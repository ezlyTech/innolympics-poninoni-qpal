import { Stack, Typography } from "@mui/material"

const MetricCard = () => {
  return (
    <Stack sx={{ bgcolor: 'lightblue', padding: 2, height: 100, width: 100, borderRadius: 4 }}>
      <Typography sx={{ fontSize: 24 }}>
        29
      </Typography>
      <Typography>
        Open Jobs
      </Typography>
    </Stack>
  )
}

export default MetricCard