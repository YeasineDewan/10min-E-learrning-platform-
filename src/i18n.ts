import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const enTranslations = {
  search_placeholder: 'Search courses, school programs...',
  class_6_12: 'Class 6-12',
  skills: 'Skills',
  admission: 'Admission',
  online_batch: 'Online Batch',
  english_centre: 'English Centre',
  more: 'More',
  blog: 'Blog',
  about_us: 'About Us',
  contact: 'Contact',
  login: 'Login',
  start_now: 'Start Now',
  learn_more: 'Learn More',
  // Hero section
  hero_title: 'Learn Anytime, Anywhere',
  hero_subtitle: 'Class 1 to 12, admission test, job preparation, skill development & language learning - all in your hands',
  // Footer
  download_app: 'Download Our Mobile App',
  company: 'Company',
  career: 'Career / Recruitment',
  join_teacher: 'Join as a Teacher',
  join_affiliate: 'Join as an Affiliate',
  privacy_policy: 'Privacy policy',
  refund_policy: 'Refund policy',
  terms_conditions: 'Terms & Conditions',
  others: 'Others',
  book_store: 'Book Store',
  free_notes: 'Free Notes & Guides',
  job_preparation: 'Job Preparation Courses',
  verify_certificate: 'Verify Certificate',
  free_download: 'Free Download',
  keep_up: 'Keep up with us at',
  call_us: 'Call Us:',
  whatsapp: 'WhatsApp:',
  outside_bangladesh: 'Outside Bangladesh:',
  email_us: 'Email Us:',
  // English Centre
  english_centre_title: '10 Minute School English Centre',
  english_centre_subtitle: 'With 9 years of experience teaching 5 lakh+ students online, we are now offline with modern facilities in the country\'s best locations.',
  our_centres: 'Our Centres',
  // Admin
  dashboard: 'Dashboard',
  content_management: 'Content Management',
  website_settings: 'Website Settings',
  education_management: 'Education Management',
  courses: 'Courses',
  teachers: 'Teachers',
  students: 'Students',
  communication: 'Communication',
  feedback: 'Feedback',
  notifications: 'Notifications',
  website_setup: 'Website Setup'
};

// Bengali translations
const bnTranslations = {
  search_placeholder: 'কোর্স কোড, কিংবা স্কুল প্রোগ্রাম সার্চ করুন...',
  class_6_12: 'ক্লাস ৬-১২',
  skills: 'স্কিলস',
  admission: 'অ্যাডমিশন',
  online_batch: 'অনলাইন ব্যাচ',
  english_centre: 'ইংলিশ সেন্টার',
  more: 'আরও',
  blog: 'ব্লগ',
  about_us: 'আমাদের সম্পর্কে',
  contact: 'যোগাযোগ',
  login: 'লগ-ইন',
  start_now: 'শুরু করুন',
  learn_more: 'আরও জানুন',
  // Hero section
  hero_title: 'শেখার বাসা এখন প্রবাসেও',
  hero_subtitle: 'ক্লাস ১ থেকে ১২, ভর্তি পরীক্ষা, চাকরি প্রস্তুতি, দক্ষতা উন্নয়ন ও ভাষা শিক্ষা - সবই এখন আপনার হাতের মুঠোয়',
  // Footer
  download_app: 'আমাদের মোবাইল অ্যাপ ডাউনলোড করুন',
  company: 'কোম্পানি',
  career: 'ক্যারিয়ার / নিয়োগ',
  join_teacher: 'শিক্ষক হিসেবে যোগ দিন',
  join_affiliate: 'অ্যাফিলিয়েট হিসেবে যোগ দিন',
  privacy_policy: 'গোপনীয়তা নীতি',
  refund_policy: 'রিফান্ড নীতি',
  terms_conditions: 'শর্তাবলী',
  others: 'অন্যান্য',
  book_store: 'বুক স্টোর',
  free_notes: 'ফ্রি নোটস ও গাইড',
  job_preparation: 'চাকরি প্রস্তুতি কোর্স',
  verify_certificate: 'সার্টিফিকেট যাচাই',
  free_download: 'ফ্রি ডাউনলোড',
  keep_up: 'আমাদের সাথে থাকুন',
  call_us: 'কল করুন:',
  whatsapp: 'হোয়াটসঅ্যাপ:',
  outside_bangladesh: 'বাংলাদেশের বাইরে:',
  email_us: 'ইমেইল করুন:',
  // English Centre
  english_centre_title: '১০ মিনিট স্কুল ইংলিশ সেন্টার',
  english_centre_subtitle: 'অনলাইনে ৯ বছর ধরে লাখ লাখ শিক্ষার্থীকে পড়ানোর অভিজ্ঞতা নিয়ে এবার আমরা সামনাসামনি ক্লাসরুম বসে, দেশের সেরা শিক্ষকদের কাছ থেকে সরাসরি শিখতে পারবেন Spoken English এবং নিতে পারবেন IELTS-এর জন্য কমপ্লিট প্রস্তুতি।',
  our_centres: 'আমাদের সেন্টারসমূহ',
  // Admin
  dashboard: 'ড্যাশবোর্ড',
  content_management: 'কন্টেন্ট ম্যানেজমেন্ট',
  website_settings: 'ওয়েবসাইট সেটিংস',
  education_management: 'শিক্ষা ব্যবস্থাপনা',
  courses: 'কোর্সসমূহ',
  teachers: 'শিক্ষকগণ',
  students: 'শিক্ষার্থীগণ',
  communication: 'যোগাযোগ',
  feedback: 'ফিডব্যাক',
  notifications: 'নোটিফিকেশন',
  website_setup: 'ওয়েবসাইট সেটআপ'
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      bn: {
        translation: bnTranslations
      }
    },
    fallbackLng: 'bn',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
