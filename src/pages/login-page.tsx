import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, Input, Button, Checkbox } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useAuth } from "../contexts/AuthContext";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [error, setError] = React.useState("");
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("অনুগ্রহ করে সকল তথ্য পূরণ করুন");
      return;
    }

    const success = await login(email, password);
    if (success) {
      navigate("/");
    } else {
      setError("ইমেইল অথবা পাসওয়ার্ড ভুল");
    }
  };

  return (
    <section className="py-16 bg-gray-50 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="border-none shadow-md">
            <CardBody className="p-8">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold mb-2">লগইন করুন</h1>
                <p className="text-gray-600">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <Input
                    label="ইমেইল অথবা ফোন নম্বর"
                    placeholder="আপনার ইমেইল অথবা ফোন নম্বর লিখুন"
                    type="text"
                    value={email}
                    onValueChange={setEmail}
                    isRequired
                    isDisabled={isLoading}
                  />
                </div>

                <div>
                  <Input
                    label="পাসওয়ার্ড"
                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                    type="password"
                    value={password}
                    onValueChange={setPassword}
                    isRequired
                    isDisabled={isLoading}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Checkbox
                    isSelected={rememberMe}
                    onValueChange={setRememberMe}
                    isDisabled={isLoading}
                  >
                    <span className="text-sm">আমাকে মনে রাখুন</span>
                  </Checkbox>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    পাসওয়ার্ড ভুলে গেছেন?
                  </Link>
                </div>

                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  className="font-medium"
                  isLoading={isLoading}
                >
                  {isLoading ? "লগইন হচ্ছে..." : "লগইন করুন"}
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
                  <span className="text-gray-600">অ্যাকাউন্ট নেই?</span>{" "}
                  <Link to="/register" className="text-primary hover:underline font-medium">
                    রেজিস্টার করুন
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
