// import {CustomerGluComponent} from "@customerglu/react-web-sdk";
import "./styles.css";
import { CustomerGluComponent } from "@customerglu/react-web-sdk";

// import CustomerGluComponent from "./component/CustomerGluComponent";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cgtest from "./component/Cgtest";
import Error from "./component/Error";
import { Box } from "@mui/material";

// function CustomerGluWrapper({ tagIds }) {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate("/test"); // Navigate to the "test" page
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         flexDirection: "column",
//       }}
//     >
//       <CustomerGluComponent
//         gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LTlhNDM2YzJmLTk2ZTYtNDI1Ni05ZDU4LTBlODQyNWM2OWMyNSIsImdsdUlkIjoiNjIzMGFlMzgtNDY3Yy00NmExLWFmYTMtOGYyMjliYzFlYTJkIiwiY2xpZW50IjoiMzVkZWFjZTgtYzA0Zi00M2MzLWEwMGItOWMwNmVhYWU3YWNiIiwiZGV2aWNlSWQiOiJnbHV0ZXN0LTlhNDM2YzJmLTk2ZTYtNDI1Ni05ZDU4LTBlODQyNWM2OWMyNV9kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJ2ZXJzaW9uIjoidjIiLCJ0aW1lWm9uZSI6IkFzaWEvS29sa2F0YSIsImlzUmV3YXJkSW5pdEVuYWJsZWQiOnRydWUsImlhdCI6MTczMzE1MjIzNywiZXhwIjoxNzY0Njg4MjM3fQ.KEoe0VVVgvPeHky6xy3Md0d-PCizYzcVbhYAgqLu3po"
//         userId="glutest-9a436c2f-96e6-4256-9d58-0e8425c69c25"
//         region="us"
//       />
//       // mapping the tag ids here. "embedId" and "embedIdv3"
//       {tagIds.map((tagId) => (
//         <Box
//           key={tagId}
//           id={tagId}
//           // sx={{
//           //   maxWidth: 1232,
//           //   width: "100%",
//           // }}
//         />
//       ))}
//       <button onClick={handleNavigate} style={{ marginTop: "20px" }}>
//         Go to Test Page
//       </button>
//     </Box>
//   );
// }

export default function App() {
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
          gluToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnbHV0ZXN0LTlhNDM2YzJmLTk2ZTYtNDI1Ni05ZDU4LTBlODQyNWM2OWMyNSIsImdsdUlkIjoiNjIzMGFlMzgtNDY3Yy00NmExLWFmYTMtOGYyMjliYzFlYTJkIiwiY2xpZW50IjoiMzVkZWFjZTgtYzA0Zi00M2MzLWEwMGItOWMwNmVhYWU3YWNiIiwiZGV2aWNlSWQiOiJnbHV0ZXN0LTlhNDM2YzJmLTk2ZTYtNDI1Ni05ZDU4LTBlODQyNWM2OWMyNV9kZWZhdWx0IiwiZGV2aWNlVHlwZSI6ImRlZmF1bHQiLCJpc0xvZ2dlZEluIjp0cnVlLCJ2ZXJzaW9uIjoidjIiLCJ0aW1lWm9uZSI6IkFzaWEvS29sa2F0YSIsImlzUmV3YXJkSW5pdEVuYWJsZWQiOnRydWUsImlhdCI6MTczMzE1MjIzNywiZXhwIjoxNzY0Njg4MjM3fQ.KEoe0VVVgvPeHky6xy3Md0d-PCizYzcVbhYAgqLu3po"
          userId="glutest-9a436c2f-96e6-4256-9d58-0e8425c69c25"
          region="us"
        >
        </CustomerGluComponent>
      </div>
    </div>
    // <>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<CustomerGluWrapper tagIds={["embedId", "embedIdv4"]} />}
    //     />
    //     <Route path="/test" element={<Cgtest />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    // </>
  );
}
