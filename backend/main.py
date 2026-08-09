from fastapi import FastAPI
from schemas.liver_schema import LiverInput
import joblib
from fastapi.middleware.cors import CORSMiddleware
from schemas.kidney_schema import KidneyInput
import pandas as pd



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_1 = joblib.load("models/best_model.joblib")
model_2 = joblib.load("models/random_forest_model.joblib")


@app.get("/")
def home():
    return {"message": "Backend is Running Successfully"}


@app.get("/health")
def health():
    return {"status": "healthy"}

@app.post("/liver-predict")
def liver_predict(data: LiverInput):

    features = [[
        data.total_bilirubin,
        data.direct_bilirubin,
        data.alkphos,
        data.sgpt,
        data.sgot,
        data.total_proteins,
        data.albumin,
        data.ag_ratio
    ]]

    prediction = model_1.predict(features)[0]
    probabilities = model_1.predict_proba(features)[0]
    confidence = probabilities[prediction] * 100

    return {
        "prediction": int(prediction),
        "confidence": round(float(confidence), 2)
    }

@app.post("/kidney-predict")
def kidney_predict(data: KidneyInput): 
        
    data=data.model_dump()

    model_data = {
        "Age of the patient": data["age"],
        "Blood pressure (mm/Hg)": data["blood_pressure"],
        "Specific gravity of urine": data["specific_gravity"],
        "Albumin in urine": data["albumin"],
        "Sugar in urine": data["sugar"],
        "Random blood glucose level (mg/dl)": data["random_blood_glucose"],
        "Blood urea (mg/dl)": data["blood_urea"],
        "Serum creatinine (mg/dl)": data["serum_creatinine"],
        "Sodium level (mEq/L)": data["sodium"],
        "Potassium level (mEq/L)": data["potassium"],
        "Hemoglobin level (gms)": data["hemoglobin"],
        "Packed cell volume (%)": data["packed_cell_volume"],
        "White blood cell count (cells/cumm)": data["white_blood_cell_count"],
        "Red blood cell count (millions/cumm)": data["red_blood_cell_count"],
        "Estimated Glomerular Filtration Rate (eGFR)": data["egfr"],
        "Urine protein-to-creatinine ratio": data["urine_protein_creatinine_ratio"],
        "Urine output (ml/day)": data["urine_output"],
        "Serum albumin level": data["serum_albumin"],
        "Cholesterol level": data["cholesterol"],
        "Parathyroid hormone (PTH) level": data["pth"],
        "Serum calcium level": data["serum_calcium"],
        "Serum phosphate level": data["serum_phosphate"],
        "Body Mass Index (BMI)": data["bmi"],
        "Duration of diabetes mellitus (years)": data["diabetes_duration"],
        "Duration of hypertension (years)": data["hypertension_duration"],
        "Cystatin C level": data["cystatin_c"],
        "C-reactive protein (CRP) level": data["crp"],
        "Interleukin-6 (IL-6) level": data["il6"],

        "Red blood cells in urine_normal":
            (
        1 if data["red_blood_cells"] == "Normal" else 0
    ),

        "Pus cells in urine_normal":
            (
        1 if data["pus_cells"] == "Normal" else 0
    ),

        "Pus cell clumps in urine_present":
            (
        1 if data["pus_cell_clumps"] == "Present" else 0
    ),

        "Bacteria in urine_present":
            (
        1 if data["bacteria"] == "Present" else 0
    ),

        "Hypertension (yes/no)_yes":
            (
        1 if data["hypertension"] == "Yes" else 0
    ),

        "Diabetes mellitus (yes/no)_yes":
            (
        1 if data["diabetes_mellitus"] == "Yes" else 0
    ),

        "Coronary artery disease (yes/no)_yes":
            (
        1 if data["coronary_artery_disease"] == "Yes" else 0
    ),

        "Appetite (good/poor)_poor":
            (
        1 if data["appetite"] == "Poor" else 0
    ),

        "Pedal edema (yes/no)_yes":
            (
        1 if data["pedal_edema"] == "Yes" else 0
    ),

        "Anemia (yes/no)_yes":
            (
        1 if data["anemia"] == "Yes" else 0
    ),

        "Family history of chronic kidney disease_yes":
            (
        1 if data["family_history_ckd"] == "Yes" else 0
    ),

        "Smoking status_yes":
            (
        1 if data["smoking_status"] == "Yes" else 0
    ),

        "Physical activity level_low":
            (
        1 if data["physical_activity"] == "Low" else 0
    ),

        "Physical activity level_moderate":
            (
        1 if data["physical_activity"] == "Moderate" else 0
    ),

        "Urinary sediment microscopy results_normal":
            (
        1 if data["urinary_sediment"] == "Normal" else 0
    ),
    }

    risk_levels = {
    0: "High Risk",
    1: "Low Risk",
    2: "Moderate Risk",
    3: "No Disease",
    4: "Severe Disease"
}

    kidney_features = pd.DataFrame([model_data])

    prediction_2 = model_2.predict(kidney_features)[0]

    probabilities_2 = model_2.predict_proba(kidney_features)[0]

    confidence_2 = max(probabilities_2) * 100

    prediction_name = risk_levels[int(prediction_2)]

    return {
        "prediction": int(prediction_2),
        "confidence": round(float(confidence_2), 2),
        "prediction_name": prediction_name
    }


