
import { Clock, Users, Star, Play } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CourseGrid = () => {
  const courses = [
    {
      id: 1,
      title: 'Maîtrise d\'Adobe Illustrator',
      description: 'Apprenez à créer des logos, illustrations et designs vectoriels professionnels.',
      instructor: 'Marie Dubois',
      duration: '12h 30min',
      level: 'Débutant',
      rating: 4.8,
      students: 2847,
      price: 89,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      modules: 8,
      isPopular: true
    },
    {
      id: 2,
      title: 'Figma pour UI/UX Design',
      description: 'Concevez des interfaces modernes et des prototypes interactifs avec Figma.',
      instructor: 'Thomas Martin',
      duration: '15h 45min',
      level: 'Intermédiaire',
      rating: 4.9,
      students: 1923,
      price: 109,
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      modules: 12,
      isPopular: false
    },
    {
      id: 3,
      title: 'Design System Avancé',
      description: 'Créez et maintenez des systèmes de design cohérents et évolutifs.',
      instructor: 'Sophie Leroy',
      duration: '8h 20min',
      level: 'Avancé',
      rating: 4.7,
      students: 987,
      price: 129,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      modules: 6,
      isPopular: false
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-800';
      case 'Avancé': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
            Formations{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Populaires
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos cours les mieux notés et rejoignez des milliers d'étudiants qui ont transformé leur carrière créative.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="overflow-hidden border-0 shadow-lg hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course thumbnail */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Popular badge */}
                {course.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-accent text-white font-semibold">
                    Populaire
                  </Badge>
                )}

                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:flex">
                    <Play className="w-5 h-5 text-gray-900 ml-0.5" />
                  </div>
                </div>

                {/* Level badge */}
                <Badge className={`absolute top-3 right-3 ${getLevelColor(course.level)} border-0`}>
                  {course.level}
                </Badge>
              </div>

              {/* Course content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="font-medium">{course.instructor}</span>
                </div>

                {/* Course stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                    {course.rating}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    {course.price}€
                  </div>
                  
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Voir le cours
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View all courses CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3 rounded-xl font-semibold">
            Voir tous les cours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
