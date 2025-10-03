import React from "react";
import { CourseCard } from "../components/CourseCard";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

export const Class9Page: React.FC = () => {
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
                Class 9 - SSC
              </h1>
              <p className="text-lg text-secondary-600 font-medium">
                Secondary School Certificate Preparation
              </p>
            </div>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Begin your SSC journey with comprehensive textbooks, interactive courses, and targeted exam preparation materials designed for academic success.
          </p>
        </div>

        {/* Books Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:book" className="mr-3 w-8 h-8 text-primary-600" />
              SSC Textbooks & Guides
            </h2>
            <Button className="btn-primary">
              View All Books
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="SSC Bangla 1st Paper 2024"
              description="Official NCTB Bangla textbook with detailed explanations, grammar rules, and literature analysis for SSC exams."
              price="৳650"
              image="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=SSC+Bangla+1st"
              onEnroll={() => console.log('Enroll SSC Bangla 1st')}
            />
            <CourseCard
              title="SSC Master Guide Class 9"
              description="Complete SSC preparation guide with solved papers, MCQs, and chapter-wise practice questions."
              price="৳950"
              image="https://via.placeholder.com/300x200/2563EB/FFFFFF?text=SSC+Master+Guide"
              onEnroll={() => console.log('Enroll SSC Master Guide')}
            />
            <CourseCard
              title="SSC English 1st Paper"
              description="SSC English textbook focusing on grammar, composition, and comprehension skills for board exams."
              price="৳600"
              image="https://via.placeholder.com/300x200/EC4899/FFFFFF?text=SSC+English+1st"
              onEnroll={() => console.log('Enroll SSC English 1st')}
            />
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:play-circle" className="mr-3 w-8 h-8 text-accent-600" />
              Interactive SSC Courses
            </h2>
            <Button className="btn-secondary">
              Explore Courses
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="SSC Spoken English"
              description="Professional spoken English course tailored for SSC students with exam-oriented communication skills."
              isFree={true}
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=SSC+Spoken+English"
              onEnroll={() => console.log('Start SSC Spoken English')}
              className="animate-slide-up"
            />
            <CourseCard
              title="SSC Mathematics Foundation"
              description="Comprehensive mathematics course covering algebra, geometry, and trigonometry for SSC syllabus."
              price="৳450"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=SSC+Mathematics"
              onEnroll={() => console.log('Enroll SSC Math')}
            />
            <CourseCard
              title="SSC General Science"
              description="Integrated science course with physics, chemistry, and biology preparation for SSC exams."
              price="৳500"
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=SSC+Science"
              onEnroll={() => console.log('Enroll SSC Science')}
            />
          </div>
        </div>

        {/* Exam Preparation Section - SSC Specific */}
        <div className="mb-16 bg-gradient-to-r from-warning-50 to-error-50 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:clipboard-list" className="mr-3 w-8 h-8 text-warning-600" />
              SSC Exam Preparation
            </h2>
            <Button className="bg-warning-600 hover:bg-warning-700 text-white">
              Start Practice Tests
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="SSC Mock Test Series"
              description="Full-length mock tests simulating real SSC exam pattern with detailed solutions and performance analysis."
              price="৳800"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=SSC+Mock+Tests"
              className="border-l-4 border-warning-500"
              onEnroll={() => console.log('Start SSC Mock Tests')}
            />
            <CourseCard
              title="SSC Question Bank"
              description="10,000+ previous year questions with solutions and topic-wise categorization for targeted practice."
              price="৳700"
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=SSC+Question+Bank"
              className="border-l-4 border-error-500"
              onEnroll={() => console.log('Access SSC Question Bank')}
            />
            <CourseCard
              title="SSC Model Papers"
              description="Latest model question papers following NCTB guidelines with answer keys and marking schemes."
              isFree={true}
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=SSC+Model+Papers"
              className="border-l-4 border-success-500"
              onEnroll={() => console.log('Download Model Papers')}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="card-modern max-w-4xl mx-auto bg-gradient-to-r from-primary-600 via-accent-600 to-error-600 text-white">
            <div className="p-8">
              <Icon icon="lucide:trophy" className="text-yellow-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Ready for SSC Success?</h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                Achieve top grades in your SSC exams with our specialized preparation program featuring expert guidance and proven strategies.
              </p>
              <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl shadow-large hover:shadow-hard transform hover:-translate-y-1">
                  Start SSC Preparation
                </Button>
                <Button variant="light" className="text-white border-white/30 px-8 py-3 rounded-xl">
                  Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
