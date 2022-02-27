import type { MetaFunction } from "remix";
import Layout from "~/components/fashion/Layout";

export const meta: MetaFunction = () => {
  return {
    title: "Fashion Designer | About",
    description: "Complete website for fashion designers.",
  };
};

function About() {
  return (
    <Layout>
      <h1>About</h1>
    </Layout>
  );
}

export default About;
