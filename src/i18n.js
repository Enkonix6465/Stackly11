import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      adminDashboard: {
        email: "Email",
        name: "Name",
        role: "Role",
        time: "Time",
        date: "Date",
        event: "Event",
        userLoginActivity: "User Login Activity",
        totalRegisteredUsers: "Total Registered Users",
        noUserLogins: "No user logins or signups yet.",
        signup: "Signup",
        login: "Login",
        designProposals: "Design Proposals",
        projectsInProgress: "Projects In Progress",
        pendingApprovals: "Pending Approvals",
        delayedProjects: "Delayed Projects",
        upcomingHandovers: "Upcoming Handovers",
        invoiceClients: [
          "GreenSpace Developers",
          "UrbanHabitat Ltd.",
          "Skyline Apartments",
          "Blue Ocean Realty",
        ],
        firmProjectOverview: "Firm Project Overview",
        ongoingProjects: "Ongoing Projects",
        activeProjects: "{{count}} active projects",
        completedProjects: "{{count}} completed",
        projectsByCountry: "Projects by Country",
        projectsDeliveredGlobally: "{{count}} projects delivered globally",
        recentProjectInvoices: "Recent Project Invoices",
        clientName: "Client Name",
        status: "Status",
        paid: "Paid",
        pending: "Pending",
        unpaid: "Unpaid",
        projectLocations: "Project Locations",
        active: "Active",
        nonActive: "Non-active",
        totalProjects: "Total Projects",
        completedProjectsLabel: "Completed Projects",
        clientsServed: "Clients Served",
      },
      contact: {
        heroTitle: "Contact Vision Builders",
        heroSubtitle:
          "Ready to discuss your next construction or architectural project? Reach out today to get started.",
        reachTitle: "Ways to Reach Us",
        emailTitle: "Email",
        phoneTitle: "Phone",
        whatsappTitle: "WhatsApp",
        formTitle: "Send Us a Message",
        form: {
          name: "Your Name",
          email: "Mail",
          phone: "Phone",
          message: "Message",
          messagePlaceholder: "How can we help with your project?",
          send: "Send Message",
          success: "Message sent successfully!",
        },
        officesTitle: "Our Offices",
        phoneLabel: "Phone",
        mapNote: "(Map & directions available upon request)",
        locations: [
          {
            city: "Mumbai",
            address: "12 Skyline Lane, Fort, Mumbai 400001",
            phone: "+91-22-5555-1212",
          },
          {
            city: "Delhi",
            address: "220A, Architect Road, Connaught Place, New Delhi 110001",
            phone: "+91-11-4433-2211",
          },
          {
            city: "Bengaluru",
            address: "7 Vision Avenue, Indiranagar, Bengaluru 560038",
            phone: "+91-80-5577-8899",
          },
        ],
        faqTitle: "Frequently Asked Questions",
        faqs: [
          {
            question:
              "What types of construction projects do you specialize in?",
            answer:
              "We handle residential, commercial, and industrial projects, including new builds, renovations, interiors, and urban planning.",
          },
          {
            question: "How long does it take to complete a typical project?",
            answer:
              "Timelines vary by scope and size. Most residential builds are completed within 6–12 months, with regular updates provided throughout the process.",
          },
          {
            question: "Can you help with permits and approvals?",
            answer:
              "Yes, our expert team manages documentation, permits, and government approvals for a smooth, hassle-free experience.",
          },
          {
            question: "Do you design as well as build?",
            answer:
              "Absolutely! We offer complete design-build solutions, from architectural concepts to finished construction.",
          },
        ],
      },
      renovationPage: {
        title: "Renovations: Essential Tips and Best Practices",
        author: "Ar. Sneha Nair",
        date: "July 15, 2025",
        intro:
          "Renovating your home or commercial space can be a rewarding yet complex endeavor. Understanding the key strategies and best practices helps ensure a successful project.",
        scopeTitle: "Understanding Renovation Scope",
        scopeText:
          "Renovations can range from simple cosmetic upgrades to major structural changes. Defining the scope early on will guide design choices and budgeting.",
        challengesTitle: "Planning Common Renovation Challenges",
        challenges: [
          {
            title: "Structural Limitations:",
            text: "Assessing load-bearing walls and foundation constraints.",
          },
          {
            title: "Permitting Requirements:",
            text: "Securing local permits and approvals before work begins.",
          },
          {
            title: "Material Selection:",
            text: "Choosing durable, sustainable, and period-appropriate materials.",
          },
          {
            title: "Timeline Management:",
            text: "Coordinating contractors and deliveries to stay on schedule.",
          },
          {
            title: "Budget Control:",
            text: "Planning for unexpected costs and contingencies.",
          },
        ],
        expertTitle: "The Role of Expert Guidance",
        expertText:
          "Experienced architects and project managers can foresee pitfalls, recommend innovative solutions, and ensure your renovation enhances both value and livability.",
        outro:
          "Contact Vision Builders to get expert advice and professional renovation services built around your needs and aspirations.",
      },
      Back: "Back",
      planningResidential: {
        title: "Planning Your Residential Project: A Comprehensive Guide",
        author: "Ar. Priya Sharma",
        date: "August 1, 2025",
        intro1:
          "Successfully planning a residential construction project requires thorough understanding and careful preparation. Here’s a guide to help you navigate the process.",
        intro2:
          "Whether building a new home or renovating an existing space, attention to detail at each stage ensures your vision comes to life smoothly and within budget.",
        goalsTitle: "Setting Your Goals and Budget",
        goalsText:
          "Clearly define your project goals including style preferences, functional needs, and budget constraints to guide the design and construction phases.",
        architectsTitle: "Working with Architects and Engineers",
        architectsText:
          "Collaborate with professionals to develop detailed plans, structural calculations, and material selections tailored specifically for your site and requirements.",
        permitsTitle: "Obtaining Permits and Approvals",
        permitsText:
          "Ensure all necessary permits are secured from local authorities before construction begins to comply with regulations and avoid delays.",
        timelineTitle: "Project Timeline and Management",
        timelineText:
          "Establish realistic schedules, monitor progress regularly, and maintain communication with your construction team to handle challenges efficiently.",
        tipsTitle: "Tips for a Smooth Project",
        tips: [
          "Keep a detailed record of decisions and approvals",
          "Prioritize sustainable and energy-efficient design choices",
          "Maintain flexibility for adjustments along the way",
          "Engage a reliable project manager or builder for professional oversight",
        ],
        outro:
          "Our expert team at Vision Builders is ready to support you throughout every step of your residential project planning and execution. Contact us for personalized consultation and guidance.",
      },
      modernArchitecture: {
        metaTitle: "The Modern Architecture Design Process | Vision Builders",
        title: "The Modern Architecture Design Process",
        author: "Ar. Rahul Verma",
        date: "July 24, 2025",
        intro:
          "Understanding the step-by-step architecture design process is key to realizing your vision for a functional and beautiful space. This guide covers what to expect from concept to completion.",
        conceptTitle: "Concept Development",
        conceptText:
          "We start by understanding your needs, site conditions, and budget to create initial sketches and concepts that reflect your vision and sustainability goals.",
        designTitle: "Design & Planning",
        designText:
          "Our architects refine the design with detailed drawings, 3D models, and material selection. We collaborate closely with you to ensure each detail meets your expectations.",
        permitsTitle: "Permits & Approvals",
        permitsText:
          "Preparing all necessary documentation, coordinating with regulatory authorities, and obtaining building permits to ensure your project complies with local laws and safety codes.",
        constructionTitle: "Construction & Management",
        constructionText:
          "We oversee construction, coordinating contractors and suppliers, managing timelines and budgets, and ensuring quality control throughout the build.",
        finalTitle: "Final Review & Handover",
        finalText:
          "After completion, we conduct thorough inspections and walk-throughs to ensure your project is delivered to the highest standards and your satisfaction.",
        tipsTitle: "Tips for a Successful Project",
        tips: [
          "Maintain clear and regular communication with your architect and builder",
          "Be proactive about budget considerations and potential changes",
          "Document decisions and approvals at every stage",
          "Prioritize sustainable and energy-efficient features",
        ],
        outro:
          "Our experienced team at Vision Builders is dedicated to guiding you through every phase of your architectural journey, ensuring a smooth, transparent, and rewarding experience. Contact us today to start planning your dream project.",
      },
      blog: {
        hero: {
          title: "Inspiration & Building Insights",
          subtitle:
            "Construction news, design guides, and expert tips from our team—helping you create better spaces for life and work.",
        },
        posts: [
          {
            title: "2025 Design Trends: What's Shaping Modern Architecture",
            date: "August 1, 2025",
            excerpt:
              "Discover this year’s most influential building materials, design philosophies, and eco-friendly innovations driving the world of architecture and construction...",
            author: "Ar. Priya Sharma",
          },
          {
            title: "How to Plan a Residential Project: From Blueprint to Build",
            date: "July 18, 2025",
            excerpt:
              "Explore the complete process for planning, designing, and executing a new home. Tips from architects and site engineers for smooth project delivery...",
            author: "Eng. Rahul Verma",
          },
          {
            title: "Renovating for Sustainability: Practical Approaches",
            date: "July 5, 2025",
            excerpt:
              "Learn how to integrate green practices and energy efficiency into renovations—plus ways to maximize value and comfort.",
            author: "Ar. Sneha Nair",
          },
        ],
        suggestionsTitle: "Project Planning & Building Tips",
        suggestions: [
          {
            title: "Planning Your Project",
            description:
              "Define your goals, budget, and timeline early. Consult with architects for a vision that matches your needs and site conditions.",
          },
          {
            title: "Choosing Sustainable Materials",
            description:
              "Prioritize energy-efficient, locally-sourced, and long-lasting building materials for better environmental impact and cost savings.",
          },
          {
            title: "Smart Home Integrations",
            description:
              "Incorporate the latest technologies—smart lighting, security, and climate control—for convenience and better quality of living.",
          },
          {
            title: "Managing Project Costs",
            description:
              "Work closely with your builder for transparent cost estimates. Plan for contingencies and monitor progress at every stage.",
          },
          {
            title: "Renovation Success Tips",
            description:
              "Assess the existing structure's condition. Plan for upgrades in insulation, lighting, and space utilization for the best results.",
          },
          {
            title: "Working with Architects",
            description:
              "Share your ideas, preferences, and priorities clearly. Regular collaboration ensures the best outcome for your vision.",
          },
        ],
        precautionsTitle: "Safety Precautions at Home & Work",
        precautions: {
          below18Title: "Children & Teens",
          adultsTitle: "Adults",
          seniorCitizensTitle: "Senior Citizens",
          below18: [
            "Inform parents or guardians before making changes to your room or home.",
            "Avoid climbing on unstable furniture or fixtures.",
            "Do not operate power tools or heavy equipment unsupervised.",
            "Know emergency exit routes and basic first aid.",
          ],
          adults: [
            "Check credentials when hiring contractors or service providers.",
            "Ensure proper ventilation during painting or renovation.",
            "Secure all construction permits before starting work.",
            "Discuss scope, costs, and timelines with your architect at every step.",
          ],
          seniorCitizens: [
            "Install handrails and slip-resistant flooring where possible.",
            "Ensure living spaces are well-lit and free of obstructions.",
            "Keep emergency contacts visible and accessible.",
            "Arrange regular maintenance checks for building safety.",
          ],
        },
        facts: {
          ariaLabel: "Architecture/Building Knowledge",
          imageAlt: "Iconic Building",
          title: "Building the Future: Did You Know?",
          0: "The tallest building in the world, the Burj Khalifa, stands at 828 meters and required over 330,000 cubic meters of concrete!",
          1: "Sustainable design can reduce a building's operating costs by up to 50% through energy and water savings.",
          2: "Modern BIM (Building Information Modeling) improves collaboration among architects, engineers, and contractors for fewer errors.",
          3: "The Great Wall of China is over 13,000 miles long—history’s most impressive construction feat!",
        },
        quiz: {
          tryAgain: " Try Again",
          resultScore: "You scored {{score}} out of {{total}}!",
          resultTitle: "Quiz Result",
          title: "Test Your Architecture Knowledge",
          correct: "Correct! Well done.",
          incorrect: "Incorrect. The correct answer is: {{answer}}",
          prev: "← Previous",
          next: "Next →",
          finish: "Finish",
          0: {
            question:
              "Which architectural style is known for its use of glass and steel?",
            options: [
              "A. Brutalism",
              "B. Modernism",
              "C. Gothic",
              "D. Baroque",
            ],
          },
          1: {
            question:
              "Minimum recommended ceiling height for living rooms (as per most standards)?",
            options: ["A. 2.3m", "B. 2.6m", "C. 2.9m", "D. 3.2m"],
          },
          2: {
            question: "What is LEED certification related to in construction?",
            options: [
              "A. Safety Standards",
              "B. Project Management",
              "C. Green Building",
              "D. Judicial Approvals",
            ],
          },
          3: {
            question: "Which tool is essential for site measurements?",
            options: [
              "A. Hammer",
              "B. Trowel",
              "C. Measuring Tape",
              "D. Level",
            ],
          },
          4: {
            question: "A cantilever is best described as:",
            options: [
              "A. A type of paint",
              "B. A projecting structure supported at only one end",
              "C. A concrete mixture",
              "D. A type of roof tile",
            ],
          },
        },
        readMoreAria: "Read more about {{title}}",
      },
      renovation: {
        hero: {
          title: "Renovation & Restoration",
          subtitle:
            "Transform your space with our expert renovation and restoration services. We bring new life to old structures, ensuring quality, style, and functionality.",
        },
        benefitsTitle: "Key Benefits",
        benefitsSubtitle: "Why choose our renovation and restoration services?",
        benefits: [
          "Expertise: Our team has decades of experience in transforming spaces.",
          "Quality Materials: We use only the best materials for lasting results.",
          "Customization: Every project is tailored to your unique needs.",
          "Timely Delivery: We respect your time and deliver on schedule.",
          "Sustainability: Eco-friendly solutions for a better tomorrow.",
          "Value: Increase the value and comfort of your property.",
        ],
        visionTitle: "Our Vision",
        visionSubtitle:
          "To rejuvenate spaces with innovative solutions and unmatched craftsmanship.",
        servicesTitle: "Our Services",
        services: [
          {
            title: "Home Renovation",
            description:
              "Complete makeovers for kitchens, bathrooms, living spaces, and more.",
          },
          {
            title: "Commercial Restoration",
            description:
              "Revitalize offices, retail spaces, and commercial buildings.",
          },
          {
            title: "Historical Preservation",
            description:
              "Restore and preserve the charm of heritage properties.",
          },
          {
            title: "Structural Repairs",
            description:
              "Address foundational and structural issues with expert care.",
          },
          {
            title: "Interior Upgrades",
            description:
              "Modernize interiors with new layouts, finishes, and fixtures.",
          },
          {
            title: "Exterior Facelifts",
            description:
              "Enhance curb appeal with exterior renovations and landscaping.",
          },
        ],
        processTitle: "How It Works",
        processSubtitle:
          "Our streamlined process ensures a hassle-free experience from start to finish.",
        process: [
          "Consultation & Assessment",
          "Design & Planning",
          "Budgeting & Proposal",
          "Material Selection",
          "Execution & Supervision",
          "Quality Checks",
          "Project Handover",
        ],
        cubes: ["Consult", "Design", "Budget", "Select", "Build", "Deliver"],
        featuresTitle: "Why Choose Us?",
        featuresSubtitle: "Our unique approach sets us apart.",
        features: [
          "Transparent Pricing",
          "Skilled Professionals",
          "Comprehensive Services",
          "Customer Satisfaction",
        ],
        featuresDesc: [
          "We provide clear, upfront pricing with no hidden costs.",
          "Our team consists of certified and experienced professionals.",
          "From design to execution, we handle every aspect of your project.",
          "We prioritize your satisfaction and deliver results that exceed expectations.",
        ],
        featuresCardText: "Benefit: {{feature}}",
        pricingTitle: "Flexible Pricing Plans",
        pricingSubtitle: "Choose a plan that fits your needs and budget.",
        pricing: [
          {
            title: "Basic Refresh",
            price: "$2,500",
            priceNote: " / room",
            features: [
              "Surface repairs",
              "Painting & finishes",
              "Minor fixture upgrades",
              "Cleanup included",
              "1-year warranty",
            ],
            buttonText: "Book Consultation",
          },
          {
            title: "Standard Renovation",
            price: "$7,500",
            priceNote: " / area",
            features: [
              "All Basic features",
              "Layout changes",
              "Plumbing & electrical",
              "Custom cabinetry",
              "2-year warranty",
            ],
            buttonText: "Contact Us",
            badge: "Most Popular",
          },
          {
            title: "Premium Restoration",
            price: "Custom",
            priceNote: "",
            features: [
              "All Standard features",
              "Heritage restoration",
              "Structural repairs",
              "Premium materials",
              "Full project management",
              "Landscaping",
              "5-year warranty",
            ],
            buttonText: "Get Started",
          },
        ],
      },
      urbanPlanning: {
        hero: {
          title: "Urban Planning",
          subtitle:
            "Shaping the future of communities through strategic design and sustainable growth.",
        },
        benefitsTitle: "Key Advantages",
        benefitsSubtitle:
          "Driving progress with thoughtful, innovative, and community-focused urban design solutions.",
        benefits: [
          "Holistic and Sustainable Community Design",
          "Optimized Land Use and Resource Management",
          "Enhanced Public Spaces and Livability",
          "Strategic Economic and Infrastructure Planning",
          "Efficient Regulatory and Permitting Navigation",
          "Inclusive Stakeholder and Community Engagement",
        ],
        visionTitle: "Your Vision. Our Blueprint.",
        visionSubtitle:
          "Transforming concepts into reality with forward-thinking urban and regional planning.",
        servicesTitle: "Urban Planning Services",
        services: [
          {
            title: "Master Planning & Zoning",
            description:
              "Developing comprehensive master plans and managing zoning regulations to shape future growth.",
          },
          {
            title: "Sustainable Development",
            description:
              "Integrating green infrastructure, energy efficiency, and resilient design into projects.",
          },
          {
            title: "Community & Stakeholder Engagement",
            description:
              "Facilitating inclusive public workshops and dialogue to build consensus and support.",
          },
          {
            title: "Land Use & Feasibility Studies",
            description:
              "Analyzing site potential and market trends to ensure viable and successful urban projects.",
          },
          {
            title: "Transit-Oriented Development (TOD)",
            description:
              "Creating vibrant, walkable communities around public transit hubs to reduce traffic and promote connectivity.",
          },
          {
            title: "Urban Revitalization",
            description:
              "Transforming underutilized or distressed areas into thriving, vibrant urban centers.",
          },
        ],
        processTitle: "OUR PROCESS",
        processSubtitle: "A collaborative and comprehensive approach",
        process: [
          "Initiate with a project visioning session.",
          "Conduct site and community analysis.",
          "Develop strategic planning options.",
          "Manage permitting and regulatory approvals.",
          "Implement design and project phasing.",
          "Provide post-project support and assessment.",
        ],
        cubes: [
          "Vision",
          "Analysis",
          "Strategy",
          "Approvals",
          "Phasing",
          "Support",
        ],
        featuresTitle: "Our Project Features",
        featuresSubtitle:
          "Empowering your project with innovative technology and insights.",
        featuresDesc: [
          "Our planning process is built on a foundation of data-driven analysis and community collaboration. We use advanced tools to visualize scenarios and predict outcomes.",
          "We believe that successful projects are born from inclusive dialogue. Our digital platforms make it easy to gather and integrate valuable public feedback.",
          "From initial concept to final approval, we provide transparent progress tracking. Our clients are always informed and engaged, ensuring a smooth and predictable process.",
          "We help navigate the complexities of permitting and regulatory compliance, providing clear guidance and expert support to avoid delays.",
        ],
        features: [
          "Data-driven urban analytics",
          "Interactive 3D city modeling",
          "Community feedback portal",
          "Regulatory approval tracking",
        ],
        featuresCardText: "Benefit from {{feature}} as a valued client.",
        pricingTitle: "Start Your Urban Project",
        pricingSubtitle:
          "From a single site to a master-planned community, we have a solution for you.",
        pricing: [
          {
            title: "Project Consult",
            price: "$2,500",
            priceNote: "/initial phase",
            features: [
              "Single-session consultation",
              "Initial feasibility assessment & land use review",
              "Actionable recommendations for project kick-off",
              "Executive summary report and next steps",
              "Follow-up email support",
            ],
            buttonText: "Book Consult",
          },
          {
            title: "Standard Development",
            price: "Quote",
            priceNote: "/project",
            features: [
              "Includes all features from Project Consult",
              "Comprehensive master planning & design",
              "Full regulatory and permitting support",
              "Stakeholder engagement strategy & facilitation",
            ],
            buttonText: "Request Quote",
            badge: "MOST POPULAR",
          },
          {
            title: "Urban Partnership",
            price: "Quote",
            priceNote: "/long-term",
            features: [
              "Full-scope urban planning services",
              "Post-implementation monitoring & support",
              "Dedicated project lead & team access",
              "Strategic partnership for multiple projects",
              "Customized solutions for complex urban challenges",
            ],
            buttonText: "Start Now",
          },
        ],
      },
      "Industrial Facilities": "Industrial Facilities",
      "End-to-end facility support for all stages of development growth.":
        "End-to-end facility support for all stages of development growth.",
      "Comprehensive support for industrial facility planning and operations":
        "Comprehensive support for industrial facility planning and operations",
      "Detailed contract review and drafting for industrial projects":
        "Detailed contract review and drafting for industrial projects",
      "Expert guidance on plant expansions, mergers, and restructuring":
        "Expert guidance on plant expansions, mergers, and restructuring",
      "Compliance and safety advice for industrial regulations":
        "Compliance and safety advice for industrial regulations",
      "Risk management for facility managers and stakeholders":
        "Risk management for facility managers and stakeholders",
      "Proactive representation in regulatory and industrial disputes":
        "Proactive representation in regulatory and industrial disputes",
      "Industrial Facility Planning": "Industrial Facility Planning",
      "Strategic guidance for designing, expanding, and structuring industrial plants and complexes":
        "Strategic guidance for designing, expanding, and structuring industrial plants and complexes",
      "Industrial Contracts & Agreements": "Industrial Contracts & Agreements",
      "Drafting, negotiation, and review of contracts for construction, equipment, and operations":
        "Drafting, negotiation, and review of contracts for construction, equipment, and operations",
      "Plant Expansions & Mergers": "Plant Expansions & Mergers",
      "Legal due diligence, transaction structuring, and regulatory filings for industrial mergers and expansions":
        "Legal due diligence, transaction structuring, and regulatory filings for industrial mergers and expansions",
      "Regulatory & Safety Compliance": "Regulatory & Safety Compliance",
      "Advice on industrial regulations, safety standards, and ongoing compliance audits":
        "Advice on industrial regulations, safety standards, and ongoing compliance audits",
      "Facility Disputes & Resolution": "Facility Disputes & Resolution",
      "Expert representation and mediation in industrial and facility-related disputes":
        "Expert representation and mediation in industrial and facility-related disputes",
      "Industrial Governance": "Industrial Governance",
      "Advisory on facility management, risk mitigation, and compliance with industrial standards":
        "Advisory on facility management, risk mitigation, and compliance with industrial standards",
      "Direct access to industrial facility specialists":
        "Direct access to industrial facility specialists",
      "Timely review of industrial documents and contracts":
        "Timely review of industrial documents and contracts",
      "Custom safety and compliance checklists":
        "Custom safety and compliance checklists",
      "On-demand updates via our facility portal":
        "On-demand updates via our facility portal",
      "Project Evaluation": "Project Evaluation",
      "Initial consultation with an engineer":
        "Initial consultation with an engineer",
      "Review of facility schematics (up to 20 pages)":
        "Review of facility schematics (up to 20 pages)",
      "Initial feasibility study & options":
        "Initial feasibility study & options",
      "Technical recommendations": "Technical recommendations",
      "Follow-up email support": "Follow-up email support",
      "Maintenance & Support": "Maintenance & Support",
      "All Project Evaluation services": "All Project Evaluation services",
      "24/7 emergency response & support": "24/7 emergency response & support",
      "Equipment calibration & performance audits":
        "Equipment calibration & performance audits",
      "Turnkey Solution": "Turnkey Solution",
      "End-to-end management for new builds or upgrades":
        "End-to-end management for new builds or upgrades",
      "Custom design and engineering": "Custom design and engineering",
      "On-site team & priority project management":
        "On-site team & priority project management",
      "Regular progress reports & strategy calls":
        "Regular progress reports & strategy calls",
      "MOST POPULAR": "MOST POPULAR",
      "Key Advantages": "Key Advantages",
      "Mediation, arbitration, or litigation to resolve conflicts effectively":
        "Mediation, arbitration, or litigation to resolve conflicts effectively",
      "Arbitration and Litigation.": "Arbitration and Litigation.",
      "Get compassionate, effective solutions for even the most delicate matters.":
        "Get compassionate, effective solutions for even the most delicate matters.",
      "Industrial Services": "Industrial Services",
      "HOW WE WORK": "HOW WE WORK",
      "Our residential project process": "Our residential project process",
      "Personalized consultation and vision assessment.":
        "Personalized consultation and vision assessment.",
      "Site analysis and feasibility planning.":
        "Site analysis and feasibility planning.",
      "Custom architectural design development.":
        "Custom architectural design development.",
      "Permitting and regulatory compliance management.":
        "Permitting and regulatory compliance management.",
      "Construction and quality assurance.":
        "Construction and quality assurance.",
      "Regular updates and collaborative client feedback.":
        "Regular updates and collaborative client feedback.",
      "Final walkthrough and post-completion support.":
        "Final walkthrough and post-completion support.",
      "Why Choose Us for Industrial Facility Services":
        "Why Choose Us for Industrial Facility Services",
      "Enhancing industrial spaces with reliable renovation and restoration solutions.":
        "Enhancing industrial spaces with reliable renovation and restoration solutions.",
      "Expertise in Industrial Renovation:":
        "Expertise in Industrial Renovation:",
      "Our team has extensive experience in upgrading warehouses, factories, and production plants to meet modern safety and operational standards.":
        "Our team has extensive experience in upgrading warehouses, factories, and production plants to meet modern safety and operational standards.",
      "Comprehensive Maintenance & Compliance:":
        "Comprehensive Maintenance & Compliance:",
      "We ensure your facilities remain compliant with industry regulations through preventive maintenance, structural inspections, and energy-efficient upgrades.":
        "We ensure your facilities remain compliant with industry regulations through preventive maintenance, structural inspections, and energy-efficient upgrades.",
      "Customized Restoration Solutions:": "Customized Restoration Solutions:",
      // "Maintenance & Support": "Maintenance & Support",
      "Benefit from {{feature}} as our corporate client.":
        "Benefit from {{feature}} as our corporate client.",
      "Secure Your Corporate Advantage": "Secure Your Corporate Advantage",
      "Build and grow your company with expert legal partners by your side.":
        "Build and grow your company with expert legal partners by your side.",
      // --- CommercialComplexes.jsx keys ---
      // "Key Advantages": "Key Advantages",
      "Our commercial project process": "Our commercial project process",
      session: "session",
      "Smartly designed and expertly executed commercial complexes to help businesses thrive.":
        "Smartly designed and expertly executed commercial complexes to help businesses thrive.",
      "Expert planning and design tailored to commercial needs":
        "Expert planning and design tailored to commercial needs",
      // "MOST POPULAR": "MOST POPULAR",
      "Compliance with modern safety and regulatory standards":
        "Compliance with modern safety and regulatory standards",
      "Sustainable and energy-efficient construction methods":
        "Sustainable and energy-efficient construction methods",
      "High-quality materials ensuring durability and aesthetics":
        "High-quality materials ensuring durability and aesthetics",
      "Timely delivery with strict project management practices":
        "Timely delivery with strict project management practices",
      "Your Vision. Our Blueprint.": "Your Vision. Our Blueprint.",
      // "HOW WE WORK": "HOW WE WORK",
      "Design & Architecture": "Design & Architecture",
      "Innovative architectural designs tailored for retail, office, and mixed-use commercial complexes.":
        "Innovative architectural designs tailored for retail, office, and mixed-use commercial complexes.",
      "Structural Engineering": "Structural Engineering",
      "Safe and robust structures ensuring long-term reliability and compliance with all codes.":
        "Safe and robust structures ensuring long-term reliability and compliance with all codes.",
      "Construction Management": "Construction Management",
      "End-to-end project management ensuring efficiency, cost-effectiveness, and timely delivery.":
        "End-to-end project management ensuring efficiency, cost-effectiveness, and timely delivery.",
      "Interior Fit-outs": "Interior Fit-outs",
      "Customized interiors designed for functionality, branding, and modern aesthetics.":
        "Customized interiors designed for functionality, branding, and modern aesthetics.",
      "Sustainability Solutions": "Sustainability Solutions",
      "Eco-friendly practices including energy-efficient systems, water management, and green materials.":
        "Eco-friendly practices including energy-efficient systems, water management, and green materials.",
      Deliver: "Deliver",
      // "Maintenance & Support": "Maintenance & Support",
      "Post-construction support including regular inspections, upgrades, and maintenance services.":
        "Post-construction support including regular inspections, upgrades, and maintenance services.",
      Consultation: "Consultation",
      "One-on-one consultation with our commercial expert":
        "One-on-one consultation with our commercial expert",
      "Site feasibility analysis": "Site feasibility analysis",
      "Initial concept design discussion": "Initial concept design discussion",
      "Budget estimation and project scope outline":
        "Budget estimation and project scope outline",
      "Complete architectural design & planning":
        "Complete architectural design & planning",
      "Structural, MEP engineering & maintenance":
        "Structural, MEP engineering & maintenance",
      "Project execution & supervision": "Project execution & supervision",
      "Timely handover of commercial complex":
        "Timely handover of commercial complex",
      "Structural assessment of existing buildings":
        "Structural assessment of existing buildings",
      "Redesign for modern layouts": "Redesign for modern layouts",
      "Expansion and retrofitting services":
        "Expansion and retrofitting services",
      "Updated interiors and sustainable upgrades":
        "Updated interiors and sustainable upgrades",
      "Compliance with current regulations and standards":
        "Compliance with current regulations and standards",
      "Build Your Commercial Complex With Confidence":
        "Build Your Commercial Complex With Confidence",
      "Get expert planning, reliable execution, and peace of mind for your commercial project—with us.":
        "Get expert planning, reliable execution, and peace of mind for your commercial project—with us.",
      "Commercial Complex Features": "Commercial Complex Features",
      "Designed for efficiency, safety, and business success.":
        "Designed for efficiency, safety, and business success.",
      "We deliver innovative solutions for commercial complexes, ensuring compliance, safety, and optimal business environments.":
        "We deliver innovative solutions for commercial complexes, ensuring compliance, safety, and optimal business environments.",
      "You can monitor project progress, access building plans, and receive updates online, or contact us for tailored business support.":
        "You can monitor project progress, access building plans, and receive updates online, or contact us for tailored business support.",
      "Our team is available for urgent site visits, regulatory approvals, and last-minute business requirements.":
        "Our team is available for urgent site visits, regulatory approvals, and last-minute business requirements.",
      "Every inquiry is addressed with professionalism, speed, and clarity.":
        "Every inquiry is addressed with professionalism, speed, and clarity.",
      "Direct collaboration with architects and engineers":
        "Direct collaboration with architects and engineers",
      "Transparent progress tracking and reports":
        "Transparent progress tracking and reports",
      "Custom design layouts for varied business types":
        "Custom design layouts for varied business types",
      "On-demand project updates and client walkthroughs":
        "On-demand project updates and client walkthroughs",
      "Benefit from {{feature}} as our civil client.":
        "Benefit from {{feature}} as our civil client.",
      "Renovation & Expansion": "Renovation & Expansion",
      "Book Consult": "Book Consult",
      "Start Now": "Start Now",
      Build: "Build",
      "Initial consultation and requirement analysis.":
        "Initial consultation and requirement analysis.",
      "Site survey and feasibility study.":
        "Site survey and feasibility study.",
      "Conceptual and architectural design creation.":
        "Conceptual and architectural design creation.",
      "Regulatory approvals and compliance handling.":
        "Regulatory approvals and compliance handling.",
      "Efficient construction with quality monitoring.":
        "Efficient construction with quality monitoring.",
      "Transparent client updates and review meetings.":
        "Transparent client updates and review meetings.",
      "Final handover and post-completion support.":
        "Final handover and post-completion support.",

      plan: "plan",
      // --- ResidentialProjects.jsx additional keys ---
      // --- InteriorDesign.jsx keys ---
      "interior.heroTitle": "Interior Design",
      "interior.heroSubtitle":
        "Creating spaces that are both beautiful and livable.",
      "interior.benefitsTitle": "Our Design Philosophy",
      "interior.benefitsSubtitle":
        "A collaborative approach to create functional and captivating environments.",
      "interior.benefit1": "Personalized spaces that reflect your unique style",
      "interior.benefit2": "Optimized use of space, light, and color",
      "interior.benefit3":
        "Seamless project management from concept to completion",
      "interior.benefit4":
        "Access to exclusive materials and custom furnishings",
      "interior.benefit5": "Stress-free process with professional guidance",
      "interior.benefit6": "Increased property value and market appeal",
      "interior.benefitsImageTitle": "Designing Your Dream Space.",
      "interior.benefitsImageSubtitle":
        "We believe a well-designed interior is a reflection of its inhabitants.",
      "interior.servicesTitle": "Our Interior Design Services",
      "interior.service1.title": "Residential Interior Design",
      "interior.service1.desc":
        "Transforming homes into functional and beautiful living spaces, tailored to your lifestyle.",
      "interior.service2.title": "Commercial Space Planning",
      "interior.service2.desc":
        "Creating inspiring and efficient environments for offices, retail, and hospitality sectors.",
      "interior.service3.title": "3D Rendering & Virtual Walkthroughs",
      "interior.service3.desc":
        "Bringing your design to life with high-fidelity 3D models and interactive virtual tours.",
      "interior.service4.title": "Color Consultation & Styling",
      "interior.service4.desc":
        "Expert advice on color palettes, furniture selection, and decor to harmonize your space.",
      "interior.service5.title": "Renovation & Remodeling",
      "interior.service5.desc":
        "Full-service project management for residential and commercial renovations from start to finish.",
      "interior.service6.title": "E-Design Packages",
      "interior.service6.desc":
        "A flexible and affordable virtual service for those who want a professional design plan to implement themselves.",
      "interior.processTitle": "OUR DESIGN PROCESS",
      "interior.processSubtitle": "From a blank canvas to a masterpiece.",
      "interior.processStep1": "Initial consultation and client brief.",
      "interior.processStep2":
        "In-depth conceptualization and mood board creation.",
      "interior.processStep3": "Space planning and 3D visualization.",
      "interior.processStep4": "Material, furniture, and accessory selection.",
      "interior.processStep5": "Execution, installation, and styling.",
      "interior.processStep6": "Final review and client handover.",
      "interior.cube1": "Conceive",
      "interior.cube2": "Plan",
      "interior.cube3": "Render",
      "interior.cube4": "Select",
      "interior.cube5": "Install",
      "interior.cube6": "Style",
      "interior.featuresTitle": "Our Client-Focused Approach",
      "interior.featuresSubtitle":
        "Delivering a beautiful and stress-free design experience.",
      "interior.featuresPara1":
        "We believe the best designs come from close collaboration, from the first sketch to the final styling.",
      "interior.featuresPara2":
        "Our team manages every detail of the project, including vendor coordination and material delivery.",
      "interior.featuresPara3":
        "Receive regular updates and have access to our secure digital portal to review plans and progress anytime.",
      "interior.featuresPara4":
        "We provide peace of mind throughout the entire process, making your design journey enjoyable and stress-free.",
      "interior.feature1": "Custom design concepts and renderings",
      "interior.feature2": "Curated list of furniture and material selections",
      "interior.feature3": "Dedicated project manager for real-time updates",
      "interior.feature4": "Post-completion support and styling advice",
      "interior.featureBenefit":
        "Benefit from {{feature}} as our interior design client.",
      "interior.pricingTitle": "Design Your Dream Space",
      "interior.pricingSubtitle":
        "Choose the perfect package to transform your home or office.",
      "interior.pricing1.title": "E-Design Package",
      "interior.pricing1.priceNote": "/room",
      "interior.pricing1.feature1": "Personalized digital design board",
      "interior.pricing1.feature2": "Clickable shopping list of products",
      "interior.pricing1.feature3": "Floor plan with furniture layout",
      "interior.pricing1.feature4": "One round of revisions included",
      "interior.pricing1.feature5": "Email support for implementation",
      "interior.pricing1.feature6": "Virtual consultation available",
      "interior.pricing1.button": "Book Consult",
      "interior.pricing2.title": "Full-Service Design",
      "interior.pricing2.priceNote": "/room",
      "interior.pricing2.feature1": "All E-Design services",
      "interior.pricing2.feature2": "On-site visits and project management",
      "interior.pricing2.feature3": "Sourcing and procurement of materials",
      "interior.pricing2.feature4": "Installation and final styling",
      "interior.pricing2.feature5": "Access to exclusive trade discounts",
      "interior.pricing2.button": "Contact Us",
      "interior.pricing2.badge": "MOST POPULAR",
      "interior.pricing3.title": "Renovation & Remodel",
      "interior.pricing3.priceNote": "/project",
      "interior.pricing3.feature1": "Full design and planning services",
      "interior.pricing3.feature2": "Architectural drawing and permits",
      "interior.pricing3.feature3": "Coordination with contractors",
      "interior.pricing3.feature4": "Complete project oversight",
      "interior.pricing3.feature5": "Post-renovation styling and support",
      "interior.pricing3.feature6": "Sustainability-focused design options",
      "interior.pricing3.button": "Start Now",
      // Service Titles (ensure these are present and match exactly)
      "Landscape Design": "Landscape Design",
      "Smart Home Integration": "Smart Home Integration",
      "Home Extensions": "Home Extensions",

      // Pricing/Features (ensure these are present and match exactly)
      "Discuss your vision and requirements":
        "Discuss your vision and requirements",
      "Preliminary feasibility and site assessment":
        "Preliminary feasibility and site assessment",
      "Estimate project scope and budget": "Estimate project scope and budget",
      "Outline next steps and project timeline":
        "Outline next steps and project timeline",
      "Follow-up consultation to finalize details":
        "Follow-up consultation to finalize details",
      "No obligation to proceed with the project":
        "No obligation to proceed with the project",
      "Architectural design and layout plans":
        "Architectural design and layout plans",
      "Interior concept development": "Interior concept development",
      "Permitting assistance and approvals":
        "Permitting assistance and approvals",
      "Regular client design consultations":
        "Regular client design consultations",
      "Detailed project timeline": "Detailed project timeline",
      "Final design package with specifications":
        "Final design package with specifications",
      "Complete construction management and execution":
        "Complete construction management and execution",
      "High-quality materials and craftsmanship":
        "High-quality materials and craftsmanship",
      "On-site supervision and quality assurance":
        "On-site supervision and quality assurance",
      "Post-construction walkthrough and support":
        "Post-construction walkthrough and support",

      // Cube Steps (ensure these are present and match exactly)
      Brief: "Brief",
      Research: "Research",
      Sketch: "Sketch",
      Design: "Design",
      Present: "Present",
      Revise: "Revise",

      // Button/label keys (ensure these are present and not duplicated)

      // Video fallback
      "Your browser does not support the video tag.":
        "Your browser does not support the video tag.",
      // --- ResidentialProjects.jsx keys ---
      // Section Headings
      "Residential Projects Experts": "Residential Projects Experts",
      "Building homes that reflect your vision and lifestyle.":
        "Building homes that reflect your vision and lifestyle.",
      "Why Choose Our Residential Services":
        "Why Choose Our Residential Services",
      "Trusted partner delivering personalized and quality residential constructions.":
        "Trusted partner delivering personalized and quality residential constructions.",
      "Our Residential Services": "Our Residential Services",
      "Explore our full range of residential solutions.":
        "Explore our full range of residential solutions.",

      // "Our residential project process": "Our residential project process",
      "Our Client Features": "Our Client Features",
      "Always putting your project’s success first.":
        "Always putting your project’s success first.",
      "Secure Peace of Mind for Your Project":
        "Secure Peace of Mind for Your Project",
      "Find clarity, support, and expert solutions—every step of the way.":
        "Find clarity, support, and expert solutions—every step of the way.",

      // Benefits
      "Custom-tailored designs meeting your unique residential needs":
        "Custom-tailored designs meeting your unique residential needs",
      "Seamless project management ensuring timely delivery":
        "Seamless project management ensuring timely delivery",
      "Use of sustainable materials and eco-friendly methods":
        "Use of sustainable materials and eco-friendly methods",
      "Transparent budget handling and cost-effective solutions":
        "Transparent budget handling and cost-effective solutions",
      "Expert craftsmanship focused on quality and durability":
        "Expert craftsmanship focused on quality and durability",
      "Dedicated support through every stage of construction":
        "Dedicated support through every stage of construction",

      // Services
      "From cozy single-family homes to expansive luxury estates, creating living spaces that inspire and endure.":
        "From cozy single-family homes to expansive luxury estates, creating living spaces that inspire and endure.",
      "Crafting interiors that harmonize beauty and functionality to make every house a home.":
        "Crafting interiors that harmonize beauty and functionality to make every house a home.",
      "Enhancing and preserving your current home with thoughtful upgrades and restorations.":
        "Enhancing and preserving your current home with thoughtful upgrades and restorations.",
      "Transforming outdoor spaces into beautiful, functional environments tailored to your lifestyle.":
        "Transforming outdoor spaces into beautiful, functional environments tailored to your lifestyle.",
      "Upgrading homes with the latest smart technologies for convenience, security, and energy efficiency.":
        "Upgrading homes with the latest smart technologies for convenience, security, and energy efficiency.",
      "Expanding your living space with seamless additions that blend perfectly with your existing home.":
        "Expanding your living space with seamless additions that blend perfectly with your existing home.",

      // Features
      "Regular project status updates": "Regular project status updates",
      "Personalized communication with your project manager":
        "Personalized communication with your project manager",
      "Access to design reviews and materials through our client portal":
        "Access to design reviews and materials through our client portal",
      "Focus on client satisfaction and finishing details":
        "Focus on client satisfaction and finishing details",
      "We treat every project with precision, care, and personal attention.":
        "We treat every project with precision, care, and personal attention.",
      "Access to resources and expert consultants throughout your project.":
        "Access to resources and expert consultants throughout your project.",
      "Client portal provides 24/7 access to design and construction updates.":
        "Client portal provides 24/7 access to design and construction updates.",
      "Expect reliability, transparency, and constant communication at every stage.":
        "Expect reliability, transparency, and constant communication at every stage.",
      "Benefit from this as our client.": "Benefit from this as our client.",

      // Pricing Tiers
      "Initial Consultation": "Initial Consultation",

      "Design & Planning": "Design & Planning",

      "Full Construction": "Full Construction",
      "Starting at $50,000": "Starting at $50,000",

      // Buttons (ensure these are present)
      "Book Consultation": "Book Consultation",
      "Contact Us": "Contact Us",

      // Home2.jsx new keys
      "Welcome to Vision Builders": "Welcome to Vision Builders",
      "Designing and building innovative spaces that inspire communities and stand the test of time.":
        "Designing and building innovative spaces that inspire communities and stand the test of time.",
      "Our Design Philosophy": "Our Design Philosophy",
      "Creativity, sustainability, and precision are the cornerstones of our practice. Every project is tailored with innovation, functional design, and a strong commitment to environmental responsibility.":
        "Creativity, sustainability, and precision are the cornerstones of our practice. Every project is tailored with innovation, functional design, and a strong commitment to environmental responsibility.",
      "Client-Focused Design": "Client-Focused Design",
      "Every structure begins with your vision—crafted through collaboration and personalized planning.":
        "Every structure begins with your vision—crafted through collaboration and personalized planning.",
      "Sustainable Innovation": "Sustainable Innovation",
      "We integrate green building practices and future-ready technologies into every design.":
        "We integrate green building practices and future-ready technologies into every design.",
      "Proven Excellence": "Proven Excellence",
      "From homes to skyscrapers, our portfolio showcases projects that are both iconic and enduring.":
        "From homes to skyscrapers, our portfolio showcases projects that are both iconic and enduring.",
      "Our Approach": "Our Approach",
      At: "At",
      "we unite architectural creativity with engineering precision. Each project is overseen with attention to detail, ensuring structural quality and design excellence.":
        "we unite architectural creativity with engineering precision. Each project is overseen with attention to detail, ensuring structural quality and design excellence.",
      "We believe in transparent communication and collaboration—keeping clients consistently updated from planning to construction.":
        "We believe in transparent communication and collaboration—keeping clients consistently updated from planning to construction.",
      "Our process emphasizes innovation, sustainability, and efficiency, delivering results that are functional, aesthetic, and future-ready.":
        "Our process emphasizes innovation, sustainability, and efficiency, delivering results that are functional, aesthetic, and future-ready.",
      "Featured Projects": "Featured Projects",
      "Sustainable Residential Complex": "Sustainable Residential Complex",
      "Designed and constructed an award-winning eco-friendly residential complex with solar integration and smart water management.":
        "Designed and constructed an award-winning eco-friendly residential complex with solar integration and smart water management.",
      "Modern Corporate Headquarters": "Modern Corporate Headquarters",
      "Delivered a state-of-the-art commercial office building with innovative open-plan designs and LEED Platinum certification.":
        "Delivered a state-of-the-art commercial office building with innovative open-plan designs and LEED Platinum certification.",
      Year: "Year",
      "Latest Construction Insights": "Latest Construction Insights",
      "Trends in Sustainable Architecture":
        "Trends in Sustainable Architecture",
      "Exploring the latest innovations in eco-friendly building materials and energy design.":
        "Exploring the latest innovations in eco-friendly building materials and energy design.",
      "Maximizing Space in Urban Design": "Maximizing Space in Urban Design",
      "Creative strategies for making the most of limited urban spaces.":
        "Creative strategies for making the most of limited urban spaces.",
      "Smart Building Technologies": "Smart Building Technologies",
      "How IoT and automation are redefining modern construction.":
        "How IoT and automation are redefining modern construction.",
      "Read More": "Read More",
      "Schedule a Project Consultation": "Schedule a Project Consultation",
      Name: "Name",
      "Your full name": "Your full name",
      Message: "Message",
      "Briefly describe your project": "Briefly describe your project",

      "Your consultation request was submitted successfully!":
        "Your consultation request was submitted successfully!",
      Home: "Home",
      Home1: "Home1",
      Home2: "Home2",
      "About Us": "About Us",
      Services: "Services",
      "View All Services": "View All Services",
      "Residential Projects": "Residential Projects",
      "Commercial Complexes": "Commercial Complexes",

      "Interior Design": "Interior Design",
      "Urban Planning": "Urban Planning",
      "Renovation & Restoration": "Renovation & Restoration",
      Blog: "Blog",

      "User Profile": "User Profile",
      Logout: "Logout",
      Languages: "Languages",
      English: "English",
      Arabic: "Arabic",
      Hebrew: "Hebrew",

      "Our Services": "Our Services",
      Address: "Address:",
      "123 Skyline Avenue, Design City": "123 Skyline Avenue, Design City",
      Phone: "Phone:",
      "(123) 456-7890": "(123) 456-7890",
      Email: "Email:",
      "info@visionbuilders.com": "info@visionbuilders.com",
      Hours: "Hours:",
      "Mon–Fri, 9 AM – 6 PM": "Mon–Fri, 9 AM – 6 PM",
      Newsletter: "Newsletter",
      "Stay updated with the latest trends in architecture and construction.":
        "Stay updated with the latest trends in architecture and construction.",
      "Your email": "Your email",
      Subscribe: "Subscribe",
      "Subscribed!": "Subscribed!",
      "All rights reserved.": "All rights reserved.",
      QuickLinks: "Quick Links",
      // Home.jsx new keys
      "Building Tomorrow, Today": "Building Tomorrow, Today",
      "Your trusted partner in construction and architecture — delivering innovative designs, sustainable solutions, and projects that stand the test of time.":
        "Your trusted partner in construction and architecture — delivering innovative designs, sustainable solutions, and projects that stand the test of time.",
      "Explore our services": "Explore our services",
      "Our Expertise": "Our Expertise",
      "High-quality design and construction services tailored for residential projects.":
        "High-quality design and construction services tailored for residential projects.",
      "High-quality design and construction services tailored for commercial complexes.":
        "High-quality design and construction services tailored for commercial complexes.",
      "High-quality design and construction services tailored for industrial facilities.":
        "High-quality design and construction services tailored for industrial facilities.",
      "High-quality design and construction services tailored for interior design.":
        "High-quality design and construction services tailored for interior design.",
      "High-quality design and construction services tailored for urban planning.":
        "High-quality design and construction services tailored for urban planning.",
      "High-quality design and construction services tailored for renovation and restoration.":
        "High-quality design and construction services tailored for renovation and restoration.",
      "About Our Firm": "About Our Firm",
      "Established in 1997, with 2,500+ projects completed globally.":
        "Established in 1997, with 2,500+ projects completed globally.",
      "Award-winning design and engineering teams.":
        "Award-winning design and engineering teams.",
      "Specialized in sustainable and innovative architecture.":
        "Specialized in sustainable and innovative architecture.",
      "Trusted by clients ranging from homeowners to multinational corporations.":
        "Trusted by clients ranging from homeowners to multinational corporations.",
      "Dedicated to transforming communities through responsible construction.":
        "Dedicated to transforming communities through responsible construction.",
      "Learn More About Us": "Learn More About Us",
      "Meet Our Architects & Engineers": "Meet Our Architects & Engineers",
      "Jane Doe": "Jane Doe",
      "Lead Architect": "Lead Architect",
      "John Smith": "John Smith",
      "Structural Engineer": "Structural Engineer",
      "Emily Davis": "Emily Davis",
      "Interior Designer": "Interior Designer",
      "Kevin Spacey": "Kevin Spacey",
      "Project Manager": "Project Manager",
      "A Construction Partner You Can Trust":
        "A Construction Partner You Can Trust",
      "We go beyond blueprints and concrete. Our commitment to reliability, transparency, and innovation ensures every project is completed on time, within budget, and with uncompromising quality.":
        "We go beyond blueprints and concrete. Our commitment to reliability, transparency, and innovation ensures every project is completed on time, within budget, and with uncompromising quality.",
      "Client satisfaction rate": "Client satisfaction rate",
      "across residential & commercial projects.":
        "across residential & commercial projects.",
      "Projects delivered": "Projects delivered",
      "within scheduled timelines.": "within scheduled timelines.",
      "Dedicated project support": "Dedicated project support",
      "and client communication.": "and client communication.",
      "Architects & engineers": "Architects & engineers",
      "with proven track records.": "with proven track records.",
      "Ready to Start Your Project?": "Ready to Start Your Project?",
      "Contact us today to discuss your vision, and let’s bring it to life with expert design and construction.":
        "Contact us today to discuss your vision, and let’s bring it to life with expert design and construction.",
      "Book a consultation": "Book a consultation",
      // AboutUs.jsx keys
      "About Vision Builders": "About Vision Builders",
      "Shaping skylines and building communities with passion, innovation, and trust since our foundation.":
        "Shaping skylines and building communities with passion, innovation, and trust since our foundation.",
      "Our Mission & Vision": "Our Mission & Vision",
      "We are committed to designing and constructing spaces that inspire, endure, and improve lives. Every project reflects our focus on innovation, sustainability, and excellence in architecture and construction.":
        "We are committed to designing and constructing spaces that inspire, endure, and improve lives. Every project reflects our focus on innovation, sustainability, and excellence in architecture and construction.",
      "Our Mission": "Our Mission",
      "To build sustainable, functional, and beautiful spaces that bring visions to life and positively impact communities.":
        "To build sustainable, functional, and beautiful spaces that bring visions to life and positively impact communities.",
      "Our Vision": "Our Vision",
      "To be a global leader in innovative and sustainable architecture—transforming skylines and redefining modern living and workspaces.":
        "To be a global leader in innovative and sustainable architecture—transforming skylines and redefining modern living and workspaces.",
      "Our Core Values": "Our Core Values",
      Integrity: "Integrity",
      Integrity_desc:
        "We uphold honesty and transparency in every project, from planning to delivery.",
      Excellence: "Excellence",
      Excellence_desc:
        "Delivering world-class design and construction quality through expertise and precision.",
      "Client Focus": "Client Focus",
      "Client Focus_desc":
        "Your vision is central to our process—we collaborate closely to exceed expectations.",
      Sustainability: "Sustainability",
      Sustainability_desc:
        "Prioritizing eco-friendly practices, green materials, and energy-efficient solutions.",
      Innovation: "Innovation",
      Innovation_desc:
        "Embracing modern technologies and forward-thinking designs to shape the future.",
      Community: "Community",
      Community_desc:
        "Dedicated to building not just structures, but lasting positive impacts for people and society.",
      "Our Growth Through Years": "Our Growth Through Years",
      "A journey of creativity, technology, and dedication—transforming blueprints into reality since day one.":
        "A journey of creativity, technology, and dedication—transforming blueprints into reality since day one.",
      Foundation: "Foundation",
      "Founded Vision Builders with the goal of redefining modern architecture—first office established in 2016, delivering pioneering residential projects.":
        "Founded Vision Builders with the goal of redefining modern architecture—first office established in 2016, delivering pioneering residential projects.",
      Expansion: "Expansion",
      "Expanded into commercial and industrial projects. Opened second design studio, grew to 20+ architects and engineers, 2019.":
        "Expanded into commercial and industrial projects. Opened second design studio, grew to 20+ architects and engineers, 2019.",
      "National Recognition": "National Recognition",
      "Earned national recognition for eco-friendly architecture and innovative structural designs. Awarded Best Design Firm, 2022.":
        "Earned national recognition for eco-friendly architecture and innovative structural designs. Awarded Best Design Firm, 2022.",
      "Technology & Innovation": "Technology & Innovation",
      "Integrated BIM systems, smart building technologies, and remote project collaboration for efficiency and connectivity, 2024.":
        "Integrated BIM systems, smart building technologies, and remote project collaboration for efficiency and connectivity, 2024.",
      "Our Commitment to You": "Our Commitment to You",
      "We commit to delivering reliable, innovative, and sustainable building solutions. From blueprint to handover, your vision is at the heart of everything we do.":
        "We commit to delivering reliable, innovative, and sustainable building solutions. From blueprint to handover, your vision is at the heart of everything we do.",
      "\u201cVision Builders transformed our dream into reality with unmatched professionalism and creativity. A true partner in every step.\u201d — Client Testimonial":
        "\u201cVision Builders transformed our dream into reality with unmatched professionalism and creativity. A true partner in every step.\u201d — Client Testimonial",
      "Ready to Build with Us?": "Ready to Build with Us?",
      "Contact Vision Builders today to schedule your consultation and discover how we can bring your project to life.":
        "Contact Vision Builders today to schedule your consultation and discover how we can bring your project to life.",
      "Connect with us": "Connect with us",
      // --- Services.jsx keys ---
      "Complete construction and architecture solutions for homes, businesses, and communities—delivered with vision, skill, and commitment.":
        "Complete construction and architecture solutions for homes, businesses, and communities—delivered with vision, skill, and commitment.",
      "What We Do": "What We Do",

      "End-to-end design and construction for homes, apartments, and villas, blending comfort with contemporary aesthetics.":
        "End-to-end design and construction for homes, apartments, and villas, blending comfort with contemporary aesthetics.",
      "Architectural planning & design": "Architectural planning & design",
      "Custom interiors and renovations": "Custom interiors and renovations",
      "Eco-friendly home solutions": "Eco-friendly home solutions",
      "Smart home integration": "Smart home integration",

      "Comprehensive solutions for offices, malls, retail spaces, and mixed-use developments built for business success.":
        "Comprehensive solutions for offices, malls, retail spaces, and mixed-use developments built for business success.",
      "Workplace planning and design": "Workplace planning and design",
      "Retail/office space remodeling": "Retail/office space remodeling",
      "Future-ready infrastructure": "Future-ready infrastructure",
      "Compliance & safety standards": "Compliance & safety standards",

      "Specialized construction for factories, warehouses, and smart industrial spaces—with a focus on durability and scalability.":
        "Specialized construction for factories, warehouses, and smart industrial spaces—with a focus on durability and scalability.",
      "Large-scale industrial design": "Large-scale industrial design",
      "Energy & logistics optimization": "Energy & logistics optimization",
      "Safety and environment compliance": "Safety and environment compliance",
      "Tailored project management": "Tailored project management",

      "Modern, functional interiors for residential, commercial, or hospitality spaces tailored to your vision and brand.":
        "Modern, functional interiors for residential, commercial, or hospitality spaces tailored to your vision and brand.",
      "Space planning & layout": "Space planning & layout",
      "Material & color consultation": "Material & color consultation",
      "Furniture and lighting solutions": "Furniture and lighting solutions",
      "Turnkey project execution": "Turnkey project execution",

      "Strategic master planning and urban design for sustainable, vibrant communities and smart cities.":
        "Strategic master planning and urban design for sustainable, vibrant communities and smart cities.",
      "City/zone master plans": "City/zone master plans",
      "Landscape & streetscape design": "Landscape & streetscape design",
      "Public realm improvements": "Public realm improvements",
      "Sustainable urban policy": "Sustainable urban policy",

      "Bringing new life to historic, aged, or underutilized buildings through careful restoration and creative upgrades.":
        "Bringing new life to historic, aged, or underutilized buildings through careful restoration and creative upgrades.",
      "Restoration & retrofitting": "Restoration & retrofitting",
      "Heritage conservation": "Heritage conservation",
      "Modernization of old spaces": "Modernization of old spaces",
      "Adaptive reuse projects": "Adaptive reuse projects",

      "Why Choose Vision Builders": "Why Choose Vision Builders",
      "Creative Design Process": "Creative Design Process",
      "Our collaborative approach puts your vision at the center of inspired, functional designs.":
        "Our collaborative approach puts your vision at the center of inspired, functional designs.",
      "Quality Craftsmanship": "Quality Craftsmanship",
      "We build to last—combining cutting-edge methods, sustainable materials, and meticulous attention to detail.":
        "We build to last—combining cutting-edge methods, sustainable materials, and meticulous attention to detail.",
      "Personalized Service": "Personalized Service",
      "A dedicated project manager supports you at every step, ensuring complete transparency and satisfaction.":
        "A dedicated project manager supports you at every step, ensuring complete transparency and satisfaction.",

      "Our Expertise in Detail": "Our Expertise in Detail",

      "Client Success Stories": "Client Success Stories",
      "Vision Builders completely transformed our workspace—modern, vibrant, and perfect for our team. Seamless process and stellar results!":
        "Vision Builders completely transformed our workspace—modern, vibrant, and perfect for our team. Seamless process and stellar results!",
      "Sarah Thompson": "Sarah Thompson",
      "Project Director, UrbanHabitat Ltd.":
        "Project Director, UrbanHabitat Ltd.",
      "Their team managed our residential renovation with incredible attention to detail and a personal touch at every step.":
        "Their team managed our residential renovation with incredible attention to detail and a personal touch at every step.",

      "Homeowner, Mumbai": "Homeowner, Mumbai",
      "We entrusted Vision Builders with our commercial plaza construction—the experience exceeded all our expectations!":
        "We entrusted Vision Builders with our commercial plaza construction—the experience exceeded all our expectations!",
      "John Harris": "John Harris",
      "Director, Blue Ocean Realty": "Director, Blue Ocean Realty",

      "Contact Vision Builders today to schedule a consultation and start your journey to a remarkable space.":
        "Contact Vision Builders today to schedule a consultation and start your journey to a remarkable space.",
    },
  },
  ar: {
    translation: {
      adminDashboard: {
        email: "البريد الإلكتروني",
        name: "الاسم",
        role: "الدور",
        time: "الوقت",
        date: "التاريخ",
        event: "الحدث",
        userLoginActivity: "نشاط تسجيل دخول المستخدم",
        totalRegisteredUsers: "إجمالي المستخدمين المسجلين",
        noUserLogins: "لا توجد تسجيلات دخول أو اشتراكات حتى الآن.",
        signup: "تسجيل",
        login: "تسجيل الدخول",
        designProposals: "مقترحات التصميم",
        projectsInProgress: "المشاريع الجارية",
        pendingApprovals: "الموافقات المعلقة",
        delayedProjects: "المشاريع المتأخرة",
        upcomingHandovers: "عمليات التسليم القادمة",
        invoiceClients: [
          "مطورون جرين سبيس",
          "أوربان هابيتات المحدودة",
          "شقق سكاي لاين",
          "بلو أوشن رياليتي",
        ],
        firmProjectOverview: "نظرة عامة على مشاريع الشركة",
        ongoingProjects: "المشاريع المستمرة",
        activeProjects: "{{count}} مشروع نشط",
        completedProjects: "{{count}} مكتمل",
        projectsByCountry: "المشاريع حسب الدولة",
        projectsDeliveredGlobally: "{{count}} مشروع تم تسليمه عالميًا",
        recentProjectInvoices: "فواتير المشاريع الأخيرة",
        clientName: "اسم العميل",
        status: "الحالة",
        paid: "مدفوع",
        pending: "معلق",
        unpaid: "غير مدفوع",
        projectLocations: "مواقع المشاريع",
        active: "نشط",
        nonActive: "غير نشط",
        totalProjects: "إجمالي المشاريع",
        completedProjectsLabel: "المشاريع المكتملة",
        clientsServed: "العملاء الذين تم خدمتهم",
      },

      contact: {
        heroTitle: "اتصل بـ فيجن بيلدرز",
        heroSubtitle:
          "هل أنت مستعد لمناقشة مشروعك التالي في البناء أو التصميم المعماري؟ تواصل معنا اليوم للبدء.",
        reachTitle: "طرق للتواصل معنا",
        emailTitle: "البريد الإلكتروني",
        phoneTitle: "الهاتف",
        whatsappTitle: "واتساب",
        formTitle: "أرسل لنا رسالة",
        form: {
          name: "اسمك",
          email: "البريد",
          phone: "الهاتف",
          message: "الرسالة",
          messagePlaceholder: "كيف يمكننا مساعدتك في مشروعك؟",
          send: "إرسال الرسالة",
          success: "تم إرسال الرسالة بنجاح!",
        },
        officesTitle: "مكاتبنا",
        phoneLabel: "الهاتف",
        mapNote: "(الخريطة والاتجاهات متاحة عند الطلب)",
        locations: [
          {
            city: "مومباي",
            address: "12 Skyline Lane، Fort، مومباي 400001",
            phone: "+91-22-5555-1212",
          },
          {
            city: "دلهي",
            address: "220A، شارع المعماري، كونوت بليس، نيو دلهي 110001",
            phone: "+91-11-4433-2211",
          },
          {
            city: "بنغالورو",
            address: "7 Vision Avenue، إنديراناجار، بنغالورو 560038",
            phone: "+91-80-5577-8899",
          },
        ],
        faqTitle: "الأسئلة الشائعة",
        faqs: [
          {
            question: "ما أنواع مشاريع البناء التي تتخصصون بها؟",
            answer:
              "نتعامل مع المشاريع السكنية والتجارية والصناعية، بما في ذلك الإنشاءات الجديدة، التجديدات، التصميمات الداخلية، والتخطيط الحضري.",
          },
          {
            question: "كم من الوقت يستغرق إكمال مشروع نموذجي؟",
            answer:
              "تختلف الجداول الزمنية حسب النطاق والحجم. تكتمل معظم الإنشاءات السكنية خلال 6-12 شهرًا مع تقديم تحديثات منتظمة طوال العملية.",
          },
          {
            question: "هل يمكنكم المساعدة في التصاريح والموافقات؟",
            answer:
              "نعم، يتولى فريقنا المتخصص إدارة الوثائق والتصاريح والموافقات الحكومية لتجربة سلسة وخالية من المتاعب.",
          },
          {
            question: "هل تقومون بالتصميم بالإضافة إلى البناء؟",
            answer:
              "بالتأكيد! نحن نقدم حلول التصميم والبناء الكاملة، من المفاهيم المعمارية إلى البناء النهائي.",
          },
        ],
      },
      renovationPage: {
        title: "التجديدات: نصائح أساسية وأفضل الممارسات",
        author: "المهندسة المعمارية سنيها ناير",
        date: "15 يوليو 2025",
        intro:
          "يمكن أن يكون تجديد منزلك أو مساحتك التجارية تجربة مجزية ولكنها معقدة أيضًا. يساعدك فهم الاستراتيجيات الرئيسية وأفضل الممارسات في ضمان نجاح المشروع.",
        scopeTitle: "فهم نطاق التجديد",
        scopeText:
          "يمكن أن تتراوح التجديدات من تحسينات تجميلية بسيطة إلى تغييرات هيكلية كبرى. إن تحديد النطاق في وقت مبكر سيوجه اختيارات التصميم وإعداد الميزانية.",
        challengesTitle: "التخطيط للتحديات الشائعة في التجديد",
        challenges: [
          {
            title: "القيود الهيكلية:",
            text: "تقييم الجدران الحاملة والقيود المتعلقة بالأساسات.",
          },
          {
            title: "متطلبات التصاريح:",
            text: "الحصول على التصاريح والموافقات المحلية قبل بدء العمل.",
          },
          {
            title: "اختيار المواد:",
            text: "اختيار مواد متينة ومستدامة ومناسبة للفترة الزمنية.",
          },
          {
            title: "إدارة الجدول الزمني:",
            text: "تنسيق المقاولين وعمليات التسليم للبقاء ضمن الجدول المحدد.",
          },
          {
            title: "التحكم في الميزانية:",
            text: "التخطيط للتكاليف غير المتوقعة والاحتياطات.",
          },
        ],
        expertTitle: "دور الخبرة المهنية",
        expertText:
          "يمكن للمهندسين المعماريين ومديري المشاريع ذوي الخبرة توقع العقبات، واقتراح حلول مبتكرة، وضمان أن يعزز التجديد قيمة المكان وقابليته للعيش.",
        outro:
          "تواصل مع Vision Builders للحصول على نصائح الخبراء وخدمات التجديد المهنية المصممة وفقًا لاحتياجاتك وتطلعاتك.",
      },
      planningResidential: {
        title: "تخطيط مشروعك السكني: دليل شامل",
        author: "المهندسة المعمارية بريا شارما",
        date: "1 أغسطس 2025",
        intro1:
          "يتطلب التخطيط الناجح لمشروع بناء سكني فهمًا عميقًا وتحضيرًا دقيقًا. إليك دليل لمساعدتك على اجتياز العملية.",
        intro2:
          "سواء كنت تبني منزلًا جديدًا أو تجدد مساحة موجودة، فإن الاهتمام بالتفاصيل في كل مرحلة يضمن أن تتحقق رؤيتك بسلاسة وضمن الميزانية.",
        goalsTitle: "تحديد أهدافك وميزانيتك",
        goalsText:
          "حدد بوضوح أهداف مشروعك بما في ذلك تفضيلات النمط، الاحتياجات الوظيفية، وقيود الميزانية لتوجيه مراحل التصميم والبناء.",
        architectsTitle: "العمل مع المهندسين المعماريين والمهندسين",
        architectsText:
          "تعاون مع المتخصصين لتطوير خطط تفصيلية، وحسابات إنشائية، واختيار مواد مصممة خصيصًا لموقعك ومتطلباتك.",
        permitsTitle: "الحصول على التصاريح والموافقات",
        permitsText:
          "تأكد من الحصول على جميع التصاريح اللازمة من السلطات المحلية قبل بدء البناء للامتثال للوائح وتجنب التأخيرات.",
        timelineTitle: "الجدول الزمني وإدارة المشروع",
        timelineText:
          "ضع جداول زمنية واقعية، راقب التقدم بانتظام، وحافظ على التواصل مع فريق البناء للتعامل مع التحديات بكفاءة.",
        tipsTitle: "نصائح لمشروع سلس",
        tips: [
          "احتفظ بسجل مفصل للقرارات والموافقات",
          "امنح الأولوية للاختيارات المستدامة والموفرة للطاقة",
          "حافظ على المرونة لإجراء التعديلات عند الحاجة",
          "استعن بمدير مشروع موثوق أو مقاول للإشراف المهني",
        ],
        outro:
          "فريقنا الخبير في Vision Builders جاهز لدعمك في كل خطوة من تخطيط وتنفيذ مشروعك السكني. تواصل معنا للحصول على استشارة وإرشاد مخصص.",
      },
      Back: "عودة",
      modernArchitecture: {
        metaTitle: "عملية التصميم المعماري الحديث | فيجن بيلدرز",
        title: "عملية التصميم المعماري الحديث",
        author: "المهندس المعماري راهول فيرما",
        date: "٢٤ يوليو ٢٠٢٥",
        intro:
          "فهم عملية التصميم المعماري خطوة بخطوة هو المفتاح لتحقيق رؤيتك لمساحة عملية وجميلة. يغطي هذا الدليل ما يمكن توقعه من المفهوم حتى الاكتمال.",
        conceptTitle: "تطوير المفهوم",
        conceptText:
          "نبدأ بفهم احتياجاتك وظروف الموقع والميزانية لإنشاء رسومات أولية ومفاهيم تعكس رؤيتك وأهداف الاستدامة.",
        designTitle: "التصميم والتخطيط",
        designText:
          "يقوم مهندسونا المعماريون بتحسين التصميم برسومات مفصلة، ونماذج ثلاثية الأبعاد، واختيار المواد. نتعاون معك عن قرب لضمان أن كل تفصيل يفي بتوقعاتك.",
        permitsTitle: "التصاريح والموافقات",
        permitsText:
          "إعداد جميع الوثائق اللازمة، والتنسيق مع السلطات التنظيمية، والحصول على تصاريح البناء لضمان امتثال مشروعك للقوانين المحلية ومعايير السلامة.",
        constructionTitle: "البناء والإدارة",
        constructionText:
          "نشرف على البناء، وننسق مع المقاولين والموردين، وندير الجداول الزمنية والميزانيات، ونضمن مراقبة الجودة طوال عملية التنفيذ.",
        finalTitle: "المراجعة النهائية والتسليم",
        finalText:
          "بعد الانتهاء، نقوم بإجراء عمليات تفتيش شاملة وجولات ميدانية للتأكد من تسليم مشروعك بأعلى المعايير وبما يرضيك.",
        tipsTitle: "نصائح لنجاح المشروع",
        tips: [
          "حافظ على تواصل واضح ومنتظم مع المهندس المعماري والباني الخاص بك",
          "كن استباقياً بشأن اعتبارات الميزانية والتغييرات المحتملة",
          "قم بتوثيق القرارات والموافقات في كل مرحلة",
          "امنح الأولوية للميزات المستدامة والموفرة للطاقة",
        ],
        outro:
          "فريقنا ذو الخبرة في فيجن بيلدرز ملتزم بإرشادك خلال كل مرحلة من رحلتك المعمارية، لضمان تجربة سلسة وشفافة ومجزية. اتصل بنا اليوم لبدء تخطيط مشروع أحلامك.",
      },

      blog: {
        hero: {
          title: "إلهام ورؤى البناء",
          subtitle:
            "أخبار البناء، أدلة التصميم، ونصائح الخبراء من فريقنا—لمساعدتك على إنشاء مساحات أفضل للحياة والعمل.",
        },
        posts: [
          {
            title: "اتجاهات التصميم لعام 2025: ما الذي يشكل العمارة الحديثة",
            date: "1 أغسطس 2025",
            excerpt:
              "اكتشف أكثر المواد والتوجهات والتقنيات الصديقة للبيئة تأثيرًا في عالم العمارة والبناء لهذا العام...",
            author: "المهندسة بريا شارما",
          },
          {
            title: "كيفية تخطيط مشروع سكني: من المخطط إلى التنفيذ",
            date: "18 يوليو 2025",
            excerpt:
              "استكشف العملية الكاملة لتخطيط وتصميم وتنفيذ منزل جديد. نصائح من المهندسين المعماريين والمهندسين الميدانيين لتسليم المشروع بسلاسة...",
            author: "المهندس راهول فيرما",
          },
          {
            title: "التجديد من أجل الاستدامة: طرق عملية",
            date: "5 يوليو 2025",
            excerpt:
              "تعلم كيفية دمج الممارسات الخضراء وكفاءة الطاقة في التجديدات—وطرق زيادة القيمة والراحة.",
            author: "المهندسة سنيها ناير",
          },
        ],
        suggestionsTitle: "نصائح تخطيط المشاريع والبناء",
        suggestions: [
          {
            title: "تخطيط مشروعك",
            description:
              "حدد أهدافك وميزانيتك وجدولك الزمني مبكرًا. استشر المهندسين المعماريين لرؤية تتناسب مع احتياجاتك وظروف الموقع.",
          },
          {
            title: "اختيار المواد المستدامة",
            description:
              "أعطِ الأولوية للمواد الموفرة للطاقة والمحلية وطويلة الأمد لتحقيق تأثير بيئي أفضل وتوفير التكاليف.",
          },
          {
            title: "تكامل المنزل الذكي",
            description:
              "ادمج أحدث التقنيات—الإضاءة الذكية، الأمان، والتحكم في المناخ—لراحة وجودة حياة أفضل.",
          },
          {
            title: "إدارة تكاليف المشروع",
            description:
              "تعاون مع المقاول للحصول على تقديرات تكلفة شفافة. خطط للطوارئ وراقب التقدم في كل مرحلة.",
          },
          {
            title: "نصائح نجاح التجديد",
            description:
              "قيّم حالة الهيكل الحالي. خطط للترقيات في العزل والإضاءة واستخدام المساحة لتحقيق أفضل النتائج.",
          },
          {
            title: "العمل مع المهندسين المعماريين",
            description:
              "شارك أفكارك وتفضيلاتك وأولوياتك بوضوح. التعاون المنتظم يضمن أفضل نتيجة لرؤيتك.",
          },
        ],
        precautionsTitle: "احتياطات السلامة في المنزل والعمل",
        precautions: {
          below18Title: "الأطفال والمراهقون",
          adultsTitle: "البالغون",
          seniorCitizensTitle: "كبار السن",
          below18: [
            "أبلغ والديك أو الأوصياء قبل إجراء تغييرات في غرفتك أو منزلك.",
            "تجنب التسلق على الأثاث أو التركيبات غير المستقرة.",
            "لا تستخدم الأدوات الكهربائية أو المعدات الثقيلة دون إشراف.",
            "تعرف على مخارج الطوارئ والإسعافات الأولية الأساسية.",
          ],
          adults: [
            "تحقق من الاعتمادات عند توظيف مقاولين أو مقدمي خدمات.",
            "تأكد من التهوية الجيدة أثناء الطلاء أو التجديد.",
            "احصل على جميع تصاريح البناء قبل بدء العمل.",
            "ناقش النطاق والتكاليف والجداول الزمنية مع المهندس المعماري في كل خطوة.",
          ],
          seniorCitizens: [
            "ركب مقابض أمان وأرضيات مانعة للانزلاق حيثما أمكن.",
            "تأكد من أن المساحات المعيشية مضاءة جيدًا وخالية من العوائق.",
            "احتفظ بأرقام الطوارئ في مكان ظاهر وسهل الوصول.",
            "رتب فحوصات صيانة منتظمة لسلامة المبنى.",
          ],
        },
        facts: {
          ariaLabel: "معرفة العمارة والبناء",
          imageAlt: "مبنى أيقوني",
          title: "بناء المستقبل: هل تعلم؟",
          0: "أطول مبنى في العالم، برج خليفة، يبلغ ارتفاعه 828 مترًا ويتطلب أكثر من 330,000 متر مكعب من الخرسانة!",
          1: "يمكن أن يقلل التصميم المستدام من تكاليف تشغيل المبنى بنسبة تصل إلى 50% من خلال توفير الطاقة والمياه.",
          2: "تحسن نمذجة معلومات البناء (BIM) الحديثة التعاون بين المهندسين المعماريين والمهندسين والمقاولين لتقليل الأخطاء.",
          3: "سور الصين العظيم يزيد طوله عن 13,000 ميل—أعظم إنجاز بناء في التاريخ!",
        },
        quiz: {
          tryAgain: "حاول مرة أخرى",
          resultScore: "لقد حصلت على {{score}} من أصل {{total}}!",
          resultTitle: "نتيجة الاختبار",
          title: "اختبر معرفتك بالعمارة",
          correct: "صحيح! أحسنت.",
          incorrect: "خطأ. الإجابة الصحيحة هي: {{answer}}",
          prev: "السابق ←",
          next: "التالي →",
          finish: "إنهاء",
          0: {
            question: "أي نمط معماري معروف باستخدامه للزجاج والفولاذ؟",
            options: ["أ. البنائية", "ب. الحداثة", "ج. القوطية", "د. الباروك"],
          },
          1: {
            question:
              "ما هو الحد الأدنى الموصى به لارتفاع السقف في غرف المعيشة (حسب معظم المعايير)؟",
            options: ["أ. 2.3م", "ب. 2.6م", "ج. 2.9م", "د. 3.2م"],
          },
          2: {
            question: "إلى ماذا تتعلق شهادة LEED في البناء؟",
            options: [
              "أ. معايير السلامة",
              "ب. إدارة المشاريع",
              "ج. البناء الأخضر",
              "د. الموافقات القضائية",
            ],
          },
          3: {
            question: "أي أداة ضرورية لقياسات الموقع؟",
            options: ["أ. مطرقة", "ب. مجرفة", "ج. شريط قياس", "د. ميزان"],
          },
          4: {
            question: "أفضل وصف للكانتيليفر هو:",
            options: [
              "أ. نوع من الطلاء",
              "ب. هيكل بارز مدعوم من طرف واحد فقط",
              "ج. خليط خرساني",
              "د. نوع من بلاط السقف",
            ],
          },
        },
        readMoreAria: "اقرأ المزيد عن {{title}}",
      },
      renovation: {
        hero: {
          title: "التجديد والترميم",
          subtitle:
            "حوّل مساحتك بخدماتنا المتخصصة في التجديد والترميم. نحن نمنح حياة جديدة للهياكل القديمة، مع ضمان الجودة، والأناقة، والوظائف.",
        },
        benefitsTitle: "الفوائد الرئيسية",
        benefitsSubtitle: "لماذا تختار خدماتنا في التجديد والترميم؟",
        benefits: [
          "الخبرة: يتمتع فريقنا بعقود من الخبرة في تحويل المساحات.",
          "مواد عالية الجودة: نستخدم فقط أفضل المواد للحصول على نتائج تدوم.",
          "التخصيص: كل مشروع مصمم وفقًا لاحتياجاتك الفريدة.",
          "التسليم في الوقت المحدد: نحن نحترم وقتك ونلتزم بالجدول.",
          "الاستدامة: حلول صديقة للبيئة من أجل غد أفضل.",
          "القيمة: زيادة قيمة وراحة ممتلكاتك.",
        ],
        visionTitle: "رؤيتنا",
        visionSubtitle: "إحياء المساحات بحلول مبتكرة وحرفية لا مثيل لها.",
        servicesTitle: "خدماتنا",
        services: [
          {
            title: "تجديد المنازل",
            description: "تجديد كامل للمطابخ والحمامات وغرف المعيشة والمزيد.",
          },
          {
            title: "الترميم التجاري",
            description: "إعادة إحياء المكاتب والمتاجر والمباني التجارية.",
          },
          {
            title: "الحفاظ التاريخي",
            description: "ترميم وحفظ سحر العقارات التراثية.",
          },
          {
            title: "إصلاحات هيكلية",
            description: "معالجة المشكلات الأساسية والإنشائية بعناية متخصصة.",
          },
          {
            title: "ترقيات داخلية",
            description: "تحديث الديكورات الداخلية بتصاميم وتشطيبات جديدة.",
          },
          {
            title: "تجميل الواجهات الخارجية",
            description:
              "تعزيز الجاذبية من خلال تجديد الواجهات والمناظر الطبيعية.",
          },
        ],
        processTitle: "كيف نعمل",
        processSubtitle:
          "عمليتنا المبسطة تضمن تجربة خالية من المتاعب من البداية إلى النهاية.",
        process: [
          "الاستشارة والتقييم",
          "التصميم والتخطيط",
          "إعداد الميزانية والمقترح",
          "اختيار المواد",
          "التنفيذ والإشراف",
          "مراقبة الجودة",
          "تسليم المشروع",
        ],
        cubes: ["استشارة", "تصميم", "ميزانية", "اختيار", "بناء", "تسليم"],
        featuresTitle: "لماذا نحن؟",
        featuresSubtitle: "نهجنا الفريد يميزنا.",
        features: [
          "أسعار شفافة",
          "محترفون ماهرون",
          "خدمات شاملة",
          "رضا العملاء",
        ],
        featuresDesc: [
          "نحن نقدم أسعارًا واضحة ومسبقة بدون تكاليف خفية.",
          "فريقنا يتكون من محترفين معتمدين وذوي خبرة.",
          "من التصميم إلى التنفيذ، ندير كل جانب من جوانب مشروعك.",
          "نحن نولي الأولوية لرضاك ونقدم نتائج تفوق التوقعات.",
        ],
        featuresCardText: "الفائدة: {{feature}}",
        pricingTitle: "خطط تسعير مرنة",
        pricingSubtitle: "اختر الخطة التي تناسب احتياجاتك وميزانيتك.",
        pricing: [
          {
            title: "تجديد أساسي",
            price: "$2,500",
            priceNote: " / لكل غرفة",
            features: [
              "إصلاحات سطحية",
              "طلاء وتشطيبات",
              "ترقيات بسيطة للتجهيزات",
              "يشمل التنظيف",
              "ضمان لمدة سنة واحدة",
            ],
            buttonText: "احجز استشارة",
          },
          {
            title: "تجديد قياسي",
            price: "$7,500",
            priceNote: " / لكل مساحة",
            features: [
              "جميع ميزات الخطة الأساسية",
              "تغييرات في التخطيط",
              "سباكة وكهرباء",
              "خزائن مخصصة",
              "ضمان لمدة سنتين",
            ],
            buttonText: "اتصل بنا",
            badge: "الأكثر شيوعًا",
          },
          {
            title: "ترميم فاخر",
            price: "مخصص",
            priceNote: "",
            features: [
              "جميع ميزات الخطة القياسية",
              "ترميم تراثي",
              "إصلاحات هيكلية",
              "مواد فاخرة",
              "إدارة مشروع كاملة",
              "تنسيق الحدائق",
              "ضمان لمدة 5 سنوات",
            ],
            buttonText: "ابدأ الآن",
          },
        ],
      },
      urbanPlanning: {
        hero: {
          title: "التخطيط الحضري",
          subtitle:
            "تشكيل مستقبل المجتمعات من خلال التصميم الاستراتيجي والنمو المستدام.",
        },
        benefitsTitle: "المزايا الرئيسية",
        benefitsSubtitle:
          "تحفيز التقدم من خلال حلول تصميم حضري مبتكرة ومجتمعية.",
        benefits: [
          "تصميم مجتمعات شامل ومستدام",
          "استخدام مثالي للأراضي وإدارة الموارد",
          "تعزيز المساحات العامة وقابلية العيش",
          "تخطيط اقتصادي وبنية تحتية استراتيجي",
          "تنقل فعال بين الأنظمة التنظيمية والتصاريح",
          "مشاركة شاملة لأصحاب المصلحة والمجتمع",
        ],
        visionTitle: "رؤيتك. مخططنا.",
        visionSubtitle: "تحويل الأفكار إلى واقع عبر تخطيط حضري وإقليمي متقدم.",
        servicesTitle: "خدمات التخطيط الحضري",
        services: [
          {
            title: "المخطط الرئيسي والتنظيم",
            description:
              "تطوير مخططات شاملة وإدارة لوائح التنظيم لتوجيه النمو المستقبلي.",
          },
          {
            title: "التنمية المستدامة",
            description:
              "دمج البنية التحتية الخضراء وكفاءة الطاقة والتصميم المرن في المشاريع.",
          },
          {
            title: "مشاركة المجتمع وأصحاب المصلحة",
            description:
              "تيسير ورش عمل عامة شاملة وحوارات لبناء التوافق والدعم.",
          },
          {
            title: "استخدام الأراضي ودراسات الجدوى",
            description:
              "تحليل إمكانات الموقع والاتجاهات السوقية لضمان نجاح المشاريع الحضرية.",
          },
          {
            title: "التنمية الموجهة نحو النقل (TOD)",
            description:
              "إنشاء مجتمعات نابضة بالحياة وقابلة للمشي حول مراكز النقل العام لتقليل الازدحام وتعزيز الترابط.",
          },
          {
            title: "إعادة إحياء المناطق الحضرية",
            description:
              "تحويل المناطق غير المستغلة أو المتدهورة إلى مراكز حضرية مزدهرة وحيوية.",
          },
        ],
        processTitle: "عمليتنا",
        processSubtitle: "نهج تعاوني وشامل",
        process: [
          "بدء جلسة تصور المشروع.",
          "إجراء تحليل للموقع والمجتمع.",
          "تطوير خيارات تخطيط استراتيجية.",
          "إدارة الموافقات التنظيمية والتصاريح.",
          "تنفيذ التصميم ومراحل المشروع.",
          "تقديم الدعم والتقييم بعد المشروع.",
        ],
        cubes: [
          "الرؤية",
          "التحليل",
          "الاستراتيجية",
          "الموافقات",
          "المراحل",
          "الدعم",
        ],
        featuresTitle: "ميزات مشاريعنا",
        featuresSubtitle: "تمكين مشروعك باستخدام تقنيات مبتكرة ورؤى متقدمة.",
        featuresDesc: [
          "يعتمد تخطيطنا على تحليل قائم على البيانات وتعاون مجتمعي باستخدام أدوات متقدمة لتصور السيناريوهات والتنبؤ بالنتائج.",
          "نؤمن أن المشاريع الناجحة تنبع من الحوار الشامل. منصاتنا الرقمية تسهل جمع ودمج ملاحظات المجتمع.",
          "من المفهوم الأولي حتى الموافقة النهائية، نوفر تتبعًا شفافًا للتقدم لضمان عملية سلسة ويمكن التنبؤ بها.",
          "نساعد في تجاوز تعقيدات التصاريح والامتثال التنظيمي من خلال إرشادات واضحة ودعم متخصص لتجنب التأخير.",
        ],
        features: [
          "تحليلات حضرية قائمة على البيانات",
          "نمذجة المدن ثلاثية الأبعاد التفاعلية",
          "بوابة ملاحظات المجتمع",
          "تتبع الموافقات التنظيمية",
        ],
        featuresCardText: "استفد من {{feature}} كعميل مميز.",
        pricingTitle: "ابدأ مشروعك الحضري",
        pricingSubtitle:
          "من موقع فردي إلى مجتمع مخطط بالكامل، لدينا الحل المناسب.",
        pricing: [
          {
            title: "استشارة المشروع",
            price: "2500 دولار",
            priceNote: "/المرحلة الأولية",
            features: [
              "جلسة استشارة واحدة",
              "تقييم الجدوى الأولي ومراجعة استخدام الأراضي",
              "توصيات عملية لبدء المشروع",
              "تقرير ملخص تنفيذي وخطوات تالية",
              "دعم عبر البريد الإلكتروني للمتابعة",
            ],
            buttonText: "احجز استشارة",
          },
          {
            title: "التطوير القياسي",
            price: "عرض سعر",
            priceNote: "/مشروع",
            features: [
              "يشمل جميع ميزات استشارة المشروع",
              "تخطيط وتصميم رئيسي شامل",
              "دعم كامل للتصاريح والأنظمة",
              "استراتيجية إشراك أصحاب المصلحة وتيسيرها",
            ],
            buttonText: "اطلب عرض سعر",
            badge: "الأكثر شيوعًا",
          },
          {
            title: "الشراكة الحضرية",
            price: "عرض سعر",
            priceNote: "/طويل الأمد",
            features: [
              "خدمات تخطيط حضري شاملة",
              "متابعة ودعم بعد التنفيذ",
              "مدير مشروع مخصص وفريق عمل",
              "شراكة استراتيجية لمشاريع متعددة",
              "حلول مخصصة للتحديات الحضرية المعقدة",
            ],
            buttonText: "ابدأ الآن",
          },
        ],
      },
      "interior.heroTitle": "التصميم الداخلي",
      "interior.heroSubtitle": "ابتكار مساحات جميلة وصالحة للعيش.",
      "interior.benefitsTitle": "فلسفة التصميم لدينا",
      "interior.benefitsSubtitle": "نهج تعاوني لإنشاء بيئات عملية وجذابة.",
      "interior.benefit1": "مساحات مخصصة تعكس أسلوبك الفريد",
      "interior.benefit2": "استخدام أمثل للمساحة والإضاءة والألوان",
      "interior.benefit3": "إدارة سلسة للمشروع من الفكرة حتى الإنجاز",
      "interior.benefit4": "الوصول إلى مواد حصرية وأثاث مخصص",
      "interior.benefit5": "عملية خالية من التوتر مع إرشاد احترافي",
      "interior.benefit6": "زيادة قيمة العقار وجاذبيته في السوق",
      "interior.benefitsImageTitle": "تصميم مساحتك المثالية.",
      "interior.benefitsImageSubtitle":
        "نؤمن أن التصميم الداخلي الجيد يعكس شخصية ساكنيه.",
      "interior.servicesTitle": "خدمات التصميم الداخلي لدينا",
      "interior.service1.title": "تصميم داخلي سكني",
      "interior.service1.desc":
        "تحويل المنازل إلى مساحات عملية وجميلة، مخصصة لأسلوب حياتك.",
      "interior.service2.title": "تخطيط المساحات التجارية",
      "interior.service2.desc":
        "إنشاء بيئات ملهمة وفعالة للمكاتب والمتاجر وقطاع الضيافة.",
      "interior.service3.title": "العرض ثلاثي الأبعاد والجولات الافتراضية",
      "interior.service3.desc":
        "إحياء التصميم الخاص بك بنماذج ثلاثية الأبعاد عالية الدقة وجولات افتراضية تفاعلية.",
      "interior.service4.title": "استشارات الألوان والتنسيق",
      "interior.service4.desc":
        "نصائح احترافية حول لوحات الألوان واختيار الأثاث والديكور لتحقيق الانسجام في مساحتك.",
      "interior.service5.title": "التجديد وإعادة التصميم",
      "interior.service5.desc":
        "إدارة كاملة للمشاريع السكنية والتجارية من البداية إلى النهاية.",
      "interior.service6.title": "باقات التصميم الإلكتروني",
      "interior.service6.desc":
        "خدمة افتراضية مرنة وبأسعار معقولة لمن يريد خطة تصميم احترافية لتنفيذها بنفسه.",
      "interior.processTitle": "عملية التصميم لدينا",
      "interior.processSubtitle": "من لوحة فارغة إلى عمل فني.",
      "interior.processStep1": "استشارة أولية وتوضيح متطلبات العميل.",
      "interior.processStep2": "تصور معمق وإنشاء لوحات الأفكار.",
      "interior.processStep3": "تخطيط المساحات والتصور ثلاثي الأبعاد.",
      "interior.processStep4": "اختيار المواد والأثاث والإكسسوارات.",
      "interior.processStep5": "التنفيذ والتركيب والتنسيق.",
      "interior.processStep6": "المراجعة النهائية وتسليم المشروع للعميل.",
      "interior.cube1": "ابتكار",
      "interior.cube2": "تخطيط",
      "interior.cube3": "تصوير",
      "interior.cube4": "اختيار",
      "interior.cube5": "تركيب",
      "interior.cube6": "تنسيق",
      "interior.featuresTitle": "نهجنا المتمحور حول العميل",
      "interior.featuresSubtitle": "تجربة تصميم جميلة وخالية من التوتر.",
      "interior.featuresPara1":
        "نؤمن أن أفضل التصاميم تأتي من التعاون الوثيق، من أول رسم حتى اللمسات النهائية.",
      "interior.featuresPara2":
        "يدير فريقنا كل تفاصيل المشروع، بما في ذلك تنسيق الموردين وتسليم المواد.",
      "interior.featuresPara3":
        "تلقَ تحديثات منتظمة مع الوصول إلى بوابتنا الرقمية الآمنة لمراجعة الخطط والتقدم في أي وقت.",
      "interior.featuresPara4":
        "نوفر راحة البال طوال العملية، مما يجعل رحلتك في التصميم ممتعة وسهلة.",
      "interior.feature1": "مفاهيم وتصميمات مخصصة",
      "interior.feature2": "قائمة منسقة من الأثاث واختيارات المواد",
      "interior.feature3": "مدير مشروع مخصص لتحديثات مباشرة",
      "interior.feature4": "دعم واستشارات بعد الانتهاء",
      "interior.featureBenefit": "استفد من {{feature}} كعميل للتصميم الداخلي.",
      "interior.pricingTitle": "صمم مساحتك المثالية",
      "interior.pricingSubtitle": "اختر الباقة المثالية لتحويل منزلك أو مكتبك.",
      "interior.pricing1.title": "باقة التصميم الإلكتروني",
      "interior.pricing1.priceNote": "/غرفة",
      "interior.pricing1.feature1": "لوحة تصميم رقمية مخصصة",
      "interior.pricing1.feature2": "قائمة منتجات قابلة للنقر",
      "interior.pricing1.feature3": "مخطط أرضي مع توزيع الأثاث",
      "interior.pricing1.feature4": "جولة مراجعة واحدة مشمولة",
      "interior.pricing1.feature5": "دعم عبر البريد الإلكتروني للتنفيذ",
      "interior.pricing1.feature6": "استشارة افتراضية متاحة",
      "interior.pricing1.button": "احجز استشارة",
      "interior.pricing2.title": "خدمة التصميم الكاملة",
      "interior.pricing2.priceNote": "/غرفة",
      "interior.pricing2.feature1": "جميع خدمات التصميم الإلكتروني",
      "interior.pricing2.feature2": "زيارات ميدانية وإدارة المشروع",
      "interior.pricing2.feature3": "توفير المواد ومصادرها",
      "interior.pricing2.feature4": "التركيب والتنسيق النهائي",
      "interior.pricing2.feature5": "الوصول إلى خصومات تجارية حصرية",
      "interior.pricing2.button": "تواصل معنا",
      "interior.pricing2.badge": "الأكثر شيوعًا",
      "interior.pricing3.title": "التجديد وإعادة التصميم",
      "interior.pricing3.priceNote": "/مشروع",
      "interior.pricing3.feature1": "خدمات التصميم والتخطيط الكاملة",
      "interior.pricing3.feature2": "رسومات معمارية وتصاريح",
      "interior.pricing3.feature3": "تنسيق مع المقاولين",
      "interior.pricing3.feature4": "إشراف كامل على المشروع",
      "interior.pricing3.feature5": "تنسيق ودعم بعد التجديد",
      "interior.pricing3.feature6": "خيارات تصميم مستدامة",
      "interior.pricing3.button": "ابدأ الآن",

      // --- IndustrialFacilities.jsx keys ---
      "Industrial Facilities": "المرافق الصناعية",
      "End-to-end facility support for all stages of development growth.":
        "دعم شامل للمرافق في جميع مراحل التطوير والنمو.",
      "Comprehensive support for industrial facility planning and operations":
        "دعم شامل لتخطيط وتشغيل المرافق الصناعية",
      "Detailed contract review and drafting for industrial projects":
        "مراجعة وصياغة العقود بالتفصيل للمشاريع الصناعية",
      "Expert guidance on plant expansions, mergers, and restructuring":
        "إرشادات خبراء حول توسعات المصانع والاندماجات وإعادة الهيكلة",
      "Compliance and safety advice for industrial regulations":
        "نصائح حول الامتثال والسلامة للأنظمة الصناعية",
      "Risk management for facility managers and stakeholders":
        "إدارة المخاطر لمديري المرافق وأصحاب المصلحة",
      "Proactive representation in regulatory and industrial disputes":
        "تمثيل استباقي في النزاعات التنظيمية والصناعية",
      "Industrial Facility Planning": "تخطيط المرافق الصناعية",
      "Strategic guidance for designing, expanding, and structuring industrial plants and complexes":
        "إرشادات استراتيجية لتصميم وتوسيع وهيكلة المصانع والمجمعات الصناعية",
      "Industrial Contracts & Agreements": "عقود واتفاقيات صناعية",
      "Drafting, negotiation, and review of contracts for construction, equipment, and operations":
        "صياغة وتفاوض ومراجعة العقود للبناء والمعدات والتشغيل",
      "Plant Expansions & Mergers": "توسعات واندماجات المصانع",
      "Legal due diligence, transaction structuring, and regulatory filings for industrial mergers and expansions":
        "العناية القانونية اللازمة وهيكلة المعاملات والتقارير التنظيمية للاندماجات والتوسعات الصناعية",
      "Regulatory & Safety Compliance": "الامتثال التنظيمي والسلامة",
      "Advice on industrial regulations, safety standards, and ongoing compliance audits":
        "نصائح حول الأنظمة الصناعية ومعايير السلامة والتدقيق المستمر للامتثال",
      "Facility Disputes & Resolution": "النزاعات وحلول المرافق",
      "Expert representation and mediation in industrial and facility-related disputes":
        "تمثيل وخبرة في الوساطة في النزاعات الصناعية والمتعلقة بالمرافق",
      "Industrial Governance": "حوكمة المرافق الصناعية",
      "Advisory on facility management, risk mitigation, and compliance with industrial standards":
        "استشارات في إدارة المرافق وتخفيف المخاطر والامتثال للمعايير الصناعية",
      "Direct access to industrial facility specialists":
        "وصول مباشر إلى متخصصي المرافق الصناعية",
      "Timely review of industrial documents and contracts":
        "مراجعة فورية للوثائق والعقود الصناعية",
      "Custom safety and compliance checklists":
        "قوائم مراجعة مخصصة للسلامة والامتثال",
      "On-demand updates via our facility portal":
        "تحديثات عند الطلب عبر بوابة المرافق الخاصة بنا",
      "Project Evaluation": "تقييم المشروع",
      "Initial consultation with an engineer": "استشارة أولية مع مهندس",
      "Review of facility schematics (up to 20 pages)":
        "مراجعة مخططات المرافق (حتى 20 صفحة)",
      "Initial feasibility study & options": "دراسة جدوى أولية وخيارات",
      "Technical recommendations": "توصيات فنية",
      "Follow-up email support": "دعم عبر البريد الإلكتروني بعد الاستشارة",
      "Maintenance & Support": "الصيانة والدعم",
      "All Project Evaluation services": "جميع خدمات تقييم المشروع",
      "Scheduled preventative maintenance": "صيانة وقائية مجدولة",
      "24/7 emergency response & support": "استجابة ودعم طارئ على مدار الساعة",
      "Equipment calibration & performance audits":
        "معايرة المعدات وتدقيق الأداء",
      "Turnkey Solution": "حل متكامل",
      "End-to-end management for new builds or upgrades":
        "إدارة شاملة للمشاريع الجديدة أو التحديثات",
      "Custom design and engineering": "تصميم وهندسة مخصصة",
      "On-site team & priority project management":
        "فريق ميداني وإدارة مشاريع ذات أولوية",
      "Regular progress reports & strategy calls":
        "تقارير تقدم منتظمة ومكالمات استراتيجية",
      "MOST POPULAR": "الأكثر شيوعًا",
      "Key Advantages": "المزايا الرئيسية",
      "Mediation, arbitration, or litigation to resolve conflicts effectively":
        "الوساطة أو التحكيم أو التقاضي لحل النزاعات بفعالية",
      "Arbitration and Litigation.": "التحكيم والتقاضي.",
      "Get compassionate, effective solutions for even the most delicate matters.":
        "احصل على حلول فعالة ورحيمة حتى لأكثر القضايا حساسية.",
      "Industrial Services": "الخدمات الصناعية",
      "HOW WE WORK": "كيف نعمل",
      "Our residential project process": "عملية مشروعنا السكني",
      "Personalized consultation and vision assessment.":
        "استشارة شخصية وتقييم الرؤية.",
      "Site analysis and feasibility planning.": "تحليل الموقع وتخطيط الجدوى.",
      "Custom architectural design development.": "تطوير تصميم معماري مخصص.",
      "Permitting and regulatory compliance management.":
        "إدارة التصاريح والامتثال التنظيمي.",
      "Construction and quality assurance.": "البناء وضمان الجودة.",
      "Regular updates and collaborative client feedback.":
        "تحديثات منتظمة وملاحظات العملاء التعاونية.",
      "Final walkthrough and post-completion support.":
        "جولة نهائية ودعم بعد الإنجاز.",
      "Why Choose Us for Industrial Facility Services":
        "لماذا تختارنا لخدمات المرافق الصناعية",
      "Enhancing industrial spaces with reliable renovation and restoration solutions.":
        "تعزيز المساحات الصناعية بحلول تجديد وترميم موثوقة.",
      "Expertise in Industrial Renovation:": "خبرة في تجديد المرافق الصناعية:",
      "Our team has extensive experience in upgrading warehouses, factories, and production plants to meet modern safety and operational standards.":
        "فريقنا لديه خبرة واسعة في ترقية المستودعات والمصانع ومحطات الإنتاج لتلبية معايير السلامة والتشغيل الحديثة.",
      "Comprehensive Maintenance & Compliance:": "صيانة شاملة وامتثال:",
      "We ensure your facilities remain compliant with industry regulations through preventive maintenance, structural inspections, and energy-efficient upgrades.":
        "نضمن بقاء مرافقك متوافقة مع الأنظمة من خلال الصيانة الوقائية والفحوصات الهيكلية والترقيات الموفرة للطاقة.",
      "Customized Restoration Solutions:": "حلول ترميم مخصصة:",
      "Whether repairing structural elements, modernizing layouts, or restoring heritage industrial sites, we deliver tailored solutions that enhance functionality and extend asset life.":
        "سواء إصلاح العناصر الهيكلية أو تحديث التصاميم أو ترميم المواقع الصناعية التراثية، نقدم حلولاً مخصصة تعزز الوظائف وتطيل عمر الأصول.",
      "Benefit from {{feature}} as our corporate client.":
        "استفد من {{feature}} كعميل مؤسسي لدينا.",
      "Secure Your Corporate Advantage": "أمّن ميزتك المؤسسية",
      "Build and grow your company with expert legal partners by your side.":
        "ابنِ ونمِ شركتك مع شركاء قانونيين خبراء بجانبك.",
      // --- CommercialComplexes.jsx keys ---
      Plan: "خطة",
      "Our commercial project process": "عملية مشروعنا التجاري",
      session: "جلسة",
      project: "مشروع",
      month: "شهر",
      Build: "بناء",
      Deliver: "تسليم",
      "Full Project": "مشروع كامل",

      "Smartly designed and expertly executed commercial complexes to help businesses thrive.":
        "مجمعات تجارية مصممة بذكاء ومنفذة باحترافية لمساعدة الأعمال على الازدهار.",
      "Expert planning and design tailored to commercial needs":
        "تخطيط وتصميم خبير مخصص للاحتياجات التجارية",
      "Efficient use of space to maximize functionality and appeal":
        "استخدام فعال للمساحة لتعظيم الوظائف والجاذبية",
      "Compliance with modern safety and regulatory standards":
        "الامتثال لمعايير السلامة والتنظيم الحديثة",
      "Sustainable and energy-efficient construction methods":
        "طرق بناء مستدامة وموفرة للطاقة",
      "High-quality materials ensuring durability and aesthetics":
        "مواد عالية الجودة لضمان المتانة والجمال",
      "Timely delivery with strict project management practices":
        "تسليم في الوقت المحدد مع إدارة مشاريع صارمة",
      "Your Vision. Our Blueprint.": "رؤيتك. مخططنا.",
      "We create commercial spaces that balance design, functionality, and growth potential.":
        "ننشئ مساحات تجارية توازن بين التصميم والوظيفة وإمكانيات النمو.",
      "Design & Architecture": "التصميم والعمارة",
      "Innovative architectural designs tailored for retail, office, and mixed-use commercial complexes.":
        "تصاميم معمارية مبتكرة مخصصة لمجمعات التجزئة والمكاتب والاستخدامات المختلطة.",
      "Structural Engineering": "الهندسة الإنشائية",
      "Safe and robust structures ensuring long-term reliability and compliance with all codes.":
        "هياكل آمنة وقوية لضمان الموثوقية على المدى الطويل والامتثال لجميع القوانين.",
      "Construction Management": "إدارة البناء",
      "End-to-end project management ensuring efficiency, cost-effectiveness, and timely delivery.":
        "إدارة مشاريع شاملة تضمن الكفاءة والفعالية والتسليم في الوقت المحدد.",
      "Interior Fit-outs": "تشطيبات داخلية",
      "Customized interiors designed for functionality, branding, and modern aesthetics.":
        "تصاميم داخلية مخصصة للوظيفة والعلامة التجارية والجماليات الحديثة.",
      "Sustainability Solutions": "حلول الاستدامة",
      "Eco-friendly practices including energy-efficient systems, water management, and green materials.":
        "ممارسات صديقة للبيئة تشمل أنظمة موفرة للطاقة وإدارة المياه ومواد خضراء.",

      "Post-construction support including regular inspections, upgrades, and maintenance services.":
        "دعم ما بعد البناء يشمل الفحوصات الدورية والتحديثات وخدمات الصيانة.",
      Consultation: "استشارة",
      "One-on-one consultation with our commercial expert":
        "استشارة فردية مع خبيرنا التجاري",
      "Site feasibility analysis": "تحليل جدوى الموقع",
      "Initial concept design discussion": "مناقشة التصميم المفهومي الأولي",
      "Budget estimation and project scope outline":
        "تقدير الميزانية وتحديد نطاق المشروع",
      "Complete architectural design & planning": "تصميم وتخطيط معماري كامل",
      "Structural, MEP engineering & maintenance":
        "الهندسة الإنشائية والميكانيكية والكهربائية والصيانة",
      "Project execution & supervision": "تنفيذ المشروع والإشراف عليه",
      "Timely handover of commercial complex":
        "تسليم المجمع التجاري في الوقت المحدد",
      "Structural assessment of existing buildings":
        "تقييم هيكلي للمباني القائمة",
      "Redesign for modern layouts": "إعادة تصميم لتخطيطات حديثة",
      "Expansion and retrofitting services": "خدمات التوسعة والتجديد",
      "Updated interiors and sustainable upgrades":
        "تشطيبات داخلية محدثة وترقيات مستدامة",
      "Compliance with current regulations and standards":
        "الامتثال للوائح والمعايير الحالية",
      "Build Your Commercial Complex With Confidence":
        "ابنِ مجمعك التجاري بثقة",
      "Get expert planning, reliable execution, and peace of mind for your commercial project—with us.":
        "احصل على تخطيط خبير وتنفيذ موثوق وراحة البال لمشروعك التجاري معنا.",
      "Commercial Complex Features": "ميزات المجمع التجاري",
      "Designed for efficiency, safety, and business success.":
        "مصمم للكفاءة والسلامة ونجاح الأعمال.",
      "We deliver innovative solutions for commercial complexes, ensuring compliance, safety, and optimal business environments.":
        "نقدم حلولاً مبتكرة للمجمعات التجارية مع ضمان الامتثال والسلامة وبيئة أعمال مثالية.",
      "You can monitor project progress, access building plans, and receive updates online, or contact us for tailored business support.":
        "يمكنك متابعة تقدم المشروع والوصول إلى المخططات واستلام التحديثات عبر الإنترنت أو التواصل معنا لدعم أعمال مخصص.",
      "Our team is available for urgent site visits, regulatory approvals, and last-minute business requirements.":
        "فريقنا متاح للزيارات العاجلة للموقع والموافقات التنظيمية والمتطلبات التجارية الطارئة.",
      "Every inquiry is addressed with professionalism, speed, and clarity.":
        "كل استفسار يُعالج باحترافية وسرعة ووضوح.",
      "Direct collaboration with architects and engineers":
        "تعاون مباشر مع المهندسين والمعماريين",
      "Transparent progress tracking and reports": "تتبع شفاف للتقدم والتقارير",
      "Custom design layouts for varied business types":
        "تصاميم مخصصة لأنواع الأعمال المختلفة",
      "On-demand project updates and client walkthroughs":
        "تحديثات المشروع وجولات العملاء عند الطلب",
      "Benefit from {{feature}} as our civil client.":
        "استفد من {{feature}} كعميل مدني لدينا.",
      "Renovation & Expansion": "تجديد وتوسعة",
      "Book Consult": "احجز استشارة",
      "Start Now": "ابدأ الآن",
      "Initial consultation and requirement analysis.":
        "استشارة أولية وتحليل المتطلبات.",
      "Site survey and feasibility study.": "مسح الموقع ودراسة الجدوى.",
      "Conceptual and architectural design creation.":
        "إنشاء تصميم مفهومي ومعماري.",
      "Regulatory approvals and compliance handling.":
        "الحصول على الموافقات التنظيمية والتعامل مع الامتثال.",
      "Efficient construction with quality monitoring.":
        "بناء فعال مع مراقبة الجودة.",
      "Transparent client updates and review meetings.":
        "تحديثات شفافة واجتماعات مراجعة مع العميل.",
      "Final handover and post-completion support.":
        "التسليم النهائي والدعم بعد الإنجاز.",

      // --- Fallbacks for missing keys (auto-filled from English) ---
      "Design & Planning": "تصميم وتخطيط",
      "Regular project status updates": "تحديثات منتظمة لحالة المشروع",
      "Personalized communication with your project manager":
        "تواصل شخصي مع مدير مشروعك",
      "Access to design reviews and materials through our client portal":
        "الوصول إلى مراجعات التصميم والمواد عبر بوابة العملاء الخاصة بنا",
      "Focus on client satisfaction and finishing details":
        "التركيز على رضا العملاء وتفاصيل التشطيب",
      "We treat every project with precision, care, and personal attention.":
        "نتعامل مع كل مشروع بدقة وعناية واهتمام شخصي.",
      "Access to resources and expert consultants throughout your project.":
        "الوصول إلى الموارد والخبراء الاستشاريين طوال فترة مشروعك.",
      "Client portal provides 24/7 access to design and construction updates.":
        "توفر بوابة العملاء وصولًا على مدار الساعة لتحديثات التصميم والبناء.",
      "Expect reliability, transparency, and constant communication at every stage.":
        "توقع الموثوقية والشفافية والتواصل المستمر في كل مرحلة.",
      "Benefit from this as our client.": "استفد من هذا بصفتك عميلنا.",

      "From cozy single-family homes to expansive luxury estates, creating living spaces that inspire and endure.":
        "من منازل عائلية مريحة إلى عقارات فاخرة واسعة، نُنشئ مساحات معيشة تلهم وتدوم.",
      "Crafting interiors that harmonize beauty and functionality to make every house a home.":
        "نصمم ديكورات داخلية تجمع بين الجمال والوظيفة لتحويل كل منزل إلى بيت حقيقي.",
      "Enhancing and preserving your current home with thoughtful upgrades and restorations.":
        "نعزز ونحافظ على منزلك الحالي من خلال تحسينات وتجديدات مدروسة.",
      "Transforming outdoor spaces into beautiful, functional environments tailored to your lifestyle.":
        "نحوّل المساحات الخارجية إلى بيئات جميلة وعملية مصممة خصيصًا لتناسب أسلوب حياتك.",
      "Upgrading homes with the latest smart technologies for convenience, security, and energy efficiency.":
        "نقوم بترقية المنازل بأحدث التقنيات الذكية لتوفير الراحة والأمان وكفاءة الطاقة.",
      "Expanding your living space with seamless additions that blend perfectly with your existing home.":
        "نوسع مساحة المعيشة لديك بإضافات متكاملة تنسجم تمامًا مع منزلك الحالي.",

      // Home2.jsx new keys
      "Welcome to Vision Builders": "مرحبًا بكم في فيجن بيلدرز",
      "Designing and building innovative spaces that inspire communities and stand the test of time.":
        "نصمم ونبني مساحات مبتكرة تلهم المجتمعات وتدوم عبر الزمن.",
      "Our Design Philosophy": "فلسفتنا في التصميم",
      "Creativity, sustainability, and precision are the cornerstones of our practice. Every project is tailored with innovation, functional design, and a strong commitment to environmental responsibility.":
        "الإبداع، الاستدامة، والدقة هي أساس عملنا. كل مشروع يُنفذ بابتكار وتصميم وظيفي والتزام قوي بالمسؤولية البيئية.",
      "Client-Focused Design": "تصميم يركز على العميل",
      "Every structure begins with your vision—crafted through collaboration and personalized planning.":
        "كل مبنى يبدأ برؤيتك—من خلال التعاون والتخطيط المخصص.",
      "Sustainable Innovation": "ابتكار مستدام",
      "We integrate green building practices and future-ready technologies into every design.":
        "نُدمج ممارسات البناء الأخضر والتقنيات المستقبلية في كل تصميم.",
      "Proven Excellence": "تميز مثبت",
      "From homes to skyscrapers, our portfolio showcases projects that are both iconic and enduring.":
        "من المنازل إلى ناطحات السحاب، يعرض سجلنا مشاريع أيقونية ودائمة.",
      "Our Approach": "نهجنا",
      At: "في",
      "we unite architectural creativity with engineering precision. Each project is overseen with attention to detail, ensuring structural quality and design excellence.":
        "نحن نوحد الإبداع المعماري مع الدقة الهندسية. كل مشروع يُشرف عليه بعناية لضمان الجودة والتميز.",
      "We believe in transparent communication and collaboration—keeping clients consistently updated from planning to construction.":
        "نؤمن بالتواصل الشفاف والتعاون—نبقي العملاء على اطلاع دائم من التخطيط حتى التنفيذ.",
      "Our process emphasizes innovation, sustainability, and efficiency, delivering results that are functional, aesthetic, and future-ready.":
        "عملياتنا تركز على الابتكار، الاستدامة، والكفاءة، لنقدم نتائج عملية وجمالية وجاهزة للمستقبل.",
      "Featured Projects": "مشاريع مميزة",
      "Sustainable Residential Complex": "مجمع سكني مستدام",
      "Designed and constructed an award-winning eco-friendly residential complex with solar integration and smart water management.":
        "صممنا ونفذنا مجمعًا سكنيًا صديقًا للبيئة حائزًا على جوائز مع دمج الطاقة الشمسية وإدارة ذكية للمياه.",
      "Modern Corporate Headquarters": "مقر شركة حديث",
      "Delivered a state-of-the-art commercial office building with innovative open-plan designs and LEED Platinum certification.":
        "أنجزنا مبنى مكاتب تجاري حديث بتصاميم مبتكرة وشهادة LEED البلاتينية.",
      Year: "السنة",
      "Latest Construction Insights": "أحدث الرؤى في البناء",
      "Trends in Sustainable Architecture": "اتجاهات العمارة المستدامة",
      "Exploring the latest innovations in eco-friendly building materials and energy design.":
        "استكشاف أحدث الابتكارات في مواد البناء الصديقة للبيئة وتصميم الطاقة.",
      "Maximizing Space in Urban Design": "تعظيم المساحات في التصميم الحضري",
      "Creative strategies for making the most of limited urban spaces.":
        "استراتيجيات إبداعية للاستفادة القصوى من المساحات الحضرية المحدودة.",
      "Smart Building Technologies": "تقنيات البناء الذكية",
      "How IoT and automation are redefining modern construction.":
        "كيف تعيد إنترنت الأشياء والأتمتة تعريف البناء الحديث.",
      "Read More": "اقرأ المزيد",
      "Schedule a Project Consultation": "جدولة استشارة مشروع",
      Name: "الاسم",
      "Your full name": "اسمك الكامل",
      Message: "الرسالة",
      "Briefly describe your project": "صف مشروعك بإيجاز",
      "Book Consultation": "احجز استشارة",
      "Your consultation request was submitted successfully!":
        "تم إرسال طلب الاستشارة بنجاح!",
      Home: "الرئيسية",
      Home1: "الصفحة الرئيسية 1",
      Home2: "الصفحة الرئيسية 2",
      "About Us": "معلومات عنا",
      Services: "الخدمات",
      "View All Services": "عرض جميع الخدمات",
      "Residential Projects": "مشاريع سكنية",
      "Commercial Complexes": "المجمعات التجارية",

      "Interior Design": "التصميم الداخلي",
      "Urban Planning": "التخطيط الحضري",
      "Renovation & Restoration": "التجديد والترميم",
      Blog: "مدونة",
      "Contact Us": "اتصل بنا",
      "User Profile": "ملف المستخدم",
      Logout: "تسجيل الخروج",
      Languages: "اللغات",
      English: "الإنجليزية",
      Arabic: "العربية",
      Hebrew: "العبرية",
      QuickLinks: "روابط سريعة",
      "Residential Projects Experts": "خبراء المشاريع السكنية",
      "Building homes that reflect your vision and lifestyle.":
        "نبني منازل تعكس رؤيتك وأسلوب حياتك.",
      "Why Choose Our Residential Services": "لماذا تختار خدماتنا السكنية",
      "Trusted partner delivering personalized and quality residential constructions.":
        "شريك موثوق يقدم إنشاءات سكنية مخصصة وعالية الجودة.",
      "Our Residential Services": "خدماتنا السكنية",
      "Explore our full range of residential solutions.":
        "استكشف مجموعتنا الكاملة من الحلول السكنية.",

      "Our Client Features": "مميزات عملائنا",
      "Always putting your project’s success first.":
        "نضع نجاح مشروعك دائمًا في المقام الأول.",
      "Secure Peace of Mind for Your Project": "احصل على راحة البال لمشروعك",
      "Find clarity, support, and expert solutions—every step of the way.":
        "اعثر على الوضوح والدعم والحلول المتخصصة في كل خطوة.",
      // Home.jsx new keys
      "Building Tomorrow, Today": "نبني الغد اليوم",
      "Your trusted partner in construction and architecture — delivering innovative designs, sustainable solutions, and projects that stand the test of time.":
        "شريكك الموثوق في البناء والهندسة المعمارية — نقدم تصاميم مبتكرة، حلول مستدامة، ومشاريع تدوم طويلاً.",
      "Explore our services": "استكشف خدماتنا",
      "Our Expertise": "خبراتنا",
      "High-quality design and construction services tailored for residential projects.":
        "خدمات تصميم وبناء عالية الجودة مخصصة للمشاريع السكنية.",
      "High-quality design and construction services tailored for commercial complexes.":
        "خدمات تصميم وبناء عالية الجودة مخصصة للمجمعات التجارية.",
      "High-quality design and construction services tailored for industrial facilities.":
        "خدمات تصميم وبناء عالية الجودة مخصصة للمرافق الصناعية.",
      "High-quality design and construction services tailored for interior design.":
        "خدمات تصميم وبناء عالية الجودة مخصصة للتصميم الداخلي.",
      "High-quality design and construction services tailored for urban planning.":
        "خدمات تصميم وبناء عالية الجودة مخصصة للتخطيط الحضري.",
      "High-quality design and construction services tailored for renovation and restoration.":
        "خدمات تصميم وبناء عالية الجودة مخصصة للتجديد والترميم.",
      "About Our Firm": "عن شركتنا",
      "Established in 1997, with 2,500+ projects completed globally.":
        "تأسست عام 1997، مع أكثر من 2500 مشروع مكتمل حول العالم.",
      "Award-winning design and engineering teams.":
        "فرق تصميم وهندسة حائزة على جوائز.",
      "Specialized in sustainable and innovative architecture.":
        "متخصصون في الهندسة المعمارية المستدامة والمبتكرة.",
      "Trusted by clients ranging from homeowners to multinational corporations.":
        "موثوق من قبل عملاء من أصحاب المنازل إلى الشركات متعددة الجنسيات.",
      "Dedicated to transforming communities through responsible construction.":
        "ملتزمون بتحويل المجتمعات من خلال البناء المسؤول.",
      "Learn More About Us": "تعرف علينا أكثر",
      "Meet Our Architects & Engineers": "تعرف على مهندسينا ومعمارينا",
      "Jane Doe": "جين دو",
      "Lead Architect": "كبير المهندسين المعماريين",
      "John Smith": "جون سميث",
      "Structural Engineer": "مهندس إنشائي",
      "Emily Davis": "إميلي ديفيس",
      "Interior Designer": "مصممة داخلية",
      "Kevin Spacey": "كيفن سبايسي",
      "Project Manager": "مدير المشروع",
      "A Construction Partner You Can Trust": "شريك بناء يمكنك الوثوق به",
      "We go beyond blueprints and concrete. Our commitment to reliability, transparency, and innovation ensures every project is completed on time, within budget, and with uncompromising quality.":
        "نحن نتجاوز المخططات والخرسانة. التزامنا بالموثوقية والشفافية والابتكار يضمن إكمال كل مشروع في الوقت المحدد وضمن الميزانية وبجودة لا تقبل المساومة.",
      "Client satisfaction rate": "معدل رضا العملاء",
      "across residential & commercial projects.":
        "عبر المشاريع السكنية والتجارية.",
      "Projects delivered": "مشاريع تم تسليمها",
      "within scheduled timelines.": "ضمن الجداول الزمنية المحددة.",
      "Dedicated project support": "دعم مشروع مخصص",
      "and client communication.": "وتواصل مع العملاء.",
      "Architects & engineers": "مهندسون ومعماريون",
      "with proven track records.": "ذوو سجلات حافلة بالنجاح.",
      "Ready to Start Your Project?": "هل أنت مستعد لبدء مشروعك؟",
      "Contact us today to discuss your vision, and let’s bring it to life with expert design and construction.":
        "اتصل بنا اليوم لمناقشة رؤيتك، ودعنا نحققها بتصميم وبناء احترافي.",
      "Book a consultation": "احجز استشارة",
      "Our Services": "خدماتنا",
      Address: "العنوان:",
      "123 Skyline Avenue, Design City": "123 شارع سكاي لاين، مدينة التصميم",
      Phone: "الهاتف:",
      "(123) 456-7890": "(123) 456-7890",
      Email: "البريد الإلكتروني:",
      "info@visionbuilders.com": "info@visionbuilders.com",
      Hours: "ساعات العمل:",
      "Mon–Fri, 9 AM – 6 PM": "الإثنين–الجمعة، 9 صباحًا – 6 مساءً",
      Newsletter: "النشرة الإخبارية",
      "Stay updated with the latest trends in architecture and construction.":
        "ابق على اطلاع بآخر الاتجاهات في الهندسة المعمارية والبناء.",
      "Your email": "بريدك الإلكتروني",
      Subscribe: "اشترك",
      "Subscribed!": "تم الاشتراك!",
      "All rights reserved.": "جميع الحقوق محفوظة.",
      "Starting at $50,000": "ابتداءً من 50,000 دولار",
      // AboutUs.jsx keys
      "About Vision Builders": "عن فيجن بيلدرز",
      "Shaping skylines and building communities with passion, innovation, and trust since our foundation.":
        "نشكّل الأفق ونبني المجتمعات بشغف وابتكار وثقة منذ تأسيسنا.",
      "Our Mission & Vision": "مهمتنا ورؤيتنا",
      "We are committed to designing and constructing spaces that inspire, endure, and improve lives. Every project reflects our focus on innovation, sustainability, and excellence in architecture and construction.":
        "نلتزم بتصميم وبناء مساحات تلهم وتدوم وتحسن الحياة. كل مشروع يعكس تركيزنا على الابتكار والاستدامة والتميز في الهندسة المعمارية والبناء.",
      "Our Mission": "مهمتنا",
      "To build sustainable, functional, and beautiful spaces that bring visions to life and positively impact communities.":
        "بناء مساحات مستدامة وعملية وجميلة تحقق الرؤى وتؤثر إيجابياً على المجتمعات.",
      "Our Vision": "رؤيتنا",
      "To be a global leader in innovative and sustainable architecture—transforming skylines and redefining modern living and workspaces.":
        "أن نكون روادًا عالميين في الهندسة المعمارية المبتكرة والمستدامة—نحو آفاق جديدة للحياة والعمل.",
      "Our Core Values": "قيمنا الأساسية",
      Integrity: "النزاهة",
      Integrity_desc:
        "نلتزم بالصدق والشفافية في كل مشروع من التخطيط حتى التسليم.",
      Excellence: "التميز",
      Excellence_desc: "نقدم جودة تصميم وبناء عالمية من خلال الخبرة والدقة.",
      "Client Focus": "تركيز على العميل",
      "Client Focus_desc": "رؤيتك في صميم عملنا—نتعاون معك لتجاوز التوقعات.",
      Sustainability: "الاستدامة",
      Sustainability_desc:
        "نولي الأولوية للممارسات الصديقة للبيئة والمواد الخضراء والحلول الموفرة للطاقة.",
      Innovation: "الابتكار",
      Innovation_desc:
        "نتبنى التقنيات الحديثة والتصاميم المستقبلية لصنع المستقبل.",
      Community: "المجتمع",
      Community_desc: "نلتزم ببناء تأثيرات إيجابية دائمة للأفراد والمجتمع.",
      "Our Growth Through Years": "نمونا عبر السنوات",
      "A journey of creativity, technology, and dedication—transforming blueprints into reality since day one.":
        "رحلة من الإبداع والتقنية والالتزام—نحو تحويل المخططات إلى واقع منذ اليوم الأول.",
      Foundation: "التأسيس",
      "Founded Vision Builders with the goal of redefining modern architecture—first office established in 2016, delivering pioneering residential projects.":
        "تأسست فيجن بيلدرز بهدف إعادة تعريف العمارة الحديثة—أول مكتب في 2016 ومشاريع سكنية رائدة.",
      Expansion: "التوسع",
      "Expanded into commercial and industrial projects. Opened second design studio, grew to 20+ architects and engineers, 2019.":
        "توسعنا إلى المشاريع التجارية والصناعية. افتتاح استوديو تصميم ثانٍ، وزيادة الفريق إلى أكثر من 20 مهندسًا ومعماريًا في 2019.",
      "National Recognition": "الاعتراف الوطني",
      "Earned national recognition for eco-friendly architecture and innovative structural designs. Awarded Best Design Firm, 2022.":
        "حصلنا على اعتراف وطني بالتصاميم البيئية والمبتكرة. جائزة أفضل شركة تصميم 2022.",
      "Technology & Innovation": "التقنية والابتكار",
      "Integrated BIM systems, smart building technologies, and remote project collaboration for efficiency and connectivity, 2024.":
        "دمج أنظمة BIM والتقنيات الذكية والتعاون عن بعد لزيادة الكفاءة والاتصال، 2024.",
      "Our Commitment to You": "التزامنا تجاهك",
      "We commit to delivering reliable, innovative, and sustainable building solutions. From blueprint to handover, your vision is at the heart of everything we do.":
        "نلتزم بتقديم حلول بناء موثوقة ومبتكرة ومستدامة. رؤيتك في صميم كل ما نقوم به من المخطط حتى التسليم.",
      "\u201cVision Builders transformed our dream into reality with unmatched professionalism and creativity. A true partner in every step.\u201d — Client Testimonial":
        "\u201cفيجن بيلدرز حولت حلمنا إلى واقع باحترافية وإبداع لا مثيل لهما. شريك حقيقي في كل خطوة.\u201d — شهادة عميل",
      "Ready to Build with Us?": "جاهز للبناء معنا؟",
      "Contact Vision Builders today to schedule your consultation and discover how we can bring your project to life.":
        "اتصل بفيجن بيلدرز اليوم وحدد موعد استشارتك واكتشف كيف يمكننا تحقيق مشروعك.",
      "Connect with us": "تواصل معنا",
      //   "Our Services": "خدماتنا",
      "Complete construction and architecture solutions for homes, businesses, and communities—delivered with vision, skill, and commitment.":
        "حلول شاملة للبناء والهندسة المعمارية للمنازل، والأعمال، والمجتمعات — تُقدم برؤية ومهارة والتزام.",
      "What We Do": "ما نقوم به",

      //   "Residential Projects": "المشاريع السكنية",
      "End-to-end design and construction for homes, apartments, and villas, blending comfort with contemporary aesthetics.":
        "تصميم وبناء متكامل للمنازل والشقق والفلل، يجمع بين الراحة والجماليات العصرية.",
      "Architectural planning & design": "التخطيط والتصميم المعماري",
      "Custom interiors and renovations": "تصاميم داخلية وتجديدات مخصصة",
      "Eco-friendly home solutions": "حلول منازل صديقة للبيئة",
      "Smart home integration": "دمج أنظمة المنازل الذكية",

      //   "Commercial Complexes": "المجمعات التجارية",
      "Comprehensive solutions for offices, malls, retail spaces, and mixed-use developments built for business success.":
        "حلول متكاملة للمكاتب والمراكز التجارية والمتاجر والمشاريع متعددة الاستخدامات المصممة لنجاح الأعمال.",
      "Workplace planning and design": "تخطيط وتصميم أماكن العمل",
      "Retail/office space remodeling":
        "إعادة تصميم المساحات المكتبية والتجارية",
      "Future-ready infrastructure": "بنية تحتية جاهزة للمستقبل",
      "Compliance & safety standards": "معايير السلامة والامتثال",

      //   "Industrial Facilities": "المرافق الصناعية",
      "Specialized construction for factories, warehouses, and smart industrial spaces—with a focus on durability and scalability.":
        "بناء متخصص للمصانع والمستودعات والمساحات الصناعية الذكية مع التركيز على المتانة وقابلية التوسع.",
      "Large-scale industrial design": "تصميم صناعي واسع النطاق",
      "Energy & logistics optimization": "تحسين الطاقة واللوجستيات",
      "Safety and environment compliance": "الامتثال للسلامة والبيئة",
      "Tailored project management": "إدارة مشاريع مخصصة",

      //   "Interior Design": "التصميم الداخلي",
      "Modern, functional interiors for residential, commercial, or hospitality spaces tailored to your vision and brand.":
        "تصاميم داخلية عصرية وعملية للمساحات السكنية والتجارية والضيافة مخصصة لرؤيتك وهويتك.",
      "Space planning & layout": "تخطيط وتوزيع المساحات",
      "Material & color consultation": "استشارات المواد والألوان",
      "Furniture and lighting solutions": "حلول الأثاث والإضاءة",
      "Turnkey project execution": "تنفيذ المشاريع بشكل متكامل",

      //   "Urban Planning": "التخطيط الحضري",
      "Strategic master planning and urban design for sustainable, vibrant communities and smart cities.":
        "تخطيط استراتيجي وتصميم حضري لمجتمعات مستدامة وحيوية ومدن ذكية.",
      "City/zone master plans": "مخططات رئيسية للمدن/المناطق",
      "Landscape & streetscape design": "تصميم المناظر الطبيعية والشوارع",
      "Public realm improvements": "تحسينات الأماكن العامة",
      "Sustainable urban policy": "سياسات حضرية مستدامة",

      //   "Renovation & Restoration": "التجديد والترميم",
      "Bringing new life to historic, aged, or underutilized buildings through careful restoration and creative upgrades.":
        "إحياء المباني التاريخية أو القديمة أو غير المستغلة من خلال ترميم دقيق وتحديثات إبداعية.",
      "Restoration & retrofitting": "الترميم والتجديد",
      "Heritage conservation": "حفظ التراث",
      "Modernization of old spaces": "تحديث المساحات القديمة",
      "Adaptive reuse projects": "مشاريع إعادة الاستخدام",

      "Why Choose Vision Builders": "لماذا تختار فيجن بيلدرز",
      "Creative Design Process": "عملية تصميم إبداعية",
      "Our collaborative approach puts your vision at the center of inspired, functional designs.":
        "نهجنا التعاوني يضع رؤيتك في قلب التصاميم الإبداعية والعملية.",
      "Quality Craftsmanship": "جودة الصنعة",
      "We build to last—combining cutting-edge methods, sustainable materials, and meticulous attention to detail.":
        "نبني ليدوم—من خلال الجمع بين الأساليب الحديثة والمواد المستدامة والاهتمام الدقيق بالتفاصيل.",
      "Personalized Service": "خدمة مخصصة",
      "A dedicated project manager supports you at every step, ensuring complete transparency and satisfaction.":
        "مدير مشروع مخصص يدعمك في كل خطوة، لضمان الشفافية الكاملة والرضا التام.",

      "Our Expertise in Detail": "خبراتنا بالتفصيل",

      "Client Success Stories": "قصص نجاح العملاء",
      "Vision Builders completely transformed our workspace—modern, vibrant, and perfect for our team. Seamless process and stellar results!":
        "قامت فيجن بيلدرز بتحويل مساحة عملنا بالكامل—حديثة، نابضة بالحياة، ومثالية لفريقنا. عملية سلسة ونتائج رائعة!",
      "Sarah Thompson": "سارة طومسون",
      "Project Director, UrbanHabitat Ltd.": "مديرة المشروع، شركة UrbanHabitat",
      "Their team managed our residential renovation with incredible attention to detail and a personal touch at every step.":
        "فريقهم أدار تجديد منزلنا باهتمام مذهل بالتفاصيل ولمسة شخصية في كل خطوة.",
      //   "Emily Davis": "إميلي ديفيس",
      "Homeowner, Mumbai": "مالكة منزل، مومباي",
      "We entrusted Vision Builders with our commercial plaza construction—the experience exceeded all our expectations!":
        "وكلنا فيجن بيلدرز ببناء مجمعنا التجاري—والتجربة فاقت كل توقعاتنا!",
      "John Harris": "جون هاريس",
      "Director, Blue Ocean Realty": "مدير، Blue Ocean Realty",

      "Contact Vision Builders today to schedule a consultation and start your journey to a remarkable space.":
        "اتصل بـ Vision Builders اليوم لتحديد موعد استشارة وبدء رحلتك نحو مساحة مميزة.",

      // --- ResidentialProjects.jsx additional keys ---
      "Landscape Design": "تصميم المناظر الطبيعية",
      "Smart Home Integration": "دمج المنزل الذكي",
      "Home Extensions": "توسعات المنزل",

      "Your browser does not support the video tag.":
        "متصفحك لا يدعم فيديو HTML5.",

      "Discuss your vision and requirements": "ناقش رؤيتك ومتطلباتك",
      "Preliminary feasibility and site assessment":
        "تقييم الجدوى الأولي وتقييم الموقع",
      "Estimate project scope and budget": "تقدير نطاق المشروع والميزانية",
      "Outline next steps and project timeline":
        "تحديد الخطوات التالية والجدول الزمني للمشروع",
      "Follow-up consultation to finalize details":
        "استشارة متابعة لتأكيد التفاصيل",
      "No obligation to proceed with the project":
        "لا يوجد التزام بالاستمرار في المشروع",
      "Architectural design and layout plans": "خطط التصميم المعماري والتوزيع",
      "Interior concept development": "تطوير مفهوم التصميم الداخلي",
      "Permitting assistance and approvals": "المساعدة في التصاريح والموافقات",
      "Regular client design consultations": "استشارات تصميم منتظمة مع العميل",
      "Detailed project timeline": "جدول زمني مفصل للمشروع",
      "Final design package with specifications":
        "حزمة التصميم النهائية مع المواصفات",
      "Complete construction management and execution":
        "إدارة وتنفيذ البناء بالكامل",
      "High-quality materials and craftsmanship":
        "مواد عالية الجودة وحرفية ممتازة",
      "On-site supervision and quality assurance": "إشراف ميداني وضمان الجودة",
      "Post-construction walkthrough and support": "جولة دعم بعد البناء",
      "Full Construction": "بناء كامل",
      "Initial Consultation": "استشارة أولية",
      // Cube Steps
      Brief: "موجز",
      Research: "بحث",
      Sketch: "رسم تخطيطي",
      Design: "تصميم",
      Present: "عرض",
      Revise: "مراجعة",
      "Custom-tailored designs meeting your unique residential needs":
        "تصاميم مخصصة تلبي احتياجاتك السكنية الفريدة",
      "Seamless project management ensuring timely delivery":
        "إدارة مشاريع سلسة تضمن التسليم في الوقت المحدد",
      "Use of sustainable materials and eco-friendly methods":
        "استخدام مواد مستدامة وطرق صديقة للبيئة",
      "Transparent budget handling and cost-effective solutions":
        "إدارة شفافة للميزانية وحلول فعالة من حيث التكلفة",
      "Expert craftsmanship focused on quality and durability":
        "حرفية خبيرة تركز على الجودة والمتانة",
      "Dedicated support through every stage of construction":
        "دعم مخصص في كل مرحلة من مراحل البناء",
    },
  },
  he: {
    translation: {
      adminDashboard: {
        email: "אימייל",
        name: "שם",
        role: "תפקיד",
        time: "שעה",
        date: "תאריך",
        event: "אירוע",
        userLoginActivity: "פעילות התחברות משתמשים",
        totalRegisteredUsers: "סך המשתמשים הרשומים",
        noUserLogins: "אין התחברויות או הרשמות עדיין.",
        signup: "הרשמה",
        login: "התחברות",
        designProposals: "הצעות עיצוב",
        projectsInProgress: "פרויקטים בתהליך",
        pendingApprovals: "אישורים ממתינים",
        delayedProjects: "פרויקטים מעוכבים",
        upcomingHandovers: "מסירות קרובות",
        invoiceClients: [
          "גרין ספייס דבלופרס",
          "אורבן האבטט בע״מ",
          "סקייליין דירות",
          "בלו אושן רילטי",
        ],
        firmProjectOverview: "סקירה כללית של פרויקטי החברה",
        ongoingProjects: "פרויקטים מתמשכים",
        activeProjects: "{{count}} פרויקטים פעילים",
        completedProjects: "{{count}} הושלמו",
        projectsByCountry: "פרויקטים לפי מדינה",
        projectsDeliveredGlobally: "{{count}} פרויקטים סופקו גלובלית",
        recentProjectInvoices: "חשבוניות פרויקטים אחרונות",
        clientName: "שם הלקוח",
        status: "סטטוס",
        paid: "שולם",
        pending: "ממתין",
        unpaid: "לא שולם",
        projectLocations: "מיקומי פרויקטים",
        active: "פעיל",
        nonActive: "לא פעיל",
        totalProjects: "סה״כ פרויקטים",
        completedProjectsLabel: "פרויקטים שהושלמו",
        clientsServed: "לקוחות שקיבלו שירות",
      },

      contact: {
        heroTitle: "צור קשר עם ויז'ן בילדרס",
        heroSubtitle:
          "מוכנים לדון בפרויקט הבנייה או האדריכלות הבא שלכם? פנו אלינו היום כדי להתחיל.",
        reachTitle: "דרכים ליצור קשר איתנו",
        emailTitle: "אימייל",
        phoneTitle: "טלפון",
        whatsappTitle: "וואטסאפ",
        formTitle: "שלחו לנו הודעה",
        form: {
          name: "השם שלך",
          email: "מייל",
          phone: "טלפון",
          message: "הודעה",
          messagePlaceholder: "איך נוכל לעזור בפרויקט שלכם?",
          send: "שלח הודעה",
          success: "ההודעה נשלחה בהצלחה!",
        },
        officesTitle: "המשרדים שלנו",
        phoneLabel: "טלפון",
        mapNote: "(מפה והוראות הגעה זמינות לפי בקשה)",
        locations: [
          {
            city: "מומבאי",
            address: "12 Skyline Lane, Fort, מומבאי 400001",
            phone: "+91-22-5555-1212",
          },
          {
            city: "דלהי",
            address: "220A, רחוב האדריכלים, קונאט פלייס, ניו דלהי 110001",
            phone: "+91-11-4433-2211",
          },
          {
            city: "בנגלורו",
            address: "7 Vision Avenue, אינדירהנאגאר, בנגלורו 560038",
            phone: "+91-80-5577-8899",
          },
        ],
        faqTitle: "שאלות נפוצות",
        faqs: [
          {
            question: "באיזה סוגי פרויקטים בבנייה אתם מתמחים?",
            answer:
              "אנחנו מטפלים בפרויקטים למגורים, מסחריים ותעשייתיים, כולל בנייה חדשה, שיפוצים, עיצוב פנים ותכנון עירוני.",
          },
          {
            question: "כמה זמן לוקח להשלים פרויקט טיפוסי?",
            answer:
              "משך הזמן משתנה לפי היקף וגודל. רוב פרויקטי המגורים מסתיימים תוך 6–12 חודשים, עם עדכונים שוטפים לאורך כל התהליך.",
          },
          {
            question: "האם אתם יכולים לעזור עם אישורים והיתרים?",
            answer:
              "כן, הצוות המומחה שלנו מטפל במסמכים, היתרים ואישורים ממשלתיים לחוויה חלקה וללא טרחה.",
          },
          {
            question: "האם אתם מתכננים וגם בונים?",
            answer:
              "בהחלט! אנו מציעים פתרונות שלמים של תכנון ובנייה, החל מרעיונות אדריכליים ועד לבנייה המוגמרת.",
          },
        ],
      },
      renovationPage: {
        title: "שיפוצים: טיפים חיוניים ושיטות עבודה מומלצות",
        author: "ארכ. סנהה נאיר",
        date: "15 ביולי 2025",
        intro:
          "שיפוץ הבית או המרחב המסחרי שלך יכול להיות מתגמל אך גם מורכב. הבנת האסטרטגיות המרכזיות ושיטות העבודה המומלצות תבטיח הצלחת הפרויקט.",
        scopeTitle: "הבנת היקף השיפוץ",
        scopeText:
          "שיפוצים יכולים לנוע משדרוגים קוסמטיים פשוטים ועד לשינויים מבניים משמעותיים. הגדרת ההיקף בשלב מוקדם תדריך את בחירות העיצוב והתקצוב.",
        challengesTitle: "תכנון אתגרים נפוצים בשיפוצים",
        challenges: [
          {
            title: "מגבלות מבניות:",
            text: "הערכת קירות נושאי עומס ומגבלות יסודות.",
          },
          {
            title: "דרישות היתרים:",
            text: "קבלת היתרים ואישורים מקומיים לפני תחילת העבודה.",
          },
          {
            title: "בחירת חומרים:",
            text: "בחירת חומרים עמידים, בני קיימא ותואמים לתקופה.",
          },
          {
            title: "ניהול לוחות זמנים:",
            text: "תיאום קבלנים ומשלוחים כדי להישאר בהתאם ללוחות הזמנים.",
          },
          {
            title: "שליטה בתקציב:",
            text: "תכנון להוצאות בלתי צפויות ולמקרי חירום.",
          },
        ],
        expertTitle: "תפקיד ההכוונה המקצועית",
        expertText:
          "אדריכלים ומנהלי פרויקטים מנוסים יכולים לחזות בעיות, להמליץ על פתרונות חדשניים ולהבטיח שהשיפוץ ישדרג את הערך ואת איכות החיים.",
        outro:
          "צור קשר עם Vision Builders לקבלת ייעוץ מומחים ושירותי שיפוץ מקצועיים המותאמים לצרכים ולשאיפות שלך.",
      },

      planningResidential: {
        title: "תכנון הפרויקט המגורים שלך: מדריך מקיף",
        author: "אדר' פריה שארמה",
        date: "1 באוגוסט 2025",
        intro1:
          "תכנון מוצלח של פרויקט בנייה למגורים דורש הבנה מעמיקה והכנה קפדנית. הנה מדריך שיעזור לך לנווט בתהליך.",
        intro2:
          "בין אם אתה בונה בית חדש או משפץ חלל קיים, תשומת לב לפרטים בכל שלב מבטיחה שהחזון שלך יתממש בצורה חלקה ובמסגרת התקציב.",
        goalsTitle: "קביעת מטרות ותקציב",
        goalsText:
          "הגדר בבירור את מטרות הפרויקט שלך כולל העדפות עיצוב, צרכים פונקציונליים ומגבלות תקציב כדי להנחות את שלבי התכנון והבנייה.",
        architectsTitle: "עבודה עם אדריכלים ומהנדסים",
        architectsText:
          "שתף פעולה עם אנשי מקצוע כדי לפתח תוכניות מפורטות, חישובים קונסטרוקטיביים ובחירת חומרים מותאמים במיוחד לאתר שלך ולדרישותיך.",
        permitsTitle: "קבלת היתרים ואישורים",
        permitsText:
          "ודא שכל ההיתרים הנדרשים הושגו מהרשויות המקומיות לפני תחילת הבנייה כדי לעמוד בתקנות ולמנוע עיכובים.",
        timelineTitle: "לוח זמנים וניהול פרויקט",
        timelineText:
          "קבע לוחות זמנים ריאליים, עקוב אחרי ההתקדמות באופן קבוע ושמור על תקשורת עם צוות הבנייה כדי להתמודד עם אתגרים ביעילות.",
        tipsTitle: "טיפים לפרויקט חלק",
        tips: [
          "שמור תיעוד מפורט של החלטות ואישורים",
          "תעדף בחירות עיצוב בנות קיימא וחסכוניות באנרגיה",
          "שמור על גמישות להתאמות במהלך הדרך",
          "היעזר במנהל פרויקט או קבלן אמין לפיקוח מקצועי",
        ],
        outro:
          "הצוות המנוסה שלנו ב-Vision Builders מוכן ללוות אותך בכל שלב של תכנון וביצוע פרויקט המגורים שלך. צור קשר לקבלת ייעוץ והכוונה מותאמים אישית.",
      },
      Back: "חזרה",
      modernArchitecture: {
        metaTitle: "תהליך העיצוב האדריכלי המודרני | ויז׳ן בילדרס",
        title: "תהליך העיצוב האדריכלי המודרני",
        author: "אדריכל רהול ורמה",
        date: "24 ביולי 2025",
        intro:
          "הבנת תהליך העיצוב האדריכלי שלב אחר שלב היא המפתח למימוש החזון שלך לחלל פונקציונלי ויפה. מדריך זה מכסה מה לצפות מהרעיון ועד להשלמה.",
        conceptTitle: "פיתוח קונספט",
        conceptText:
          "אנחנו מתחילים בהבנת הצרכים שלך, תנאי האתר והתקציב, כדי ליצור סקיצות ראשוניות וקונספטים המשקפים את החזון שלך ואת יעדי הקיימות.",
        designTitle: "עיצוב ותכנון",
        designText:
          "האדריכלים שלנו משכללים את העיצוב עם שרטוטים מפורטים, מודלים תלת-ממדיים ובחירת חומרים. אנו עובדים בשיתוף פעולה הדוק איתך כדי להבטיח שכל פרט יעמוד בציפיותיך.",
        permitsTitle: "היתרים ואישורים",
        permitsText:
          "הכנת כל המסמכים הנדרשים, תיאום עם הרשויות הרגולטוריות וקבלת היתרי בנייה כדי להבטיח שהפרויקט שלך תואם לחוקים המקומיים ותקני הבטיחות.",
        constructionTitle: "בנייה וניהול",
        constructionText:
          "אנחנו מפקחים על הבנייה, מתאמים עם קבלנים וספקים, מנהלים לוחות זמנים ותקציבים, ומבטיחים בקרת איכות לאורך כל התהליך.",
        finalTitle: "סקירה סופית ומסירה",
        finalText:
          "לאחר ההשלמה, אנו מבצעים בדיקות יסודיות וסיורים כדי לוודא שהפרויקט שלך נמסר בסטנדרטים הגבוהים ביותר ולשביעות רצונך.",
        tipsTitle: "טיפים לפרויקט מוצלח",
        tips: [
          "שמור על תקשורת ברורה וסדירה עם האדריכל והקבלן שלך",
          "היה יוזם לגבי שיקולי תקציב ושינויים אפשריים",
          "תעד החלטות ואישורים בכל שלב",
          "העדף תכונות ברות-קיימא וחסכוניות באנרגיה",
        ],
        outro:
          "הצוות המנוסה שלנו בוויז׳ן בילדרס מחויב להדריך אותך בכל שלב במסע האדריכלי שלך, כדי להבטיח חוויה חלקה, שקופה ומספקת. צור קשר איתנו עוד היום כדי להתחיל לתכנן את פרויקט החלומות שלך.",
      },

      blog: {
        hero: {
          title: "השראה ותובנות בנייה",
          subtitle:
            "חדשות בנייה, מדריכי עיצוב וטיפים ממומחים מצוותנו—לעזור לך ליצור חללים טובים יותר לחיים ולעבודה.",
        },
        posts: [
          {
            title: "מגמות עיצוב 2025: מה מעצב את האדריכלות המודרנית",
            date: "1 באוגוסט 2025",
            excerpt:
              "גלה את החומרים, הפילוסופיות והחידושים הירוקים המשפיעים ביותר בעולם האדריכלות והבנייה השנה...",
            author: "ארכ' פריה שארמה",
          },
          {
            title: "איך לתכנן פרויקט מגורים: מתוכנית לבנייה",
            date: "18 ביולי 2025",
            excerpt:
              "חקור את התהליך המלא לתכנון, עיצוב וביצוע בית חדש. טיפים מאדריכלים ומהנדסי שטח למסירה חלקה של הפרויקט...",
            author: "מהנדס רהול ורמה",
          },
          {
            title: "שיפוץ למען קיימות: גישות מעשיות",
            date: "5 ביולי 2025",
            excerpt:
              "למד כיצד לשלב פרקטיקות ירוקות ויעילות אנרגטית בשיפוצים—ואיך למקסם ערך ונוחות.",
            author: "ארכ' סנהה נאיר",
          },
        ],
        suggestionsTitle: "טיפים לתכנון ובניית פרויקטים",
        suggestions: [
          {
            title: "תכנון הפרויקט שלך",
            description:
              "הגדר מטרות, תקציב ולוח זמנים מוקדם. התייעץ עם אדריכלים לחזון התואם את הצרכים שלך ותנאי האתר.",
          },
          {
            title: "בחירת חומרים בני קיימא",
            description:
              "העדף חומרים חסכוניים באנרגיה, מקומיים ועמידים לאורך זמן להשפעה סביבתית טובה יותר וחיסכון בעלויות.",
          },
          {
            title: "אינטגרציות בית חכם",
            description:
              "שלב את הטכנולוגיות החדשות ביותר—תאורה חכמה, אבטחה ובקרת אקלים—לנוחות ואיכות חיים טובה יותר.",
          },
          {
            title: "ניהול עלויות הפרויקט",
            description:
              "עבוד בצמוד עם הקבלן שלך להערכות עלות שקופות. תכנן למצבי חירום ופקח על ההתקדמות בכל שלב.",
          },
          {
            title: "טיפים להצלחת שיפוץ",
            description:
              "הערך את מצב המבנה הקיים. תכנן שדרוגים בבידוד, תאורה וניצול חלל לתוצאות מיטביות.",
          },
          {
            title: "עבודה עם אדריכלים",
            description:
              "שתף את הרעיונות, ההעדפות והעדיפויות שלך בבירור. שיתוף פעולה קבוע מבטיח את התוצאה הטובה ביותר לחזון שלך.",
          },
        ],
        precautionsTitle: "אמצעי בטיחות בבית ובעבודה",
        precautions: {
          below18Title: "ילדים ובני נוער",
          adultsTitle: "מבוגרים",
          seniorCitizensTitle: "קשישים",
          below18: [
            "יידע הורים או אפוטרופוסים לפני ביצוע שינויים בחדר או בבית.",
            "הימנע מטיפוס על רהיטים או מתקנים לא יציבים.",
            "אל תפעיל כלי עבודה חשמליים או ציוד כבד ללא השגחה.",
            "דע את דרכי היציאה לשעת חירום ועזרה ראשונה בסיסית.",
          ],
          adults: [
            "בדוק הסמכות בעת שכירת קבלנים או נותני שירות.",
            "ודא אוורור נאות במהלך צביעה או שיפוץ.",
            "השג את כל היתרי הבנייה לפני תחילת העבודה.",
            "דון בהיקף, עלויות ולוחות זמנים עם האדריכל שלך בכל שלב.",
          ],
          seniorCitizens: [
            "התקן מעקות ורצפה נגד החלקה היכן שניתן.",
            "ודא שמרחבי המגורים מוארים היטב וללא מכשולים.",
            "שמור אנשי קשר לחירום במקום גלוי ונגיש.",
            "ארגן בדיקות תחזוקה שוטפות לבטיחות המבנה.",
          ],
        },
        facts: {
          ariaLabel: "ידע אדריכלות ובנייה",
          imageAlt: "בניין איקוני",
          title: "בונים את העתיד: האם ידעת?",
          0: "המבנה הגבוה בעולם, בורג' ח'ליפה, מתנשא לגובה 828 מטר ודורש מעל 330,000 מ\"ק בטון!",
          1: "עיצוב בר קיימא יכול להפחית את עלויות התפעול של מבנה עד 50% באמצעות חיסכון באנרגיה ובמים.",
          2: "מודל BIM (Building Information Modeling) מודרני משפר שיתוף פעולה בין אדריכלים, מהנדסים וקבלנים ומפחית טעויות.",
          3: "החומה הסינית הגדולה באורך של מעל 13,000 מייל—הישג הבנייה המרשים ביותר בהיסטוריה!",
        },
        quiz: {
          tryAgain: "נסה שוב",
          resultScore: "קיבלת {{score}} מתוך {{total}}!",
          resultTitle: "תוצאה במבחן",
          title: "בחן את הידע שלך באדריכלות",
          correct: "נכון! כל הכבוד.",
          incorrect: "לא נכון. התשובה הנכונה היא: {{answer}}",
          prev: "הקודם ←",
          next: "הבא →",
          finish: "סיום",
          0: {
            question: "איזה סגנון אדריכלי ידוע בשימוש בזכוכית ופלדה?",
            options: ["א. ברוטליזם", "ב. מודרניזם", "ג. גותי", "ד. בארוק"],
          },
          1: {
            question: "מהו גובה התקרה המינימלי המומלץ לסלון (לפי רוב התקנים)?",
            options: ["א. 2.3מ", "ב. 2.6מ", "ג. 2.9מ", "ד. 3.2מ"],
          },
          2: {
            question: "למה מתייחסת הסמכת LEED בבנייה?",
            options: [
              "א. תקני בטיחות",
              "ב. ניהול פרויקטים",
              "ג. בנייה ירוקה",
              "ד. אישורים משפטיים",
            ],
          },
          3: {
            question: "איזה כלי חיוני למדידות שטח?",
            options: ["א. פטיש", "ב. כף", "ג. סרט מדידה", "ד. פלס"],
          },
          4: {
            question: "הקנטילבר מתואר בצורה הטובה ביותר כ:",
            options: [
              "א. סוג של צבע",
              "ב. מבנה בולט הנתמך רק בקצה אחד",
              "ג. תערובת בטון",
              "ד. סוג של רעף גג",
            ],
          },
        },
        readMoreAria: "קרא עוד על {{title}}",
      },
      renovation: {
        hero: {
          title: "שיפוץ ושחזור",
          subtitle:
            "שדרג את החלל שלך עם שירותי השיפוץ והשחזור המומחים שלנו. אנו מחיים מבנים ישנים ומבטיחים איכות, סגנון ופונקציונליות.",
        },
        benefitsTitle: "יתרונות עיקריים",
        benefitsSubtitle: "מדוע לבחור בשירותי השיפוץ והשחזור שלנו?",
        benefits: [
          "מומחיות: לצוות שלנו יש עשרות שנות ניסיון בהמרת חללים.",
          "חומרים איכותיים: אנו משתמשים רק בחומרים האיכותיים ביותר לתוצאות ארוכות טווח.",
          "התאמה אישית: כל פרויקט מותאם לצרכים הייחודיים שלך.",
          "עמידה בזמנים: אנו מכבדים את זמנך ומספקים בזמן.",
          "קיימות: פתרונות ידידותיים לסביבה למען מחר טוב יותר.",
          "ערך: הגדלת הערך והנוחות של הנכס שלך.",
        ],
        visionTitle: "החזון שלנו",
        visionSubtitle:
          "להחיות חללים עם פתרונות חדשניים ומלאכת מחשבת ללא תחרות.",
        servicesTitle: "השירותים שלנו",
        services: [
          {
            title: "שיפוץ בית",
            description: "שדרוג מלא למטבחים, חדרי אמבטיה, סלונים ועוד.",
          },
          {
            title: "שחזור מסחרי",
            description: "החייאת משרדים, חנויות ומבנים מסחריים.",
          },
          {
            title: "שימור היסטורי",
            description: "שחזור ושימור הקסם של נכסי מורשת.",
          },
          {
            title: "תיקונים מבניים",
            description: "טיפול בבעיות יסוד ומבניות במומחיות.",
          },
          {
            title: "שדרוגים פנימיים",
            description: "מודרניזציה של פנים עם עיצובים וגימורים חדשים.",
          },
          {
            title: "חידוש חזיתות",
            description: "שיפור המראה החיצוני עם שיפוץ חזיתות ועיצוב נוף.",
          },
        ],
        processTitle: "איך זה עובד",
        processSubtitle:
          "התהליך הפשוט שלנו מבטיח חוויה נטולת דאגות מהתחלה ועד הסוף.",
        process: [
          "ייעוץ והערכה",
          "תכנון ועיצוב",
          "תקצוב והצעה",
          "בחירת חומרים",
          "ביצוע ופיקוח",
          "בדיקות איכות",
          "מסירת פרויקט",
        ],
        cubes: ["ייעוץ", "עיצוב", "תקציב", "בחירה", "בנייה", "מסירה"],
        featuresTitle: "למה לבחור בנו?",
        featuresSubtitle: "הגישה הייחודית שלנו מבדילה אותנו.",
        features: [
          "תמחור שקוף",
          "אנשי מקצוע מיומנים",
          "שירותים מקיפים",
          "שביעות רצון לקוחות",
        ],
        featuresDesc: [
          "אנו מספקים תמחור ברור מראש ללא עלויות נסתרות.",
          "הצוות שלנו מורכב מאנשי מקצוע מוסמכים ובעלי ניסיון.",
          "מהתכנון ועד הביצוע – אנו מטפלים בכל היבט של הפרויקט שלך.",
          "שביעות רצונך היא בראש סדר העדיפויות שלנו ואנו מספקים תוצאות שעולות על הציפיות.",
        ],
        featuresCardText: "יתרון: {{feature}}",
        pricingTitle: "תוכניות תמחור גמישות",
        pricingSubtitle: "בחר תוכנית שמתאימה לצרכים ולתקציב שלך.",
        pricing: [
          {
            title: "רענון בסיסי",
            price: "$2,500",
            priceNote: " / לחדר",
            features: [
              "תיקוני שטח",
              "צביעה וגימורים",
              "שדרוגים קטנים לאביזרים",
              "כולל ניקיון",
              "אחריות לשנה אחת",
            ],
            buttonText: "הזמן ייעוץ",
          },
          {
            title: "שיפוץ סטנדרטי",
            price: "$7,500",
            priceNote: " / לאזור",
            features: [
              "כולל את כל היתרונות של הבסיסי",
              "שינויים בפריסה",
              "אינסטלציה וחשמל",
              "נגרות מותאמת אישית",
              "אחריות לשנתיים",
            ],
            buttonText: "צור קשר",
            badge: "הכי פופולרי",
          },
          {
            title: "שחזור פרימיום",
            price: "מותאם אישית",
            priceNote: "",
            features: [
              "כולל את כל יתרונות הסטנדרט",
              "שחזור מורשת",
              "תיקונים מבניים",
              "חומרים יוקרתיים",
              "ניהול פרויקט מלא",
              "עיצוב נוף",
              "אחריות ל-5 שנים",
            ],
            buttonText: "התחל עכשיו",
          },
        ],
      },
      urbanPlanning: {
        hero: {
          title: "תכנון עירוני",
          subtitle: "עיצוב עתיד הקהילות באמצעות תכנון אסטרטגי וצמיחה בת-קיימא.",
        },
        benefitsTitle: "יתרונות מרכזיים",
        benefitsSubtitle:
          "קידום התקדמות עם פתרונות תכנון עירוני חדשניים וממוקדי קהילה.",
        benefits: [
          "עיצוב קהילות כולל ובנות קיימא",
          "שימוש אופטימלי בקרקע וניהול משאבים",
          "שיפור המרחבים הציבוריים ואיכות החיים",
          "תכנון אסטרטגי כלכלי ותשתיתי",
          "ניווט יעיל במערכות רגולטוריות והיתרים",
          "מעורבות כוללת של בעלי עניין והקהילה",
        ],
        visionTitle: "החזון שלך. התוכנית שלנו.",
        visionSubtitle:
          "הפיכת רעיונות למציאות באמצעות תכנון עירוני ואזורי חדשני.",
        servicesTitle: "שירותי תכנון עירוני",
        services: [
          {
            title: "תכנון אב ותכנון אזורי",
            description:
              "פיתוח תוכניות אב מקיפות וניהול תקנות תכנון לעיצוב הצמיחה העתידית.",
          },
          {
            title: "פיתוח בר-קיימא",
            description:
              "שילוב תשתיות ירוקות, יעילות אנרגטית ועיצוב עמיד בפרויקטים.",
          },
          {
            title: "מעורבות קהילה ובעלי עניין",
            description:
              "הנחיית סדנאות ציבוריות ודיונים לבניית קונצנזוס ותמיכה.",
          },
          {
            title: "שימושי קרקע ובדיקות היתכנות",
            description:
              "ניתוח פוטנציאל האתר ומגמות השוק להבטחת פרויקטים עירוניים מוצלחים.",
          },
          {
            title: "פיתוח מוכוון תחבורה (TOD)",
            description:
              "יצירת קהילות תוססות ונגישות סביב מוקדי תחבורה ציבורית להפחתת עומסי תנועה וחיזוק הקישוריות.",
          },
          {
            title: "התחדשות עירונית",
            description:
              "הפיכת אזורים לא מנוצלים או מוזנחים למרכזים עירוניים תוססים ומשגשגים.",
          },
        ],
        processTitle: "התהליך שלנו",
        processSubtitle: "גישה שיתופית ומקיפה",
        process: [
          "התחלה עם מפגש חזון לפרויקט.",
          "ביצוע ניתוח אתר וקהילה.",
          "פיתוח אפשרויות תכנון אסטרטגיות.",
          "ניהול אישורים רגולטוריים והיתרים.",
          "יישום תכנון ושלבי פרויקט.",
          "מתן תמיכה והערכה לאחר סיום הפרויקט.",
        ],
        cubes: ["חזון", "ניתוח", "אסטרטגיה", "אישורים", "שלבים", "תמיכה"],
        featuresTitle: "מאפייני הפרויקטים שלנו",
        featuresSubtitle:
          "מתן כוח לפרויקט שלך באמצעות טכנולוגיות חדשניות ותובנות מתקדמות.",
        featuresDesc: [
          "תהליך התכנון שלנו מבוסס על ניתוח מונחה נתונים ושיתוף פעולה קהילתי עם כלים מתקדמים לדמיון תרחישים וחיזוי תוצאות.",
          "אנו מאמינים שפרויקטים מוצלחים נולדים מדיאלוג כוללני. הפלטפורמות הדיגיטליות שלנו מקלות על איסוף ושילוב משוב קהילתי.",
          "מהרעיון הראשוני ועד לאישור הסופי, אנו מספקים מעקב שקוף על ההתקדמות להבטחת תהליך חלק וניתן לחיזוי.",
          "אנו מסייעים בניווט במורכבות ההיתרים והציות הרגולטורי עם הנחיות ברורות ותמיכה מקצועית למניעת עיכובים.",
        ],
        features: [
          "אנליטיקה עירונית מונחית נתונים",
          "הדמיית עיר תלת-ממדית אינטראקטיבית",
          "פורטל משוב קהילתי",
          "מעקב אחר אישורים רגולטוריים",
        ],
        featuresCardText: "קבלו יתרון מ{{feature}} כלקוח מוערך.",
        pricingTitle: "התחל את הפרויקט העירוני שלך",
        pricingSubtitle: "מאתר יחיד ועד קהילה מתוכננת, יש לנו פתרון עבורך.",
        pricing: [
          {
            title: "ייעוץ לפרויקט",
            price: "₪2,500",
            priceNote: "/שלב התחלתי",
            features: [
              "פגישת ייעוץ יחידה",
              "הערכת היתכנות ראשונית ובדיקת שימושי קרקע",
              "המלצות מעשיות לפתיחת הפרויקט",
              "דוח סיכום מנהלים ושלבים הבאים",
              'תמיכת מעקב בדוא"ל',
            ],
            buttonText: "קבע פגישה",
          },
          {
            title: "פיתוח סטנדרטי",
            price: "בהצעת מחיר",
            priceNote: "/פרויקט",
            features: [
              "כולל את כל מאפייני הייעוץ לפרויקט",
              "תכנון ועיצוב אב מקיף",
              "תמיכה מלאה ברגולציה ובהיתרים",
              "אסטרטגיית מעורבות בעלי עניין והנחיה",
            ],
            buttonText: "בקש הצעת מחיר",
            badge: "הכי פופולרי",
          },
          {
            title: "שותפות עירונית",
            price: "בהצעת מחיר",
            priceNote: "/לטווח ארוך",
            features: [
              "שירותי תכנון עירוני מלאים",
              "מעקב ותמיכה לאחר ביצוע",
              "מנהל פרויקט ייעודי וצוות מקצועי",
              "שותפות אסטרטגית למספר פרויקטים",
              "פתרונות מותאמים לאתגרים עירוניים מורכבים",
            ],
            buttonText: "התחל עכשיו",
          },
        ],
      },

      "interior.heroTitle": "עיצוב פנים",
      "interior.heroSubtitle": "יוצרים חללים שהם גם יפים וגם נוחים למגורים.",
      "interior.benefitsTitle": "הפילוסופיה שלנו בעיצוב",
      "interior.benefitsSubtitle":
        "גישה שיתופית ליצירת סביבות פונקציונליות ומעוררות השראה.",
      "interior.benefit1": "חללים מותאמים אישית המשקפים את הסגנון הייחודי שלך",
      "interior.benefit2": "שימוש מיטבי בשטח, אור וצבע",
      "interior.benefit3": "ניהול פרויקט חלק מהרעיון ועד לביצוע",
      "interior.benefit4": "גישה לחומרים בלעדיים וריהוט בהתאמה אישית",
      "interior.benefit5": "תהליך נטול לחץ עם ליווי מקצועי",
      "interior.benefit6": "הגדלת ערך הנכס והאטרקטיביות בשוק",
      "interior.benefitsImageTitle": "מעצבים את חלל החלומות שלך.",
      "interior.benefitsImageSubtitle":
        "אנחנו מאמינים שעיצוב פנים טוב הוא השתקפות של דייריו.",
      "interior.servicesTitle": "שירותי עיצוב הפנים שלנו",
      "interior.service1.title": "עיצוב פנים למגורים",
      "interior.service1.desc":
        "הפיכת בתים לחללים פונקציונליים ויפים, מותאמים לסגנון החיים שלך.",
      "interior.service2.title": "תכנון חללים מסחריים",
      "interior.service2.desc":
        "יצירת סביבות מעוררות השראה ויעילות עבור משרדים, חנויות ותחום האירוח.",
      "interior.service3.title": "הדמיה תלת ממדית וסיורים וירטואליים",
      "interior.service3.desc":
        "החייאת העיצוב שלך באמצעות מודלים תלת־ממדיים באיכות גבוהה וסיורים אינטראקטיביים.",
      "interior.service4.title": "ייעוץ צבע וסטיילינג",
      "interior.service4.desc":
        "ייעוץ מקצועי בבחירת פלטות צבעים, ריהוט ועיצוב כדי ליצור הרמוניה בחלל שלך.",
      "interior.service5.title": "שיפוץ ועיצוב מחדש",
      "interior.service5.desc":
        "ניהול מלא של פרויקטים למגורים ומסחר מהתחלה ועד הסוף.",
      "interior.service6.title": "חבילות E-Design",
      "interior.service6.desc":
        "שירות וירטואלי גמיש ובמחיר נגיש למי שרוצה תוכנית עיצוב מקצועית לביצוע עצמאי.",
      "interior.processTitle": "תהליך העיצוב שלנו",
      "interior.processSubtitle": "מקנבס ריק ליצירת מופת.",
      "interior.processStep1": "פגישת ייעוץ ראשונית והגדרת דרישות.",
      "interior.processStep2": "קונספט מעמיק ויצירת לוחות השראה.",
      "interior.processStep3": "תכנון חללים והדמיה תלת־ממדית.",
      "interior.processStep4": "בחירת חומרים, ריהוט ואביזרים.",
      "interior.processStep5": "ביצוע, התקנה וסטיילינג.",
      "interior.processStep6": "בדיקה סופית ומסירה ללקוח.",
      "interior.cube1": "המצאה",
      "interior.cube2": "תכנון",
      "interior.cube3": "הדמיה",
      "interior.cube4": "בחירה",
      "interior.cube5": "התקנה",
      "interior.cube6": "סטיילינג",
      "interior.featuresTitle": "הגישה שלנו ממוקדת בלקוח",
      "interior.featuresSubtitle": "מספקים חווית עיצוב יפה ונטולת מתח.",
      "interior.featuresPara1":
        "אנחנו מאמינים שהעיצובים הטובים ביותר מגיעים משיתוף פעולה הדוק, מהרישום הראשון ועד הסגנון הסופי.",
      "interior.featuresPara2":
        "הצוות שלנו מנהל כל פרט בפרויקט, כולל תיאום ספקים ואספקת חומרים.",
      "interior.featuresPara3":
        "קבל עדכונים שוטפים וגישה לפורטל הדיגיטלי המאובטח שלנו כדי לבדוק תוכניות והתקדמות בכל עת.",
      "interior.featuresPara4":
        "אנחנו מעניקים שקט נפשי לאורך כל התהליך, והופכים את מסע העיצוב שלך למהנה ופשוט.",
      "interior.feature1": "קונספטים והדמיות מותאמות אישית",
      "interior.feature2": "רשימה נבחרת של ריהוט וחומרים",
      "interior.feature3": "מנהל פרויקט ייעודי לעדכונים בזמן אמת",
      "interior.feature4": "תמיכה וייעוץ לאחר סיום הפרויקט",
      "interior.featureBenefit": "היתרון ב-{{feature}} כלקוח עיצוב פנים.",
      "interior.pricingTitle": "עצב את חלל החלומות שלך",
      "interior.pricingSubtitle":
        "בחר את החבילה המושלמת לשדרוג הבית או המשרד שלך.",
      "interior.pricing1.title": "חבילת E-Design",
      "interior.pricing1.priceNote": "/חדר",
      "interior.pricing1.feature1": "לוח עיצוב דיגיטלי מותאם אישית",
      "interior.pricing1.feature2": "רשימת מוצרים לחיצה",
      "interior.pricing1.feature3": "תוכנית רצפה עם פריסת ריהוט",
      "interior.pricing1.feature4": "כולל סבב תיקונים אחד",
      "interior.pricing1.feature5": "תמיכה במייל ליישום",
      "interior.pricing1.feature6": "אפשרות לייעוץ וירטואלי",
      "interior.pricing1.button": "קבע ייעוץ",
      "interior.pricing2.title": "עיצוב מלא",
      "interior.pricing2.priceNote": "/חדר",
      "interior.pricing2.feature1": "כל שירותי ה-E-Design",
      "interior.pricing2.feature2": "ביקור באתר",
      // --- IndustrialFacilities.jsx keys ---
      "Industrial Facilities": "מתקנים תעשייתיים",
      "End-to-end facility support for all stages of development growth.":
        "תמיכה כוללת במתקנים בכל שלבי ההתפתחות והצמיחה.",
      "Comprehensive support for industrial facility planning and operations":
        "תמיכה מקיפה בתכנון ותפעול מתקנים תעשייתיים",
      "Detailed contract review and drafting for industrial projects":
        "סקירה וכתיבת חוזים מפורטת לפרויקטים תעשייתיים",
      "Expert guidance on plant expansions, mergers, and restructuring":
        "הכוונה מקצועית להרחבות מפעלים, מיזוגים והתארגנות מחדש",
      "Compliance and safety advice for industrial regulations":
        "ייעוץ לעמידה בתקנות תעשייתיות ובטיחות",
      "Risk management for facility managers and stakeholders":
        "ניהול סיכונים למנהלי מתקנים ובעלי עניין",
      "Proactive representation in regulatory and industrial disputes":
        "ייצוג יזום בסכסוכים רגולטוריים ותעשייתיים",
      "Industrial Facility Planning": "תכנון מתקנים תעשייתיים",
      "Strategic guidance for designing, expanding, and structuring industrial plants and complexes":
        "הכוונה אסטרטגית לתכנון, הרחבה ומבנה של מפעלים ומתחמים תעשייתיים",
      "Industrial Contracts & Agreements": "חוזים והסכמים תעשייתיים",
      "Drafting, negotiation, and review of contracts for construction, equipment, and operations":
        "כתיבה, משא ומתן ובדיקה של חוזים לבנייה, ציוד ותפעול",
      "Plant Expansions & Mergers": "הרחבות ומיזוגי מפעלים",
      "Legal due diligence, transaction structuring, and regulatory filings for industrial mergers and expansions":
        "בדיקות נאותות משפטיות, מבנה עסקאות ודיווחים רגולטוריים למיזוגים והרחבות תעשייתיים",
      "Regulatory & Safety Compliance": "עמידה ברגולציה ובטיחות",
      "Advice on industrial regulations, safety standards, and ongoing compliance audits":
        "ייעוץ בתקנות תעשייתיות, תקני בטיחות וביקורות עמידה שוטפות",
      "Facility Disputes & Resolution": "סכסוכי מתקנים ופתרונם",
      "Expert representation and mediation in industrial and facility-related disputes":
        "ייצוג ומומחיות בגישור בסכסוכים תעשייתיים ומתקניים",
      "Industrial Governance": "ממשל תעשייתי",
      "Advisory on facility management, risk mitigation, and compliance with industrial standards":
        "ייעוץ בניהול מתקנים, הפחתת סיכונים ועמידה בסטנדרטים תעשייתיים",
      "Direct access to industrial facility specialists":
        "גישה ישירה למומחי מתקנים תעשייתיים",
      "Timely review of industrial documents and contracts":
        "סקירה מהירה של מסמכים וחוזים תעשייתיים",
      "Custom safety and compliance checklists":
        "רשימות בדיקה מותאמות לבטיחות ועמידה ברגולציה",
      "On-demand updates via our facility portal":
        "עדכונים לפי דרישה דרך פורטל המתקנים שלנו",
      "Project Evaluation": "הערכת פרויקט",
      "Initial consultation with an engineer": "פגישת ייעוץ ראשונית עם מהנדס",
      "Review of facility schematics (up to 20 pages)":
        "סקירת שרטוטי מתקן (עד 20 עמודים)",
      "Initial feasibility study & options": "בדיקת היתכנות ראשונית ואפשרויות",
      "Technical recommendations": "המלצות טכניות",
      "Follow-up email support": "תמיכה במייל לאחר הפגישה",
      "Maintenance & Support": "תחזוקה ותמיכה",
      "All Project Evaluation services": "כל שירותי הערכת הפרויקט",
      "Scheduled preventative maintenance": "תחזוקה מונעת מתוזמנת",
      "24/7 emergency response & support": "תגובה ותמיכה חירום 24/7",
      "Equipment calibration & performance audits": "כיול ציוד ובדיקות ביצועים",
      "Turnkey Solution": "פתרון כולל",
      "End-to-end management for new builds or upgrades":
        "ניהול מקצה לקצה לבנייה חדשה או שדרוגים",
      "Custom design and engineering": "עיצוב והנדסה מותאמים אישית",
      "On-site team & priority project management":
        "צוות בשטח וניהול פרויקטים בעדיפות גבוהה",
      "Regular progress reports & strategy calls":
        "דוחות התקדמות שוטפים ושיחות אסטרטגיה",
      "MOST POPULAR": "הכי פופולרי",
      "Key Advantages": "יתרונות עיקריים",
      "Mediation, arbitration, or litigation to resolve conflicts effectively":
        "גישור, בוררות או ליטיגציה לפתרון סכסוכים ביעילות",
      "Arbitration and Litigation.": "בוררות וליטיגציה.",
      "Get compassionate, effective solutions for even the most delicate matters.":
        "קבלו פתרונות יעילים ואנושיים גם לנושאים הרגישים ביותר.",
      "Industrial Services": "שירותים תעשייתיים",
      "HOW WE WORK": "איך אנחנו עובדים",
      "Our residential project process": "תהליך הפרויקט שלנו",
      "Personalized consultation and vision assessment.":
        "פגישת ייעוץ מותאמת והערכת חזון.",
      "Site analysis and feasibility planning.": "ניתוח אתר ותכנון היתכנות.",
      "Custom architectural design development.": "פיתוח עיצוב אדריכלי מותאם.",
      "Permitting and regulatory compliance management.":
        "ניהול היתרים ועמידה ברגולציה.",
      "Construction and quality assurance.": "בנייה ובקרת איכות.",
      "Regular updates and collaborative client feedback.":
        "עדכונים שוטפים ומשוב שיתופי מהלקוח.",
      "Final walkthrough and post-completion support.":
        "סיור סופי ותמיכה לאחר סיום.",
      "Why Choose Us for Industrial Facility Services":
        "למה לבחור בנו לשירותי מתקנים תעשייתיים",
      "Enhancing industrial spaces with reliable renovation and restoration solutions.":
        "שדרוג חללים תעשייתיים עם פתרונות שיפוץ ושיקום אמינים.",
      "Expertise in Industrial Renovation:": "מומחיות בשיפוץ תעשייתי:",
      "Our team has extensive experience in upgrading warehouses, factories, and production plants to meet modern safety and operational standards.":
        "לצוות שלנו ניסיון רב בשדרוג מחסנים, מפעלים ומתקני ייצור לעמידה בתקני בטיחות ותפעול מודרניים.",
      "Comprehensive Maintenance & Compliance:":
        "תחזוקה ועמידה בסטנדרטים מקיפים:",
      "We ensure your facilities remain compliant with industry regulations through preventive maintenance, structural inspections, and energy-efficient upgrades.":
        "אנו דואגים שמתקניך יעמדו בתקנות באמצעות תחזוקה מונעת, בדיקות מבנה ושדרוגים חסכוניים באנרגיה.",
      "Customized Restoration Solutions:": "פתרונות שיקום מותאמים:",
      "Whether repairing structural elements, modernizing layouts, or restoring heritage industrial sites, we deliver tailored solutions that enhance functionality and extend asset life.":
        "בין אם מדובר בתיקון מבני, מודרניזציה של חללים או שיקום אתרים תעשייתיים היסטוריים—אנו מספקים פתרונות מותאמים המשפרים תפקוד ומאריכים חיי נכס.",
      "Benefit from {{feature}} as our corporate client.":
        "הפיקו תועלת מ-{{feature}} כלקוח עסקי שלנו.",
      "Secure Your Corporate Advantage": "הבטח את היתרון העסקי שלך",
      "Build and grow your company with expert legal partners by your side.":
        "בנה וצמח עם שותפים משפטיים מומחים לצידך.",
      // --- CommercialComplexes.jsx keys ---
      Plan: "תוכנית",
      Deliver: "מסירה",
      "Our commercial project process": "תהליך הפרויקט המסחרי שלנו",
      project: "פרויקט",
      month: "חודש",
      session: "שיעור",
      Build: "בנייה",
      "Full Project": "פרויקט מלא",

      "Smartly designed and expertly executed commercial complexes to help businesses thrive.":
        "מתחמים מסחריים מתוכננים ומבוצעים במקצועיות כדי לסייע לעסקים לשגשג.",
      "Expert planning and design tailored to commercial needs":
        "תכנון ועיצוב מקצועי המותאם לצרכים מסחריים",
      "Efficient use of space to maximize functionality and appeal":
        "שימוש יעיל במרחב למקסום פונקציונליות ומשיכה",
      "Compliance with modern safety and regulatory standards":
        "עמידה בתקני בטיחות ורגולציה מודרניים",
      "Sustainable and energy-efficient construction methods":
        "שיטות בנייה בנות קיימא וחסכוניות באנרגיה",
      "High-quality materials ensuring durability and aesthetics":
        "חומרים איכותיים להבטחת עמידות ואסתטיקה",
      "Timely delivery with strict project management practices":
        "מסירה בזמן עם ניהול פרויקטים קפדני",
      "Your Vision. Our Blueprint.": "החזון שלך. התכנית שלנו.",
      "We create commercial spaces that balance design, functionality, and growth potential.":
        "אנו יוצרים חללים מסחריים המאזנים בין עיצוב, פונקציונליות ופוטנציאל צמיחה.",
      "Design & Architecture": "עיצוב ואדריכלות",
      "Innovative architectural designs tailored for retail, office, and mixed-use commercial complexes.":
        "עיצובים אדריכליים חדשניים המותאמים למתחמי מסחר, משרדים ושימושים מעורבים.",
      "Structural Engineering": "הנדסה מבנית",
      "Safe and robust structures ensuring long-term reliability and compliance with all codes.":
        "מבנים בטוחים ועמידים להבטחת אמינות ארוכת טווח ועמידה בכל התקנים.",
      "Construction Management": "ניהול בנייה",
      "End-to-end project management ensuring efficiency, cost-effectiveness, and timely delivery.":
        "ניהול פרויקטים מקצה לקצה להבטחת יעילות, חיסכון ומסירה בזמן.",
      "Interior Fit-outs": "גמרים פנימיים",
      "Customized interiors designed for functionality, branding, and modern aesthetics.":
        "עיצוב פנים מותאם לפונקציונליות, מיתוג ואסתטיקה מודרנית.",
      "Sustainability Solutions": "פתרונות קיימות",
      "Eco-friendly practices including energy-efficient systems, water management, and green materials.":
        "שיטות ידידותיות לסביבה כולל מערכות חסכוניות באנרגיה, ניהול מים וחומרים ירוקים.",

      "Post-construction support including regular inspections, upgrades, and maintenance services.":
        "תמיכה לאחר בנייה כולל בדיקות שוטפות, שדרוגים ושירותי תחזוקה.",
      Consultation: "ייעוץ",
      "One-on-one consultation with our commercial expert":
        "ייעוץ אישי עם המומחה המסחרי שלנו",
      "Site feasibility analysis": "ניתוח היתכנות אתר",
      "Initial concept design discussion": "דיון בתכנון קונספט ראשוני",
      "Budget estimation and project scope outline":
        "הערכת תקציב והגדרת היקף הפרויקט",
      "Complete architectural design & planning": "תכנון ועיצוב אדריכלי מלא",
      "Structural, MEP engineering & maintenance":
        "הנדסה מבנית, מערכות ומיזוג ותחזוקה",
      "Project execution & supervision": "ביצוע הפרויקט ופיקוח",
      "Timely handover of commercial complex": "מסירה בזמן של המתחם המסחרי",
      "Structural assessment of existing buildings": "הערכת מבנים קיימים",
      "Redesign for modern layouts": "עיצוב מחדש לתצורות מודרניות",
      "Expansion and retrofitting services": "שירותי הרחבה ושדרוג",
      "Updated interiors and sustainable upgrades":
        "עיצוב פנים מעודכן ושדרוגים בני קיימא",
      "Compliance with current regulations and standards":
        "עמידה בתקנות וסטנדרטים עדכניים",
      "Build Your Commercial Complex With Confidence":
        "בנה את המתחם המסחרי שלך בביטחון",
      "Get expert planning, reliable execution, and peace of mind for your commercial project—with us.":
        "קבל תכנון מקצועי, ביצוע אמין ושקט נפשי לפרויקט המסחרי שלך—איתנו.",
      "Commercial Complex Features": "מאפייני מתחם מסחרי",
      "Designed for efficiency, safety, and business success.":
        "מעוצב ליעילות, בטיחות והצלחה עסקית.",
      "We deliver innovative solutions for commercial complexes, ensuring compliance, safety, and optimal business environments.":
        "אנו מספקים פתרונות חדשניים למתחמים מסחריים, תוך עמידה בתקנות, בטיחות וסביבת עסקים מיטבית.",
      "You can monitor project progress, access building plans, and receive updates online, or contact us for tailored business support.":
        "ניתן לעקוב אחר התקדמות הפרויקט, לגשת לתוכניות ולקבל עדכונים אונליין, או ליצור קשר לתמיכה עסקית מותאמת.",
      "Our team is available for urgent site visits, regulatory approvals, and last-minute business requirements.":
        "הצוות שלנו זמין לביקורים דחופים, אישורים רגולטוריים ודרישות עסקיות דחופות.",
      "Every inquiry is addressed with professionalism, speed, and clarity.":
        "כל פנייה מטופלת במקצועיות, במהירות ובבהירות.",
      "Direct collaboration with architects and engineers":
        "שיתוף פעולה ישיר עם אדריכלים ומהנדסים",
      "Transparent progress tracking and reports": "מעקב שקוף ודוחות התקדמות",
      "Custom design layouts for varied business types":
        "עיצובים מותאמים לסוגי עסקים שונים",
      "On-demand project updates and client walkthroughs":
        "עדכוני פרויקט וסיורים ללקוח לפי דרישה",
      "Benefit from {{feature}} as our civil client.":
        "הפק תועלת מ-{{feature}} כלקוח אזרחי שלנו.",
      "Renovation & Expansion": "שיפוץ והרחבה",
      "Book Consult": "קבע ייעוץ",
      "Start Now": "התחל עכשיו",
      "Initial consultation and requirement analysis.":
        "ייעוץ ראשוני וניתוח דרישות.",
      "Site survey and feasibility study.": "סקר אתר ובדיקת היתכנות.",
      "Conceptual and architectural design creation.":
        "יצירת תכנון קונספטואלי ואדריכלי.",
      "Regulatory approvals and compliance handling.":
        "טיפול באישורים רגולטוריים ועמידה בדרישות.",
      "Efficient construction with quality monitoring.":
        "בנייה יעילה עם בקרה על איכות.",
      "Transparent client updates and review meetings.":
        "עדכונים שקופים ופגישות סקירה עם הלקוח.",
      "Final handover and post-completion support.":
        "מסירה סופית ותמיכה לאחר סיום.",

      // --- Fallbacks for missing keys (auto-filled from English) ---
      "Design & Planning": "תכנון ועיצוב",
      "Regular project status updates": "עדכונים שוטפים על מצב הפרויקט",
      "Personalized communication with your project manager":
        "תקשורת אישית עם מנהל הפרויקט שלך",
      "Access to design reviews and materials through our client portal":
        "גישה לסקירות עיצוב וחומרים דרך פורטל הלקוחות שלנו",
      "Focus on client satisfaction and finishing details":
        "התמקדות בשביעות רצון הלקוח ובפרטי הגימור",
      "We treat every project with precision, care, and personal attention.":
        "אנו מטפלים בכל פרויקט בדיוק, במסירות ובתשומת לב אישית.",
      "Access to resources and expert consultants throughout your project.":
        "גישה למשאבים ויועצים מומחים לאורך כל הפרויקט שלך.",
      "Client portal provides 24/7 access to design and construction updates.":
        "פורטל הלקוחות מספק גישה 24/7 לעדכוני עיצוב ובנייה.",
      "Expect reliability, transparency, and constant communication at every stage.":
        "צפה לאמינות, שקיפות ותקשורת רציפה בכל שלב.",
      "Benefit from this as our client.": "הרווח מזה כלקוח שלנו.",

      "From cozy single-family homes to expansive luxury estates, creating living spaces that inspire and endure.":
        "מבתי משפחה נעימים ועד אחוזות יוקרה רחבות, אנו יוצרים חללי מגורים שמעוררים השראה ונשארים לאורך זמן.",
      "Crafting interiors that harmonize beauty and functionality to make every house a home.":
        "מעצבים חללים פנימיים המשלבים יופי ופונקציונליות כדי להפוך כל בית לבית חמים.",
      "Enhancing and preserving your current home with thoughtful upgrades and restorations.":
        "משדרגים ומשמרים את ביתך הנוכחי עם חידושים ושיפוצים מחושבים.",
      "Transforming outdoor spaces into beautiful, functional environments tailored to your lifestyle.":
        "משנים את החללים החיצוניים לסביבות יפות ופונקציונליות המותאמות לאורח חייך.",
      "Upgrading homes with the latest smart technologies for convenience, security, and energy efficiency.":
        "משדרגים בתים עם הטכנולוגיות החכמות החדישות ביותר לנוחות, אבטחה ויעילות אנרגטית.",
      "Expanding your living space with seamless additions that blend perfectly with your existing home.":
        "מרחיבים את חלל המגורים שלך עם תוספות הרמוניות המשתלבות בצורה מושלמת עם הבית הקיים.",
      "Residential Projects Experts": "מומחים לפרויקטים למגורים",
      "Building homes that reflect your vision and lifestyle.":
        "בונים בתים המשקפים את החזון ואורח החיים שלך.",
      "Why Choose Our Residential Services": "למה לבחור בשירותי המגורים שלנו",
      "Trusted partner delivering personalized and quality residential constructions.":
        "שותף אמין המספק בנייה למגורים מותאמת אישית ואיכותית.",
      "Our Residential Services": "שירותי המגורים שלנו",
      "Explore our full range of residential solutions.":
        "גלה את כל מגוון הפתרונות למגורים שלנו.",

      "Our Client Features": "המאפיינים של הלקוחות שלנו",
      "Always putting your project’s success first.":
        "תמיד שמים את הצלחת הפרויקט שלך במקום הראשון.",
      "Secure Peace of Mind for Your Project": "הבטח שקט נפשי עבור הפרויקט שלך",
      "Find clarity, support, and expert solutions—every step of the way.":
        "מצא בהירות, תמיכה ופתרונות מקצועיים בכל שלב בדרך.",
      "Custom-tailored designs meeting your unique residential needs":
        "עיצובים מותאמים אישית המותאמים לצרכים הייחודיים שלך בבית",
      "Seamless project management ensuring timely delivery":
        "ניהול פרויקטים חלק המבטיח מסירה בזמן",
      "Use of sustainable materials and eco-friendly methods":
        "שימוש בחומרים בני קיימא ובשיטות ידידותיות לסביבה",
      "Transparent budget handling and cost-effective solutions":
        "ניהול תקציב שקוף ופתרונות חסכוניים",
      "Expert craftsmanship focused on quality and durability":
        "עבודת יד מקצועית המתמקדת באיכות ועמידות",
      "Dedicated support through every stage of construction":
        "תמיכה מסורה בכל שלב בבנייה",
      // Home2.jsx new keys
      "Welcome to Vision Builders": "ברוכים הבאים ל-Vision Builders",
      "Designing and building innovative spaces that inspire communities and stand the test of time.":
        "מעצבים ובונים חללים חדשניים שמעניקים השראה לקהילות ונשארים לאורך זמן.",
      "Our Design Philosophy": "הפילוסופיה העיצובית שלנו",
      "Creativity, sustainability, and precision are the cornerstones of our practice. Every project is tailored with innovation, functional design, and a strong commitment to environmental responsibility.":
        "יצירתיות, קיימות ודיוק הם אבני היסוד של עבודתנו. כל פרויקט מותאם בחדשנות, עיצוב פונקציונלי ומחויבות סביבתית.",
      "Client-Focused Design": "עיצוב ממוקד לקוח",
      "Every structure begins with your vision—crafted through collaboration and personalized planning.":
        "כל מבנה מתחיל בחזון שלך—נבנה בשיתוף פעולה ותכנון אישי.",
      "Sustainable Innovation": "חדשנות בת קיימא",
      "We integrate green building practices and future-ready technologies into every design.":
        "אנו משלבים שיטות בנייה ירוקות וטכנולוגיות מתקדמות בכל עיצוב.",
      "Proven Excellence": "מצוינות מוכחת",
      "From homes to skyscrapers, our portfolio showcases projects that are both iconic and enduring.":
        "מבתים ועד גורדי שחקים, התיק שלנו מציג פרויקטים איקוניים ועמידים.",
      "Our Approach": "הגישה שלנו",
      At: "ב-",
      "we unite architectural creativity with engineering precision. Each project is overseen with attention to detail, ensuring structural quality and design excellence.":
        "אנו מאחדים יצירתיות אדריכלית עם דיוק הנדסי. כל פרויקט מנוהל בקפידה להבטחת איכות וחדשנות.",
      "We believe in transparent communication and collaboration—keeping clients consistently updated from planning to construction.":
        "אנו מאמינים בתקשורת ושקיפות—הלקוח מעודכן בכל שלב מהתכנון ועד הביצוע.",
      "Our process emphasizes innovation, sustainability, and efficiency, delivering results that are functional, aesthetic, and future-ready.":
        "התהליך שלנו מדגיש חדשנות, קיימות ויעילות, לתוצאות פונקציונליות, אסתטיות ומתקדמות.",
      "Featured Projects": "פרויקטים נבחרים",
      "Sustainable Residential Complex": "מתחם מגורים בר קיימא",
      "Initial Consultation": "התייעצות ראשונית",
      "Designed and constructed an award-winning eco-friendly residential complex with solar integration and smart water management.":
        "תכננו ובנינו מתחם מגורים ירוק שזכה בפרסים, עם אנרגיה סולארית וניהול מים חכם.",
      "Modern Corporate Headquarters": "מטה חברה מודרני",
      "Delivered a state-of-the-art commercial office building with innovative open-plan designs and LEED Platinum certification.":
        "השלמנו בניין משרדים מתקדם עם עיצוב פתוח ותעודת LEED פלטינום.",
      Year: "שנה",
      "Latest Construction Insights": "תובנות חדשות בבנייה",
      "Trends in Sustainable Architecture": "מגמות באדריכלות בת קיימא",
      "Full Construction": "בנייה מלאה",
      "Exploring the latest innovations in eco-friendly building materials and energy design.":
        "חקר החידושים האחרונים בחומרים ירוקים ועיצוב אנרגיה.",
      "Maximizing Space in Urban Design": "מקסום שטח בתכנון עירוני",
      "Creative strategies for making the most of limited urban spaces.":
        "אסטרטגיות יצירתיות לניצול מרבי של שטחים עירוניים.",
      "Smart Building Technologies": "טכנולוגיות בנייה חכמות",
      "How IoT and automation are redefining modern construction.":
        "כיצד IoT ואוטומציה משנים את עולם הבנייה.",
      "Read More": "קרא עוד",
      "Schedule a Project Consultation": "קבעו פגישת ייעוץ לפרויקט",
      Name: "שם",
      "Your full name": "השם המלא שלך",
      Message: "הודעה",
      "Starting at $50,000": "החל מ-50,000 דולר",
      "Briefly describe your project": "תאר בקצרה את הפרויקט שלך",
      "Book Consultation": "קבעו פגישה",
      "Your consultation request was submitted successfully!":
        "הבקשה שלך לייעוץ נשלחה בהצלחה!",
      Home: "בית",
      Home1: "בית 1",
      Home2: "בית 2",
      "About Us": "עלינו",
      Services: "שירותים",
      "View All Services": "הצג את כל השירותים",
      "Residential Projects": "פרויקטים למגורים",
      "Commercial Complexes": "מתחמים מסחריים",

      "Interior Design": "עיצוב פנים",
      "Urban Planning": "תכנון עירוני",
      "Renovation & Restoration": "שיפוץ ושחזור",
      Blog: "בלוג",
      "Contact Us": "צור קשר",
      "User Profile": "פרופיל משתמש",
      Logout: "התנתק",
      Languages: "שפות",
      English: "אנגלית",
      Arabic: "ערבית",
      Hebrew: "עברית",
      QuickLinks: "קישורים מהירים",
      // Home.jsx new keys
      "Building Tomorrow, Today": "בונים את המחר, היום",
      "Your trusted partner in construction and architecture — delivering innovative designs, sustainable solutions, and projects that stand the test of time.":
        "השותף המהימן שלך לבנייה ואדריכלות — מספקים עיצובים חדשניים, פתרונות ברי קיימא ופרויקטים שמחזיקים מעמד.",
      "Explore our services": "גלה את השירותים שלנו",
      "Our Expertise": "המומחיות שלנו",
      "High-quality design and construction services tailored for residential projects.":
        "שירותי תכנון ובנייה איכותיים המותאמים לפרויקטים למגורים.",
      "High-quality design and construction services tailored for commercial complexes.":
        "שירותי תכנון ובנייה איכותיים המותאמים למתחמים מסחריים.",
      "High-quality design and construction services tailored for industrial facilities.":
        "שירותי תכנון ובנייה איכותיים המותאמים למתקנים תעשייתיים.",
      "High-quality design and construction services tailored for interior design.":
        "שירותי תכנון ובנייה איכותיים המותאמים לעיצוב פנים.",
      "High-quality design and construction services tailored for urban planning.":
        "שירותי תכנון ובנייה איכותיים המותאמים לתכנון עירוני.",
      "High-quality design and construction services tailored for renovation and restoration.":
        "שירותי תכנון ובנייה איכותיים המותאמים לשיפוץ ושחזור.",
      "About Our Firm": "על המשרד שלנו",
      "Established in 1997, with 2,500+ projects completed globally.":
        "הוקם ב-1997, עם מעל 2,500 פרויקטים שהושלמו ברחבי העולם.",
      "Award-winning design and engineering teams.":
        "צוותי תכנון והנדסה זוכי פרסים.",
      "Specialized in sustainable and innovative architecture.":
        "מתמחים באדריכלות חדשנית ובת קיימא.",
      "Trusted by clients ranging from homeowners to multinational corporations.":
        "מהימן על ידי לקוחות פרטיים ותאגידים בינלאומיים.",
      "Dedicated to transforming communities through responsible construction.":
        "מחויבים לשינוי קהילות באמצעות בנייה אחראית.",
      "Learn More About Us": "למידע נוסף עלינו",
      "Meet Our Architects & Engineers": "הכירו את האדריכלים והמהנדסים שלנו",
      "Jane Doe": "ג׳יין דו",
      "Lead Architect": "אדריכלית ראשית",
      "John Smith": "ג׳ון סמית",
      "Structural Engineer": "מהנדס מבנים",
      "Emily Davis": "אמילי דייוויס",
      "Interior Designer": "מעצבת פנים",
      "Kevin Spacey": "קווין ספייסי",
      "Project Manager": "מנהל פרויקטים",
      "A Construction Partner You Can Trust": "שותף בנייה שאפשר לסמוך עליו",
      "We go beyond blueprints and concrete. Our commitment to reliability, transparency, and innovation ensures every project is completed on time, within budget, and with uncompromising quality.":
        "אנחנו מעבר לתוכניות ולבטון. המחויבות שלנו לאמינות, שקיפות וחדשנות מבטיחה שכל פרויקט יושלם בזמן, במסגרת התקציב ובאיכות ללא פשרות.",
      "Client satisfaction rate": "שיעור שביעות רצון הלקוחות",
      "across residential & commercial projects.":
        "בפרויקטים למגורים ומסחריים.",
      "Projects delivered": "פרויקטים שהושלמו",
      "within scheduled timelines.": "במסגרת לוחות הזמנים.",
      "Dedicated project support": "תמיכה בפרויקט",
      "and client communication.": "ותקשורת עם הלקוח.",
      "Architects & engineers": "אדריכלים ומהנדסים",
      "with proven track records.": "עם רקורד מוכח.",
      "Ready to Start Your Project?": "מוכנים להתחיל את הפרויקט שלכם?",
      "Contact us today to discuss your vision, and let’s bring it to life with expert design and construction.":
        "צרו קשר עוד היום כדי לדון בחזון שלכם, וניתן לו חיים עם תכנון ובנייה מקצועיים.",
      "Book a consultation": "קבעו פגישה",
      "Our Services": "השירותים שלנו",
      Address: "כתובת:",
      "123 Skyline Avenue, Design City": "123 שדרת סקייליין, עיר העיצוב",
      Phone: "טלפון:",
      "(123) 456-7890": "(123) 456-7890",
      Email: "אימייל:",
      "info@visionbuilders.com": "info@visionbuilders.com",
      Hours: "שעות פעילות:",
      "Mon–Fri, 9 AM – 6 PM": "ב׳–ו׳, 9:00–18:00",
      Newsletter: "ניוזלטר",
      "Stay updated with the latest trends in architecture and construction.":
        "התעדכנו בטרנדים האחרונים באדריכלות ובנייה.",
      "Your email": "האימייל שלך",
      Subscribe: "הירשם",
      "Subscribed!": "נרשמת!",
      "All rights reserved.": "כל הזכויות שמורות.",
      // AboutUs.jsx keys
      "About Vision Builders": "על Vision Builders",
      "Shaping skylines and building communities with passion, innovation, and trust since our foundation.":
        "מעצבים קווי רקיע ובונים קהילות בתשוקה, חדשנות ואמון מאז היווסדנו.",
      "Our Mission & Vision": "המשימה והחזון שלנו",
      "We are committed to designing and constructing spaces that inspire, endure, and improve lives. Every project reflects our focus on innovation, sustainability, and excellence in architecture and construction.":
        "אנו מחויבים לעיצוב ובנייה של חללים מעוררי השראה, עמידים ומשפרי חיים. כל פרויקט משקף את החדשנות, הקיימות והמצוינות שלנו.",
      "Our Mission": "המשימה שלנו",
      "To build sustainable, functional, and beautiful spaces that bring visions to life and positively impact communities.":
        "לבנות חללים ברי קיימא, פונקציונליים ויפים שמגשימים חזונות ומשפיעים לטובה על קהילות.",
      "Our Vision": "החזון שלנו",
      "To be a global leader in innovative and sustainable architecture—transforming skylines and redefining modern living and workspaces.":
        "להיות מובילים עולמיים באדריכלות חדשנית ובת קיימא—משנים קווי רקיע ומגדירים מחדש מגורים ועבודה.",
      "Our Core Values": "הערכים שלנו",
      Integrity: "יושרה",
      Integrity_desc:
        "אנו דוגלים בכנות ושקיפות בכל פרויקט, מהתכנון ועד המסירה.",
      Excellence: "מצוינות",
      Excellence_desc: "מצוינות בתכנון ובנייה ברמה עולמית בזכות מומחיות ודיוק.",
      "Client Focus": "מיקוד בלקוח",
      "Client Focus_desc": "החזון שלך במרכז—עובדים יחד כדי לעלות על הציפיות.",
      Sustainability: "קיימות",
      Sustainability_desc:
        "עדיפות לשיטות ירוקות, חומרים סביבתיים ופתרונות חסכוניים באנרגיה.",
      Innovation: "חדשנות",
      Innovation_desc:
        "מאמצים טכנולוגיות מתקדמות ועיצובים חדשניים לעיצוב העתיד.",
      Community: "קהילה",
      Community_desc:
        "מחויבים לבנות לא רק מבנים, אלא השפעות חיוביות מתמשכות לאנשים ולקהילה.",
      "Our Growth Through Years": "הצמיחה שלנו לאורך השנים",
      "A journey of creativity, technology, and dedication—transforming blueprints into reality since day one.":
        "מסע של יצירתיות, טכנולוגיה ומסירות—הופכים תוכניות למציאות מהיום הראשון.",
      Foundation: "הקמה",
      "Founded Vision Builders with the goal of redefining modern architecture—first office established in 2016, delivering pioneering residential projects.":
        "Vision Builders נוסדה במטרה להגדיר מחדש את האדריכלות המודרנית—המשרד הראשון ב-2016, פרויקטים פורצי דרך.",
      Expansion: "התרחבות",
      "Expanded into commercial and industrial projects. Opened second design studio, grew to 20+ architects and engineers, 2019.":
        "התרחבות לפרויקטים מסחריים ותעשייתיים. פתיחת סטודיו שני, גדילה ל-20+ אדריכלים ומהנדסים, 2019.",
      "National Recognition": "הכרה לאומית",
      "Earned national recognition for eco-friendly architecture and innovative structural designs. Awarded Best Design Firm, 2022.":
        "זכייה בהכרה לאומית על אדריכלות ירוקה ועיצובים חדשניים. פרס משרד העיצוב הטוב ביותר, 2022.",
      "Technology & Innovation": "טכנולוגיה וחדשנות",
      "Integrated BIM systems, smart building technologies, and remote project collaboration for efficiency and connectivity, 2024.":
        "שילוב מערכות BIM, טכנולוגיות חכמות ושיתוף פעולה מרחוק ליעילות וחיבוריות, 2024.",
      "Our Commitment to You": "המחויבות שלנו אליך",
      "We commit to delivering reliable, innovative, and sustainable building solutions. From blueprint to handover, your vision is at the heart of everything we do.":
        "אנו מתחייבים לספק פתרונות בנייה אמינים, חדשניים וברי קיימא. מהתכנון ועד המסירה, החזון שלך במרכז.",
      "\u201cVision Builders transformed our dream into reality with unmatched professionalism and creativity. A true partner in every step.\u201d — Client Testimonial":
        "\u201cVision Builders הפכו את החלום שלנו למציאות במקצועיות ויצירתיות שאין כמותן. שותף אמיתי בכל שלב.\u201d — המלצת לקוח",
      "Ready to Build with Us?": "מוכנים לבנות איתנו?",
      "Contact Vision Builders today to schedule your consultation and discover how we can bring your project to life.":
        "צרו קשר עם Vision Builders עוד היום לקביעת ייעוץ ולגלות כיצד נוכל להחיות את הפרויקט שלכם.",
      "Connect with us": "צרו קשר איתנו",

      "Complete construction and architecture solutions for homes, businesses, and communities—delivered with vision, skill, and commitment.":
        "פתרונות שלמים לבנייה ואדריכלות לבתים, עסקים וקהילות — עם חזון, מיומנות ומחויבות.",
      "What We Do": "מה אנחנו עושים",

      "End-to-end design and construction for homes, apartments, and villas, blending comfort with contemporary aesthetics.":
        "תכנון ובנייה מקצה לקצה לבתים, דירות ווילות, בשילוב נוחות ואסתטיקה מודרנית.",
      "Architectural planning & design": "תכנון ועיצוב אדריכלי",
      "Custom interiors and renovations": "עיצוב פנים מותאם ושיפוצים",
      "Eco-friendly home solutions": "פתרונות ירוקים לבית",
      "Smart home integration": "אינטגרציית בית חכם",

      "Comprehensive solutions for offices, malls, retail spaces, and mixed-use developments built for business success.":
        "פתרונות מקיפים למשרדים, קניונים, חנויות ופרויקטים מעורבים — לבניית הצלחה עסקית.",
      "Workplace planning and design": "תכנון ועיצוב מקומות עבודה",
      "Retail/office space remodeling": "שיפוץ חללים מסחריים/משרדיים",
      "Future-ready infrastructure": "תשתיות מוכנות לעתיד",
      "Compliance & safety standards": "עמידה בתקני בטיחות ורגולציה",

      "Specialized construction for factories, warehouses, and smart industrial spaces—with a focus on durability and scalability.":
        "בנייה ייחודית למפעלים, מחסנים וחללים תעשייתיים חכמים — עם דגש על עמידות ויכולת הרחבה.",
      "Large-scale industrial design": "עיצוב תעשייתי רחב היקף",
      "Energy & logistics optimization": "ייעול אנרגיה ולוגיסטיקה",
      "Safety and environment compliance": "עמידה בתקני בטיחות וסביבה",
      "Tailored project management": "ניהול פרויקטים מותאם אישית",

      "Modern, functional interiors for residential, commercial, or hospitality spaces tailored to your vision and brand.":
        "עיצוב פנים מודרני ופונקציונלי לחללים מגורים, מסחריים או אירוח — מותאם לחזון ולמותג שלך.",
      "Space planning & layout": "תכנון ותצורת חללים",
      "Material & color consultation": "ייעוץ חומרים וצבעים",
      "Furniture and lighting solutions": "פתרונות ריהוט ותאורה",
      "Turnkey project execution": "ביצוע פרויקטים מקצה לקצה",

      "Strategic master planning and urban design for sustainable, vibrant communities and smart cities.":
        "תכנון אסטרטגי ועיצוב עירוני לקהילות חיות, בנות קיימא וערים חכמות.",
      "City/zone master plans": "תוכניות אב לערים/אזורים",
      "Landscape & streetscape design": "עיצוב נוף ורחוב",
      "Public realm improvements": "שדרוג המרחב הציבורי",
      "Sustainable urban policy": "מדיניות עירונית בת קיימא",

      "Bringing new life to historic, aged, or underutilized buildings through careful restoration and creative upgrades.":
        "החייאת מבנים היסטוריים, ישנים או לא מנוצלים באמצעות שימור קפדני ושדרוגים יצירתיים.",
      "Restoration & retrofitting": "שימור ושיפוץ",
      "Heritage conservation": "שימור מורשת",
      "Modernization of old spaces": "מודרניזציה של חללים ישנים",
      "Adaptive reuse projects": "פרויקטים של שימוש חוזר",

      "Why Choose Vision Builders": "למה לבחור ב-Vision Builders",
      "Creative Design Process": "תהליך עיצוב יצירתי",
      "Our collaborative approach puts your vision at the center of inspired, functional designs.":
        "הגישה השיתופית שלנו שמה את החזון שלך במרכז עיצובים יצירתיים ופונקציונליים.",
      "Quality Craftsmanship": "איכות ביצוע",
      "We build to last—combining cutting-edge methods, sustainable materials, and meticulous attention to detail.":
        "אנחנו בונים כדי שיחזיק מעמד — בשילוב שיטות מתקדמות, חומרים בני קיימא ותשומת לב לפרטים.",
      "Personalized Service": "שירות מותאם אישית",
      "A dedicated project manager supports you at every step, ensuring complete transparency and satisfaction.":
        "מנהל פרויקט ייעודי מלווה אותך בכל שלב, ומבטיח שקיפות מלאה ושביעות רצון.",
      "Comprehensive project oversight": "פיקוח כולל על הפרויקט",

      "Our Expertise in Detail": "המומחיות שלנו בפירוט",

      "Client Success Stories": "סיפורי הצלחה של לקוחות",
      "Vision Builders completely transformed our workspace—modern, vibrant, and perfect for our team. Seamless process and stellar results!":
        "Vision Builders שינו לחלוטין את סביבת העבודה שלנו — מודרנית, חיה ומושלמת לצוות שלנו. תהליך חלק ותוצאות מדהימות!",
      "Sarah Thompson": "שרה תומפסון",
      "Project Director, UrbanHabitat Ltd.":
        'מנהלת פרויקטים, UrbanHabitat בע"מ',
      "Their team managed our residential renovation with incredible attention to detail and a personal touch at every step.":
        "הצוות שלהם ניהל את שיפוץ המגורים שלנו עם תשומת לב מדהימה לפרטים ונגיעה אישית בכל שלב.",

      "Homeowner, Mumbai": "בעלת בית, מומבאי",
      "We entrusted Vision Builders with our commercial plaza construction—the experience exceeded all our expectations!":
        "הפקדנו את בניית הקניון המסחרי שלנו בידי Vision Builders — החוויה עלתה על כל הציפיות שלנו!",
      "John Harris": "ג'ון האריס",
      "Director, Blue Ocean Realty": "מנהל, Blue Ocean Realty",

      "Contact Vision Builders today to schedule a consultation and start your journey to a remarkable space.":
        "צור קשר עם Vision Builders עוד היום כדי לקבוע פגישה ולהתחיל את הדרך שלך לחלל יוצא דופן.",

      // --- ResidentialProjects.jsx additional keys ---
      "Landscape Design": "עיצוב נוף",
      "Smart Home Integration": "אינטגרציית בית חכם",
      "Home Extensions": "הרחבות לבית",

      "Your browser does not support the video tag.":
        "הדפדפן שלך אינו תומך בוידאו.",

      "Discuss your vision and requirements": "דון בחזון ובדרישות שלך",
      "Preliminary feasibility and site assessment":
        "הערכת היתכנות ראשונית ובדיקת אתר",
      "Estimate project scope and budget": "הערכת היקף ותקציב הפרויקט",
      "Outline next steps and project timeline": "הגדרת שלבים הבאים ולוח זמנים",
      "Follow-up consultation to finalize details": "פגישת המשך לסגירת פרטים",
      "No obligation to proceed with the project": "אין התחייבות להמשך הפרויקט",
      "Architectural design and layout plans": "תוכניות עיצוב ותכנון אדריכלי",
      "Interior concept development": "פיתוח קונספט עיצוב פנים",
      "Permitting assistance and approvals": "סיוע בהיתרים ואישורים",
      "Regular client design consultations": "פגישות עיצוב שוטפות עם הלקוח",
      "Detailed project timeline": "לוח זמנים מפורט לפרויקט",
      "Final design package with specifications": "חבילת עיצוב סופית עם מפרטים",
      "Complete construction management and execution":
        "ניהול וביצוע מלא של הבנייה",
      "High-quality materials and craftsmanship":
        "חומרים איכותיים ועבודת יד מקצועית",
      "On-site supervision and quality assurance": "פיקוח באתר ואבטחת איכות",
      "Post-construction walkthrough and support": "סיור ותמיכה לאחר הבנייה",
      // Cube Steps
      Brief: "תקציר",
      Research: "מחקר",
      Sketch: "סקיצה",
      Design: "עיצוב",
      Present: "הצגה",
      Revise: "תיקון",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
