import React from "react";
import { CourseCard } from "../components/CourseCard";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

export const Class11Page: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="container-fluid">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mr-4 shadow-large">
              <Icon icon="lucide:graduation-cap" className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-2">
                Class 11 - HSC 1st Year
              </h1>
              <p className="text-lg text-secondary-600 font-medium">
                Higher Secondary Certificate Foundation
              </p>
            </div>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Begin your HSC journey with specialized batch programs, advanced subject courses, and comprehensive preparation for higher secondary success.
          </p>
        </div>

        {/* Batch Selection Section - HSC Specific */}
        <div className="mb-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:users" className="mr-3 w-8 h-8 text-primary-600" />
              Choose Your HSC Batch
            </h2>
            <Button className="btn-primary">
              View All Batches
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="HSC Science Batch (PCMB)"
              description="Physics, Chemistry, Mathematics, Biology - Complete science group preparation for medical/engineering aspirants."
              price="৳15,000/Year"
              image="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=HSC+Science+PCMB"
              className="border-l-4 border-primary-500"
              onEnroll={() => console.log('Enroll HSC Science PCMB')}
            />
            <CourseCard
              title="HSC Science Batch (BEI)"
              description="Bangla, English, ICT - Science group with language and technology focus for balanced academic development."
              price="৳12,000/Year"
              image="https://via.placeholder.com/300x200/2563EB/FFFFFF?text=HSC+Science+BEI"
              className="border-l-4 border-accent-500"
              onEnroll={() => console.log('Enroll HSC Science BEI')}
            />
            <CourseCard
              title="HSC Commerce Batch"
              description="Accounting, Business Studies, Economics - Professional commerce group for business and finance careers."
              price="৳10,000/Year"
              image="https://via.placeholder.com/300x200/EC4899/FFFFFF?text=HSC+Commerce"
              className="border-l-4 border-warning-500"
              onEnroll={() => console.log('Enroll HSC Commerce')}
            />
            <CourseCard
              title="HSC Arts Batch"
              description="History, Civics, Logic - Humanities group focusing on social sciences and critical thinking skills."
              price="৳9,000/Year"
              image="https://via.placeholder.com/300x200/64748B/FFFFFF?text=HSC+Arts"
              className="border-l-4 border-secondary-500"
              onEnroll={() => console.log('Enroll HSC Arts')}
            />
          </div>
        </div>

        {/* Subject Courses Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:play-circle" className="mr-3 w-8 h-8 text-accent-600" />
              Advanced Subject Courses
            </h2>
            <Button className="btn-secondary">
              Explore Subjects
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CourseCard
              title="HSC Physics 1st Paper"
              description="University-level physics covering mechanics, waves, and thermodynamics with practical applications."
              price="৳3,500"
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=HSC+Physics"
              className="animate-slide-in-left"
              onEnroll={() => console.log('Enroll HSC Physics')}
            />
            <CourseCard
              title="HSC Chemistry 1st Paper"
              description="Advanced chemistry including atomic structure, chemical bonding, and organic chemistry fundamentals."
              price="৳3,500"
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=HSC+Chemistry"
              className="animate-slide-in-right"
              onEnroll={() => console.log('Enroll HSC Chemistry')}
            />
            <CourseCard
              title="HSC Higher Mathematics"
              description="Calculus, coordinate geometry, and vectors for engineering and science stream students."
              price="৳4,000"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=HSC+Math"
              className="animate-slide-in-left"
              onEnroll={() => console.log('Enroll HSC Mathematics')}
            />
            <CourseCard
              title="HSC Biology 1st Paper"
              description="Cell biology, genetics, and human physiology with laboratory techniques and case studies."
              price="৳3,000"
              image="https://via.placeholder.com/300x200/10B981/FFFFFF?text=HSC+Biology"
              className="animate-slide-in-right"
              onEnroll={() => console.log('Enroll HSC Biology')}
            />
            <CourseCard
              title="HSC English 1st Paper"
              description="Advanced English literature, composition, and comprehension for HSC examination success."
              price="৳2,500"
              image="https://via.placeholder.com/300x200/EC4899/FFFFFF?text=HSC+English"
              className="animate-slide-in-left"
              onEnroll={() => console.log('Enroll HSC English')}
            />
            <CourseCard
              title="HSC Accounting"
              description="Financial accounting principles, bookkeeping, and business mathematics for commerce students."
              price="৳3,000"
              image="https://via.placeholder.com/300x200/059669/FFFFFF?text=HSC+Accounting"
              className="animate-slide-in-right"
              onEnroll={() => console.log('Enroll HSC Accounting')}
            />
          </div>
        </div>

        {/* Online Batch Section - HSC Specific */}
        <div className="mb-16 bg-gradient-to-r from-info-50 to-success-50 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:globe" className="mr-3 w-8 h-8 text-info-600" />
              Online HSC Batches
            </h2>
            <Button className="bg-info-600 hover:bg-info-700 text-white">
              Join Online Batch
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="HSC Physics Online Batch"
              description="Live interactive classes with recorded sessions, doubt clearing, and weekly assessments."
              price="৳8,000/Year"
              image="https://via.placeholder.com/300x200/2563EB/FFFFFF?text=Physics+Online"
              className="border-l-4 border-info-500"
              onEnroll={() => console.log('Join HSC Physics Online')}
            />
            <CourseCard
              title="HSC Chemistry Online Batch"
              description="Virtual lab experiments, concept videos, and personalized progress tracking for chemistry mastery."
              price="৳8,000/Year"
              image="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Chemistry+Online"
              className="border-l-4 border-success-500"
              onEnroll={() => console.log('Join HSC Chemistry Online')}
            />
            <CourseCard
              title="HSC Mathematics Online Batch"
              description="Step-by-step problem solving, formula derivations, and exam-oriented practice sessions."
              price="৳9,000/Year"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Math+Online"
              className="border-l-4 border-warning-500"
              onEnroll={() => console.log('Join HSC Math Online')}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="card-modern max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
            <div className="p-8">
              <Icon icon="lucide:rocket" className="text-yellow-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Launch Your HSC Journey!</h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                Join our expert-led HSC batches and courses to build a strong foundation for university admission and career success.
              </p>
              <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl shadow-large hover:shadow-hard transform hover:-translate-y-1">
                  Join HSC Batch Now
                </Button>
                <Button variant="light" className="text-white border-white/30 px-8 py-3 rounded-xl">
                  Schedule Counseling
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
