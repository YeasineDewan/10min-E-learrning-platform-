import React from "react";
import { CourseCard } from "../components/CourseCard";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

export const Class7Page: React.FC = () => {
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
                Class 7
              </h1>
              <p className="text-lg text-secondary-600 font-medium">
                Building Strong Foundations
              </p>
            </div>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Advanced curriculum for Class 7 students featuring comprehensive books, interactive courses, and language development programs.
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
              title="Class 7 Bangla 2024"
              description="Updated Bangla textbook for Class 7 with comprehensive grammar, literature, and composition exercises."
              price="৳550"
              image="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Bangla+Book+7"
              onEnroll={() => console.log('Enroll Bangla 7')}
            />
            <CourseCard
              title="Master Guide Class 7"
              description="All-in-one master book with detailed solutions, practice tests, and subject-wise coverage."
              price="৳850"
              image="https://via.placeholder.com/300x200/2563EB/FFFFFF?text=Master+Guide+7"
              onEnroll={() => console.log('Enroll Master Guide 7')}
            />
            <CourseCard
              title="English Textbook Class 7"
              description="Intermediate English course book focusing on advanced grammar, reading comprehension, and writing skills."
              price="৳500"
              image="https://via.placeholder.com/300x200/EC4899/FFFFFF?text=English+Textbook+7"
              onEnroll={() => console.log('Enroll English 7')}
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
              title="Spoken English Intermediate"
              description="Enhanced spoken English program with conversation practice, vocabulary building, and confidence development."
              isFree={true}
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=Spoken+English+7"
              onEnroll={() => console.log('Start Spoken English 7')}
              className="animate-slide-up"
            />
            <CourseCard
              title="Advanced Mathematics Class 7"
              description="In-depth mathematics course covering geometry, algebra, and problem-solving techniques."
              price="৳350"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Math+Class+7"
              onEnroll={() => console.log('Enroll Math 7')}
            />
            <CourseCard
              title="Integrated Science Class 7"
              description="Comprehensive science curriculum combining physics, chemistry, and biology with practical experiments."
              price="৳400"
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Science+Class+7"
              onEnroll={() => console.log('Enroll Science 7')}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="card-modern max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <div className="p-8">
              <Icon icon="lucide:star" className="text-yellow-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Ready to Advance Your Learning?</h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                Elevate your Class 7 education with our expertly designed courses and study materials for academic excellence.
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
