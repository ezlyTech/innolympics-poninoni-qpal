import { 
    Autocomplete, 
    IconButton, 
    Stack, 
    TextField, 
    Typography, 
    Button, 
    FormGroup, 
    FormControlLabel, 
    Checkbox, 
    FormLabel 
} from "@mui/material";
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostJobForm = () => {
    const [newJobTitle, setNewJobTitle] = useState("");
    const [newSalary, setNewSalary] = useState(0);
    const [newDescription, setNewDescription] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newJobCategory, setNewJopCategory] = useState([]);
    const [selectedCertificates, setSelectedCertificates] = useState([]);
    const jobCollectionRef = collection(db, "jobs");

    const jobCategoryOptions = [
        { id: 1, title: "Laborers and Helpers" },
        { id: 2, title: "Operatives" },
        { id: 3, title: "Craft Workers" },
        { id: 4, title: "Service Workers" },
        { id: 5, title: "Sales Workers" },
    ];

    const certificateOptions = ["TESDA", "NC 1", "NC 2", "NC 3", "NC 4"];

    const handleCertificateChange = (event) => {
        const { value, checked } = event.target;
        setSelectedCertificates((prev) =>
            checked ? [...prev, value] : prev.filter((cert) => cert !== value)
        );
    };

    const onSubmitJob = async () => {
        if (!newJobTitle || !newLocation || !newDescription || newSalary <= 0 || newJobCategory.length === 0) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await addDoc(jobCollectionRef, {
                jobTitle: newJobTitle,
                description: newDescription,
                salary: newSalary,
                location: newLocation,
                jobCategory: newJobCategory,
                certificates: selectedCertificates,
                userId: auth?.currentUser?.uid,
            });

            setNewJobTitle("");
            setNewDescription("");
            setNewSalary(0);
            setNewLocation("");
            setNewJopCategory([]);
            setSelectedCertificates([]);
        } catch (err) {
            console.log("Error submitting job:", err);
        }
    };

    const navigate = useNavigate();

    return (
        <>
            <Stack direction='row' gap={1}>
                <IconButton onClick={() => navigate('/dashboard')}>
                    <ArrowBackIcon />
                </IconButton>
                <Stack>
                    <Typography>
                        Post a Job
                    </Typography>
                    <Typography variant="body2" color="GrayText">
                        Please complete the form below.
                    </Typography>
                </Stack>
            </Stack>
            <Stack gap={2}>
                <Typography mt={2} color="GrayText">
                    Job Information
                </Typography>
                <TextField 
                    id="jobTitle"
                    variant="outlined"
                    label="Job Title"
                    type="text"
                    onChange={(e) => setNewJobTitle(e.target.value)}
                    value={newJobTitle}
                />
                <TextField 
                    id="salary"
                    variant="outlined"
                    label="Salary"
                    type="number"
                    onChange={(e) => setNewSalary(Number(e.target.value))}
                    value={newSalary}
                />
                <TextField 
                    id="description"
                    variant="outlined"
                    label="Description"
                    multiline
                    rows={3}
                    type="text"
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                />
                <TextField 
                    id="location"
                    variant="outlined"
                    label="Location"
                    type="text"
                    onChange={(e) => setNewLocation(e.target.value)}
                    value={newLocation}
                />
                <Autocomplete
                    multiple
                    id="jobCategory"
                    options={jobCategoryOptions}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    onChange={(e, value) => setNewJopCategory(value)}
                    value={newJobCategory}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Job Category"
                            placeholder="Add one or more"
                        />
                    )}
                />
                <FormGroup>
                    <FormLabel>Select Certificates</FormLabel>
                    {certificateOptions.map((certificate) => (
                        <FormControlLabel
                            key={certificate}
                            control={
                                <Checkbox
                                    value={certificate}
                                    onChange={handleCertificateChange}
                                    checked={selectedCertificates.includes(certificate)}
                                />
                            }
                            label={certificate}
                        />
                    ))}
                </FormGroup>
                <Button
                    onClick={onSubmitJob}
                    variant="contained"
                    color="primary"
                >
                    Post Job
                </Button>
            </Stack>
        </>
    );
};

export default PostJobForm;
