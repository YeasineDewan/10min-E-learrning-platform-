import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Input, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CourseCard } from "../components/course-card";

export const CoursesPage: React.FC = () => {
  const [selected, setSelected] = React.useState("all");

  const courseCategories = [
    { key: "all", title: "All courses", icon: "lucide:grid" },
    { key: "academic", title: "ভাষা শিক্ষা", icon: "lucide:message-circle" },
    { key: "creative", title: "ক্রিয়েটিভ", icon: "lucide:palette" },
    { key: "bangla", title: "বাংলা", icon: "lucide:book-open" },
    { key: "design", title: "ডিজাইন এন্ড আর্টি", icon: "lucide:pen-tool" },
    { key: "development", title: "ডিজিটাল এন্ড ক্রিয়েটিভ", icon: "lucide:code" },
    { key: "career", title: "ক্যারিয়ার বেসিকস", icon: "lucide:briefcase" },
    { key: "business", title: "বিজনেস কোর্সমূহ", icon: "lucide:bar-chart" },
    { key: "professional", title: "প্রফেশনাল কোর্সমূহ", icon: "lucide:award" },
    { key: "free", title: "ফ্রি কোর্সমূহ", icon: "lucide:gift" },
  ];

  const courses = [
    {
      id: "1",
      title: "News Presentation Course",
      instructor: "Farabi Hafiz",
      category: "creative",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=presenter",
      link: "/courses/news-presentation",
    },
    {
      id: "2",
      title: "Graphic Designing with Photoshop",
      instructor: "Sadman Sadik",
      category: "design",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=designer",
      link: "/courses/graphic-design",
    },
    {
      id: "3",
      title: "Adobe Illustrator",
      instructor: "Mohammad Yeasir",
      category: "design",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=illustrator",
      link: "/courses/adobe-illustrator",
    },
    {
      id: "4",
      title: "সহজে Spoken আরবি",
      instructor: "Mahade Hasan",
      category: "academic",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=arabic",
      link: "/courses/spoken-arabic",
    },
    {
      id: "5",
      title: "ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২৫",
      instructor: "Aman Islam Siam",
      category: "academic",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=admission1",
      link: "/courses/varsity-a-unit",
    },
    {
      id: "6",
      title: "ভার্সিটি B Unit + গুচ্ছ এডমিশন কোর্স - ২০২৫",
      instructor: "Ridwan Kabir Beacon",
      category: "academic",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=admission2",
      link: "/courses/varsity-b-unit",
    },
    {
      id: "7",
      title: "বিসিএস প্রিলি রেকর্ডেড কোর্স",
      instructor: "Sakib Bin Rashid",
      category: "career",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=bcs",
      link: "/courses/bcs-preli",
    },
    {
      id: "8",
      title: "ব্যাংক জবস কোর্স",
      instructor: "Akif Masumi",
      category: "career",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=bank",
      link: "/courses/bank-jobs",
    },
  ];

  const filteredCourses = selected === "all" 
    ? courses 
    : courses.filter(course => course.category === selected);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">সকল কোর্স</h1>
            <p className="max-w-2xl mx-auto mb-6">
              ১০ মিনিট স্কুলের ৭০+ অনলাইন কোর্স থেকে আপনার পছন্দের কোর্সটি খুঁজে নিন
            </p>
            <div className="max-w-md mx-auto">
              <Input
                placeholder="কোর্স খুঁজুন..."
                startContent={<Icon icon="lucide:search" className="text-gray-400" />}
                classNames={{
                  inputWrapper: "bg-white/10 border-white/20",
                  input: "text-white placeholder:text-white/60",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs 
            aria-label="Course categories" 
            selectedKey={selected} 
            onSelectionChange={setSelected as any}
            classNames={{
              tabList: "overflow-x-auto flex-nowrap",
            }}
          >
            {courseCategories.map((category) => (
              <Tab 
                key={category.key} 
                title={
                  <div className="flex items-center gap-2">
                    <Icon icon={category.icon} />
                    <span>{category.title}</span>
                  </div>
                }
              />
            ))}
          </Tabs>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
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
          ) : (
            <div className="text-center py-12">
              <Icon icon="lucide:search-x" className="text-gray-400 mx-auto mb-4" width={48} height={48} />
              <h3 className="text-xl font-semibold mb-2">কোন কোর্স পাওয়া যায়নি</h3>
              <p className="text-gray-600 mb-6">অন্য ক্যাটাগরি বা কীওয়ার্ড দিয়ে আবার চেষ্টা করুন</p>
              <Button 
                color="primary" 
                onPress={() => setSelected("all")}
              >
                সব কোর্স দেখুন
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="border-none shadow-md">
            <CardBody className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">কোর্স খুঁজে পাচ্ছেন না?</h2>
                  <p className="text-gray-600">
                    আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন অথবা আপনার প্রয়োজনীয় কোর্স সম্পর্কে জানান
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button 
                    color="primary"
                    startContent={<Icon icon="lucide:phone" />}
                    className="font-medium"
                  >
                    16910
                  </Button>
                  <Button 
                    variant="bordered"
                    color="primary"
                    startContent={<Icon icon="lucide:message-circle" />}
                    className="font-medium"
                  >
                    লাইভ চ্যাট
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
};