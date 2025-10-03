import React from "react";
import { CourseCard } from "../components/CourseCard";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

export const Class12Page: React.FC = () => {
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
                Class 12 - HSC Final Year
              </h1>
              <p className="text-lg text-secondary-600 font-medium">
                Higher Secondary Certificate Final Preparation
              </p>
            </div>
          </div>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Intensive HSC final year preparation with specialized batch programs, advanced subject mastery, and comprehensive exam strategies for top university admission.
          </p>
        </div>

        {/* Batch Selection Section - HSC Final Specific */}
        <div className="mb-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:users" className="mr-3 w-8 h-8 text-primary-600" />
              HSC Final Year Batches
            </h2>
            <Button className="btn-primary">
              View All Batches
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="HSC Science Final (PCMB)"
              description="Intensive physics, chemistry, mathematics, biology preparation for medical/engineering entrance exams."
              price="৳18,000/Year"
              image="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=HSC+Final+PCMB"
              className="border-l-4 border-primary-500"
              onEnroll={() => console.log('Enroll HSC Final PCMB')}
            />
            <CourseCard
              title="HSC Science Final (BEI)"
              description="Advanced Bangla, English, ICT with science foundation for competitive exam preparation."
              price="৳15,000/Year"
              image="https://via.placeholder.com/300x200/2563EB/FFFFFF?text=HSC+Final+BEI"
              className="border-l-4 border-accent-500"
              onEnroll={() => console.log('Enroll HSC Final BEI')}
            />
            <CourseCard
              title="HSC Commerce Final"
              description="Advanced accounting, business studies, economics for professional career preparation."
              price="৳12,000/Year"
              image="https://via.placeholder.com/300x200/EC4899/FFFFFF?text=HSC+Commerce+Final"
              className="border-l-4 border-warning-500"
              onEnroll={() => console.log('Enroll HSC Commerce Final')}
            />
            <CourseCard
              title="HSC Arts Final"
              description="Advanced humanities subjects with research methodology and critical analysis skills."
              price="৳11,000/Year"
              image="https://via.placeholder.com/300x200/64748B/FFFFFF?text=HSC+Arts+Final"
              className="border-l-4 border-secondary-500"
              onEnroll={() => console.log('Enroll HSC Arts Final')}
            />
          </div>
        </div>

        {/* Subject Courses Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:play-circle" className="mr-3 w-8 h-8 text-accent-600" />
              Final Year Subject Mastery
            </h2>
            <Button className="btn-secondary">
              Explore Subjects
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CourseCard
              title="HSC Physics 2nd Paper"
              description="Advanced physics: electricity, magnetism, optics, and modern physics with numerical problem solving."
              price="৳4,000"
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=HSC+Physics+2nd"
              className="animate-slide-in-left"
              onEnroll={() => console.log('Enroll HSC Physics 2nd')}
            />
            <CourseCard
              title="HSC Chemistry 2nd Paper"
              description="Advanced organic and inorganic chemistry with laboratory techniques and reaction mechanisms."
              price="৳4,000"
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=HSC+Chemistry+2nd"
              className="animate-slide-in-right"
              onEnroll={() => console.log('Enroll HSC Chemistry 2nd')}
            />
            <CourseCard
              title="HSC Higher Mathematics"
              description="Advanced calculus, vectors, and 3D geometry for engineering and science competitive exams."
              price="৳4,500"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=HSC+Math+Advanced"
              className="animate-slide-in-left"
              onEnroll={() => console.log('Enroll HSC Advanced Math')}
            />
            <CourseCard
              title="HSC Biology 2nd Paper"
              description="Advanced biology: evolution, ecology, biotechnology, and human physiology with case studies."
              price="৳3,500"
              image="https://via.placeholder.com/300x200/10B981/FFFFFF?text=HSC+Biology+2nd"
              className="animate-slide-in-right"
              onEnroll={() => console.log('Enroll HSC Biology 2nd')}
            />
            <CourseCard
              title="HSC English 2nd Paper"
              description="Advanced literature analysis, essay writing, and comprehension for HSC examination excellence."
              price="৳3,000"
              image="https://via.placeholder.com/300x200/EC4899/FFFFFF?text=HSC+English+2nd"
              className="animate-slide-in-left"
              onEnroll={() => console.log('Enroll HSC English 2nd')}
            />
            <CourseCard
              title="HSC Business Studies"
              description="Advanced business management, marketing, and organizational behavior for commerce students."
              price="৳3,500"
              image="https://via.placeholder.com/300x200/059669/FFFFFF?text=HSC+Business+Studies"
              className="animate-slide-in-right"
              onEnroll={() => console.log('Enroll HSC Business Studies')}
            />
          </div>
        </div>

        {/* Online Batch Section - HSC Final Specific */}
        <div className="mb-16 bg-gradient-to-r from-info-50 to-success-50 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:globe" className="mr-3 w-8 h-8 text-info-600" />
              HSC Final Online Intensive
            </h2>
            <Button className="bg-info-600 hover:bg-info-700 text-white">
              Join Intensive Batch
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="HSC Physics Intensive Online"
              description="Daily live classes, recorded sessions, doubt clearing, and weekly mock tests with performance analysis."
              price="৳10,000/Year"
              image="https://via.placeholder.com/300x200/2563EB/FFFFFF?text=Physics+Intensive"
              className="border-l-4 border-info-500"
              onEnroll={() => console.log('Join HSC Physics Intensive')}
            />
            <CourseCard
              title="HSC Chemistry Intensive Online"
              description="Virtual lab demonstrations, concept mastery sessions, and personalized doubt resolution for chemistry excellence."
              price="৳10,000/Year"
              image="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Chemistry+Intensive"
              className="border-l-4 border-success-500"
              onEnroll={() => console.log('Join HSC Chemistry Intensive')}
            />
            <CourseCard
              title="HSC Mathematics Intensive Online"
              description="Advanced problem-solving techniques, formula derivations, and exam-oriented practice with expert guidance."
              price="৳11,000/Year"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Math+Intensive"
              className="border-l-4 border-warning-500"
              onEnroll={() => console.log('Join HSC Math Intensive')}
            />
          </div>
        </div>

        {/* Exam Preparation Section - HSC Final Specific */}
        <div className="mb-16 bg-gradient-to-r from-warning-50 to-error-50 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 flex items-center">
              <Icon icon="lucide:clipboard-list" className="mr-3 w-8 h-8 text-warning-600" />
              HSC Final Exam Mastery
            </h2>
            <Button className="bg-warning-600 hover:bg-warning-700 text-white">
              Start Final Preparation
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard
              title="HSC Board Exam Mock Tests"
              description="50+ full-length mock exams with AI-powered analysis, time management training, and detailed performance reports."
              price="৳15,000"
              image="https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=HSC+Board+Mock"
              className="border-l-4 border-warning-500"
              onEnroll={() => console.log('Start HSC Board Mock Tests')}
            />
            <CourseCard
              title="HSC Admission Test Prep"
              description="Comprehensive preparation for university admission tests with subject-wise practice and mock examinations."
              price="৳12,000"
              image="https://via.placeholder.com/300x200/EF4444/FFFFFF?text=HSC+Admission+Prep"
              className="border-l-4 border-error-500"
              onEnroll={() => console.log('Start HSC Admission Prep')}
            />
            <CourseCard
              title="HSC Final Revision Marathon"
              description="45-day intensive revision program covering all subjects with daily practice, doubt sessions, and exam strategies."
              price="৳18,000"
              image="https://via.placeholder.com/300x200/22C55E/FFFFFF?text=HSC+Revision+Marathon"
              className="border-l-4 border-success-500"
              onEnroll={() => console.log('Join HSC Revision Marathon')}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="card-modern max-w-4xl mx-auto bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 text-white">
            <div className="p-8">
              <Icon icon="lucide:target" className="text-yellow-300 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Achieve HSC Excellence!</h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                Join our intensive HSC final year program and secure admission to your dream university with top grades and competitive exam success.
              </p>
              <div className="space-y-3 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-xl shadow-large hover:shadow-hard transform hover:-translate-y-1">
                  Join HSC Final Batch
                </Button>
                <Button variant="light" className="text-white border-white/30 px-8 py-3 rounded-xl">
                  Career Counseling
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
