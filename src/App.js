import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PostalLookup from "./postalLookup";
import "./postal.css";
import { createContext, useState } from "react";
import Dashboard from "./dashboard";

export const postalCodeContext = createContext("");
function App() {
  const [postalCode, setPostalCode] = useState("");
  const [apiStatus, setApiStatus] = useState("init");
  const [officeData, setOfficeData] = useState([]);

  return (
    <div className="postContainer">
      <postalCodeContext.Provider
        value={{
          postalCode,
          setPostalCode,
          apiStatus,
          setApiStatus,
          officeData,
          setOfficeData,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/PostalCodeNovContest2024"
              element={<PostalLookup />}
            />
            <Route path="/PostalCodeNovContest2024/lookup" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </postalCodeContext.Provider>
    </div>
  );
}

export default App;
