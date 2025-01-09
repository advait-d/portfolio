import React from 'react';
import { ChipList, SkillCategory } from './Chips';

const skills: { [key in SkillCategory]: string[] } = {
  languages: ['Python', 'Java','JavaScript', 'TypeScript', 'HTML', 'CSS', 'C'],
  frameworks: ['REST APIs','Spring Framework', 'Flask', 'Django', 'ReactJS', 'NextJS', 'Angular','Ionic',],
  AI: ['TensorFlow', 'PyTorch', 'Keras', 'OpenAI API', 'codellama', 'Jupyter Notebooks'],
  databases: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'DynamoDB', 'MongoDB'],
  tools: ['Docker', 'Kubernetes', 'Git', 'Kafka', 'Postman', 'OpenAPI', 'Grafana', 'Splunk'],
  architectures: ['Microservices', 'Microfrontend', 'Backend for Frontend']
};

const Skills: React.FC = () => {
  return (
    <div>
       <h2 className="text-3xl font-bold mb-6 text-black dark:text-gray-100  bg-white dark:bg-[#111111]">Skills</h2>
      
      {(Object.entries(skills) as [SkillCategory, string[]][]).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h4 className="text-xl font-semibold mb-2 text-black dark:text-gray-200  bg-white dark:bg-[#111111] capitalize">{category}</h4>
          <ChipList items={items} category={category} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
