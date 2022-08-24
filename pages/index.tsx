import Header from "../components/Header";
import Hero from "../components/Hero";
// import Content from "../components/Content";
// import Testimonials from "../components/Testimonials";
import Form from "../components/Form"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Content />
      <Testimonials /> */}
      <Form /> 
      <Footer />
    </>
  );
}
