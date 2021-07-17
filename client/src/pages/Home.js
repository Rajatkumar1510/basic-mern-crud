import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <h1>Homeee</h1>
    </div>
  );
};

export default Home;
