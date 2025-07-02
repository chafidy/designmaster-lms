
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy, Target, Clock, Zap } from 'lucide-react';

const ProgressWidget = () => {
  const stats = [
    {
      title: 'Cours terminés',
      value: 8,
      total: 12,
      percentage: 67,
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Objectifs atteints',
      value: 15,
      total: 20,
      percentage: 75,
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Heures d\'étude',
      value: 84,
      total: 100,
      percentage: 84,
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Streak actuel',
      value: 12,
      total: 30,
      percentage: 40,
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4 hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500">/ {stat.total}</div>
            </div>
          </div>
          
          <div className="mb-2">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>{stat.title}</span>
              <span>{stat.percentage}%</span>
            </div>
            <Progress value={stat.percentage} className="h-2" />
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProgressWidget;
