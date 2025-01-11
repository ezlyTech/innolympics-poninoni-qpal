import { 
  Box,
  Card, 
  CardActionArea, 
  Stack, 
  Typography,
} from "@mui/material"
import loginImg from '../../assets/images/02-login-img.png'

const Login = () => {
  return (
    <>
      <Stack spacing={2}>
        <Stack>
          <Typography 
            variant="h5" 
            fontWeight={600}
            sx={{
              color: '#4C484D'
            }}
          >
            Continue as
          </Typography>
          <Typography variant="body2" color="GrayText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Card variant="outlined">
            <CardActionArea>
              <Stack direction={'row'} spacing={2} p={2}>
                <Stack>
                  <Typography sx={{fontWeight: 'bold'}} color="primary">
                    Bossing (Recruiter)
                  </Typography>
                  <Typography color="GrayText" variant="subtitle2">
                    Continue as a recruiter. Find affordable talents within your area.
                  </Typography>
                </Stack>
              </Stack>
            </CardActionArea>
          </Card>
          <Card variant="outlined">
            <CardActionArea>
              <Stack direction={'row'} spacing={2} p={2}>
                <Stack>
                  <Typography sx={{fontWeight: 'bold'}} color="primary">
                    PAL (Job Seeker)
                  </Typography>
                  <Typography color="GrayText" variant="subtitle2">
                    Continue as a job seeker. Browse available job openings and view your progress.
                  </Typography>
                </Stack>
              </Stack>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>
    </>


  )
}

export default Login