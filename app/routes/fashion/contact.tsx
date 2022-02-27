import type { MetaFunction } from "remix";
import Layout from "~/components/fashion/Layout";

export const meta: MetaFunction = () => {
  return {
    title: "Fashion Designer | Contact",
    description: "Complete website for fashion designers.",
  };
};

function Contact() {
  return (
    <Layout>
      <h1>Contact</h1>
    </Layout>
  );
}

export default Contact;
