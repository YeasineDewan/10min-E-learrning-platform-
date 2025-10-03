import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const OnlineBatchPage: React.FC = () => {
  const batchCourses = [
    {
      id: "1",
      title: "HSC 27 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)",
      features: [
        "প্রতি সপ্তাহে ১২ টি লাইভ ক্লাস",
        "ডেইলি, সাপ্তাহিক ও মাসিক এক্সাম",
        "AI Doubt Solver"
      ],
      image: "https://img.heroui.chat/image/ai?w=400&h=400&u=pcmb",
      link: "/batch/hsc-27-pcmb",
    },
    {
      id: "2",
      title: "HSC 27 অনলাইন ব্যাচ (বাংলা, ইংরেজি, তথ্য ও যোগাযোগ প্রযুক্তি)",
      features: [
        "প্রতি সপ্তাহে ৬ টি লাইভ ক্লাস",
        "ডেইলি, সাপ্তাহিক ও মাসিক এক্সাম",
        "বিষয় ভিত্তিক সারাংশ বুক"
      ],
      image: "https://img.heroui.chat/image/ai?w=400&h=400&u=bei",
      link: "/batch/hsc-27-bei",
    },
    {
      id: "3",
      title: "HSC 27 অনলাইন ব্যাচ (ফাইন্যান্স ও একাউন্টিং)",
      features: [
        "প্রতি সপ্তাহে ৫টি লাইভ ক্লাস",
        "ডেইলি ও মাসিক এক্সাম",
        "সাপ্তাহিক Q&A সেশন",
        "আন্তর্জাতিক লেকচার শীট"
      ],
      image: "https://img.heroui.chat/image/ai?w=400&h=400&u=finance",
      link: "/batch/hsc-27-finance",
    },
    {
      id: "4",
      title: "HSC 27 অনলাইন ব্যাচ (জিওগ্রাফি ও ইকোনমিক্স)",
      features: [
        "প্রতি সপ্তাহে ৩ টি লাইভ ক্লাস",
        "ডেইলি ও মাসিক এক্সাম",
        "সাপ্তাহিক Q&A সেশন",
        "আন্তর্জাতিক লেকচার শীট"
      ],
      image: "https://img.heroui.chat/image/ai?w=400&h=400&u=geography",
      link: "/batch/hsc-27-geography",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">অনলাইন ব্যাচ</h1>
            <Button 
              color="primary" 
              variant="solid" 
              className="bg-white text-purple-900"
            >
              ক্লাস বুক করুন
            </Button>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <div className="relative bg-gradient-to-r from-purple-900 to-red-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">তুমি কি আসলে? <br/>চাকরির জন্য READY?</h2>
              <Button 
                color="warning" 
                className="mt-2"
              >
                রেজিস্ট্রেশন করাে
              </Button>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <h3 className="text-xl font-bold mb-1">ক্লিক করাে</h3>
                <Button 
                  color="warning" 
                  className="font-bold"
                >
                  ক্লিক করাে
                </Button>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-yellow-400">১০</div>
                <div className="text-xl">লাখ টাকার পুরস্কার</div>
              </div>
            </div>
            <div className="absolute right-2 top-2">
              <Button 
                isIconOnly 
                size="sm" 
                variant="light" 
                className="bg-white/10"
              >
                <Icon icon="lucide:x" className="text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Batch Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              অনলাইন ব্যাচ <Icon icon="lucide:crown" className="ml-2 text-yellow-500" />
            </h2>
            <p className="text-gray-600 mt-2">
              দেশের যেকোনো প্রান্ত থেকে ঘরে বসেই সেরা সব শিক্ষকদের সাথে লাইভ সম্পূর্ণ নিজেরাই প্রস্তুতি
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {batchCourses.map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{course.title}</h3>
                    <ul className="space-y-3 mb-6">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Icon icon="lucide:check-circle" className="text-gray-500 mr-2 mt-1" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      as={Link}
                      to={course.link}
                      color="primary"
                      className="w-full"
                    >
                      বিস্তারিত দেখুন
                    </Button>
                  </div>
                  <div className="bg-gray-100">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Class */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">এডমিশনের ক্লাস নিচ্ছে যারা</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="border border-gray-200">
                <CardBody className="p-4 text-center">
                  <img 
                    src={`https://img.heroui.chat/image/avatar?w=100&h=100&u=teacher${i}`} 
                    alt="Teacher" 
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold">Aman Islam Siam</h3>
                  <p className="text-xs text-gray-500">ঢাকা বিশ্ববিদ্যালয়</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};