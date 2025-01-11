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
    signInWithEmailAndPassword
} from "firebase/auth";
import { 
  useState,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const [currentUser, setCurrentUser] = useState(null); 

  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    // Listen for changes to the current user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Cleanup listener
  }, []);

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard')
    } catch (err) {
        console.error("Error signing in with Google:", err.message);
    }
  };

  const signInAccount = async () => {
    try {
        await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
    } catch (err) {
        console.error("Error signing in:", err.message);
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
    <Stack>
      {/* Display Current User Info */}
      {/* <Typography variant="body1" gutterBottom>
      {currentUser
        ? `Logged in as: ${currentUser.email || "Anonymous"}`
        : "No user is logged in"
      }
      </Typography> */}
      {
        isSignIn ? (
          <Stack
            gap={1}
            sx={{mt: 2}}
          >
            <Stack mb={2}>
              <Typography variant="h5" fontWeight={600}>
                Sign In
              </Typography>
              <Typography color="GrayText">
                Please sign in to your registered account.
              </Typography>
            </Stack>
            <TextField 
              id="signInEmail"
              label="Email"
              variant="outlined"
              type="email"
              onChange={(e) => setSignInEmail(e.target.value)}
              required
            />
            <TextField 
              id="signInPassword"
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setSignInPassword(e.target.value)}
              required
            />
            <Button
              variant="contained"
              disableElevation
              onClick={signInAccount}>
              Sign in
            </Button>
          </Stack>
        ) : (
          <Stack
            gap={1}
            sx={{mt: 2}}
          >
            <Stack mb={2}>
              <Typography variant="h5" fontWeight={600}>
                Create an Account
              </Typography>
              <Typography color="GrayText">
                Please fill registration form below.
              </Typography>
            </Stack>
            <Stack
              gap={1}
            >
              <TextField 
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField 
                id="password"
                label="Password"
                variant="outlined"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                variant="contained"
                onClick={createAccount}
                disableElevation
              >
                Create Account
              </Button>
            </Stack>
          </Stack>
        )
      }
      <Box>
        <Stack
          gap={1}
          mt={2}
        >
          <Divider sx={{ my: 2 }}/>
          <Typography textAlign='center'>or</Typography>
          <Button
            variant="outlined"
            onClick={signInWithGoogle}
            disableElevation
          >
            Sign in with Google
          </Button>
          {
              isSignIn ? (
                <Typography textAlign='center'>
                  Don't have an account?
                  {' '}
                <a 
                  style={{
                    textDecoration: 'none',
                    color: '#AA3CC9',
                    fontWeight: 600,
                  }}
                  onClick={() => setIsSignIn(false)}
                >
                  Create an Account
                </a>
                </Typography>
              ) : (
                <Typography textAlign='center'>
                  Already have an account?
                  {' '}
                  <a 
                    style={{
                      textDecoration: 'none',
                      color: '#AA3CC9',
                      fontWeight: 600,
                    }}
                    onClick={() => setIsSignIn(true)}
                  >
                    Sign In
                  </a>
                </Typography>
              )
            }
        </Stack>
      </Box>
    </Stack>
  )
}

export default Auth