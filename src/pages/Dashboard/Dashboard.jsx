import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MetricCard from "./Components/MetricCard/MetricCard";
import PostCard from "./Components/PostCard/PostCard";
import OpenJobsCard from "./Components/OpenJobsCard/OpenJobsCard";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

const Dashboard = () => {
  const [jobList, setJobList] = useState([]);
  const [openJobsCount, setOpenJobsCount] = useState(0);
  const [closedJobsCount, setClosedJobsCount] = useState(0);

  const jobCollectionRef = collection(db, "jobs");
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const getJobList = () => {
    if (auth?.currentUser) {
      const unsubscribe = onSnapshot(jobCollectionRef, (snapshot) => {
        const filteredData = snapshot.docs
          .map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
          .filter((job) => job.userId === auth?.currentUser?.uid);

        setJobList(filteredData);

        // Calculate counts for open and closed jobs
        const openJobs = filteredData.filter((job) => job.status === true);
        const closedJobs = filteredData.filter((job) => job.status === false);

        setOpenJobsCount(openJobs.length);
        setClosedJobsCount(closedJobs.length);
      });

      return () => unsubscribe();
    }
  };

  useEffect(() => {
    getJobList();
  }, [auth?.currentUser]);

  return (
    <>
      <Stack
        sx={{
          p: 2,
          background: "linear-gradient(180deg, #AA3CC9 0%, #541D63 100%)",
          color: "white",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <Typography variant="subtitle2">Welcome bossing!</Typography>
        <Typography
          sx={{
            pb: 3,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {user?.displayName}
        </Typography>
      </Stack>
      <Button
        startIcon={<AddIcon />}
        sx={{
          mx: 2,
          mt: -2,
          width: "90%",
          bgcolor: "white",
          borderRadius: 14,
          boxShadow: "0px 1px 4px  rgba(0, 0, 0, 0.16)",
        }}
        size="medium"
        onClick={() => navigate("/post-a-job")}
      >
        Post a job...
      </Button>
      <Stack 
        direction="row"
        gap={1}
      >
        <MetricCard 
          number={openJobsCount} 
          label="Open Jobs" 
        />
        <MetricCard 
          number={closedJobsCount} 
          label="Closed Jobs" 
        />
      </Stack>

      <Stack spacing={2}>
        <Typography 
          color="GrayText" 
          pt={4}
        >
          Your open jobs
        </Typography>
        {/* Dynamically render OpenJobsCard components */}
        {jobList
          .filter((job) => job.status === true) // Filter open jobs
          .map((job) => (
            <OpenJobsCard
              key={job.id} // Use a unique key
              jobTitle={job.jobTitle} // Assuming "title" is the job title field
              salary={job.salary} // Assuming "salary" is the salary field
              applicants={job.applicants?.length || 0} // Assuming "applicants" is an array
            />
          ))}
      </Stack>

      <Stack spacing={2}>
        <Typography 
          color="GrayText" 
          pt={4}
        >
          Recent activities
        </Typography>
        <PostCard 
          jobTitle="Driver"
          duration="1 day ago"
          applicantName="Alan Smith"
        />
        <PostCard 
          jobTitle="Electrician"
          duration="2 days ago"
          applicantName="Mark Joe"
        />
      </Stack>
    </>
  );
};

export default Dashboard;
