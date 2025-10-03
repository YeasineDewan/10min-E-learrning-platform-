import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";

interface CourseCategoryProps {
  title: string;
  subtitle: string;
  bgColor: string;
  courses: {
    id: string;
    title: string;
    icon: string;
    link: string;
  }[];
  ctaText: string;
  ctaLink: string;
}

export const CourseCategory: React.FC<CourseCategoryProps> = ({
  title,
  subtitle,
  bgColor,
  courses,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className={`${bgColor} p-6 md:p-10 rounded-xl`}>
      <div className="text-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white/80">{subtitle}</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {courses.map((course) => (
          <Link key={course.id} to={course.link} className="block">
            <Card className="bg-white/10 hover:bg-white/20 transition-all border-none h-full">
              <CardBody className="flex flex-col items-center justify-center text-center p-4">
                <Icon icon={course.icon} className="text-white mb-3" width={40} height={40} />
                <h3 className="text-white text-sm font-medium">{course.title}</h3>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button 
          as={Link} 
          to={ctaLink} 
          color="primary" 
          variant="flat" 
          endContent={<Icon icon="lucide:arrow-right" />}
          className="font-medium"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};