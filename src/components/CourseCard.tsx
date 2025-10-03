import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface CourseCardProps {
  title: string;
  description: string;
  price?: string;
  image?: string;
  isFree?: boolean;
  onEnroll?: () => void;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  price,
  image,
  isFree = false,
  onEnroll,
  className = "",
}) => {
  return (
    <Card className={`card-modern hover-lift transition-smooth ${className}`}>
      <CardBody className="p-6">
        {image && (
          <div className="mb-4 rounded-xl overflow-hidden shadow-soft">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
            />
          </div>
        )}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-secondary-900">{title}</h3>
          {price && (
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">
                {price}
              </div>
              {isFree && (
                <div className="text-sm text-success-600 font-medium">
                  Free
                </div>
              )}
            </div>
          )}
        </div>
        <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <Button
          color="primary"
          className="w-full btn-primary"
          onClick={onEnroll}
          size="lg"
        >
          <Icon icon="lucide:play" className="mr-2 w-4 h-4" />
          {isFree ? "Start Free" : "Enroll Now"}
        </Button>
      </CardBody>
    </Card>
  );
};
