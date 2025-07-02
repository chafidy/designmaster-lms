
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "Les cours sont-ils adaptés aux débutants complets ?",
      answer: "Absolument ! Notre approche pédagogique progressive permet aux débutants de maîtriser les bases avant d'aborder des concepts plus avancés. Chaque cours commence par les fondamentaux et évolue étape par étape."
    },
    {
      question: "Quelle est la différence entre les plans Gratuit et Pro ?",
      answer: "Le plan Gratuit donne accès à 3 cours d'introduction et à la communauté. Le plan Pro offre un accès illimité à tous les cours, les nouveautés mensuelles, les certificats, et un support prioritaire."
    },
    {
      question: "Les certificats sont-ils reconnus par les employeurs ?",
      answer: "Nos certificats attestent de vos compétences pratiques acquises. Ils sont valorisés par de nombreuses entreprises du secteur créatif. Plus important encore, les projets réalisés constituent un portfolio solide pour vos candidatures."
    },
    {
      question: "Puis-je annuler mon abonnement à tout moment ?",
      answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre dashboard. L'annulation prend effet à la fin de votre période de facturation en cours, sans frais supplémentaires."
    },
    {
      question: "Y a-t-il une période d'essai gratuite ?",
      answer: "Oui ! Le plan Pro offre 14 jours d'essai gratuit, sans engagement. Vous avez accès à toutes les fonctionnalités premium pendant cette période."
    },
    {
      question: "Les cours sont-ils mis à jour régulièrement ?",
      answer: "Nous mettons à jour nos cours existants plusieurs fois par an pour suivre les évolutions des logiciels. De nouveaux cours sont ajoutés chaque mois, couvrant les dernières tendances et techniques du design."
    },
    {
      question: "Puis-je télécharger les vidéos pour un visionnage hors ligne ?",
      answer: "Les abonnés Pro peuvent télécharger les vidéos via notre application mobile pour un accès hors ligne. Cette fonctionnalité est parfaite pour apprendre pendant vos déplacements."
    },
    {
      question: "Comment fonctionne le support communautaire ?",
      answer: "Notre communauté Discord active compte plus de 15 000 membres. Vous pouvez poser vos questions, partager vos créations, participer à des défis, et recevoir des retours constructifs de la communauté et des formateurs."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            Questions{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              fréquentes
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur DesignMaster et nos formations.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a 
            href="mailto:support@designmaster.fr" 
            className="text-primary hover:text-primary/80 font-semibold underline"
          >
            Contactez notre équipe support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
