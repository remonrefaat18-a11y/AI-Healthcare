    import { useState } from "react";
    import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    } from "@mui/material";
    import PsychologyIcon from "@mui/icons-material/Psychology";

    export default function LiverPrediction() {
    const fields = [
        {
        name: "total_bilirubin",
        label: "Total Bilirubin",
        placeholder: "Example: 0.8",
        },
        {
        name: "direct_bilirubin",
        label: "Direct Bilirubin",
        placeholder: "Example: 0.2",
        },
        {
        name: "alkphos",
        label: "Alkphos Alkaline Phosphotase",
        placeholder: "Example: 210",
        },
        {
        name: "sgpt",
        label: "SGPT Alamine Aminotransferase",
        placeholder: "Example: 35",
        },
        {
        name: "sgot",
        label: "SGOT Aspartate Aminotransferase",
        placeholder: "Example: 42",
        },
        {
        name: "total_proteins",
        label: "Total Proteins",
        placeholder: "Example: 7.1",
        },
        {
        name: "albumin",
        label: "ALB Albumin",
        placeholder: "Example: 4.3",
        },
        {
        name: "ag_ratio",
        label: "A/G Ratio Albumin and Globulin Ratio",
        placeholder: "Example: 1.2",
        },
    ];

    const [formData, setFormData] = useState({
        total_bilirubin: "",
        direct_bilirubin: "",
        alkphos: "",
        sgpt: "",
        sgot: "",
        total_proteins: "",
        albumin: "",
        ag_ratio: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handlePredict = () => {
        console.log(formData);
    };

    return (
        <Box
        sx={{
            minHeight: "100vh",
            background: "linear-gradient(180deg,#eef7ff,#ffffff)",
            py: 8,
        }}
        >
        <Container maxWidth="md">
            <Paper
            elevation={5}
            sx={{
                p: 5,
                borderRadius: 5,
            }}
            >
            <Box textAlign="center" mb={5}>
                <PsychologyIcon
                sx={{
                    fontSize: 70,
                    color: "#1976d2",
                }}
                />

                <Typography
                variant="h4"
                fontWeight="bold"
                mt={2}
                >
                Liver Disease Prediction
                </Typography>

                <Typography
                color="text.secondary"
                mt={1}
                >
                Enter the laboratory test results below and click Predict.
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {fields.map((field) => (
                <Grid item xs={12} sm={6} key={field.name}>
                    <TextField
                    fullWidth
                    type="number"
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    />
                </Grid>
                ))}
            </Grid>

            <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                mt: 5,
                py: 1.5,
                borderRadius: 3,
                fontWeight: "bold",
                fontSize: 18,
                }}
                onClick={handlePredict}
            >
                Predict
            </Button>
            </Paper>
        </Container>
        </Box>
    );
    }