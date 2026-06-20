const DEMO_BOT_URL = "https://t.me/YOUR_DEMO_BOT_USERNAME";
const TELEGRAM_CONTACT_URL = "https://t.me/AngelinixAI";
const WHATSAPP_CONTACT_URL = "https://wa.me/380988470126";

const translations = {
    en: {
        brand: "Angelinix Automation",
        navSolution: "Solution",
        navFeatures: "Services",
        navDemo: "Showcase",
        navPricing: "Pricing",
        navContact: "Contact",
        getDemo: "Get Free Demo",
        mobileGetDemo: "Get Demo",
        viewLiveDemo: "See Platform",
        heroEyebrow: "Business automation agency",
        heroHeadline: "Business Automation Systems<br>for Growing Teams.",
        heroFreeBanner: "🚀 First Month Free For Early Clients",
        heroSubtitle: "Collect leads, automate customer communication, manage work in CRM dashboards, track analytics and grow your business with connected automation systems.",
        badgeReady: "Multi-channel automation",
        badgeCustom: "Custom setup available",
        badgeFree: "First month free",
        previewOrder: "New lead",
        automationSystem: "Automation System",
        previewCustomer: "Customer",
        previewPhone: "Contact + request",
        previewStatus: "Status",
        previewCreated: "Qualified",
        activityLead: "Lead captured",
        activityChannel: "Channel message",
        activityCrm: "CRM update",
        activityAdmin: "Admin notification",
        featuresEyebrow: "Services",
        featuresHeadline: "Automation services for the channels your customers already use",
        telegramAutomation: "Telegram Automation",
        whatsappAutomation: "WhatsApp Automation",
        instagramAutomation: "Instagram Automation",
        crmDashboards: "CRM &amp; Dashboards",
        aiAssistants: "AI Assistants",
        customAutomation: "Custom Automation",
        featureTelegramText: "Automate inquiries, orders, reminders and customer flows inside Telegram.",
        featureWhatsappText: "Connect WhatsApp conversations with lead capture, follow-ups and operations.",
        featureInstagramText: "Turn Instagram interest into structured leads and repeatable workflows.",
        featureCrmText: "Manage leads, customers, orders and team activity from one workspace.",
        featureAiText: "Use AI to answer common questions, qualify leads and support your team.",
        featureCustomText: "Build workflows around your exact business process, tools and growth plan.",
        audienceEyebrow: "Who this is for",
        audienceHeadline: "Built for businesses that sell through fast conversations",
        audienceLocal: "Local services",
        audienceShops: "Online shops",
        audienceBeauty: "Beauty salons",
        audienceFood: "Food businesses",
        audienceRepair: "Repair / installation teams",
        audienceCoaches: "Coaches / consultants",
        outcomesEyebrow: "Before → After",
        outcomesHeadline: "What Changes After Automation",
        outcomeBefore: "Before",
        outcomeAfter: "After",
        outcomeRestaurantsTitle: "Restaurants / Pizzerias",
        outcomeRestaurantsBeforeOne: "Orders scattered across chats",
        outcomeRestaurantsBeforeTwo: "No customer history",
        outcomeRestaurantsBeforeThree: "Manual promotions",
        outcomeRestaurantsBeforeFour: "No sales analytics",
        outcomeRestaurantsAfterOne: "Telegram ordering flow",
        outcomeRestaurantsAfterTwo: "Customer CRM",
        outcomeRestaurantsAfterThree: "Automated promotions",
        outcomeRestaurantsAfterFour: "Sales dashboard",
        outcomeStoresTitle: "Online Stores",
        outcomeStoresBeforeOne: "Manual order processing",
        outcomeStoresBeforeTwo: "Lost leads",
        outcomeStoresBeforeThree: "No customer tracking",
        outcomeStoresBeforeFour: "No repeat sales strategy",
        outcomeStoresAfterOne: "Automated catalog",
        outcomeStoresAfterTwo: "Customer database",
        outcomeStoresAfterThree: "Order automation",
        outcomeStoresAfterFour: "Repeat sales campaigns",
        outcomeServicesTitle: "Service Businesses",
        outcomeServicesBeforeOne: "Leads lost in messages",
        outcomeServicesBeforeTwo: "No follow-up process",
        outcomeServicesBeforeThree: "No pipeline visibility",
        outcomeServicesAfterOne: "Lead intake automation",
        outcomeServicesAfterTwo: "CRM pipeline",
        outcomeServicesAfterThree: "Follow-up reminders",
        outcomeServicesAfterFour: "Reporting dashboard",
        outcomeOperationsTitle: "Warehouses / Operations Teams",
        outcomeOperationsBeforeOne: "Manual coordination",
        outcomeOperationsBeforeTwo: "No centralized visibility",
        outcomeOperationsBeforeThree: "No operational reporting",
        outcomeOperationsAfterOne: "Process dashboards",
        outcomeOperationsAfterTwo: "Team workflows",
        outcomeOperationsAfterThree: "Status tracking",
        outcomeOperationsAfterFour: "Operational analytics",
        systemEyebrow: "Business Automation System",
        systemHeadline: "From first lead to repeat sales",
        flowLeads: "Traffic &amp; Leads",
        flowAutomation: "Automation Layer<br><small>Telegram / WhatsApp / Instagram / Website</small>",
        flowCrm: "CRM &amp; Admin Dashboard",
        flowInsights: "Analytics &amp; Insights",
        flowRepeat: "Repeat Sales",
        processEyebrow: "How it works",
        processHeadline: "A simple path from idea to working automation",
        processStepOne: "We discuss your business process",
        processStepTwo: "We build automation",
        processStepThree: "You test demo",
        processStepFour: "We launch and support",
        analyticsEyebrow: "Analytics &amp; Customer Insights",
        analyticsHeadline: "Track the signals that shape better sales decisions",
        metricVisitors: "Website Visitors",
        metricClicks: "Channel Clicks",
        metricStoreVisits: "Automation Visits",
        metricProductViews: "Offer Views",
        metricCart: "Lead Activity",
        metricCheckout: "Request Started",
        metricOrders: "Orders Created",
        metricAbandoned: "Lost Leads",
        analyticsNote: "Make decisions based on data, not guesses.",
        showcaseEyebrow: "Platform Showcase",
        showcaseHeadline: "See how the automation platform works",
        showcaseText: "A real look at the dashboards, workflows, clients, tasks and analytics used to manage business automation systems.",
        dashboardTag: "Dashboard",
        operationsDashboard: "Operations Dashboard",
        operationsText: "Monitor leads, clients, projects, tasks, environments and business activity from one place.",
        showcasePointOne: "Central view for projects and clients",
        showcasePointTwo: "Tasks and priorities for daily execution",
        showcasePointThree: "Automation data ready for reporting",
        platformWalkthroughCta: "Get Platform Walkthrough",
        clientsTag: "CRM",
        projectsTag: "Projects",
        tasksTag: "Tasks",
        environmentsTag: "Systems",
        repositoriesTag: "Sources",
        analyticsTag: "Insights",
        exportTag: "Reports",
        galleryDashboard: "Dashboard",
        galleryDashboardText: "Central overview of automation activity and daily priorities.",
        galleryClients: "Clients",
        galleryClientsText: "Manage contacts, communication details and follow-up context.",
        galleryProjects: "Projects",
        galleryProjectsText: "Track automation projects, statuses and business workflows.",
        galleryTasks: "Tasks",
        galleryTasksText: "Organize work, deadlines, priorities and execution.",
        galleryEnvironments: "Environments",
        galleryEnvironmentsText: "Separate demo, production and development systems.",
        galleryRepositories: "Repositories",
        galleryRepositoriesText: "Keep technical assets and project sources organized.",
        galleryAnalytics: "Analytics",
        galleryAnalyticsText: "Understand leads, activity, conversions and growth signals.",
        galleryExport: "Export",
        galleryExportText: "Download structured business data for backup and reporting.",
        customDemoCta: "Request Custom Demo",
        setupEyebrow: "Flexible Setup",
        setupHeadline: "Ready-made base. Custom setup when needed.",
        setupText: "We start with an existing automation base and adapt it to your business. Standard features can be configured quickly. Custom workflows, integrations and advanced analytics can be added step by step.",
        setupReadyTitle: "Ready-made base",
        setupReadyText: "Lead capture, CRM structure, notifications, analytics and automation logic are already available.",
        setupCustomTitle: "Custom setup",
        setupCustomText: "We adapt channels, texts, workflows, notifications and dashboards to your business.",
        setupScalableTitle: "Scalable product",
        setupScalableText: "New channels and features can be enabled later as your business grows.",
        integrationsEyebrow: "Platforms &amp; Integrations",
        integrationsHeadline: "Connect the tools your business already uses",
        platformPreviewBadge: "LIVE PLATFORM PREVIEW",
        platformPreviewHeadline: "See the platform behind the automation",
        platformPreviewText: "Every automation project includes dashboards, client management, project tracking and analytics.",
        platformPreviewProof: "Real Angelinix Master interface, not a mockup. These dashboards are used to manage clients, projects, automation workflows and analytics.",
        platformPreviewDashboard: "Dashboard",
        platformPreviewDashboardText: "Track projects, revenue and team activity.",
        platformPreviewClients: "Clients",
        platformPreviewClientsText: "Manage customers, contacts and project relationships.",
        platformPreviewProjects: "Projects",
        platformPreviewProjectsText: "Monitor workflows, statuses and automation deployments.",
        platformPreviewAnalytics: "Analytics",
        platformPreviewAnalyticsText: "Measure traffic, leads and conversion rates.",
        platformPreviewClose: "Close preview",
        platformTelegram: "Telegram",
        platformWhatsapp: "WhatsApp",
        platformInstagram: "Instagram",
        platformFacebook: "Facebook",
        platformCrm: "CRM Systems",
        platformSheets: "Google Sheets",
        platformEmail: "Email",
        platformAi: "AI Assistants",
        platformApis: "Custom APIs",
        pricingEyebrow: "Pricing",
        pricingHeadline: "Choose the consultation package that fits your business",
        starterTitle: "Small Business Setup",
        starterSubtitle: "Best for first automation / small team",
        starterText: "One core automation channel, lead capture and simple admin workflow.",
        starterCta: "Get Consultation",
        businessTitle: "Growth Automation",
        businessSubtitle: "Best for growing operations",
        businessText: "Multi-channel automation, CRM, customer activity, broadcasts and analytics.",
        businessCta: "Request Quote",
        proTitle: "Custom Automation",
        proSubtitle: "Best for complex workflows",
        proText: "Full business automation system with custom workflows, dashboards and priority support.",
        proCta: "Book Discovery Call",
        pricingNote: "Every package starts with a short consultation.",
        pricingSubnote: "We start from a ready-made automation base, then adapt channels, workflows and dashboards after a short consultation.",
        finalHeadline: "Ready to see how this could work for your business?",
        finalText: "Book a free demo and we’ll map your automation flow.",
        footerText: "Business automation, done right."
    },
    ru: {
        brand: "Angelinix Automation",
        navSolution: "Решение",
        navFeatures: "Услуги",
        navDemo: "Обзор",
        navPricing: "Цены",
        navContact: "Контакты",
        getDemo: "Получить демо",
        mobileGetDemo: "Получить демо",
        viewLiveDemo: "Посмотреть платформу",
        heroEyebrow: "Агентство бизнес-автоматизации",
        heroHeadline: "Системы бизнес-автоматизации<br>для растущих команд.",
        heroFreeBanner: "🚀 Первый месяц бесплатно для первых клиентов",
        heroSubtitle: "Собирайте лиды, автоматизируйте общение с клиентами, управляйте работой в CRM-панелях, отслеживайте аналитику и развивайте бизнес через связанные системы автоматизации.",
        badgeReady: "Мультиканальная автоматизация",
        badgeCustom: "Индивидуальная настройка",
        badgeFree: "Первый месяц бесплатно",
        previewOrder: "Новый лид",
        automationSystem: "Система автоматизации",
        previewCustomer: "Клиент",
        previewPhone: "Контакт + запрос",
        previewStatus: "Статус",
        previewCreated: "Квалифицирован",
        activityLead: "Лид получен",
        activityChannel: "Сообщение из канала",
        activityCrm: "Обновление CRM",
        activityAdmin: "Уведомление админа",
        featuresEyebrow: "Услуги",
        featuresHeadline: "Автоматизация для каналов, где уже общаются ваши клиенты",
        telegramAutomation: "Автоматизация Telegram",
        whatsappAutomation: "Автоматизация WhatsApp",
        instagramAutomation: "Автоматизация Instagram",
        crmDashboards: "CRM и панели управления",
        aiAssistants: "AI-ассистенты",
        customAutomation: "Индивидуальная автоматизация",
        featureTelegramText: "Автоматизируйте заявки, заказы, напоминания и клиентские сценарии в Telegram.",
        featureWhatsappText: "Свяжите WhatsApp-диалоги со сбором лидов, follow-up и операционными процессами.",
        featureInstagramText: "Превращайте интерес из Instagram в структурированные лиды и повторяемые процессы.",
        featureCrmText: "Управляйте лидами, клиентами, заказами и активностью команды в одном рабочем месте.",
        featureAiText: "Используйте AI для ответов на частые вопросы, квалификации лидов и поддержки команды.",
        featureCustomText: "Собирайте процессы под ваш бизнес, инструменты и план роста.",
        audienceEyebrow: "Для кого",
        audienceHeadline: "Для бизнесов, которые продают через быстрые диалоги",
        audienceLocal: "Локальные услуги",
        audienceShops: "Онлайн-магазины",
        audienceBeauty: "Салоны красоты",
        audienceFood: "Еда и доставка",
        audienceRepair: "Ремонт / монтажные команды",
        audienceCoaches: "Коучи / консультанты",
        outcomesEyebrow: "До → После",
        outcomesHeadline: "Что меняется после автоматизации",
        outcomeBefore: "До",
        outcomeAfter: "После",
        outcomeRestaurantsTitle: "Рестораны и пиццерии",
        outcomeRestaurantsBeforeOne: "Заказы разбросаны по чатам",
        outcomeRestaurantsBeforeTwo: "Нет истории клиентов",
        outcomeRestaurantsBeforeThree: "Акции делаются вручную",
        outcomeRestaurantsBeforeFour: "Нет аналитики продаж",
        outcomeRestaurantsAfterOne: "Telegram-сценарий заказов",
        outcomeRestaurantsAfterTwo: "CRM клиентов",
        outcomeRestaurantsAfterThree: "Автоматические акции",
        outcomeRestaurantsAfterFour: "Панель продаж",
        outcomeStoresTitle: "Онлайн-магазины",
        outcomeStoresBeforeOne: "Ручная обработка заказов",
        outcomeStoresBeforeTwo: "Потерянные заявки",
        outcomeStoresBeforeThree: "Нет отслеживания клиентов",
        outcomeStoresBeforeFour: "Нет стратегии повторных продаж",
        outcomeStoresAfterOne: "Автоматизированный каталог",
        outcomeStoresAfterTwo: "Клиентская база",
        outcomeStoresAfterThree: "Автоматизация заказов",
        outcomeStoresAfterFour: "Кампании повторных продаж",
        outcomeServicesTitle: "Сервисные бизнесы",
        outcomeServicesBeforeOne: "Заявки теряются в сообщениях",
        outcomeServicesBeforeTwo: "Нет follow-up процесса",
        outcomeServicesBeforeThree: "Не видно этапы работы",
        outcomeServicesAfterOne: "Автоматический прием заявок",
        outcomeServicesAfterTwo: "CRM-воронка",
        outcomeServicesAfterThree: "Напоминания follow-up",
        outcomeServicesAfterFour: "Панель отчетности",
        outcomeOperationsTitle: "Склады и операционные команды",
        outcomeOperationsBeforeOne: "Ручная координация",
        outcomeOperationsBeforeTwo: "Нет единого обзора",
        outcomeOperationsBeforeThree: "Нет операционной отчетности",
        outcomeOperationsAfterOne: "Панели процессов",
        outcomeOperationsAfterTwo: "Командные workflows",
        outcomeOperationsAfterThree: "Отслеживание статусов",
        outcomeOperationsAfterFour: "Операционная аналитика",
        systemEyebrow: "Система бизнес-автоматизации",
        systemHeadline: "От первого лида до повторных продаж",
        flowLeads: "Трафик и лиды",
        flowAutomation: "Слой автоматизации<br><small>Telegram / WhatsApp / Instagram / сайт</small>",
        flowCrm: "CRM и админ-панель",
        flowInsights: "Аналитика и инсайты",
        flowRepeat: "Повторные продажи",
        processEyebrow: "Как это работает",
        processHeadline: "Простой путь от идеи до рабочей автоматизации",
        processStepOne: "Разбираем ваш бизнес-процесс",
        processStepTwo: "Собираем автоматизацию",
        processStepThree: "Вы тестируете демо",
        processStepFour: "Запускаем и поддерживаем",
        analyticsEyebrow: "Аналитика и данные клиентов",
        analyticsHeadline: "Отслеживайте сигналы, которые помогают продавать лучше",
        metricVisitors: "Посетители сайта",
        metricClicks: "Клики по каналам",
        metricStoreVisits: "Визиты в автоматизацию",
        metricProductViews: "Просмотры офферов",
        metricCart: "Активность лидов",
        metricCheckout: "Начатые заявки",
        metricOrders: "Созданные заказы",
        metricAbandoned: "Потерянные лиды",
        analyticsNote: "Принимайте решения на основе данных, а не догадок.",
        showcaseEyebrow: "Обзор платформы",
        showcaseHeadline: "Посмотрите, как работает платформа автоматизации",
        showcaseText: "Реальный пример панелей, процессов, клиентов, задач и аналитики, которые помогают управлять автоматизацией бизнеса.",
        dashboardTag: "Панель",
        operationsDashboard: "Операционная панель",
        operationsText: "Контролируйте заявки, клиентов, проекты, задачи, окружения и активность бизнеса в одном месте.",
        showcasePointOne: "Единый обзор проектов и клиентов",
        showcasePointTwo: "Задачи и приоритеты для ежедневной работы",
        showcasePointThree: "Данные автоматизации готовы для отчётов",
        platformWalkthroughCta: "Получить обзор платформы",
        clientsTag: "CRM",
        projectsTag: "Проекты",
        tasksTag: "Задачи",
        environmentsTag: "Системы",
        repositoriesTag: "Источники",
        analyticsTag: "Инсайты",
        exportTag: "Отчёты",
        galleryDashboard: "Dashboard",
        galleryDashboardText: "Центральный обзор активности автоматизации и ежедневных приоритетов.",
        galleryClients: "Clients",
        galleryClientsText: "Управляйте контактами, деталями коммуникации и контекстом follow-up.",
        galleryProjects: "Projects",
        galleryProjectsText: "Отслеживайте проекты автоматизации, статусы и бизнес-процессы.",
        galleryTasks: "Tasks",
        galleryTasksText: "Организуйте работу, сроки, приоритеты и выполнение.",
        galleryEnvironments: "Environments",
        galleryEnvironmentsText: "Разделяйте демо, production и development системы.",
        galleryRepositories: "Repositories",
        galleryRepositoriesText: "Храните технические материалы и исходники проектов организованно.",
        galleryAnalytics: "Analytics",
        galleryAnalyticsText: "Понимайте лиды, активность, конверсии и сигналы роста.",
        galleryExport: "Export",
        galleryExportText: "Выгружайте структурированные бизнес-данные для резервного копирования и отчётности.",
        customDemoCta: "Запросить индивидуальное демо",
        setupEyebrow: "Гибкая настройка",
        setupHeadline: "Готовая база. Индивидуальная настройка при необходимости.",
        setupText: "Мы начинаем с готовой базы автоматизации и адаптируем ее под ваш бизнес. Стандартные функции можно настроить быстро. Индивидуальные процессы, интеграции и расширенную аналитику можно добавлять постепенно.",
        setupReadyTitle: "Готовая база",
        setupReadyText: "Сбор лидов, структура CRM, уведомления, аналитика и логика автоматизации уже доступны.",
        setupCustomTitle: "Индивидуальная настройка",
        setupCustomText: "Мы адаптируем каналы, тексты, процессы, уведомления и панели управления под ваш бизнес.",
        setupScalableTitle: "Масштабируемый продукт",
        setupScalableText: "Новые каналы и функции можно подключать позже по мере роста бизнеса.",
        integrationsEyebrow: "Платформы и интеграции",
        integrationsHeadline: "Подключаем инструменты, которыми уже пользуется ваш бизнес",
        platformPreviewBadge: "ЖИВОЙ ПРЕВЬЮ ИНТЕРФЕЙСА",
        platformPreviewHeadline: "Посмотрите платформу за автоматизацией",
        platformPreviewText: "Каждый проект автоматизации включает панели управления, управление клиентами, отслеживание проектов и аналитику.",
        platformPreviewProof: "Реальный интерфейс Angelinix Master, не макет. Эти панели используются для управления клиентами, проектами, автоматизациями и аналитикой.",
        platformPreviewDashboard: "Dashboard",
        platformPreviewDashboardText: "Отслеживайте проекты, доход и активность команды.",
        platformPreviewClients: "Clients",
        platformPreviewClientsText: "Управляйте клиентами, контактами и связанными проектами.",
        platformPreviewProjects: "Projects",
        platformPreviewProjectsText: "Контролируйте процессы, статусы и автоматизации.",
        platformPreviewAnalytics: "Analytics",
        platformPreviewAnalyticsText: "Измеряйте трафик, заявки и конверсию.",
        platformPreviewClose: "Закрыть превью",
        platformTelegram: "Telegram",
        platformWhatsapp: "WhatsApp",
        platformInstagram: "Instagram",
        platformFacebook: "Facebook",
        platformCrm: "CRM-системы",
        platformSheets: "Google Sheets",
        platformEmail: "Email",
        platformAi: "AI-ассистенты",
        platformApis: "Custom APIs",
        pricingEyebrow: "Цены",
        pricingHeadline: "Выберите консультационный пакет под ваш бизнес",
        starterTitle: "Small Business Setup",
        starterSubtitle: "Лучше для первой автоматизации / небольшой команды",
        starterText: "Один основной канал автоматизации, сбор лидов и простой админ-процесс.",
        starterCta: "Получить консультацию",
        businessTitle: "Growth Automation",
        businessSubtitle: "Лучше для растущих процессов",
        businessText: "Мультиканальная автоматизация, CRM, активность клиентов, рассылки и аналитика.",
        businessCta: "Запросить расчет",
        proTitle: "Custom Automation",
        proSubtitle: "Лучше для сложных процессов",
        proText: "Полная система бизнес-автоматизации с индивидуальными процессами, панелями и приоритетной поддержкой.",
        proCta: "Забронировать созвон",
        pricingNote: "Каждый пакет начинается с короткой консультации.",
        pricingSubnote: "Мы начинаем с готовой базы автоматизации, а затем адаптируем каналы, процессы и панели после короткой консультации.",
        finalHeadline: "Хотите увидеть, как это может работать для вашего бизнеса?",
        finalText: "Запишитесь на бесплатное демо, и мы разберем вашу схему автоматизации.",
        footerText: "Бизнес-автоматизация, сделанная правильно."
    }
};

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("[data-nav-menu]");
const languageButtons = document.querySelectorAll("[data-lang]");
const translatableElements = document.querySelectorAll("[data-i18n]");
const demoBotLinks = document.querySelectorAll("[data-demo-bot-link]");
const telegramLinks = document.querySelectorAll("[data-telegram-contact-link]");
const whatsappLinks = document.querySelectorAll("[data-whatsapp-contact-link]");
const platformWalkthroughLinks = document.querySelectorAll("[data-platform-walkthrough]");
const customDemoLinks = document.querySelectorAll("[data-custom-demo]");
const previewCards = document.querySelectorAll("[data-preview-src]");
const previewModal = document.querySelector("[data-preview-modal]");
const previewModalImage = document.querySelector("[data-preview-modal-image]");
const previewModalTitle = document.querySelector("[data-preview-modal-title]");
const previewCloseControls = document.querySelectorAll("[data-preview-close]");
let activePreviewTrigger = null;

