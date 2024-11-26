import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ALL_ROUTES } from "./routes";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ALL_ROUTES?.map((individualRoute) => {
          return (
            <Route
              key={individualRoute.path}
              path={individualRoute.path}
              element={individualRoute.element}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
