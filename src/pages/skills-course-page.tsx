import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CourseCard } from "../components/course-card";

export const SkillsCoursePage: React.FC = () => {
  const [selected, setSelected] = React.useState("all");

  const courseCategories = [
    { key: "all", title: "All courses", icon: "lucide:grid" },
    { key: "language", title: "ভাষা শিক্ষা", icon: "lucide:message-circle", count: 23 },
    { key: "creative", title: "ক্রিয়েটিভ", icon: "lucide:palette", count: 6 },
    { key: "bangla", title: "বাংলা", icon: "lucide:book-open", count: 9 },
    { key: "design", title: "ডিজাইন এন্ড আর্টি", icon: "lucide:pen-tool", count: 14 },
    { key: "development", title: "ডিজিটাল এন্ড ক্রিয়েটিভ", icon: "lucide:code", count: 6 },
    { key: "career", title: "ক্যারিয়ার বেসিকস", icon: "lucide:briefcase", count: 8 },
    { key: "business", title: "বিজনেস কোর্সমূহ", icon: "lucide:bar-chart", count: 1 },
    { key: "professional", title: "প্রফেশনাল কোর্সমূহ", icon: "lucide:award", count: 2 },
    { key: "free", title: "ফ্রি কোর্সমূহ", icon: "lucide:gift", count: 42 },
  ];

  const skillCourses = [
    {
      id: "1",
      title: "IELTS Course by Munzereen Shahid",
      instructor: "Munzereen Shahid",
      category: "language",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=ielts_course",
      link: "/courses/ielts-course",
      price: 3850,
      originalPrice: 5000,
    },
    {
      id: "2",
      title: "ঘরে বসে Spoken English",
      instructor: "Munzereen Shahid",
      category: "language",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=spoken_english",
      link: "/courses/spoken-english",
      price: 1950,
    },
    {
      id: "3",
      title: "News Presentation Course",
      instructor: "Farabi Hafiz",
      category: "creative",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=presenter",
      link: "/courses/news-presentation",
    },
    {
      id: "4",
      title: "Graphic Designing with Photoshop",
      instructor: "Sadman Sadik",
      category: "design",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=designer",
      link: "/courses/graphic-design",
    },
  ];

  const filteredCourses = selected === "all" 
    ? skillCourses 
    : skillCourses.filter(course => course.category === selected);

  return (
    <>
      {/* Header */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">স্কিলস কোর্সমূহ</h1>
          <p className="text-gray-600">কোর্স ক্যাটাগরিগুলো এক্সপ্লোর করুন</p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 scrollbar-hidden">
            {courseCategories.map((category) => (
              <Button 
                key={category.key}
                variant={selected === category.key ? "flat" : "light"}
                color={selected === category.key ? "primary" : "default"}
                className="whitespace-nowrap mr-2"
                onPress={() => setSelected(category.key)}
                startContent={<Icon icon={category.icon} />}
              >
                {category.title}
                {category.count && <span className="text-xs ml-1 text-gray-500">{category.count} Courses</span>}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">ভাষা শিক্ষা <span className="text-sm text-gray-500">(23 courses)</span></h2>
            <p className="text-gray-600">
              আমাদের ভাষা শিক্ষা কোর্সগুলো থেকে আপনার পছন্দের কোর্সটি বেছে নিন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                instructor={course.instructor}
                image={course.image}
                link={course.link}
                price={course.price}
                originalPrice={course.originalPrice}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">আমাদের জনপ্রিয় স্কিল কোর্সেস</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ক্যারিয়ার গড়তে প্রয়োজনীয় দক্ষতা অর্জন করুন আমাদের বিশেষজ্ঞ শিক্ষকদের সাথে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Icon icon="lucide:code" className="text-blue-600" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Web Development</h3>
                    <p className="text-sm text-gray-600">14 Courses</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  HTML, CSS, JavaScript, React, Node.js এবং আরও অনেক কিছু শিখুন
                </p>
                <Button 
                  as={Link}
                  to="/skills/web-development"
                  variant="flat"
                  color="primary"
                  endContent={<Icon icon="lucide:arrow-right" />}
                  className="w-full"
                >
                  কোর্স দেখুন
                </Button>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Icon icon="lucide:pen-tool" className="text-green-600" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Graphic Design</h3>
                    <p className="text-sm text-gray-600">8 Courses</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Photoshop, Illustrator, UI/UX Design এবং আরও অনেক কিছু শিখুন
                </p>
                <Button 
                  as={Link}
                  to="/skills/graphic-design"
                  variant="flat"
                  color="primary"
                  endContent={<Icon icon="lucide:arrow-right" />}
                  className="w-full"
                >
                  কোর্স দেখুন
                </Button>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Icon icon="lucide:message-circle" className="text-purple-600" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Language Learning</h3>
                    <p className="text-sm text-gray-600">23 Courses</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  English, Arabic, Spanish, Japanese এবং আরও অনেক ভাষা শিখুন
                </p>
                <Button 
                  as={Link}
                  to="/skills/language"
                  variant="flat"
                  color="primary"
                  endContent={<Icon icon="lucide:arrow-right" />}
                  className="w-full"
                >
                  কোর্স দেখুন
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};