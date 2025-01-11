import { Box, Button, Stack, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import MetricCard from "./Components/MetricCard/MetricCard";
import PostCard from "./Components/PostCard/PostCard";
import OpenJobsCard from "./Components/OpenJobsCard/OpenJobsCard";

const Dashboard = () => {
  return (
    <>
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
      <Button 
        startIcon={<AddIcon />}
        sx={{
          mx: 2, 
          mt: -2, 
          width: '90%',
          bgcolor: 'white',
          borderRadius: 14,
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.16)',
          }}>
          Post a job...
      </Button>
      <MetricCard />
      <MetricCard />
      <Stack spacing={2}>
        <Stack direction='row' sx={{alignItems: 'center', px: 2, pt: 2}}>
          <Typography>
            Recent Activities
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button>More</Button>
        </Stack>
        <PostCard />
        <PostCard />
      </Stack>
      
      <Stack spacing={2}>
        <Stack direction='row' sx={{alignItems: 'center', px: 2, pt: 2}}>
          <Typography>
            Your open jobs
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button>More</Button>
        </Stack>
        <OpenJobsCard />
        <OpenJobsCard />
      </Stack>
    </>
  )
}

export default Dashboard