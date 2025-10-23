// بيانات الفعاليات الموحدة - جميع التواريخ 2026
const eventsData = [
    {
        id: 1,
        title: "مهرجان الموسيقى السنوي",
        category: "موسيقى",
        date: "2026-03-15",
        location: "ساحة المدينة المركزية",
        description: "استمتع بأمسية موسيقية رائعة مع أشهر الفنانين المحليين والعالميين في أضخم مهرجان موسيقي بالمدينة.",
        image: "https://i.pinimg.com/1200x/84/b6/e5/84b6e5633a19bb22743094c02cd81bd5.jpg",
        featured: true,
        organizer: "وزارة الثقافة",
        contact: "culture@damascus.gov.sy",
        duration: "4 ساعات",
        ticketType: "مدفوعة - 5000 ل.س",
        language: "العربية والإنجليزية",
        accessibility: "نعم"
    },
    {
        id: 2,
        title: "معرض الفنون التشكيلية",
        category: "فنون",
        date: "2026-04-05",
        location: "المتحف الوطني",
        description: "استكشاف لأعمال فنية مذهلة لفنانين محليين ودوليين في مختلف المجالات.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        organizer: "المتحف الوطني",
        contact: "museum@damascus.gov.sy",
        duration: "طوال اليوم",
        ticketType: "مجانية",
        language: "العربية",
        accessibility: "نعم"
    },
    {
        id: 3,
        title: "حفل موسيقى الجاز الليلي",
        category: "موسيقى",
        date: "2026-04-12",
        location: "حديقة الجاحظ",
        description: "أمسية استثنائية لمحبي موسيقى الجاز مع أشهر العازفين المحليين.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        organizer: "نادي الجاز السوري",
        contact: "jazz@damascus.com",
        duration: "3 ساعات",
        ticketType: "مدفوعة - 3000 ل.س",
        language: "العربية والإنجليزية",
        accessibility: "نعم"
    },
    {
        id: 4,
        title: "بطولة كرة السلة للشباب",
        category: "رياضة",
        date: "2026-04-18",
        location: "النادي الرياضي",
        description: "منافسة قوية بين فرق الشباب المحلية على لقب بطولة المدينة.",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        organizer: "اتحاد كرة السلة",
        contact: "basketball@sports.sy",
        duration: "6 ساعات",
        ticketType: "مجانية",
        language: "العربية",
        accessibility: "نعم"
    },
    {
        id: 5,
        title: "مهرجان المأكولات الشامية",
        category: "طعام",
        date: "2026-04-25",
        location: "ساحة الأمويين",
        description: "استمتع بأشهر المأكولات الشامية التقليدية من أفضل المطاعم والمطابخ المنزلية في دمشق.",
        image: "https://images.stockcake.com/public/7/e/5/7e59b229-0f1f-4a65-b6fd-04caa5dcd205_large/chefs-preparing-food-stockcake.jpg",
        featured: false,
        organizer: "اتحاد المطاعم السورية",
        contact: "food@damascus.com",
        duration: "8 ساعات",
        ticketType: "مدفوعة - 2000 ل.س",
        language: "العربية",
        accessibility: "نعم"
    },
    {
        id: 6,
        title: "ماراثون دمشق الخيري",
        category: "رياضة",
        date: "2026-05-01",
        location: "حديقة السبكي",
        description: "ماراثون خيري لمسافة 10 كم لدعم المشافي والمؤسسات الخيرية في دمشق.",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: true,
        organizer: "بلدية دمشق",
        contact: "marathon@damascus.gov.sy",
        duration: "5 ساعات",
        ticketType: "تبرع اختياري",
        language: "العربية",
        accessibility: "نعم"
    },
    {
        id: 7,
        title: "معرض الكتاب المستعمل",
        category: "ثقافة",
        date: "2026-05-08",
        location: "جامعة دمشق",
        description: "معرض للكتاب المستعمل يضم آلاف العناوين في مختلف المجالات والمعارف.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        organizer: "نادي القراءة",
        contact: "books@damascus.com",
        duration: "طوال اليوم",
        ticketType: "مجانية",
        language: "العربية",
        accessibility: "نعم"
    },
    {
        id: 8,
        title: "مهرجان القهوة السورية",
        category: "طعام",
        date: "2026-05-15",
        location: "ساحة الأمويين",
        description: "تجربة فريدة لأنواع القهوة السورية التقليدية مع عروض تحضير القهوة بالطرق التقليدية.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        organizer: "اتحاد محمصات القهوة",
        contact: "coffee@damascus.com",
        duration: "6 ساعات",
        ticketType: "مدفوعة - 1500 ل.س",
        language: "العربية",
        accessibility: "نعم"
    },
    {
        id: 9,
        title: "معرض الحرف اليدوية",
        category: "فنون",
        date: "2026-05-22",
        location: "مديرية الثقافة",
        description: "عرض للحرف اليدوية التقليدية السورية من فنون الزجاج والنحاس والتطريز.",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        organizer: "جمعية الحرف اليدوية",
        contact: "crafts@damascus.com",
        duration: "طوال اليوم",
        ticketType: "مجانية",
        language: "العربية",
        accessibility: "نعم"
    },
    {
        id: 10,
        title: "ندوة الأدب السوري المعاصر",
        category: "ثقافة",
        date: "2026-05-29",
        location: "المركز الثقافي العربي",
        description: "ندوة نقاشية حول تطور الأدب السوري المعاصر وإسهاماته في المشهد الثقافي العربي.",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        featured: false,
        organizer: "اتحاد الكتاب العرب",
        contact: "literature@awu.sy",
        duration: "4 ساعات",
        ticketType: "مجانية",
        language: "العربية",
        accessibility: "نعم"
    }
];

