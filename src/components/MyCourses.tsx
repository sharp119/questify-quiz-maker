import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, Clock, HelpCircle, BookOpen, Sparkles } from "lucide-react";
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
    <div className="relative min-h-[600px] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5 animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Background locked quizzes with blur */}
      <div className="relative opacity-20 pointer-events-none blur-sm">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {lockedQuizzes.map((quiz) => (
            <Card key={quiz.id} className="p-4 space-y-3 bg-muted/30 border-muted/20">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                      {quiz.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted/20 text-muted-foreground border border-muted/20">
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

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-xl">
        <div className="text-center space-y-8 max-w-lg px-6 relative">
          {/* Decorative sparkles */}
          <div className="absolute -top-8 -left-8 text-primary/20 animate-pulse" style={{ animationDuration: '3s' }}>
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute -top-4 -right-12 text-primary/20 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <Sparkles className="w-8 h-8" />
          </div>
          
          {/* Animated lock icon with glow */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              {/* Lock container */}
              <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-background via-background/95 to-background/90 border-2 border-primary/20 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/5 to-transparent" />
                <Lock className="w-20 h-20 text-primary relative z-10 group-hover:animate-pulse" />
              </div>
            </div>
          </div>

          {/* Message with enhanced typography */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
              Your Course Quizzes Live Here
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg max-w-md mx-auto">
              This tab is for quizzes from your enrolled courses. Once you enroll, 
              all your practice tests will appear here, ready for you!
            </p>
          </div>

          {/* Enhanced CTA Button with glow */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="relative w-full group overflow-hidden bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/90 hover:via-primary hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 border border-primary/20"
              onClick={() => navigate("/")}
            >
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" style={{ transition: 'transform 0.8s ease' }} />
              
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Explore All Courses
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
