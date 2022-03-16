import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const Home: NextPage = () => {
  console.log("change");

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

export default Home;