// صور المواقع
const locationImages = {
    "ساحة المدينة المركزية": "images/locations/ساحة المدينة المركزية.jpg",
    "المتحف الوطني": "images/locations/المتحف الوطني.jpg",
    "جامعة دمشق": "images/locations/جامعة دمشق.jpg",
    "ساحة الأمويين": "images/locations/ساحة الأمويين.jpg",
    "حديقة الجاحظ": "images/locations/حديقة الجاحظ.jpg",
    "حديقة السبكي": "images/locations/حديقة السبكي.jpg",
    "مديرية الثقافة": "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=8",
    "المركز الثقافي العربي": "images/locations/المركز الثقافي العربي.jpg"
};

// نظام الترجمة متعدد اللغات
const translations = {
    ar: {
        // التنقل
        "home": "الرئيسية",
        "events": "الفعاليات", 
        "about": "عن الدليل",
        "contact": "اتصل بنا",
        "siteTitle": "دليل فعاليات المدينة",
        
        // الصفحة الرئيسية
        "discoverEvents": "اكتشف أفضل الفعاليات في مدينتك",
        "comprehensiveGuide": "دليلك الشامل لأهم الأحداث الثقافية، الرياضية، الموسيقية والعائلية القادمة في العاصمة دمشق",
        "exploreEvents": "استكشف الفعاليات",
        "quickCategories": "التصنيف السريع",
        "featuredEvents": "فعاليات بارزة هذا الأسبوع",
        "dontMiss": "أهم الأحداث التي لا يجب أن تفوتها",
        "latestEvents": "أحدث الفعاليات",
        "discoverNew": "اكتشف الجديد في عالم الفعاليات",
        "viewAllEvents": "عرض جميع الفعاليات",
        "stayUpdated": "ابقى على اطلاع بأخر الفعاليات والعروض الخاصة",
        "ourTeam": "فريقنا المتخصص يضمن لك الحصول على أفضل التجارب",
        "subscribeNewsletter": "اشترك في نشرتنا البريدية",
        "stayInformed": "ابق على اطلاع بآخر الفعاليات والعروض الخاصة",
        "yourEmail": "بريدك الإلكتروني",
        "subscribe": "اشتراك",
        
        // التصنيفات
        "music": "موسيقى",
        "sports": "رياضة", 
        "food": "طعام",
        "arts": "فنون",
        "culture": "ثقافة",
        "eventsCount": "فعالية",
        
        // صفحة الفعاليات
        "allEvents": "جميع الفعاليات في دمشق",
        "searchEvents": "ابحث عن الفعاليات أو قم بتصفية حسب التصنيف، التاريخ، أو الموقع",
        "searchPlaceholder": "ابحث عن فعالية...",
        "all": "الكل",
        "allLocations": "جميع المواقع",
        "filterByDate": "تصفية حسب التاريخ",
        "clear": "مسح",
        "showingResults": "عرض {count} من {total} فعالية",
        "noResults": "لا توجد فعاليات تطابق معايير البحث",
        "tryChanging": "جرب تغيير كلمات البحث أو معايير الفلترة",
        
        // صفحة التفاصيل
        "backToEvents": "العودة للفعاليات",
        "eventDetails": "تفاصيل الفعالية",
        "dateTime": "التاريخ والوقت",
        "location": "الموقع", 
        "category": "التصنيف",
        "expectedAttendance": "الحضور المتوقع",
        "openToAll": "مفتوح للجميع",
        "locationGallery": "موقع الفعالية",
        "addToCalendar": "أضف إلى التقويم",
        "share": "مشاركة",
        "register": "التسجيل",
        "additionalInfo": "معلومات إضافية",
        "duration": "المدة",
        "ticketType": "نوع التذكرة",
        "language": "اللغة",
        "accessibility": "ملائمة لذوي الاحتياجات",
        "quickInfo": "معلومات سريعة",
        "eventStatus": "حالة الفعالية",
        "upcoming": "قادمة",
        "soon": "قريبة", 
        "ended": "منتهية",
        "daysRemaining": "الأيام المتبقية",
        "organizer": "المنظم",
        "similarEvents": "فعاليات مشابهة",
        "noSimilarEvents": "لا توجد فعاليات مشابهة",
        
        // صفحة عن الدليل
        "aboutGuide": "عن دليل فعاليات المدينة", 
        "ourVision": "رؤيتنا",
        "visionText": "أن نكون الوجهة الرقمية الأولى التي تجمع نبض المدينة الثقافي والاجتماعي في مكان واحد.",
        "ourMission": "رسالتنا", 
        "missionText": "تسهيل الوصول للفعاليات ودعم المنظمين وتعزيز تفاعل المجتمع.",
        "ourTeam": "فريق العمل",
        "frontend": "واجهة أمامية",
        "designer": "مصمم بصري", 
        "contentManager": "منسق محتوى",
        "ourValues": "قيمنا",
        "communityFirst": "المجتمع أولاً",
        "communityText": "نضع احتياجات المجتمع ومشاركته في صلب اهتماماتنا",
        "innovation": "الابتكار",
        "innovationText": "نسعى دائماً لتقديم حلول مبتكرة ومميزة",
        "collaboration": "التعاون",
        "collaborationText": "نؤمن بقوة العمل الجماعي والتعاون البناء",
        
        // صفحة اتصل بنا
        "contactUs": "تواصل معنا", 
        "contactSubtitle": "نحن هنا للإجابة على استفساراتك ومساعدتك في أي وقت",
        "address": "العنوان",
        "phone": "الهاتف", 
        "email": "البريد الإلكتروني",
        "contactForm": "نموذج التواصل",
        "fullName": "الاسم الكامل",
        "messageSubject": "موضوع الرسالة",
        "writeMessage": "اكتب رسالتك هنا...",
        "send": "إرسال",
        "fillAllFields": "يرجى تعبئة جميع الحقول.",
        "invalidEmail": "صيغة البريد الإلكتروني غير صحيحة.",
        "messageSent": "تم إرسال رسالتك بنجاح! سنقوم بالرد قريبًا.",
        
        // التذييل
        "platformDescription": "منصة شاملة لاكتشاف واستكشاف الفعاليات والأنشطة في مدينتك. نحن نعمل على جمع كل الفعاليات في مكان واحد لتسهيل عملية البحث والمشاركة.",
        "quickLinks": "روابط سريعة",
        "categories": "التصنيفات",
        "contactInfo": "معلومات الاتصال",
        "rightsReserved": "جميع الحقوق محفوظة.",
        "privacyPolicy": "سياسة الخصوصية",
        "termsOfUse": "شروط الاستخدام"
    },
    en: {
        // Navigation
        "home": "Home",
        "events": "Events",
        "about": "About",
        "contact": "Contact",
        "siteTitle": "City Events Guide",
        
        // Home Page
        "discoverEvents": "Discover the Best Events in Your City",
        "comprehensiveGuide": "Your comprehensive guide to the most important cultural, sports, music, and family events coming up in Damascus",
        "exploreEvents": "Explore Events",
        "quickCategories": "Quick Categories",
        "featuredEvents": "Featured Events This Week",
        "dontMiss": "Top events you shouldn't miss",
        "latestEvents": "Latest Events",
        "discoverNew": "Discover what's new in the world of events",
        "viewAllEvents": "View All Events",
        "stayUpdated": "Stay updated with the latest events and special offers",
        "ourTeam": "Our specialized team ensures you get the best experiences",
        "subscribeNewsletter": "Subscribe to Our Newsletter",
        "stayInformed": "Stay informed about the latest events and special offers",
        "yourEmail": "Your Email",
        "subscribe": "Subscribe",
        
        // Categories
        "music": "Music",
        "sports": "Sports",
        "food": "Food",
        "arts": "Arts",
        "culture": "Culture",
        "eventsCount": "events",
        
        // Events Page
        "allEvents": "All Events in Damascus",
        "searchEvents": "Search for events or filter by category, date, or location",
        "searchPlaceholder": "Search for an event...",
        "all": "All",
        "allLocations": "All Locations",
        "filterByDate": "Filter by Date",
        "clear": "Clear",
        "showingResults": "Showing {count} of {total} events",
        "noResults": "No events match your search criteria",
        "tryChanging": "Try changing your search terms or filter criteria",
        
        // Event Details Page
        "backToEvents": "Back to Events",
        "eventDetails": "Event Details",
        "dateTime": "Date & Time",
        "location": "Location",
        "category": "Category",
        "expectedAttendance": "Expected Attendance",
        "openToAll": "Open to all",
        "locationGallery": "Event Location",
        "addToCalendar": "Add to Calendar",
        "share": "Share",
        "register": "Register",
        "additionalInfo": "Additional Information",
        "duration": "Duration",
        "ticketType": "Ticket Type",
        "language": "Language",
        "accessibility": "Accessibility",
        "quickInfo": "Quick Info",
        "eventStatus": "Event Status",
        "upcoming": "Upcoming",
        "soon": "Soon",
        "ended": "Ended",
        "daysRemaining": "Days Remaining",
        "organizer": "Organizer",
        "similarEvents": "Similar Events",
        "noSimilarEvents": "No similar events",
        
        // About Page
        "aboutGuide": "About City Events Guide",
        "ourVision": "Our Vision",
        "visionText": "To be the premier digital destination that brings together the city's cultural and social pulse in one place.",
        "ourMission": "Our Mission",
        "missionText": "To facilitate access to events, support organizers, and enhance community engagement.",
        "ourTeam": "Our Team",
        "frontend": "Frontend Developer",
        "designer": "Visual Designer",
        "contentManager": "Content Manager",
        "ourValues": "Our Values",
        "communityFirst": "Community First",
        "communityText": "We place community needs and participation at the heart of our priorities",
        "innovation": "Innovation",
        "innovationText": "We always strive to provide innovative and distinctive solutions",
        "collaboration": "Collaboration",
        "collaborationText": "We believe in the power of teamwork and constructive collaboration",
        
        // Contact Page
        "contactUs": "Contact Us",
        "contactSubtitle": "We're here to answer your inquiries and help you anytime",
        "address": "Address",
        "phone": "Phone",
        "email": "Email",
        "contactForm": "Contact Form",
        "fullName": "Full Name",
        "messageSubject": "Message Subject",
        "writeMessage": "Write your message here...",
        "send": "Send",
        "fillAllFields": "Please fill all fields.",
        "invalidEmail": "Email format is incorrect.",
        "messageSent": "Your message has been sent successfully! We will respond soon.",
        
        // Footer
        "platformDescription": "A comprehensive platform to discover and explore events and activities in your city. We work to gather all events in one place to facilitate the search and participation process.",
        "quickLinks": "Quick Links",
        "categories": "Categories",
        "contactInfo": "Contact Information",
        "rightsReserved": "All rights reserved.",
        "privacyPolicy": "Privacy Policy",
        "termsOfUse": "Terms of Use"
    }
};

