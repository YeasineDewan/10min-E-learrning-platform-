import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <Card className="border border-gray-200">
      <CardBody className="flex flex-col items-center text-center p-6">
        <div className="bg-primary/10 p-3 rounded-full mb-4">
          <Icon icon={icon} className="text-primary" width={28} height={28} />
        </div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardBody>
    </Card>
  );
};

export const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: "lucide:users",
      title: "দেশসেরা শিক্ষক",
      description: "অভিজ্ঞ এবং যোগ্য শিক্ষকদের সাথে পড়াশোনা করুন",
    },
    {
      icon: "lucide:book-open",
      title: "৫ লাখ+ শিক্ষার্থী",
      description: "সারা দেশের লাখো শিক্ষার্থীর সাথে যোগ দিন",
    },
    {
      icon: "lucide:video",
      title: "৭০+ অনলাইন কোর্স",
      description: "যেকোনো বিষয়ে দক্ষতা অর্জন করুন",
    },
    {
      icon: "lucide:certificate",
      title: "সার্টিফিকেট",
      description: "কোর্স শেষে পাবেন মূল্যবান সার্টিফিকেট",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">কেন আমাদের বেছে নিবেন?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ১০ মিনিট স্কুল বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্লাটফর্ম যেখানে আপনি যেকোনো বিষয়ে দক্ষতা অর্জন করতে পারবেন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};