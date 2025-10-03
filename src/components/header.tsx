import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Logo } from "./logo";
import { useAuth } from "../contexts/AuthContext";

export const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-medium border-b border-secondary-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block flex-grow max-w-md mx-6">
            <Input
              classNames={{
                base: "max-w-full",
                inputWrapper: "input-modern shadow-soft",
              }}
              placeholder="কোর্স কোড, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              startContent={<Icon icon="lucide:search" width={20} height={20} className="text-secondary-400" />}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  endContent={<Icon icon="lucide:chevron-down" width={16} height={16} />}
                  className="font-medium text-secondary-700 hover:bg-secondary-100"
                >
                  Class 6-12
                </Button>
              </DropdownTrigger>
              <DropdownMenu classNames={{ base: "py-2 px-4 bg-white shadow-medium rounded-xl border border-secondary-200 w-48" }}>
                <DropdownItem key="class-6" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/courses/class-6">Class 6</Link>
                </DropdownItem>
                <DropdownItem key="class-7" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/courses/class-7">Class 7</Link>
                </DropdownItem>
                <DropdownItem key="class-8" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/courses/class-8">Class 8</Link>
                </DropdownItem>
                <DropdownItem key="class-9" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/courses/class-9">Class 9</Link>
                </DropdownItem>
                <DropdownItem key="class-10" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/courses/class-10">Class 10</Link>
                </DropdownItem>
                <DropdownItem key="class-11" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/courses/class-11">Class 11</Link>
                </DropdownItem>
                <DropdownItem key="class-12" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/courses/class-12">Class 12</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  endContent={<Icon icon="lucide:chevron-down" width={16} height={16} />}
                  className="font-medium text-secondary-700 hover:bg-secondary-100"
                >
                  Skills
                </Button>
              </DropdownTrigger>
              <DropdownMenu classNames={{ base: "py-2 px-4 bg-white shadow-medium rounded-xl border border-secondary-200 w-48" }}>
                <DropdownItem key="design" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/skills/design">Design & Art</Link>
                </DropdownItem>
                <DropdownItem key="development" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/skills/development">Development</Link>
                </DropdownItem>
                <DropdownItem key="business" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/skills/business">Business</Link>
                </DropdownItem>
                <DropdownItem key="language" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/skills/language">Language</Link>
                </DropdownItem>
                <DropdownItem key="career" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/skills/career">Career</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Button as={Link} to="/admission" variant="light" className="font-medium text-secondary-700 hover:bg-secondary-100">
              Admission
            </Button>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  endContent={<Icon icon="lucide:chevron-down" width={16} height={16} />}
                  className="font-medium text-secondary-700 hover:bg-secondary-100"
                >
                  Online Batch
                </Button>
              </DropdownTrigger>
              <DropdownMenu classNames={{ base: "py-2 px-4 bg-white shadow-medium rounded-xl border border-secondary-200 w-48" }}>
                <DropdownItem key="hsc" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/batch/hsc">HSC</Link>
                </DropdownItem>
                <DropdownItem key="ssc" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/batch/ssc">SSC</Link>
                </DropdownItem>
                <DropdownItem key="skills" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/batch/skills">Skills</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  endContent={<Icon icon="lucide:chevron-down" width={16} height={16} />}
                  className="font-medium text-secondary-700 hover:bg-secondary-100"
                >
                  English Centre
                </Button>
              </DropdownTrigger>
              <DropdownMenu classNames={{ base: "py-2 px-4 bg-white shadow-medium rounded-xl border border-secondary-200 w-48" }}>
                <DropdownItem key="spoken" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/english/spoken">Spoken English</Link>
                </DropdownItem>
                <DropdownItem key="ielts" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/english/ielts">IELTS</Link>
                </DropdownItem>
                <DropdownItem key="kids" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/english/kids">Kids' English</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  endContent={<Icon icon="lucide:chevron-down" width={16} height={16} />}
                  className="font-medium text-secondary-700 hover:bg-secondary-100"
                >
                  More
                </Button>
              </DropdownTrigger>
              <DropdownMenu classNames={{ base: "py-2 px-4 bg-white shadow-medium rounded-xl border border-secondary-200 w-48" }}>
                <DropdownItem key="blog" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/blog">Blog</Link>
                </DropdownItem>
                <DropdownItem key="about" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/about">About Us</Link>
                </DropdownItem>
                <DropdownItem key="contact" className="py-2 hover:bg-secondary-50 rounded-lg">
                  <Link to="/contact">Contact</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </nav>

          {/* Language and Contact */}
          <div className="flex items-center space-x-3">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="light" className="hidden md:flex font-medium text-secondary-700 hover:bg-secondary-100">
                  <span>বাং</span>
                </Button>
              </DropdownTrigger>
              <DropdownMenu classNames={{ base: "py-2 px-4 bg-white shadow-medium rounded-xl border border-secondary-200 w-32" }}>
                <DropdownItem key="bangla" className="py-2 hover:bg-secondary-50 rounded-lg">বাংলা</DropdownItem>
                <DropdownItem key="english" className="py-2 hover:bg-secondary-50 rounded-lg">English</DropdownItem>
              </DropdownMenu>
            </Dropdown>

            <Button variant="light" className="hidden md:flex items-center font-medium text-secondary-700 hover:bg-secondary-100">
              <Icon icon="lucide:phone" width={16} height={16} className="mr-1 text-primary-600" />
              <span className="text-primary-600">16910</span>
            </Button>

            {user ? (
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="light" className="font-medium text-secondary-700 hover:bg-secondary-100">
                    <Icon icon="lucide:user" width={16} height={16} className="mr-1" />
                    {user.name}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu classNames={{ base: "py-2 px-4 bg-white shadow-medium rounded-xl border border-secondary-200 w-48" }}>
                  <DropdownItem key="profile" className="py-2 hover:bg-secondary-50 rounded-lg">
                    <Link to="/profile">প্রোফাইল</Link>
                  </DropdownItem>
                  <DropdownItem key="settings" className="py-2 hover:bg-secondary-50 rounded-lg">
                    <Link to="/settings">সেটিংস</Link>
                  </DropdownItem>
                  <DropdownItem key="logout" className="py-2 hover:bg-secondary-50 rounded-lg" onClick={logout}>
                    লগআউট
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Button as={Link} to="/login" color="primary" className="font-medium px-6 py-2 rounded-lg shadow-soft">
                লগ-ইন
              </Button>
            )}

            {/* Mobile menu button */}
            <Button isIconOnly variant="light" className="lg:hidden text-secondary-700 hover:bg-secondary-100">
              <Icon icon="lucide:menu" width={20} height={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
