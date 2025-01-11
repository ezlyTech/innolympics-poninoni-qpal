import { Box, Button, Card, Stack, Typography } from "@mui/material"
import palette from "../../../../theme/palette"

const PostCard = () => {
  return (
    <Card sx={{p: 2}}>
      <Stack>
        <Stack sx={{mb: 2}}>
          <Stack direction='row' sx={{fontSize: 12, mb: 1}} >
            <Typography>
              Mechanic
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography>
              1 day ago
            </Typography>
          </Stack>
          <Typography sx={{fontSize: 14}}>
            Alan Smith applied to your post
          </Typography>
        </Stack>
      </Stack>
      <Button sx={{bgcolor: palette.primary.light, fontSize: 10 }}>
        View Details
      </Button>
    </Card>
  )
}

export default PostCard