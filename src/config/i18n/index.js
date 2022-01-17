import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ar: {
    translation: {
      'Dr. Fred Mask': 'دكتور فريد ماسك',
      'Heart surgeon': 'جراح قلب',
      'Open now': 'مفتوح الان',
      'Close Now': 'إغلاق الآن',
      'HEART DOCTOR': 'دكتور قلب',
      'Edit Password': 'تحرير كلمة المرور',
      'Language': 'لغة',
      'Notification': 'إشعار',
      'Change Password':'تغيير كلمة السر',
      'Show Password':'عرض كلمة المرور',
      'Log Out':'تسجيل خروج',
      'Contact Us':'اتصل بنا',
      'Rated App':'التطبيق المصنف',
      'Share App':'شارك التطبيق',
      'About App':'حول التطبيق',
      'Setting':'جلسة',
      'Inbox':'صندوق الوارد',
      'Family Member Profile':'ملف تعريف أفراد العائلة',
      'My Reports':'تقاريري',
      'My Appointments':'المواعيد الخاصة بي',
      'My Profile':'ملفي',
      'New Articles':'مقالات جديدة',
      'Read our best article for good health.':'اقرأ أفضل مقال لدينا من أجل صحة جيدة.',
      'Good health is central to handling stress and living a longer, more active life.…':'الصحة الجيدة أمر أساسي للتعامل مع التوتر والعيش حياة أطول وأكثر نشاطًا ...',
      'Category':'فئة',
      'See all':'اظهار الكل',
      'Top Rated':'أعلى التقييمات',
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: I18nManager.isRTL ? 'ar' : 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
