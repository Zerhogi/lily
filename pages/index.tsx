import React from "react";
import Layout from "@/components/Layout";
import type { NextPageWithLayout } from "./_app";
import Home from "@/views/Home";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};
HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
