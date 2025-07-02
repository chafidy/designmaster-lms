
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const plans = [
    {
      name: 'Découverte',
      price: '0',
      period: 'Gratuit',
      description: 'Parfait pour découvrir nos formations',
      features: [
        '3 cours d\'introduction',
        'Accès communauté',
        'Support par email',
        'Certificats basiques'
      ],
      limitations: [
        'Pas de cours avancés',
        'Pas de mentorat personnalisé',
        'Pas de projets pratiques'
      ],
      popular: false,
      cta: 'Commencer gratuitement'
    },
    {
      name: 'Étudiant',
      price: '2,500,000',
      period: '/an',
      description: 'Idéal pour les étudiants motivés',
      features: [
        'Accès à tous les cours',
        'Projets pratiques inclus',
        'Mentorat personnalisé',
        'Certificats professionnels',
        'Accès prioritaire aux nouveautés',
        'Portfolio en ligne'
      ],
      limitations: [
        'Pas de coaching 1:1'
      ],
      popular: true,
      cta: 'Choisir Étudiant'
    },
    {
      name: 'Professionnel',
      price: '4,800,000',
      period: '/an',
      description: 'Pour les professionnels ambitieux',
      features: [
        'Tout du plan Étudiant',
        'Coaching 1:1 mensuel',
        'Accès aux masterclass exclusives',
        'Réseau professionnel premium',
        'Opportunités d\'emploi',
        'Support prioritaire 24/7'
      ],
      limitations: [],
      popular: false,
      cta: 'Choisir Professionnel'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Choisissez votre plan d'apprentissage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des formules adaptées à vos besoins et votre budget. 
            Commencez gratuitement et évoluez à votre rythme.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative p-8 hover-lift animate-fade-in ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl scale-105' 
                  : 'border border-gray-200'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                  Plus populaire
                </Badge>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === '0' ? 'Gratuit' : `${plan.price} AR`}
                  </span>
                  {plan.price !== '0' && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                </div>
              </div>

              <Button 
                className={`w-full mb-6 ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Inclus :</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Non inclus :</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start">
                          <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Toutes les formules incluent une garantie satisfait ou remboursé de 30 jours
          </p>
          <p className="text-sm text-gray-500">
            Prix en Ariary Malagasy (AR). Paiement sécurisé par carte bancaire ou mobile money.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
