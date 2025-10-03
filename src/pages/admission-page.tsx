import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CourseCard } from "../components/course-card";

export const AdmissionPage: React.FC = () => {
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
    {
      id: "4",
      title: "মেডিকেল এডমিশন কোর্স - ২০২৫",
      instructor: "Dr. Mahfuz Ahmed",
      instructorRating: "15",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=medical",
      link: "/courses/medical-admission",
    },
    {
      id: "5",
      title: "ইঞ্জিনিয়ারিং এডমিশন কোর্স - ২০২৫",
      instructor: "Tanvir Hasan",
      instructorRating: "9",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=engineering",
      link: "/courses/engineering-admission",
    },
    {
      id: "6",
      title: "বিবিএ এডমিশন কোর্স - ২০২৫",
      instructor: "Nafisa Rahman",
      instructorRating: "8",
      image: "https://img.heroui.chat/image/ai?w=400&h=225&u=bba",
      link: "/courses/bba-admission",
    },
  ];

  const features = [
    {
      icon: "lucide:users",
      title: "দেশসেরা শিক্ষক",
      description: "সকল বিশ্ববিদ্যালয়ের সেরা শিক্ষকদের সাথে পড়াশোনা করুন",
    },
    {
      icon: "lucide:book-open",
      title: "সম্পূর্ণ সিলেবাস কভারেজ",
      description: "ভর্তি পরীক্ষার সম্পূর্ণ সিলেবাস কভার করা হয়",
    },
    {
      icon: "lucide:file-text",
      title: "প্র্যাকটিস টেস্ট",
      description: "নিয়মিত মডেল টেস্ট এবং প্র্যাকটিস পরীক্ষা",
    },
    {
      icon: "lucide:message-circle",
      title: "২৪/৭ সাপোর্ট",
      description: "যেকোনো সময় আপনার প্রশ্নের উত্তর পাবেন",
    },
  ];

  const universities = [
    { name: "ঢাকা", icon: "lucide:map-pin" },
    { name: "রাজশাহী", icon: "lucide:map-pin" },
    { name: "চিটাগং", icon: "lucide:map-pin" },
    { name: "জাহাঙ্গীরনগর", icon: "lucide:map-pin" },
    { name: "চট্টগ্রাম, কুমিল্লা", icon: "lucide:map-pin" },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি
              </h1>
              <p className="text-xl opacity-90">
                ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের পথ এখানেই!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button color="primary" size="lg" className="font-medium">
                  কোর্স দেখুন
                </Button>
                <Button variant="bordered" className="bg-white/10 border-white/30 text-white font-medium">
                  আরও জানুন
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://img.heroui.chat/image/ai?w=600&h=400&u=university" 
                alt="University admission" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-primary text-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium">১০০% সাফল্যের গ্যারান্টি</div>
                <div className="text-xs mt-1">আমাদের সাথেই</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">আমাদের অ্যাডমিশন কোর্সের বৈশিষ্ট্য</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ১০ মিনিট স্কুলের অ্যাডমিশন কোর্সগুলো কেন সেরা তা জানুন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200">
                <CardBody className="flex flex-col items-center text-center p-6">
                  <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <Icon icon={feature.icon} className="text-primary" width={28} height={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">আমাদের অ্যাডমিশন কোর্সসমূহ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              সকল বিশ্ববিদ্যালয়ের ভর্তি পরীক্ষার জন্য সম্পূর্ণ প্রস্তুতি নিন
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* Universities */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">অনলাইনে ৫ লক্ষাধিক শিক্ষার্থীকে ইংরেজি শিখিয়ে আমরা এখন অফলাইনে</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {universities.map((university, index) => (
              <Button
                key={index}
                variant="flat"
                className="bg-white/10 text-white"
                startContent={<Icon icon={university.icon} />}
              >
                {university.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">আমাদের সাফল্যের গল্প</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              দেখুন কিভাবে আমাদের শিক্ষার্থীরা সাফল্য অর্জন করেছে
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border border-gray-200">
                <CardBody className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={`https://img.heroui.chat/image/avatar?w=60&h=60&u=${i+10}`} 
                      alt="Student" 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">সাদিয়া আহমেদ</h3>
                      <p className="text-sm text-gray-600">ঢাকা বিশ্ববিদ্যালয়, ২০২৩</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "১০ মিনিট স্কুলের অ্যাডমিশন কোর্স আমার ভর্তি পরীক্ষার প্রস্তুতিতে অনেক সাহায্য করেছে। সেরা শিক্ষকদের পড়ানোর পদ্ধতি এবং নিয়মিত মডেল টেস্ট আমাকে সফল হতে সাহায্য করেছে।"
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">আজই শুরু করুন আপনার অ্যাডমিশন প্রস্তুতি</h2>
          <p className="max-w-2xl mx-auto mb-8">
            স্বপ্নের বিশ্ববিদ্যালয়ে ভর্তি হওয়ার জন্য আমাদের সেরা শিক্ষকদের সাথে প্রস্তুতি নিন
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
              to="/courses/admission"
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