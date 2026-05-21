# Cloud Cost Forecasting Platform 🚀

A full-stack Machine Learning-powered cloud cost prediction platform built using **FastAPI**, **React.js**, and **Support Vector Regression (SVR)**.

The system predicts cloud infrastructure execution costs based on workload and resource allocation parameters such as CPU, memory, storage, bandwidth, power consumption, and transferred data.

---

# 🌐 Live Deployment

## 🔗 Live Web Application
https://cloud-cost-forecast.vercel.app/

## 🔗 Swagger API Documentation
https://cloud-cost-api.onrender.com/docs

---

# 📌 Features

- End-to-end Machine Learning prediction platform
- Real-time cloud cost prediction
- FastAPI REST backend
- React.js frontend interface
- Interactive Swagger API documentation
- Data preprocessing and feature scaling
- Model deployment on Render
- Frontend deployment on Vercel
- Publicly accessible live application

---

# 🧠 Machine Learning Details

## Model Used
- Support Vector Regression (SVR)

## Performance Metrics
- **R² Score:** `0.91`
- **MAE:** `47.22`
- **RMSE:** `76.19`

## ML Techniques Used
- Data preprocessing
- Correlation analysis
- Feature engineering
- Standard Scaling
- Feature selection
- Model serialization using Pickle (`.pkl`)

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Axios
- CSS

## Backend
- FastAPI
- Python
- Uvicorn

## Machine Learning
- Scikit-learn
- Pandas
- NumPy

## Deployment
- Render (Backend API)
- Vercel (Frontend)
- GitHub

---

# 📂 Project Structure

```bash
cloud-cost-forecast/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
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

# ⚡ API Endpoint

## POST `/predict`

Predicts cloud execution cost based on infrastructure parameters.

---

## Example Input

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

---

## Example Response

```json
{
  "predicted_cloud_cost": 594.6
}
```

---

# 🖥️ Frontend Preview

The frontend allows users to:

- Enter cloud infrastructure parameters
- Send data to the deployed ML API
- Receive real-time cloud cost predictions instantly

---

# ▶️ Run Locally

## 1️⃣ Clone Repository

```bash
git clone https://github.com/SushantSingh1029/cloud-cost-forecast.git
```

---

# ▶️ Backend Setup

## Navigate to Backend

```bash
cd cloud-cost-forecast/backend
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run FastAPI Server

```bash
uvicorn main:app --reload
```

## Open Swagger Docs

```text
http://127.0.0.1:8000/docs
```

---

# ▶️ Frontend Setup

## Navigate to Frontend

```bash
cd cloud-cost-forecast/frontend
```

## Install Dependencies

```bash
npm install
```

## Start React App

```bash
npm run dev
```

## Open Frontend

```text
http://localhost:5173
```

---

# 📊 Future Improvements

- Multiple ML model comparison
- Gradient Boosting / XGBoost integration
- Cloud provider-specific pricing support
- Real-time analytics dashboard
- Docker containerization
- CI/CD integration
- Authentication system
- Historical prediction tracking

---

# 👨‍💻 Author
# Cloud Cost Forecasting Platform 🚀

A full-stack Machine Learning-powered cloud cost prediction platform built using **FastAPI**, **React.js**, and **Support Vector Regression (SVR)**.

The system predicts cloud infrastructure execution costs based on workload and resource allocation parameters such as CPU, memory, storage, bandwidth, power consumption, and transferred data.

---

# 🌐 Live Deployment

## 🔗 Live Web Application
https://cloud-cost-forecast.vercel.app/

## 🔗 Live API
https://cloud-cost-api.onrender.com

## 🔗 Swagger API Documentation
https://cloud-cost-api.onrender.com/docs

---

# 📌 Features

- End-to-end Machine Learning prediction platform
- Real-time cloud cost prediction
- FastAPI REST backend
- React.js frontend interface
- Interactive Swagger API documentation
- Data preprocessing and feature scaling
- Model deployment on Render
- Frontend deployment on Vercel
- Publicly accessible live application

---

# 🧠 Machine Learning Details

## Model Used
- Support Vector Regression (SVR)

## Performance Metrics
- **R² Score:** `0.91`
- **MAE:** `47.22`
- **RMSE:** `76.19`

## ML Techniques Used
- Data preprocessing
- Correlation analysis
- Feature engineering
- Standard Scaling
- Feature selection
- Model serialization using Pickle (`.pkl`)

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Axios
- CSS

## Backend
- FastAPI
- Python
- Uvicorn

## Machine Learning
- Scikit-learn
- Pandas
- NumPy

## Deployment
- Render (Backend API)
- Vercel (Frontend)
- GitHub

---

# 📂 Project Structure

```bash
cloud-cost-forecast/
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
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

# ⚡ API Endpoint

## POST `/predict`

Predicts cloud execution cost based on infrastructure parameters.

---

## Example Input

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

---

## Example Response

```json
{
  "predicted_cloud_cost": 594.6
}
```

---

# 🖥️ Frontend Preview

The frontend allows users to:

- Enter cloud infrastructure parameters
- Send data to the deployed ML API
- Receive real-time cloud cost predictions instantly

---

# ▶️ Run Locally

## 1️⃣ Clone Repository

```bash
git clone https://github.com/SushantSingh1029/cloud-cost-forecast.git
```

---

# ▶️ Backend Setup

## Navigate to Backend

```bash
cd cloud-cost-forecast/backend
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

## Run FastAPI Server

```bash
uvicorn main:app --reload
```

## Open Swagger Docs

```text
http://127.0.0.1:8000/docs
```

---

# ▶️ Frontend Setup

## Navigate to Frontend

```bash
cd cloud-cost-forecast/frontend
```

## Install Dependencies

```bash
npm install
```

## Start React App

```bash
npm run dev
```

## Open Frontend

```text
http://localhost:5173
```

---

# 📊 Future Improvements

- Multiple ML model comparison
- Gradient Boosting / XGBoost integration
- Cloud provider-specific pricing support
- Real-time analytics dashboard
- Docker containerization
- CI/CD integration
- Authentication system
- Historical prediction tracking

---

# 👨‍💻 Author

## Sushant 

### GitHub
https://github.com/SushantSingh1029

### LinkedIn
https://linkedin.com/in/sushant-sushant-4421513ab

---

# ⭐ If You Like This Project

Give this repository a star on GitHub ⭐
## Sushant

### GitHub
https://github.com/SushantSingh1029

### LinkedIn
https://linkedin.com/in/sushant-sushant-4421513ab

---

# ⭐ If You Like This Project

Give this repository a star on GitHub ⭐
