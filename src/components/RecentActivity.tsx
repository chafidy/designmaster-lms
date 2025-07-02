
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trophy, Users, Play } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'course_completed',
      title: 'Cours terminé',
      description: 'Maîtrise d\'Adobe Illustrator - Chapitre 5',
      time: 'Il y a 2 heures',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      id: 2,
      type: 'badge_earned',
      title: 'Badge obtenu',
      description: 'Expert en création de logos',
      time: 'Il y a 1 jour',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      id: 3,
      type: 'community_post',
      title: 'Activité communauté',
      description: 'Nouveau commentaire sur votre projet',
      time: 'Il y a 2 jours',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      id: 4,
      type: 'lesson_started',
      title: 'Leçon commencée',
      description: 'Figma pour UI/UX Design - Prototypage',
      time: 'Il y a 3 jours',
      icon: Play,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Activité récente
      </h3>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`w-8 h-8 ${activity.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
              <activity.icon className={`w-4 h-4 ${activity.color}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {activity.time}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;
