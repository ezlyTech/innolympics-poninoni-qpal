import { Box, Button, Tab, Tabs, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as React from 'react';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const JobDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Stack 
        sx={{
          p: 2,
          background: 'linear-gradient(180deg, #AA3CC9 0%, #541D63 100%)',
          color: 'white',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          }}>
        <Typography sx={{fontSize: 14}}>
          JP #0001
        </Typography>
        <Typography
          sx={{
            pb: 1,
            fontSize: 20,
            fontWeight: 'semibold'
          }}>
          Jeepney Driver
        </Typography>
      </Stack>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Applicants" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Stack spacing={2}>
          <Stack direction='row' spacing={2} sx={{alignItems: 'center', pt: 2}}>
              <img src="src\assets\images\peso_icon.png" alt="peso" />
              <Stack>
                <Typography>
                  Salary
                </Typography>
                <Typography>
                  ₱1000 / day
                </Typography>
              </Stack>
          </Stack>
          <Stack direction='row' spacing={2} sx={{alignItems: 'center', pb: 2}}>
              <img src="src\assets\images\loc_icon.png" alt="loc" />
              <Stack>
                <Typography>
                  Location
                </Typography>
                <Typography>
                  Cavite, Philippines
                </Typography>
              </Stack>
          </Stack>
          <Stack spacing={1}>
            <Typography sx={{color: 'primary.main'}}>
              Job Description
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sed quis voluptate officia nemo dignissimos, animi possimus! Eius consectetur corrupti rerum! Est ea laboriosam architecto magni quaerat sed voluptas ab.
            </Typography>
            <Stack direction='row'>
              <CheckCircleIcon fontSize='small'/>
              <Typography>
              Ipsa quae ab illo inventore  
              </Typography>
            </Stack>
            <Stack direction='row'>
              <CheckCircleIcon fontSize='small'/>
              <Typography>
              Ipsa quae ab illo inventore  
              </Typography>
            </Stack>
            <Stack direction='row'>
              <CheckCircleIcon fontSize='small'/>
              <Typography>
              Ipsa quae ab illo inventore  
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={1} sx={{py: 2}}>  
            <Typography sx={{color: 'primary.main'}}>
              Certificates
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sed quis voluptate officia nemo dignissimos, animi possimus! Eius consectetur corrupti rerum! Est ea laboriosam architecto magni quaerat sed voluptas ab.
            </Typography>
            <Stack direction='row'>
              <CheckCircleIcon fontSize='small'/>
              <Typography>
              Ipsa quae ab illo inventore  
              </Typography>
            </Stack>
            <Stack direction='row'>
              <CheckCircleIcon fontSize='small'/>
              <Typography>
              Ipsa quae ab illo inventore  
              </Typography>
            </Stack>
            <Stack direction='row'>
              <CheckCircleIcon fontSize='small'/>
              <Typography>
              Ipsa quae ab illo inventore  
              </Typography>
            </Stack>
          </Stack>
          <Button variant='outlined'>
            Close this Job
          </Button>
        </Stack> 
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Stack sx={{py: 2}} gap={2}>
            <Stack direction='row' spacing={2}>
              <img src="src\assets\images\contact.png" alt="contact" width={40}/>
              <Stack>
                <Typography>
                  Alan Smith
                </Typography>
                <Typography>
                  +63 123 456 7890
                </Typography>
              </Stack>
            </Stack>
            <Stack direction='row' spacing={2}>
              <img src="src\assets\images\contact.png" alt="contact" width={40}/>
              <Stack>
                <Typography>
                  Alan Smith
                </Typography>
                <Typography>
                  +63 123 456 7890
                </Typography>
              </Stack>
            </Stack>
            <Button variant='outlined' >
              Close this Job
            </Button>
        </Stack>
      </CustomTabPanel>
    </Box>
    
    </> 
  )
}

export default JobDetails