import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import CourseDetailLearningInterface from "pages/course-detail-learning-interface";
import AiCareerCoachChatInterface from "pages/ai-career-coach-chat-interface";
import RecruiterDashboardPipelineManagement from "pages/recruiter-dashboard-pipeline-management";
import CandidateProfileEvaluationInterface from "pages/candidate-profile-evaluation-interface";
import JobSearchApplicationHub from "pages/job-search-application-hub";
import AdminDashboardSystemManagement from "pages/admin-dashboard-system-management";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<CourseDetailLearningInterface />} />
        <Route path="/course-detail-learning-interface" element={<CourseDetailLearningInterface />} />
        <Route path="/ai-career-coach-chat-interface" element={<AiCareerCoachChatInterface />} />
        <Route path="/recruiter-dashboard-pipeline-management" element={<RecruiterDashboardPipelineManagement />} />
        <Route path="/candidate-profile-evaluation-interface" element={<CandidateProfileEvaluationInterface />} />
        <Route path="/job-search-application-hub" element={<JobSearchApplicationHub />} />
        <Route path="/admin-dashboard-system-management" element={<AdminDashboardSystemManagement />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;