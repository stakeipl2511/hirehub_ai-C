import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import VideoPlayer from './components/VideoPlayer';
import CourseTabNavigation from './components/CourseTabNavigation';
import CourseOverview from './components/CourseOverview';
import CourseModules from './components/CourseModules';
import DiscussionForum from './components/DiscussionForum';
import CourseResources from './components/CourseResources';
import ProgressTracker from './components/ProgressTracker';
import AITranscriptPanel from './components/AITranscriptPanel';
import InteractiveQuiz from './components/InteractiveQuiz';
import AICareerCoachChat from './components/AICareerCoachChat';

const CourseDetailLearningInterface = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showTranscript, setShowTranscript] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showAICoach, setShowAICoach] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mock course data
  const courseData = {
    id: 1,
    title: "Advanced React Patterns & Performance",
    description: `Master advanced React concepts including render props, higher-order components, compound components, and performance optimization techniques. This comprehensive course covers modern React patterns used in production applications, with hands-on projects and real-world examples.\n\nYou'll learn to build scalable, maintainable React applications using industry best practices and advanced patterns that will set you apart as a React developer.`,
    instructor: {
      name: "Sarah Chen",
      title: "Senior React Developer at Meta",
      bio: "Sarah has 8+ years of experience building large-scale React applications. She's contributed to React core and has taught thousands of developers worldwide.",students: "45,230",courses: "12"
    },
    duration: "8 hours 45 minutes",studentsCount: "12,450",rating: 4.8,level: "Advanced",
    progress: 65,
    objectives: [
      "Master render props and higher-order components","Implement compound component patterns","Optimize React app performance with profiling","Build reusable component libraries","Handle complex state management scenarios","Apply advanced testing strategies"
    ],
    currentVideo: {
      title: "Module 3: Compound Components Pattern",url: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
    }
  };

  const moduleData = [
    {
      title: "Introduction to Advanced Patterns",
      description: "Overview of advanced React patterns and when to use them",
      duration: 120,
      lessons: [
        { title: "Course Overview", type: "video", duration: 15, completed: true, current: false },
        { title: "Pattern Categories", type: "video", duration: 25, completed: true, current: false },
        { title: "Setup & Prerequisites", type: "reading", duration: 10, completed: true, current: false },
        { title: "Knowledge Check", type: "quiz", duration: 15, completed: true, current: false }
      ]
    },
    {
      title: "Render Props Pattern",
      description: "Learn to share code between components using render props",
      duration: 180,
      lessons: [
        { title: "What are Render Props?", type: "video", duration: 20, completed: true, current: false },
        { title: "Building a Render Prop Component", type: "video", duration: 35, completed: true, current: false },
        { title: "Advanced Render Props", type: "video", duration: 30, completed: false, current: false },
        { title: "Practice Exercise", type: "assignment", duration: 45, completed: false, current: false }
      ]
    },
    {
      title: "Compound Components",
      description: "Create flexible component APIs with compound patterns",
      duration: 200,
      lessons: [
        { title: "Compound Component Basics", type: "video", duration: 25, completed: false, current: true },
        { title: "Context API Integration", type: "video", duration: 40, completed: false, current: false },
        { title: "Real-world Examples", type: "video", duration: 35, completed: false, current: false },
        { title: "Build a Modal System", type: "assignment", duration: 60, completed: false, current: false }
      ]
    }
  ];

  const progressData = {
    overall: 65,
    completedLessons: 8,
    totalLessons: 24,
    timeSpent: "12h 30m",
    streak: 7,
    averageScore: 87,
    weeklyProgress: 8,
    weeklyGoal: 12,
    quizPerformance: 85,
    assignmentCompletion: 75
  };

  const skillsData = [
    { name: "React Patterns", progress: 75, color: "text-primary", icon: "Code" },
    { name: "Performance", progress: 60, color: "text-accent", icon: "Zap" },
    { name: "Testing", progress: 45, color: "text-success", icon: "CheckCircle" },
    { name: "Architecture", progress: 80, color: "text-warning", icon: "Layers" }
  ];

  const badgesData = [
    { name: "First Steps", icon: "Play", unlocked: true, description: "Completed first lesson" },
    { name: "Quiz Master", icon: "Award", unlocked: true, description: "Scored 90%+ on quiz" },
    { name: "Pattern Pro", icon: "Code", unlocked: false, requirement: "Complete 3 modules", description: "Master React patterns" },
    { name: "Speed Demon", icon: "Zap", unlocked: false, requirement: "Optimize performance", description: "Performance optimization expert" },
    { name: "Test Guru", icon: "CheckCircle", unlocked: false, requirement: "Write comprehensive tests", description: "Testing excellence" },
    { name: "Architect", icon: "Layers", unlocked: false, requirement: "Complete course", description: "React architecture master" }
  ];

  const transcriptData = [
    {
      timestamp: 0,
      text: "Welcome to this lesson on compound components. This is one of the most powerful patterns in React for creating flexible and reusable component APIs.",
      speaker: "Sarah Chen"
    },
    {
      timestamp: 15,
      text: "Compound components allow you to create components that work together to form a complete UI, while giving users the flexibility to compose them as needed.",
      speaker: "Sarah Chen"
    },
    {
      timestamp: 35,
      text: "Think of HTML elements like select and option - they work together but can be composed in different ways. That's exactly what we're building with compound components.",
      speaker: "Sarah Chen"
    },
    {
      timestamp: 55,
      text: "Let\'s start by looking at a simple example. We\'ll build a modal component that uses the compound pattern to provide maximum flexibility.",
      speaker: "Sarah Chen"
    }
  ];

  const discussionData = [
    {
      id: 1,
      author: { name: "Alex Rodriguez", isInstructor: false },
      content: "I'm having trouble understanding when to use render props vs compound components. Can someone explain the key differences?",
      timestamp: new Date(Date.now() - 3600000),
      likes: 5,
      replies: [
        {
          id: 11,
          author: { name: "Sarah Chen", isInstructor: true },
          content: "Great question! Render props are better for sharing stateful logic, while compound components are ideal for flexible UI composition. I'll cover this in detail in the next lesson.",
          timestamp: new Date(Date.now() - 3000000),
          likes: 12
        }
      ]
    },
    {
      id: 2,
      author: { name: "Maria Santos", isInstructor: false },
      content: "The modal example was really helpful! I implemented it in my project and it works perfectly. Thanks for the clear explanation.",
      timestamp: new Date(Date.now() - 7200000),
      likes: 8,
      replies: []
    }
  ];

  const resourcesData = [
    {
      id: 1,
      title: "Course Slides - Advanced Patterns",
      type: "pdf",
      size: 2048000,
      filename: "advanced-patterns-slides.pdf",
      category: "Slides",
      canPreview: true,
      description: "Complete slide deck covering all course topics"
    },
    {
      id: 2,
      title: "Code Examples Repository",
      type: "zip",
      size: 5120000,
      filename: "code-examples.zip",
      category: "Code",
      canPreview: false,
      description: "All code examples and starter files"
    },
    {
      id: 3,
      title: "React Patterns Cheat Sheet",
      type: "pdf",
      size: 512000,
      filename: "patterns-cheatsheet.pdf",
      category: "Reference",
      canPreview: true,
      isNew: true,
      description: "Quick reference for all React patterns"
    }
  ];

  const quizData = {
    title: "Compound Components Quiz",
    timeLimit: 600,
    questions: [
      {
        question: "What is the main benefit of using compound components?",
        options: [
          "Better performance",
          "Flexible UI composition",
          "Smaller bundle size",
          "Easier testing"
        ],
        correctAnswer: 1,
        explanation: "Compound components provide flexible UI composition by allowing users to arrange child components as needed while maintaining shared state and behavior."
      },
      {
        question: "Which React feature is commonly used to share state between compound components?",
        options: [
          "Props drilling",
          "Redux",
          "Context API",
          "Local storage"
        ],
        correctAnswer: 2,
        explanation: "The Context API is the most common way to share state between compound components without prop drilling."
      }
    ]
  };

  const handleVideoProgress = (currentTime, duration) => {
    setCurrentVideoTime(currentTime);
  };

  const handleSeekTo = (timestamp) => {
    setCurrentVideoTime(timestamp);
  };

  const handleModuleSelect = (moduleIndex) => {
    console.log('Selected module:', moduleIndex);
  };

  const handleLessonSelect = (moduleIndex, lessonIndex) => {
    console.log('Selected lesson:', moduleIndex, lessonIndex);
  };

  const handleAddDiscussion = (content) => {
    console.log('New discussion:', content);
  };

  const handleAddReply = (discussionId, content) => {
    console.log('New reply:', discussionId, content);
  };

  const handleQuizComplete = (score, answers) => {
    console.log('Quiz completed:', score, answers);
    setShowQuiz(false);
  };

  const handleSkillClick = (skill) => {
    console.log('Skill clicked:', skill);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        <div className="flex">
          {/* Sidebar */}
          <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white/10 backdrop-blur-md border-r border-white/20 transition-all duration-300 z-40 ${
            sidebarCollapsed ? 'w-16' : 'w-80'
          } lg:relative lg:block ${sidebarCollapsed ? 'hidden lg:block' : ''}`}>
            
            {/* Sidebar Header */}
            <div className="p-4 border-b border-white/20">
              <div className="flex items-center justify-between">
                {!sidebarCollapsed && (
                  <h2 className="font-semibold text-foreground">Course Navigation</h2>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="hover:bg-white/10"
                >
                  <Icon name={sidebarCollapsed ? "ChevronRight" : "ChevronLeft"} size={18} />
                </Button>
              </div>
            </div>

            {/* Progress Overview */}
            {!sidebarCollapsed && (
              <div className="p-4 border-b border-white/20">
                <div className="text-sm text-muted-foreground mb-2">Course Progress</div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${progressData.overall}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">{progressData.overall}%</span>
                </div>
              </div>
            )}

            {/* Module Navigation */}
            <div className="flex-1 overflow-y-auto p-4">
              {!sidebarCollapsed ? (
                <CourseModules
                  modules={moduleData}
                  currentModule={2}
                  onModuleSelect={handleModuleSelect}
                  onLessonSelect={handleLessonSelect}
                />
              ) : (
                <div className="space-y-2">
                  {moduleData.map((module, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="w-full h-12 hover:bg-white/10"
                      title={module.title}
                    >
                      <span className="font-semibold">{index + 1}</span>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            {!sidebarCollapsed && (
              <div className="p-4 border-t border-white/20 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAICoach(true)}
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="w-full justify-start"
                >
                  AI Coach
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowTranscript(true)}
                  iconName="FileText"
                  iconPosition="left"
                  className="w-full justify-start"
                >
                  Transcript
                </Button>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-0 lg:ml-16' : 'ml-0 lg:ml-80'}`}>
            <div className="p-6">
              {/* Course Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Link to="/" className="hover:text-primary">Home</Link>
                  <Icon name="ChevronRight" size={16} />
                  <Link to="/course-detail-learning-interface" className="hover:text-primary">Courses</Link>
                  <Icon name="ChevronRight" size={16} />
                  <span className="text-foreground">Advanced React Patterns</span>
                </div>
                
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{courseData.title}</h1>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>By {courseData.instructor.name}</span>
                      <span>•</span>
                      <span>{courseData.duration}</span>
                      <span>•</span>
                      <span>{courseData.level}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowQuiz(true)}
                      iconName="HelpCircle"
                      iconPosition="left"
                    >
                      Take Quiz
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      iconName="BookOpen"
                      iconPosition="left"
                    >
                      Continue Learning
                    </Button>
                  </div>
                </div>
              </div>

              {/* Video Player */}
              <div className="mb-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <VideoPlayer
                    videoUrl={courseData.currentVideo.url}
                    title={courseData.currentVideo.title}
                    onProgressUpdate={handleVideoProgress}
                    currentTime={currentVideoTime}
                  />
                </div>
              </div>

              {/* Course Content Tabs */}
              <CourseTabNavigation activeTab={activeTab} onTabChange={setActiveTab}>
                {activeTab === 'overview' && (
                  <CourseOverview course={courseData} />
                )}
                
                {activeTab === 'modules' && (
                  <CourseModules
                    modules={moduleData}
                    currentModule={2}
                    onModuleSelect={handleModuleSelect}
                    onLessonSelect={handleLessonSelect}
                  />
                )}
                
                {activeTab === 'discussion' && (
                  <DiscussionForum
                    discussions={discussionData}
                    onAddDiscussion={handleAddDiscussion}
                    onAddReply={handleAddReply}
                  />
                )}
                
                {activeTab === 'resources' && (
                  <CourseResources resources={resourcesData} />
                )}
              </CourseTabNavigation>
            </div>
          </div>

          {/* Right Sidebar - Progress Tracker */}
          <div className="hidden xl:block w-80 fixed right-0 top-16 h-[calc(100vh-4rem)] bg-white/10 backdrop-blur-md border-l border-white/20 overflow-y-auto">
            <ProgressTracker
              progress={progressData}
              skills={skillsData}
              badges={badgesData}
              onSkillClick={handleSkillClick}
            />
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <Button
          variant="default"
          size="icon"
          onClick={() => setShowAICoach(true)}
          className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          title="AI Career Coach"
        >
          <Icon name="MessageCircle" size={20} />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowTranscript(true)}
          className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
          title="View Transcript"
        >
          <Icon name="FileText" size={20} />
        </Button>
      </div>

      {/* Modals and Overlays */}
      <AITranscriptPanel
        isOpen={showTranscript}
        onClose={() => setShowTranscript(false)}
        transcript={transcriptData}
        onSeekTo={handleSeekTo}
        currentTime={currentVideoTime}
      />

      {showQuiz && (
        <InteractiveQuiz
          quiz={quizData}
          onComplete={handleQuizComplete}
          onClose={() => setShowQuiz(false)}
        />
      )}

      <AICareerCoachChat
        isOpen={showAICoach}
        onClose={() => setShowAICoach(false)}
        courseContext={courseData}
      />
    </div>
  );
};

export default CourseDetailLearningInterface;