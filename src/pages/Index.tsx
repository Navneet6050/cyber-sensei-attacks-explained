
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import SecurityBasicsSection from "@/components/home/SecurityBasicsSection";
import AttackVectorsSection from "@/components/home/AttackVectorsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SecurityBasicsSection />
      <AttackVectorsSection />
    </Layout>
  );
};

export default Index;
