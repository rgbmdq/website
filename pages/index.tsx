import Content from "../components/content/content";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";
import Testimonials from "../components/testimonials/testimonials";
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
