import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { HeroSection } from "../components/hero-section";
import { CourseCategory } from "../components/course-category";
import { CourseCard } from "../components/course-card";
import { FeatureSection } from "../components/feature-section";
import { StatisticsSection } from "../components/statistics-section";
import { TeacherCard } from "../components/teacher-card";

export const HomePage: React.FC = () => {
  // Academic courses data
  const academicCourses = [
    { id: "1", title: "ক্লাস ৬,৭,৮", icon: "lucide:backpack", link: "/courses/junior" },
    { id: "2", title: "ক্লাস ৯, ১০", icon: "lucide:book-open", link: "/courses/secondary" },
    { id: "3", title: "HSC ২৫, ২৬", icon: "lucide:graduation-cap", link: "/courses/hsc-25-26" },
    { id: "4", title: "HSC ২৭", icon: "lucide:target", link: "/courses/hsc-27" },
  ];

  // English courses data
  const englishCourses = [
    { id: "1", title: "Spoken English", icon: "lucide:message-circle", link: "/courses/spoken-english" },
    { id: "2", title: "IELTS", icon: "lucide:award", link: "/courses/ielts" },
    { id: "3", title: "English Grammar", icon: "lucide:book", link: "/courses/english-grammar" },
    { id: "4", title: "Business English", icon: "lucide:briefcase", link: "/courses/business-english" },
  ];

  // Skill development courses
  const skillCourses = [
    {
      id: "1",
      title: "News Presentation Course",
      instructor: "Farabi Hafiz",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=presenter",
      link: "/courses/news-presentation",
    },
    {
      id: "2",
      title: "Graphic Designing with Photoshop",
      instructor: "Sadman Sadik",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=designer",
      link: "/courses/graphic-design",
    },
    {
      id: "3",
      title: "Adobe Illustrator",
      instructor: "Mohammad Yeasir",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=illustrator",
      link: "/courses/adobe-illustrator",
    },
    {
      id: "4",
      title: "সহজে Spoken আরবি",
      instructor: "Mahade Hasan",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=arabic",
      link: "/courses/spoken-arabic",
    },
  ];

  // Admission test courses
  const admissionCourses = [
    {
      id: "1",
      title: "ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২৫",
      instructor: "Aman Islam Siam",
      instructorRating: "12",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=admission1",
      link: "/courses/varsity-a-unit",
    },
    {
      id: "2",
      title: "ভার্সিটি B Unit + গুচ্ছ এডমিশন কোর্স - ২০২৫",
      instructor: "Ridwan Kabir Beacon",
      instructorRating: "7",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=admission2",
      link: "/courses/varsity-b-unit",
    },
    {
      id: "3",
      title: "ভার্সিটি C Unit + গুচ্ছ এডমিশন কোর্স - ২০২৫",
      instructor: "Faiza Tasnim",
      instructorRating: "10",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=admission3",
      link: "/courses/varsity-c-unit",
    },
  ];

  // Job preparation courses
  const jobCourses = [
    {
      id: "1",
      title: "বিসিএস প্রিলি রেকর্ডেড কোর্স",
      instructor: "Sakib Bin Rashid",
      instructorRating: "20",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=bcs",
      link: "/courses/bcs-preli",
    },
    {
      id: "2",
      title: "ব্যাংক জবস কোর্স",
      instructor: "Akif Masumi",
      instructorRating: "8",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=bank",
      link: "/courses/bank-jobs",
    },
    {
      id: "3",
      title: "সরকারি চাকরি প্রস্তুতি বেসিক কোর্স",
      instructor: "Akif Masumi",
      instructorRating: "10",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=govt",
      link: "/courses/govt-jobs",
    },
    {
      id: "4",
      title: "English for Govt. Jobs",
      instructor: "Shahnawaz Hossain Jay",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=english-govt",
      link: "/courses/english-govt-jobs",
    },
  ];

  // Featured teachers
  const featuredTeachers = [
    {
      id: "1",
      name: "Sadman Sadik",
      title: "Graphic Design Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher1",
      link: "/teachers/sadman-sadik",
    },
    {
      id: "2",
      name: "Farabi Hafiz",
      title: "News Presentation Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher2",
      link: "/teachers/farabi-hafiz",
    },
    {
      id: "3",
      name: "Mohammad Yeasir",
      title: "Adobe Illustrator Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher3",
      link: "/teachers/mohammad-yeasir",
    },
    {
      id: "4",
      name: "Mahade Hasan",
      title: "Arabic Language Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher4",
      link: "/teachers/mahade-hasan",
    },
  ];

  return (
    <>
      <HeroSection />

      {/* Course Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CourseCategory
              title="অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!"
              subtitle="সকল বিষয়ে সেরা শিক্ষকদের সাথে পড়াশোনা করুন"
              bgColor="bg-blue-900"
              courses={academicCourses}
              ctaText="এইচএসসি ২৫-২৭ কি ক্লাস বুক করুন"
              ctaLink="/courses/hsc"
            />

            <CourseCategory
              title="ছাত্রদের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন"
              subtitle="দক্ষতা অর্জন করে ক্যারিয়ার গড়ুন"
              bgColor="bg-amber-900"
              courses={englishCourses}
              ctaText="৩০+ কি কোর্স এখনই চেক করুন"
              ctaLink="/courses/skills"
            />
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/courses/kids-english" className="block">
              <Card className="bg-teal-900 text-white border-none hover:opacity-90 transition-opacity">
                <CardBody className="flex items-center p-4">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=60&h=60&u=kids" 
                    alt="Kids English" 
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="font-medium">Kids' English</h3>
                    <p className="text-xs text-white/80">ভর্তি চলছে</p>
                  </div>
                  <Icon icon="lucide:chevron-right" className="ml-auto" />
                </CardBody>
              </Card>
            </Link>

            <Link to="/courses/spoken-english" className="block">
              <Card className="bg-purple-900 text-white border-none hover:opacity-90 transition-opacity">
                <CardBody className="flex items-center p-4">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=60&h=60&u=spoken" 
                    alt="Spoken English" 
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="font-medium">Spoken English Junior</h3>
                    <p className="text-xs text-white/80">সকল ব্যাচ ভর্তি চলছে</p>
                  </div>
                  <Icon icon="lucide:chevron-right" className="ml-auto" />
                </CardBody>
              </Card>
            </Link>

            <Link to="/courses/spoken-english-live" className="block">
              <Card className="bg-teal-900 text-white border-none hover:opacity-90 transition-opacity">
                <CardBody className="flex items-center p-4">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=60&h=60&u=live" 
                    alt="Spoken English LIVE" 
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="font-medium">Spoken English Junior LIVE</h3>
                    <p className="text-xs text-white/80">সকল ব্যাচ ভর্তি চলছে</p>
                  </div>
                  <Icon icon="lucide:chevron-right" className="ml-auto" />
                </CardBody>
              </Card>
            </Link>

            <Link to="/courses/study-abroad" className="block">
              <Card className="bg-indigo-900 text-white border-none hover:opacity-90 transition-opacity">
                <CardBody className="flex items-center p-4">
                  <img 
                    src="https://img.heroui.chat/image/ai?w=60&h=60&u=abroad" 
                    alt="Study Abroad" 
                    className="w-12 h-12 mr-4"
                  />
                  <div>
                    <h3 className="font-medium">Study Abroad</h3>
                    <p className="text-xs text-white/80">ফ্রি কনসালটেশন বুক করুন</p>
                  </div>
                  <Icon icon="lucide:chevron-right" className="ml-auto" />
                </CardBody>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Skill Development Courses */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="flex items-center mb-2">
                <Icon icon="lucide:rocket" className="text-primary mr-2" />
                <h2 className="text-2xl font-bold">দেশসেরা স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম</h2>
              </div>
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary" />
                  <span>দেশসেরা শিক্ষক</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary" />
                  <span>৫ লাখ+ শিক্ষার্থী</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:check-circle" className="text-primary" />
                  <span>৭০+ অনলাইন কোর্স</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <Button 
                as={Link}
                to="/courses/skills"
                color="primary"
                variant="flat"
                className="font-medium"
              >
                সকল কোর্স দেখুন
              </Button>
            </div>
          </div>

          {/* Course Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8 overflow-x-auto scrollbar-hidden">
            <Button as={Link} to="/courses/bangla" variant="flat" className="bg-gray-800 text-white min-w-[120px]">
              বাংলা
              <span className="text-xs ml-1 text-gray-400">9 Courses</span>
            </Button>
            <Button as={Link} to="/courses/design" variant="flat" className="bg-gray-800 text-white min-w-[120px]">
              ডিজাইন এন্ড আর্ট
              <span className="text-xs ml-1 text-gray-400">14 Courses</span>
            </Button>
            <Button as={Link} to="/courses/development" variant="flat" className="bg-gray-800 text-white min-w-[120px]">
              ডিজিটাল এন্ড ক্রিয়েটিভ
              <span className="text-xs ml-1 text-gray-400">6 Courses</span>
            </Button>
            <Button as={Link} to="/courses/career" variant="flat" className="bg-gray-800 text-white min-w-[120px]">
              ক্যারিয়ার বেসিকস
              <span className="text-xs ml-1 text-gray-400">8 Courses</span>
            </Button>
            <Button as={Link} to="/courses/business" variant="flat" className="bg-gray-800 text-white min-w-[120px]">
              বিজনেস কোর্সমূহ
              <span className="text-xs ml-1 text-gray-400">1 Courses</span>
            </Button>
            <Button as={Link} to="/courses/professional" variant="flat" className="bg-gray-800 text-white min-w-[120px]">
              প্রফেশনাল কোর্সমূহ
              <span className="text-xs ml-1 text-gray-400">2 Courses</span>
            </Button>
            <Button as={Link} to="/courses/free" variant="flat" className="bg-gray-800 text-white min-w-[120px]">
              ফ্রি কোর্সমূহ
              <span className="text-xs ml-1 text-gray-400">42 Courses</span>
            </Button>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                instructor={course.instructor}
                image={course.image}
                link={course.link}
              />
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden mt-8 text-center">
            <Button 
              as={Link}
              to="/courses/skills"
              color="primary"
              className="font-medium"
            >
              সকল কোর্স দেখুন
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Admission Test Preparation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              ভর্তি পরীক্ষা
            </div>
            <h2 className="text-3xl font-bold mb-4">স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের পথ এখানেই!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {admissionCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                instructor={course.instructor}
                instructorRating={course.instructorRating}
                image={course.image}
                link={course.link}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              as={Link}
              to="/courses/admission"
              color="primary"
              size="lg"
              className="font-medium"
            >
              সকল কোর্স
            </Button>
          </div>
        </div>
      </section>

      {/* Job Preparation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
              চাকরি প্রস্তুতি
            </div>
            <h2 className="text-3xl font-bold mb-4">সরকারি চাকরির সর্বোচ্চ প্রস্তুতি</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              বিসিএস কিংবা ব্যাংক চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                instructor={course.instructor}
                instructorRating={course.instructorRating}
                image={course.image}
                link={course.link}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              as={Link}
              to="/courses/job-preparation"
              color="primary"
              size="lg"
              className="font-medium"
            >
              সকল কোর্স
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Teachers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">দেশসেরা শিক্ষকমণ্ডলী</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              অভিজ্ঞ এবং যোগ্য শিক্ষকদের সাথে আপনার শিক্ষা যাত্রা শুরু করুন
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                id={teacher.id}
                name={teacher.name}
                title={teacher.title}
                image={teacher.image}
                link={teacher.link}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              as={Link}
              to="/teachers"
              color="primary"
              size="lg"
              className="font-medium"
            >
              সকল শিক্ষক
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">আজই শুরু করুন আপনার শিক্ষা যাত্রা</h2>
          <p className="max-w-2xl mx-auto mb-8">
            ১০ মিনিট স্কুলের সাথে যেকোনো বিষয়ে দক্ষতা অর্জন করুন এবং আপনার ক্যারিয়ার গড়ে তুলুন
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link}
              to="/register"
              color="primary"
              variant="solid"
              size="lg"
              className="bg-white text-primary font-medium"
            >
              নিবন্ধন করুন
            </Button>
            <Button 
              as={Link}
              to="/courses"
              variant="bordered"
              size="lg"
              className="border-white text-white font-medium"
            >
              কোর্স দেখুন
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};