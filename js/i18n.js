/* ============================================
   i18n — Full-site EN/AR Toggle
   ============================================ */

(function () {
  const translations = {
    en: {
      preloader_text: 'Loading',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_education: 'Education',
      nav_contact: 'Contact',
      lang_label: 'عربي',
      hero_label: 'Available for opportunities',
      hero_name_1: 'Abdel Halim',
      hero_name_2: 'Taha.',
      hero_title: 'Software Engineer',
      hero_tagline: 'Building scalable mobile apps & data-driven solutions with Flutter, C#, and Firebase.',
      hero_cta_work: 'View My Work <span class="btn-arrow">→</span>',
      hero_cta_contact: 'Contact Me',
      hero_cta_cv: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download CV',
      about_label: 'About Me',
      about_title: 'Who I Am',
      about_text: '"I am a Business Information Systems (BIS) student at Madina Academy (Expected graduation June 2026), currently interning at CIB Egypt. I completed the \'Green Leap\' program, gaining deep insights into ESG, Sustainable Finance, and Climate Risk Management in collaboration with the IFC and Frankfurt School.\n\nMy passion lies at the intersection of Flutter Development, Data Analysis, and Financial Technology. I aim to leverage my technical skills to drive responsible innovation and support sustainability within the financial sector."',
      stat_projects: 'Projects',
      stat_technologies: 'Technologies',
      stat_years: 'Years Exp',
      skills_label: 'Expertise',
      skills_title: 'Skills & Technologies',
      skill_mobile_title: 'Mobile Dev',
      skill_mobile_desc: 'Cross-platform mobile applications built with modern frameworks.',
      skill_data_title: 'Data & Backend',
      skill_data_desc: 'Data analysis and backend services powering smart applications.',
      skill_tools_title: 'Tools',
      skill_tools_desc: 'Development workflow tools for efficient and scalable delivery.',
      projects_label: 'Portfolio',
      projects_title: 'Selected Work',
      coming_soon_title: 'Coming Soon',
      coming_soon_text: 'Exciting projects are in the works. Stay tuned for case studies and live demos.',
      education_label: 'Background',
      education_title: 'Education & Certifications',
      edu_date_1: '2021 — Present',
      edu_degree_1: 'Computer Information Systems Management',
      edu_school_1: 'Madina Academy',
      edu_desc_1: 'Business Information Systems program covering software development, database management, and information systems design.',
      edu_date_2: 'Certification',
      edu_degree_2: 'Data Analytics',
      edu_school_2: 'Professional Certification',
      edu_desc_2: 'Comprehensive data analytics training covering data visualization, statistical analysis, and data-driven decision making.',
      contact_label: 'Get in Touch',
      contact_title: "Let's Work Together",
      contact_subtitle: "Have a project in mind or want to discuss an opportunity? I'd love to hear from you.",
      contact_location: 'Cairo, Egypt',
      contact_email_label: 'Email',
      contact_linkedin_label: 'LinkedIn',
      contact_linkedin_value: 'Abdel Halim Taha',
      contact_github_label: 'GitHub',
      form_name: 'Name',
      form_email: 'Email',
      form_message: 'Message',
      form_submit: 'Send Message <span class="btn-arrow">→</span>',
      footer_name: 'Abdel Halim Taha',
      footer_rights: 'All rights reserved.',
      footer_top: 'Back to Top',
      nav_logo: 'AT.',
      hero_scroll: 'Scroll',
    },
    ar: {
      preloader_text: 'جاري التحميل',
      nav_about: 'عنّي',
      nav_skills: 'المهارات',
      nav_projects: 'المشاريع',
      nav_education: 'التعليم',
      nav_contact: 'تواصل',
      lang_label: 'English',
      hero_label: 'متاح للفرص الجديدة',
      hero_name_1: 'عبدالحليم',
      hero_name_2: 'طه.',
      hero_title: 'مطور برمجيات',
      hero_tagline: 'بناء تطبيقات موبايل قابلة للتوسع وحلول مبنية على البيانات باستخدام Flutter و C# و Firebase.',
      hero_cta_work: 'شاهد أعمالي <span class="btn-arrow">←</span>',
      hero_cta_contact: 'تواصل معي',
      hero_cta_cv: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> تحميل السيرة الذاتية',
      about_label: 'عنّي',
      about_title: 'من أنا',
      about_text: '"أنا طالب في نظم معلومات الأعمال (BIS) في أكاديمية المدينة (متوقع التخرج يونيو ٢٠٢٦)، وحالياً متدرب في بنك CIB مصر. أتممت برنامج "Green Leap"، واكتسبت خبرة عميقة في الحوكمة البيئية والاجتماعية (ESG) والتمويل المستدام وإدارة المخاطر المناخية بالتعاون مع مؤسسة التمويل الدولية (IFC) ومدرسة فرانكفورت.\n\nشغفي يكمن عند تقاطع تطوير Flutter وتحليل البيانات والتكنولوجيا المالية. أسعى لتوظيف مهاراتي التقنية لدفع الابتكار المسؤول ودعم الاستدامة في القطاع المالي."',
      stat_projects: 'مشاريع',
      stat_technologies: 'تقنيات',
      stat_years: 'سنوات خبرة',
      skills_label: 'الخبرات',
      skills_title: 'المهارات والتقنيات',
      skill_mobile_title: 'تطوير الموبايل',
      skill_mobile_desc: 'تطبيقات موبايل متعددة المنصات مبنية بأحدث الأدوات.',
      skill_data_title: 'البيانات والباك إند',
      skill_data_desc: 'تحليل البيانات وخدمات الباك إند لتطبيقات ذكية.',
      skill_tools_title: 'الأدوات',
      skill_tools_desc: 'أدوات تطوير لإنتاجية عالية وتسليم فعّال.',
      projects_label: 'الأعمال',
      projects_title: 'أعمال مختارة',
      coming_soon_title: 'قريباً',
      coming_soon_text: 'مشاريع مميزة قيد التطوير. ترقبوا دراسات الحالة والعروض الحية.',
      education_label: 'الخلفية',
      education_title: 'التعليم والشهادات',
      edu_date_1: '٢٠٢١ — حتى الآن',
      edu_degree_1: 'إدارة نظم المعلومات الحاسوبية',
      edu_school_1: 'أكاديمية المدينة',
      edu_desc_1: 'برنامج نظم معلومات الأعمال يشمل تطوير البرمجيات وإدارة قواعد البيانات وتصميم نظم المعلومات.',
      edu_date_2: 'شهادة معتمدة',
      edu_degree_2: 'تحليل البيانات',
      edu_school_2: 'شهادة مهنية',
      edu_desc_2: 'تدريب شامل في تحليل البيانات يشمل تصور البيانات والتحليل الإحصائي واتخاذ القرارات المبنية على البيانات.',
      contact_label: 'تواصل معي',
      contact_title: 'لنعمل معاً',
      contact_subtitle: 'عندك مشروع أو فرصة تحب تتكلم عنها؟ يسعدني أسمع منك.',
      contact_location: 'القاهرة، مصر',
      contact_email_label: 'البريد',
      contact_linkedin_label: 'لينكدإن',
      contact_linkedin_value: 'عبدالحليم طه',
      contact_github_label: 'جيت هب',
      form_name: 'الاسم',
      form_email: 'البريد الإلكتروني',
      form_message: 'الرسالة',
      form_submit: 'أرسل الرسالة <span class="btn-arrow">←</span>',
      footer_name: 'عبدالحليم طه',
      footer_rights: 'جميع الحقوق محفوظة.',
      footer_top: 'العودة للأعلى',
      nav_logo: 'ع.ط.',
      hero_scroll: 'اسكرول',
    }
  };

  // Placeholder translations for form inputs
  const placeholders = {
    en: {
      'form-name': 'Your Name',
      'form-email': 'Your Email',
      'form-message': 'Your Message',
    },
    ar: {
      'form-name': 'اسمك',
      'form-email': 'بريدك الإلكتروني',
      'form-message': 'رسالتك',
    }
  };

  let currentLang = localStorage.getItem('portfolio-lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;

    // Set direction
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('lang', lang);

    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Apply placeholders
    Object.keys(placeholders[lang]).forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.setAttribute('placeholder', placeholders[lang][id]);
      }
    });

    // Use Arabic font for AR
    if (lang === 'ar') {
      document.body.style.fontFamily = "'Noto Kufi Arabic', 'Inter', sans-serif";
    } else {
      document.body.style.fontFamily = '';
    }

    localStorage.setItem('portfolio-lang', lang);
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  }

  // Toggle buttons
  function toggleLang() {
    applyLanguage(currentLang === 'en' ? 'ar' : 'en');
  }

  const langToggle = document.getElementById('lang-toggle');
  const langToggleMobile = document.getElementById('lang-toggle-mobile');

  if (langToggle) langToggle.addEventListener('click', toggleLang);
  if (langToggleMobile) langToggleMobile.addEventListener('click', toggleLang);

  // Apply saved language on load
  if (currentLang !== 'en') {
    applyLanguage(currentLang);
  }
})();
