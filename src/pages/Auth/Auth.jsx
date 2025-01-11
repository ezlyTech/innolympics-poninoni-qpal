import { 
  Box,
  Button,
  Card, 
  CardContent,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack alignItems='center'>
      <Box
        sx={{
          maxWidth:'750px'
        }}
      >
        <Typography>
          Sign In
        </Typography>
        <Typography>
          Please sign in to your registered account.
        </Typography>
        <Stack
          gap={1}
        >
          <TextField 
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
          >
            Login
          </Button>
        </Stack>
        <Stack
          gap={1}
          mt={2}
        >
          <Typography
            textAlign='center'
          >
            Or sign in with
          </Typography>
          <Button
            variant="contained"
          >
            Google
          </Button>
          <Divider />
          <Button
            variant="outlined"
          >
            Create Account
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Auth