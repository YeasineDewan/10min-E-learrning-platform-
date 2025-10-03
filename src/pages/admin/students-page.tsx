import React from "react";
import { Button, Card, CardBody, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AdminSidebar } from "../../components/admin/admin-sidebar";

export const AdminStudentsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedFilter, setSelectedFilter] = React.useState("all");
  
  // Sample student data
  const students = [
    {
      id: 1,
      name: "Rahim Ahmed",
      email: "rahim@example.com",
      phone: "+8801712345678",
      enrolledCourses: 3,
      joinDate: "2023-05-15",
      status: "active"
    },
    {
      id: 2,
      name: "Fatima Khan",
      email: "fatima@example.com",
      phone: "+8801812345678",
      enrolledCourses: 2,
      joinDate: "2023-06-20",
      status: "active"
    },
    {
      id: 3,
      name: "Karim Rahman",
      email: "karim@example.com",
      phone: "+8801912345678",
      enrolledCourses: 1,
      joinDate: "2023-07-10",
      status: "inactive"
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      email: "nusrat@example.com",
      phone: "+8801612345678",
      enrolledCourses: 4,
      joinDate: "2023-04-05",
      status: "active"
    },
    {
      id: 5,
      name: "Imran Hossain",
      email: "imran@example.com",
      phone: "+8801512345678",
      enrolledCourses: 2,
      joinDate: "2023-08-12",
      status: "active"
    }
  ];

  // Filter students based on search query and selected filter
  const filteredStudents = students.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.phone.includes(searchQuery);
    
    if (selectedFilter === "all") return matchesSearch;
    return matchesSearch && student.status === selectedFilter;
  });

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Student Management</h1>
            <Button 
              color="primary"
              startContent={<Icon icon="lucide:plus" />}
            >
              Add New Student
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Total Students</p>
                    <h3 className="text-2xl font-semibold">{students.length}</h3>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon icon="lucide:users" className="text-primary" width={24} height={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Active Students</p>
                    <h3 className="text-2xl font-semibold">
                      {students.filter(s => s.status === "active").length}
                    </h3>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Icon icon="lucide:user-check" className="text-green-600" width={24} height={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Inactive Students</p>
                    <h3 className="text-2xl font-semibold">
                      {students.filter(s => s.status === "inactive").length}
                    </h3>
                  </div>
                  <div className="bg-red-100 p-3 rounded-full">
                    <Icon icon="lucide:user-x" className="text-red-600" width={24} height={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">New This Month</p>
                    <h3 className="text-2xl font-semibold">
                      {students.filter(s => {
                        const joinDate = new Date(s.joinDate);
                        const now = new Date();
                        return joinDate.getMonth() === now.getMonth() && 
                               joinDate.getFullYear() === now.getFullYear();
                      }).length}
                    </h3>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Icon icon="lucide:user-plus" className="text-blue-600" width={24} height={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Search and Filter */}
          <Card className="border border-gray-200 mb-6">
            <CardBody className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="w-full md:w-1/3">
                  <Input
                    placeholder="Search students..."
                    value={searchQuery}
                    onValueChange={setSearchQuery}
                    startContent={<Icon icon="lucide:search" className="text-gray-400" />}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Filter:</span>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button 
                        variant="bordered"
                        endContent={<Icon icon="lucide:chevron-down" size={16} />}
                      >
                        {selectedFilter === "all" ? "All Students" : 
                         selectedFilter === "active" ? "Active Students" : "Inactive Students"}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                      aria-label="Filter options"
                      onAction={(key) => setSelectedFilter(key as string)}
                      selectedKeys={[selectedFilter]}
                      selectionMode="single"
                    >
                      <DropdownItem key="all">All Students</DropdownItem>
                      <DropdownItem key="active">Active Students</DropdownItem>
                      <DropdownItem key="inactive">Inactive Students</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                  <Button 
                    variant="flat" 
                    color="primary"
                    onPress={() => {
                      setSearchQuery("");
                      setSelectedFilter("all");
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Students Table */}
          <Card className="border border-gray-200">
            <CardBody className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Courses
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Join Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredStudents.map((student) => (
                      <tr key={student.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                              <span className="text-gray-600 font-medium">
                                {student.name.charAt(0)}
                              </span>
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {student.name}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {student.enrolledCourses}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(student.joinDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button 
                              isIconOnly
                              variant="light" 
                              size="sm"
                              color="primary"
                            >
                              <Icon icon="lucide:eye" />
                            </Button>
                            <Button 
                              isIconOnly
                              variant="light" 
                              size="sm"
                              color="primary"
                            >
                              <Icon icon="lucide:edit" />
                            </Button>
                            <Button 
                              isIconOnly
                              variant="light" 
                              size="sm"
                              color="danger"
                            >
                              <Icon icon="lucide:trash" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredStudents.length === 0 && (
                <div className="text-center py-8">
                  <Icon icon="lucide:search-x" className="mx-auto text-gray-400 mb-2" width={40} height={40} />
                  <p className="text-gray-500">No students found matching your search criteria.</p>
                </div>
              )}

              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-500">
                  Showing {filteredStudents.length} of {students.length} students
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant="flat" 
                    size="sm"
                    isDisabled
                  >
                    Previous
                  </Button>
                  <Button 
                    variant="flat" 
                    size="sm"
                    color="primary"
                  >
                    1
                  </Button>
                  <Button 
                    variant="flat" 
                    size="sm"
                    isDisabled
                  >
                    Next
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};