import { 
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  auth,
  googleProvider,
} from '../../config/firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
} from "firebase/auth";
import { 
  useState,
  useEffect,
} from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    // Listen for changes to the current user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error("Error signing in with Google:", err.message);
    }
  };

  // Function to create a new user
  const createAccount = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error("Error creating account:", err.message);
    }
  };

  return (
    <Stack alignItems='center'>
      {/* Display Current User Info */}
      <Typography variant="body1" gutterBottom>
      {currentUser
        ? `Logged in as: ${currentUser.email || "Anonymous"}`
        : "No user is logged in"
      }
      </Typography>
      <Box
        sx={{
          maxWidth:'750px'
        }}
      >
        <Typography>
          Create an Account
        </Typography>
        <Typography>
          Please fill registration form below.
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
            onClick={createAccount}
          >
            Create Account
          </Button>
        </Stack>
        <Stack
          gap={1}
          mt={2}
        >
          <Button
            variant="outlined"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default Auth