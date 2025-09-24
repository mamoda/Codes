import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Store, CheckCircle, Facebook, Twitter, Github } from 'lucide-react';

interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface Notification {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<Notification>({
    show: false,
    message: '',
    type: 'success'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // محاكاة اتصال بالخادم
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // في التطبيق الحقيقي، هنا سيتم إرسال البيانات إلى API
      console.log('بيانات تسجيل الدخول:', formData);
      
      showNotification('تم تسجيل الدخول بنجاح!', 'success');
      
      // إعادة تعيين النموذج
      setFormData({
        email: '',
        password: '',
        rememberMe: false
      });
    } catch (error) {
      showNotification('حدث خطأ أثناء تسجيل الدخول', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const features = [
    'إدارة المبيعات والمخزون المتكاملة',
    'تقارير مبيعات مفصلة وزمنية',
    'إدارة العملاء والموردين',
    'تحليلات وأرقام مالية دقيقة'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center p-4">
      {/* إشعار */}
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-transform duration-300 ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {notification.message}
        </div>
      )}

      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* الجانب الأيسر - المعلومات */}
          <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 md:p-12">
            <div className="flex items-center mb-8">
              <Store className="h-10 w-10 ml-3" />
              <div>
                <h1 className="text-2xl font-bold">نظام نقاط البيع</h1>
                <p className="text-blue-200">POS System Pro</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">مرحباً بعودتك!</h2>
              <p className="text-blue-100 leading-relaxed">
                سجل الدخول إلى نظام إدارة نقاط البيع المتكامل للوصول إلى جميع الميزات 
                والإحصائيات المهمة لمتجرك وتطوير أعمالك.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 ml-3 text-green-300" />
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-blue-200">
                💡 <strong>نصيحة:</strong> استخدم بيانات الاعتماد التي حصلت عليها من المسؤول
                للوصول إلى النظام بكافة صلاحياتك.
              </p>
            </div>
          </div>

          {/* الجانب الأيمن - نموذج تسجيل الدخول */}
          <div className="md:w-1/2 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">تسجيل الدخول</h2>
              <p className="text-gray-600 mt-2">أدخل بيانات الاعتماد الخاصة بك للوصول إلى حسابك</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* حقل البريد الإلكتروني */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="block w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="ادخل بريدك الإلكتروني"
                    required
                  />
                </div>
              </div>

              {/* حقل كلمة المرور */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  كلمة المرور
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="block w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="ادخل كلمة المرور"
                    required
                  />
                  <button
                    type="button"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* خيارات إضافية */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="mr-2 block text-sm text-gray-700">
                    تذكرني
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500 transition-colors duration-200">
                  نسيت كلمة المرور؟
                </a>
              </div>

              {/* زر تسجيل الدخول */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    جاري تسجيل الدخول...
                  </>
                ) : (
                  'تسجيل الدخول'
                )}
              </button>
            </form>

            {/* خط فاصل */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">أو</span>
              </div>
            </div>

            {/* تسجيل الدخول عبر وسائل التواصل */}
            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Facebook className="h-5 w-5 text-blue-600" />
              </button>
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Twitter className="h-5 w-5 text-blue-400" />
              </button>
              <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <Github className="h-5 w-5 text-gray-700" />
              </button>
            </div>

            {/* رابط إنشاء حساب جديد */}
            <div className="text-center mt-8">
              <p className="text-gray-600">
                ليس لديك حساب؟{' '}
                <a href="#" className="text-blue-600 hover:text-blue-500 font-medium transition-colors duration-200">
                  إنشاء حساب جديد
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}