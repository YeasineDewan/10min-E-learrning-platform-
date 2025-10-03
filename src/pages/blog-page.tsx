import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Input } from "@heroui/react";
import { Icon } from "@iconify/react";

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  
  const blogPosts = [
    {
      id: "1",
      title: "HSC পরীক্ষার প্রস্তুতি: সময় ব্যবস্থাপনা টিপস",
      excerpt: "HSC পরীক্ষার জন্য সঠিক সময় ব্যবস্থাপনা কীভাবে করবেন তা জানুন। সময়ের সর্বোত্তম ব্যবহার করে কীভাবে ভালো ফলাফল পাবেন তার টিপস।",
      category: "Study Tips",
      author: "Aman Islam Siam",
      date: "June 15, 2023",
      image: "https://img.heroui.chat/image/ai?w=800&h=400&u=study_tips",
      slug: "hsc-exam-preparation-time-management-tips"
    },
    {
      id: "2",
      title: "ইংরেজি ভাষা শেখার ১০টি অনলাইন রিসোর্স",
      excerpt: "ইংরেজি ভাষা শেখার জন্য সেরা ১০টি অনলাইন রিসোর্স সম্পর্কে জানুন। এই রিসোর্সগুলো ব্যবহার করে আপনি ঘরে বসেই ইংরেজি ভাষায় দক্ষতা অর্জন করতে পারবেন।",
      category: "Language Learning",
      author: "Munzereen Shahid",
      date: "May 28, 2023",
      image: "https://img.heroui.chat/image/ai?w=800&h=400&u=language_learning",
      slug: "10-online-resources-for-learning-english"
    },
    {
      id: "3",
      title: "ডিজিটাল মার্কেটিং: ক্যারিয়ার হিসেবে কেন বেছে নিবেন?",
      excerpt: "ডিজিটাল মার্কেটিং একটি প্রতিযোগিতামূলক ক্যারিয়ার হিসেবে কেন বেছে নিবেন? এর সুযোগ-সুবিধা এবং ভবিষ্যৎ সম্ভাবনা সম্পর্কে জানুন।",
      category: "Career",
      author: "Sadman Sadik",
      date: "April 10, 2023",
      image: "https://img.heroui.chat/image/ai?w=800&h=400&u=digital_marketing",
      slug: "digital-marketing-as-career"
    },
    {
      id: "4",
      title: "মেডিকেল এডমিশন টেস্ট: সাফল্যের গল্প",
      excerpt: "মেডিকেল এডমিশন টেস্টে সফল হওয়ার জন্য কী কী প্রস্তুতি নিতে হবে? সফল ছাত্রদের অভিজ্ঞতা থেকে শিখুন।",
      category: "Admission",
      author: "Dr. Mahfuz Ahmed",
      date: "March 5, 2023",
      image: "https://img.heroui.chat/image/ai?w=800&h=400&u=medical_admission",
      slug: "medical-admission-test-success-stories"
    },
    {
      id: "5",
      title: "প্রোগ্রামিং শেখার সহজ উপায়",
      excerpt: "প্রোগ্রামিং শেখার সহজ উপায় সম্পর্কে জানুন। কোন ভাষা দিয়ে শুরু করবেন এবং কীভাবে ধাপে ধাপে এগিয়ে যাবেন।",
      category: "Programming",
      author: "Tanvir Hasan",
      date: "February 20, 2023",
      image: "https://img.heroui.chat/image/ai?w=800&h=400&u=programming",
      slug: "easy-ways-to-learn-programming"
    },
    {
      id: "6",
      title: "ফ্রিল্যান্সিং: ঘরে বসে আয় করার উপায়",
      excerpt: "ফ্রিল্যান্সিং করে কীভাবে ঘরে বসে আয় করা যায়? কোন কোন স্কিল শিখলে ফ্রিল্যান্সিং করে ভালো আয় করা যায়?",
      category: "Freelancing",
      author: "Mohammad Yeasir",
      date: "January 15, 2023",
      image: "https://img.heroui.chat/image/ai?w=800&h=400&u=freelancing",
      slug: "freelancing-earning-from-home"
    }
  ];

  const categories = [
    { name: "Study Tips", count: 12 },
    { name: "Language Learning", count: 8 },
    { name: "Career", count: 15 },
    { name: "Admission", count: 10 },
    { name: "Programming", count: 7 },
    { name: "Freelancing", count: 5 },
  ];

  const popularPosts = [
    {
      title: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রস্তুতি",
      date: "July 10, 2023",
      slug: "university-admission-preparation"
    },
    {
      title: "ইংরেজিতে কথা বলার ১০টি টিপস",
      date: "June 25, 2023",
      slug: "10-tips-for-speaking-english"
    },
    {
      title: "SSC পরীক্ষার জন্য সেরা বই",
      date: "May 15, 2023",
      slug: "best-books-for-ssc-exam"
    },
    {
      title: "ওয়েব ডেভেলপমেন্ট শেখার রোডম্যাপ",
      date: "April 20, 2023",
      slug: "web-development-learning-roadmap"
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">ব্লগ</h1>
            <p className="max-w-2xl mx-auto mb-6">
              শিক্ষা, ক্যারিয়ার এবং স্কিল ডেভেলপমেন্ট সম্পর্কিত আর্টিকেল পড়ুন
            </p>
            <div className="max-w-md mx-auto">
              <Input
                placeholder="ব্লগ সার্চ করুন..."
                value={searchQuery}
                onValueChange={setSearchQuery}
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

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <CardBody className="p-0 flex flex-col">
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full aspect-video object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs font-medium">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                        <Button 
                          as={Link}
                          to={`/blog/${post.slug}`}
                          color="primary"
                          variant="flat"
                          size="sm"
                          className="self-start"
                          endContent={<Icon icon="lucide:arrow-right" />}
                        >
                          আরও পড়ুন
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ))}
              </div>

              <div className="mt-10 flex justify-center">
                <Button 
                  color="primary"
                  variant="flat"
                  endContent={<Icon icon="lucide:arrow-right" />}
                >
                  আরও আর্টিকেল দেখুন
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories */}
              <Card className="mb-8">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-4">ক্যাটাগরি</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link 
                          to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex justify-between items-center py-2 hover:text-primary"
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>

              {/* Popular Posts */}
              <Card className="mb-8">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-4">জনপ্রিয় পোস্ট</h3>
                  <ul className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <li key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-primary"
                        >
                          <h4 className="font-medium mb-1">{post.title}</h4>
                          <div className="text-xs text-gray-500">{post.date}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold mb-4">নিউজলেটার</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং সর্বশেষ আপডেট পান
                  </p>
                  <Input
                    placeholder="আপনার ইমেইল"
                    className="mb-4"
                  />
                  <Button 
                    color="primary"
                    fullWidth
                  >
                    সাবস্ক্রাইব
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};