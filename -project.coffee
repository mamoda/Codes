📦 JobMatcher/
│
├── 📁 frontend/                # واجهة المستخدم
│   ├── 📁 public/              # ملفات ثابتة (HTML, Icons, Manifest)
│   ├── 📁 src/
│   │   ├── 📁 assets/          # صور، أيقونات، خطوط
│   │   ├── 📁 components/      # مكونات واجهة قابلة لإعادة الاستخدام
│   │   ├── 📁 pages/           # الصفحات (صفحة تسجيل، ملف شخصي، داشبورد، ...الخ)
│   │   ├── 📁 services/        # خدمات الاتصال بـ backend (API)
│   │   ├── 📁 context/         # إدارة الحالة (مثل AuthContext)
│   │   ├── 📁 utils/           # أدوات مساعدة (مثل التحقق من الصيغ، التنسيق)
│   │   ├── App.tsx            # نقطة الدخول الأساسية للتطبيق
│   │   └── main.tsx           # ربط React مع DOM
│   └── package.json
│
├── 📁 backend/                 # السيرفر والـ API
│   ├── 📁 src/
│   │   ├── 📁 controllers/     # منطق التعامل مع الطلبات
│   │   ├── 📁 routes/          # تعريف المسارات (Express)
│   │   ├── 📁 models/          # نماذج قاعدة البيانات (Mongoose أو Prisma)
│   │   ├── 📁 middleware/      # تحقق JWT، رفع ملفات، إلخ
│   │   ├── 📁 services/        # منطق المعالجة الرئيسي (مثل تحليل CV)
│   │   ├── 📁 utils/           # أدوات مساعدة
│   │   ├── 📁 jobs/            # المهام المجدولة (مثل جدولة المقابلات)
│   │   ├── index.ts           # نقطة البداية لـ API
│   │   └── config.ts          # إعدادات البيئة
│   └── package.json
│
├── 📁 ai_engine/               # تحليل السيرة الذاتية والاقتراحات
│   ├── 📁 models/              # نماذج ML المدربة
│   ├── 📁 processors/          # معالجة ملفات PDF / DOCX واستخراج البيانات
│   ├── 📁 matching/            # منطق المطابقة بين المتطلبات والسير الذاتية
│   ├── 📁 scheduling/          # منطق جدولة المقابلات الذكي
│   ├── 📁 training/            # سكريبتات تدريب النموذج
│   └── main.py                # نقطة انطلاق المحرك الذكي
│
├── 📁 database/                # ملفات قاعدة البيانات وتوثيقها
│   ├── schema.sql             # سكربت إنشاء قاعدة البيانات إذا كانت SQL
│   ├── seed.ts                # بيانات تجريبية أولية
│   └── prisma.schema          # Prisma ORM (إذا تم استخدامه)
│
├── 📁 docs/                    # التوثيق
│   ├── API.md                 # توثيق REST API
│   ├── AI_Logic.md            # كيف يعمل المحرك الذكي للمطابقة
│   ├── DB_Schema.md           # شرح الجداول والكيانات
│   └── README.md              # نظرة عامة للمشروع
│
├── 📁 scripts/                 # سكريبتات الصيانة أو التهيئة
│   ├── deploy.sh              # نشر المشروع
│   └── setup_env.sh           # إعداد بيئة التطوير
│
├── .env                       # متغيرات البيئة (API Keys, DB credentials)
├── docker-compose.yml         # إعداد الحاويات (Frontend, Backend, DB, AI)
├── Dockerfile                 # Docker للتطبيق
└── README.md                  # الملف الرئيسي للمشروع
