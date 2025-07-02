
import { Check, Star, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const plans = [
    {
      name: 'Gratuit',
      price: 0,
      period: '',
      description: 'Parfait pour découvrir nos formations',
      features: [
        'Accès à 3 cours gratuits',
        'Communauté Discord',
        'Ressources de base',
        'Support communautaire'
      ],
      cta: 'Commencer gratuitement',
      variant: 'outline' as const,
      popular: false
    },
    {
      name: 'Pro',
      price: 29,
      period: '/mois',
      description: 'Pour les designers sérieux qui veulent progresser',
      features: [
        'Accès illimité à tous les cours',
        'Nouveaux cours chaque mois',
        'Projets pratiques avancés',
        'Certificats de réussite',
        'Support prioritaire',
        'Webinaires exclusifs'
      ],
      cta: 'Commencer l\'essai gratuit',
      variant: 'default' as const,
      popular: true
    },
    {
      name: 'Équipe',
      price: 99,
      period: '/mois',
      description: 'Pour les équipes et entreprises',
      features: [
        'Tout du plan Pro',
        'Jusqu\'à 10 utilisateurs',
        'Dashboard d\'administration',
        'Rapports de progression',
        'Formation personnalisée',
        'Account manager dédié'
      ],
      cta: 'Contacter les ventes',
      variant: 'outline' as const,
      popular: false
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            Des tarifs{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              transparents
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins. Pas de frais cachés, 
            possibilité d'annuler à tout moment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative p-8 border-2 transition-all duration-300 hover-lift ${
                plan.popular 
                  ? 'border-primary shadow-xl shadow-primary/20 scale-105' 
                  : 'border-gray-200 hover:border-primary/50'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Plus populaire
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-gray-900">
                    {plan.price}€
                  </span>
                  <span className="text-gray-600">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                variant={plan.variant}
                size="lg"
              >
                {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                {plan.cta}
              </Button>

              {plan.name === 'Pro' && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  14 jours d'essai gratuit, sans engagement
                </p>
              )}
            </Card>
          ))}
        </div>

        {/* Guarantee section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full">
            <Check className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-800 font-medium">
              Garantie satisfait ou remboursé 30 jours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
