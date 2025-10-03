import React from "react";
import { Button, Card, CardBody, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AdminLayout } from "../../components/admin/AdminLayout";

export const AdminDashboardPage: React.FC = () => {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-secondary-900">Dashboard</h1>
            <p className="text-secondary-600 mt-1">Welcome back! Here's what's happening with your platform.</p>
          </div>
          <Button
            color="primary"
            startContent={<Icon icon="lucide:plus" width={20} height={20} />}
            className="px-6 py-3 font-medium shadow-soft"
          >
            Add New Course
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-modern bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
            <CardBody className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-secondary-600 text-sm font-medium uppercase tracking-wider">Total Students</h3>
                  <div className="text-3xl font-bold text-primary-700 mt-2">1,234</div>
                  <p className="text-success-600 text-sm mt-1">+12% from last month</p>
                </div>
                <div className="bg-primary-100 p-3 rounded-xl">
                  <Icon icon="lucide:users" width={24} height={24} className="text-primary-600" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="card-modern bg-gradient-to-br from-success-50 to-success-100 border-success-200">
            <CardBody className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-secondary-600 text-sm font-medium uppercase tracking-wider">Active Courses</h3>
                  <div className="text-3xl font-bold text-success-700 mt-2">89</div>
                  <p className="text-success-600 text-sm mt-1">+5 new this week</p>
                </div>
                <div className="bg-success-100 p-3 rounded-xl">
                  <Icon icon="lucide:book-open" width={24} height={24} className="text-success-600" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="card-modern bg-gradient-to-br from-warning-50 to-warning-100 border-warning-200">
            <CardBody className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-secondary-600 text-sm font-medium uppercase tracking-wider">Revenue</h3>
                  <div className="text-3xl font-bold text-warning-700 mt-2">৳45,678</div>
                  <p className="text-success-600 text-sm mt-1">+8% from last month</p>
                </div>
                <div className="bg-warning-100 p-3 rounded-xl">
                  <Icon icon="lucide:dollar-sign" width={24} height={24} className="text-warning-600" />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card className="card-modern bg-gradient-to-br from-accent-50 to-accent-100 border-accent-200">
            <CardBody className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-secondary-600 text-sm font-medium uppercase tracking-wider">Teachers</h3>
                  <div className="text-3xl font-bold text-accent-700 mt-2">156</div>
                  <p className="text-success-600 text-sm mt-1">+3 new applications</p>
                </div>
                <div className="bg-accent-100 p-3 rounded-xl">
                  <Icon icon="lucide:graduation-cap" width={24} height={24} className="text-accent-600" />
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Course Management Section */}
        <Card className="card-modern">
          <CardBody className="p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-secondary-900">Course Management</h2>
                <p className="text-secondary-600 mt-1">Manage and monitor all your courses</p>
              </div>
              <div className="flex items-center space-x-4">
                <Input
                  placeholder="Search courses..."
                  startContent={<Icon icon="lucide:search" width={20} height={20} className="text-secondary-400" />}
                  className="w-80"
                  classNames={{
                    inputWrapper: "input-modern shadow-soft",
                  }}
                />
                <Button
                  variant="flat"
                  color="primary"
                  startContent={<Icon icon="lucide:filter" width={16} height={16} />}
                >
                  Filter
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-secondary-200">
                <thead className="bg-secondary-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">
                      Instructor
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">
                      Students
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-secondary-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-secondary-200">
                  <tr className="hover:bg-secondary-50 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <Icon icon="lucide:book-open" width={20} height={20} className="text-primary-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-secondary-900 text-wrap">HSC 27 Science Group</div>
                          <div className="text-sm text-secondary-500 text-wrap">Advanced Physics & Chemistry</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full text-wrap">
                        HSC
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary-900 font-medium text-wrap">
                      Aman Islam Siam
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary-900">
                      245
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-secondary-900">
                      ৳3000
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium bg-success-100 text-success-800 rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          className="text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
                        >
                          <Icon icon="lucide:eye" width={16} height={16} />
                        </Button>
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          className="text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
                        >
                          <Icon icon="lucide:edit" width={16} height={16} />
                        </Button>
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          className="text-secondary-600 hover:text-accent-600 hover:bg-accent-50"
                        >
                          <Icon icon="lucide:trash" width={16} height={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-secondary-50 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <Icon icon="lucide:book-open" width={20} height={20} className="text-success-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-secondary-900 text-wrap">SSC 2026 Science Group</div>
                          <div className="text-sm text-secondary-500 text-wrap">Complete Science Curriculum</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium bg-success-100 text-success-800 rounded-full text-wrap">
                        SSC
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary-900 font-medium text-wrap">
                      Faiza Tasnim
                    </td>
                    <td className="px-6 py-4 text-sm text-secondary-900">
                      189
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-secondary-900">
                      ৳2750
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-medium bg-success-100 text-success-800 rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          className="text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
                        >
                          <Icon icon="lucide:eye" width={16} height={16} />
                        </Button>
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          className="text-secondary-600 hover:text-primary-600 hover:bg-primary-50"
                        >
                          <Icon icon="lucide:edit" width={16} height={16} />
                        </Button>
                        <Button
                          isIconOnly
                          variant="light"
                          size="sm"
                          className="text-secondary-600 hover:text-accent-600 hover:bg-accent-50"
                        >
                          <Icon icon="lucide:trash" width={16} height={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-8">
              <div className="text-sm text-secondary-600">
                Showing 1 to 2 of 89 courses
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="flat"
                  size="sm"
                  isDisabled
                  className="text-secondary-600"
                >
                  Previous
                </Button>
                <Button
                  variant="flat"
                  size="sm"
                  color="primary"
                  className="bg-primary-50 text-primary-700"
                >
                  1
                </Button>
                <Button
                  variant="flat"
                  size="sm"
                  className="text-secondary-600 hover:bg-secondary-100"
                >
                  2
                </Button>
                <Button
                  variant="flat"
                  size="sm"
                  className="text-secondary-600 hover:bg-secondary-100"
                >
                  3
                </Button>
                <Button
                  variant="flat"
                  size="sm"
                  className="text-secondary-600"
                >
                  Next
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </AdminLayout>
  );
};
