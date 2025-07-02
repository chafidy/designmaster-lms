
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: 'Formations',
      links: [
        { name: 'Adobe Illustrator', href: '/cours/illustrator' },
        { name: 'Figma UI/UX', href: '/cours/figma' },
        { name: 'Design System', href: '/cours/design-system' },
        { name: 'Portfolio', href: '/cours/portfolio' }
      ]
    },
    {
      title: 'Plateforme',
      links: [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Communauté', href: '/community' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'Support', href: '/support' }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos', href: '/about' },
        { name: 'Équipe', href: '/team' },
        { name: 'Carrières', href: '/careers' },
        { name: 'Presse', href: '/press' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Centre d\'aide', href: '/help' },
        { name: 'Contact', href: '/contact' },
        { name: 'Status', href: '/status' },
        { name: 'API', href: '/api' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Restez informé des nouveautés
              </h3>
              <p className="text-gray-400">
                Recevez nos derniers cours, tips design et actualités créatives directement dans votre boîte mail.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Votre adresse email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-primary/20"
              />
              <Button className="bg-primary hover:bg-primary/90 px-6">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-heading font-bold text-white">
                Design<span className="text-primary">Master</span>
              </span>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              La plateforme d'apprentissage créatif qui transforme votre passion en expertise professionnelle.
            </p>

            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                contact@designmaster.fr
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                +33 1 23 45 67 89
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                Paris, France
              </div>
            </div>
          </div>

          {/* Footer links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 DesignMaster. Tous droits réservés.
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Confidentialité
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                CGU
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
