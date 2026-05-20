# Cloud Cost Forecasting API 🚀

A Machine Learning-powered cloud cost forecasting system built using **FastAPI** and **Support Vector Regression (SVR)**.  
The project predicts cloud execution costs based on infrastructure and workload parameters.

---

# 📌 Features

- Predicts cloud execution cost using ML
- FastAPI backend with REST API
- Interactive Swagger UI documentation
- Data preprocessing and feature scaling
- Trained using Support Vector Regression (SVR)
- Public deployment using Render

---

# 🧠 Machine Learning Details

## Model Used
- Support Vector Regression (SVR)

## Performance
- **R² Score:** `0.91`
- **MAE:** `47.22`
- **RMSE:** `76.19`

## Techniques Used
- Data preprocessing
- Correlation analysis
- Feature selection
- Standard Scaling
- Model serialization using Pickle (`.pkl`)

---

# 🛠️ Tech Stack

- Python
- FastAPI
- Scikit-learn
- Pandas
- NumPy
- Jupyter Notebook
- Render
- Git & GitHub

---

# 📂 Project Structure

```bash
cloud-cost-forecast/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── Procfile
│   └── models/
│       ├── svr_cloud_cost_model.pkl
│       └── scaler.pkl
│
├── datasets/
│
├── notebooks/
│   └── Data_Preprocessing.ipynb
│
└── README.md
```

---

# 🌐 Live Deployment

## Live API
https://cloud-cost-api.onrender.com

## Swagger Documentation
https://cloud-cost-api.onrender.com/docs

---

# ⚡ API Endpoint

## POST `/predict`

Predicts cloud execution cost.

### Example Input

```json
{
  "Requested_CPU_Cores": 8,
  "Requested_Memory_MB": 16000,
  "Requested_Storage_GB": 500,
  "Requested_Bandwidth_Mbps": 2000,
  "Power_Consumption_Watts": 300,
  "Total_Data_Transferred_MB": 10000
}
```

### Example Response

```json
{
  "predicted_cloud_cost": 594.6
}
```

---

# ▶️ Run Locally

## Clone Repository

```bash
git clone https://github.com/SushantSingh1029/cloud-cost-forecast.git
```

---

## Navigate to Backend

```bash
cd cloud-cost-forecast/backend
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Start FastAPI Server

```bash
uvicorn main:app --reload
```

---

## Open Browser

```text
http://127.0.0.1:8000/docs
```

---

# 📊 Future Improvements

- React frontend dashboard
- Real-time cloud analytics
- Authentication system
- Multiple ML model comparison
- Docker deployment
- CI/CD integration

---

# 👨‍💻 Author

## Sushant Singh

GitHub:
https://github.com/SushantSingh1029

---

# ⭐ If You Like This Project

Give this repository a star on GitHub ⭐
