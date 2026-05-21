import { useState } from "react";
import axios from "axios";
function App() {

  const [formData, setFormData] = useState({
    Requested_CPU_Cores: "",
    Requested_Memory_MB: "",
    Requested_Storage_GB: "",
    Requested_Bandwidth_Mbps: "",
    Power_Consumption_Watts: "",
    Total_Data_Transferred_MB: ""
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "https://cloud-cost-api.onrender.com/predict",
        formData
      );

      setPrediction(response.data.predicted_cloud_cost);

    } catch (error) {
      console.error(error);
      alert("Prediction failed");
    }
  };
  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#333",
            fontSize: "42px",
            lineHeight: "1.2",
            fontWeight: "bold",
          }}
        >
          Cloud Cost Predictor
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="number"
            name="Requested_CPU_Cores"
            placeholder="CPU Cores"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="Requested_Memory_MB"
            placeholder="Memory (MB)"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="Requested_Storage_GB"
            placeholder="Storage (GB)"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="Requested_Bandwidth_Mbps"
            placeholder="Bandwidth (Mbps)"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="Power_Consumption_Watts"
            placeholder="Power Consumption"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="number"
            name="Total_Data_Transferred_MB"
            placeholder="Data Transferred (MB)"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Predict Cost
          </button>

        </form>

        {prediction && (
          <div
            style={{
              marginTop: "25px",
              textAlign: "center",
              padding: "15px",
              background: "#e0f2fe",
              borderRadius: "10px",
            }}
          >
            <h2 style={{ color: "#0369a1" }}>
              Predicted Cost: ${prediction}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;