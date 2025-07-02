
import { Play, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AnimatedCounter from '@/components/AnimatedCounter';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Formation certifiante
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Maîtrisez le{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Design Créatif
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Apprenez Adobe Illustrator et Figma avec nos formations expertes. 
              Rejoignez une communauté de designers passionnés et développez vos compétences créatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold">
                Commencer gratuitement
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-xl font-semibold group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Voir la démo
              </Button>
            </div>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  <AnimatedCounter end={2800} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Étudiants actifs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-sm text-gray-600">Cours</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video/Visual */}
          <div className="animate-slide-up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-0 shadow-2xl">
              <div className="aspect-video bg-gray-800 flex items-center justify-center relative group cursor-pointer">
                {/* Video placeholder */}
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=450&fit=crop&crop=face"
                  alt="Aperçu du cours"
                  className="w-full h-full object-cover"
                />
                
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-gray-900 ml-1" />
                  </div>
                </div>

                {/* Video info overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">Formation Adobe Illustrator</h3>
                        <p className="text-gray-600 text-xs">Introduction gratuite</p>
                      </div>
                      <div className="flex items-center text-xs text-gray-600">
                        <Clock className="w-3 h-3 mr-1" />
                        5:42
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
