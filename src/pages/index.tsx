import { AboutUs } from "@/components/about-us";
import { Contact } from "@/components/contact";
import { Feedbacks } from "@/components/feedbacks";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import Head from "next/head";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background overflow-x-hidden">
      <Head>
        <title>beautysalon - Saúde natural para os seus cabelos</title>
      </Head>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Feedbacks />
      <Contact />
      <Footer />
    </main>
  );
}