// وظائف إدارة اللغة
function getCurrentLanguage() {
    const savedLang = localStorage.getItem('language');
    
    if (savedLang) {
        // إذا كانت هناك لغة محفوظة، استخدمها
        return savedLang;
    } else {
        // إذا لم تكن هناك لغة محفوظة (أول مرة) - استخدم العربية افتراضي
        localStorage.setItem('language', 'ar');
        return 'ar';
    }
}


function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyLanguage(lang);
    updateDirection(lang);
}

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.hasAttribute('data-placeholder')) {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.value = translations[lang][key];
            } else {
                let text = translations[lang][key];
                const variables = text.match(/\{([^}]+)\}/g);
                
                if (variables) {
                    variables.forEach(variable => {
                        const varName = variable.replace(/[{}]/g, '');
                        const value = element.getAttribute(`data-${varName}`) || '';
                        text = text.replace(variable, value);
                    });
                }
                
                element.innerHTML = text;
            }
        }
    });
    
    document.documentElement.setAttribute('lang', lang);
    showLanguageNotification(lang);
}

function updateDirection(lang) {
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

function showLanguageNotification(lang) {
    const message = lang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language changed to English';
    
    const notification = document.createElement('div');
    notification.className = 'language-switch-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function setupLanguageSwitcher() {
    const langArBtn = document.getElementById('langAr');
    const langEnBtn = document.getElementById('langEn');
    
    if (langArBtn) {
        langArBtn.addEventListener('click', () => setLanguage('ar'));
    }
    
    if (langEnBtn) {
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }
}

function initializeLanguage() {
    const currentLang = getCurrentLanguage();
    applyLanguage(currentLang);
    updateDirection(currentLang);
    setupLanguageSwitcher();
}

// وظائف عامة
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('ar-EG', options);
}

