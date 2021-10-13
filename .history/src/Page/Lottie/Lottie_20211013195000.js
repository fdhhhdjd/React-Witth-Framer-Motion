import React, { useEffect, useState } from "react";

const Lottie = () => {
  const [cat, setCat] = useState("");
  const [loading, setLoading] = useState(undefined);
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    getCat();
  }, []);
  const getCat = () => {
    setLoading(undefined);
    setDone(undefined);

    setTimeout(() => {
      fetch("https://aws.random.cat/meow")
        .then((res) => res.json())
        .then((data) => {
          setCat(data.file);
          setLoading(true);
          setTimeout(() => {
            setDone(true);
          }, 1000);
        })
        .catch((err) => console.log(err));
    }, 1200);
  };

  return (
    <div>
      <h1>xin chao toi la tai </h1>
    </div>
  );
};

export default Lottie;