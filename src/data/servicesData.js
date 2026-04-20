export const servicesData = {
  // STARTUPS
  "proprietorship": {
    seo: {
      title: "Sole Proprietorship Registration Online | ZOO Filings",
      description: "Fast and easy Sole Proprietorship registration in India. Get expert assistance with GST, Udyam, and completely manage your solo business compliance."
    },
    hero: {
      title: "Proprietorship Registration in India",
      description: "Register your Proprietorship firm quickly and legally. Get GST, Udyam, PAN support and complete sole proprietorship registration online with expert assistance."
    },
    whatsappPackageName: "Proprietorship",
    inclusions: [
      { title: "Expert Registration Consultation", icon: "User" },
      { title: "End-to-End Documentation Support", icon: "FileText" },
      { title: "Dedicated Compliance Expert", icon: "ShieldCheck" },
      { title: "GST Registration & Monthly Filing Support", icon: "Calendar" },
      { title: "Income Tax Return Filing Assistance", icon: "TrendingUp" }
    ],
    requiredDocuments: [
      "PAN Card copy (Proprietor)",
      "Aadhaar Card copy (Proprietor)",
      "Passport size photograph",
      "Latest Bank Statement (Not older than 2 months)",
      "Utility Bill for Registered Office Address (Electricity/Gas/Water bill)",
      "No Objection Certificate (NOC) from the owner of the premises"
    ],
    features: [
      {
        title: "Single Owner Control",
        description: "Retain 100% control over your business operations, decisions, and profits without partner disputes."
      },
      {
        title: "Minimal Compliance",
        description: "Fewer regulatory filings and compliances compared to private limited or LLP structures."
      },
      {
        title: "Easy to Start & Close",
        description: "Can be established in days with minimal documentation, and dissolved effortlessly if needed."
      },
      {
        title: "Cost Effective",
        description: "Lowest setup cost among all business structures, ideal for low-risk micro and small businesses."
      }
    ],
    pricing: [
      {
        name: "GST + Udyam",
        // price: "₹1,499",
        // subtitle: "+ Govt. fee extra",
        description: "Get complete GST and MSME registration for your new proprietorship.",
        features: [
          "GST Registration Support",
          "GST Certificate",
          "Udyam (MSME) Registration",
          "Dedicated Accountant",
          "Current Account Opening Assistance"
        ],
        isPopular: false
      },
      {
        name: "Proprietorship Plus",
        // price: "₹7,899",
        // subtitle: "+ Govt. fee extra",
        description: "Complete package including 12 months of GST filing and automated accounting access.",
        features: [
          "GST Registration for Proprietorship",
          "Udyam Registration",
          "GSTR-1 Filing – 12 Months",
          "GSTR-3B Filing – 12 Months",
          "LEDGERS Accounting Software - 12 Months"
        ],
        isPopular: true
      },
      {
        name: "Comprehensive Filing",
        // price: "₹19,899",
        // subtitle: "+ Govt. fee extra",
        description: "Fully automated accounting services + ITR for businesses with up to 40L turnover.",
        features: [
          "Dedicated Accountant",
          "GSTR-1 & 3B Filing – 12 Months",
          "Personal Income Tax Filing",
          "Financial Statements Preparation",
          "Priority Chat & Email Support"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is a Sole Proprietorship?",
        answer: "A Sole Proprietorship is a business owned, managed, and controlled by a single person. It is the easiest form of business to start and run in India."
      },
      {
        question: "Do I need a separate PAN for Proprietorship?",
        answer: "No, the PAN of the proprietor is the PAN of the business. You don't need a separate PAN card for a sole proprietorship."
      },
      {
        question: "Is audit mandatory for Sole Proprietorship?",
        answer: "Tax audit is mandatory only if the annual turnover exceeds Rs. 1 Crore in case of a trading/manufacturing business or Rs. 50 Lakhs in case of professionals."
      },
      {
        question: "Can I convert my Proprietorship into a Private Limited Company later?",
        answer: "Yes, you can easily convert a sole proprietorship into a Private Limited Company or an LLP seamlessly as your business grows."
      }
    ],
    relatedServices: [
      { name: "One Person Company", slug: "/startup/opc" },
      { name: "Private Limited Company", slug: "/startup/private-limited" },
      { name: "Limited Liability Partnership", slug: "/startup/llp" }
    ]
  },

  "opc": {
    seo: {
      title: "One Person Company (OPC) Registration Form | ZOO Filings",
      description: "Start a One Person Company (OPC) in India easily. Enjoy limited liability while maintaining 100% ownership."
    },
    hero: {
      title: "One Person Company (OPC) Registration",
      description: "The ideal structure for solo entrepreneurs looking for corporate status. Get limited liability protection and attract investors without adding a co-founder."
    },
    whatsappPackageName: "One Person Company (OPC)",
    inclusions: [
      { title: "Expert Registration Consultation", icon: "User" },
      { title: "End-to-End Documentation Support", icon: "FileText" },
      { title: "Dedicated Compliance Expert", icon: "ShieldCheck" },
      { title: "Company Name Approval support", icon: "CheckCircle2" },
      { title: "DSC & DIN for Director", icon: "FileKey" }
    ],
    requiredDocuments: [
      "PAN Card copy of Director & Nominee",
      "Aadhaar Card copy of Director & Nominee",
      "Passport size photographs",
      "Latest Bank Statement/Telephone Bill/Electricity Bill (Not older than 2 months)",
      "Utility Bill for Registered Office Address",
      "No Objection Certificate (NOC) from the owner of the premises"
    ],
    features: [
      {
        title: "Limited Liability",
        description: "Your personal assets are protected. The company's liability is limited to the extent of the share capital."
      },
      {
        title: "Corporate Identity",
        description: "Enjoy the credibility of a Private Limited company, making it easier to acquire specialized talent and bank loans."
      },
      {
        title: "100% Ownership",
        description: "You remain the sole owner and director. No need to share equity or decision-making power early on."
      },
      {
        title: "Continuous Existence",
        description: "The company exists perpetually irrespective of the owner’s health or status through a nominee system."
      }
    ],
    pricing: [
      {
        name: "Basic Registration",
        price: "₹6,999",
        subtitle: "All inclusive",
        description: "Fast track incorporation of your OPC.",
        features: [
          "DSC for 1 Director",
          "DIN for 1 Director",
          "Name Approval",
          "Incorporation Certificate",
          "MOA & AOA",
          "PAN & TAN"
        ],
        isPopular: false
      },
      {
        name: "Premium OPC",
        price: "₹14,999",
        subtitle: "All inclusive",
        description: "Registration plus 1 year of essential compliance support.",
        features: [
          "Everything in Basic",
          "GST Registration",
          "INC-20A Form Filing",
          "Share Certificate Issuance",
          "First Board Meeting Minutes",
          "EPF & ESIC Registration"
        ],
        isPopular: true
      },
      {
        name: "Complete Care",
        price: "₹34,999",
        subtitle: "All inclusive",
        description: "Registration + 1 Year Audit & Compliance.",
        features: [
          "Everything in Premium",
          "Statutory Audit for 1 Year",
          "Income Tax Filing for OPC",
          "AOC-4 & MGT-7A MCA Annual Filing",
          "Dedicated Finance Manager"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "Can an NRI start an OPC in India?",
        answer: "Yes, recent amendments allow NRIs to incorporate a One Person Company in India, provided they satisfy specific residency rules."
      },
      {
        question: "Is there a minimum capital requirement for OPC?",
        answer: "No, there is no minimum paid-up capital required for starting an OPC in India."
      },
      {
        question: "Can an OPC issue shares to the public?",
        answer: "No, an OPC is a type of private company and cannot issue shares to the public or list on a stock exchange."
      }
    ],
    relatedServices: [
      { name: "Private Limited Company", slug: "/startup/private-limited" },
      { name: "Proprietorship", slug: "/startup/proprietorship" },
      { name: "Indian Subsidiary", slug: "/startup/indian-subsidiary" }
    ]
  },
  "trade-license": {
    seo: {
      title: "Trade License Registration Online | ZOO Filings",
      description: "Apply for Trade License online easily. Get end-to-end assistance for document verification, filing, and compliance with Municipal Corporations."
    },
    hero: {
      title: "Trade License Registration",
      description: "Register your Trade License at the best prices with a smooth, hassle-free process. We help you start, operate, and grow your business legally with expert guidance from start to finish."
    },
    whatsappPackageName: "Trade License",
    inclusions: [
      { title: "Document Collection & Verification", icon: "FileText" },
      { title: "Seamless Application Filing", icon: "CheckCircle2" },
      { title: "Secure & Compliant", icon: "ShieldCheck" },
      { title: "End-to-End Assistance", icon: "User" }
    ],
    requiredDocuments: [
      "Duly filled Application Form (Form-353 or state-specific form)",
      "Identity proof of applicant",
      "Address proof of business premises",
      "Property tax receipt",
      "Rent agreement / Ownership proof",
      "City census or location map",
      "Building plan (for hazardous trades)",
      "Letter of approval / NOC (if applicable)"
    ],
    features: [
      {
        title: "Legal Compliance",
        description: "Ensures lawful operation under municipal laws and prevents fines, closures, and legal actions."
      },
      {
        title: "Public Safety & Hygiene",
        description: "Confirms adherence to health and safety standards, protecting residents from health and environmental risks."
      },
      {
        title: "Business Credibility",
        description: "Enhances trust among customers and partners, and acts as official proof for banks and investors."
      },
      {
        title: "Facilitates Expansion",
        description: "Required for business growth, approvals, and accessing certain government subsidies and schemes."
      }
    ],
    pricing: [
      {
        name: "Basic Filing",
        description: "Standard application preparation and online filing with the local authorities.",
        features: [
          "Document Verification",
          "Application Drafting",
          "Online Submission",
          "Basic Support"
        ],
        isPopular: false
      },
      {
        name: "Premium License",
        description: "Fast-track processing with dedicated expert coordination.",
        features: [
          "Everything in Basic",
          "Dedicated License Expert",
          "Follow-up with Authorities",
          "Priority Processing"
        ],
        isPopular: true
      },
      {
        name: "Complete Care",
        description: "Trade License + Annual compliance monitoring for your business.",
        features: [
          "Everything in Premium",
          "Annual Maintenance",
          "Renewal Reminders",
          "Ongoing Consultation"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is a Trade License?",
        answer: "A Trade License is a legal document issued by the Municipal Corporation that authorises an individual or entity to carry out a specific business or trade at a particular location."
      },
      {
        question: "Who Issues a Trade License in India?",
        answer: "Trade Licenses are issued by the Municipal Corporation or Local Urban Body, through departments such as the Health, Engineering, or Industries Department."
      },
      {
        question: "What businesses require a Trade License?",
        answer: "Businesses like retail stores, restaurants, factories, healthcare clinics, transport services, and entertainment centres generally require a Trade License."
      },
      {
        question: "What is the penalty for non-compliance?",
        answer: "Operating without a valid Trade License may lead to monetary fines, legal notices, business closure, or the sealing of premises."
      }
    ],
    relatedServices: [
      { name: "FSSAI Registration", slug: "/registrations/fssai" },
      { name: "GST Registration", slug: "/registrations/gst" },
      { name: "Proprietorship", slug: "/startup/proprietorship" }
    ]
  }
};
