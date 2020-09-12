import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ItemList } from "../components/organism/item-list";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ItemList />
  </Layout>
);

export default IndexPage;
