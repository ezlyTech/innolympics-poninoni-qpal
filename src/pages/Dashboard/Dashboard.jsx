import { 
  Stack, 
  Typography,
} from "@mui/material"

const Dashboard = () => {
  return (
    <Stack 
        sx={{
          p: 2,
          background: 'linear-gradient(180deg, #AA3CC9 0%, #541D63 100%)',
          color: 'white',
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          }}>
        <Typography sx={{fontSize: 14}}>
          Welcome bossing,
        </Typography>
        <Typography
          sx={{
            pb: 4,
            fontSize: 20,
            fontWeight: 'semibold'
          }}>
          John Doe
        </Typography>
      </Stack>
  )
}

export default Dashboard