function getCategoryColor(category) {
    const colors = {
        "موسيقى": "#f72585",
        "رياضة": "#4cc9f0", 
        "طعام": "#f8961e",
        "فنون": "#7209b7",
        "ثقافة": "#4361ee"
    };
    return colors[category] || "#6c757d";
}

// وظائف الصفحة الرئيسية
function loadFeaturedEvents() {
    const featuredEventsGrid = document.getElementById('featuredEventsGrid');
    if (!featuredEventsGrid) return;
    
    const featuredEvents = eventsData.filter(event => event.featured);
    
    featuredEventsGrid.innerHTML = '';
    if (featuredEvents.length === 0) {
        featuredEventsGrid.innerHTML = '<div class="col-12 text-center"><p>لا توجد فعاليات بارزة حالياً</p></div>';
    } else {
        featuredEvents.forEach(event => {
            featuredEventsGrid.innerHTML += createEventCard(event);
        });
    }
}

function loadLatestEvents() {
    const latestEventsGrid = document.getElementById('latestEventsGrid');
    if (!latestEventsGrid) return;
    
    const latestEvents = eventsData.slice(0, 8);
    
    latestEventsGrid.innerHTML = '';
    latestEvents.forEach(event => {
        latestEventsGrid.innerHTML += createEventCard(event);
    });
}

