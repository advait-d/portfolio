import React from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ChipList } from './Chips';

interface Project {
  name: string;
  description: string[];
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    name: "OTT Platform with a Headless CMS - Directus",
    description: [
      "An OTT (Over-the-Top) platform designed to provide users with seamless access to TV shows, movies, and other content.",
      "Built with Directus for the backend and Angular with Ionic for the frontend, this platform includes essential features like user authentication, content browsing, search, filtering, and bookmarking."
    ],
    technologies: ["Angular", "Ionic", "SCSS", "Directus"],
    image: "/directus.jpg",
    githubLink: "https://github.com/advait-d/ott-platform",
    liveLink: "https://youtu.be/wa5HnMa6EVw"
  },
  {
    name: "Ben-Or Consensus Algorithm Modeling in TLA+/PlusCal",
    description: [
      "Implementation of Ben Or algorithm, a binary consensus algorithm, in PlusCal using Shared pool messaging.",
      "Performed checks for key safety and invariant properties.",
      "Implementation was done in PlusCal using Shared pool messaging."
    ],
    technologies: ["TLA+"],
    image: "/TLA.png",
    githubLink: "https://github.com/advait-d/BenOr-tlaplus",
    //liveLink: ""
  },
  {
    name: "Image Stitching",
    description: [
      "Performed Image Stitching on multiple images taken at different horizontal orientations with overlapping areas to get a single panoramic image.",
      "Used Scale Invariant Feature Transform (SIFT) provided by OpenCV (3.4.2.17) to extract keypoints and descriptors.", 
      "Manually performed keypoint matching without using OpenCV's BFMatcher or FlannBasedMatcher using the Euclidean Distance between their corresponding descriptors.",
      "Computed the Homography Matrix manually without the use of OpenCV's findHomography method.",
      "Performed Image Blending to stitch multiple images."
    ],
    technologies: ["Python", "OpenCV"],
    image: "/opencv.png",
    githubLink: "https://github.com/advait-d/image-stitching",
    //liveLink: ""
  },
  {
    name: "Object Detection using Single Shot MultiBox Detector",
    description: [
      "A PyTorch implementation of Single Shot MultiBox Object Detector (SSD300 variant) trained on Pascal VOC 2007 Dataset which can be used to detect objects in videos."
    ],
    technologies: ["Python", "PyTorch"],
    image: "/pytorch.png",
    githubLink: "https://github.com/advait-d/video-object-detector-SSD300",
    //liveLink: ""
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-16">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6] mb-8 lg:hidden">
        Personal and Academic Projects
      </h2>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <div key={index} className="spotlight-card group">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Image column */}
              <div className="sm:w-[140px] flex-shrink-0">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={140} 
                  height={90} 
                  className="rounded-md object-cover border border-[#233554] group-hover:border-[#64ffda]/30 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>

              {/* Content column */}
              <div className="flex-grow">
                <h3 className="card-title text-base font-semibold text-[#ccd6f6] transition-colors duration-300 flex items-center gap-1 mb-2">
                  {project.name}
                  <span className="card-arrow inline-block text-[#8892b0] transition-transform duration-300 text-sm">↗</span>
                </h3>

                <ul className="space-y-1 text-sm text-[#8892b0] leading-relaxed mb-3">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="mr-2 mt-0.5 text-[#64ffda] text-xs">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ChipList items={project.technologies} category="frameworks" />

                <div className="flex space-x-4 mt-3">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300">
                      <FaGithub className="mr-1.5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300">
                      <FaExternalLinkAlt className="mr-1.5 text-xs" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;