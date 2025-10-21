import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Star, Users, TrendingUp } from "lucide-react";

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  duration: number;
  questions: number;
  rating: number;
  completions: number;
  progress?: number;
  icon: string;
}

interface QuizCardProps {
  quiz: Quiz;
  onClick?: () => void;
}

const difficultyColors = {
  easy: "bg-success text-success-foreground",
  medium: "bg-accent text-accent-foreground",
  hard: "bg-destructive text-destructive-foreground",
};

export const QuizCard = ({ quiz, onClick }: QuizCardProps) => {
  return (
    <Card
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] animate-fade-in bg-gradient-card"
      onClick={onClick}
    >
      <div className="p-4 space-y-3">
        {/* Header with Icon and Category */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-2xl shadow-primary">
              {quiz.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">
                {quiz.title}
              </h3>
              <Badge variant="secondary" className="mt-1 text-xs">
                {quiz.category}
              </Badge>
            </div>
          </div>
          <Badge className={`${difficultyColors[quiz.difficulty]} text-xs capitalize`}>
            {quiz.difficulty}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">{quiz.description}</p>

        {/* Progress Bar (if quiz is started) */}
        {quiz.progress !== undefined && quiz.progress > 0 && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span className="font-medium">{quiz.progress}%</span>
            </div>
            <Progress value={quiz.progress} className="h-2" />
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{quiz.duration} min</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{quiz.questions} questions</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              <span className="font-medium">{quiz.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>{quiz.completions}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
