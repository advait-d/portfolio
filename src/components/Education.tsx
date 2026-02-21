import React from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const educationData = [
  {
    degree: "Master of Science, Computer Science and Engineering",
    university: "University at Buffalo, The State University of New York",
    period: "Aug 2018 - Feb 2020",
    image: "/205-UB-Crest-RGB-Blue.png",
    units: [
      "CSE 529 Algorithms for Modern Computer Systems",
      "CSE 535 Information Retrieval",
      "CSE 542 Software Engineering Concepts",
      "CSE 560 Data Models and Query Languages",
      "CSE 573 Computer Vision and Image Processing",
      "CSE 574 Introduction to Machine Learning",
      "CSE 586 Distributed Systems",
      "CSE 676 Deep Learning",
      "CSE 700 Independent Study - Text-To-Image Synthesis using Generative Adversarial Networks",
      "CSE 711: Static and Dynamic Analysis of Android Applications",
    ],
  },
  {
    degree: "Bachelor of Engineering, Computer Engineering",
    university: "University of Mumbai",
    period: "August 2013 - May 2017",
    image: "/uom.png",
    units: [
      "FEC101, FEC201 Applied Mathematics - I & II",
      "FEC102, FEC202 Applied Physics - I & II",
      "FEC103, FEC203 Applied Chemistry - I & II",
      "FEC104 Engineering Mechanics",
      "FEC105 Basic Electrical and Electronics Engineering",
      "FEC106 Environmental Studies",
      "FEL101, FEL201 Basic Workshop and Practice - I & II",
      "FEL204 Engineering Drawing",
      "FEC205 Structured Programming Approach (C)",
      "FEC206 Communication Skills",
      "CSC301, CSC401 Applied Mathematics - III & IV",
      "CSC302 Object Oriented Programming Methodology",
      "CSC303 Data Structures",
      "CSC304 Digital Logic Design and Analysis",
      "CSC305 Discrete Structures",
      "CSC306 Electronics Circuits and Communication Fundamentals",
      "CSC402 Analysis of Algorithms",
      "CSC403 Computer Organization and Architecture",
      "CSC404 Database Management Systems",
      "CSC405 Theoretical Computer Science",
      "CSC406 Computer Graphics",
      "CPC501 Microprocessors",
      "CPC502 Operating Systems",
      "CPC503 Structured and Object Oriented Analysis and Design",
      "CPC504 Computer Networks",
      "CPL501 Web Technologies Laboratory",
      "CPL502 Business Communication and Ethics",
      "CPC601 System Programming and Complier Construction",
      "CPC602 Software Engineering",
      "CPC603 Distributed Databases",
      "CPC604 Mobile Communication and Computing",
      "CPE601X Elective I - Project Management",
      "CPL601 Network Programming Laboratory",
      "CPC701 Digital Signal Processing",
      "CPC702 Cryptography and System Security",
      "CPC703 Artificial Intelligence",
      "CPE7025 Elective II :- Soft Computing",
      "CPP701 Project-I - House Price Prediction using Linear Regression",
      "CPL701 Network Threats and Attacks Laboratory",
      "CPC801 Data Warehouse and Mining",
      "CPC802 Human Machine Interaction",
      "CPC803 Parallel and Distributed Systems",
      "CPE8035 Elective III :- Big Data Analytics",
      "CPL801 Cloud Computing Laboratory",
      "CPP802 Project-II - Prediction of Bus Arrival Time using GPS",
    ],
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-gray-100  bg-white dark:bg-[#111111]">
        Education
      </h2>
      <ul className="space-y-6">
        {educationData.map((edu, index) => (
          <li
            key={index}
            className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
          >
            <div className="flex items-start mb-2">
              <div className="bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray dark:border-gray-200">
                <Image
                  src={edu.image}
                  alt={`${edu.university} logo`}
                  width={80}
                  height={80}
                  className="object-contain w-12 h-12 sm:w-20 sm:h-20"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-gray-100  bg-white dark:bg-[#111111]">
                  {edu.degree}
                </h3>
                <p className="text-base sm:text-lg text-black dark:text-gray-300  bg-white dark:bg-[#111111]">
                  {edu.university}
                </p>
                <p className="text-sm sm:text-base text-black dark:text-gray-400  bg-white dark:bg-[#111111]">
                  {edu.period}
                </p>
                <details className="mt-2">
                  <summary className="cursor-pointer text-gray-600 dark:text-gray-300  bg-white dark:bg-[#111111] hover:text-black dark:hover:text-white transition-colors duration-300 flex items-center">
                    <FaChevronDown className="mr-2 inline-block details-open:hidden" />
                    <FaChevronUp className="mr-2 hidden details-open:inline-block" />
                    <span>Coursework</span>
                  </summary>
                  <ul className="mt-4 ml-4 space-y-2">
                    {edu.units.map((unit, unitIndex) => (
                      <li
                        key={unitIndex}
                        className="text-black dark:text-gray-300"
                      >
                        • {unit}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
