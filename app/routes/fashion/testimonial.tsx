import type { MetaFunction } from "remix";
import Layout from "~/components/fashion/Layout";

export const meta: MetaFunction = () => {
  return {
    title: "Fashion Designer | Testimonial",
    description: "Complete website for fashion designers.",
  };
};

const Testimonial = () => {
  return (
    <Layout>
      <h1>Testimonial</h1>
    </Layout>
  );
};

export default Testimonial;
