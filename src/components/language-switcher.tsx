import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentLanguage, setCurrentLanguage] = React.useState<"en" | "bn">("en");
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleLanguage = (lang: "en" | "bn") => {
    setCurrentLanguage(lang);
    setIsOpen(false);
    // Here you would implement actual language change logic
  };

  return (
    <div className={`relative ${className}`} ref={menuRef}>
      <Button
        variant="light"
        className="flex items-center"
        onPress={() => setIsOpen(!isOpen)}
      >
        <Icon icon="lucide:globe" className="mr-1" size={16} />
        <span className="font-medium">{currentLanguage.toUpperCase()}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 overflow-hidden">
          <div className="py-1">
            <button
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLanguage === "bn" ? "bg-gray-50 font-medium" : ""
              }`}
              onClick={() => toggleLanguage("bn")}
            >
              বাংলা (Bangla)
            </button>
            <button
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                currentLanguage === "en" ? "bg-gray-50 font-medium" : ""
              }`}
              onClick={() => toggleLanguage("en")}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};