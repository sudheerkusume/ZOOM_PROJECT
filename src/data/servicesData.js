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
  },
  "12a-80g": {
    seo: {
      title: "12A & 80G Registration Online | ZOO Filings",
      description: "Register your NGO, Trust, or Society under 12A and 80G to get tax exemptions and enable donor tax benefits."
    },
    hero: {
      title: "12A & 80G Registration",
      description: "Register your NGO, Trust, or Society under 12A and 80G to get tax exemptions and enable donor tax benefits, with expert documentation and fast registration support across India."
    },
    whatsappPackageName: "12A & 80G Registration",
    inclusions: [
      { title: "Eligibility Review & Documentation Preparation", icon: "FileText" },
      { title: "Dedicated Support for NGO / Trust / Society", icon: "User" },
      { title: "Income Tax & Compliance Consultation", icon: "TrendingUp" },
      { title: "Complete 12A & 80G Application Filing", icon: "CheckCircle2" }
    ],
    requiredDocuments: [
      "Trust Deed / Society Registration Certificate / Section 8 Company Certificate",
      "Memorandum of Association and Articles of Association",
      "PAN card of the organization",
      "Bank account statement of the organization",
      "Audited accounts of the organization for the last three years",
      "List of trustees / members / directors of the organization",
      "List of activities carried out by the organization"
    ],
    features: [
      {
        title: "Tax Exemptions for Donors",
        description: "NGOs with 80G certification can offer their donors the advantage of tax deductions on their contributions."
      },
      {
        title: "Enhanced Credibility and Trust",
        description: "Lends an official stamp of approval from the Income Tax Department, enhancing an NGO's credibility."
      },
      {
        title: "Increased Fundraising Potential",
        description: "The tax benefits associated with these registrations encourage both individuals and corporate entities to donate more generously."
      },
      {
        title: "Access to Government Grants",
        description: "Many government programs and initiatives require NGOs to have 12A and 80G registrations to qualify for funding."
      }
    ],
    pricing: [
      {
        name: "12A Registration",
        description: "Obtain 12A registration effortlessly to get tax-exemption for your charitable organization.",
        features: [
          "Application Preparation",
          "Application Filing",
          "12A Registration Number",
          "12A Certificate"
        ],
        isPopular: false
      },
      {
        name: "80G Registration",
        description: "Get 80G registration and allow donors to claim tax deductions.",
        features: [
          "Application Preparation",
          "Application Filing",
          "80G Registration Number",
          "80G Certificate"
        ],
        isPopular: true
      },
      {
        name: "12A + 80G Combo",
        description: "Complete package for tax exemption and donor benefits.",
        features: [
          "Application Preparation",
          "Application Filing",
          "12A & 80G Registration Numbers",
          "12A & 80G Certificates"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is 12A registration?",
        answer: "This certification is provided under the Income Tax Act 1961 to non-profit organisations in India. Once registered, an NGO becomes eligible for tax exemption on its income."
      },
      {
        question: "What is 80G registration?",
        answer: "80G registration is intended to incentivise donors. It allows individuals or entities who donate to a 12A-registered NGO to claim a deduction on their income tax."
      },
      {
        question: "Who can apply for 12A and 80G registration?",
        answer: "Charitable Trusts, Registered Societies, Section 8 Companies, Religious Organizations, Educational Institutions, and Medical Institutions are eligible to apply."
      },
      {
        question: "What is the validity of 12A and 80G Registration?",
        answer: "Provisional registration is granted for a period of 3 years, while the validity of regular registration is for 5 years. There is no annual renewal requirement."
      }
    ],
    relatedServices: [
      { name: "Trade License", slug: "/registrations/trade-license" },
      { name: "Section 8 Company", slug: "/startup/section-8" },
      { name: "Trust Registration", slug: "/startup/trust" }
    ]
  },
  "registration": {
    seo: {
      title: "Trademark Registration Online in India | ZOO Filings",
      description: "Protect your brand name with expert-assisted trademark filing, AI-powered brand search, and tracking."
    },
    hero: {
      title: "Trademark Registration",
      description: "Protect your brand name with expert-assisted trademark filing, transparent pricing, and real-time status tracking—100% online."
    },
    whatsappPackageName: "Trademark Registration",
    inclusions: [
      { title: "Experienced Trademark Lawyers", icon: "User" },
      { title: "Instant, Digital Trademark Filing", icon: "CheckCircle2" },
      { title: "One-Class Trademark Filing", icon: "FileText" },
      { title: "Trademark Monitoring Software", icon: "Activity" }
    ],
    requiredDocuments: [
      "Incorporation Certificate or Partnership Deed (for companies/firms)",
      "PAN Card of the authorised signatory",
      "Aadhaar Card of the authorised signatory",
      "Form-48 Signed (E-sign by using Aadhaar authentication)",
      "Logo (in black and white to ensure all colors are covered)"
    ],
    features: [
      {
        title: "Exclusive Legal Protection",
        description: "Grants you the exclusive right to use your mark and prevents unauthorised use and counterfeiting."
      },
      {
        title: "Brand Building & Recognition",
        description: "Differentiates your offerings and builds customer trust by associating your brand with guaranteed quality."
      },
      {
        title: "Valuable Business Asset",
        description: "Becomes an intangible asset that can be sold, licensed, or used as collateral to attract investors."
      },
      {
        title: "10-Year Global Protection",
        description: "Lasts for 10 years with unlimited renewals, and empowers international expansion through treaties."
      }
    ],
    pricing: [
      {
        name: "Instant Filing",
        description: "Fast and professional service with complete application preparation.",
        features: [
          "Application Preparation",
          "Application Filing",
          "Application Monitoring",
          "TM Tracking Software",
          "Dedicated Attorney Support"
        ],
        isPopular: true
      },
      {
        name: "TM + Form 48",
        description: "Seamless filing process ensuring hassle-free protection for your brand.",
        features: [
          "Trademark Search",
          "Form 48 Preparation",
          "Trademark for One Class",
          "Trademark Software",
          "Government Submission"
        ],
        isPopular: false
      },
      {
        name: "Corporate Filing",
        description: "End-to-end trademark registration service for non-MSME corporates.",
        features: [
          "Comprehensive TM Search",
          "Non-MSME Filing Support",
          "Trademark for One Class",
          "Trademark Software",
          "Priority Processing"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is a trademark?",
        answer: "A trademark is a form of intellectual property that can be a word, phrase, symbol, design, or a combination of these elements used to uniquely identify goods or services."
      },
      {
        question: "Who can apply for trademark registration?",
        answer: "Individuals, Proprietorships, Companies, LLPs, Trusts, Societies, and even Foreign Companies can apply for a trademark in India."
      },
      {
        question: "How do I choose the correct trademark class?",
        answer: "Trademarks are categorized into 45 distinct classes. Classes 1-34 are for products, and classes 35-45 are for services. You must select the class that accurately represents your business."
      },
      {
        question: "What is the Vienna Codification process?",
        answer: "It is an international system that categorizes the figurative elements (like logos or illustrations) of trademarks. The Registry applies this classification after you file your application."
      }
    ],
    relatedServices: [
      { name: "Private Limited Company", slug: "/startup/private-limited" },
      { name: "Copyright Registration", slug: "/trademark/copyright" },
      { name: "GST Registration", slug: "/registrations/gst" }
    ]
  },
  "certificate": {
    seo: {
      title: "Trademark Registration Certificate Online | ZOO Filings",
      description: "Get help with trademark certificate issuance, verification, and downloadable copies with a secure, guided process and timely updates."
    },
    hero: {
      title: "Trademark Registration Certificate",
      description: "Need your trademark registration certificate? We help you track the issuance, verify the details, and guide you in securely downloading and storing your certificate."
    },
    whatsappPackageName: "Trademark Certificate",
    inclusions: [
      { title: "Status tracking until certificate is issued", icon: "Activity" },
      { title: "Verification of certificate details", icon: "CheckCircle2" },
      { title: "Guided download support & secure handling", icon: "FileDown" },
      { title: "Assistance with corrections if required", icon: "User" }
    ],
    requiredDocuments: [
      "Trademark Application Number",
      "PAN Card of the Applicant",
      "Authorization Letter / Power of Attorney (if applicable)",
      "Digital Signature Certificate (DSC)"
    ],
    features: [
      {
        title: "Official Proof of Ownership",
        description: "The certificate acts as concrete legal evidence that you are the sole and absolute owner of the registered brand identity."
      },
      {
        title: "Legal Protection",
        description: "Empowers you to take strict legal action and claim damages against anyone who attempts to infringe or copy your mark."
      },
      {
        title: "Enhances Brand Value",
        description: "Increases the tangible worth of your business, making it easier to attract investors, franchisees, or potential buyers."
      },
      {
        title: "Lifetime Authenticity",
        description: "Provides a lifelong foundation for your brand’s authenticity, granting you the right to use the coveted ® symbol."
      }
    ],
    pricing: [
      {
        name: "Certificate Only",
        description: "Get an authorized trademark registration certificate from the Government.",
        price: "₹2,988",
        subtitle: "+ GST | Govt. fee included",
        features: [
          "Trademark Certificate",
          "Legal Hard copy",
          "Courier to your Address",
          "Basic Verification"
        ],
        isPopular: true
      },
      {
        name: "Certificate & Software",
        description: "Receive your certificate along with our powerful brand monitoring software.",
        price: "₹5,988",
        subtitle: "+ GST | Govt. fee included",
        features: [
          "Trademark Certificate",
          "Legal Hard copy",
          "Courier to your Address",
          "LEDGERS Brand Monitoring",
          "Continuous Tracking"
        ],
        isPopular: false
      },
      {
        name: "Fast Track Certificate",
        description: "Priority processing to get your authorized trademark registration certificate rapidly.",
        price: "₹7,899",
        subtitle: "+ GST | Govt. fee included",
        features: [
          "Trademark Certificate",
          "Legal Hard copy",
          "LEDGERS Brand Monitoring",
          "Priority Courier Delivery",
          "Dedicated Expert Support"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is a Trademark Registration Certificate?",
        answer: "A Trademark Registration Certificate is an official document issued by the Trademark Registry that serves as conclusive legal proof of your ownership over a brand name, logo, or symbol."
      },
      {
        question: "What information does a Trademark Registration Certificate include?",
        answer: "It includes the trademark owner's name and address, an exact representation of the trademark, the applicable class of goods/services, the registration number, and the issuance date."
      },
      {
        question: "How long does it take to obtain a Trademark Registration Certificate?",
        answer: "Once the trademark is published in the Trademark Journal and faces no opposition for 90 days, the digital certificate is usually generated and issued within 1 to 3 months."
      },
      {
        question: "Is it necessary to register a trademark?",
        answer: "While it is not strictly legally mandatory, registering your trademark is highly recommended because it is the only way to gain exclusive legal rights and prevent others from copying your brand identity."
      }
    ],
    relatedServices: [
      { name: "Trademark Registration", slug: "/trademark/registration" },
      { name: "Copyright Registration", slug: "/trademark/copyright" },
      { name: "Private Limited Company", slug: "/startup/private-limited" }
    ]
  },
  "gst_registration": {
    seo: {
      title: "Online GST Registration | ZOO Filings",
      description: "Register for GST online with dedicated experts. We take care of documentation, application filing, query resolution and approvals."
    },
    hero: {
      title: "Online GST Registration",
      description: "Get your business registered under GST and secure your GST Identification Number (GSTIN) with complete expert support & GST filing software."
    },
    whatsappPackageName: "GST Registration",
    inclusions: [
      { title: "Complete application preparation", icon: "FileText" },
      { title: "Instant TRN generation", icon: "Activity" },
      { title: "ARN generation", icon: "CheckCircle2" },
      { title: "GST certificate", icon: "FileDown" },
      { title: "LEDGERS GST software", icon: "ShieldCheck" }
    ],
    requiredDocuments: [
      "PAN Card of the Business / Applicant",
      "Valid Aadhaar Card",
      "Proof of Business Address (Electricity Bill / Rent Agreement / NOC)",
      "Bank Account Statement or Cancelled Cheque",
      "Passport Size Photographs of Authorized Signatories"
    ],
    features: [
      {
        title: "Trusted Compliance Platform",
        description: "Trusted by over 3 lakh businesses across India for GST registration, return filing, and end-to-end compliance support."
      },
      {
        title: "Dedicated Compliance Manager",
        description: "Get a single point of contact to manage GST returns, handle notices and reconciliations, and provide ongoing support."
      },
      {
        title: "100% Online, Powered by LEDGERS",
        description: "Manage your GST compliance through a smart online dashboard to track return status, upload documents, and monitor tracking."
      },
      {
        title: "End-to-End Assistance",
        description: "We take care of documentation, application filing, query resolution and approvals so you can safely focus on your core business."
      }
    ],
    pricing: [
      {
        name: "GST + Monthly Filing",
        description: "Complete GST registration and monthly filing services with expert support.",
        price: "₹1,499",
        subtitle: "+ GST",
        features: [
          "GST Registration Support",
          "GST Certificate",
          "Dedicated Accountant",
          "GSTR-1 Monthly Filing",
          "GSTR-3B Monthly Filing",
          "LEDGERS Accounting Software"
        ],
        isPopular: false
      },
      {
        name: "1 Year GST Filing",
        description: "Get a dedicated GST Professional to handle your GST return filings accurately and on time.",
        price: "₹7,899",
        subtitle: "+ GST",
        features: [
          "LEDGERS GST Software",
          "12 Months GSTR-1 Filing",
          "12 Months GSTR-3B Filing",
          "Priority Return Status Tracking"
        ],
        isPopular: true
      },
      {
        name: "1 Year GST Filing + ITR",
        description: "Customized accounting services for businesses up to 40 lakhs turnover ensuring complete compliance.",
        price: "₹19,899",
        subtitle: "+ GST",
        features: [
          "Dedicated Accountant",
          "GSTR-1 & 3B Filing – 12 Months",
          "Income Tax Filing",
          "Financial Statements",
          "LEDGERS Software - 1 Year"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is the turnover limit for GST registration?",
        answer: "The government has set the turnover threshold for GST registration at Rs. 40 Lakhs for goods suppliers and Rs. 20 Lakhs for service providers in most states."
      },
      {
        question: "What is the penalty for not registering under GST?",
        answer: "Operating without required GST registration can result in a penalty of 100% of the tax amount due, or a minimum of Rs. 10,000, whichever is naturally higher."
      },
      {
        question: "Is GST Registration Mandatory?",
        answer: "Yes, it is mandatory for businesses engaging in inter-state supply, e-commerce operators, casual taxable persons, and anyone exceeding the threshold turnover."
      },
      {
        question: "How Much Time Does GST Registration Take?",
        answer: "Usually, the ARN is generated instantly, and the final GST Certificate is issued strictly within 3-7 working days provided all documents are accurate."
      }
    ],
    relatedServices: [
      { name: "Proprietorship Registration", slug: "/startup/proprietorship" },
      { name: "Private Limited Company", slug: "/startup/private-limited" },
      { name: "Trade License", slug: "/registrations/trade-license" }
    ]
  },
  "lut": {
    seo: {
      title: "Export Without IGST – GST LUT Filing Online | ZOO Filings",
      description: "Apply for GST LUT easily to supply goods or services without payment of IGST. Expert guidance for Letter of Undertaking on the GST portal."
    },
    hero: {
      title: "GST LUT Filing (Letter of Undertaking)",
      description: "File your GST LUT online to export goods or services without payment of IGST. Get expert assistance and seamless compliance for the financial year."
    },
    whatsappPackageName: "GST LUT Filing",
    inclusions: [
      { title: "Preparation of LUT Application", icon: "FileText" },
      { title: "Filing of LUT on GST Portal", icon: "Activity" },
      { title: "LUT Acknowledgement Certificate", icon: "CheckCircle2" },
      { title: "Export without payment of IGST", icon: "TrendingUp" }
    ],
    requiredDocuments: [
      "GSTIN Registration Certificate",
      "IEC (Import Export Code) Certificate",
      "PAN Card and KYC of Authorized Signatory",
      "ID Proof and PAN of Two Independent Witnesses",
      "Digital Signature Certificate (DSC)"
    ],
    features: [
      {
        title: "Zero Tax Export Operations",
        description: "Allows you to export goods and services without the upfront payment of IGST, freeing up crucial working capital."
      },
      {
        title: "Simplified Compliance",
        description: "Once filed, the LUT is valid for the entire financial year, eliminating the need to pay tax and claim refunds on every export."
      },
      {
        title: "Avoid Refund Delays",
        description: "Bypass the lengthy and tedious process of IGST refund claims which can lock up essential business funds for months."
      },
      {
        title: "SEZ Supply Support",
        description: "Obtain smooth clearance for supplies made directly to Special Economic Zones (SEZ) without any payment of integrated tax."
      }
    ],
    pricing: [
      {
        name: "GST LUT Filing",
        description: "Filing of GST LUT Form for Exporters for the specific financial year.",
        price: "₹2,899",
        subtitle: "+ GST",
        features: [
          "Preparation of LUT Application",
          "Filing of LUT on GST Portal",
          "LUT Acknowledgement (FY-wise)",
          "Export/SEZ Invoice generation",
          "Compliance Reminder Alerts"
        ],
        isPopular: false
      },
      {
        name: "1 Year GST Filing",
        description: "Get a dedicated GST Professional to handle your GST return filings accurately.",
        price: "₹7,899",
        subtitle: "+ GST",
        features: [
          "LEDGERS GST Software",
          "12 Months GSTR-1 Filing",
          "12 Months GSTR-3B Filing",
          "LUT Status Monitoring",
          "Dedicated Accountant Support"
        ],
        isPopular: false
      },
      {
        name: "1 Year GST Filing + ITR",
        description: "Customized accounting services for businesses with turnover up to 40 lakhs.",
        price: "₹19,899",
        subtitle: "+ GST",
        features: [
          "Dedicated Accountant",
          "GSTR-1 & 3B Filing – 12 Months",
          "Income Tax Filing",
          "Financial Statements",
          "LEDGERS Software - 1 Year"
        ],
        isPopular: true
      }
    ],
    faqs: [
      {
        question: "What is the full form of LUT in GST?",
        answer: "LUT stands for Letter of Undertaking under the Goods and Services Tax (GST) landscape."
      },
      {
        question: "What is LUT in export and why is it important?",
        answer: "It is a document that exporters can file to export goods or services without having to pay IGST upfront. It prevents the blockage of working capital."
      },
      {
        question: "How long is a GST LUT valid?",
        answer: "A Letter of Undertaking is valid for one entire financial year. It must be renewed at the beginning of each new financial year."
      },
      {
        question: "Is it mandatory to file GST LUT?",
        answer: "Yes, if you wish to export goods or services or make supplies to an SEZ without paying IGST, filing the LUT is legally mandatory."
      }
    ],
    relatedServices: [
      { name: "GST Registration", slug: "/gst/gst_registration" },
      { name: "IEC Registration", slug: "/registrations/iec" },
      { name: "Trade License", slug: "/registrations/trade-license" }
    ]
  },
  "e-filing": {
    seo: {
      title: "Income Tax Return (ITR) e-Filing Online | ZOO Filings",
      description: "File your Income Tax Return online with dedicated tax experts. We handle document verification, tax computation, filing and compliance smoothly."
    },
    hero: {
      title: "Income Tax Return (ITR) e-Filing",
      description: "File your Income Tax Return (ITR) online with expert assistance. Ensure accurate filing, maximum tax savings and timely compliance with complete support."
    },
    whatsappPackageName: "ITR e-Filing",
    inclusions: [
      { title: "Complete ITR preparation & review", icon: "FileText" },
      { title: "Form 16 & document verification", icon: "ShieldCheck" },
      { title: "Quick ITR filing & acknowledgement", icon: "CheckCircle2" },
      { title: "Expert support for notices", icon: "User" },
      { title: "Tax planning & optimisation", icon: "TrendingUp" }
    ],
    requiredDocuments: [
      "PAN Card and linked Aadhaar Card",
      "Form 16 / Form 16A from your Employer or Deductor",
      "Bank Statements for the entire Financial Year",
      "Investment Proofs (80C, 80D, Home Loan interest, etc.)",
      "Form 26AS, AIS (Annual Information Statement), and TIS"
    ],
    features: [
      {
        title: "Accurate Tax Computation",
        description: "Our experts meticulously compute your income under all heads and ensure proper claiming of all eligible deductions."
      },
      {
        title: "Tax Optimisation",
        description: "Legally minimize your tax liability through structured tax planning strategies and intelligent old/new regime selection."
      },
      {
        title: "Notice Handling & Compliance",
        description: "Get dedicated professional support for handling Income Tax notices, rectification filings, and responding to department queries."
      },
      {
        title: "Dedicated CA Support",
        description: "A designated tax expert or Chartered Accountant will personally handle your documents and stay available year-round."
      }
    ],
    pricing: [
      {
        name: "Assisted Tax Filing",
        description: "Our experienced accountants manage your end-to-end ITR filing from document review to submission.",
        price: "₹2,899",
        subtitle: "+ GST",
        features: [
          "Document collection & review",
          "ITR form identification",
          "Income computation & basic deductions",
          "Tax liability computation",
          "ITR preparation & filing"
        ],
        isPopular: false
      },
      {
        name: "CA Assisted Tax Filing",
        description: "A qualified Chartered Accountant personally handles your tax return from document review to filing.",
        price: "₹12,899",
        subtitle: "+ GST",
        features: [
          "Dedicated CA assigned to you",
          "Capital gains computation (equity/MF/property)",
          "Tax optimisation & regime selection",
          "Form 26AS/AIS/TIS reconciliation",
          "Priority CA support (chat/call)"
        ],
        isPopular: true
      },
      {
        name: "CA Managed Tax Compliance",
        description: "A Dedicated CA manages your complete compliance lifecycle with year-round availability.",
        price: "₹19,899",
        subtitle: "+ GST",
        features: [
          "Annual tax planning session",
          "Advance tax computation & reminders",
          "DTAA & foreign asset reporting",
          "Income Tax Notice handling",
          "Year-round CA availability"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What does e-Filing an Income Tax Return (ITR) mean?",
        answer: "e-Filing is the process of electronically submitting your Income Tax Return to the Income Tax Department through secure digital platforms."
      },
      {
        question: "Why is it important to e-file your ITR?",
        answer: "It ensures legal compliance, helps in the quick processing of tax refunds, avoids penalties, and serves as standard proof of income for loan applications and visas."
      },
      {
        question: "Who is eligible to file an Income Tax Return in India?",
        answer: "Any individual whose gross total income exceeds the basic exemption limit (Rs. 3 Lakhs in the New Tax Regime) is required to file an ITR."
      },
      {
        question: "If my employer deducts TDS, do I still need to file an ITR?",
        answer: "Yes. TDS is merely the tax deducted at the source; filing the ITR is the formal declaration of your final overall tax liability for the year."
      },
      {
        question: "What is a Nil ITR, and Who Needs to File It?",
        answer: "A Nil ITR shows that your tax liability is zero. It is filed by individuals below the taxable limit who wish to carry forward business losses or claim refunds on deducted TDS."
      }
    ],
    relatedServices: [
      { name: "GST Registration", slug: "/gst/gst_registration" },
      { name: "GST LUT Filing", slug: "/gst/lut" },
      { name: "Proprietorship Registration", slug: "/startup/proprietorship" }
    ]
  },
  "partnership-firm-llp-itr": {
    seo: {
      title: "Partnership Firm & LLP Tax Filing Online | ZOO Filings",
      description: "File your Partnership Firm or LLP Income Tax Return online with dedicated tax experts. We handle document verification, tax computation, and compliance."
    },
    hero: {
      title: "Partnership Firm / LLP Tax Filing",
      description: "File your Income Tax Return (ITR) online with expert assistance. Ensure accurate filing, maximum tax savings and timely compliance with complete support."
    },
    whatsappPackageName: "Partnership Firm / LLP ITR",
    inclusions: [
      { title: "Complete ITR preparation & review", icon: "FileText" },
      { title: "Financial data review & reconciliation", icon: "Activity" },
      { title: "Quick ITR filing & acknowledgement", icon: "CheckCircle2" },
      { title: "Expert support for notices", icon: "ShieldCheck" },
      { title: "Tax planning & optimisation", icon: "TrendingUp" }
    ],
    requiredDocuments: [
      "Partnership Deed or LLP Agreement",
      "PAN Card of the Firm/LLP and all respective Partners",
      "Bank Statements of the Firm/LLP for the Financial Year",
      "Profit & Loss Account and Balance Sheet",
      "Audit Report (if turnover exceeds the tax audit threshold)"
    ],
    features: [
      {
        title: "Comprehensive Compliance",
        description: "Ensures accurate and robust filing of your Partnership Firm or LLP tax returns in strict compliance with the Income Tax Act."
      },
      {
        title: "Dedicated Tax Professional",
        description: "Get a dedicated Chartered Accountant for personalized tax planning, advance tax computation, and active reminders."
      },
      {
        title: "Detailed Reconciliation",
        description: "Meticulous review of your financial data, Form 26AS, AIS, and TIS to prevent any notice from the income tax department."
      },
      {
        title: "Audit & Notice Support",
        description: "Expert representation and professional drafting of responses for any Income Tax notices or rectification filings."
      }
    ],
    pricing: [
      {
        name: "Assisted Tax Filing",
        description: "Our experienced accountants manage your end-to-end ITR filing from document review to submission.",
        price: "₹5,899",
        subtitle: "+ GST",
        features: [
          "Document collection & review",
          "ITR form identification",
          "Income computation",
          "Tax liability computation",
          "ITR preparation & filing"
        ],
        isPopular: false
      },
      {
        name: "CA Assisted Tax Filing",
        description: "A qualified Chartered Accountant personally handles your tax return from document review to filing.",
        price: "₹12,899",
        subtitle: "+ GST",
        features: [
          "Dedicated CA assigned to you",
          "Income from all business heads",
          "Advance tax review & advisory",
          "Form 26AS/AIS/TIS reconciliation",
          "Priority CA support (chat/call)"
        ],
        isPopular: true
      },
      {
        name: "CA Managed Tax Compliance",
        description: "A Dedicated CA manages your complete compliance lifecycle with year-round availability.",
        price: "₹19,899",
        subtitle: "+ GST",
        features: [
          "Annual tax planning session",
          "Advance tax & reminders",
          "Income Tax Notice handling",
          "Refund tracking",
          "Year-round CA availability"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is the ITR 3 form?",
        answer: "ITR-3 is the Income Tax Return form used by individuals and HUFs having income from profits and gains of business or profession."
      },
      {
        question: "Who should file the ITR-3 form?",
        answer: "Individuals earning income from carrying on a proprietary business or profession need to file ITR-3. (Note: Partnership Firms and LLPs generally use ITR-5)."
      },
      {
        question: "What documents are required to file business ITRs?",
        answer: "Essential documents include your PAN array, Aadhaar, Bank statements, Profit & Loss statement, Balance Sheet, Audit report (if applicable), and Form 26AS/AIS."
      },
      {
        question: "Can I claim deductions in business ITR forms?",
        answer: "Yes, you can claim business-related operational expenses correctly and standard general deductions under Chapter VI-A such as Section 80C, 80D, etc."
      }
    ],
    relatedServices: [
      { name: "ITR e-Filing", slug: "/incometax/e-filing" },
      { name: "Proprietorship Registration", slug: "/startup/proprietorship" },
      { name: "Private Limited Company", slug: "/startup/private-limited" }
    ]
  },
  "company": {
    seo: {
      title: "Company Annual Filing & ROC Compliance | ZOO Filings",
      description: "Ensure your Private Limited Company stays compliant with AOC-4, MGT-7, and ITR-6 filings. Get expert assistance for annual returns."
    },
    hero: {
      title: "Company Annual Filing & ROC Compliance",
      description: "Company Annual Filing, mandated by the Companies Act, 2013, requires all registered companies, including Private Limited, to submit financial statements (AOC-4) and annual returns (MGT-7/MGT-7A) to the Registrar of Companies."
    },
    whatsappPackageName: "Company Annual Filing",
    inclusions: [
      { title: "AOC-4 & MGT-7 Filing", icon: "FileText" },
      { title: "DIN-3 KYC Assistance", icon: "User" },
      { title: "ITR-6 Filing Support", icon: "ShieldCheck" },
      { title: "Dedicated Compliance Manager", icon: "Activity" },
      { title: "LEDGERS Accounting Software", icon: "ShieldCheck" }
    ],
    requiredDocuments: [
      "Financial Statements (Profit & Loss Account and Balance Sheet)",
      "Audit Report from Statutory Auditor",
      "Director's Report",
      "Board Meeting Minutes",
      "Notice of Annual General Meeting (AGM)",
      "Digital Signature Certificate (DSC) of Directors"
    ],
    features: [
      {
        title: "End-to-End Compliance",
        description: "We handle everything from bookkeeping to MCA and Income Tax filings, ensuring your company remains in good standing."
      },
      {
        title: "Dedicated Advisor",
        description: "Get personalized guidance from a compliance expert to navigate complex regulatory requirements."
      },
      {
        title: "Automated Bookkeeping",
        description: "Manage your accounts efficiently using our LEDGERS platform, integrated with your annual filings."
      },
      {
        title: "Seamless Renewal",
        description: "Choose from multi-year packages to simplify your long-term compliance planning and save on costs."
      }
    ],
    pricing: [
      {
        name: "MCA Compliance - 1 Year",
        description: "Maintain accounts, MCA and Income Tax compliance for your company for one year.",
        price: "₹19,899",
        subtitle: "+ GST",
        features: [
          "MCA Annual Filing (AOC-4 & MGT-7)",
          "ITR-6 Return Filing",
          "DIR-3 Filing for Directors",
          "Dedicated Compliance Advisor",
          "Dedicated Accountant",
          "LEDGERS Accounting Software"
        ],
        isPopular: false
      },
      {
        name: "MCA Compliance - 2 Years",
        description: "Complete compliance coverage for two years with dedicated support.",
        price: "₹29,899",
        subtitle: "+ GST",
        features: [
          "MCA Annual Filing (AOC-4 & MGT-7)",
          "ITR-6 Return Filing",
          "DIR-3 Filing for Directors",
          "Dedicated Compliance Advisor",
          "Dedicated Accountant",
          "LEDGERS Accounting Software"
        ],
        isPopular: true
      },
      {
        name: "MCA Compliance - 3 Years",
        description: "Long-term compliance peace of mind for three years at the best value.",
        price: "₹45,899",
        subtitle: "+ GST",
        features: [
          "MCA Annual Filing (AOC-4 & MGT-7)",
          "ITR-6 Return Filing",
          "DIR-3 Filing for Directors",
          "Dedicated Compliance Advisor",
          "Dedicated Accountant",
          "LEDGERS Accounting Software"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What are the filings for the company?",
        answer: "Every registered company must file its Financial Statements (AOC-4) and Annual Return (MGT-7/MGT-7A) with the Registrar of Companies annually."
      },
      {
        question: "What are the compliances of a Private Limited Company?",
        answer: "Key compliances include maintaining books of accounts, statutory audit, holding Board Meetings and AGM, and filing annual returns with MCA and Income Tax department."
      },
      {
        question: "Is it mandatory to get a Private Limited Company audited?",
        answer: "Yes, under the Companies Act 2013, it is mandatory for every Private Limited Company to have its accounts audited by a qualified Chartered Accountant."
      },
      {
        question: "Is it necessary to conduct AGM?",
        answer: "Yes, every company must hold an Annual General Meeting once a year to discuss financial performance, appoint auditors, and other statutory matters."
      },
      {
        question: "When is annual return to be filed after the AGM?",
        answer: "The annual return (MGT-7) must be filed within 60 days of the AGM, while the financial statement (AOC-4) must be filed within 30 days of the AGM."
      }
    ],
    relatedServices: [
      { name: "Private Limited Company", slug: "/startup/private-limited" },
      { name: "One Person Company", slug: "/startup/opc" },
      { name: "Limited Liability Partnership", slug: "/startup/llp" }
    ]
  },
  "business": {
    seo: {
      title: "Business Plan Preparation Services Online | ZOO Filings",
      description: "Prepare an investor-ready business plan, pitch deck, and financial model to secure funding and guide your business growth."
    },
    hero: {
      title: "Business Plan Preparation Services",
      description: "Prepare a detailed and investor-ready business plan to outline your goals, strategies and financial projections. Develop a comprehensive plan including operational strategy and market research to secure funding."
    },
    whatsappPackageName: "Business Plan Service",
    inclusions: [
      { title: "Market Analysis & Research", icon: "Search" },
      { title: "Financial Projections Included", icon: "TrendingUp" },
      { title: "Investor & Bank Loan Ready", icon: "ShieldCheck" },
      { title: "Detailed Business Strategy", icon: "FileText" },
      { title: "Custom Industry-Tailored Plan", icon: "CheckCircle2" }
    ],
    requiredDocuments: [
      "Company Profile or Business Concept Note",
      "Details of Promoters and Management Team",
      "Past Financial Statements (if applicable)",
      "Projections for Revenue and Expenses",
      "Market Competition and Target Audience Details",
      "Product or Service Portfolio"
    ],
    features: [
      {
        title: "Trusted by 3L+ Businesses",
        description: "IndiaFilings is India's leading platform for business registration, compliance & certification services with over 10 years of expertise."
      },
      {
        title: "Dedicated Expert Support",
        description: "We provide a single point of contact for all your business plan requirements, ensuring personalized strategy development."
      },
      {
        title: "100% Online Tracking",
        description: "Our LEDGERS platform lets you track the progress of your business plan development and share documents in a streamlined dashboard."
      },
      {
        title: "Investor-Ready Quality",
        description: "Every plan is designed to be bank-loan and investor-ready, featuring professional formatting and rigorous financial modeling."
      }
    ],
    pricing: [
      {
        name: "Pitch Deck",
        description: "A professional pitch deck essential for business owners to raise equity funding.",
        price: "₹50,000",
        subtitle: "+ GST",
        features: [
          "Professional PPT Presentation",
          "Comprehensive Market Research",
          "Visual Storytelling",
          "Investor Communication Support"
        ],
        isPopular: false
      },
      {
        name: "Financial Model",
        description: "Detailed business analysis and projections to secure loans or investments.",
        price: "₹1,00,000",
        subtitle: "+ GST",
        features: [
          "In-depth Business Analysis",
          "Complex Excel Financial Model",
          "5-Year Financial Projections",
          "Scenario & Sensitivity Analysis"
        ],
        isPopular: true
      },
      {
        name: "Loan Syndication",
        description: "The complete package including pitch deck and financial model for raising debt/equity.",
        price: "₹1,00,000",
        subtitle: "+ GST",
        features: [
          "Complete Pitch Deck",
          "Detailed Financial Model",
          "Loan Syndication Support",
          "Full Investor Documentation"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is a business plan?",
        answer: "A business plan is a formal document that outlines a business's goals, the strategies for achieving them, and the time frame for their completion."
      },
      {
        question: "Why is a business plan important?",
        answer: "It serves as a roadmap for the business, helps in securing funding from investors or banks, and provides a structured framework for operational growth."
      },
      {
        question: "What are the key elements of a business plan?",
        answer: "Key elements include an Executive Summary, Market Analysis, Operational Strategy, Management Profile, and detailed Financial Projections."
      },
      {
        question: "How does a business plan help in securing funding?",
        answer: "It demonstrates to investors and lenders that the business has a clear strategy, understands its market, and has a viable path to profitability."
      },
      {
        question: "How often should a business plan be updated?",
        answer: "A business plan should be reviewed and updated at least once a year, or whenever there is a significant shift in the market or business model."
      }
    ],
    relatedServices: [
      { name: "Private Limited Company", slug: "/startup/private-limited" },
      { name: "Trademark Registration", slug: "/trademark/registration" },
      { name: "Company Annual Filing", slug: "/mca/company" }
    ]
  },
  "bookkeeping": {
    seo: {
      title: "Online Accountant & Bookkeeping Services in India | ZOO Filings",
      description: "Get fractional accountant services for GST, Income Tax, and ROC filings. Expert financial management with LEDGERS integration for SMEs."
    },
    hero: {
      title: "Online Accountant & Bookkeeping Services",
      description: "Our Online Accountant service brings you the expertise of highly experienced accountants to ensure your business stays compliant and thrives financially. Whether it's GST reforms, complex payroll, or regulatory requirements, we provide comprehensive support."
    },
    whatsappPackageName: "Bookkeeping Service",
    inclusions: [
      { title: "GST & TDS Compliance", icon: "CheckCircle2" },
      { title: "Payroll Management", icon: "Users" },
      { title: "Income Tax Management", icon: "TrendingUp" },
      { title: "Advanced LEDGERS Integration", icon: "Activity" },
      { title: "Dedicated Professional Support", icon: "User" }
    ],
    requiredDocuments: [
      "Bank Statements (Excel/PDF or Net Banking Access)",
      "Sales and Purchase Invoices / Bills",
      "Expense Receipts and Payment Vouchers",
      "Previous Year's Financial Statements and Tax Returns",
      "Access to GST/ITR Portals (if filing services required)",
      "Employee Payroll and Salary Details"
    ],
    features: [
      {
        title: "Expertise at Your Fingertips",
        description: "Gain access to a team of professional accountants experienced in handling diverse business accounting needs for startups and SMEs."
      },
      {
        title: "Advanced Tech Integration",
        description: "Harness the power of our LEDGERS software for real-time financial insights, detailed reports, and comprehensive analytics."
      },
      {
        title: "Compliance and Accuracy",
        description: "Stay compliant with Indian tax laws. Our accountants ensure your records are accurate, reducing the risk of non-compliance penalties."
      },
      {
        title: "Strategic Financial Advice",
        description: "Benefit from expert advice on financial planning and risk management, crucial for your business's long-term growth and stability."
      }
    ],
    pricing: [
      {
        name: "Basic Bookkeeping",
        description: "Ideal for small businesses with limited monthly transactions.",
        price: "₹2,499",
        subtitle: "Per Month",
        features: [
          "Record up to 50 Transactions",
          "Account Reconciliations",
          "Monthly Profit & Loss Report",
          "Basic Support",
          "LEDGERS Access"
        ],
        isPopular: false
      },
      {
        name: "Standard Package",
        description: "Comprehensive accounting and tax compliance for growing businesses.",
        price: "₹7,999",
        subtitle: "Per Month",
        features: [
          "Record up to 200 Transactions",
          "GST & TDS Management",
          "Payroll for up to 10 Employees",
          "Quarterly Review Meeting",
          "Priority Technical Support"
        ],
        isPopular: true
      },
      {
        name: "Premium / Fractional",
        description: "Full-scale financial management with a dedicated fractional accountant.",
        price: "₹14,999",
        subtitle: "Per Month",
        features: [
          "Unlimited Transactions",
          "Dedicated Accountant",
          "Advanced Financial Reporting",
          "Tax Audit Support",
          "Virtual CFO Consultation"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is a fractional accountant service?",
        answer: "A fractional accountant provides high-level financial expertise on a part-time or project basis, allowing you to access top-tier skills without the cost of a full-time hire."
      },
      {
        question: "How do I share my data with the online accountant?",
        answer: "You can securely upload your bank statements, invoices, and expense details directly through our LEDGERS dashboard or email them to your dedicated manager."
      },
      {
        question: "Does the service include filing of tax returns?",
        answer: "Yes, depending on your chosen plan, our service includes the preparation and filing of GST, TDS, and seasonal Income Tax returns."
      },
      {
        question: "Can I use my existing accounting software?",
        answer: "While we recommend our integrated LEDGERS platform for maximum efficiency, we can coordinate with other popular systems during our initial transition phase."
      },
      {
        question: "What is the frequency of financial reporting?",
        answer: "We provide monthly financial statements, including Profit & Loss and Balance Sheets, and real-time insights are always available on the dashboard."
      }
    ],
    relatedServices: [
      { name: "Company Annual Filing", slug: "/mca/company" },
      { name: "GST Registration", slug: "/gst/gst_registration" },
      { name: "ITR e-Filing", slug: "/incometax/e-filing" }
    ]
  },
  "uae": {
    seo: {
      title: "UAE Company Formation & Setup Online | ZOO Filings",
      description: "Incorporate your business in the UAE with complete support for Free Zone and Mainland setup. We handle licensing, visas, and banking."
    },
    hero: {
      title: "UAE Company Formation",
      description: "Incorporate your business in the UAE with complete support across Free Zone and Mainland jurisdictions. We handle licensing, documentation, visas, and banking to ensure a smooth and compliant company setup process."
    },
    whatsappPackageName: "UAE Company Formation",
    inclusions: [
      { title: "Free Zone & Mainland Setup", icon: "Building2" },
      { title: "Trade License Issuance", icon: "FileText" },
      { title: "Shareholder & Visa Support", icon: "Users" },
      { title: "Bank Account Assistance", icon: "CheckCircle2" },
      { title: "End-to-End Compliance", icon: "ShieldCheck" }
    ],
    requiredDocuments: [
      "Passport copies of all Shareholders and Directors",
      "UAE Entry Stamp or Visa copy (if applicable)",
      "Proof of Residential Address (Utility Bill)",
      "Suggested Company Names (3 Options)",
      "Professional Resume/CV of Shareholders",
      "Bank Reference Letter"
    ],
    features: [
      {
        title: "100% Repatriation of Profits",
        description: "Enjoy zero personal and corporate income tax (for most businesses) and full repatriation of capital and profits in the UAE."
      },
      {
        title: "Strategic Global Hub",
        description: "Connect with markets across Asia, Europe, and Africa through a world-class business environment and infrastructure."
      },
      {
        title: "Residency & Visa Benefits",
        description: "Secure long-term residency visas for you, your employees, and your family members as part of the company setup process."
      },
      {
        title: "Bank Account Assistance",
        description: "We help you navigate the requirements of UAE local and international banks to ensure a smooth business account opening."
      }
    ],
    pricing: [
      {
        name: "UAE Freezone License",
        description: "Standard Free-zone setup for businesses with no physical office requirement.",
        price: "AED 5,500",
        subtitle: "Inclusive of VAT",
        features: [
          "1 Year Trade License",
          "UAE Business Expert",
          "Flexi Desk",
          "Corporate Tax Registration",
          "Corporate Tax Filing Support"
        ],
        isPopular: false
      },
      {
        name: "Freezone License - 1 Visa",
        description: "Free-zone company setup including one residence visa and establishment card.",
        price: "AED 12,010",
        subtitle: "Inclusive of VAT",
        features: [
          "1 Year Trade License",
          "Establishment Card",
          "2 Year Residence Permit",
          "Employment Card",
          "Medical & ID Support"
        ],
        isPopular: true
      },
      {
        name: "Dubai Freezone License",
        description: "Premium setup in Dubai Free-zones with flexible desk and expert support.",
        price: "AED 12,500",
        subtitle: "Inclusive of VAT",
        features: [
          "1 Year Dubai Trade License",
          "UAE Business Expert Assistance",
          "Flexi Desk for 1 Year",
          "Document Legalization Support",
          "Priority Processing"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "What is the difference between UAE Free Zone and Mainland?",
        answer: "Free Zone companies allow 100% foreign ownership but have restrictions on trading within the UAE mainland. Mainland companies allow you to trade anywhere in the UAE but often require a local partner (though rules are relaxing)."
      },
      {
        question: "Is there any corporate tax in UAE?",
        answer: "The UAE has introduced a 9% corporate tax on business profits exceeding AED 375,000, though many Free Zone companies may still qualify for a 0% rate."
      },
      {
        question: "How long does it take to register a company in UAE?",
        answer: "Registering a company in a Free Zone can take anywhere from 3 to 10 working days, depending on the specific authority and type of license."
      },
      {
        question: "Can I get a residence visa by starting a company?",
        answer: "Yes, starting a company in the UAE entitles the owners and employees to apply for residence visas, which are usually valid for 2 years."
      }
    ],
    relatedServices: [
      { name: "Indian Subsidiary", slug: "/startup/indian-subsidiary" },
      { name: "Private Limited Company", slug: "/startup/private-limited" },
      { name: "Trademark Registration", slug: "/trademark/registration" }
    ]
  },
  "singapore": {
    seo: {
      title: "Singapore Company Registration Online | ZOO Filings",
      description: "Fast and professional Singapore company registration. Benefit from low corporate taxes, global credibility, and 100% foreign ownership."
    },
    hero: {
      title: "Singapore Company Registration",
      description: "Singapore is known for its strong banking system, transparent regulations, low corporate tax rates, and global credibility. We provide complete assistance from incorporation to compliance for international entrepreneurs."
    },
    whatsappPackageName: "Singapore Registration",
    inclusions: [
      { title: "Online Registration & Fast Process", icon: "Activity" },
      { title: "Nominee Director Support", icon: "User" },
      { title: "100% Foreign Ownership", icon: "ShieldCheck" },
      { title: "Corporate Tax Registration", icon: "FileText" },
      { title: "Global Business Hub Status", icon: "Globe" }
    ],
    requiredDocuments: [
      "Passport copies of all Shareholders and Directors",
      "Proof of Residential Address (Utility Bill/Bank Statement)",
      "Company Name (Must be approved by ACRA)",
      "Brief Description of Business Activities",
      "Registered Office Address in Singapore",
      "Director's Resolution and Statutory Declarations"
    ],
    features: [
      {
        title: "Attractive Tax Benefits",
        description: "Benefit from Singapore’s low corporate tax rate and generous tax exemptions for newly incorporated companies during their first three years."
      },
      {
        title: "Ease of Doing Business",
        description: "Ranked as one of the easiest places in the world to do business, with a transparent legal system and efficient government regulations."
      },
      {
        title: "Global Credibility",
        description: "Operate from a premier financial hub that offers world-class infrastructure and a strong network of over 100 double taxation avoidances."
      },
      {
        title: "100% Foreign Ownership",
        description: "Foreigners can own 100% of the shares of a Singapore company without requiring a local co-owner or partner."
      }
    ],
    pricing: [
      {
        name: "Standard Setup",
        description: "Basic incorporation for residents or those with a local director.",
        price: "SGD 999",
        subtitle: "All inclusive",
        features: [
          "Company Name Approval",
          "ACRA Filing & Incorporation",
          "Company Constitution",
          "Business Profile (BizFile)",
          "Standard Corporate Secretarial (1 yr)"
        ],
        isPopular: false
      },
      {
        name: "Premium Package",
        description: "Complete setup including Nominee Director and Registered Office.",
        price: "SGD 2,499",
        subtitle: "All inclusive",
        features: [
          "Everything in Standard",
          "Nominee Director Service (1 yr)",
          "Registered Office Address",
          "Bank Account Opening Support",
          "EP / Visa Consultation"
        ],
        isPopular: true
      },
      {
        name: "Full Compliance Care",
        description: "Incorporation plus first year of accounting and tax compliance.",
        price: "SGD 4,899",
        subtitle: "All inclusive",
        features: [
          "Everything in Premium",
          "Annual GST Return Filing",
          "Corporate Tax Filing (Form C/C-S)",
          "Audited/Unaudited Financials",
          "Unlimited Support"
        ],
        isPopular: false
      }
    ],
    faqs: [
      {
        question: "Can a foreigner own 100% of a Singapore company?",
        answer: "Yes, Singapore law allows foreigners to own 100% of the share capital of a locally incorporated company."
      },
      {
        question: "Is a local director required?",
        answer: "Yes, every Singapore company must have at least one director who is 'ordinarily resident' in Singapore (citizen, permanent resident, or EntrePass holder)."
      },
      {
        question: "How long does it take to register a company in Singapore?",
        answer: "Once all documents are submitted and the name is approved, the actual incorporation via ACRA can often be completed in less than 24 hours."
      },
      {
        question: "What is the corporate tax rate in Singapore?",
        answer: "Singapore has a flat corporate tax rate of 17% on chargeable income, with significant exemptions for startups and small-to-medium enterprises."
      }
    ],
    relatedServices: [
      { name: "UAE Company Formation", slug: "/global/uae" },
      { name: "Indian Subsidiary", slug: "/startup/indian-subsidiary" },
      { name: "Trademark Registration", slug: "/trademark/registration" }
    ]
  }
};
