
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import CourseGrid from '@/components/CourseGrid';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ValueProposition />
      <CourseGrid />
      <Footer />
    </div>
  );
};

export default Index;
