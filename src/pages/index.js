import Head from 'next/head';
import Navbar from "../components/navbar";

//Home Page
const Page = () => {


  return (

    <>
      <>
        <Head>
          <title>Home</title>
          <meta
              name="description"
              content="Home"
          />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Navbar />

      </>
    </>
  );
};

export default Page;
