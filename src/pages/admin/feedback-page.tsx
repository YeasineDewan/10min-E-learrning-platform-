import React from "react";
import { Button, Card, CardBody, Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AdminSidebar } from "../../components/admin/admin-sidebar";

export const AdminFeedbackPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedFilter, setSelectedFilter] = React.useState("all");
  
  // Sample feedback data
  const feedbacks = [
    {
      id: 1,
      name: "Rahim Ahmed",
      email: "rahim@example.com",
      subject: "Course Suggestion",
      message: "I would like to suggest a new course on mobile app development.",
      date: "2023-08-15",
      status: "unread"
    },
    {
      id: 2,
      name: "Fatima Khan",
      email: "fatima@example.com",
      subject: "Technical Issue",
      message: "I'm having trouble accessing the video lectures in the HSC Physics course.",
      date: "2023-08-12",
      status: "read"
    },
    {
      id: 3,
      name: "Karim Rahman",
      email: "karim@example.com",
      subject: "Payment Problem",
      message: "My payment was deducted but the course is not showing in my account.",
      date: "2023-08-10",
      status: "replied"
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      email: "nusrat@example.com",
      subject: "Appreciation",
      message: "I just wanted to thank you for the excellent English course. It has helped me a lot!",
      date: "2023-08-05",
      status: "read"
    },
    {
      id: 5,
      name: "Imran Hossain",
      email: "imran@example.com",
      subject: "Certificate Issue",
      message: "I completed the course but haven't received my certificate yet.",
      date: "2023-08-01",
      status: "unread"
    }
  ];

  // Filter feedbacks based on search query and selected filter
  const filteredFeedbacks = feedbacks.filter(feedback => {
    const matchesSearch = 
      feedback.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilter === "all") return matchesSearch;
    return matchesSearch && feedback.status === selectedFilter;
  });

  // Get status badge color
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "unread":
        return "bg-red-100 text-red-800";
      case "read":
        return "bg-yellow-100 text-yellow-800";
      case "replied":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Feedback Management</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Total Feedback</p>
                    <h3 className="text-2xl font-semibold">{feedbacks.length}</h3>
                  </div>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon icon="lucide:message-square" className="text-primary" width={24} height={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Unread</p>
                    <h3 className="text-2xl font-semibold">
                      {feedbacks.filter(f => f.status === "unread").length}
                    </h3>
                  </div>
                  <div className="bg-red-100 p-3 rounded-full">
                    <Icon icon="lucide:mail" className="text-red-600" width={24} height={24} />
                  </div>
                </div>
              </CardBody>
            </Card>
            
            <Card className="border border-gray-200">
              <CardBody className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Replied</p>
                    <h3 className="text-2xl font-semibold">
                      {feedbacks.filter(f => f.status === "replied").length}
                    </h3>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Icon icon="lucide:check-circle" className="text-green-600" width={24} height={24} />
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
                    placeholder="Search feedback..."
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
                        {selectedFilter === "all" ? "All Feedback" : 
                         selectedFilter === "unread" ? "Unread" : 
                         selectedFilter === "read" ? "Read" : "Replied"}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu 
                      aria-label="Filter options"
                      onAction={(key) => setSelectedFilter(key as string)}
                      selectedKeys={[selectedFilter]}
                      selectionMode="single"
                    >
                      <DropdownItem key="all">All Feedback</DropdownItem>
                      <DropdownItem key="unread">Unread</DropdownItem>
                      <DropdownItem key="read">Read</DropdownItem>
                      <DropdownItem key="replied">Replied</DropdownItem>
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

          {/* Feedback Table */}
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
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
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
                    {filteredFeedbacks.map((feedback) => (
                      <tr key={feedback.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {feedback.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {feedback.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {feedback.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {feedback.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(feedback.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            getStatusBadgeColor(feedback.status)
                          }`}>
                            {feedback.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex space-x-2">
                            <Button 
                              isIconOnly
                              variant="light" 
                              size="sm"
                              color="primary"
                              title="View"
                            >
                              <Icon icon="lucide:eye" />
                            </Button>
                            <Button 
                              isIconOnly
                              variant="light" 
                              size="sm"
                              color="primary"
                              title="Reply"
                            >
                              <Icon icon="lucide:reply" />
                            </Button>
                            <Button 
                              isIconOnly
                              variant="light" 
                              size="sm"
                              color="danger"
                              title="Delete"
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

              {filteredFeedbacks.length === 0 && (
                <div className="text-center py-8">
                  <Icon icon="lucide:search-x" className="mx-auto text-gray-400 mb-2" width={40} height={40} />
                  <p className="text-gray-500">No feedback found matching your search criteria.</p>
                </div>
              )}

              <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-500">
                  Showing {filteredFeedbacks.length} of {feedbacks.length} feedback
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