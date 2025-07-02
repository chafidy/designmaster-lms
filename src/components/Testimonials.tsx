
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sophie Laurent',
      title: 'Designer UI/UX chez Spotify',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      content: 'Les formations DesignMaster ont transformé ma carrière. En 6 mois, je suis passée de débutante à designer senior dans une startup tech.',
      rating: 5,
      company: 'Spotify'
    },
    {
      id: 2,
      name: 'Marc Dubois',
      title: 'Directeur Créatif',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      content: 'La qualité pédagogique est exceptionnelle. Les projets pratiques m\'ont permis de constituer un portfolio qui fait la différence.',
      rating: 5,
      company: 'Freelance'
    },
    {
      id: 3,
      name: 'Emma Chen',
      title: 'Product Designer chez Airbnb',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      content: 'L\'approche pratique et la communauté bienveillante font de DesignMaster LA référence pour apprendre le design moderne.',
      rating: 5,
      company: 'Airbnb'
    },
    {
      id: 4,
      name: 'Thomas Martin',
      title: 'Lead Designer chez Notion',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      content: 'Les formateurs sont des experts reconnus. Chaque cours m\'a apporté des compétences directement applicables en entreprise.',
      rating: 5,
      company: 'Notion'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            Ce que disent nos{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              étudiants
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de designers qui ont transformé leur carrière grâce à nos formations.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="p-8 lg:p-12 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <div className="text-center">
                      {/* Avatar */}
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-6 ring-4 ring-primary/10"
                      />
                      
                      {/* Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Content */}
                      <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author info */}
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-primary font-medium">
                          {testimonial.title}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
