
import { Palette, Target, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ValueProposition = () => {
  const values = [
    {
      icon: Palette,
      title: 'Spécialisation Design',
      description: 'Formations expertes en Adobe Illustrator et Figma, conçues par des professionnels du design graphique et UI/UX.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Apprentissage Pratique',
      description: 'Projets réels, exercices interactifs et portfolio professionnel pour appliquer immédiatement vos nouvelles compétences.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Communauté Active',
      description: 'Rejoignez une communauté bienveillante de designers, partagez vos créations et recevez des feedbacks constructifs.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            Pourquoi choisir{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DesignMaster
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une plateforme d'apprentissage unique dédiée aux créatifs, 
            avec une approche pratique et une communauté inspirante.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-8 border-0 shadow-lg hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
