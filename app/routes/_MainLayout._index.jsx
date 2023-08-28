import Business from "../components/Business";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar"
import Testimonials from "../components/testimonials";

export const meta = () => {
  return [
    { title: "Keltec Performance" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <StatsBar />
      <Business />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
