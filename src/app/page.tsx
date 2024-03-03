import Tasks from "@/app/components/Tasks/Tasks";
import CallToAction from "@/app/components/molecules/landing/callToAction";
import Feature from "@/app/components/molecules/landing/feature";
import Footer from "@/app/components/molecules/landing/footer";
import Hero from "@/app/components/molecules/landing/hero";
import Testimonials from "@/app/components/molecules/landing/testimonials";
import { useGlobalState } from "./context/globalProvider";

export default function Home() {
  const { tasks } = useGlobalState();


  return (
    <main className="">
      {/* <Hero />
      <Feature />
      <Testimonials />
      <CallToAction />
      <Footer /> */}
      <Tasks title="All Tasks" tasks={tasks} />
    </main>
  );
}
