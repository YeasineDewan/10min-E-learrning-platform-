import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface HscParams {
  group: string;
}

export const HscPage: React.FC = () => {
  const { group } = useParams<HscParams>();
  
  // Convert group to display format
  const groupDisplay = group.charAt(0).toUpperCase() + group.slice(1);
  
  // Group specific data
  const groupData = {
    science: {
      title: "HSC Science Group",
      subtitle: "Physics, Chemistry, Math, Biology",
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=hsc_science",
      courses: [
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
        }
      ]
    },
    humanities: {
      title: "HSC Humanities Group",
      subtitle: "Bangla, English, ICT",
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=hsc_humanities",
      courses: [
        {
          id: "1",
          title: "HSC 27 অনলাইন ব্যাচ (বাংলা, ইংরেজি, তথ্য ও যোগাযোগ প্রযুক্তি)",
          features: [
            "প্রতি সপ্তাহে ৬ টি লাইভ ক্লাস",
            "ডেইলি, সাপ্তাহিক ও মাসিক এক্সাম",
            "বিষয় ভিত্তিক সারাংশ বুক"
          ],
          image: "https://img.heroui.chat/image/ai?w=400&h=400&u=bei",
          link: "/batch/hsc-27-bei",
        }
      ]
    },
    commerce: {
      title: "HSC Commerce Group",
      subtitle: "Finance, Accounting",
      image: "https://img.heroui.chat/image/ai?w=600&h=400&u=hsc_commerce",
      courses: [
        {
          id: "1",
          title: "HSC 27 অনলাইন ব্যাচ (ফাইন্যান্স ও একাউন্টিং)",
          features: [
            "প্রতি সপ্তাহে ৫টি লাইভ ক্লাস",
            "ডেইলি ও মাসিক এক্সাম",
            "সাপ্তাহিক Q&A সেশন",
            "আন্তর্জাতিক লেকচার শীট"
          ],
          image: "https://img.heroui.chat/image/ai?w=400&h=400&u=finance",
          link: "/batch/hsc-27-finance",
        }
      ]
    }
  };

  // Get current group data
  const currentGroup = groupData[group as keyof typeof groupData];

  // Featured teachers
  const featuredTeachers = [
    {
      id: "1",
      name: "Aman Islam Siam",
      title: "Physics Instructor",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=teacher1",
    },
    {
      id: "2",
      name: "Faiza Tasnim",
      title: "Chemistry Instructor",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=teacher2",
    },
    {
      id: "3",
      name: "MD. Hasib Bin Hasan",
      title: "Mathematics Instructor",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=teacher3",
    },
    {
      id: "4",
      name: "Asadur Rahman Turzo",
      title: "Biology Instructor",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=teacher4",
    },
    {
      id: "5",
      name: "Nafisa Rahman",
      title: "English Instructor",
      image: "https://img.heroui.chat/image/avatar?w=100&h=100&u=teacher5",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-white">
                HSC {groupDisplay} Group
              </h1>
              <p className="text-xl text-white/80">
                এক্সামটি টিচারদের গ্রেগুলার লাইভ ক্লাস, সাইন্টিফিক, ম্যাথে টেস্ট নিয়ে সার্থক প্রস্তুতি নিতে জয়েন করুন!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  color="primary" 
                  size="lg" 
                  className="bg-white text-purple-900 font-medium"
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
                <div className="text-sm font-medium">HSC 2027</div>
                <div className="text-xs mt-1">অনলাইন ব্যাচ</div>
              </div>
            </div>
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

      {/* Online Batch Section */}
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
            {currentGroup.courses.map((course) => (
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

      {/* Featured Teachers */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">এডমিশনের ক্লাস নিচ্ছে যারা</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {featuredTeachers.map((teacher) => (
              <Card key={teacher.id} className="border border-gray-200">
                <CardBody className="p-4 text-center">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold">{teacher.name}</h3>
                  <p className="text-xs text-gray-500">{teacher.title}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">আজই শুরু করুন আপনার HSC প্রস্তুতি</h2>
          <p className="max-w-2xl mx-auto mb-8">
            ১০ মিনিট স্কুলের সাথে HSC পরীক্ষার জন্য সম্পূর্ণ প্রস্তুতি নিন
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
              to="/batch/hsc"
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