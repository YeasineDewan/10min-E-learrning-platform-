import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CourseCard } from "../components/course-card";

interface SscParams {
  group: string;
}

export const SscPage: React.FC = () => {
  const { group } = useParams<SscParams>();
  
  // Convert group to display format
  const groupDisplay = group.charAt(0).toUpperCase() + group.slice(1);
  
  // Group specific data
  const groupData = {
    science: {
      title: "SSC Science Group",
      subtitle: "Physics, Chemistry, Math, Biology",
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=ssc_science",
      color: "red-700"
    },
    humanities: {
      title: "SSC Humanities Group",
      subtitle: "History, Geography, Civics",
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=ssc_humanities",
      color: "blue-700"
    },
    commerce: {
      title: "SSC Commerce Group",
      subtitle: "Business Studies, Accounting, Finance",
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=ssc_commerce",
      color: "green-700"
    }
  };

  // Get current group data
  const currentGroup = groupData[group as keyof typeof groupData];

  // SSC courses
  const sscCourses = [
    {
      id: "1",
      title: `SSC 2026 শেষ মুহূর্তের প্রস্তুতি কোর্স [${groupDisplay} বিভাগ]`,
      instructor: "Aman Islam Siam",
      instructorRating: "13",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=ssc_${group}`,
      link: `/courses/ssc-${group}`,
      price: 3000,
      originalPrice: 3500,
    },
    {
      id: "2",
      title: `১০ম শ্রেণি [${groupDisplay} বিভাগ] বাংলা, ইংরেজি, আই.সি.টি., সাধারণ গণিত [SSC 2026]`,
      instructor: "Asadur Rahman Turzo",
      instructorRating: "10",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=ssc_common_${group}`,
      link: `/courses/ssc-common-${group}`,
      price: 3500,
    },
  ];

  // Free courses
  const freeCourses = [
    {
      id: "3",
      title: `১০ম শ্রেণির টেস্ট পরীক্ষা প্রস্তুতি কোর্স (SSC 2026 ব্যাচ)`,
      instructor: "Abu Bokkar Siddique",
      instructorRating: "18",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=ssc_test`,
      link: `/courses/ssc-test`,
      isFree: true,
    },
    {
      id: "4",
      title: `নবম-দশম শ্রেণি - উচ্চতর গণিত কোর্স`,
      instructor: "Tanvir Ahmed",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=higher_math`,
      link: `/courses/higher-math`,
      isFree: true,
    },
    {
      id: "5",
      title: `নবম-দশম শ্রেণি - সাধারণ গণিত কোর্স`,
      instructor: "Nafisa Rahman",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=general_math`,
      link: `/courses/general-math`,
      isFree: true,
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className={`bg-gradient-to-r from-${currentGroup.color} to-indigo-900 py-16`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-white">
                দশম শ্রেণি ও এসএসসি
              </h1>
              <p className="text-xl text-white/80">
                এক্সামটি টিচারদের গ্রেগুলার লাইভ ক্লাস, সাইন্টিফিক, ম্যাথে টেস্ট নিয়ে সার্থক প্রস্তুতি নিতে জয়েন করুন!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  color="primary" 
                  size="lg" 
                  className="bg-white text-blue-900 font-medium"
                >
                  ক্লাস বুক করুন
                </Button>
                <Button 
                  variant="bordered" 
                  className="border-white/30 text-white font-medium"
                >
                  সিলেবাস দেখুন
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={currentGroup.image} 
                alt={currentGroup.title} 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium">SSC 2026</div>
                <div className="text-xs mt-1">অনলাইন ব্যাচ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Batch Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              লাইভ কোর্সসমূহ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sscCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                instructor={course.instructor}
                instructorRating={course.instructorRating}
                image={course.image}
                link={course.link}
                price={course.price}
                originalPrice={course.originalPrice}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Free Courses Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold">
              ফ্রি কোর্সসমূহ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden h-full">
                <CardBody className="p-0 flex flex-col">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Free
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                    <div className="text-sm text-gray-600 mb-4 flex-grow">
                      {course.instructor} {course.instructorRating && <span className="text-primary ml-1">+{course.instructorRating}</span>}
                    </div>
                    <Button 
                      as={Link}
                      to={course.link}
                      color="success"
                      variant="flat"
                      size="sm"
                      className="self-start"
                    >
                      Free
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">আজই শুরু করুন আপনার SSC প্রস্তুতি</h2>
          <p className="max-w-2xl mx-auto mb-8">
            ১০ মিনিট স্কুলের সাথে SSC পরীক্ষার জন্য সম্পূর্ণ প্রস্তুতি নিন
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
              to="/batch/ssc"
              variant="bordered"
              size="lg"
              className="border-white text-white font-medium"
            >
              সকল কোর্স দেখুন
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};