export const projects = [
    {
        id: 1,
        title: 'Asset Craft AI',
        subtitle: 'AI-Powered Content Generation Platform',
        description: 'Developed interactive UI for AI-based generation of emails, PDFs, call scripts & landing pages. Integrated LLM-driven APIs for dynamic content output.',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'LLM APIs'],
        features: [
            'AI-powered content generation',
            'LLM API integration',
            'Template-based workflows',
            'Real-time content preview',
            'Multi-format export (PDF, HTML)'
        ],
        image: '/projects/asset-craft.jpg',
        category: 'fullstack'
    },
    {
        id: 2,
        title: 'HRMS Employee Portal',
        subtitle: 'Attendance, Leave & Employee Management',
        description: 'Built end-to-end features across attendance, leave management, employee directory & HR calendar modules with REST API integration.',
        tech: ['React.js', 'Tailwind CSS', 'REST APIs'],
        features: [
            'Attendance tracking and reporting',
            'Leave application and approval workflow',
            'Employee directory with search',
            'Interactive calendar with holidays',
            'Dashboard with key metrics'
        ],
        image: '/projects/hrms.jpg',
        category: 'fullstack'
    },
    {
        id: 3,
        title: 'CARSINE',
        subtitle: 'Car Detailing Booking Platform (Full Stack)',
        description: 'Developed full booking flow with backend APIs and frontend UI. Handled user appointments, service management, and database operations.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        features: [
            'User authentication and profile management',
            'Service booking and scheduling system',
            'Backend APIs for appointments and services',
            'Database operations with MongoDB',
            'Admin dashboard for service management'
        ],
        liveUrl: 'https://carsine-front-end.vercel.app/',
        githubFrontend: 'https://github.com/SandeepMohan99/CARSINE_FrontEnd',
        githubBackend: 'https://github.com/SandeepMohan99/CARSINE_backend.git',
        image: '/projects/carsine.jpg',
        category: 'fullstack'
    },
    {
        id: 4,
        title: 'Hungry Eats',
        subtitle: 'Digital Restaurant Ordering System (Full Stack)',
        description: 'Built digital menu ordering, table reservation & checkout workflow. Developed admin interface for kitchen to manage incoming orders.',
        tech: ['React.js', 'Node.js', 'JSON Server'],
        features: [
            'Digital menu with category filtering',
            'Table reservation system',
            'Self-checkout functionality',
            'Kitchen admin panel for order management',
            'Real-time order status updates'
        ],
        githubFrontend: 'https://github.com/SandeepMohan99/Hungry-Eats.git',
        image: '/projects/hungry-eats.jpg',
        category: 'frontend'
    }
];
