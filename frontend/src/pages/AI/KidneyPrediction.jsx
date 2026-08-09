import { useState } from "react";
import axios from "axios";

import {
    Box,
    Paper,
    Typography,
    Grid,
    TextField,
    Button,
    Stack,
    LinearProgress,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";
import { Alert } from "@mui/material";
import BiotechIcon from "@mui/icons-material/Biotech";


const fields = [
    // =========================
    // Numerical Features
    // =========================

    {
        name: "age",
        label: "Age of the patient",
        placeholder: "Example: 45",
        type: "number",
    },
    {
        name: "blood_pressure",
        label: "Blood pressure (mm/Hg)",
        placeholder: "Example: 120",
        type: "number",
    },
    {
        name: "specific_gravity",
        label: "Specific gravity of urine",
        placeholder: "Example: 1.020",
        type: "number",
    },
    {
        name: "albumin",
        label: "Albumin in urine",
        placeholder: "Example: 1",
        type: "number",
    },
    {
        name: "sugar",
        label: "Sugar in urine",
        placeholder: "Example: 0",
        type: "number",
    },
    {
        name: "random_blood_glucose",
        label: "Random blood glucose level (mg/dl)",
        placeholder: "Example: 120",
        type: "number",
    },
    {
        name: "blood_urea",
        label: "Blood urea (mg/dl)",
        placeholder: "Example: 40",
        type: "number",
    },
    {
        name: "serum_creatinine",
        label: "Serum creatinine (mg/dl)",
        placeholder: "Example: 1.2",
        type: "number",
    },
    {
        name: "sodium",
        label: "Sodium level (mEq/L)",
        placeholder: "Example: 140",
        type: "number",
    },
    {
        name: "potassium",
        label: "Potassium level (mEq/L)",
        placeholder: "Example: 4.5",
        type: "number",
    },
    {
        name: "hemoglobin",
        label: "Hemoglobin level (gms)",
        placeholder: "Example: 13.5",
        type: "number",
    },
    {
        name: "packed_cell_volume",
        label: "Packed cell volume (%)",
        placeholder: "Example: 40",
        type: "number",
    },
    {
        name: "white_blood_cell_count",
        label: "White blood cell count (cells/cumm)",
        placeholder: "Example: 8000",
        type: "number",
    },
    {
        name: "red_blood_cell_count",
        label: "Red blood cell count (millions/cumm)",
        placeholder: "Example: 4.5",
        type: "number",
    },
    {
        name: "egfr",
        label: "Estimated Glomerular Filtration Rate (eGFR)",
        placeholder: "Example: 90",
        type: "number",
    },
    {
        name: "urine_protein_creatinine_ratio",
        label: "Urine protein-to-creatinine ratio",
        placeholder: "Example: 0.5",
        type: "number",
    },
    {
        name: "urine_output",
        label: "Urine output (ml/day)",
        placeholder: "Example: 1500",
        type: "number",
    },
    {
        name: "serum_albumin",
        label: "Serum albumin level",
        placeholder: "Example: 4.0",
        type: "number",
    },
    {
        name: "cholesterol",
        label: "Cholesterol level",
        placeholder: "Example: 180",
        type: "number",
    },
    {
        name: "pth",
        label: "Parathyroid hormone (PTH) level",
        placeholder: "Example: 50",
        type: "number",
    },
    {
        name: "serum_calcium",
        label: "Serum calcium level",
        placeholder: "Example: 9.5",
        type: "number",
    },
    {
        name: "serum_phosphate",
        label: "Serum phosphate level",
        placeholder: "Example: 3.5",
        type: "number",
    },
    {
        name: "bmi",
        label: "Body Mass Index (BMI)",
        placeholder: "Example: 24.5",
        type: "number",
    },
    {
        name: "diabetes_duration",
        label: "Duration of diabetes mellitus (years)",
        placeholder: "Example: 5",
        type: "number",
    },
    {
        name: "hypertension_duration",
        label: "Duration of hypertension (years)",
        placeholder: "Example: 3",
        type: "number",
    },
    {
        name: "cystatin_c",
        label: "Cystatin C level",
        placeholder: "Example: 1.0",
        type: "number",
    },
    {
        name: "crp",
        label: "C-reactive protein (CRP) level",
        placeholder: "Example: 2.5",
        type: "number",
    },
    {
        name: "il6",
        label: "Interleukin-6 (IL-6) level",
        placeholder: "Example: 5.0",
        type: "number",
    },


    // =========================
    // Categorical Features
    // =========================

    {
        name: "red_blood_cells",
        label: "Red blood cells in urine",
        type: "select",
        options: ["Normal", "Abnormal"],
    },
    {
        name: "pus_cells",
        label: "Pus cells in urine",
        type: "select",
        options: ["Normal", "Abnormal"],
    },
    {
        name: "pus_cell_clumps",
        label: "Pus cell clumps in urine",
        type: "select",
        options: ["Present", "Not Present"],
    },
    {
        name: "bacteria",
        label: "Bacteria in urine",
        type: "select",
        options: ["Present", "Not Present"],
    },
    {
        name: "hypertension",
        label: "Hypertension",
        type: "select",
        options: ["Yes", "No"],
    },
    {
        name: "diabetes_mellitus",
        label: "Diabetes mellitus",
        type: "select",
        options: ["Yes", "No"],
    },
    {
        name: "coronary_artery_disease",
        label: "Coronary artery disease",
        type: "select",
        options: ["Yes", "No"],
    },
    {
        name: "appetite",
        label: "Appetite",
        type: "select",
        options: ["Good", "Poor"],
    },
    {
        name: "pedal_edema",
        label: "Pedal edema",
        type: "select",
        options: ["Yes", "No"],
    },
    {
        name: "anemia",
        label: "Anemia",
        type: "select",
        options: ["Yes", "No"],
    },
    {
        name: "family_history_ckd",
        label: "Family history of chronic kidney disease",
        type: "select",
        options: ["Yes", "No"],
    },
    {
        name: "smoking_status",
        label: "Smoking status",
        type: "select",
        options: ["Yes", "No"],
    },
    {
        name: "physical_activity",
        label: "Physical activity level",
        type: "select",
        options: ["High", "Low", "Moderate"],
    },
    {
        name: "urinary_sediment",
        label: "Urinary sediment microscopy results",
        type: "select",
        options: ["Normal", "Abnormal"],
    },
];


const KidneyPrediction = () => {

    // =========================
    // Form Data
    // =========================

    const [formData, setFormData] = useState({
        // Numerical
        age: "",
        blood_pressure: "",
        specific_gravity: "",
        albumin: "",
        sugar: "",
        random_blood_glucose: "",
        blood_urea: "",
        serum_creatinine: "",
        sodium: "",
        potassium: "",
        hemoglobin: "",
        packed_cell_volume: "",
        white_blood_cell_count: "",
        red_blood_cell_count: "",
        egfr: "",
        urine_protein_creatinine_ratio: "",
        urine_output: "",
        serum_albumin: "",
        cholesterol: "",
        pth: "",
        serum_calcium: "",
        serum_phosphate: "",
        bmi: "",
        diabetes_duration: "",
        hypertension_duration: "",
        cystatin_c: "",
        crp: "",
        il6: "",

        // Categorical
        red_blood_cells: "",
        pus_cells: "",
        pus_cell_clumps: "",
        bacteria: "",
        hypertension: "",
        diabetes_mellitus: "",
        coronary_artery_disease: "",
        appetite: "",
        pedal_edema: "",
        anemia: "",
        family_history_ckd: "",
        smoking_status: "",
        physical_activity: "",
        urinary_sediment: "",
    });


    const [prediction, setPrediction] = useState(null);
    const [confidence, setConfidence] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handlePredict = async () => {

        try {

            const response = await axios.post(
                "http://127.0.0.1:8000/kidney-predict",
                formData
            );

            setPrediction(response.data.prediction);
            setConfidence(response.data.confidence);
        } catch (error) {

            console.error("Prediction error:", error);

        }
    };


    // =========================
    // Reset
    // =========================

    const handleReset = () => {

        setFormData({
            age: "",
            blood_pressure: "",
            specific_gravity: "",
            albumin: "",
            sugar: "",
            random_blood_glucose: "",
            blood_urea: "",
            serum_creatinine: "",
            sodium: "",
            potassium: "",
            hemoglobin: "",
            packed_cell_volume: "",
            white_blood_cell_count: "",
            red_blood_cell_count: "",
            egfr: "",
            urine_protein_creatinine_ratio: "",
            urine_output: "",
            serum_albumin: "",
            cholesterol: "",
            pth: "",
            serum_calcium: "",
            serum_phosphate: "",
            bmi: "",
            diabetes_duration: "",
            hypertension_duration: "",
            cystatin_c: "",
            crp: "",
            il6: "",

            red_blood_cells: "",
            pus_cells: "",
            pus_cell_clumps: "",
            bacteria: "",
            hypertension: "",
            diabetes_mellitus: "",
            coronary_artery_disease: "",
            appetite: "",
            pedal_edema: "",
            anemia: "",
            family_history_ckd: "",
            smoking_status: "",
            physical_activity: "",
            urinary_sediment: "",
        });

        setPrediction(null);
        setConfidence(null);
    };


    return (
        <Box
            sx={{
                minHeight: "100vh",
                background:
                    "linear-gradient(180deg, #eef7ff 0%, #ffffff 100%)",
                py: {
                    xs: 4,
                    md: 8,
                },
                px: {
                    xs: 2,
                    md: 4,
                },
            }}
        >

            <Paper
                elevation={5}
                sx={{
                    p: {
                        xs: 3,
                        md: 5,
                    },
                    borderRadius: 5,
                    maxWidth: 1200,
                    mx: "auto",
                }}
            >


                <Box sx={{ mb: 5 }} textAlign="center" >

                    <BiotechIcon
                        sx={{
                            fontSize: 70,
                            color: "#1976d2",
                        }}
                    />

                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mt={2}
                        sx={{
                            fontSize: {
                                xs: "1.8rem",
                                md: "2.2rem",
                            },
                        }}
                    >
                        Chronic Kidney Disease Prediction
                    </Typography>

                    <Typography
                        color="text.secondary"
                        mt={1}
                    >
                        Enter the patient's laboratory and clinical
                        measurements.
                    </Typography>

                </Box>

                <Grid
                    container
                    spacing={3}
                >

                    {fields.map((field) => (

                        <Grid
                            key={field.name}
                            size={{
                                xs: 12,
                                md: 6,
                            }}
                        >

                            {field.type === "select" ? (

                                <FormControl fullWidth>

                                    <InputLabel>
                                        {field.label}
                                    </InputLabel>

                                    <Select
                                        name={field.name}
                                        value={formData[field.name]}
                                        label={field.label}
                                        onChange={handleChange}
                                    >

                                        <MenuItem value="">
                                            <em>Select...</em>
                                        </MenuItem>

                                        {field.options.map((option) => (

                                            <MenuItem
                                                key={option}
                                                value={option}
                                            >
                                                {option}
                                            </MenuItem>

                                        ))}

                                    </Select>

                                </FormControl>

                            ) : (

                                <TextField
                                    fullWidth
                                    type="number"
                                    name={field.name}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                />

                            )}

                        </Grid>

                    ))}

                </Grid>

                <Stack
                    direction={{
                        xs: "column",
                        sm: "row",
                    }}
                    spacing={2}
                    sx={{
                        mt: 5,
                    }}
                >

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


                {/* ================= Result ================= */}

                        {
            prediction !== null && (
                <Alert
                    severity={
                        prediction === 3
                            ? "success"
                            : prediction === 1
                            ? "info"
                            : prediction === 2
                            ? "warning"
                            : "error"
                    }
                    sx={{
                        mt: 3,
                        borderRadius: 3,
                        fontSize: 16,
                        fontWeight: "bold",
                    }}
                >
                    {
                        prediction === 0
                            ? "⚠️ High Risk: The patient is at high risk."
                            : prediction === 1
                            ? "ℹ️ Low Risk: The patient is at low risk."
                            : prediction === 2
                            ? "⚠️ Moderate Risk: The patient has a moderate risk level."
                            : prediction === 3
                            ? "✅ No Disease Detected."
                            : "🚨 Severe Disease: Immediate medical attention is recommended."
                    }
                </Alert>
            )
        }

                        {confidence !== null && (

                            <>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                >
                                    Confidence: {confidence}%
                                </Typography>

                                <LinearProgress
                                    variant="determinate"
                                    value={confidence}
                                    sx={{
                                        height: 10,
                                        borderRadius: 5,
                                    }}
                                />

                            </>

                        )}

            </Paper>

        </Box>
    );
};


export default KidneyPrediction;