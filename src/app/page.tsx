import CallToAction from "@/components/molecules/landing/callToAction";
import Feature from "@/components/molecules/landing/feature";
import Footer from "@/components/molecules/landing/footer";
import Hero from "@/components/molecules/landing/hero";
import Testimonials from "@/components/molecules/landing/testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
