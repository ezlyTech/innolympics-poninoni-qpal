import { Box, Button, Card, Stack, Typography} from "@mui/material"
import palette from "../../../../theme/palette"

const OpenJobsCard = ({
  jobTitle,
  applicants,
  salary,
}) => {
  return (
    <Card sx={{p: 2}}>
      <Stack sx={{mb: 2}}>  
        <Typography variant="subtitle1" fontWeight={600}>
          {jobTitle}
        </Typography>
        <Stack direction='row'>
          <Typography variant="subtitle2" color="GrayText">
            {applicants} applicant(s)
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="subtitle2" color="GrayText">
            ₱ {salary}/day
          </Typography>
        </Stack>
      </Stack>
      <Button 
        size="small"
        sx={{
          bgcolor: palette.primary.light, 
          fontSize: 10 
        }}
      >
        View Details
      </Button>
    </Card>
  )
}

export default OpenJobsCard