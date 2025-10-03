import React from "react";
import { Button, Card, CardBody, Input, Tabs, Tab, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react";
import { AdminSidebar } from "../../components/admin/admin-sidebar";

export const AdminSettingsPage: React.FC = () => {
  const [selected, setSelected] = React.useState("general");
  
  // General settings
  const [generalSettings, setGeneralSettings] = React.useState({
    siteName: "10 Minute School",
    siteTagline: "Learn Anytime, Anywhere",
    siteDescription: "Bangladesh's largest online education platform",
    contactEmail: "support@10minuteschool.com",
    contactPhone: "16910",
    address: "Level 3, House 496, Road 34, Mohakhali DOHS, Dhaka 1206"
  });

  // Logo and favicon settings
  const [logoSettings, setLogoSettings] = React.useState({
    logo: "https://img.heroui.chat/image/ai?w=200&h=60&u=logo",
    favicon: "https://img.heroui.chat/image/ai?w=32&h=32&u=favicon",
    mobileLogo: "https://img.heroui.chat/image/ai?w=40&h=40&u=mobile_logo"
  });

  // Social media settings
  const [socialSettings, setSocialSettings] = React.useState({
    facebook: "https://facebook.com/10minuteschool",
    instagram: "https://instagram.com/10minuteschool",
    twitter: "https://twitter.com/10minuteschool",
    youtube: "https://youtube.com/10minuteschool",
    linkedin: "https://linkedin.com/company/10minuteschool"
  });

  // SEO settings
  const [seoSettings, setSeoSettings] = React.useState({
    metaTitle: "10 Minute School - Learn Anytime, Anywhere",
    metaDescription: "Bangladesh's largest online education platform offering courses for students from class 1 to 12, university admission, job preparation, and skill development.",
    metaKeywords: "education, online learning, Bangladesh, HSC, SSC, admission, skill development",
    ogImage: "https://img.heroui.chat/image/ai?w=1200&h=630&u=og_image"
  });

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save general settings
    console.log("General settings saved:", generalSettings);
    // In a real app, you would send this to your backend
  };

  const handleLogoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logo settings
    console.log("Logo settings saved:", logoSettings);
    // In a real app, you would upload files and save URLs
  };

  const handleSocialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save social media settings
    console.log("Social media settings saved:", socialSettings);
  };

  const handleSeoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save SEO settings
    console.log("SEO settings saved:", seoSettings);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Website Settings</h1>
          </div>

          <Tabs 
            aria-label="Website Settings" 
            selectedKey={selected} 
            onSelectionChange={setSelected as any}
          >
            <Tab key="general" title="General Settings">
              <div className="mt-6">
                <Card className="border border-gray-200">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-semibold mb-4">General Settings</h2>
                    <form onSubmit={handleGeneralSubmit} className="space-y-4">
                      <div>
                        <Input
                          label="Site Name"
                          placeholder="Enter site name"
                          value={generalSettings.siteName}
                          onValueChange={(value) => setGeneralSettings({...generalSettings, siteName: value})}
                          isRequired
                        />
                      </div>
                      <div>
                        <Input
                          label="Site Tagline"
                          placeholder="Enter site tagline"
                          value={generalSettings.siteTagline}
                          onValueChange={(value) => setGeneralSettings({...generalSettings, siteTagline: value})}
                        />
                      </div>
                      <div>
                        <Textarea
                          label="Site Description"
                          placeholder="Enter site description"
                          value={generalSettings.siteDescription}
                          onValueChange={(value) => setGeneralSettings({...generalSettings, siteDescription: value})}
                          minRows={3}
                        />
                      </div>
                      <div>
                        <Input
                          label="Contact Email"
                          placeholder="Enter contact email"
                          type="email"
                          value={generalSettings.contactEmail}
                          onValueChange={(value) => setGeneralSettings({...generalSettings, contactEmail: value})}
                          isRequired
                        />
                      </div>
                      <div>
                        <Input
                          label="Contact Phone"
                          placeholder="Enter contact phone"
                          value={generalSettings.contactPhone}
                          onValueChange={(value) => setGeneralSettings({...generalSettings, contactPhone: value})}
                        />
                      </div>
                      <div>
                        <Textarea
                          label="Address"
                          placeholder="Enter address"
                          value={generalSettings.address}
                          onValueChange={(value) => setGeneralSettings({...generalSettings, address: value})}
                          minRows={2}
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          color="primary"
                        >
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </Tab>

            <Tab key="logo" title="Logo & Favicon">
              <div className="mt-6">
                <Card className="border border-gray-200">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Logo & Favicon Settings</h2>
                    <form onSubmit={handleLogoSubmit} className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Site Logo</h3>
                        <div className="flex items-center space-x-4">
                          <img 
                            src={logoSettings.logo} 
                            alt="Site Logo" 
                            className="h-12 border border-gray-200 rounded p-1"
                          />
                          <div>
                            <Input
                              type="file"
                              label="Upload Logo"
                              placeholder="Select logo file"
                              accept="image/*"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Recommended size: 200x60px. Max file size: 2MB.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Favicon</h3>
                        <div className="flex items-center space-x-4">
                          <img 
                            src={logoSettings.favicon} 
                            alt="Favicon" 
                            className="h-8 w-8 border border-gray-200 rounded p-1"
                          />
                          <div>
                            <Input
                              type="file"
                              label="Upload Favicon"
                              placeholder="Select favicon file"
                              accept="image/x-icon,image/png"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Recommended size: 32x32px. Format: .ico or .png
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Mobile Logo</h3>
                        <div className="flex items-center space-x-4">
                          <img 
                            src={logoSettings.mobileLogo} 
                            alt="Mobile Logo" 
                            className="h-10 w-10 border border-gray-200 rounded p-1"
                          />
                          <div>
                            <Input
                              type="file"
                              label="Upload Mobile Logo"
                              placeholder="Select mobile logo file"
                              accept="image/*"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Recommended size: 40x40px. Max file size: 1MB.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          color="primary"
                        >
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </Tab>

            <Tab key="social" title="Social Media">
              <div className="mt-6">
                <Card className="border border-gray-200">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Social Media Settings</h2>
                    <form onSubmit={handleSocialSubmit} className="space-y-4">
                      <div>
                        <Input
                          label="Facebook"
                          placeholder="Enter Facebook URL"
                          startContent={<Icon icon="logos:facebook" />}
                          value={socialSettings.facebook}
                          onValueChange={(value) => setSocialSettings({...socialSettings, facebook: value})}
                        />
                      </div>
                      <div>
                        <Input
                          label="Instagram"
                          placeholder="Enter Instagram URL"
                          startContent={<Icon icon="logos:instagram-icon" />}
                          value={socialSettings.instagram}
                          onValueChange={(value) => setSocialSettings({...socialSettings, instagram: value})}
                        />
                      </div>
                      <div>
                        <Input
                          label="Twitter"
                          placeholder="Enter Twitter URL"
                          startContent={<Icon icon="logos:twitter" />}
                          value={socialSettings.twitter}
                          onValueChange={(value) => setSocialSettings({...socialSettings, twitter: value})}
                        />
                      </div>
                      <div>
                        <Input
                          label="YouTube"
                          placeholder="Enter YouTube URL"
                          startContent={<Icon icon="logos:youtube-icon" />}
                          value={socialSettings.youtube}
                          onValueChange={(value) => setSocialSettings({...socialSettings, youtube: value})}
                        />
                      </div>
                      <div>
                        <Input
                          label="LinkedIn"
                          placeholder="Enter LinkedIn URL"
                          startContent={<Icon icon="logos:linkedin-icon" />}
                          value={socialSettings.linkedin}
                          onValueChange={(value) => setSocialSettings({...socialSettings, linkedin: value})}
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          color="primary"
                        >
                          Save Changes
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </Tab>

            <Tab key="seo" title="SEO Settings">
              <div className="mt-6">
                <Card className="border border-gray-200">
                  <CardBody className="p-6">
                    <h2 className="text-xl font-semibold mb-4">SEO Settings</h2>
                    <form onSubmit={handleSeoSubmit} className="space-y-4">
                      <div>
                        <Input
                          label="Meta Title"
                          placeholder="Enter meta title"
                          value={seoSettings.metaTitle}
                          onValueChange={(value) => setSeoSettings({...seoSettings, metaTitle: value})}
                          isRequired
                        />
                      </div>
                      <div>
                        <Textarea
                          label="Meta Description"
                          placeholder="Enter meta description"
                          value={seoSettings.metaDescription}
                          onValueChange={(value) => setSeoSettings({...seoSettings, metaDescription: value})}
                          minRows={3}
                          isRequired
                        />
                      </div>
                      <div>
                        <Input
                          label="Meta Keywords"
                          placeholder="Enter meta keywords (comma separated)"
                          value={seoSettings.metaKeywords}
                          onValueChange={(value) => setSeoSettings({...seoSettings, metaKeywords: value})}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">OG Image</h3>
                        <div className="flex items-center space-x-4">
                          <img 
                            src={seoSettings.ogImage} 
                            alt="OG Image" 
                            className="h-16 border border-gray-200 rounded p-1"
                          />
                          <div>
                            <Input
                              type="file"
                              label="Upload OG Image"
                              placeholder="Select OG image file"
                              accept="image/*"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Recommended size: 1200x630px. Max file size: 2MB.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          color="primary"
                        >
                          Save Changes
                        </Button>
                      </div>
                    </form>
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