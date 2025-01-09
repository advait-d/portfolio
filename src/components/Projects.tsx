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
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-gray-100  bg-white dark:bg-[#111111]">Personal and Academic Projects</h2>
      <ul className="space-y-12">
        {projects.map((project, index) => (
          <li key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  width={300} 
                  height={200} 
                  className="rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-3 text-black dark:text-gray-100  bg-white dark:bg-[#111111]">{project.name}</h3>
                <ul className="space-y-2 text-black dark:text-gray-300  bg-white dark:bg-[#111111] mb-4">
                  {project.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="mr-2 mt-1.5 text-black dark:text-gray-500  bg-white dark:bg-[#111111]">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <ChipList items={project.technologies} category="frameworks" />
                <div className="flex space-x-4 mt-4">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300  bg-white dark:bg-[#111111] hover:text-black dark:hover:text-white transition-colors duration-300">
                      <FaGithub className="mr-2" />
                      <span>View Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300  bg-white dark:bg-[#111111] hover:text-black dark:hover:text-white transition-colors duration-300">
                      <FaExternalLinkAlt className="mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;