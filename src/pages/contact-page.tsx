import React from "react";
import { Button, Card, CardBody, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";

export const ContactPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone, subject, message });
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: "lucide:phone",
      title: "ফোন",
      info: "16910 (24×7)",
      info2: "+880 9610916910 (Outside Bangladesh)"
    },
    {
      icon: "lucide:mail",
      title: "ইমেইল",
      info: "support@10minuteschool.com",
      info2: "info@10minuteschool.com"
    },
    {
      icon: "lucide:map-pin",
      title: "অফিস",
      info: "Level 3, House 496, Road 34",
      info2: "Mohakhali DOHS, Dhaka 1206"
    }
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
    }
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">যোগাযোগ করুন</h1>
            <p className="max-w-2xl mx-auto">
              আমাদের সাথে যোগাযোগ করুন। আমরা আপনার যেকোনো প্রশ্নের উত্তর দিতে সর্বদা প্রস্তুত।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border border-gray-200">
                <CardBody className="p-6 text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon icon={item.icon} className="text-primary" width={28} height={28} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.info}</p>
                  <p className="text-gray-600">{item.info2}</p>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <Card className="border border-gray-200">
                <CardBody className="p-6">
                  <h2 className="text-2xl font-bold mb-6">আমাদের মেসেজ পাঠান</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        label="আপনার নাম"
                        placeholder="আপনার পূর্ণ নাম লিখুন"
                        value={name}
                        onValueChange={setName}
                        isRequired
                      />
                    </div>
                    <div>
                      <Input
                        label="ইমেইল"
                        placeholder="আপনার ইমেইল লিখুন"
                        type="email"
                        value={email}
                        onValueChange={setEmail}
                        isRequired
                      />
                    </div>
                    <div>
                      <Input
                        label="ফোন নম্বর"
                        placeholder="আপনার ফোন নম্বর লিখুন"
                        type="tel"
                        value={phone}
                        onValueChange={setPhone}
                      />
                    </div>
                    <div>
                      <Input
                        label="বিষয়"
                        placeholder="মেসেজের বিষয় লিখুন"
                        value={subject}
                        onValueChange={setSubject}
                        isRequired
                      />
                    </div>
                    <div>
                      <Textarea
                        label="মেসেজ"
                        placeholder="আপনার মেসেজ লিখুন"
                        value={message}
                        onValueChange={setMessage}
                        minRows={4}
                        isRequired
                      />
                    </div>
                    <Button 
                      type="submit" 
                      color="primary" 
                      className="font-medium"
                    >
                      পাঠিয়ে দিন
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </div>

            {/* Map and Locations */}
            <div>
              <div className="mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0456466876636!2d90.39518491498136!3d23.78101628457481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1625147280297!5m2!1sen!2sbd" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="10 Minute School Office Location"
                  className="rounded-lg shadow-sm"
                ></iframe>
              </div>

              <Card className="border border-gray-200">
                <CardBody className="p-6">
                  <h3 className="font-semibold text-lg mb-4">আমাদের সেন্টারসমূহ</h3>
                  <div className="space-y-4">
                    {locations.map((location, index) => (
                      <div key={index} className="flex items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <Icon icon="lucide:map-pin" className="text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-medium">{location.name}</h4>
                          <p className="text-sm text-gray-600">{location.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">সোশ্যাল মিডিয়াতে আমাদের ফলো করুন</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              সর্বশেষ আপডেট, টিপস এবং রিসোর্স পেতে আমাদের সোশ্যাল মিডিয়া চ্যানেলগুলো ফলো করুন
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="bg-gray-100 p-4 rounded-full hover:bg-gray-200">
              <Icon icon="logos:facebook" width={32} height={32} />
            </a>
            <a href="https://instagram.com" className="bg-gray-100 p-4 rounded-full hover:bg-gray-200">
              <Icon icon="logos:instagram-icon" width={32} height={32} />
            </a>
            <a href="https://linkedin.com" className="bg-gray-100 p-4 rounded-full hover:bg-gray-200">
              <Icon icon="logos:linkedin-icon" width={32} height={32} />
            </a>
            <a href="https://youtube.com" className="bg-gray-100 p-4 rounded-full hover:bg-gray-200">
              <Icon icon="logos:youtube-icon" width={32} height={32} />
            </a>
            <a href="https://tiktok.com" className="bg-gray-100 p-4 rounded-full hover:bg-gray-200">
              <Icon icon="logos:tiktok-icon" width={32} height={32} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">সাধারণ জিজ্ঞাসা</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              আমাদের সম্পর্কে সাধারণ জিজ্ঞাসার উত্তর
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <h3 className="font-semibold text-lg mb-2">১০ মিনিট স্কুলে কীভাবে রেজিস্ট্রেশন করব?</h3>
                <p className="text-gray-600">
                  আমাদের ওয়েবসাইটে গিয়ে "রেজিস্টার" বাটনে ক্লিক করে আপনার তথ্য দিয়ে সহজেই রেজিস্ট্রেশন করতে পারবেন।
                </p>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <h3 className="font-semibold text-lg mb-2">কোর্স ফি কীভাবে পরিশোধ করব?</h3>
                <p className="text-gray-600">
                  আপনি বিকাশ, নগদ, রকেট, কার্ড পেমেন্ট বা ব্যাংক ট্রান্সফারের মাধ্যমে কোর্স ফি পরিশোধ করতে পারবেন।
                </p>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <h3 className="font-semibold text-lg mb-2">কোর্স কি লাইফটাইম এক্সেস?</h3>
                <p className="text-gray-600">
                  হ্যাঁ, আমাদের বেশিরভাগ কোর্সে লাইফটাইম এক্সেস দেওয়া হয়। তবে কিছু স্পেশাল কোর্সের ক্ষেত্রে নির্দিষ্ট সময়সীমা থাকতে পারে।
                </p>
              </CardBody>
            </Card>

            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <h3 className="font-semibold text-lg mb-2">কীভাবে শিক্ষক হিসেবে যোগ দিতে পারি?</h3>
                <p className="text-gray-600">
                  আমাদের ওয়েবসাইটের "শিক্ষক হিসেবে যোগ দিন" পেজে গিয়ে আবেদন ফর্ম পূরণ করতে পারেন। আমাদের টিম আপনার সাথে যোগাযোগ করবে।
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};