import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button } from "@heroui/react";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  instructorRating?: string;
  image: string;
  link: string;
  buttonText?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  instructorRating,
  image,
  link,
  buttonText = "বিস্তারিত",
}) => {
  return (
    <Card className="overflow-hidden h-full">
      <CardBody className="p-0 flex flex-col">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-video object-cover"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <div className="text-sm text-gray-600 mb-4 flex-grow">
            {instructor} {instructorRating && <span className="text-primary ml-1">+{instructorRating}</span>}
          </div>
          <Button 
            as={Link}
            to={link}
            color="primary"
            variant="flat"
            size="sm"
            className="self-start"
            endContent={<span>→</span>}
          >
            {buttonText}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};