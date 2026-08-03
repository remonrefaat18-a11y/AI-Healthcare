from fastapi import FastAPI
from schemas.liver_schema import LiverInput
import joblib
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("models/best_model.joblib")

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

    prediction = model.predict(features)[0]
    probabilities = model.predict_proba(features)[0]
    confidence = probabilities[prediction] * 100

    return {
        "prediction": int(prediction),
        "confidence": round(float(confidence), 2)
    }
