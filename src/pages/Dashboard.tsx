
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  TrendingUp, 
  Play, 
  Users, 
  Star,
  Search,
  Bell,
  User
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import DashboardSidebar from '@/components/DashboardSidebar';
import ProgressWidget from '@/components/ProgressWidget';
import RecentActivity from '@/components/RecentActivity';

const Dashboard = () => {
  const currentCourses = [
    {
      id: 1,
      title: 'Maîtrise d\'Adobe Illustrator',
      instructor: 'Marie Dubois',
      progress: 75,
      nextLesson: 'Création de logos avancés',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=180&fit=crop',
      timeLeft: '2h 15min restantes',
      price: '150,000 AR'
    },
    {
      id: 2,
      title: 'Figma pour UI/UX Design',
      instructor: 'Thomas Martin',
      progress: 45,
      nextLesson: 'Prototypage interactif',
      thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=180&fit=crop',
      timeLeft: '8h 30min restantes',
      price: '200,000 AR'
    },
    {
      id: 3,
      title: 'Design System Avancé',
      instructor: 'Sophie Leroy',
      progress: 20,
      nextLesson: 'Tokens de design',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=180&fit=crop',
      timeLeft: '12h 05min restantes',
      price: '175,000 AR'
    }
  ];

  const recommendations = [
    {
      title: 'Animation et Motion Design',
      instructor: 'Lucas Moreau',
      rating: 4.9,
      students: 1234,
      price: '180,000 AR',
      thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=180&fit=crop'
    },
    {
      title: 'Photoshop pour Designers',
      instructor: 'Emma Rousseau',
      rating: 4.7,
      students: 2156,
      price: '160,000 AR',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=180&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Rechercher un cours, une leçon..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:ring-primary/20"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              Bonjour Alex ! 👋
            </h1>
            <p className="text-gray-600">
              Continuez votre parcours d'apprentissage et atteignez vos objectifs créatifs.
            </p>
          </div>

          {/* Progress Widgets */}
          <div className="mb-8">
            <ProgressWidget />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Current Courses */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Mes cours en cours
              </h2>
              
              <div className="space-y-6">
                {currentCourses.map((course, index) => (
                  <Card key={course.id} className="p-6 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-48 flex-shrink-0">
                        <div className="relative group cursor-pointer">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                              <Play className="w-5 h-5 text-gray-900 ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {course.title}
                          </h3>
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                            {course.price}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">Par {course.instructor}</p>
                        
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span>Progression</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Prochaine leçon: {course.nextLesson}
                            </p>
                            <p className="text-sm text-gray-500">{course.timeLeft}</p>
                          </div>
                          
                          <Button className="bg-primary hover:bg-primary/90">
                            Continuer
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <RecentActivity />

              {/* Recommendations */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-primary" />
                  Recommandé pour vous
                </h3>
                
                <div className="space-y-4">
                  {recommendations.map((course, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="flex space-x-3">
                        <img 
                          src={course.thumbnail} 
                          alt={course.title}
                          className="w-16 h-12 object-cover rounded-lg group-hover:scale-105 transition-transform"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate group-hover:text-primary">
                            {course.title}
                          </h4>
                          <p className="text-xs text-gray-600 mb-1">{course.instructor}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-xs text-gray-500">
                              <Star className="w-3 h-3 text-yellow-400 mr-1 fill-current" />
                              {course.rating}
                              <span className="mx-1">•</span>
                              <Users className="w-3 h-3 mr-1" />
                              {course.students}
                            </div>
                            <span className="text-xs font-semibold text-primary">
                              {course.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
