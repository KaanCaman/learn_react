import { useState, useEffect } from "react";

// Basit bir useEffect kullanımı
// Basic use of useEffect
const BasicUseEffect = () => {
  // state tanımla
  // define state
  const [state, setState] = useState("First value for state");

  // state değiştiğinde useEffect çalışacak
  // useEffect will run when state changes
  useEffect(() => {
    console.log("useEffect called");
    setTimeout(() => {
      setState("Second value for state");
    }, 4000);
  }, [state]);

  // return içerisinde state'i göster
  // show state in the return
  return (
    <>
      <h1>Basic UseEffect</h1>
      <p>state 4 saniye sonra değişecek ve useEffect çalışacak</p>
      <p>state will change after 4 seconds and useEffect will run </p>

      <h2>{state}</h2>
    </>
  );
};

export default BasicUseEffect;
