import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Form from "../components/Form"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Content />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}
