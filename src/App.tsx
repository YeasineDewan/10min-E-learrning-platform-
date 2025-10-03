import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NotFound } from './pages/NotFound';
import { AuthProvider } from './contexts/AuthContext';

// Lazy load pages for performance
const HomePage = React.lazy(() => import('./pages/home-page').then(module => ({ default: module.HomePage })));
const CoursesPage = React.lazy(() => import('./pages/courses-page').then(module => ({ default: module.CoursesPage })));
const TeachersPage = React.lazy(() => import('./pages/teachers-page').then(module => ({ default: module.TeachersPage })));
const AboutPage = React.lazy(() => import('./pages/about-page').then(module => ({ default: module.AboutPage })));
const ContactPage = React.lazy(() => import('./pages/contact-page').then(module => ({ default: module.ContactPage })));
const BlogPage = React.lazy(() => import('./pages/blog-page').then(module => ({ default: module.BlogPage })));
const AdmissionPage = React.lazy(() => import('./pages/admission-page').then(module => ({ default: module.AdmissionPage })));
const LoginPage = React.lazy(() => import('./pages/login-page').then(module => ({ default: module.LoginPage })));
const RegisterPage = React.lazy(() => import('./pages/register-page').then(module => ({ default: module.RegisterPage })));
const Class6Page = React.lazy(() => import('./pages/class-6-page').then(module => ({ default: module.Class6Page })));
const Class7Page = React.lazy(() => import('./pages/class-7-page').then(module => ({ default: module.Class7Page })));
const Class8Page = React.lazy(() => import('./pages/class-8-page').then(module => ({ default: module.Class8Page })));
const Class9Page = React.lazy(() => import('./pages/class-9-page').then(module => ({ default: module.Class9Page })));
const Class10Page = React.lazy(() => import('./pages/class-10-page').then(module => ({ default: module.Class10Page })));
const Class11Page = React.lazy(() => import('./pages/class-11-page').then(module => ({ default: module.Class11Page })));
const Class12Page = React.lazy(() => import('./pages/class-12-page').then(module => ({ default: module.Class12Page })));
const SkillsCoursePage = React.lazy(() => import('./pages/skills-course-page').then(module => ({ default: module.SkillsCoursePage })));
const OnlineBatchPage = React.lazy(() => import('./pages/online-batch-page').then(module => ({ default: module.OnlineBatchPage })));
const EnglishCentrePage = React.lazy(() => import('./pages/english-centre-page').then(module => ({ default: module.EnglishCentrePage })));
const HscPage = React.lazy(() => import('./pages/hsc-page').then(module => ({ default: module.HscPage })));
const SscPage = React.lazy(() => import('./pages/ssc-page').then(module => ({ default: module.SscPage })));

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/admission" element={<AdmissionPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* Class routes */}
              <Route path="/courses/class-6" element={<Class6Page />} />
              <Route path="/courses/class-7" element={<Class7Page />} />
              <Route path="/courses/class-8" element={<Class8Page />} />
              <Route path="/courses/class-9" element={<Class9Page />} />
              <Route path="/courses/class-10" element={<Class10Page />} />
              <Route path="/courses/class-11" element={<Class11Page />} />
              <Route path="/courses/class-12" element={<Class12Page />} />
              {/* Skills routes */}
              <Route path="/skills/:category" element={<SkillsCoursePage />} />
              {/* Online Batch routes */}
              <Route path="/batch/:type" element={<OnlineBatchPage />} />
              {/* English Centre routes */}
              <Route path="/english/:courseType" element={<EnglishCentrePage />} />
              {/* Specific batch pages */}
              <Route path="/batch/hsc" element={<HscPage />} />
              <Route path="/batch/ssc" element={<SscPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </AuthProvider>
  );
}
