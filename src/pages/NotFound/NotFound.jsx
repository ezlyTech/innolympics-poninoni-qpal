import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate();

    return (
        <>
            <Typography>Not Found</Typography>
            <Button onClick={() => navigate('/')}>
                Go to Dashboard
            </Button>
        </>
    )
}

export default NotFound