demoBotLinks.forEach((link) => {
    link.href = DEMO_BOT_URL;
});

telegramLinks.forEach((link) => {
    link.href = TELEGRAM_CONTACT_URL;
});

whatsappLinks.forEach((link) => {
    link.href = WHATSAPP_CONTACT_URL;
});

function trackEvent(eventName) {
    if (typeof window.gtag === "function") {
        window.gtag("event", eventName);
    }
}

function setLanguage(language) {
    const dictionary = translations[language] || translations.en;

    translatableElements.forEach((element) => {
        const key = element.dataset.i18n;

        if (dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    languageButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.lang === language);
    });

    document.documentElement.lang = language;

    if (previewModal && !previewModal.hidden && activePreviewTrigger && previewModalImage && previewModalTitle) {
        const title = getPreviewTitle(activePreviewTrigger);

        previewModalTitle.textContent = title;
        previewModalImage.alt = title;
    }
}

function getPreviewTitle(trigger) {
    const title = trigger.querySelector(".platform-preview-card-title");

    return title ? title.textContent.trim() : "";
}

function openPreviewModal(trigger) {
    if (!previewModal || !previewModalImage || !previewModalTitle) {
        return;
    }

    const title = getPreviewTitle(trigger);

    activePreviewTrigger = trigger;
    previewModalImage.src = trigger.dataset.previewSrc;
    previewModalImage.alt = title;
    previewModalTitle.textContent = title;
    previewModal.hidden = false;
    document.body.classList.add("preview-modal-open");

    const closeButton = previewModal.querySelector(".platform-preview-close");

    if (closeButton) {
        closeButton.focus();
    }
}

