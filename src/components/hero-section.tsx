import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              শেখার বাসা এখন প্রবাসেও
            </h1>
            <p className="text-xl opacity-90">
              ক্লাস ১ থেকে ১২, ভর্তি পরীক্ষা, চাকরি প্রস্তুতি, দক্ষতা উন্নয়ন ও ভাষা শিক্ষা - সবই এখন আপনার হাতের মুঠোয়
            </p>
            <div className="flex flex-wrap gap-4">
              <Button color="primary" size="lg" className="font-medium">
                শুরু করুন
              </Button>
              <Button variant="bordered" className="bg-white/10 border-white/30 text-white font-medium">
                আরও জানুন
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://img.heroui.chat/image/avatar?w=40&h=40&u=${i}`} 
                    alt="Student" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="font-semibold">১৫,৫৪৬+</div>
                <div className="text-sm opacity-80">শিক্ষার্থী আমাদের সাথে</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://img.heroui.chat/image/ai?w=600&h=400&u=elearning" 
              alt="E-learning platform" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-5 -right-5 bg-primary text-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-medium">৭০+ অনলাইন কোর্স</div>
              <div className="text-xs mt-1">সকল বিষয়ে</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};