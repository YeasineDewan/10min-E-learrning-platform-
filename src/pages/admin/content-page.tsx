import React from "react";
import { Button, Card, CardBody, Input, Tabs, Tab, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AdminSidebar } from "../../components/admin/admin-sidebar";

export const AdminContentPage: React.FC = () => {
  const [selected, setSelected] = React.useState("blog");
  const [editor, setEditor] = React.useState({
    title: "",
    content: "",
    isEditing: false,
    currentId: null
  });

  // Sample blog posts for demonstration
  const [blogPosts, setBlogPosts] = React.useState([
    {
      id: 1,
      title: "HSC পরীক্ষার প্রস্তুতি: সময় ব্যবস্থাপনা টিপস",
      excerpt: "HSC পরীক্ষার জন্য সঠিক সময় ব্যবস্থাপনা কীভাবে করবেন তা জানুন।",
      content: "HSC পরীক্ষার জন্য সঠিক সময় ব্যবস্থাপনা কীভাবে করবেন তা জানুন। সময়ের সর্বোত্তম ব্যবহার করে কীভাবে ভালো ফলাফল পাবেন তার টিপস।",
      category: "Study Tips",
      author: "Aman Islam Siam",
      date: "June 15, 2023",
      status: "published"
    },
    {
      id: 2,
      title: "ইংরেজি ভাষা শেখার ১০টি অনলাইন রিসোর্স",
      excerpt: "ইংরেজি ভাষা শেখার জন্য সেরা ১০টি অনলাইন রিসোর্স সম্পর্কে জানুন।",
      content: "ইংরেজি ভাষা শেখার জন্য সেরা ১০টি অনলাইন রিসোর্স সম্পর্কে জানুন। এই রিসোর্সগুলো ব্যবহার করে আপনি ঘরে বসেই ইংরেজি ভাষায় দক্ষতা অর্জন করতে পারবেন।",
      category: "Language Learning",
      author: "Munzereen Shahid",
      date: "May 28, 2023",
      status: "published"
    }
  ]);

  // Sample pages content for demonstration
  const [pages, setPages] = React.useState({
    about: {
      title: "আমাদের সম্পর্কে",
      content: "১০ মিনিট স্কুল বাংলাদেশের সবচেয়ে বড় অনলাইন শিক্ষা প্লাটফর্ম, যেখানে লাখ লাখ শিক্ষার্থী দেশের সেরা শিক্ষকদের সাথে পড়াশোনা করছে।"
    },
    contact: {
      title: "যোগাযোগ করুন",
      content: "আমাদের সাথে যোগাযোগ করুন। আমরা আপনার যেকোনো প্রশ্নের উত্তর দিতে সর্বদা প্রস্তুত।"
    },
    terms: {
      title: "শর্তাবলী",
      content: "১০ মিনিট স্কুল ব্যবহারের শর্তাবলী"
    },
    privacy: {
      title: "গোপনীয়তা নীতি",
      content: "১০ মিনিট স্কুল আপনার গোপনীয়তাকে সম্মান করে এবং আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ"
    }
  });

  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editor.isEditing && editor.currentId) {
      // Update existing post
      setBlogPosts(blogPosts.map(post => 
        post.id === editor.currentId 
          ? { 
              ...post, 
              title: editor.title, 
              content: editor.content,
              excerpt: editor.content.substring(0, 100) + "..."
            } 
          : post
      ));
    } else {
      // Add new post
      const newPost = {
        id: blogPosts.length + 1,
        title: editor.title,
        content: editor.content,
        excerpt: editor.content.substring(0, 100) + "...",
        category: "General",
        author: "Admin",
        date: new Date().toLocaleDateString(),
        status: "draft"
      };
      setBlogPosts([...blogPosts, newPost]);
    }
    
    // Reset editor
    setEditor({
      title: "",
      content: "",
      isEditing: false,
      currentId: null
    });
  };

  const handlePageSubmit = (pageKey: string) => {
    // Update page content
    setPages({
      ...pages,
      [pageKey]: {
        ...pages[pageKey as keyof typeof pages],
        title: editor.title,
        content: editor.content
      }
    });
    
    // Reset editor
    setEditor({
      title: "",
      content: "",
      isEditing: false,
      currentId: null
    });
  };

  const editBlogPost = (post: any) => {
    setEditor({
      title: post.title,
      content: post.content,
      isEditing: true,
      currentId: post.id
    });
  };

  const editPage = (pageKey: string) => {
    const page = pages[pageKey as keyof typeof pages];
    setEditor({
      title: page.title,
      content: page.content,
      isEditing: true,
      currentId: null
    });
  };

  const deleteBlogPost = (id: number) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Content Management</h1>
          </div>

          <Tabs 
            aria-label="Content Management" 
            selectedKey={selected} 
            onSelectionChange={setSelected as any}
          >
            <Tab key="blog" title="Blog Posts">
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Blog Post List */}
                <div className="lg:col-span-2">
                  <Card className="border border-gray-200">
                    <CardBody className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Blog Posts</h2>
                        <Button 
                          color="primary"
                          startContent={<Icon icon="lucide:plus" />}
                          onPress={() => setEditor({
                            title: "",
                            content: "",
                            isEditing: false,
                            currentId: null
                          })}
                        >
                          Add New Post
                        </Button>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Author
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {blogPosts.map((post) => (
                              <tr key={post.id}>
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {post.title}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {post.author}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {post.date}
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {post.status}
                                  </span>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="flex space-x-2">
                                    <Button 
                                      isIconOnly
                                      variant="light" 
                                      size="sm"
                                      color="primary"
                                      onPress={() => editBlogPost(post)}
                                    >
                                      <Icon icon="lucide:edit" />
                                    </Button>
                                    <Button 
                                      isIconOnly
                                      variant="light" 
                                      size="sm"
                                      color="danger"
                                      onPress={() => deleteBlogPost(post.id)}
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
                    </CardBody>
                  </Card>
                </div>

                {/* Blog Post Editor */}
                <div>
                  <Card className="border border-gray-200">
                    <CardBody className="p-6">
                      <h2 className="text-xl font-semibold mb-4">
                        {editor.isEditing ? "Edit Post" : "Add New Post"}
                      </h2>
                      <form onSubmit={handleBlogSubmit} className="space-y-4">
                        <div>
                          <Input
                            label="Title"
                            placeholder="Enter post title"
                            value={editor.title}
                            onValueChange={(value) => setEditor({...editor, title: value})}
                            isRequired
                          />
                        </div>
                        <div>
                          <Textarea
                            label="Content"
                            placeholder="Enter post content"
                            value={editor.content}
                            onValueChange={(value) => setEditor({...editor, content: value})}
                            minRows={10}
                            isRequired
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button 
                            type="button" 
                            variant="flat"
                            onPress={() => setEditor({
                              title: "",
                              content: "",
                              isEditing: false,
                              currentId: null
                            })}
                          >
                            Cancel
                          </Button>
                          <Button 
                            type="submit" 
                            color="primary"
                          >
                            {editor.isEditing ? "Update" : "Publish"}
                          </Button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Tab>

            <Tab key="about" title="About Page">
              <div className="mt-6">
                <Card className="border border-gray-200">
                  <CardBody className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">About Page Content</h2>
                      <Button 
                        color="primary"
                        startContent={<Icon icon="lucide:edit" />}
                        onPress={() => editPage('about')}
                      >
                        Edit Content
                      </Button>
                    </div>
                    <div className="prose max-w-none">
                      <h3 className="text-lg font-semibold">{pages.about.title}</h3>
                      <p>{pages.about.content}</p>
                    </div>

                    {editor.isEditing && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Edit About Page</h3>
                        <div className="space-y-4">
                          <div>
                            <Input
                              label="Title"
                              placeholder="Enter page title"
                              value={editor.title}
                              onValueChange={(value) => setEditor({...editor, title: value})}
                              isRequired
                            />
                          </div>
                          <div>
                            <Textarea
                              label="Content"
                              placeholder="Enter page content"
                              value={editor.content}
                              onValueChange={(value) => setEditor({...editor, content: value})}
                              minRows={6}
                              isRequired
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="flat"
                              onPress={() => setEditor({
                                title: "",
                                content: "",
                                isEditing: false,
                                currentId: null
                              })}
                            >
                              Cancel
                            </Button>
                            <Button 
                              color="primary"
                              onPress={() => handlePageSubmit('about')}
                            >
                              Update
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </div>
            </Tab>

            <Tab key="contact" title="Contact Page">
              <div className="mt-6">
                <Card className="border border-gray-200">
                  <CardBody className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Contact Page Content</h2>
                      <Button 
                        color="primary"
                        startContent={<Icon icon="lucide:edit" />}
                        onPress={() => editPage('contact')}
                      >
                        Edit Content
                      </Button>
                    </div>
                    <div className="prose max-w-none">
                      <h3 className="text-lg font-semibold">{pages.contact.title}</h3>
                      <p>{pages.contact.content}</p>
                    </div>

                    {editor.isEditing && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Edit Contact Page</h3>
                        <div className="space-y-4">
                          <div>
                            <Input
                              label="Title"
                              placeholder="Enter page title"
                              value={editor.title}
                              onValueChange={(value) => setEditor({...editor, title: value})}
                              isRequired
                            />
                          </div>
                          <div>
                            <Textarea
                              label="Content"
                              placeholder="Enter page content"
                              value={editor.content}
                              onValueChange={(value) => setEditor({...editor, content: value})}
                              minRows={6}
                              isRequired
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="flat"
                              onPress={() => setEditor({
                                title: "",
                                content: "",
                                isEditing: false,
                                currentId: null
                              })}
                            >
                              Cancel
                            </Button>
                            <Button 
                              color="primary"
                              onPress={() => handlePageSubmit('contact')}
                            >
                              Update
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </div>
            </Tab>

            <Tab key="terms" title="Terms & Conditions">
              <div className="mt-6">
                <Card className="border border-gray-200">
                  <CardBody className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Terms & Conditions Content</h2>
                      <Button 
                        color="primary"
                        startContent={<Icon icon="lucide:edit" />}
                        onPress={() => editPage('terms')}
                      >
                        Edit Content
                      </Button>
                    </div>
                    <div className="prose max-w-none">
                      <h3 className="text-lg font-semibold">{pages.terms.title}</h3>
                      <p>{pages.terms.content}</p>
                    </div>

                    {editor.isEditing && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Edit Terms & Conditions</h3>
                        <div className="space-y-4">
                          <div>
                            <Input
                              label="Title"
                              placeholder="Enter page title"
                              value={editor.title}
                              onValueChange={(value) => setEditor({...editor, title: value})}
                              isRequired
                            />
                          </div>
                          <div>
                            <Textarea
                              label="Content"
                              placeholder="Enter page content"
                              value={editor.content}
                              onValueChange={(value) => setEditor({...editor, content: value})}
                              minRows={6}
                              isRequired
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="flat"
                              onPress={() => setEditor({
                                title: "",
                                content: "",
                                isEditing: false,
                                currentId: null
                              })}
                            >
                              Cancel
                            </Button>
                            <Button 
                              color="primary"
                              onPress={() => handlePageSubmit('terms')}
                            >
                              Update
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </div>
            </Tab>

            <Tab key="privacy" title="Privacy Policy">
              <div className="mt-6">
                <Card className="border border-gray-200">
                  <CardBody className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Privacy Policy Content</h2>
                      <Button 
                        color="primary"
                        startContent={<Icon icon="lucide:edit" />}
                        onPress={() => editPage('privacy')}
                      >
                        Edit Content
                      </Button>
                    </div>
                    <div className="prose max-w-none">
                      <h3 className="text-lg font-semibold">{pages.privacy.title}</h3>
                      <p>{pages.privacy.content}</p>
                    </div>

                    {editor.isEditing && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-4">Edit Privacy Policy</h3>
                        <div className="space-y-4">
                          <div>
                            <Input
                              label="Title"
                              placeholder="Enter page title"
                              value={editor.title}
                              onValueChange={(value) => setEditor({...editor, title: value})}
                              isRequired
                            />
                          </div>
                          <div>
                            <Textarea
                              label="Content"
                              placeholder="Enter page content"
                              value={editor.content}
                              onValueChange={(value) => setEditor({...editor, content: value})}
                              minRows={6}
                              isRequired
                            />
                          </div>
                          <div className="flex justify-end space-x-2">
                            <Button 
                              variant="flat"
                              onPress={() => setEditor({
                                title: "",
                                content: "",
                                isEditing: false,
                                currentId: null
                              })}
                            >
                              Cancel
                            </Button>
                            <Button 
                              color="primary"
                              onPress={() => handlePageSubmit('privacy')}
                            >
                              Update
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};