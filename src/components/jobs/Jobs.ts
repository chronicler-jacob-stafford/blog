import Job from "@/types/Job";
import wayfairLogo from "@/assets/jobLogos/wayfair.png";
import ibmLogo from "@/assets/jobLogos/ibm.png";
import ncrLogo from "@/assets/jobLogos/ncr.png";
import itemisLogo from "@/assets/jobLogos/itemis.png";
import chroniclerLogo from "@/assets/jobLogos/chronicler.png";
const jobs: Job[] = [
  {   
    title: "Founder",
    company: "Chronicler",
    date: "07/24-04/25",
    description: `Designed and developed Of Merchants and Monks prototype backpack-defense management, with emphasis on UI/UX and system design. Utilized the Godot engine with C#. Coordinated and collaborated with peers from diverse disciplines to refine the game vision and prototyping.`,
    tags: [
      "Godot",
      "C#",
      "Inkle",
      "UI/UX",
      "EDD",
      "Game Design",
    ],
    logo: chroniclerLogo,
  },
  {
    title: "Fullstack Software Engineer",
    company: "Itemis AG",
    date: "07/21-07/24",
    description: `Led development of high-traffic retail storefront microservices using AWS serverless architecture and TypeScript. Improved UX through close collaboration with design and product teams. Managed stakeholder relationships and coordinated efforts across partner organizations. Scaled team from 1 to 8 by mentoring junior developers. Built a secure private video streaming platform with custom encryption and 2FA. Automated DevOps pipelines to improve integration and testing reliability.`,
    tags: [
      "TypeScript",
      "AWS",
      "VueJS",
      "NoSQL",
      "NodeJS",
      "Serverless",
    ],
    logo: itemisLogo,
  },
  {
    title: "Software Engineer",
    company: "Wayfair",
    date: "10/18-04/21",
    description: `Developed fullstack applications to manage incident resolution and coordinate dependencies using SQL, Flask, and React. Designed event-driven microservice architecture with Kafka and Schema Registry. Built an internal library for standardized event processing. Established Google Cloud access via Terraform, improving deployment flexibility.`,
    tags: [
      "Python",
      "Flask",
      "JavaScript",
      "React",
      "MySQL",
      "Kafka",
      "Terraform",
      "GCP",
    ],
    logo: wayfairLogo,
  },
  {
    title: "DevOps Engineer",
    company: "IBM",
    date: "06/17-03/18",
    description: `Automated infrastructure provisioning using Ruby and Java, improving DevBox spin-up performance. Refactored deployment scripts, reducing costs by $55,000/month. Migrated legacy servers to a private OpenStack cloud and implemented Docker containerization.`,
    tags: [
      "DevOps",
      "Ruby",
      "Java",
      "Docker",
      "OpenStack",
    ],
    logo: ibmLogo,
  },
  {
    title: "Software Engineer Intern",
    company: "NCR",
    date: "01/16-12/16",
    description: `Contributed to an agile team developing an embedded Android software solution in Java. Built a C# API for a server-side IIS component and Java endpoints using Protocol Buffers. Investigated potential graphics libraries for system integration.`,
    tags: [
      "Java",
      "Android",
      "C#",
      "Qt",
      "Xamarin",
      "LibGDX",
    ],
    logo: ncrLogo,
  },
];

export default jobs;
