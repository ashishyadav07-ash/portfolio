export interface EducationItem {
  degree: string;
  institution: string;
  universityOrBoard: string;
  year: string;
  location: string;
  highlight: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Engineering in Computer Engineering (B.E.)",
    institution: "Sandip Institute of Technology & Research Centre",
    universityOrBoard: "Savitribai Phule Pune University (SPPU)",
    year: "2020",
    location: "Nashik, Maharashtra, India",
    highlight: "Comprehensive grounding in Computer Engineering, Database Management Systems, Data Structures, Algorithms, Computer Networks, and Software Engineering Methodologies.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Sandip Polytechnic",
    universityOrBoard: "MSBTE",
    year: "2016",
    location: "Nashik, Maharashtra, India",
    highlight: "Early foundational technical training in Object-Oriented Programming, Relational Databases, Web Technologies, and Network Fundamentals.",
  },
];
