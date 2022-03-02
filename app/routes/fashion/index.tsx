import type { MetaFunction } from "remix";
import Button from "~/components/fashion/Button";
import Layout from "~/components/fashion/Layout";

export const meta: MetaFunction = () => {
  return {
    title: "Fashion Designer",
    description: "Complete website for fashion designers.",
  };
};

function Index() {
  return (
    <Layout>
      <div className="m-4 flex flex-col items-center">
        <img
          src="https://th.bing.com/th/id/R.d274f48cbe6e7081140c6c661f112407?rik=leuylBUb7lWV5g&pid=ImgRaw&r=0"
          className="m-4 h-9 w-9"
          alt=""
        />
        <p className="font-bold">Lorem ipsum dolor sit amet,</p>
        <p>consectetur adipisicing Fugit.</p>
      </div>

      <h1 className="buz-font m-8 w-full text-center text-5xl font-semibold md:w-2/3 md:text-8xl ">
        YOUR TRULY BESPOKE EXPERIENCE
      </h1>

      <p className="w-4/5 text-justify md:w-1/2 md:text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam
        libero, rem vel non id blanditiis officia, velit sunt ad, consequuntur
        ut sed eveniet quo eos? Soluta adipisci autem possimus! libero, rem vel
        non id blanditiis officia, velit sunt ad, consequuntur ut sed eveniet
        quo eos? Soluta adipisci autem possimus!
      </p>

      <Button name="REQUEST AN APPOINTMENT" className="m-9" />

      <section className=" mt-8 w-5/6 md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="w-full"
        />
      </section>

      <section className="mt-11 flex w-5/6 flex-col md:mt-32 md:w-2/3 md:flex-row">
        <div className="w-5/6 md:w-1/2">
          <div className="md:h-48" />

          <p>AUTHENTIC</p>
          <p className="buz-font mt-4 text-4xl font-medium md:text-6xl">
            Award-Winning Fine Tailors
          </p>

          <div className="mt-11">
            <p className="mb-11">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              sequi eius ut nostrum est! Nam repellendus ex, necessitatibus quae
              neque, atque sed in ratione rerum ullam ducimus vel.
            </p>

            <Button name="RESPONSE PROCESS >" className="md:mr-20" />
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="mt-11 ml-auto h-3/4 w-full md:w-[45%]"
        />
      </section>

      <section className="mt-32 flex w-5/6 flex-col-reverse pb-20 md:w-3/4 md:flex-row">
        <div className="flex flex-col md:w-1/2 md:flex-row">
          <img
            src="https://images.unsplash.com/photo-1551290852-b562242a4b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            alt=""
            className="object-cover md:w-[80%]"
          />

          <img
            src="https://images.unsplash.com/photo-1618434958571-459c9c972ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
            className="h-64 object-cover md:mt-auto md:-ml-14 md:-mb-11 md:w-52"
          />
        </div>

        <div className="mt-0 mb-11 w-4/5 md:mt-11 md:w-1/2 md:pl-20">
          <p>AUTHENTIC</p>

          <p className="buz-font mt-4 text-4xl font-medium md:text-6xl">
            Using The Finest Cloth
          </p>
          <div className="md:ml-28">
            <p className="mt-11 mb-11">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              sequi eius ut est! Nam repellendus ex, necessitatibus quae.
            </p>

            <Button name="OUR SERVICES" />
          </div>
        </div>
      </section>

      {/* <section className="w-2/3 flex flex-row mt-8">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="w-full h-3/4 object-cover"
            />
          </div>

          <div className="w-1/2 pl-14">
            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aut
              at inventore consectetur fugit facere dolorum magni molestiae
              voluptate excepturi saepe sit deleniti tenetur id aspernatur
              doloremque, voluptates in! Minus.
            </p>

            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aut
              at inventore consectetur fugit facere dolorum magni molestiae
              voluptate excepturi saepe sit deleniti tenetur id aspernatur
              doloremque, voluptates in! Minus. voluptate excepturi saepe sit
              deleniti tenetur id aspernatur doloremque, voluptates in! Minus.
            </p>

            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aut
              at inventore consectetur fugit facere dolorum magni molestiae
              voluptate excepturi saepe sit deleniti tenetur id aspernatur
              doloremque, voluptates in! Minus.
            </p>
          </div>
        </section> */}
    </Layout>
  );
}

export default Index;
