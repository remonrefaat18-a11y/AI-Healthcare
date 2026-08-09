# AI Healthcare Prediction Dashboard

A full-stack healthcare prediction application with a React/Vite frontend and a FastAPI backend. The app provides liver disease and chronic kidney disease prediction using pre-trained machine learning models.

## Repository structure

- `backend/`
  - `main.py` - FastAPI backend with liver and kidney prediction endpoints.
  - `models/` - pre-trained model artifacts (`best_model.joblib`, `random_forest_model.joblib`).
  - `schemas/` - Pydantic request schemas for prediction payloads.
- `frontend/`
  - React app built with Vite.
  - `package.json` - frontend dependencies and scripts.

## Features

- Liver disease prediction via `/liver-predict`
- Kidney disease prediction via `/kidney-predict`
- Health check endpoint at `/health`
- Web-based dashboard and form UI powered by React
- Firebase integration for authentication and data storage

## Backend setup

1. Open a terminal in the `backend/` directory:

```bash
cd backend
```

2. Create and activate a Python virtual environment:

Windows (PowerShell):

```powershell
python -m venv venv
.\ackend\venv\Scripts\Activate.ps1
```

Windows (CMD):

```cmd
python -m venv venv
venv\Scripts\activate
```

3. Install Python dependencies:

```bash
pip install -r requirements.txt
```

4. Start the backend server:

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

## Frontend setup

1. Open a terminal in the `frontend/` directory:

```bash
cd frontend
```

2. Install frontend dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Visit the app in your browser at:

```
http://localhost:5173
```

## API Endpoints

### GET /

Returns a simple welcome object:

```json
{
  "message": "Backend is Running Successfully"
}
```

### GET /health

Returns service health status:

```json
{
  "status": "healthy"
}
```

### POST /liver-predict

Predict liver disease using numeric lab values.

Example request body:

```json
{
  "total_bilirubin": 1.0,
  "direct_bilirubin": 0.3,
  "alkphos": 60.0,
  "sgpt": 30.0,
  "sgot": 40.0,
  "total_proteins": 7.0,
  "albumin": 4.0,
  "ag_ratio": 1.2
}
```

Example response:

```json
{
  "prediction": 1,
  "confidence": 92.34
}
```

### POST /kidney-predict

Predict kidney risk using clinical and lab features.

Example request body:

```json
{
  "age": 45,
  "blood_pressure": 80.0,
  "specific_gravity": 1.02,
  "albumin": 0.0,
  "sugar": 0.0,
  "random_blood_glucose": 120.0,
  "blood_urea": 30.0,
  "serum_creatinine": 1.1,
  "sodium": 140.0,
  "potassium": 4.5,
  "hemoglobin": 13.5,
  "packed_cell_volume": 40.0,
  "white_blood_cell_count": 8500.0,
  "red_blood_cell_count": 4.5,
  "egfr": 90.0,
  "urine_protein_creatinine_ratio": 0.1,
  "urine_output": 1500.0,
  "serum_albumin": 4.2,
  "cholesterol": 180.0,
  "pth": 50.0,
  "serum_calcium": 9.0,
  "serum_phosphate": 3.5,
  "bmi": 24.0,
  "diabetes_duration": 0.0,
  "hypertension_duration": 0.0,
  "cystatin_c": 0.9,
  "crp": 1.0,
  "il6": 3.0,
  "red_blood_cells": "Normal",
  "pus_cells": "Normal",
  "pus_cell_clumps": "Not Present",
  "bacteria": "Not Present",
  "hypertension": "No",
  "diabetes_mellitus": "No",
  "coronary_artery_disease": "No",
  "appetite": "Good",
  "pedal_edema": "No",
  "anemia": "No",
  "family_history_ckd": "No",
  "smoking_status": "No",
  "physical_activity": "Moderate",
  "urinary_sediment": "Normal"
}
```

Example response:

```json
{
  "prediction": 2,
  "confidence": 88.57,
  "prediction_name": "Moderate Risk"
}
```

## Notes

- The backend expects the model files to remain in `backend/models/`.
- If you change the frontend origin or host, update the CORS origin in `backend/main.py`.
- Frontend Firebase configuration is stored in `frontend/.env` and `frontend/src/firebase/firebaseConfig.js`.

## Frontend dependencies

The frontend uses React, Vite, Material UI, Firebase, Recharts, and React Router. The dependency list is managed in `frontend/package.json`.

## Backend dependencies

Use `requirements.txt` to install the Python packages required for the backend.
