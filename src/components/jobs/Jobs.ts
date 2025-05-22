import Job from "@/types/Job";

const jobs: Job[] = [
  {   
    title: "Founder",
    company: "Of Merchants and Monks",
    date: "07/24 \n - \n 04/25",
    description: `Designed and developed a prototype backpack-defense management, with emphasis on UI/UX and system design. Coordinated and collaborated with peers from diverse disciplines to refine the game vision and prototyping.`,
    tags: [
      "Godot",
      "C#",
      "Inkle",
      "UI/UX",
    ],
  },
  {
    title: "Fullstack Software Engineer",
    company: "Itemis AG",
    date: "07/21  \n - \n  07/24",
    description: `Led development of high-traffic retail storefront microservices using AWS serverless architecture and TypeScript. Improved UX through close collaboration with design and product teams. Managed stakeholder relationships and coordinated efforts across partner organizations. Scaled team from 1 to 8 by mentoring junior developers. Built a secure private video streaming platform with custom encryption and 2FA. Automated DevOps pipelines to improve integration and testing reliability.`,
    tags: [
      "AWS",
      "TypeScript",
      "VueJS",
      "NoSQL",
      "WebSockets",
      "GitHub Actions",
    ],
  },
  {
    title: "Software Engineer II",
    company: "Wayfair",
    date: "10/18  \n - \n  04/21",
    description: `Developed fullstack applications to manage incident resolution and coordinate dependencies using SQL, Flask, and React. Designed event-driven microservice architecture with Kafka and Schema Registry. Built an internal library for standardized event processing. Established Google Cloud access via Terraform, improving deployment flexibility.`,
    tags: [
      "SQL",
      "Flask",
      "React",
      "Python",
      "Kafka",
      "Terraform",
      "Google Cloud",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "IBM",
    date: "06/17  \n - \n  03/18",
    description: `Automated infrastructure provisioning using Ruby and Java, improving DevBox spin-up performance. Refactored deployment scripts, reducing costs by $55,000/month. Migrated legacy servers to a private OpenStack cloud and implemented Docker containerization.`,
    tags: [
      "DevOps",
      "Ruby",
      "Java",
      "Docker",
      "Infrastructure",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "NCR",
    date: "01/16  \n - \n  12/16",
    description: `Contributed to an agile team developing an embedded Android software solution in Java. Built a C# API for a server-side IIS component and Java endpoints using Protocol Buffers. Investigated potential graphics libraries for system integration.`,
    tags: [
      "Java",
      "Android",
      "C#",
      "Qt",
      "Xamarin",
      "LibGDX",
    ],
  },
];

export default jobs;
