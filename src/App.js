import "./App.css";
import React from "react";
import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import BlogContextProvider from "./contexts/BlogContext";

//*------Codes-------

function App() {
  return (
    <>
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
        </BlogContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
