import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MessageSquare, Trophy, TrendingUp } from "lucide-react";
import { QuizResultCard } from "@/components/QuizResultCard";
import { useToast } from "@/hooks/use-toast";

// Mock data - grouped by quiz with multiple attempts
const mockTestHistory = [
  {
    quizId: "1",
    title: "Indian Music Fundamentals",
    category: "Theory",
    attempts: [
      {
        id: "1",
        quizId: "1",
        title: "Indian Music Fundamentals",
        score: 20,
        correctAnswers: 2,
        totalQuestions: 10,
        timeSpent: 180,
        completedAt: "2024-10-24T10:30:00Z",
        difficulty: "Medium" as const,
        passed: false,
      },
      {
        id: "2",
        quizId: "1",
        title: "Indian Music Fundamentals",
        score: 55,
        correctAnswers: 5,
        totalQuestions: 10,
        timeSpent: 240,
        completedAt: "2024-10-25T14:20:00Z",
        difficulty: "Medium" as const,
        passed: true,
      },
    ],
  },
  {
    quizId: "2",
    title: "Raga Identification",
    category: "Practical",
    attempts: [
      {
        id: "3",
        quizId: "2",
        title: "Raga Identification",
        score: 75,
        correctAnswers: 15,
        totalQuestions: 20,
        timeSpent: 600,
        completedAt: "2024-10-23T16:45:00Z",
        difficulty: "Hard" as const,
        passed: true,
      },
    ],
  },
];

const seriesFeedback = {
  title: "July Series Batch Review",
  message: "Good progress overall! Your understanding of Ragas is improving nicely. However, I've noticed your Tala theory needs more attention. Please review chapters 3 and 4, and practice the exercises. Keep up the consistent effort!",
  date: "2024-10-20",
  instructor: "Pt. Rajesh Kumar",
};

const Performance = () => {
  const { toast } = useToast();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleDownloadReport = () => {
    toast({
      title: "Downloading Report",
      description: "Your performance report is being generated...",
    });
  };

  const handleRetake = (quizId: string) => {
    toast({
      title: "Starting Quiz",
      description: "Redirecting to quiz...",
    });
  };

  const handleViewDetails = (attemptId: string) => {
    toast({
      title: "Loading Details",
      description: "Opening detailed results...",
    });
  };

  const totalAttempts = mockTestHistory.reduce((sum, quiz) => sum + quiz.attempts.length, 0);
  const passedAttempts = mockTestHistory.reduce(
    (sum, quiz) => sum + quiz.attempts.filter((a) => a.passed).length,
    0
  );
  const avgScore =
    mockTestHistory.reduce((sum, quiz) => sum + quiz.attempts.reduce((s, a) => s + a.score, 0), 0) /
    totalAttempts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              My Performance
            </h1>
            <p className="text-muted-foreground">Track your progress and review feedback</p>
          </div>
          <Button onClick={handleDownloadReport} size="lg" className="gap-2">
            <Download className="w-4 h-4" />
            Download Report
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Attempts</p>
                  <p className="text-2xl font-bold">{totalAttempts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Passed</p>
                  <p className="text-2xl font-bold">{passedAttempts}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                  <p className="text-2xl font-bold">{avgScore.toFixed(0)}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Series Feedback Card */}
        <Card className="mb-8 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center animate-pulse">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl">Teacher's Review: {seriesFeedback.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <span>{seriesFeedback.instructor}</span>
                    <span>•</span>
                    <span>{new Date(seriesFeedback.date).toLocaleDateString()}</span>
                  </CardDescription>
                </div>
              </div>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Series Feedback
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{seriesFeedback.message}</p>
          </CardContent>
        </Card>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={selectedFilter === "all" ? "default" : "outline"}
            onClick={() => setSelectedFilter("all")}
            size="sm"
          >
            All Tests
          </Button>
          <Button
            variant={selectedFilter === "passed" ? "default" : "outline"}
            onClick={() => setSelectedFilter("passed")}
            size="sm"
          >
            Passed
          </Button>
          <Button
            variant={selectedFilter === "failed" ? "default" : "outline"}
            onClick={() => setSelectedFilter("failed")}
            size="sm"
          >
            Failed
          </Button>
        </div>

        {/* Test History - Grouped by Quiz */}
        <div className="space-y-8">
          {mockTestHistory.map((quiz) => (
            <div key={quiz.quizId} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-px bg-border flex-1" />
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">{quiz.title}</h3>
                  <Badge variant="outline">{quiz.attempts.length} attempt{quiz.attempts.length > 1 ? 's' : ''}</Badge>
                </div>
                <div className="h-px bg-border flex-1" />
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {quiz.attempts.map((attempt, index) => (
                  <div key={attempt.id} className="relative">
                    <div className="absolute -left-2 top-4 text-xs font-medium text-muted-foreground bg-background px-2 py-1 rounded-md border">
                      #{quiz.attempts.length - index}
                    </div>
                    <QuizResultCard
                      result={attempt}
                      onRetake={() => handleRetake(quiz.quizId)}
                      onViewDetails={() => handleViewDetails(attempt.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Performance;
