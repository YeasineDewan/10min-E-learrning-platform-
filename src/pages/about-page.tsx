import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

export const AboutPage: React.FC = () => {
  const milestones = [
    {
      year: "2015",
      title: "১০ মিনিট স্কুলের যাত্রা শুরু",
      description: "১০ মিনিট স্কুল প্রতিষ্ঠিত হয় এবং অনলাইনে শিক্ষা দেওয়া শুরু করে।"
    },
    {
      year: "2017",
      title: "১ মিলিয়ন শিক্ষার্থী",
      description: "১০ মিনিট স্কুল ১ মিলিয়ন শিক্ষার্থীর মাইলফলক অতিক্রম করে।"
    },
    {
      year: "2019",
      title: "মোবাইল অ্যাপ লঞ্চ",
      description: "১০ মিনিট স্কুল মোবাইল অ্যাপ লঞ্চ করে, যা লাখ লাখ শিক্ষার্থীর কাছে পৌঁছে যায়।"
    },
    {
      year: "2021",
      title: "৫ মিলিয়ন শিক্ষার্থী",
      description: "১০ মিনিট স্কুল ৫ মিলিয়ন শিক্ষার্থীর মাইলফলক অতিক্রম করে।"
    },
    {
      year: "2023",
      title: "ইংলিশ সেন্টার লঞ্চ",
      description: "১০ মিনিট স্কুল অফলাইন ইংলিশ সেন্টার লঞ্চ করে।"
    }
  ];

  const team = [
    {
      name: "Ayman Sadiq",
      position: "Founder & CEO",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=founder1",
    },
    {
      name: "Munzereen Shahid",
      position: "Co-founder & COO",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=founder2",
    },
    {
      name: "Sadman Sadik",
      position: "Chief Creative Officer",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=executive1",
    },
    {
      name: "Farabi Hafiz",
      position: "Chief Marketing Officer",
      image: "https://img.heroui.chat/image/avatar?w=300&h=300&u=executive2",
    }
  ];

  const values = [
    {
      icon: "lucide:book-open",
      title: "শিক্ষার সুযোগ",
      description: "সবার জন্য সমান শিক্ষার সুযোগ নিশ্চিত করা আমাদের মূল লক্ষ্য।"
    },
    {
      icon: "lucide:lightbulb",
      title: "উদ্ভাবন",
      description: "শিক্ষা পদ্ধতিতে নতুন উদ্ভাবন আনার মাধ্যমে শিক্ষার মান উন্নত করা।"
    },
    {
      icon: "lucide:users",
      title: "সম্প্রদায়",
      description: "শিক্ষার্থী, শিক্ষক এবং অভিভাবকদের নিয়ে একটি শক্তিশালী সম্প্রদায় গড়ে তোলা।"
    },
    {
      icon: "lucide:star",
      title: "উৎকর্ষতা",
      description: "সর্বোচ্চ মানের শিক্ষা প্রদান করার জন্য নিরন্তর প্রচেষ্টা চালানো।"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                আমাদের সম্পর্কে
              </h1>
              <p className="text-xl opacity-90">
                ১০ মিনিট স্কুল বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্লাটফর্ম, যেখানে লাখ লাখ শিক্ষার্থী দেশের সেরা শিক্ষকদের সাথে পড়াশোনা করছে।
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://img.heroui.chat/image/ai?w=600&h=400&u=classroom" 
                alt="10 Minute School Classroom" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">আমাদের গল্প</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ১০ মিনিট স্কুল ২০১৫ সালে যাত্রা শুরু করে, যখন আয়মান সাদিক একটি সহজ ধারণা নিয়ে শুরু করেন - শিক্ষা সবার জন্য সহজলভ্য করা। তারপর থেকে, আমরা বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্লাটফর্মে পরিণত হয়েছি, যেখানে লাখ লাখ শিক্ষার্থী দেশের সেরা শিক্ষকদের সাথে পড়াশোনা করছে।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://img.heroui.chat/image/ai?w=600&h=400&u=founder_story" 
                alt="Founder Story" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">শুরুর গল্প</h3>
              <p className="text-gray-600">
                ১০ মিনিট স্কুল শুরু হয়েছিল একটি ইউটিউব চ্যানেল হিসেবে, যেখানে আয়মান সাদিক ১০ মিনিটের ভিডিও টিউটোরিয়াল আপলোড করতেন। এই ভিডিওগুলো দ্রুত জনপ্রিয়তা পায় এবং শিক্ষার্থীদের মধ্যে ব্যাপক সাড়া জাগায়।
              </p>
              <p className="text-gray-600">
                পরবর্তীতে, মুনজেরিন শাহিদের যোগদানের পর, ১০ মিনিট স্কুল একটি পূর্ণাঙ্গ অনলাইন শিক্ষা প্লাটফর্মে পরিণত হয়। বর্তমানে, আমরা ক্লাস ১ থেকে ১২, ভর্তি পরীক্ষা, চাকরি প্রস্তুতি, দক্ষতা উন্নয়ন ও ভাষা শিক্ষাসহ বিভিন্ন বিষয়ে কোর্স প্রদান করছি।
              </p>
              <p className="text-gray-600">
                আমাদের লক্ষ্য হলো বাংলাদেশের প্রতিটি শিক্ষার্থীর কাছে উচ্চমানের শিক্ষা পৌঁছে দেওয়া, যাতে তারা তাদের সম্পূর্ণ সম্ভাবনা অনুযায়ী বিকশিত হতে পারে।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">আমাদের মূল্যবোধ</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              আমাদের মূল্যবোধগুলো আমাদের পরিচয় এবং কাজের ভিত্তি
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border border-gray-200">
                <CardBody className="p-6 text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon icon={value.icon} className="text-primary" width={28} height={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">আমাদের যাত্রা</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ১০ মিনিট স্কুলের যাত্রাপথে গুরুত্বপূর্ণ মাইলফলকসমূহ
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  <div className="w-1/2 p-4">
                    <Card className="border border-gray-200">
                      <CardBody className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">আমাদের টিম</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ১০ মিনিট স্কুলের পিছনে রয়েছে একদল উদ্যোগী ও উৎসর্গীকৃত পেশাদার
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border border-gray-200">
                <CardBody className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.position}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">আমাদের সাথে যোগ দিন</h2>
          <p className="max-w-2xl mx-auto mb-8">
            ১০ মিনিট স্কুলের সাথে যোগ দিন এবং বাংলাদেশের শিক্ষা ব্যবস্থাকে পরিবর্তন করতে সাহায্য করুন
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              as={Link}
              to="/join-teacher"
              color="primary"
              variant="solid"
              size="lg"
              className="bg-white text-primary font-medium"
            >
              শিক্ষক হিসেবে যোগ দিন
            </Button>
            <Button 
              as={Link}
              to="/career"
              variant="bordered"
              size="lg"
              className="border-white text-white font-medium"
            >
              ক্যারিয়ার
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};