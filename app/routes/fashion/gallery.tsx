import type { MetaFunction } from "remix";
import Layout from "~/components/fashion/Layout";

export const meta: MetaFunction = () => {
  return {
    title: "Fashion Designer | Gallery",
    description: "Complete website for fashion designers.",
  };
};

const Gallery = () => {
  return (
    <Layout>
      <h1>Gallery</h1>
    </Layout>
  );
};

export default Gallery;
