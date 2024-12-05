import { useEffect, useState } from "react";
import "./styles.css";
import { CustomerGluComponent } from "@customerglu/react-web-sdk";
import { v4 as uuidv4 } from "uuid"; // Import UUID generator
import { Box } from "@mui/material";

// API call to fetch token based on the generated UUID
async function fetchToken(userId) {
  const response = await fetch('https://api-us.customerglu.com/user/v1/user/sdk?token=true', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      writeKey: "10666d4bf2ed9519c6ac245e6943ec2717afa042",
    }),
  });
  
  const data = await response.json();
  return data.success ? data.data.token : null;
}

export default function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Generate a random UUID for userId
    const newUserId = `glutest-${uuidv4()}`;
    setUserId(newUserId);

    // Fetch the token using the generated userId
    const getToken = async () => {
      const fetchedToken = await fetchToken(newUserId);
      if (fetchedToken) {
        setToken(fetchedToken); // Store the fetched token
      }
    };
    
    getToken(); // Call the function to fetch the token
  }, []);

  if (!token || !userId) {
    return <></>; // Display a loading message while fetching data
  }

  return (
    <div className="App">
      <div
        id="embedIdv4"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <CustomerGluComponent
          gluToken={token} // Pass the fetched token
          userId={userId}  // Pass the generated userId
          region="us"
        />
      </div>
    </div>
  );
}