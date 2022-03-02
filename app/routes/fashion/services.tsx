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
      <section className="m-8 w-4/5 md:ml-36 md:w-3/4">
        <p>THE BEST</p>
        <h1 className="buz-font mt-8 text-4xl font-semibold md:text-7xl">
          Exquisite craftmanship <br /> is at the heart of our work.
        </h1>
      </section>

      <section className="flex-4/5 flex flex-col md:w-1/2 md:flex-row">
        <p className="mt-3 mr-3 mb-11 w-52 border-t border-yellow-600 md:w-32" />

        <p className="mr-auto ml-auto w-4/5 md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          delectus veritatis iusto cupiditate recusandae porro omnis laboriosam
          cumque voluptate.
        </p>
      </section>

      <section
        className="mt-11 h-64 w-full"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1581602835355-ef01c46a2fd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></section>

      <section className="mt-11 flex flex-col items-center">
        <img
          src="https://th.bing.com/th/id/R.d274f48cbe6e7081140c6c661f112407?rik=leuylBUb7lWV5g&pid=ImgRaw&r=0"
          className="m-4 h-9 w-9"
          alt=""
        />
        <p className="font-bold">Lorem ipsum dolor sit amet,</p>
        <p>consectetur adipisicing elit. Fugit</p>
      </section>

      <h1 className="buz-font mt-11 mr-auto ml-auto w-full text-center text-5xl font-semibold md:w-2/3 md:text-8xl">
        YOUR TRULY BESPOKE EXPERIENCE
      </h1>

      <p className="mt-11 mr-auto ml-auto w-4/5 text-justify md:w-1/2 md:text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam
        libero, rem vel non id blanditiis officia, velit sunt ad, consequuntur
        ut sed eveniet quo eos? Soluta adipisci autem possimus! libero, rem vel
        non id blanditiis officia, velit sunt ad, consequuntur ut sed eveniet
        quo eos? Soluta adipisci autem possimus!
      </p>

      <section className="mr-auto ml-auto mt-11 flex">
        <p className="mt-3 mr-3 w-32 border-t border-yellow-600" />
        <p>OUR STORY</p>
      </section>

      <section className="2-4/5 mt-11 mr-auto ml-auto flex flex-col md:w-2/3 md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="mr-auto ml-auto h-3/4 w-full object-cover"
          />
        </div>

        <div className="mr-auto ml-auto mt-11 w-4/5 md:mt-0 md:w-1/2 md:pl-14">
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

      <section className="m-8 mt-48 mr-auto ml-auto w-4/5 md:w-1/2">
        <p>GALLERY</p>
        <h1 className="buz-font mt-8 text-4xl font-semibold md:text-7xl">
          Superior Quality <br /> & Intelligent Design
        </h1>
      </section>

      <section className="mr-auto mt-11 flex w-4/5 flex-col md:ml-56 md:w-1/2 md:flex-row">
        <p className="mt-3 mr-3 mb-11 w-80 border-t border-yellow-600" />

        <div className="ml-11 mr-11 flex w-full flex-col md:mr-28">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem
            omnis cum nulla fugiat dicta autem at dolores accusantium unde.
          </p>

          <Button name="VIEW GALLERY" className="mt-9 mr-auto pr-8 pl-8" />
        </div>
      </section>

      <section className="mt-24 flex w-5/6 flex-col">
        <p className="w-2/3 border-t border-gray-500" />

        <div className="mt-28 flex flex-col md:flex-row">
          <div className="flex-1">
            <h3 className="buz-font mt-4 mb-4 text-2xl">
              Discover the World of Bespoke Tailoring
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              amet, minima nemo odit id.
            </p>
          </div>

          <div className="mt-11 flex flex-1 md:ml-36 md:mt-0">
            <div className="mr-3">
              <h3 className="buz-font mt-4 mb-4 text-2xl">Contact</h3>
              <p>Lorem ipsum dolor, perspiciatis?</p>
              <p>Lorem ipsum dolor sit amet?</p>
            </div>

            <div>
              <h3 className="buz-font mt-4 mb-4 text-2xl">Address</h3>
              <p>perspiciatis?</p>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        <div className="mt-5 mb-28 flex flex-col md:flex-row">
          <div className="flex-1">
            <p className="mr-4 text-yellow-600">asfasfas asjfbasfasf</p>
          </div>

          <div className="mt-11 flex flex-1 justify-between md:ml-36">
            <p className="mr-4 text-yellow-600">WHATSAPP</p>
            <p className="mr-4 text-yellow-600">INSTAGRAM</p>
            <p className="mr-4 text-yellow-600">FACEBOOK</p>
          </div>
        </div>

        <p className="ml-auto w-2/3 border-t border-gray-500" />
      </section>
    </Layout>
  );
}

export default services;
