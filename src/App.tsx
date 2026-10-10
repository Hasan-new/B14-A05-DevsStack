
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Languages from "./components/languages/Languages";
import type { Ilanguage } from "./types/languageType";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Fetch technology data
const languageFetch = async (): Promise<Ilanguage[]> => {
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch technology data");
  }

  return res.json();
};

// Keep the promise stable between renders
const languagePromise = languageFetch();

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Languages languagePromise={languagePromise} />
      </Suspense>

      {/* Keep only ONE ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        theme="colored"
      />
    </>
  );
}

export default App;