function updateCategoryCounts() {
    const categories = ['موسيقى', 'رياضة', 'طعام', 'فنون', 'ثقافة'];
    categories.forEach(category => {
        const count = eventsData.filter(event => event.category === category).length;
        const element = document.getElementById(`${category}-count`);
        if (element) {
            element.textContent = `${count} فعالية`;
        }
    });
}

function createEventCard(event) {
    const categoryColor = getCategoryColor(event.category);
    const formattedDate = formatDate(event.date);
    
    return `
    <div class="col-lg-3 col-md-6">
        <div class="event-card">
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" class="img-fluid">
                <span class="event-category" style="background: ${categoryColor}">${event.category}</span>
            </div>
            <div class="event-content">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-meta">
                    <span><i class="fas fa-calendar me-1"></i> ${formattedDate}</span>
                    <span><i class="fas fa-map-marker-alt me-1"></i> ${event.location}</span>
                </div>
                <div class="mt-3 text-center">
                    <a href="event.html?id=${event.id}" class="btn btn-primary btn-sm">
                        <i class="fas fa-info-circle me-1"></i>التفاصيل
                    </a>
                </div>
            </div>
        </div>
    </div>`;
}

function showCategoryEvents(category) {
    document.getElementById('quick-event').style.display = 'none';
    document.getElementById('category-events').style.display = 'block';
    
    document.getElementById('category-title').textContent = `فعاليات ${category}`;
    
    const categoryEvents = eventsData.filter(event => event.category === category);
    const categoryEventsGrid = document.getElementById('categoryEventsGrid');
    
    categoryEventsGrid.innerHTML = '';
    if (categoryEvents.length === 0) {
        categoryEventsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-calendar-times fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">لا توجد فعاليات في هذا التصنيف</h4>
            </div>
        `;
    } else {
        categoryEvents.forEach(event => {
            categoryEventsGrid.innerHTML += createEventCard(event);
        });
    }
    
    document.getElementById('category-events').scrollIntoView({ behavior: 'smooth' });
}

function hideCategoryEvents() {
    document.getElementById('quick-event').style.display = 'block';
    document.getElementById('category-events').style.display = 'none';
    document.getElementById('quick-event').scrollIntoView({ behavior: 'smooth' });
}

// وظائف صفحة الفعاليات
function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            if (btn.dataset.category === categoryParam) {
                btn.classList.add('active');
            } else if (btn.dataset.category === 'الكل') {
                btn.classList.remove('active');
            }
        });
    }
}

function renderEvents() {
    const allEventsGrid = document.getElementById('allEventsGrid');
    if (!allEventsGrid) return;
    
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const locationFilter = document.getElementById('locationFilter');
    const dateFilter = document.getElementById('dateFilter');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');
    
    let currentCategory = "الكل";
    let currentLocation = "";
    let currentDate = "";

    function displayEvents() {
        let filteredEvents = eventsData;

        if (currentCategory !== "الكل") {
            filteredEvents = filteredEvents.filter(e => e.category === currentCategory);
        }

        if (currentLocation) {
            filteredEvents = filteredEvents.filter(e => e.location === currentLocation);
        }

        if (currentDate) {
            filteredEvents = filteredEvents.filter(e => e.date === currentDate);
        }

        const query = searchInput.value.trim().toLowerCase();
        if (query) {
            filteredEvents = filteredEvents.filter(e => 
                e.title.toLowerCase().includes(query) || 
                e.description.toLowerCase().includes(query) ||
                e.location.toLowerCase().includes(query) ||
                e.category.toLowerCase().includes(query)
            );
        }

        resultsCount.textContent = `عرض ${filteredEvents.length} من ${eventsData.length} فعالية`;

        if (filteredEvents.length === 0) {
            allEventsGrid.style.display = 'none';
            noResults.style.display = 'block';
        } else {
            allEventsGrid.style.display = 'flex';
            noResults.style.display = 'none';
            
            allEventsGrid.innerHTML = '';
            filteredEvents.forEach(event => {
                allEventsGrid.innerHTML += createEventCard(event);
            });
        }
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayEvents();
        });
    });

    if (locationFilter) {
        locationFilter.addEventListener('change', () => {
            currentLocation = locationFilter.value;
            displayEvents();
        });
    }

    if (dateFilter) {
        dateFilter.addEventListener('change', () => {
            currentDate = dateFilter.value;
            displayEvents();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', displayEvents);
    }

    displayEvents();
}

function performSearch() {
    renderEvents();
}

function clearFilters() {
    const searchInput = document.getElementById('searchInput');
    const locationFilter = document.getElementById('locationFilter');
    const dateFilter = document.getElementById('dateFilter');
    
    if (searchInput) searchInput.value = '';
    if (locationFilter) locationFilter.value = '';
    if (dateFilter) dateFilter.value = '';
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.dataset.category === 'الكل') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderEvents();
}

// وظائف صفحة تفاصيل الفعالية
function loadEventDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    let event;
    
    if (eventId) {
        event = eventsData.find(e => e.id === parseInt(eventId));
    }
    
    if (!event) {
        const container = document.querySelector('.container');
        if (container) {
            container.innerHTML = `
                <div class="text-center py-5">
                    <i class="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
                    <h2>الفعالية غير موجودة</h2>
                    <p class="lead">عذراً، لم نتمكن من العثور على الفعالية المطلوبة</p>
                    <a href="events.html" class="btn btn-primary mt-3">العودة للفعاليات</a>
                </div>
            `;
        }
        return;
    }
    
    displayEventDetails(event);
    loadSimilarEvents(event);
    createLocationGallery(event);
}

function displayEventDetails(event) {
    const elements = {
        'eventDetailImage': locationImages[event.location] || event.image,
        'eventDetailTitle': event.title,
        'eventDetailDescription': event.description,
        'eventDetailDate': formatDate(event.date),
        'eventDetailLocation': event.location,
        'eventDetailCategory': event.category,
        'eventOrganizer': event.organizer,
        'eventContact': event.contact,
        'eventDuration': event.duration,
        'eventTicketType': event.ticketType,
        'eventLanguage': event.language,
        'eventAccessibility': event.accessibility
    };
    
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (id === 'eventDetailImage') {
                element.src = elements[id];
            } else {
                element.textContent = elements[id];
            }
        }
    });
    
    const categoryColor = getCategoryColor(event.category);
    const categoryBadge = document.getElementById('eventCategoryBadge');
    if (categoryBadge) {
        categoryBadge.textContent = event.category;
        categoryBadge.style.backgroundColor = categoryColor;
    }
    
    const eventDate = new Date(event.date);
    const today = new Date();
    const daysDiff = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
    
    const statusBadge = document.getElementById('eventStatus');
    if (statusBadge) {
        if (daysDiff < 0) {
            statusBadge.textContent = "منتهية";
            statusBadge.className = "badge bg-secondary fs-6";
        } else if (daysDiff <= 7) {
            statusBadge.textContent = "قريبة";
            statusBadge.className = "badge bg-warning fs-6";
        } else {
            statusBadge.textContent = "قادمة";
            statusBadge.className = "badge bg-success fs-6";
        }
    }
    
    const daysRemaining = document.getElementById('daysRemaining');
    if (daysRemaining) {
        daysRemaining.textContent = daysDiff > 0 ? daysDiff : "0";
    }
    
    document.title = `${event.title} - دليل فعاليات المدينة`;
}

function loadSimilarEvents(currentEvent) {
    const similarEventsList = document.getElementById('similarEventsList');
    if (!similarEventsList) return;
    
    const similarEvents = eventsData
        .filter(event => event.id !== currentEvent.id && event.category === currentEvent.category)
        .slice(0, 3);
    
    if (similarEvents.length > 0) {
        similarEventsList.innerHTML = similarEvents.map(event => `
            <div class="similar-event-item mb-3 p-3 border rounded">
                <a href="event.html?id=${event.id}" class="text-decoration-none d-block">
                    <h6 class="mb-2 text-dark">${event.title}</h6>
                    <small class="text-muted d-block">
                        <i class="fas fa-calendar me-1"></i>${formatDate(event.date)}
                    </small>
                    <small class="text-muted">
                        <i class="fas fa-map-marker-alt me-1"></i>${event.location}
                    </small>
                </a>
            </div>
        `).join('');
    } else {
        similarEventsList.innerHTML = '<p class="text-muted">لا توجد فعاليات مشابهة</p>';
    }
}

// موقع الفعالية
function createLocationGallery(event) {
    const locationGallery = document.getElementById('locationGallery');
    if (!locationGallery) return;
    
    const locationPhotos = getLocationPhotos(event.location);
    
    locationGallery.innerHTML = '';
    
    if (locationPhotos.length === 0) {
        locationGallery.innerHTML = `
            <div class="col-12 text-center py-4">
                <i class="fas fa-images fa-2x text-muted mb-3"></i>
                <p class="text-muted">لا توجد صور متاحة للموقع حالياً</p>
            </div>
        `;
        return;
    }
    
    locationPhotos.forEach((photo, index) => {
        locationGallery.innerHTML += `
            <div class="col-md-4 col-sm-6">
                <div class="gallery-item position-relative">
                    <img src="${photo.url}" 
                         alt="${photo.alt}" 
                         class="img-fluid rounded shadow-sm w-100 gallery-image"
                         style="height: 200px; object-fit: cover; cursor: pointer;"
                         onclick="openImageModal('${photo.url}', '${photo.alt}')">
                    <div class="gallery-overlay position-absolute top-0 start-0 w-100 h-100 rounded" 
                         style="background: rgba(0,0,0,0.3); opacity: 0; transition: opacity 0.3s;">
                        <div class="position-absolute top-50 start-50 translate-middle text-white">
                            <i class="fas fa-search-plus fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    setupGalleryHoverEffects();
}

// قاعدة بيانات صور المواقع
function getLocationPhotos(location) {
    const photosDatabase = {
        "ساحة المدينة المركزية": [
            {
                url: "images/locations/موقع ساحة المدينة المركزية.jpg",
                alt: "موقع ساحة المدينة المركزية"
            }
        ],
        "المتحف الوطني": [
            {
                url: "images/locations/موقع المتحف الوطني.jpg",
                alt: "موقع المتحف الوطني"
            }
        ],
        "جامعة دمشق": [
            {
                url: "images/locations/موقع جامعة دمشق.jpg",
                alt: "موقع جامعة دمشق"
            }
        ],
        "ساحة الأمويين": [
            {
                url: "images/locations/موقع ساحة الأمويين.jpg",
                alt: "موقع ساحة الأمويين"
            }
        ],
        "حديقة الجاحظ": [
            {
                url: "images/locations/موقع حديقة الجاحظ.jpg",
                alt: "موقع حديقة الجاحظ"
            }
        ],
        "حديقة السبكي": [
            {
                url: "images/locations/موقع حديقة السبكي.jpg",
                alt: "موقع حديقة السبكي"
            }
        ],
        "مديرية الثقافة": [
            {
                url: "images/locations/موقع مديرية الثقافة.jpg",
                alt: "موقع مديرية الثقافة"
            }
        ],
        "المركز الثقافي العربي": [
            {
                url: "images/locations/موقع المركز الثقافي العربي.jpg",
                alt: "موقع المركز الثقافي العربي"
            }
        ],
        "النادي الرياضي": [
            {
                url: "images/locations/موقع النادي الرياضي.jpg",
                alt: "موقع النادي الرياضي"
            }
        ]
    };
    
    return photosDatabase[location] || [];
}

function openImageModal(imageUrl, imageAlt) {
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('imageModalTitle');
    
    if (modalImage && modalTitle) {
        modalImage.src = imageUrl;
        modalImage.alt = imageAlt;
        modalTitle.textContent = imageAlt;
        
        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    }
}

function setupGalleryHoverEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const overlay = item.querySelector('.gallery-overlay');
        
        item.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
        });
    });
}

