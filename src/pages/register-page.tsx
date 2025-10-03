import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, Input, Button, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../contexts/AuthContext";

export const RegisterPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [agreeTerms, setAgreeTerms] = React.useState(false);
  const [error, setError] = React.useState("");
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !phone || !password || !confirmPassword) {
      setError("অনুগ্রহ করে সকল তথ্য পূরণ করুন");
      return;
    }

    if (password !== confirmPassword) {
      setError("পাসওয়ার্ড মিলছে না");
      return;
    }

    if (password.length < 6) {
      setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে");
      return;
    }

    if (!agreeTerms) {
      setError("অনুগ্রহ করে শর্তাবলী এবং গোপনীয়তা নীতি মেনে নিন");
      return;
    }

    const success = await register({ name, email, phone, password });
    if (success) {
      navigate("/");
    } else {
      setError("রেজিস্ট্রেশন ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন");
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="border-none shadow-md">
            <CardBody className="p-8">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold mb-2">রেজিস্টার করুন</h1>
                <p className="text-gray-600">নতুন অ্যাকাউন্ট তৈরি করুন</p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              <form onSubmit={handleRegister} className="space-y-6">
                <div>
                  <Input
                    label="পূর্ণ নাম"
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    type="text"
                    value={name}
                    onValueChange={setName}
                    isRequired
                    isDisabled={isLoading}
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
                    isDisabled={isLoading}
                  />
                </div>

                <div>
                  <Input
                    label="ফোন নম্বর"
                    placeholder="আপনার ফোন নম্বর লিখুন"
                    type="tel"
                    value={phone}
                    onValueChange={setPhone}
                    isRequired
                    isDisabled={isLoading}
                  />
                </div>

                <div>
                  <Input
                    label="পাসওয়ার্ড"
                    placeholder="পাসওয়ার্ড লিখুন"
                    type="password"
                    value={password}
                    onValueChange={setPassword}
                    isRequired
                    isDisabled={isLoading}
                  />
                </div>

                <div>
                  <Input
                    label="পাসওয়ার্ড নিশ্চিত করুন"
                    placeholder="পাসওয়ার্ড আবার লিখুন"
                    type="password"
                    value={confirmPassword}
                    onValueChange={setConfirmPassword}
                    isRequired
                    isDisabled={isLoading}
                  />
                </div>

                <div>
                  <Checkbox
                    isSelected={agreeTerms}
                    onValueChange={setAgreeTerms}
                    isRequired
                    isDisabled={isLoading}
                  >
                    <span className="text-sm">
                      আমি <Link to="/terms" className="text-primary hover:underline">শর্তাবলী</Link> এবং{" "}
                      <Link to="/privacy" className="text-primary hover:underline">গোপনীয়তা নীতি</Link> পড়েছি এবং সম্মত আছি
                    </span>
                  </Checkbox>
                </div>

                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  className="font-medium"
                  isLoading={isLoading}
                >
                  {isLoading ? "রেজিস্টার হচ্ছে..." : "রেজিস্টার করুন"}
                </Button>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-gray-200 w-full"></div>
                  <div className="bg-white px-4 text-sm text-gray-500 absolute">অথবা</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="bordered"
                    startContent={<Icon icon="logos:google-icon" />}
                    className="font-medium"
                    isDisabled={isLoading}
                  >
                    Google
                  </Button>
                  <Button
                    variant="bordered"
                    startContent={<Icon icon="logos:facebook" />}
                    className="font-medium"
                    isDisabled={isLoading}
                  >
                    Facebook
                  </Button>
                </div>

                <div className="text-center text-sm">
                  <span className="text-gray-600">ইতিমধ্যে অ্যাকাউন্ট আছে?</span>{" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    লগইন করুন
                  </Link>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
