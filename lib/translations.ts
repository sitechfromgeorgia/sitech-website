export type Language = 'ka' | 'en' | 'uk';

export const translations = {
  ka: {
    // Navbar
    nav: {
      services: 'სერვისები',
      portfolio: 'პორტფოლიო',
      pricing: 'ფასები',
      about: 'ჩვენ შესახებ',
      contact: 'კონტაქტი',
      contactButton: '💬 მომწერე',
      language: 'ენა',
    },

    // Hero Section
    hero: {
      badge: 'საქართველოს პირველი AI სააგენტო',
      title1: 'გაზარდე ბიზნესი',
      title2: 'ონლაინ',
      subtitle1: 'ჩვენ მოვდივართ შენთან — მესენჯერში, მეილში, სადაც ხარ.',
      subtitle2: 'არანაირი ახალი აპლიკაცია.',
      startProject: 'დაიწყე პროექტი',
      meetLucy: 'გაიცანი ლუსი',
    },

    // Lucy Section
    lucy: {
      badge: 'გაიცანი ლუსი',
      title: 'შენი',
      titleGradient: 'AI თანაშემწე',
      title247: '24/7',
      subtitle: 'ლუსი არის AI ასისტენტი, რომელიც აძლევს SiTech-ს სუპერძალას — ყოველთვის ხელმისაწვდომი, ყოველთვის მზად დაგეხმაროს',
      greeting: 'გამარჯობა! 👋',
      helpQuestion: 'როგორ შემიძლია დაგეხმარო?',
      name: 'ლუსი',
      role: 'SiTech AI Assistant',
      online: 'ონლაინ',
      availability: '24/7 ხელმისაწვდომობა',
      availabilityDesc: 'ლუსი არასდროს სძინავს. ნებისმიერ დროს, ნებისმიერ დღეს — მზად არის დაგეხმაროს',
      instantResponse: 'მყისიერი პასუხები',
      instantResponseDesc: 'წამებში მიიღებ პასუხს ნებისმიერ კითხვაზე — არანაირი მოლოდინი',
      multilingual: 'მრავალენოვანი',
      multilingualDesc: 'საუბრობს ქართულად, ინგლისურად, უკრაინულად — როგორც შენ გინდა',
      teamMember: 'ლუსი არის გუნდის წევრი, არა მხოლოდ ხელსაწყო',
      startChat: 'დაუწყე საუბარი ლუსს',
    },

    // Services Section
    services: {
      badge: 'სერვისები',
      title: 'რას',
      titleGradient: 'ვაკეთებთ',
      subtitle: 'გამჭვირვალე ფასები, ხარისხიანი სერვისი',
      landing: 'ლენდინგი',
      landingDesc: 'ერთგვერდიანი საიტი თქვენი ბიზნესისთვის',
      landingPrice: '200₾-დან',
      addLanguage: '+ენის დამატება',
      addLanguageDesc: 'დამატებითი ენის ვერსია',
      addLanguagePrice: '+50₾/ენა',
      businessSite: 'ბიზნეს საიტი',
      businessSiteDesc: '3-5 გვერდიანი საიტი',
      businessSitePrice: '500₾-დან',
      complexApp: 'კომპლექსური საიტი/აპი',
      complexAppDesc: 'სრული ფუნქციონალი',
      complexAppPrice: '1,500₾-დან',
      paymentIntegration: 'გადახდის ინტეგრაცია',
      paymentIntegrationDesc: 'TBC, BOG და სხვა',
      paymentIntegrationPrice: '5,000₾-დან',
      maintenanceSmall: 'Maintenance (პატარა)',
      maintenanceSmallDesc: 'მცირე საიტების მხარდაჭერა',
      maintenanceSmallPrice: '100₾/თვე',
      maintenanceLarge: 'Maintenance (დიდი)',
      maintenanceLargeDesc: 'დიდი პროექტების მხარდაჭერა',
      maintenanceLargePrice: 'შეთანხმებით',
    },

    // Special Offer Section
    specialOffer: {
      badge: '🔥 სპეციალური შეთავაზება',
      title: '500 მცირე მეწარმისთვის',
      price: 'პროფესიონალური ლენდინგი მხოლოდ',
      priceAmount: '100₾-ად',
      description: 'სრული მომსახურება: დიზაინი + დეველოპმენტი + ჰოსტინგი პირველი თვე უფასო',
      cta: 'დაიჭირე ადგილი ახლავე',
      limited: '⏰ შეზღუდული რაოდენობა • დაჩქარდი!',
    },

    // Coming Soon Section
    comingSoon: {
      badge: 'მალე',
      title: 'რა',
      titleGradient: 'გველოდება',
      subtitle: 'მალე დავამატებთ ახალ სერვისებს',
      aiChatbots: 'AI ჩატბოტები',
      aiChatbotsDesc: 'ინტელექტუალური ბოტები თქვენი ბიზნესისთვის',
      automation: 'ბიზნეს ავტომატიზაცია',
      automationDesc: 'პროცესების ავტომატიზაცია და ოპტიმიზაცია',
      smm: 'სოციალური ქსელების მართვა',
      smmDesc: 'SMM და კონტენტ მენეჯმენტი',
      training: 'ტრენინგები/კურსები',
      trainingDesc: 'ვებ ტექნოლოგიების სწავლება',
      soon: '🔜 მალე',
    },

    // Portfolio Section
    portfolio: {
      badge: 'პორტფოლიო',
      title: 'ჩვენი',
      titleGradient: 'ნამუშევრები',
      subtitle: 'რეალური პროექტები რეალური შედეგებით',
      ongoing: '🔄 მიმდინარე',
      greenlandTitle: 'Greenland77.ge',
      greenlandDesc: 'დისტრიბუციის პლატფორმა',
      wigTitle: 'WIG',
      wigDesc: 'ბიზნეს ლენდინგი',
      yourProject: 'შენი პროექტი შემდეგია!',
      yourProjectDesc: 'გაამდიდრე ჩვენი პორტფოლიო შენი უნიკალური პროექტით',
    },

    // Contact Section
    contact: {
      badge: 'კონტაქტი',
      title: 'მოდი',
      titleGradient: 'ვისაუბროთ',
      subtitle: 'მოგვიყევით შენი იდეის შესახებ — უფასო კონსულტაცია!',
      telegram: 'Telegram',
      telegramDesc: 'დაუკავშირდი ლუსს ახლავე',
      email: 'Email',
      emailDesc: 'ოფიციალური წერილები',
      location: 'ლოკაცია',
      locationDesc: 'სადაც ვართ',
      locationCity: 'ბათუმი, საქართველო',
    },

    // Footer
    footer: {
      description: 'ციფრული სააგენტო ბათუმიდან. ვქმნით თანამედროვე ვებ გადაწყვეტილებებს.',
      quickLinks: 'სწრაფი ლინკები',
      services: 'სერვისები',
      webDev: 'ვებ განვითარება',
      aiIntegration: 'AI ინტეგრაცია',
      pwa: 'PWA აპლიკაციები',
      seo: 'SEO & მარკეტინგი',
      contact: 'კონტაქტი',
      copyright: 'ყველა უფლება დაცულია.',
      madeWith: 'Made with ❤️ in Batumi',
    },

    // Lucy Chat Widget
    lucyChat: {
      writeToLucy: '💬 მომწერე ლუსის!',
      header: '💬 მომწერე ლუსის',
      name: 'სახელი',
      namePlaceholder: 'შენი სახელი',
      contact: 'ტელეფონი ან Email',
      contactPlaceholder: '+995 XXX XX XX XX',
      message: 'შეტყობინება',
      messagePlaceholder: 'როგორ შემიძლია დაგეხმარო?',
      send: 'გაგზავნა',
      sending: 'იგზავნება...',
      success: 'მადლობა!',
      successMessage: 'ლუსი მალე დაგიკავშირდება!',
      close: 'დახურვა',
      orContact: 'ან დაგვიკავშირდი:',
    },
  },

  en: {
    // Navbar
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      contactButton: '💬 Contact Us',
      language: 'Language',
    },

    // Hero Section
    hero: {
      badge: 'Georgia\'s First AI Agency',
      title1: 'Grow Your Business',
      title2: 'Online',
      subtitle1: 'We meet you where you are — messenger, email, anywhere.',
      subtitle2: 'No new apps needed.',
      startProject: 'Start a Project',
      meetLucy: 'Meet Lucy',
    },

    // Lucy Section
    lucy: {
      badge: 'Meet Lucy',
      title: 'Your',
      titleGradient: 'AI Assistant',
      title247: '24/7',
      subtitle: 'Lucy is an AI assistant that gives SiTech superpowers — always available, always ready to help',
      greeting: 'Hello! 👋',
      helpQuestion: 'How can I help you?',
      name: 'Lucy',
      role: 'SiTech AI Assistant',
      online: 'Online',
      availability: '24/7 Availability',
      availabilityDesc: 'Lucy never sleeps. Any time, any day — ready to assist you',
      instantResponse: 'Instant Responses',
      instantResponseDesc: 'Get answers in seconds — no waiting',
      multilingual: 'Multilingual',
      multilingualDesc: 'Speaks Georgian, English, Ukrainian — your choice',
      teamMember: 'Lucy is a team member, not just a tool',
      startChat: 'Start Chatting with Lucy',
    },

    // Services Section
    services: {
      badge: 'Services',
      title: 'What We',
      titleGradient: 'Do',
      subtitle: 'Transparent pricing, quality service',
      landing: 'Landing Page',
      landingDesc: 'One-page website for your business',
      landingPrice: 'from ₾200',
      addLanguage: '+Add Language',
      addLanguageDesc: 'Additional language version',
      addLanguagePrice: '+₾50/lang',
      businessSite: 'Business Website',
      businessSiteDesc: '3-5 page website',
      businessSitePrice: 'from ₾500',
      complexApp: 'Complex Site/App',
      complexAppDesc: 'Full functionality',
      complexAppPrice: 'from ₾1,500',
      paymentIntegration: 'Payment Integration',
      paymentIntegrationDesc: 'TBC, BOG and others',
      paymentIntegrationPrice: 'from ₾5,000',
      maintenanceSmall: 'Maintenance (Small)',
      maintenanceSmallDesc: 'Support for small sites',
      maintenanceSmallPrice: '₾100/month',
      maintenanceLarge: 'Maintenance (Large)',
      maintenanceLargeDesc: 'Support for large projects',
      maintenanceLargePrice: 'Custom',
    },

    // Special Offer Section
    specialOffer: {
      badge: '🔥 Special Offer',
      title: 'For 500 Small Businesses',
      price: 'Professional landing for only',
      priceAmount: '₾100',
      description: 'Full service: Design + Development + Hosting first month free',
      cta: 'Claim Your Spot Now',
      limited: '⏰ Limited availability • Hurry up!',
    },

    // Coming Soon Section
    comingSoon: {
      badge: 'Coming Soon',
      title: 'What\'s',
      titleGradient: 'Next',
      subtitle: 'We\'ll be adding new services soon',
      aiChatbots: 'AI Chatbots',
      aiChatbotsDesc: 'Intelligent bots for your business',
      automation: 'Business Automation',
      automationDesc: 'Process automation and optimization',
      smm: 'Social Media Management',
      smmDesc: 'SMM and content management',
      training: 'Training/Courses',
      trainingDesc: 'Web technology education',
      soon: '🔜 Soon',
    },

    // Portfolio Section
    portfolio: {
      badge: 'Portfolio',
      title: 'Our',
      titleGradient: 'Work',
      subtitle: 'Real projects with real results',
      ongoing: '🔄 Ongoing',
      greenlandTitle: 'Greenland77.ge',
      greenlandDesc: 'Distribution platform',
      wigTitle: 'WIG',
      wigDesc: 'Business landing',
      yourProject: 'Your project is next!',
      yourProjectDesc: 'Enrich our portfolio with your unique project',
    },

    // Contact Section
    contact: {
      badge: 'Contact',
      title: 'Let\'s',
      titleGradient: 'Talk',
      subtitle: 'Tell us about your idea — free consultation!',
      telegram: 'Telegram',
      telegramDesc: 'Connect with Lucy now',
      email: 'Email',
      emailDesc: 'Official correspondence',
      location: 'Location',
      locationDesc: 'Where we are',
      locationCity: 'Batumi, Georgia',
    },

    // Footer
    footer: {
      description: 'Digital agency from Batumi. We create modern web solutions.',
      quickLinks: 'Quick Links',
      services: 'Services',
      webDev: 'Web Development',
      aiIntegration: 'AI Integration',
      pwa: 'PWA Applications',
      seo: 'SEO & Marketing',
      contact: 'Contact',
      copyright: 'All rights reserved.',
      madeWith: 'Made with ❤️ in Batumi',
    },

    // Lucy Chat Widget
    lucyChat: {
      writeToLucy: '💬 Message Lucy!',
      header: '💬 Message Lucy',
      name: 'Name',
      namePlaceholder: 'Your name',
      contact: 'Phone or Email',
      contactPlaceholder: '+995 XXX XX XX XX',
      message: 'Message',
      messagePlaceholder: 'How can I help you?',
      send: 'Send',
      sending: 'Sending...',
      success: 'Thank you!',
      successMessage: 'Lucy will contact you soon!',
      close: 'Close',
      orContact: 'Or contact us:',
    },
  },

  uk: {
    // Navbar
    nav: {
      services: 'Послуги',
      portfolio: 'Портфоліо',
      pricing: 'Ціни',
      about: 'Про нас',
      contact: 'Контакти',
      contactButton: '💬 Написати',
      language: 'Мова',
    },

    // Hero Section
    hero: {
      badge: 'Перше AI агентство в Грузії',
      title1: 'Розвивайте бізнес',
      title2: 'онлайн',
      subtitle1: 'Ми зустрінемо вас там, де ви є — месенджер, email, будь-де.',
      subtitle2: 'Жодних нових додатків.',
      startProject: 'Розпочати проєкт',
      meetLucy: 'Познайомтесь з Lucy',
    },

    // Lucy Section
    lucy: {
      badge: 'Познайомтесь з Lucy',
      title: 'Ваш',
      titleGradient: 'AI помічник',
      title247: '24/7',
      subtitle: 'Lucy — це AI асистент, що надає SiTech суперсили — завжди доступна, завжди готова допомогти',
      greeting: 'Привіт! 👋',
      helpQuestion: 'Як я можу допомогти?',
      name: 'Lucy',
      role: 'SiTech AI Assistant',
      online: 'Онлайн',
      availability: 'Доступність 24/7',
      availabilityDesc: 'Lucy ніколи не спить. Будь-коли, будь-якого дня — готова допомогти',
      instantResponse: 'Миттєві відповіді',
      instantResponseDesc: 'Отримайте відповіді за секунди — без очікування',
      multilingual: 'Багатомовна',
      multilingualDesc: 'Розмовляє грузинською, англійською, українською — ваш вибір',
      teamMember: 'Lucy — це член команди, а не просто інструмент',
      startChat: 'Почати спілкування з Lucy',
    },

    // Services Section
    services: {
      badge: 'Послуги',
      title: 'Що ми',
      titleGradient: 'робимо',
      subtitle: 'Прозорі ціни, якісний сервіс',
      landing: 'Лендінг',
      landingDesc: 'Односторінковий сайт для вашого бізнесу',
      landingPrice: 'від ₾200',
      addLanguage: '+Додати мову',
      addLanguageDesc: 'Додаткова мовна версія',
      addLanguagePrice: '+₾50/мова',
      businessSite: 'Бізнес сайт',
      businessSiteDesc: 'Сайт на 3-5 сторінок',
      businessSitePrice: 'від ₾500',
      complexApp: 'Складний сайт/додаток',
      complexAppDesc: 'Повний функціонал',
      complexAppPrice: 'від ₾1,500',
      paymentIntegration: 'Інтеграція платежів',
      paymentIntegrationDesc: 'TBC, BOG та інші',
      paymentIntegrationPrice: 'від ₾5,000',
      maintenanceSmall: 'Обслуговування (мале)',
      maintenanceSmallDesc: 'Підтримка малих сайтів',
      maintenanceSmallPrice: '₾100/міс',
      maintenanceLarge: 'Обслуговування (велике)',
      maintenanceLargeDesc: 'Підтримка великих проєктів',
      maintenanceLargePrice: 'За домовленістю',
    },

    // Special Offer Section
    specialOffer: {
      badge: '🔥 Спеціальна пропозиція',
      title: 'Для 500 малих підприємців',
      price: 'Професійний лендінг всього за',
      priceAmount: '₾100',
      description: 'Повний сервіс: Дизайн + Розробка + Хостинг перший місяць безкоштовно',
      cta: 'Забронювати місце зараз',
      limited: '⏰ Обмежена кількість • Поспішайте!',
    },

    // Coming Soon Section
    comingSoon: {
      badge: 'Незабаром',
      title: 'Що',
      titleGradient: 'чекає',
      subtitle: 'Незабаром додамо нові послуги',
      aiChatbots: 'AI чатботи',
      aiChatbotsDesc: 'Інтелектуальні боти для вашого бізнесу',
      automation: 'Автоматизація бізнесу',
      automationDesc: 'Автоматизація та оптимізація процесів',
      smm: 'Управління соцмережами',
      smmDesc: 'SMM та контент-менеджмент',
      training: 'Тренінги/Курси',
      trainingDesc: 'Навчання веб-технологіям',
      soon: '🔜 Незабаром',
    },

    // Portfolio Section
    portfolio: {
      badge: 'Портфоліо',
      title: 'Наші',
      titleGradient: 'роботи',
      subtitle: 'Реальні проєкти з реальними результатами',
      ongoing: '🔄 В процесі',
      greenlandTitle: 'Greenland77.ge',
      greenlandDesc: 'Платформа дистрибуції',
      wigTitle: 'WIG',
      wigDesc: 'Бізнес лендінг',
      yourProject: 'Ваш проєкт наступний!',
      yourProjectDesc: 'Збагатіть наше портфоліо вашим унікальним проєктом',
    },

    // Contact Section
    contact: {
      badge: 'Контакти',
      title: 'Давайте',
      titleGradient: 'поговоримо',
      subtitle: 'Розкажіть про вашу ідею — безкоштовна консультація!',
      telegram: 'Telegram',
      telegramDesc: 'Зв\'яжіться з Lucy зараз',
      email: 'Email',
      emailDesc: 'Офіційне листування',
      location: 'Локація',
      locationDesc: 'Де ми знаходимось',
      locationCity: 'Батумі, Грузія',
    },

    // Footer
    footer: {
      description: 'Цифрове агентство з Батумі. Створюємо сучасні веб-рішення.',
      quickLinks: 'Швидкі посилання',
      services: 'Послуги',
      webDev: 'Веб-розробка',
      aiIntegration: 'AI інтеграція',
      pwa: 'PWA додатки',
      seo: 'SEO & Маркетинг',
      contact: 'Контакти',
      copyright: 'Всі права захищені.',
      madeWith: 'Зроблено з ❤️ в Батумі',
    },

    // Lucy Chat Widget
    lucyChat: {
      writeToLucy: '💬 Написати Lucy!',
      header: '💬 Написати Lucy',
      name: 'Ім\'я',
      namePlaceholder: 'Ваше ім\'я',
      contact: 'Телефон або Email',
      contactPlaceholder: '+995 XXX XX XX XX',
      message: 'Повідомлення',
      messagePlaceholder: 'Як я можу допомогти?',
      send: 'Надіслати',
      sending: 'Надсилається...',
      success: 'Дякуємо!',
      successMessage: 'Lucy скоро з вами зв\'яжеться!',
      close: 'Закрити',
      orContact: 'Або зв\'яжіться:',
    },
  },
};

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return the key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
};