// وظائف تفاعلية مشتركة
function addToCalendar() {
    const eventTitle = document.getElementById('eventDetailTitle');
    const eventDate = document.getElementById('eventDetailDate');
    
    if (eventTitle && eventDate) {
        alert(`تم إضافة "${eventTitle.textContent}" بتاريخ ${eventDate.textContent} إلى تقويمك`);
    }
}

function shareEvent() {
    const eventTitle = document.getElementById('eventDetailTitle');
    if (!eventTitle) return;
    
    if (navigator.share) {
        navigator.share({
            title: eventTitle.textContent,
            text: 'تفضل بحضور هذه الفعالية المميزة',
            url: window.location.href
        });
    } else {
        alert(`يمكنك مشاركة هذه الفعالية: ${eventTitle.textContent}\nرابط المشاركة: ${window.location.href}`);
    }
}

function registerForEvent() {
    const eventTitle = document.getElementById('eventDetailTitle');
    if (!eventTitle) return;
    
    const name = prompt("الرجاء إدخال اسمك للتسجيل في الفعالية:");
    if (name) {
        alert(`شكراً ${name}! تم تسجيلك بنجاح في فعالية "${eventTitle.textContent}"\nسيتم إرسال تأكيد إلى بريدك الإلكتروني`);
    }
}


