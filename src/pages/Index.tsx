
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import CourseGrid from '@/components/CourseGrid';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueProposition />
      <CourseGrid />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
