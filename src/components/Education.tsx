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
    <section id="education" className="mb-16">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6] mb-8 lg:hidden">
        Education
      </h2>
      <div className="space-y-2">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="spotlight-card group"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Date column */}
              <div className="sm:w-[140px] flex-shrink-0 pt-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8892b0]/70">
                  {edu.period}
                </p>
              </div>

              {/* Content column */}
              <div className="flex-grow">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-white rounded-md p-1.5 w-12 h-12 flex-shrink-0 flex items-center justify-center overflow-hidden border border-[#233554]">
                    <Image
                      src={edu.image}
                      alt={`${edu.university} logo`}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="card-title text-base font-semibold text-[#ccd6f6] transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[#8892b0]">
                      {edu.university}
                    </p>
                  </div>
                </div>

                <details className="mt-3">
                  <summary className="cursor-pointer text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300 flex items-center text-sm">
                    <FaChevronDown className="mr-2 inline-block details-open:hidden text-xs" />
                    <FaChevronUp className="mr-2 hidden details-open:inline-block text-xs" />
                    <span>Coursework</span>
                  </summary>
                  <ul className="mt-3 ml-4 space-y-1.5">
                    {edu.units.map((unit, unitIndex) => (
                      <li
                        key={unitIndex}
                        className="text-sm text-[#8892b0]"
                      >
                        • {unit}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
