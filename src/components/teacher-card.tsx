import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Link } from "react-router-dom";

interface TeacherCardProps {
  id: string;
  name: string;
  title: string;
  image: string;
  link: string;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({
  id,
  name,
  title,
  image,
  link,
}) => {
  return (
    <Card className="overflow-hidden">
      <CardBody className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full aspect-[3/4] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold text-lg">{name}</h3>
            <p className="text-white/80 text-sm mb-3">{title}</p>
            <Button 
              as={Link}
              to={link}
              color="primary"
              size="sm"
              className="self-start"
            >
              কোর্স দেখুন
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};