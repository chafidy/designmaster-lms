
import { useState } from 'react';
import { Search, Filter, Grid, List, Clock, Users, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';

const Catalog = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  const courses = [
    {
      id: 1,
      title: 'Maîtrise d\'Adobe Illustrator : De Débutant à Expert',
      description: 'Formation complète pour créer des logos, illustrations et designs vectoriels professionnels. Apprenez toutes les techniques avancées.',
      instructor: 'Marie Dubois',
      duration: '12h 30min',
      level: 'Débutant',
      rating: 4.8,
      students: 2847,
      price: 89,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      modules: 8,
      tools: ['Illustrator'],
      skills: ['Logo Design', 'Illustration', 'Typographie'],
      isPopular: true,
      isBestseller: false
    },
    {
      id: 2,
      title: 'Figma pour UI/UX Design : Interface Moderne',
      description: 'Concevez des interfaces modernes et des prototypes interactifs avec Figma. De la wireframe au prototype final.',
      instructor: 'Thomas Martin',
      duration: '15h 45min',
      level: 'Intermédiaire',
      rating: 4.9,
      students: 1923,
      price: 109,
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop',
      modules: 12,
      tools: ['Figma'],
      skills: ['UI Design', 'UX Design', 'Prototypage'],
      isPopular: false,
      isBestseller: true
    },
    {
      id: 3,
      title: 'Design System Avancé : Cohérence et Évolutivité',
      description: 'Créez et maintenez des systèmes de design cohérents et évolutifs pour vos projets d\'entreprise.',
      instructor: 'Sophie Leroy',
      duration: '8h 20min',
      level: 'Avancé',
      rating: 4.7,
      students: 987,
      price: 129,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      modules: 6,
      tools: ['Figma', 'Sketch'],
      skills: ['Design System', 'Documentation', 'Tokens'],
      isPopular: false,
      isBestseller: false
    },
    {
      id: 4,
      title: 'Animation et Motion Design avec After Effects',
      description: 'Donnez vie à vos créations avec des animations fluides et du motion design professionnel.',
      instructor: 'Lucas Moreau',
      duration: '10h 15min',
      level: 'Intermédiaire',
      rating: 4.6,
      students: 1456,
      price: 99,
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
      modules: 9,
      tools: ['After Effects'],
      skills: ['Animation', 'Motion Design', 'Vidéo'],
      isPopular: true,
      isBestseller: false
    },
    {
      id: 5,
      title: 'Photoshop pour Designers : Retouche Avancée',
      description: 'Maîtrisez les techniques de retouche photo et de création graphique avec Photoshop.',
      instructor: 'Emma Rousseau',
      duration: '14h 10min',
      level: 'Débutant',
      rating: 4.5,
      students: 2156,
      price: 79,
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
      modules: 11,
      tools: ['Photoshop'],
      skills: ['Retouche', 'Photomontage', 'Digital Art'],
      isPopular: false,
      isBestseller: false
    },
    {
      id: 6,
      title: 'Branding Complet : De l\'Idée à l\'Identité',
      description: 'Créez des identités visuelles complètes et mémorables pour des marques modernes.',
      instructor: 'Pierre Dubois',
      duration: '16h 30min',
      level: 'Avancé',
      rating: 4.8,
      students: 745,
      price: 149,
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop',
      modules: 14,
      tools: ['Illustrator', 'Photoshop'],
      skills: ['Branding', 'Logo Design', 'Stratégie'],
      isPopular: false,
      isBestseller: true
    }
  ];

  const levels = ['Débutant', 'Intermédiaire', 'Avancé'];
  const tools = ['Illustrator', 'Figma', 'Photoshop', 'After Effects', 'Sketch'];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-blue-100 text-blue-800';
      case 'Avancé': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredCourses = courses.filter(course => {
    if (selectedLevel && course.level !== selectedLevel) return false;
    if (selectedTool && !course.tools.includes(selectedTool)) return false;
    return true;
  });

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Card className="overflow-hidden border-0 shadow-lg hover-lift group animate-fade-in">
      <div className="relative overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {course.isPopular && (
            <Badge className="bg-accent text-white font-semibold">
              Populaire
            </Badge>
          )}
          {course.isBestseller && (
            <Badge className="bg-orange-500 text-white font-semibold">
              Bestseller
            </Badge>
          )}
        </div>

        <Badge className={`absolute top-3 right-3 ${getLevelColor(course.level)} border-0`}>
          {course.level}
        </Badge>

        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/90 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:flex">
            <Play className="w-5 h-5 text-gray-900 ml-0.5" />
          </div>
        </div>
      </div>

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

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
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
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">
            Catalogue des formations
          </h1>
          <p className="text-gray-600">
            Découvrez nos {courses.length} formations expertes en design graphique et UI/UX
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Rechercher un cours, instructeur..."
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              {/* Level Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Niveau:</span>
                <div className="flex gap-1">
                  {levels.map((level) => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                      className="text-xs"
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Tool Filter */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Outil:</span>
                <div className="flex gap-1">
                  {tools.map((tool) => (
                    <Button
                      key={tool}
                      variant={selectedTool === tool ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTool(selectedTool === tool ? null : tool)}
                      className="text-xs"
                    >
                      {tool}
                    </Button>
                  ))}
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 border rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active filters */}
          <div className="flex items-center gap-2 mt-4">
            {selectedLevel && (
              <Badge variant="secondary" className="gap-1">
                Niveau: {selectedLevel}
                <button onClick={() => setSelectedLevel(null)} className="ml-1 hover:text-red-500">
                  ×
                </button>
              </Badge>
            )}
            {selectedTool && (
              <Badge variant="secondary" className="gap-1">
                Outil: {selectedTool}
                <button onClick={() => setSelectedTool(null)} className="ml-1 hover:text-red-500">
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredCourses.length} cours trouvé{filteredCourses.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Course Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 py-3 rounded-xl font-semibold">
            Charger plus de cours
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
