    import { useState } from "react";
    import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    LinearProgress
    } from "@mui/material";
    import PsychologyIcon from "@mui/icons-material/Psychology";
    import axios from "axios";
    import { Alert } from "@mui/material";
    import { Stack } from "@mui/material";

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

    const [prediction,setPrediction] = useState(null);
    const [confidence, setConfidence] = useState(null);


const handlePredict = async () => {

    const response = await axios.post(
        "http://127.0.0.1:8000/liver-predict",
        formData
    );

    setPrediction(response.data.prediction);
    setConfidence(response.data.confidence);

}

const handleReset = () => {
    setFormData({
        total_bilirubin: "",
        direct_bilirubin: "",
        alkphos: "",
        sgpt: "",
        sgot: "",
        total_proteins: "",
        albumin: "",
        ag_ratio: ""
    });

    setPrediction(null);
    setConfidence(null);
};



    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
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
    <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
    <Button
        variant="contained"
        fullWidth
        size="large"
        onClick={handlePredict}
        sx={{
            py: 1.5,
            borderRadius: 3,
            fontWeight: "bold",
            fontSize: 18,
        }}
    >
        Predict
    </Button>

    <Button
        variant="outlined"
        color="error"
        fullWidth
        size="large"
        onClick={handleReset}
        sx={{
            py: 1.5,
            borderRadius: 3,
            fontWeight: "bold",
            fontSize: 18,
        }}
    >
        Reset
    </Button>
</Stack>
            {
                prediction !== null && (
                <Alert
                    severity={prediction === 1 ? "error" : "success"}
                    sx={{ mt: 3 }}
                >
                    {
                        prediction === 1
                            ? "⚠️ Potential Liver Disease Detected"
                            : "✅ No Liver Disease Detected"
                    }
                </Alert>
            )
        }
        {
            confidence !== null && (
                <Box sx={{ mt: 3 }}>

                    <Typography variant="body1" gutterBottom>
                        Confidence: {confidence}%
                    </Typography>

                    <LinearProgress
                        variant="determinate"
                        value={confidence}
                        sx={{
                            height: 10,
                            borderRadius: 5
                        }}
                    />
        </Box>
    )
}
            </Paper>
        </Container>
        </Box>
    );
    }