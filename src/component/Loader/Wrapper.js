// component/Loader/LoadingWrapper.js
"use client";

import { useEffect, useState } from "react";
import TransitionEffect from "./Transition";
// Your loading animation

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after a delay
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <TransitionEffect />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default LoadingWrapper;
