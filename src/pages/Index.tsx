import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { FeaturedClasses } from "@/components/home/FeaturedClasses";
import { CallToAction } from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Philosophy />
      <FeaturedClasses />
      <CallToAction />
    </Layout>
  );
};

export default Index;
