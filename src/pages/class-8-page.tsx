import React from "react";
import { CourseCard } from "../components/CourseCard";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

export const Class8Page: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mr-4 shadow-large">
              <Icon icon="lucide:book-open" className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-2">
                Class 8
              </h1>
              <p className="text-lg text-secondary-600 font-medium">
                Pre-Secondary Preparation
              </p>
            </div>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Bridge the gap to secondary education with our specialized Class 8 curriculum, featuring advanced books, interactive courses, and skill-building programs.
          </p>
        </div>

        {/* Books Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:book" className="mr-3 w-8 h-8 text-primary-600" />
              Books & Study Materials
            </h2>
            <Button className="btn-primary">
              View All Books
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="Class 8 Bangla 2024"
              description="Advanced Bangla literature and language textbook with in-depth analysis and creative writing exercises."
              price="৳600"
              image="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Bangla+Book+8"
              onEnroll={() => console.log('Enroll Bangla 8')}
            />
            <CourseCard
              title="Master Book Class 8"
              description="Complete master guide with chapter-wise solutions, MCQs, and preparation for secondary transition."
              price="৳900"
              image="https://via.placeholder.com/300x200/2563EB/FFFFFF?text=Master+Book+8"
              onEnroll={() => console.log('Enroll Master Book 8')}
            />
            <CourseCard
              title="English Advanced Class 8"
              description="Comprehensive English textbook emphasizing literature, essay writing, and communication skills."
              price="৳550"
              image="https://via.placeholder.com/300x200/EC4899/FFFFFF?text=English+Advanced+8"
              onEnroll={() => console.log('Enroll English 8')}
            />
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:play-circle" className="mr-3 w-8 h-8 text-accent-600" />
              Interactive Courses
            </h2>
            <Button className="btn-secondary">
              Explore Courses
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="Spoken English Advanced"
              description="Professional spoken English course focusing on fluency, presentation skills, and real-life conversations."
              isFree={true}
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=Spoken+English+8"
              onEnroll={() => console.log('Start Spoken English 8')}
              className="animate-slide-up"
            />
            <CourseCard
              title="Pre-Algebra Mastery Class 8"
              description="Advanced mathematics course preparing students for secondary level algebra and geometry."
              price="৳400"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Pre-Algebra+8"
              onEnroll={() => console.log('Enroll Math 8')}
            />
            <CourseCard
              title="Environmental Science Class 8"
              description="In-depth environmental science course with case studies, experiments, and sustainability education."
              price="৳450"
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Environmental+Science+8"
              onEnroll={() => console.log('Enroll Science 8')}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="card-modern max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <div className="p-8">
              <Icon icon="lucide:star" className="text-yellow-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Prepare for Secondary Success?</h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                Transition smoothly to secondary education with our Class 8 program designed for academic excellence and skill development.
              </p>
              <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl shadow-large hover:shadow-hard transform hover:-translate-y-1">
                  Enroll Now
                </Button>
                <Button variant="light" className="text-white border-white/30 px-8 py-3 rounded-xl">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
