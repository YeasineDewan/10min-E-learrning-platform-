import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

export const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = React.useState<Record<string, boolean>>({
    website: true,
    education: true,
  });

  const toggleMenu = (menu: string) => {
    setExpandedMenus({
      ...expandedMenus,
      [menu]: !expandedMenus[menu]
    });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-secondary-900 text-white flex flex-col shadow-large">
      {/* Profile Section */}
      <div className="p-6 border-b border-secondary-800">
        <div className="flex items-center">
          <img
            src="https://img.heroui.chat/image/avatar?w=40&h=40&u=admin"
            alt="Admin"
            className="w-10 h-10 rounded-full mr-3 ring-2 ring-primary-500"
          />
          <div>
            <div className="font-semibold text-lg">Admin</div>
            <div className="text-sm text-secondary-400">admin@gmail.com</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 space-y-2">
        {/* Dashboard */}
        <Link
          to="/admin/dashboard"
          className={`px-6 py-3 flex items-center rounded-xl transition-all duration-200 ${
            isActive('/admin/dashboard')
              ? 'bg-primary-600 text-white shadow-medium'
              : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
          }`}
        >
          <Icon icon="lucide:layout-dashboard" className="mr-3 w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </Link>

        {/* Content Management */}
        <Link
          to="/admin/content"
          className={`px-6 py-3 flex items-center rounded-xl transition-all duration-200 ${
            isActive('/admin/content')
              ? 'bg-primary-600 text-white shadow-medium'
              : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
          }`}
        >
          <Icon icon="lucide:file-text" className="mr-3 w-5 h-5" />
          <span className="font-medium">Content Management</span>
        </Link>

        {/* Website Settings */}
        <Link
          to="/admin/settings"
          className={`px-6 py-3 flex items-center rounded-xl transition-all duration-200 ${
            isActive('/admin/settings')
              ? 'bg-primary-600 text-white shadow-medium'
              : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
          }`}
        >
          <Icon icon="lucide:settings" className="mr-3 w-5 h-5" />
          <span className="font-medium">Website Settings</span>
        </Link>

        {/* Education Management Section */}
        <div className="px-6 py-3">
          <div className="text-xs uppercase text-secondary-400 font-semibold tracking-wider mb-3">
            Education Management
          </div>

          <Link
            to="/admin/courses"
            className={`px-6 py-3 flex items-center rounded-xl transition-all duration-200 w-full ${
              isActive('/admin/courses')
                ? 'bg-primary-600 text-white shadow-medium'
                : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
            }`}
          >
            <Icon icon="lucide:book-open" className="mr-3 w-5 h-5" />
            <span className="font-medium">Courses</span>
          </Link>

          <Link
            to="/admin/students"
            className={`px-6 py-3 flex items-center rounded-xl transition-all duration-200 w-full ${
              isActive('/admin/students')
                ? 'bg-primary-600 text-white shadow-medium'
                : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
            }`}
          >
            <Icon icon="lucide:users" className="mr-3 w-5 h-5" />
            <span className="font-medium">Students</span>
          </Link>

          <Link
            to="/admin/teachers"
            className={`px-6 py-3 flex items-center rounded-xl transition-all duration-200 w-full ${
              isActive('/admin/teachers')
                ? 'bg-primary-600 text-white shadow-medium'
                : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
            }`}
          >
            <Icon icon="lucide:graduation-cap" className="mr-3 w-5 h-5" />
            <span className="font-medium">Teachers</span>
          </Link>

          <Link
            to="/admin/notifications"
            className={`px-6 py-3 flex items-center rounded-xl transition-all duration-200 w-full ${
              isActive('/admin/notifications')
                ? 'bg-primary-600 text-white shadow-medium'
                : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
            }`}
          >
            <Icon icon="lucide:bell" className="mr-3 w-5 h-5" />
            <span className="font-medium">Notifications</span>
          </Link>
        </div>

        {/* Website Setup Section */}
        <div>
          <button
            className="w-full px-6 py-3 flex items-center justify-between rounded-xl text-secondary-300 hover:bg-secondary-800 hover:text-white transition-all duration-200"
            onClick={() => toggleMenu('website')}
          >
            <div className="flex items-center">
              <Icon icon="lucide:globe" className="mr-3 w-5 h-5" />
              <span className="font-medium">Website Setup</span>
            </div>
            <Icon
              icon={expandedMenus.website ? "lucide:chevron-down" : "lucide:chevron-right"}
              className="w-4 h-4 transition-transform duration-200"
            />
          </button>

          {expandedMenus.website && (
            <div className="bg-secondary-800 space-y-1 px-3 py-2">
              <Link
                to="/admin/pages"
                className={`pl-10 pr-6 py-2 flex items-center rounded-lg text-sm transition-all duration-200 ${
                  isActive('/admin/pages')
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
                }`}
              >
                Pages
              </Link>
              <Link
                to="/admin/menus"
                className={`pl-10 pr-6 py-2 flex items-center rounded-lg text-sm transition-all duration-200 ${
                  isActive('/admin/menus')
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
                }`}
              >
                Menus
              </Link>
              <Link
                to="/admin/sliders"
                className={`pl-10 pr-6 py-2 flex items-center rounded-lg text-sm transition-all duration-200 ${
                  isActive('/admin/sliders')
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
                }`}
              >
                Sliders
              </Link>
              <Link
                to="/admin/testimonials"
                className={`pl-10 pr-6 py-2 flex items-center rounded-lg text-sm transition-all duration-200 ${
                  isActive('/admin/testimonials')
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
                }`}
              >
                Testimonials
              </Link>
            </div>
          )}
        </div>

        {/* Education Management Section */}
        <div>
          <button
            className="w-full px-6 py-3 flex items-center justify-between rounded-xl text-secondary-300 hover:bg-secondary-800 hover:text-white transition-all duration-200"
            onClick={() => toggleMenu('education')}
          >
            <div className="flex items-center">
              <Icon icon="lucide:book-open" className="mr-3 w-5 h-5" />
              <span className="font-medium">Education Management</span>
            </div>
            <Icon
              icon={expandedMenus.education ? "lucide:chevron-down" : "lucide:chevron-right"}
              className="w-4 h-4 transition-transform duration-200"
            />
          </button>

          {expandedMenus.education && (
            <div className="bg-secondary-800 space-y-1 px-3 py-2">
              <Link
                to="/admin/batches"
                className={`pl-10 pr-6 py-2 flex items-center rounded-lg text-sm transition-all duration-200 ${
                  isActive('/admin/batches')
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
                }`}
              >
                Batches
              </Link>
              <Link
                to="/admin/exams"
                className={`pl-10 pr-6 py-2 flex items-center rounded-lg text-sm transition-all duration-200 ${
                  isActive('/admin/exams')
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
                }`}
              >
                Exams
              </Link>
              <Link
                to="/admin/grades"
                className={`pl-10 pr-6 py-2 flex items-center rounded-lg text-sm transition-all duration-200 ${
                  isActive('/admin/grades')
                    ? 'bg-primary-600 text-white'
                    : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
                }`}
              >
                Grades
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-secondary-800">
        <Link
          to="/"
          className="flex items-center text-secondary-300 hover:text-white transition-colors duration-200"
        >
          <Icon icon="lucide:external-link" className="mr-2 w-4 h-4" />
          <span className="text-sm font-medium">View Website</span>
        </Link>
      </div>
    </div>
  );
};
