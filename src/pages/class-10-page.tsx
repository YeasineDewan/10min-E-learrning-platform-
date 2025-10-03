import React from "react";
import { CourseCard } from "../components/CourseCard";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

export const Class10Page: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-secondary-50 via-white to-accent-50">
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mr-4 shadow-large">
              <Icon icon="lucide:award" className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-2">
                Class 10 - SSC Final
              </h1>
              <p className="text-lg text-secondary-600 font-medium">
                Secondary School Certificate Final Preparation
              </p>
            </div>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Final year SSC preparation with intensive textbooks, advanced courses, and comprehensive exam strategies for top results.
          </p>
        </div>

        {/* Books Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:book" className="mr-3 w-8 h-8 text-primary-600" />
              SSC Final Year Textbooks
            </h2>
            <Button className="btn-primary">
              View All Books
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="SSC Bangla 2nd Paper 2024"
              description="Advanced Bangla textbook for SSC final exams with essay writing, comprehension, and literature mastery."
              price="৳700"
              image="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=SSC+Bangla+2nd"
              onEnroll={() => console.log('Enroll SSC Bangla 2nd')}
            />
            <CourseCard
              title="SSC Complete Guide Class 10"
              description="Ultimate SSC preparation book with 5 years solved papers, model tests, and exam strategies."
              price="৳1100"
              image="https://via.placeholder.com/300x200/2563EB/FFFFFF?text=SSC+Complete+Guide"
              onEnroll={() => console.log('Enroll SSC Complete Guide')}
            />
            <CourseCard
              title="SSC English 2nd Paper"
              description="Final year English textbook emphasizing advanced grammar, literature, and exam-oriented writing skills."
              price="৳650"
              image="https://via.placeholder.com/300x200/EC4899/FFFFFF?text=SSC+English+2nd"
              onEnroll={() => console.log('Enroll SSC English 2nd')}
            />
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:play-circle" className="mr-3 w-8 h-8 text-accent-600" />
              Advanced SSC Courses
            </h2>
            <Button className="btn-secondary">
              Explore Courses
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="SSC Advanced Spoken English"
              description="Exam-focused spoken English course with interview preparation, presentation skills, and fluency mastery."
              isFree={true}
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=SSC+Advanced+English"
              onEnroll={() => console.log('Start SSC Advanced English')}
              className="animate-slide-up"
            />
            <CourseCard
              title="SSC Higher Mathematics"
              description="Advanced mathematics course covering calculus basics, advanced geometry, and SSC exam problem-solving."
              price="৳500"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=SSC+Higher+Math"
              onEnroll={() => console.log('Enroll SSC Higher Math')}
            />
            <CourseCard
              title="SSC Physics & Chemistry"
              description="Specialized science courses with practical experiments, numerical problems, and exam techniques."
              price="৳550"
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=SSC+Physics+Chemistry"
              onEnroll={() => console.log('Enroll SSC Science Advanced')}
            />
          </div>
        </div>

        {/* Exam Preparation Section - SSC Final Specific */}
        <div className="mb-16 bg-gradient-to-r from-warning-50 to-error-50 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:clipboard-list" className="mr-3 w-8 h-8 text-warning-600" />
              SSC Final Exam Mastery
            </h2>
            <Button className="bg-warning-600 hover:bg-warning-700 text-white">
              Intensive Practice
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="SSC Final Mock Exams"
              description="20+ full-length mock tests with AI analysis, time management training, and performance tracking."
              price="৳1000"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=SSC+Final+Mock"
              className="border-l-4 border-warning-500"
              onEnroll={() => console.log('Start SSC Final Mock Exams')}
            />
            <CourseCard
              title="SSC Board Question Analysis"
              description="Detailed analysis of last 10 years board questions with pattern recognition and scoring strategies."
              price="৳900"
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=SSC+Board+Analysis"
              className="border-l-4 border-error-500"
              onEnroll={() => console.log('Access SSC Board Analysis')}
            />
            <CourseCard
              title="SSC Revision Crash Course"
              description="30-day intensive revision program covering all subjects with daily practice and doubt clearing."
              price="৳1200"
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=SSC+Crash+Course"
              className="border-l-4 border-success-500"
              onEnroll={() => console.log('Enroll SSC Crash Course')}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="card-modern max-w-4xl mx-auto bg-gradient-to-r from-primary-600 via-accent-600 to-error-600 text-white">
            <div className="p-8">
              <Icon icon="lucide:trophy" className="text-yellow-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Secure Your SSC GPA 5.0!</h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                Final push for SSC excellence with our proven preparation system that has helped thousands achieve top grades.
              </p>
              <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl shadow-large hover:shadow-hard transform hover:-translate-y-1">
                  Start Final Preparation
                </Button>
                <Button variant="light" className="text-white border-white/30 px-8 py-3 rounded-xl">
                  Success Stories
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
