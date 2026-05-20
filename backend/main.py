from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

# Load saved model and scaler
model = joblib.load("models/svr_cloud_cost_model.pkl")
scaler = joblib.load("models/scaler.pkl")

# Create FastAPI app
app = FastAPI()

# Define request structure
class CloudCostInput(BaseModel):
    Requested_CPU_Cores: int
    Requested_Memory_MB: int
    Requested_Storage_GB: int
    Requested_Bandwidth_Mbps: int
    Power_Consumption_Watts: float
    Total_Data_Transferred_MB: int

# Home route
@app.get("/")
def home():
    return {"message": "Cloud Cost Forecasting API Running"}

# Prediction route
@app.post("/predict")
def predict(data: CloudCostInput):

    # Convert input into array
    input_data = np.array([[
        data.Requested_CPU_Cores,
        data.Requested_Memory_MB,
        data.Requested_Storage_GB,
        data.Requested_Bandwidth_Mbps,
        data.Power_Consumption_Watts,
        data.Total_Data_Transferred_MB
    ]])

    # Scale input
    scaled_data = scaler.transform(input_data)

    # Predict
    prediction = model.predict(scaled_data)

    return {
        "predicted_cloud_cost": round(float(prediction[0]), 2)
    }