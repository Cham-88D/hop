import Head from 'next/head';
import Navbar from "../components/navbar";
import  Hero from  "../components/hero";
import Section from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Footer from "@/components/footer";
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
        <Hero />
        <Section/>
        <Section2/>
        <Section3/>
        <Footer/>


      </>
    </>
  );
};

export default Page;
