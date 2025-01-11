import { Box, Button, Card, Stack, Typography } from "@mui/material"
import palette from "../../../../theme/palette"

const PostCard = ({
  jobTitle,
  duration,
  applicantName,
}) => {
  return (
    <Card sx={{p: 2}}>
      <Stack>
        <Stack sx={{mb: 2}}>
          <Stack direction='row' justifyContent="space-between">
            <Typography variant="subtitle2" color="GrayText">
              {jobTitle}
            </Typography>
            <Typography variant="subtitle2" color="GrayText">
              {duration}
            </Typography>
          </Stack>
          <Typography variant="subtitle1" fontWeight={600}>
            {applicantName} applied to your post
          </Typography>
        </Stack>
      </Stack>
      <Button 
        sx={{
          bgcolor: palette.primary.light, 
          fontSize: 10 
        }}
        size="small"
      >
        View Details
      </Button>
    </Card>
  )
}

export default PostCard