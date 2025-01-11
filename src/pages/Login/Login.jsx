import { Avatar, Box, Card, Stack, Typography } from "@mui/material"

const Login = () => {
  return (
    <>
      <Box sx={{}} >
        <Typography sx={{ textAlign: 'center', paddingTop: 8}} >
          Tagline here...Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quidem doloribus quibusdam illo id ad eaque commodi, nihil eligendi.
        </Typography>
      </Box>
      <Stack sx={{marginTop: 16}} spacing={2}>
        <Stack>
          <Typography sx={{ fontWeight: 'bold' }}>
            Continue as
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Card sx={{ padding: 2 }}>
            <Stack direction={'row'} spacing={2}>
              <Avatar alt="Bossing" src="src\assets\react.svg"/>
              <Stack>
              <Typography sx={{fontWeight: 'bold'}}>Bossing</Typography>
              <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
              </Stack>
            </Stack>
          </Card>
          <Card sx={{ padding: 2 }}>
          <Stack direction={'row'} spacing={2}>
              <Avatar alt="Pal" src="src\assets\react.svg"/>
              <Stack>
              <Typography sx={{fontWeight: 'bold'}}>Pal</Typography>
              <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Stack>
    </>


  )
}

export default Login