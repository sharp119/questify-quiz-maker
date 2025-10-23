import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, Clock, HelpCircle, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock locked quizzes for visual effect
const lockedQuizzes = [
  {
    id: 1,
    title: "Indian Music Fundamentals (Mixed)",
    description: "A quiz on the core concepts of Indian music, presented in a mixed Hindi-English format.",
    category: "Music Theory",
    difficulty: "Easy",
    duration: 25,
    questions: 12,
  },
  {
    id: 2,
    title: "Advanced Raga and Tala Theory",
    description: "A technical quiz on the finer aspects of Raga structure and Tala properties.",
    category: "Advanced Theory",
    difficulty: "Hard",
    duration: 45,
    questions: 20,
  },
  {
    id: 3,
    title: "Famous Musicians and Instruments",
    description: "A quiz to identify famous Indian classical musicians and their instruments.",
    category: "Music History",
    difficulty: "Medium",
    duration: 25,
    questions: 12,
  },
];

const MyCourses = () => {
  const navigate = useNavigate();

  const difficultyColors = {
    Easy: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    Medium: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    Hard: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  };

  return (
    <div className="relative min-h-[600px]">
      {/* Background locked quizzes */}
      <div className="opacity-30 pointer-events-none">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {lockedQuizzes.map((quiz) => (
            <Card key={quiz.id} className="p-4 space-y-3 bg-muted/50">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                      {quiz.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {quiz.category}
                      </span>
                    </div>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-md border ${
                    difficultyColors[quiz.difficulty as keyof typeof difficultyColors]
                  }`}
                >
                  {quiz.difficulty}
                </span>
              </div>

              <p className="text-xs text-muted-foreground line-clamp-2">
                {quiz.description}
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-border/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">{quiz.duration} min</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <HelpCircle className="w-4 h-4" />
                    <span className="text-xs">{quiz.questions}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Centered overlay with lock and message */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="text-center space-y-6 max-w-md px-6">
          {/* Large lock icon */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-muted/50 border-4 border-border/50 flex items-center justify-center">
              <Lock className="w-16 h-16 text-muted-foreground" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground">
              Your Course Quizzes Live Here
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This tab is for quizzes from your enrolled courses. Once you enroll, 
              all your practice tests will appear here, ready for you!
            </p>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-primary via-primary to-primary/80 hover:opacity-90 transition-opacity"
            onClick={() => navigate("/")}
          >
            Explore All Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
