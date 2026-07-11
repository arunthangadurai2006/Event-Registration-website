const services = {
  catering: [
    {
      id: 1,
      name: "Sri Lakshmi Catering Service",
      owner: "Anita Sharma",
      rating: 4.8,
      experience: "9 years",
      phone: "+91 9986025142",
      location: "Hyderabad",
      description: "Traditional and modern catering services.",

      packages: [
        {
          title: "Standard Package",
          description: "Perfect for regular occasions.",
          price: "₹4,999"
        },
        {
          title: "Premium Package",
          description: "Premium food and decoration.",
          price: "₹9,999"
        },
        {
          title: "Consultation",
          description: "Planning session.",
          price: "₹999"
        }
      ],

      timings: [
        "09:00 AM",
        "11:00 AM",
        "02:00 PM",
        "05:00 PM"
      ]
    },  {
      id: 2,
      name: "Sri Lakshmi Catering Service",
      owner: "Anita Sharma",
      rating: 4.8,
      experience: "9 years",
      phone: "+91 9986025142",
      location: "Hyderabad",
      description: "Traditional and modern catering services.",

      packages: [
        {
          title: "Standard Package",
          description: "Perfect for regular occasions.",
          price: "₹4,999"
        },
        {
          title: "Premium Package",
          description: "Premium food and decoration.",
          price: "₹9,999"
        },
        {
          title: "Consultation",
          description: "Planning session.",
          price: "₹999"
        }
      ],

      timings: [
        "09:00 AM",
        "11:00 AM",
        "02:00 PM",
        "05:00 PM"
      ]
    },
     
  ],

  birthday: [
    {
      id: 1,
      name: "Birthday Decoration Service",
      owner: " Aanand",
      rating: 4.7,
      experience: "9 years",
      phone: "+91 9986025142",
      location: "Hyderabad",
      description: "Traditional and modern catering services.",

      packages: [
        {
          title: "Standard Package",
          description: "Perfect for regular occasions.",
          price: "₹4,999"
        },
        {
          title: "Premium Package",
          description: "Premium food and decoration.",
          price: "₹9,999"
        },
        {
          title: "Consultation",
          description: "Planning session.",
          price: "₹999"
        }
      ],

      timings: [
        "09:00 AM",
        "11:00 AM",
        "02:00 PM",
        "05:00 PM"
      ]
    }, {
  id: 2,
  name: "Royal Birthday Decoration Service",
  owner: "Ravi Kumar",
  rating: 4.5,
  experience: "6 yrs exp",
  phone: "+91 98450 15212",
  location: "MG Road, Vallioor",
  description: "Professional birthday decoration services with creative themes, balloon decorations, floral arrangements, and customized party setups.",

  packages: [
    {
      title: "Basic Decoration",
      description: "Balloon decoration with a simple backdrop.",
      price: "₹2,999"
    },
    {
      title: "Premium Decoration",
      description: "Theme decoration with balloons, flowers, and lighting.",
      price: "₹5,999"
    },
    {
      title: "Luxury Decoration",
      description: "Complete birthday setup with customized theme, entrance arch, cake table, and photography backdrop.",
      price: "₹9,999"
    }
  ],

  timings: [
    "09:00 AM",
    "11:00 AM",
    "02:00 PM",
    "05:00 PM"
  ]
},
     
  ],

  mehendi: [
    {
     id:1, 
      name: "Henna Tales by Zara",
      owner: "Anu Priya",
      rating: "4.3",
      experience: "6 yrs exp",
      phone: "+91 99860 25142",
      location: "Main Bustand, vallioor",
     
      packages: [
        {
          title: "Basic Mehendi",
          description: "Simple designs",
          price: "₹1,500"
        },
        {
          title: "Bridal Mehendi",
          description: "Full hand",
          price: "₹5,000"
        }
      ],

      timings: [
        "10:00 AM",
        "01:00 PM",
        "04:00 PM"
      ]
    },
  
    {
  id: 2,
  name: "Mehendi By Arthi",
  owner: "Arthi",
  rating: 4.7,
  experience: "2 yrs exp",
  phone: "+91 98450 15212",
  location: "Near Library, Vallioor",
  description: "Specialized in bridal, Arabic, and traditional mehendi designs for weddings and special occasions.",

  packages: [
    {
      title: "Basic Mehendi",
      description: "Simple and elegant designs for hands.",
      price: "₹1,200"
    },
    {
      title: "Bridal Mehendi",
      description: "Full bridal mehendi with intricate designs.",
      price: "₹4,500"
    }
  ],

  timings: [
    "09:30 AM",
    "12:30 PM",
    "03:30 PM",
    "06:00 PM"
  ]
}
  ],

  DJ: [
   {
  id: 1,
  name: "Jackson DJ Service",
  owner: "Jackson",
  rating: 4.2,
  experience: "2 yrs exp",
  phone: "+91 44851 85972",
  location: "IOB Bank Opposite, Vallioor",
  description: "Professional DJ service for weddings, birthdays, parties, and special events with high-quality sound systems and lighting.",

  packages: [
    {
      title: "Basic DJ Package",
      description: "DJ setup with sound system for small events.",
      price: "₹3,999"
    },
    {
      title: "Premium DJ Package",
      description: "DJ with advanced sound system, lighting, and music mixing.",
      price: "₹7,999"
    },
    {
      title: "Luxury DJ Package",
      description: "Complete DJ setup with LED lighting, smoke effects, and live music mixing.",
      price: "₹11,999"
    }
  ],

  timings: [
    "10:00 AM",
    "12:00 PM",
    "03:00 PM",
    "06:00 PM"
  ]
},
  
    
  {
  id: 2,
  name: "AK DJ Service",
  owner: "Arun Kumar",
  rating: 4.2,
  experience: "10 yrs exp",
  phone: "+91 98450 15212",
  location: "Old Main Road, Vallioor",
  description: "Professional DJ service for weddings, birthdays, receptions, college events, and private parties with high-quality sound and lighting.",

  packages: [
    {
      title: "Basic DJ Package",
      description: "DJ setup with sound system for small events.",
      price: "₹3,499"
    },
    {
      title: "Premium DJ Package",
      description: "DJ with premium sound system, lighting, and live music mixing.",
      price: "₹6,999"
    },
    {
      title: "Luxury DJ Package",
      description: "Complete DJ setup with LED dance floor lighting, smoke effects, and professional event support.",
      price: "₹10,999"
    }
  ],

  timings: [
    "10:00 AM",
    "12:00 PM",
    "03:00 PM",
    "06:00 PM"
  ]
}
  ],
    FunctionHall: [
   {
  id: 1,
  name: "Ram Cooking Service",
  owner: "Ram",
  rating: 4.7,
  experience: "22 yrs exp",
  phone: "+91 44851 85972",
  location: "New Bus Stand Opposite, Vallioor",
  description: "Experienced catering and cooking service for weddings, birthdays, housewarming ceremonies, and all special occasions with delicious vegetarian and non-vegetarian menus.",

  packages: [
    {
      title: "Basic Catering Package",
      description: "Traditional menu for small family functions.",
      price: "₹4,999"
    },
    {
      title: "Premium Catering Package",
      description: "Customized vegetarian and non-vegetarian menu with dessert.",
      price: "₹9,999"
    },
    {
      title: "Wedding Catering Package",
      description: "Complete catering service with multiple cuisines and live counters.",
      price: "₹19,999"
    }
  ],

  timings: [
    "08:00 AM",
    "11:00 AM",
    "02:00 PM",
    "05:00 PM"
  ]
},
  
    
 {
  id: 2,
  name: "Manikandan Cooking Service",
  owner: "Manikandan",
  rating: 4.5,
  experience: "6 yrs exp",
  phone: "+91 98450 15212",
  location: "Old Bus Stand, Vallioor",
  description: "Professional cooking and catering service for weddings, birthdays, housewarming ceremonies, and family functions with delicious vegetarian and non-vegetarian dishes.",

  packages: [
    {
      title: "Basic Catering Package",
      description: "Traditional menu for small gatherings and family events.",
      price: "₹3,999"
    },
    {
      title: "Premium Catering Package",
      description: "Customized menu with vegetarian and non-vegetarian options.",
      price: "₹7,999"
    },
    {
      title: "Wedding Catering Package",
      description: "Complete catering service with multiple cuisines, desserts, and live food counters.",
      price: "₹17,999"
    }
  ],

  timings: [
    "08:00 AM",
    "11:00 AM",
    "02:00 PM",
    "05:00 PM"
  ]
}
  ],

   Chef: [
 {
  id: 1,
  name: "Emerald Convention Hall",
  owner: "Rajesh",
  rating: 4.8,
  experience: "9 yrs exp",
  phone: "+91 99860 25142",
  location: "Main Road, Near Post Office",
  description: "Spacious convention hall for weddings, receptions, engagement ceremonies, birthday parties, corporate events, and other special occasions with modern amenities.",

  packages: [
    {
      title: "Basic Hall Package",
      description: "Hall rental with seating arrangement for small events.",
      price: "₹15,999"
    },
    {
      title: "Premium Hall Package",
      description: "Hall with decoration, lighting, stage setup, and sound system.",
      price: "₹29,999"
    },
    {
      title: "Luxury Event Package",
      description: "Complete event setup including premium decoration, air conditioning, parking, and event assistance.",
      price: "₹49,999"
    }
  ],

  timings: [
    "09:00 AM",
    "12:00 PM",
    "03:00 PM",
    "06:00 PM"
  ]
},
  
    
 {
  id: 2,
  name: "Sri Lakshmi Gardens",
  owner: "Venkat",
  rating: 4.7,
  experience: "4 yrs exp",
  phone: "+91 98450 15212",
  location: "MG Road, Near Ashoka, Vallioor",
  description: "Beautiful outdoor event venue for weddings, receptions, engagements, birthday celebrations, and family functions with spacious seating and modern facilities.",

  packages: [
    {
      title: "Basic Garden Package",
      description: "Garden venue with seating arrangements for small gatherings.",
      price: "₹19,999"
    },
    {
      title: "Premium Garden Package",
      description: "Garden venue with stage decoration, lighting, and sound system.",
      price: "₹34,999"
    },
    {
      title: "Luxury Garden Package",
      description: "Complete event setup with premium decoration, catering space, parking, and event management support.",
      price: "₹59,999"
    }
  ],

  timings: [
    "09:00 AM",
    "12:00 PM",
    "03:00 PM",
    "06:00 PM"
  ]
}
  ]
  , Makeup: [
 {
  id: 1,
  name: "Glam Studio by Priya",
  owner: "Priya Sharma",
  rating: 4.1,
  experience: "5 yrs exp",
  phone: "+91 99860 25142",
  location: "Near Police Station, Vallioor",
  description: "Professional makeup studio specializing in bridal makeup, party makeup, engagement makeup, reception makeup, and beauty services using premium products.",

  packages: [
    {
      title: "Party Makeup",
      description: "Professional party makeup with basic hairstyling.",
      price: "₹2,999"
    },
    {
      title: "Bridal Makeup",
      description: "HD bridal makeup with hairstyling, saree draping, and touch-up kit.",
      price: "₹9,999"
    },
    {
      title: "Premium Bridal Package",
      description: "Luxury bridal makeover including HD makeup, premium hairstyling, draping, and accessories.",
      price: "₹14,999"
    }
  ],

  timings: [
    "09:00 AM",
    "11:00 AM",
    "02:00 PM",
    "05:00 PM"
  ]
},
  
    
{
  id: 2,
  name: "Sharmi Makeovers",
  owner: "Sharmi",
  rating: 4.7,
  experience: "7 yrs exp",
  phone: "+91 98450 15212",
  location: "Court Opposite, Vallioor",
  description: "Professional makeup studio offering bridal makeup, engagement makeup, reception makeup, party makeup, and beauty services with premium-quality products.",

  packages: [
    {
      title: "Party Makeup",
      description: "Natural party makeup with basic hairstyling.",
      price: "₹2,499"
    },
    {
      title: "Bridal Makeup",
      description: "HD bridal makeup with hairstyling, saree draping, and touch-up kit.",
      price: "₹8,999"
    },
    {
      title: "Premium Bridal Package",
      description: "Complete bridal makeover with HD makeup, premium hairstyling, draping, and accessories.",
      price: "₹13,999"
    }
  ],

  timings: [
    "09:00 AM",
    "11:00 AM",
    "02:00 PM",
    "05:00 PM"
  ]
}],
 Photography: [
 {
  id: 1,
  name: "Glam Studio by Priya",
  owner: "Priya Sharma",
  rating: 4.1,
  experience: "5 yrs exp",
  phone: "+91 99860 25142",
  location: "Near Police Station, Vallioor",
  description: "Professional makeup studio specializing in bridal makeup, party makeup, engagement makeup, reception makeup, and beauty services using premium products.",

  packages: [
    {
      title: "Party Makeup",
      description: "Professional party makeup with basic hairstyling.",
      price: "₹2,999"
    },
    {
      title: "Bridal Makeup",
      description: "HD bridal makeup with hairstyling, saree draping, and touch-up kit.",
      price: "₹9,999"
    },
    {
      title: "Premium Bridal Package",
      description: "Luxury bridal makeover including HD makeup, premium hairstyling, draping, and accessories.",
      price: "₹14,999"
    }
  ],

  timings: [
    "09:00 AM",
    "11:00 AM",
    "02:00 PM",
    "05:00 PM"
  ]
},
  
    
{
  id: 2,
  name: "Royal Studio",
  owner: "Arun Kumar",
  rating: 4.5,
  experience: "3 yrs exp",
  phone: "+91 98450 15212",
  location: "Near Mercy School, Vallioor",
  description: "Professional photography and videography studio specializing in weddings, engagements, birthdays, receptions, and special events with high-quality editing and cinematic coverage.",

  packages: [
    {
      title: "Basic Photography Package",
      description: "Photography coverage with professionally edited digital photos.",
      price: "₹6,999"
    },
    {
      title: "Premium Photography Package",
      description: "Photography, videography, cinematic highlights, and premium album.",
      price: "₹13,999"
    },
    {
      title: "Luxury Wedding Package",
      description: "Complete wedding coverage with candid photography, cinematic video, drone shots, and premium photo album.",
      price: "₹27,999"
    }
  ],

  timings: [
    "09:00 AM",
    "11:00 AM",
    "02:00 PM",
    "05:00 PM"
  ]
}],

Stage: [
 {
  id: 1,
  name: "AK Decoration Service",
  owner: "Arun Kumar",
  rating: 4.2,
  experience: "10 yrs exp",
  phone: "+91 98450 15212",
  location: "Old Main Road, Vallioor",
  description: "Professional event decoration service for weddings, birthdays, engagements, receptions, housewarming ceremonies, and corporate events with creative themes and elegant decorations.",

  packages: [
    {
      title: "Basic Decoration Package",
      description: "Simple balloon decoration with a backdrop for small events.",
      price: "₹3,499"
    },
    {
      title: "Premium Decoration Package",
      description: "Theme decoration with balloons, flowers, stage setup, and lighting.",
      price: "₹6,999"
    },
    {
      title: "Luxury Decoration Package",
      description: "Complete event decoration with customized themes, entrance arch, LED lighting, floral arrangements, and premium stage setup.",
      price: "₹10,999"
    }
  ],

  timings: [
    "09:00 AM",
    "11:00 AM",
    "02:00 PM",
    "05:00 PM"
  ]
},
  
    
{
  id: 2,
  name: "Suresh Decoration Service",
  owner: "Suresh",
  rating: 4.2,
  experience: "2 yrs exp",
  phone: "+91 44851 85972",
  location: "IOB Bank Opposite, Vallioor",
  description: "Professional event decoration service specializing in weddings, birthdays, engagements, receptions, and other special occasions with creative themes and elegant decorations.",

  packages: [
    {
      title: "Basic Decoration Package",
      description: "Simple balloon decoration with a basic backdrop.",
      price: "₹2,999"
    },
    {
      title: "Premium Decoration Package",
      description: "Theme decoration with balloons, flowers, lighting, and stage setup.",
      price: "₹5,999"
    },
    {
      title: "Luxury Decoration Package",
      description: "Complete event decoration including customized theme, entrance arch, LED lighting, floral arrangements, and photography backdrop.",
      price: "₹9,999"
    }
  ],

  timings: [
    "09:00 AM",
    "11:00 AM",
    "02:00 PM",
    "05:00 PM"
  ]
}]
};

export default services;