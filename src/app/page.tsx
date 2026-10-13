import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Expertise from "@/components/sections/Expertise";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import Clients from "@/components/sections/Clients";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Clients />
        <Work />
        <Expertise />
        <Process />
        <Industries />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
