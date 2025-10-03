import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CourseCard } from "../components/course-card";

export const EnglishCentrePage: React.FC = () => {
  const englishCourses = [
    {
      id: "1",
      title: "IELTS Course by Munzereen Shahid",
      instructor: "Munzereen Shahid",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=ielts_course",
      link: "/courses/ielts-course",
      price: 3850,
      originalPrice: 5000,
    },
    {
      id: "2",
      title: "ঘরে বসে Spoken English",
      instructor: "Munzereen Shahid",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=spoken_english",
      link: "/courses/spoken-english",
      price: 1950,
    },
    {
      id: "3",
      title: "IELTS LIVE Batch",
      instructor: "Uttam Deb",
      instructorRating: "4",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=ielts_live",
      link: "/courses/ielts-live",
      price: 8500,
      originalPrice: 10000,
    },
    {
      id: "4",
      title: "Spoken English Junior LIVE Batch",
      instructor: "Rukhsar Sanjaree",
      instructorRating: "4",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=spoken_junior",
      link: "/courses/spoken-english-junior",
      price: 8500,
      originalPrice: 10000,
    },
  ];

  const locations = [
    {
      name: "সেক্টর-৩, উত্তরা, ঢাকা",
      address: "নিকট: ৮, রোড: ২, ব্লক: ৪, সেক্টর-৩, উত্তরা, ঢাকা (রাজলক্ষ্মী কমপ্লেক্স ৫তলা)",
    },
    {
      name: "ধানমন্ডি, ঢাকা",
      address: "নিকট: ২, রোড: ২৭/১ এ ২, গ্রীন রোড, ধানমন্ডি, ঢাকা (ধানমন্ডি সিনেপ্লেক্স উল্টো)",
    },
    {
      name: "মিরপুর, ঢাকা",
      address: "নিকট: ৭, রোড: ৪৪৮, সেনপাড়া পর্বতা, মিরপুর-১০, ঢাকা (মোবাইল নম্বর: ১০১)",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center">
                <h1 className="text-4xl md:text-5xl font-bold">
                  10 Minute School<br />English Centre
                </h1>
              </div>
              <p className="text-lg opacity-90">
                অনলাইনে লক্ষ লক্ষ শিক্ষার্থীকে ইংরেজি শিখিয়ে এবার আমরা সাবলীলভাবে দক্ষতা। এখন, আমরা অত্যাধুনিক মাল্টিমিডিয়া ক্লাসরুম বলে, দেশের সেরা শিক্ষকদের কাছ থেকে সরাসরি শিখতে পারবেন Spoken English এবং নিতে পারবেন IELTS'র জন্য কোয়ালিটি প্রস্তুতি।
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  color="danger" 
                  size="lg" 
                  className="font-medium"
                >
                  ফ্রি ক্লাস বুক করুন
                </Button>
                <Button 
                  variant="bordered" 
                  className="bg-white/10 border-white/30 text-white font-medium"
                >
                  সিলেবাস ডাউনলোড করুন
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-red-700/20 p-4 rounded-2xl">
                <img 
                  src="https://img.heroui.chat/image/ai?w=600&h=400&u=english_class" 
                  alt="English Centre" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ভাষা শিক্ষা <span className="text-sm text-gray-500">(23 courses)</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              আমাদের ভাষা শিক্ষা কোর্সগুলো থেকে আপনার পছন্দের কোর্সটি বেছে নিন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {englishCourses.map((course) => (
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

          <div className="text-center mt-8">
            <Button 
              as={Link}
              to="/courses/language"
              color="primary"
              variant="flat"
              endContent={<Icon icon="lucide:arrow-right" />}
            >
              সব দেখুন →
            </Button>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">আমাদের সেন্টারসমূহ</h2>
          
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hidden">
              {locations.map((location, index) => (
                <Card key={index} className="min-w-[350px] md:min-w-[450px] border border-gray-200">
                  <CardBody className="flex items-center p-4">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Icon icon="lucide:map-pin" className="text-gray-500 mr-2" />
                        <h3 className="font-semibold">{location.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{location.address}</p>
                    </div>
                    <Button isIconOnly variant="light" className="text-gray-500">
                      <Icon icon="lucide:chevron-right" />
                    </Button>
                  </CardBody>
                </Card>
              ))}
            </div>
            
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10">
              <Icon icon="lucide:chevron-left" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10">
              <Icon icon="lucide:chevron-right" />
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">আজই শুরু করুন আপনার ইংরেজি শেখার যাত্রা</h2>
          <p className="max-w-2xl mx-auto mb-8">
            দেশের সেরা শিক্ষকদের সাথে ইংরেজি শিখুন এবং আপনার ক্যারিয়ার গড়ে তুলুন
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              color="danger"
              variant="solid"
              size="lg"
              className="bg-white text-red-600 font-medium"
            >
              ফ্রি ক্লাস বুক করুন
            </Button>
            <Button 
              variant="bordered"
              size="lg"
              className="border-white text-white font-medium"
            >
              সিলেবাস ডাউনলোড করুন
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};