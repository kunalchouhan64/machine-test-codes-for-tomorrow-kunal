import React from "react";
import MainLayout from "./MainLayout";
import { Route, Routes } from "react-router";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default App;
