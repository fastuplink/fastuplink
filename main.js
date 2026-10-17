/**
 * FastUplink - Professional IT Solutions Website
 * Core Client-side Interactivity & Bilingual Localization
 */

(function () {
  'use strict';

  // --- Localization Dictionary ---
  const translations = {
    en: {
      langBtn: '🌐 عربي',
      navHome: 'Home',
      navServices: 'Services',
      navCloud: 'Private Cloud',
      navWhy: 'Why FastUplink',
      navAbout: 'About Us',
      navInfra: 'Infrastructure',
      navIndustries: 'Industries',
      navClients: 'Clients',
      navContactBtn: 'Quick Contact',

      // Hero
      heroTag: 'Enterprise IT Solutions & Quick Support',
      heroTitlePrefix: 'No In-House IT? We’ve Got You Covered. ',
      heroTitleHighlight: 'Rapid Support',
      heroTitleSuffix: 'Affordable IT. Fixed Monthly Fee',
      heroSubtitle: 'FastUplink empowers organizations with robust network infrastructure, 24/7 proactive technical support, enterprise cybersecurity, and scalable IT systems tailored to ensure seamless operational continuity.',
      heroPill1: '99.9% Uptime Focus',
      heroPill2: 'Proactive Problem Prevention',
      heroPill3: 'Tailored for Modern Operations',
      heroBtnServices: 'Explore Our Services',
      heroBtnInfra: 'Our Infrastructure',
      statExpNumber: '15+',
      statExpLabel: 'Years IT Experience',
      statSupportNumber: '24/7',
      statSupportLabel: 'Proactive Support',
      statCoreNumber: '8',
      statCoreLabel: 'Core IT Disciplines',

      telemetryTopTitle: 'Network Health',
      telemetryTopVal: '99.98% High Availability',
      telemetryBottomTitle: 'Rapid Response',
      telemetryBottomVal: '< 15 Mins Dispatch',

      // Services
      servicesTag: 'Tailored Capabilities',
      servicesTitle: 'Comprehensive IT Solutions',
      servicesDesc: 'Engineered to support daily commercial operations with zero hassle, high security, and enterprise stability.',

      service1Title: 'Managed IT Support',
      service1Desc: 'Proactive 24/7 monitoring, remote helpdesk, and rapid on-site troubleshooting ensuring uninterrupted workplace productivity.',
      service1f1: '24/7 Proactive Monitoring',
      service1f2: 'Remote & On-site Helpdesk',
      service1f3: 'SLA Guaranteed Response',

      service2Title: 'Network Infrastructure',
      service2Desc: 'Design, deployment, and management of structured cabling, enterprise switches, routers, and high-speed multi-zone Wi-Fi.',
      service2f1: 'Structured High-Speed Cabling',
      service2f2: 'Managed Switches & Routers',
      service2f3: 'High-Density Wi-Fi 6',

      service3Title: 'Cybersecurity & Firewall',
      service3Desc: 'Hardened UTM firewalls, intrusion prevention, endpoint protection, and secure VPN channels safeguarding corporate data.',
      service3f1: 'Next-Gen Firewall Config',
      service3f2: 'Site-to-Site Encrypted VPN',
      service3f3: 'Endpoint Security & Antivirus',

      service4Title: 'Server Administration',
      service4Desc: 'Configuration and maintenance of physical & virtual servers, local private storage systems, and automated disaster recovery.',
      service4f1: 'Windows & Linux Virtualization',
      service4f2: 'Automated Backup Routines',
      service4f3: 'Private On-Prem Cloud Systems',

      service5Title: 'CCTV & Security Systems',
      service5Desc: 'Professional high-definition IP camera installation, NVR management, intelligent motion detection, and remote live viewing.',
      service5f1: 'Ultra HD IP Cameras & NVRs',
      service5f2: 'Remote Mobile & Web Streaming',
      service5f3: 'Night Vision & Motion Alerts',

      service6Title: 'Attendance & Access Control',
      service6Desc: 'Modern biometric fingerprint, facial recognition, and smart RFID card systems paired with centralized management reports.',
      service6f1: 'Biometric & Facial Terminals',
      service6f2: 'Automated Shift & Attendance Logs',
      service6f3: 'Secure Electronic Door Locks',

      service7Title: 'Workstation & Hardware Care',
      service7Desc: 'Hardware diagnosis, workstation maintenance, thermal optimization, component upgrades, and networked printer management.',
      service7f1: 'PC & Laptop Fleet Maintenance',
      service7f2: 'Network Printer Configurations',
      service7f3: 'Hardware Upgrades & Diagnostics',

      service8Title: 'Business Email & Web Admin',
      service8Desc: 'Corporate email hosting setups (Google Workspace / Microsoft 365), DNS management, and business website infrastructure administration.',
      service8f1: 'Corporate Email Deployments',
      service8f2: 'DNS, Domain & SSL Management',
      service8f3: 'Reliable Hosting Supervision',

      // Private Cloud Showcase (Zero Monthly Subscriptions)
      cloudTag: 'Zero Recurring Fees',
      cloudTitlePrefix: 'Own Your Enterprise Private Cloud — ',
      cloudTitleHighlight: 'No Monthly Fees',
      cloudSubtitle: 'Say goodbye to recurring cloud storage fees. FastUplink deploys and manages an enterprise-grade private cloud server on your premises, giving your business 100% data ownership, ultra-fast LAN speeds, and bank-level remote access from anywhere.',
      cloudBenefit1Title: 'Zero Monthly Subscriptions',
      cloudBenefit1Desc: 'One-time setup cost with zero recurring monthly bills or per-user license fees. Eliminate expensive recurring public cloud charges.',
      cloudBenefit2Title: '100% Privacy & Full Ownership',
      cloudBenefit2Desc: 'Your sensitive files and company databases remain entirely in your hands, hosted locally without third-party exposure.',
      cloudBenefit3Title: 'Secure Remote Access Anywhere',
      cloudBenefit3Desc: 'Seamless synchronization across Windows, Mac, iOS, and Android with encrypted tunnel connections for your entire team.',
      cloudBenefit4Title: 'Blazing Fast Local Sync',
      cloudBenefit4Desc: 'Instant file sharing and large file transfers at maximum local network speeds without consuming your office internet bandwidth.',
      cloudBadge1: 'Pay Once & Own Forever',
      cloudFloat1Val: '$0 / Month',
      cloudFloat1Lbl: 'No Recurring Fees',
      cloudFloat2Val: '100% Ownership',
      cloudFloat2Lbl: 'Full Data Control',
      cloudBtnCta: 'Request Private Cloud Setup',

      // Why Choose FastUplink
      whyTag: 'Operational Advantage',
      whyTitle: 'Why Partner With FastUplink',
      whyDesc: 'We move beyond reactive fixes to deliver reliable, enterprise-grade technology management that accelerates organizational growth.',

      why1Title: 'Reliable Technical Support',
      why1Desc: 'Direct access to certified engineers who resolve urgent IT issues through rapid remote diagnosis or immediate on-site dispatch.',

      why2Title: 'Proactive Problem Prevention',
      why2Desc: 'Automated health telemetry and predictive checks resolve bottlenecks before they disrupt staff workflow or customer service.',

      why3Title: 'Business-Focused IT Solutions',
      why3Desc: 'We align technical architectures directly with your commercial goals, eliminating needless overhead and vendor lock-in.',

      why4Title: 'Network Security & Stability',
      why4Desc: 'Multi-layer defense architectures that protect proprietary data, isolate guest access, and defend against unauthorized intrusion.',

      why5Title: 'Tailored Practical Solutions',
      why5Desc: 'Custom-fit architectures engineered specifically for corporate offices, hotels, medical centers, restaurants, and retail spaces.',

      why6Title: 'Long-Term Tech Partnership',
      why6Desc: 'We serve as your dedicated external IT department, offering lifecycle planning, technology roadmaps, and scalable upgrades.',

      // About Us
      aboutTag: 'Engineering Heritage',
      aboutTitle: 'Over 15 Years of Hands-On IT Excellence',
      aboutP1: 'FastUplink is a premier Egyptian IT solutions provider with more than 15 years of specialized engineering experience in networking, systems administration, physical security, and infrastructure architecture.',
      aboutP2: 'We empower commercial organizations, hotels, corporate offices, and institutions with rock-solid technology foundations. Our approach is grounded in technical rigor, responsive problem solving, and zero operational downtime.',

      aboutH1Title: 'Certified Engineering',
      aboutH1Desc: 'Practical hands-on expertise across leading enterprise hardware vendors and platforms.',
      aboutH2Title: 'Zero Downtime Philosophy',
      aboutH2Desc: 'Proactive maintenance routines designed to protect continuous business operations.',

      aboutExpTitle: 'Years of Technical Experience',
      aboutCheck1: 'Proven infrastructure track record across diverse commercial sectors',
      aboutCheck2: 'Tailored networking, security, and hardware management',
      aboutCheck3: 'Rapid emergency response and continuous system health checks',
      aboutCheck4: 'Zero fake bloatware — practical, high-impact business IT',

      // Tech & Infrastructure
      infraTag: 'Hardware & Standards',
      infraTitle: 'Enterprise Technology & Infrastructure',
      infraDesc: 'High-performance hardware setups engineered for durability, data integrity, and high throughput.',

      infra1Title: 'Servers & Virtualization',
      infra1Desc: 'Rack-mount servers, VMware/Proxmox hypervisors, fault-tolerant RAID storage, and private on-premise cloud repositories.',

      infra2Title: 'Managed Switches & Wi-Fi',
      infra2Desc: 'Layer 2/3 PoE+ managed switches, VLAN network segmentation, and multi-access point enterprise Wi-Fi 6 coverage.',

      infra3Title: 'Firewalls & Security Appliances',
      infra3Desc: 'Hardened UTM firewalls, deep packet inspection, automated intrusion prevention, and secure encrypted VPN tunnels.',

      infra4Title: 'Business IT Redundancy',
      infra4Desc: 'Clean cable management, labeled patch panels, online UPS power protection, and automated multi-destination backups.',

      // Industries
      industriesTag: 'Sectors We Serve',
      industriesTitle: 'Specialized for Commercial Environments',
      industriesDesc: 'Configured to meet the specific operational and compliance demands of distinct business sectors.',
      ind1: 'Offices & Corporate Hubs',
      ind2: 'Hotels & Hospitality',
      ind3: 'Medical Clinics & Health',
      ind4: 'Restaurants & Cafes',
      ind5: 'Logistics & Commercial',

      // Clients
      clientsTag: 'Trusted Track Record',
      clientsTitle: 'Valued Success Partners',
      clientsDesc: 'Proudly serving leading commercial enterprises, hotels, and industry leaders with dedicated IT support.',

      // Closing CTA
      closingTag: 'Get Connected',
      closingTitle: 'Ready to Upgrade Your Organization’s IT Stability?',
      closingDesc: 'Experience reliable technical support, proactive system maintenance, and enterprise infrastructure designed for your business continuity.',
      closingBtnContact: 'Connect With Our Engineers',
      closingBtnCall: 'Call +20 103 950 1190',

      directPhoneLabel: 'Direct Phone Line',
      directPhoneVal: '+20 103 950 1190',
      directEmailLabel: 'Official Correspondence',
      directEmailVal: 'info@fastuplink.com',
      directLocLabel: 'Office Headquarters',
      directLocVal: 'Alexandria, Egypt',

      // Footer
      footerAbout: 'FastUplink provides enterprise-grade IT solutions, managed technical support, network engineering, and infrastructure consulting for small and medium businesses.',
      footerColNav: 'Navigation',
      footerColServices: 'Services',
      footerColContact: 'Contact Details',
      footerCopyright: '© 2026 FastUplink IT Solutions. All rights reserved.',
      footerTagline: 'IT Solutions & Quick Support',

      // Modal
      modalTag: 'Direct Communication',
      modalTitle: 'Get in Touch with FastUplink',
      modalDesc: 'Choose your preferred channel for immediate technical consultation or contract support.',
      modalCallBtn: 'Call Now',
      modalWhatsAppBtn: 'Open WhatsApp',
      modalEmailBtn: 'Send Email'
    },
    ar: {
      langBtn: '🌐 English',
      navHome: 'الرئيسية',
      navServices: 'خدماتنا',
      navCloud: 'السحابة الخاصة',
      navWhy: 'لماذا فاست أب لينك',
      navAbout: 'من نحن',
      navInfra: 'البنية التحتية',
      navIndustries: 'القطاعات',
      navClients: 'شركاؤنا',
      navContactBtn: 'تواصل سريع',

      // Hero
      heroTag: 'حلول تكنولوجيا المعلومات والدعم الفني السريع',
      heroTitlePrefix: 'ما عندكش IT داخلي؟ بنوفر لك ',
      heroTitleHighlight: 'دعم فني فوري',
      heroTitleSuffix: ' وبـ أقل التكاليف لتطوير شركتك باشتراك شهري ثابت',
      heroSubtitle: 'تمكّن شركة FastUplink المؤسسات والشركات من إدارة بنيتها الرقمية بكفاءة فائقة، عبر دعم فني استباقي 24/7، وشبكات عالية الأداء، وأمن سيبراني متقدم يضمن استمرارية الأعمال دون انقطاع.',
      heroPill1: 'جاهزية واستقرار بنسبة 99.9%',
      heroPill2: 'وقاية استباقية من الأعطال',
      heroPill3: 'حلول مصممة للشركات والمنشآت',
      heroBtnServices: 'استكشف خدماتنا',
      heroBtnInfra: 'البنية التحتية التقنية',
      statExpNumber: '+15',
      statExpLabel: 'عاماً من الخبرة التقنية',
      statSupportNumber: '24/7',
      statSupportLabel: 'دعم فني واستجابة سريعة',
      statCoreNumber: '8',
      statCoreLabel: 'تخصصات تقنية رئيسية',

      telemetryTopTitle: 'حالة الشبكة',
      telemetryTopVal: 'جاهزية واستقرار 99.98%',
      telemetryBottomTitle: 'سرعة الاستجابة',
      telemetryBottomVal: 'أقل من 15 دقيقة',

      // Services
      servicesTag: 'قدراتنا التقنية المتكاملة',
      servicesTitle: 'حلول IT متكاملة للمؤسسات والشركات',
      servicesDesc: 'مصممة خصيصاً لدعم العمليات اليومية بكفاءة متناهية، أمان عالي، واستقرار تقني مستدام.',

      service1Title: 'الدعم الفني المدار (Managed IT)',
      service1Desc: 'مراقبة استباقية 24/7، دعم فني عن بُعد، وزيارات ميدانية فورية لحل أي طارئ تقني وضمان استمرارية إنتاجية الموظفين.',
      service1f1: 'مراقبة ومتابعة على مدار الساعة',
      service1f2: 'دعم فني فوري عن بعد وحضوري',
      service1f3: 'التزام باتفاقيات مستوى الخدمة (SLA)',

      service2Title: 'البنية التحتية والشبكات',
      service2Desc: 'تصميم وتنفيذ شبكات الكابلات المنظمة، السويتشات المدارة، أجهزة التوجيه، وتغطية شبكات الواي فاي للشركات عالية الكثافة.',
      service2f1: 'تمديدات شبكات وكابلات عالية السرعة',
      service2f2: 'إدارة وتوزيع السويتشات الذكية',
      service2f3: 'تغطيات Wi-Fi 6 للمساحات التجارية',

      service3Title: 'الأمن السيبراني والجدران النارية',
      service3Desc: 'تأمين كامل للمعلومات عبر جدران نارية متطورة (Firewall)، مكافحة التهديدات، حماية الأجهزة، وشبكات VPN آمنة بين الفروع.',
      service3f1: 'إعداد وحماية الجدران النارية (UTM)',
      service3f2: 'ربط الفروع بنفق VPN مشفر وآمن',
      service3f3: 'حماية الأجهزة ومكافحة الاختراقات',

      service4Title: 'إدارة الخوادم والأنظمة',
      service4Desc: 'تهيئة وإدارة خوادم Windows و Linux، بيئات المحاكاة الافتراضية (VMware/Proxmox)، والنسخ الاحتياطي التلقائي الآمن.',
      service4f1: 'أنظمة خوادم ومحاكاة افتراضية',
      service4f2: 'جدولة نسخ احتياطي دوري ومؤمن',
      service4f3: 'سحابة خاصة للشركات بدون اشتراك شهري',

      service5Title: 'أنظمة كاميرات المراقبة (CCTV)',
      service5Desc: 'توريد وتركيب كاميرات المراقبة الشبكية عالية الدقة IP، أجهزة تسجيل NVR، متابعة مباشرة عبر الهاتف، وتسجيل مستمر 24/7.',
      service5f1: 'كاميرات IP متطورة فائقة الوضوح',
      service5f2: 'بث ومتابعة حية عبر الهواتف والكمبيوتر',
      service5f3: 'رؤية ليلية وتنبيهات ذكية للحركة',

      service6Title: 'أنظمة البصمة والتحكم في الدخول',
      service6Desc: 'أجهزة بصمة الإصبع، التعرف على الوجه، والكروت الذكية، مع ربطها ببرامج تقارير الحضور والانصراف وأقفال الأبواب الإلكترونية.',
      service6f1: 'أجهزة بصمة الوجه والإصبع المتطورة',
      service6f2: 'تقارير حضور وانصراف وساعات العمل',
      service6f3: 'أنظمة إقفال إلكتروني وتحكم بالدخول',

      service7Title: 'صيانة الحواسيب والأجهزة',
      service7Desc: 'تشخيص الأعطال، الصيانة الوقائية للأجهزة، ترقية المكونات، وتهيئة الطابعات الشبكية ومعدات المكاتب لتعمل بكفاءة مستمرة.',
      service7f1: 'صيانة دورية لحواسيب الموظفين',
      service7f2: 'تعريف وتأمين الطابعات المشتركة',
      service7f3: 'فحص عتادي وترقية أداء الأنظمة',

      service8Title: 'البريد المؤسسي وإدارة المواقع',
      service8Desc: 'إنشاء وإدارة إيميلات الشركات الرسمية (Google Workspace / Microsoft 365)، ضبط إعدادات DNS، والإشراف التقني على النطاقات والمواقع.',
      service8f1: 'إعداد حسابات البريد الإلكتروني الرسمي',
      service8f2: 'إدارة النطاقات، شهادات SSL و DNS',
      service8f3: 'إشراف تقني متكامل على منصات العمل',

      // Private Cloud Showcase (Zero Monthly Subscriptions)
      cloudTag: 'سحابة خاصة للشركات | بدون اشتراكات شهرية',
      cloudTitlePrefix: 'امتلك سحابة شركتك الخاصة.. ',
      cloudTitleHighlight: 'وداعاً للاشتراكات الشهرية',
      cloudSubtitle: 'نوفر لمؤسستك سحابة تخزين وملفات خاصة (Private Cloud) متطورة داخل مقرك، تمنحك تحكماً كاملاً بنسبة 100% في بياناتك وملفاتك، مع سرعة نقل فائقة داخل الشبكة المحلية ووصول آمن ومشفّر من أي مكان في العالم عبر الهواتف والحواسيب.. وبدون أي رسوم شهرية متكررة.',
      cloudBenefit1Title: 'بدون أي اشتراكات شهرية متكررة',
      cloudBenefit1Desc: 'استثمار لمرة واحدة فقط لامتلاك السيرفر والتجهيز، بدون دفع رسوم اشتراك شهرية أو سنوية بالدولار لكل موظف كما في السحابات العامة.',
      cloudBenefit2Title: 'ملكية وخصوصية كاملة 100%',
      cloudBenefit2Desc: 'بيانات وملفات شركتك الحساسة تظل بالكامل تحت سيطرتك المباشرة داخل شركتك بعيداً عن أعين شركات التخزين السحابي الخارجية.',
      cloudBenefit3Title: 'وصول مشفّر من أي مكان بالعالم',
      cloudBenefit3Desc: 'مزامنة فورية وتطبيقات سهلة على الهواتف الذكية (iOS و Android) وأجهزة الكمبيوتر، مع تشفير بنكي صارم يضمن أعلى مستويات الأمان.',
      cloudBenefit4Title: 'سرعة نقل فائقة ومساحات ضخمة',
      cloudBenefit4Desc: 'مشاركة ونقل الملفات الضخمة والفيديوهات بسرعة الشبكة الداخلية (LAN) دون استهلاك لباقة إنترنت الشركة، مع إمكانية التوسعة بلا حدود.',
      cloudBadge1: 'ادفع مرة واحدة وتملك للأبد',
      cloudFloat1Val: '0 $ / شهر',
      cloudFloat1Lbl: 'بدون أي اشتراك شهري',
      cloudFloat2Val: 'ملكية 100%',
      cloudFloat2Lbl: 'تحكم كامل ببياناتك',
      cloudBtnCta: 'اطلب تجهيز سحابتك الخاصة الآن',

      // Why Choose FastUplink
      whyTag: 'ميزتنا التشغيلية',
      whyTitle: 'لماذا تختار الشراكة مع FastUplink',
      whyDesc: 'نحن لا نقدم مجرد صيانة تقليدية، بل نبني بيئة تقنية مستقرة ومحكمة تعزز من وتيرة نمو أعمالك وتحمي أصولك الرقمية.',

      why1Title: 'دعم فني موثوق وسريع',
      why1Desc: 'تواصل مباشر مع مهندسين محترفين مؤهلين لحل أي مشكلة تقنية فوراً عبر الدعم عن بعد أو التحرك الميداني السريع.',

      why2Title: 'وقاية استباقية من المشكلات',
      why2Desc: 'مراقبة وفحوصات دورية للأجهزة والشبكات تكتشف الاختناقات والأخطاء قبل أن تؤثر على سير العمل وإنتاجية فريقك.',

      why3Title: 'حلول مبنية لأهداف الأعمال',
      why3Desc: 'نصمم الأنظمة والشبكات بما يتوافق بدقة مع نشاط شركتك التجاري وتحدياتك اليومية دون تحميلك أعباء مالية غير مجدية.',

      why4Title: 'أمن واستقرار فائق للشبكات',
      why4Desc: 'طبقات حماية متقدمة تؤمن بياناتك الحساسة، تعزل شبكة الزوار عن بيانات العمل، وتحمي المنشأة من الاختراقات.',

      why5Title: 'حلول عملية ومفصلة لشركتك',
      why5Desc: 'تجهيزات مدروسة ومخصصة لمختلف الأنشطة: مكاتب الشركات، الفنادق، المراكز الطبية، المطاعم، والمجمعات التجارية.',

      why6Title: 'شراكة تقنية طويلة الأجل',
      why6Desc: 'نعمل كقسم تكنولوجيا المعلومات الداخلي لشركتك، نقدم استشارات استراتيجية وخطط تطوير تواكب نمو أعمالك سنة بعد سنة.',

      // About Us
      aboutTag: 'خبرتنا التقنية',
      aboutTitle: 'أكثر من 15 عاماً من الخبرة التقنية المتخصصة',
      aboutP1: 'تعتبر شركة FastUplink من الشركات الرائدة في تقديم حلول تكنولوجيا المعلومات المتكاملة في مصر، بخبرة هندسية وميدانية تمتد لأكثر من 15 عاماً في تأسيس وإدارة الشبكات، الأنظمة، الأمن، والبنية التحتية الرقمية.',
      aboutP2: 'نقدم خدماتنا للمنشآت التجارية، الفنادق، الشركات، والعيادات، ونحرص على توفير بيئة عمل تقنية مستقرة وآمنة تتيح لعملائنا التركيز الكامل على تنمية أعمالهم دون القلق من الأعطال أو توقف الأنظمة.',

      aboutH1Title: 'فريق هندسي مؤهل',
      aboutH1Desc: 'خبرة عملية متمرسة في كبرى معايير ومنتجات العتاد والشبكات العالمية.',
      aboutH2Title: 'فلسفة استقرار بنسبة 100%',
      aboutH2Desc: 'إجراءات صيانة وقائية وخطط طوارئ مدروسة تحافظ على سير العمل بدون توقف.',

      aboutExpTitle: 'سنة من الخبرة العملية',
      aboutCheck1: 'سجل حافل من المشاريع الناجحة في مختلف القطاعات التجارية',
      aboutCheck2: 'إدارة متكاملة للبنية التحتية، الأمان، ومعدات المكاتب',
      aboutCheck3: 'استجابة سريعة للأعطال الطارئة ومتابعة دورية لحالة الأنظمة',
      aboutCheck4: 'حلول واقعية وعملية تعطي أعلى عائد على استثمارك التقني',

      // Tech & Infrastructure
      infraTag: 'العتاد والمعايير',
      infraTitle: 'البنية التحتية وتجهيزات الشركات',
      infraDesc: 'معدات وتقنيات مؤسسية مختارة بعناية لضمان أعلى درجات الاعتمادية والسرعة والأمان.',

      infra1Title: 'الخوادم والأنظمة الافتراضية',
      infra1Desc: 'خوادم رفوف (Rack Servers)، منصات المحاكاة VMware و Proxmox، مصفوفات تخزين RAID، وسحابة خاصة لحفظ البيانات داخلياً.',

      infra2Title: 'السويتشات وشبكات Wi-Fi المدارة',
      infra2Desc: 'سويتشات PoE+ الذكية، تقسيم الشبكات الافتراضية (VLAN)، ونقاط وصول Wi-Fi 6 لتغطية متصلة وثابتة لكافة مساحات العمل.',

      infra3Title: 'الجدران النارية وأجهزة الحماية',
      infra3Desc: 'أجهزة أمان مادية متخصصة (Firewall)، فحص دقيق لحزم البيانات، منع الاختراقات، وربط مشفر متعدد الفروع (VPN).',

      infra4Title: 'تنظيم الكبائن واعتمادية الطاقة',
      infra4Desc: 'تنظيم واحترافية كابلات التوصيل والـ Patch Panels، وحدات بطاريات الطوارئ (UPS)، وأنظمة النسخ الاحتياطي التلقائي.',

      // Industries
      industriesTag: 'القطاعات المستفيدة',
      industriesTitle: 'حلول مخصصة لمختلف بيئات الأعمال',
      industriesDesc: 'تجهيزات تقنية تتناسب مع الطبيعة التشغيلية لكل نشاط تجاري ومتطلباته اليومية.',
      ind1: 'الشركات والمكاتب الإدارية',
      ind2: 'الفنادق والضيافة',
      ind3: 'العيادات والمراكز الطبية',
      ind4: 'المطاعم والكافيهات',
      ind5: 'المستودعات والمراكز التجارية',

      // Clients
      clientsTag: 'شركاء المسيرة',
      clientsTitle: 'شركاء النجاح',
      clientsDesc: 'نفخر بتقديم خدمات الدعم الفني وتأسيس البنية التحتية لكبرى الشركات والمنشآت المرموقة.',

      // Closing CTA
      closingTag: 'تواصل مباشر',
      closingTitle: 'جاهز لترقية واستقرار أنظمة شركتك التقنية؟',
      closingDesc: 'استمتع بدعم فني سريع وموثوق وبنية تحتية تحمي أعمالك وتضمن تشغيلها بأعلى كفاءة مع فريق FastUplink.',
      closingBtnContact: 'تواصل مع فريقنا الهندسي',
      closingBtnCall: 'اتصل بنا: 01039501190',

      directPhoneLabel: 'هاتف التواصل المباشر',
      directPhoneVal: '01039501190',
      directEmailLabel: 'البريد الإلكتروني الرسمي',
      directEmailVal: 'info@fastuplink.com',
      directLocLabel: 'مقر الشركة',
      directLocVal: 'الإسكندرية - الجمرك - شارع أبو وردة',

      // Footer
      footerAbout: 'شركة FastUplink متخصصة في تقديم حلول تكنولوجيا المعلومات، الدعم الفني المدار، تأسيس الشبكات، وتأمين البنية التحتية للشركات والمنشآت التجارية.',
      footerColNav: 'روابط سريعة',
      footerColServices: 'خدماتنا الرئيسية',
      footerColContact: 'معلومات الاتصال',
      footerCopyright: 'جميع الحقوق محفوظة © 2026 شركة فاست أب لينك (FastUplink).',
      footerTagline: 'حلول تكنولوجيا المعلومات والدعم السريع',

      // Modal
      modalTag: 'اتصال مباشر',
      modalTitle: 'تواصل مباشرة مع فاست أب لينك',
      modalDesc: 'اختر الطريقة الأنسب لك للتواصل الفوري مع مهندسينا للاستشارة أو الدعم الفني.',
      modalCallBtn: 'اتصال هاتفي',
      modalWhatsAppBtn: 'محادثة واتساب',
      modalEmailBtn: 'إرسال بريد إلكتروني'
    }
  };

  let currentLanguage = 'en';

  // --- Initialize App ---
  function init() {
    // Check saved language or default to 'en'
    const savedLang = localStorage.getItem('fastuplink_lang');
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      currentLanguage = savedLang;
    }

    applyLanguage(currentLanguage);

    setupPreloader();
    setupHeaderScroll();
    setupMobileMenu();
    setupSmoothScrollSpy();
    setupContactModal();
  }

  // --- Original FastUplink Preloader Dismiss ---
  function setupPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    let dismissed = false;
    function dismiss() {
      if (dismissed) return;
      dismissed = true;
      preloader.classList.add('hide');
      setTimeout(function () {
        preloader.style.display = 'none';
      }, 800);
    }

    // Dismiss after the golden progress bar fills
    setTimeout(dismiss, 2400);

    window.addEventListener('load', function () {
      setTimeout(dismiss, 2400);
    });
  }

  // --- Language Switching ---
  function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('fastuplink_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const t = translations[lang];

    // Language button text
    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) langBtn.textContent = t.langBtn;

    const mobileLangBtn = document.getElementById('mobile-lang-toggle-btn');
    if (mobileLangBtn) mobileLangBtn.textContent = t.langBtn;

    // Translate all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    // Translate any elements with data-i18n-html
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update title
    document.title = lang === 'ar'
      ? 'فاست أب لينك | حلول تكنولوجيا المعلومات والدعم الفني السريع'
      : 'FastUplink | Enterprise IT Solutions & Quick Support';
  }

  // Expose toggle language globally for click handler
  window.toggleLanguage = function () {
    const nextLang = currentLanguage === 'en' ? 'ar' : 'en';
    applyLanguage(nextLang);
  };

  // --- Sticky Header on Scroll ---
  function setupHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    function handleScroll() {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // --- Mobile Menu Drawer ---
  function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-trigger');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (!menuBtn || !drawer) return;

    function toggleMenu() {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    function openMenu() {
      drawer.classList.add('open');
      menuBtn.classList.add('active');
      menuBtn.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      drawer.classList.remove('open');
      menuBtn.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }

    menuBtn.addEventListener('click', toggleMenu);

    // Close when clicking any nav link in mobile drawer
    const drawerLinks = drawer.querySelectorAll('.nav-link, button');
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // --- Scroll Spy & Active Nav Link Highlighting ---
  function setupSmoothScrollSpy() {
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const sections = [];

    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const sec = document.querySelector(href);
        if (sec) {
          sections.push({ link: link, section: sec });
        }
      }
    });

    function highlightActiveLink() {
      const scrollPos = window.scrollY + 120;
      let currentSectionId = null;

      sections.forEach(function (item) {
        const top = item.section.offsetTop;
        const height = item.section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = item.link;
        }
      });

      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      if (currentSectionId) {
        currentSectionId.classList.add('active');
      } else if (sections.length > 0 && window.scrollY < 200) {
        sections[0].link.classList.add('active');
      }
    }

    window.addEventListener('scroll', highlightActiveLink, { passive: true });
    highlightActiveLink();
  }

  // --- Quick Contact Info Modal (Direct Links, No Form) ---
  function setupContactModal() {
    const modal = document.getElementById('contact-info-modal');
    const closeBtn = document.getElementById('modal-close-button');
    if (!modal) return;

    window.openContactModal = function () {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    window.closeContactModal = function () {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', window.closeContactModal);
    }

    // Click outside to close
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        window.closeContactModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        window.closeContactModal();
      }
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
