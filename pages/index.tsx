import React from "react";
import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        textDecoration: "underline",
      }}
    >
      Welcome to Three.js workshop №1 📚
    </h1>
  );
};
HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