// الوضع الليلي
function setupDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('i');
    
    // تحقق إذا كان هناك إعداد محفوظ مسبقاً
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode === null) {
        // أول مرة يفتح الموقع - استخدم الوضع الفاتح افتراضي
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'false');
    } else if (savedDarkMode === 'true') {
        // إذا كان المستخدم اختار الوضع الداكن مسبقاً
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        // إذا كان المستخدم اختار الوضع الفاتح مسبقاً
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    
    themeToggle.addEventListener('click', function() {
        showThemeSwitchNotification();
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'true');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'false');
        }
    });
}


function showThemeSwitchNotification() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const message = isDarkMode ? "تم تفعيل الوضع النهاري ☀️" : "تم تفعيل الوضع الليلي 🌙";
    
    const notification = document.createElement('div');
    notification.className = 'theme-switch-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// نموذج النشرة البريدية
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`شكراً لاشتراكك! سيتم إرسال التحديثات إلى ${email}`);
            this.reset();
        });
    }
}

// تأثيرات التمرير والظهور للعناصر
function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if(navbar) {
            if(window.scrollY > 100) 
                navbar.classList.add('navbar-scrolled');
            else 
                navbar.classList.remove('navbar-scrolled');
        }
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting) 
                entry.target.classList.add('animate-in');
        });
    }, observerOptions);

    document.querySelectorAll('.event-card, .category-card').forEach(el => {
        observer.observe(el);
    });
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    
    if (document.getElementById('featuredEventsGrid')) {
        loadFeaturedEvents();
        loadLatestEvents();
        updateCategoryCounts();
        setupNewsletterForm();
        setupScrollEffects();
    }
    
    if (document.getElementById('allEventsGrid')) {
        checkUrlParams();
        renderEvents();
    }
    
    if (document.getElementById('eventDetailTitle')) {
        loadEventDetails();
    }
    
    setupDarkMode();
});