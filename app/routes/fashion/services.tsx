import type { MetaFunction } from "remix";
import Button from "~/components/fashion/Button";
import Layout from "~/components/fashion/Layout";

export const meta: MetaFunction = () => {
  return {
    title: "Fashion Designer | Services",
    description: "Complete website for fashion designers.",
  };
};

function services() {
  return (
    <Layout>
      <section className="m-8 md:ml-36 w-4/5 md:w-3/4">
        <p>THE BEST</p>
        <h1 className="buz-font font-semibold text-4xl md:text-7xl mt-8">
          Exquisite craftmanship <br /> is at the heart of our work.
        </h1>
      </section>

      <section className="flex flex-col md:flex-row flex-4/5 md:w-1/2">
        <p className="border-t border-yellow-600 w-52 md:w-32 mt-3 mr-3 mb-11" />

        <p className="w-4/5 md:w-1/2 mr-auto ml-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          delectus veritatis iusto cupiditate recusandae porro omnis laboriosam
          cumque voluptate.
        </p>
      </section>

      <section
        className="w-full h-64 mt-11"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1581602835355-ef01c46a2fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></section>

      <section className="flex flex-col mt-11 items-center">
        <img
          src="https://th.bing.com/th/id/R.d274f48cbe6e7081140c6c661f112407?rik=leuylBUb7lWV5g&pid=ImgRaw&r=0"
          className="w-9 h-9 m-4"
          alt=""
        />
        <p className="font-bold">Lorem ipsum dolor sit amet,</p>
        <p>consectetur adipisicing elit. Fugit</p>
      </section>

      <h1 className="buz-font font-semibold text-5xl md:text-8xl w-4/5 md:w-2/3 text-center mt-11 mr-auto ml-auto">
        YOUR TRULY BESPOKE EXPERIENCE
      </h1>

      <p className="w-4/5 md:w-1/2 text-justify md:text-center mt-11 mr-auto ml-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam
        libero, rem vel non id blanditiis officia, velit sunt ad, consequuntur
        ut sed eveniet quo eos? Soluta adipisci autem possimus! libero, rem vel
        non id blanditiis officia, velit sunt ad, consequuntur ut sed eveniet
        quo eos? Soluta adipisci autem possimus!
      </p>

      <section className="mr-auto ml-auto mt-11 flex">
        <p className="border-t border-yellow-600 w-32 mt-3 mr-3" />
        <p>THE BEAUTY</p>
      </section>

      <section className="2-4/5 md:w-2/3 flex flex-col md:flex-row mt-11 mr-auto ml-auto">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="w-full h-3/4 object-cover mr-auto ml-auto"
          />
        </div>

        <div className="w-4/5 md:w-1/2 md:pl-14 mr-auto ml-auto mt-11">
          <p className="mb-5 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aut at
            inventore consectetur fugit facere dolorum magni molestiae voluptate
            excepturi saepe sit deleniti tenetur id aspernatur doloremque,
            voluptates in! Minus.
          </p>

          <p className="mb-5 text-justify">
            Lorvolupta em ipsum dolor, sit amet consectetur adipisicing elit.
            Non aut at inventore consectetur fugit facere dolorum magni
            molestiae voluptate excepturi saepe sit deleniti tenetur id
            aspernatur doloremque, voluptates in! Minus. voluptate excepturi
            saepe sit deleniti tenetur id aspernatur doloremque, voluptates in!
            Minus.
          </p>

          <p className="mb-5 text-justify">
            Dolor, sit amet consectetur adipisicing elit. Non aut at inventore
            consectetur fugit facere dolorum magni molestiae voluptate excepturi
            saepe sit deleniti tenetur id aspernatur doloremque, voluptates in!
            Minus.
          </p>

          <p className="mb-5 text-justify">
            Magni molestiae voluptate excepturi saepe sit deleniti tenetur id
            aspernatur doloremque, voluptates in! Minus.
          </p>
        </div>
      </section>

      {/* <section className="flex w-4/5 md:w-1/2 mr-auto ml-auto mt-11 display-none">
        <img
          src="https://images.unsplash.com/photo-1551290852-b562242a4b77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
          alt=""
          className="w-[80%] object-cover"
        />

        <img
          src="https://images.unsplash.com/photo-1611937663641-5cef5189d71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
          className="w-80  object-cover mt-auto -ml-36 -mb-28"
        />

        <img
          src="https://images.unsplash.com/photo-1481608726045-7407244fb7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt=""
          className="h-64 object-cover mt-auto -ml-80 -mb-28"
        />
      </section> */}

      <section className="m-8 w-4/5 md:w-1/2 mt-48 mr-auto ml-auto">
        <p>QUALITY</p>
        <h1 className="buz-font font-semibold text-4xl md:text-7xl mt-8">
          Superior Quality <br /> & Intelligent Design
        </h1>
      </section>

      <section className="mr-auto md:ml-56 mt-11 flex flex-col md:flex-row w-4/5 md:w-1/2">
        <p className="border-t border-yellow-600 w-80 mt-3 mr-3 mb-11" />

        <div className="md:mr-28 flex flex-col ml-11 mr-11 w-full">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem
            omnis cum nulla fugiat dicta autem at dolores accusantium unde.
          </p>

          <Button name="Lorem ipsum" className="mt-9 mr-auto pr-8 pl-8" />
        </div>
      </section>

      <section className="flex flex-col w-5/6 mt-24">
        <p className="border-t border-gray-500 w-2/3" />

        <div className="flex mt-28 flex-col md:flex-row">
          <div className="flex-1">
            <h3 className="text-2xl buz-font mt-4 mb-4">
              Discover the World of Bespoke Tailoring
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              amet, minima nemo odit id.
            </p>
          </div>

          <div className="flex flex-1 md:ml-36 mt-11">
            <div className="mr-3">
              <h3 className="text-2xl buz-font mt-4 mb-4">Contact</h3>
              <p>Lorem ipsum dolor sit amet, perspiciatis?</p>
            </div>

            <div>
              <h3 className="text-2xl buz-font mt-4 mb-4">Contact</h3>
              <p>Lorem ipsum dolor sit amet, perspiciatis?</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-5 mb-28">
          <div className="flex-1">
            <p className="mr-4 text-yellow-600">asfasfas asjfbasfasf</p>
          </div>

          <div className="flex md:ml-36 flex-1 justify-between mt-11">
            <p className="mr-4 text-yellow-600">asfasfasf</p>
            <p className="mr-4 text-yellow-600">asfasfasf</p>
            <p className="mr-4 text-yellow-600">asfasfasf</p>
          </div>
        </div>

        <p className="border-t border-gray-500 w-2/3 ml-auto" />
      </section>
    </Layout>
  );
}

export default services;