function closePreviewModal() {
    if (!previewModal || previewModal.hidden) {
        return;
    }

    previewModal.hidden = true;
    document.body.classList.remove("preview-modal-open");

    if (previewModalImage) {
        previewModalImage.removeAttribute("src");
        previewModalImage.alt = "";
    }

    if (activePreviewTrigger) {
        activePreviewTrigger.focus();
    }

    activePreviewTrigger = null;
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
        trackEvent(`language_switch_${button.dataset.lang}`);
    });
});

telegramLinks.forEach((link) => {
    link.addEventListener("click", () => {
        trackEvent("telegram_click");
    });
});

whatsappLinks.forEach((link) => {
    link.addEventListener("click", () => {
        trackEvent("whatsapp_click");
    });
});

platformWalkthroughLinks.forEach((link) => {
    link.addEventListener("click", () => {
        trackEvent("platform_walkthrough_click");
    });
});

customDemoLinks.forEach((link) => {
    link.addEventListener("click", () => {
        trackEvent("custom_demo_click");
    });
});

previewCards.forEach((card) => {
    card.addEventListener("click", () => {
        openPreviewModal(card);
    });
});

previewCloseControls.forEach((control) => {
    control.addEventListener("click", closePreviewModal);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closePreviewModal();
    }
});

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");

        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
        document.body.classList.toggle("nav-open", isOpen);
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Open navigation");
            document.body.classList.remove("nav-open");
        });
    });
}

setLanguage("en");
