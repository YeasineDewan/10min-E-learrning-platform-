import React from "react";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg text-center text-white">
      <div className="text-4xl md:text-5xl font-bold mb-2">{number}</div>
      <div className="text-sm md:text-base opacity-90">{label}</div>
    </div>
  );
};

export const StatisticsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-950 to-red-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">২০২২-২৩ শিক্ষাবর্ষে টেন মিনিট স্কুলের এডমিশন সাফল্য</h2>
          <p className="opacity-80">তোমাদের সাফল্যই আমাদের অনুপ্রেরণা</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatItem number="১৫,৫৪৬" label="মোট শিক্ষার্থী" />
          <StatItem number="১,৩৯৮+" label="চাকরিপ্রাপ্ত শিক্ষার্থী" />
          <StatItem number="৩৪" label="টপ ১০০-তে চাকরিপ্রাপ্ত শিক্ষার্থী" />
        </div>
      </div>
    </section>
  );
};