import React from "react";
import { CourseCard } from "../components/CourseCard";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

export const Class6Page: React.FC = () => {
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
                Class 6
              </h1>
              <p className="text-lg text-secondary-600 font-medium">
                Primary Learning Excellence
              </p>
            </div>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive curriculum designed for young learners with interactive books, courses, and spoken English programs.
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
              title="Class 6 Bangla 2024"
              description="Complete Bangla language textbook with exercises and activities for Class 6 students."
              price="৳500"
              image="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Bangla+Book"
              onEnroll={() => console.log('Enroll Bangla')}
            />
            <CourseCard
              title="Master Book Class 6"
              description="Comprehensive master guide covering all subjects with solved examples and practice questions."
              price="৳800"
              image="https://via.placeholder.com/300x200/2563EB/FFFFFF?text=Master+Book"
              onEnroll={() => console.log('Enroll Master Book')}
            />
            <CourseCard
              title="English Primer Class 6"
              description="Foundation English textbook focusing on grammar, vocabulary, and basic comprehension."
              price="৳450"
              image="https://via.placeholder.com/300x200/EC4899/FFFFFF?text=English+Primer"
              onEnroll={() => console.log('Enroll English Primer')}
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
              title="Spoken English Junior"
              description="Interactive spoken English course for young learners with fun activities and pronunciation practice."
              isFree={true}
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=Spoken+English"
              onEnroll={() => console.log('Start Spoken English')}
              className="animate-slide-up"
            />
            <CourseCard
              title="Math Adventures Class 6"
              description="Engaging mathematics course with gamified learning and real-world applications."
              price="৳300"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Math+Adventures"
              onEnroll={() => console.log('Enroll Math')}
            />
            <CourseCard
              title="Science Explorer"
              description="Hands-on science experiments and discoveries for curious young minds."
              isFree={true}
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Science+Explorer"
              onEnroll={() => console.log('Start Science')}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="card-modern max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <div className="p-8">
              <Icon icon="lucide:star" className="text-yellow-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                Join our comprehensive Class 6 program and build a strong foundation for academic success.
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
