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
      <div className="flex flex-col m-4 items-center">
        <img
          src="https://th.bing.com/th/id/R.d274f48cbe6e7081140c6c661f112407?rik=leuylBUb7lWV5g&pid=ImgRaw&r=0"
          className="w-9 h-9 m-4"
          alt=""
        />
        <p className="font-bold">Lorem ipsum dolor sit amet,</p>
        <p>consectetur adipisicing Fugit.</p>
      </div>

      <h1 className="buz-font font-semibold text-8xl w-2/3 text-center m-8">
        YOUR TRULY BESPOKE EXPERIENCE
      </h1>

      <p className="w-1/2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam
        libero, rem vel non id blanditiis officia, velit sunt ad, consequuntur
        ut sed eveniet quo eos? Soluta adipisci autem possimus! libero, rem vel
        non id blanditiis officia, velit sunt ad, consequuntur ut sed eveniet
        quo eos? Soluta adipisci autem possimus!
      </p>

      <Button name="Lorem ipsum dolor sit amet consectetur" className="m-9" />

      <section className="w-1/2 mt-8">
        <img
          src="https://images.unsplash.com/photo-1522968439036-e6338d0ed84f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="w-full"
        />
      </section>

      <section className="w-2/3 mt-32 flex flex-row">
        <div className="w-1/2">
          <div className="h-48" />

          <p>AUTHENTIC</p>
          <p className="buz-font font-medium text-6xl mt-4">
            Award-Winning Fine Tailors
          </p>

          <div className="mt-11 ">
            <p className="mb-11">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              sequi eius ut nostrum est! Nam repellendus ex, necessitatibus quae
              neque, atque sed in ratione rerum ullam ducimus vel.
            </p>

            <Button name="Browse More" className="mr-20" />
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="w-[45%] h-3/4 ml-auto"
        />
      </section>

      <section className="w-3/4 mt-32 flex flex-row pb-20">
        <div className="flex w-1/2">
          <img
            src="https://images.unsplash.com/photo-1551290852-b562242a4b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
            alt=""
            className="w-[80%] object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1618434958571-459c9c972ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            alt=""
            className="w-52 h-64 object-cover mt-auto -ml-14 -mb-11"
          />
        </div>

        <div className="w-1/2 pl-20">
          <p>AUTHENTIC</p>

          <p className="buz-font font-medium text-7xl mt-4">
            Using The Finest Cloth
          </p>
          <div className="ml-28">
            <p className="mt-11 mb-11">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
              sequi eius ut est! Nam repellendus ex, necessitatibus quae.
            </p>

            <Button name="Browse More" className="" />
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
