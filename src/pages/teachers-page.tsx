import React from "react";
import { Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { TeacherCard } from "../components/teacher-card";

export const TeachersPage: React.FC = () => {
  const teachers = [
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
    {
      id: "5",
      name: "Aman Islam Siam",
      title: "University Admission Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher5",
      link: "/teachers/aman-islam",
    },
    {
      id: "6",
      name: "Ridwan Kabir Beacon",
      title: "University Admission Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher6",
      link: "/teachers/ridwan-kabir",
    },
    {
      id: "7",
      name: "Faiza Tasnim",
      title: "University Admission Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher7",
      link: "/teachers/faiza-tasnim",
    },
    {
      id: "8",
      name: "Sakib Bin Rashid",
      title: "BCS Preparation Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher8",
      link: "/teachers/sakib-bin-rashid",
    },
    {
      id: "9",
      name: "Akif Masumi",
      title: "Bank Job Preparation Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher9",
      link: "/teachers/akif-masumi",
    },
    {
      id: "10",
      name: "Shahnawaz Hossain Jay",
      title: "English Language Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher10",
      link: "/teachers/shahnawaz-hossain",
    },
    {
      id: "11",
      name: "Dr. Mahfuz Ahmed",
      title: "Medical Admission Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher11",
      link: "/teachers/mahfuz-ahmed",
    },
    {
      id: "12",
      name: "Tanvir Hasan",
      title: "Engineering Admission Instructor",
      image: "https://img.heroui.chat/image/avatar?w=300&h=400&u=teacher12",
      link: "/teachers/tanvir-hasan",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">দেশসেরা শিক্ষকমণ্ডলী</h1>
            <p className="max-w-2xl mx-auto mb-6">
              অভিজ্ঞ এবং যোগ্য শিক্ষকদের সাথে আপনার শিক্ষা যাত্রা শুরু করুন
            </p>
            <div className="max-w-md mx-auto">
              <Input
                placeholder="শিক্ষক খুঁজুন..."
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

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((teacher) => (
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
        </div>
      </section>

      {/* Join as Teacher */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">আমাদের সাথে শিক্ষক হিসেবে যোগ দিন</h2>
              <p className="text-gray-600 mb-6">
                আপনি কি একজন অভিজ্ঞ শিক্ষক? আমাদের প্লাটফর্মে যোগ দিয়ে লাখো শিক্ষার্থীদের শিক্ষা দিন এবং আয় করুন।
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>নিজের সময় অনুযায়ী ক্লাস নিন</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>আকর্ষণীয় পারিশ্রমিক</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>প্রফেশনাল ক্যারিয়ার গড়ুন</span>
                </li>
                <li className="flex items-center">
                  <Icon icon="lucide:check-circle" className="text-primary mr-2" />
                  <span>লাখো শিক্ষার্থীদের সাথে যোগাযোগ</span>
                </li>
              </ul>
              <a 
                href="/join-teacher" 
                className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-md hover:bg-primary-600 transition-colors"
              >
                আবেদন করুন
              </a>
            </div>
            <div>
              <img 
                src="https://img.heroui.chat/image/ai?w=600&h=400&u=teaching" 
                alt="Join as teacher" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};