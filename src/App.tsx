import React from 'react';
import {CssBaseline} from "@mui/material";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div>
      <CssBaseline/>
      <Routes>
        <Route path={'/'} element={null}/>
      </Routes>
    </div>
  );
}

export default App;
