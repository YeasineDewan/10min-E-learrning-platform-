import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody, Tabs, Tab } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CourseCard } from "../components/course-card";

interface ClassParams {
  id: string;
}

export const ClassPage: React.FC = () => {
  const { id } = useParams<ClassParams>();
  const [selected, setSelected] = React.useState("all");
  
  // Convert class id to display format
  const classDisplay = `Class ${id}`;
  
  // Determine if this is a higher class (9-10) with departments
  const hasGroups = parseInt(id) >= 9 && parseInt(id) <= 10;

  const courseGroups = [
    { key: "all", title: "All Subjects" },
    { key: "bangla", title: "Bangla" },
    { key: "english", title: "English" },
    { key: "math", title: "Mathematics" },
    { key: "science", title: "Science" },
    { key: "social", title: "Social Science" },
    { key: "ict", title: "ICT" },
  ];

  // For classes 9-10, add group tabs
  const departmentGroups = [
    { key: "science", title: "Science Group" },
    { key: "humanities", title: "Humanities Group" },
    { key: "commerce", title: "Commerce Group" },
  ];

  // Sample courses data
  const courses = [
    {
      id: "1",
      title: `${classDisplay} - বাংলা সাহিত্য`,
      instructor: "Aman Islam Siam",
      instructorRating: "13",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=bangla_${id}`,
      link: `/courses/class-${id}-bangla`,
      price: 3000,
      originalPrice: 3500,
      group: "all"
    },
    {
      id: "2",
      title: `${classDisplay} - English Grammar & Composition`,
      instructor: "Faiza Tasnim",
      instructorRating: "10",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=english_${id}`,
      link: `/courses/class-${id}-english`,
      price: 2750,
      originalPrice: 3000,
      group: "all"
    },
    {
      id: "3",
      title: `${classDisplay} - Mathematics`,
      instructor: "MD. Hasib Bin Hasan",
      instructorRating: "11",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=math_${id}`,
      link: `/courses/class-${id}-math`,
      price: 2750,
      originalPrice: 3000,
      group: "science"
    },
    {
      id: "4",
      title: `${classDisplay} - Science`,
      instructor: "Asadur Rahman Turzo",
      instructorRating: "10",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=science_${id}`,
      link: `/courses/class-${id}-science`,
      price: 3500,
      group: "science"
    },
  ];

  // Free courses
  const freeCourses = [
    {
      id: "5",
      title: `${classDisplay} - টেস্ট পরীক্ষা প্রস্তুতি কোর্স`,
      instructor: "Abu Bokkar Siddique",
      instructorRating: "18",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=test_${id}`,
      link: `/courses/class-${id}-test`,
      isFree: true,
      group: "all"
    },
    {
      id: "6",
      title: `${classDisplay} - উচ্চতর গণিত কোর্স`,
      instructor: "Tanvir Ahmed",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=higher_math_${id}`,
      link: `/courses/class-${id}-higher-math`,
      isFree: true,
      group: "science"
    },
    {
      id: "7",
      title: `${classDisplay} - সাধারণ গণিত কোর্স`,
      instructor: "Nafisa Rahman",
      image: `https://img.heroui.chat/image/ai?w=400&h=225&u=general_math_${id}`,
      link: `/courses/class-${id}-general-math`,
      isFree: true,
      group: "humanities"
    },
  ];

  // Filter courses based on selected tab
  const filteredCourses = selected === "all" 
    ? courses 
    : courses.filter(course => course.group === selected || course.group === "all");

  const filteredFreeCourses = selected === "all"
    ? freeCourses
    : freeCourses.filter(course => course.group === selected || course.group === "all");

  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{classDisplay} {hasGroups && <Icon icon="lucide:chevron-right" className="inline" />}</h1>
              <p className="text-white/80">
                সকল বিষয়ে সেরা শিক্ষকদের সাথে পড়াশোনা করুন
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button 
                color="primary" 
                variant="solid" 
                className="bg-white text-blue-900 font-medium"
                startContent={<Icon icon="lucide:book-open" />}
              >
                ফ্রি ক্লাস বুক করুন
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Department Selection for Classes 9-10 */}
      {hasGroups && (
        <section className="bg-gray-100 py-6">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto pb-2 scrollbar-hidden">
              <Tabs 
                aria-label="Department Groups" 
                selectedKey={selected} 
                onSelectionChange={setSelected as any}
                classNames={{
                  tabList: "overflow-x-auto flex-nowrap",
                }}
              >
                {departmentGroups.map((group) => (
                  <Tab 
                    key={group.key} 
                    title={group.title}
                  />
                ))}
              </Tabs>
            </div>
          </div>
        </section>
      )}

      {/* Subject Selection */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-2 scrollbar-hidden">
            <Tabs 
              aria-label="Subject Groups" 
              selectedKey={selected} 
              onSelectionChange={setSelected as any}
              classNames={{
                tabList: "overflow-x-auto flex-nowrap",
              }}
            >
              {courseGroups.map((group) => (
                <Tab 
                  key={group.key} 
                  title={group.title}
                />
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Online Batch Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              অনলাইন ব্যাচ <Icon icon="lucide:crown" className="ml-2 text-yellow-500" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFreeCourses.map((course) => (
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
                      endContent={<span>→</span>}
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
              to={`/courses/class-${id}`}
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