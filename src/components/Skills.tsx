import React from 'react';
import { ChipList, SkillCategory } from './Chips';

const skills: { [key in SkillCategory]: string[] } = {
  languages: ['Python', 'Java','JavaScript', 'TypeScript', 'HTML', 'CSS', 'C'],
  frameworks: ['Spring Framework', 'Flask', 'Django', 'ReactJS', 'NextJS', 'Angular','Ionic',],
  AI: ['TensorFlow', 'PyTorch', 'Keras', 'OpenAI API', 'Jupyter Notebooks'],
  databases: ['PostgreSQL', 'MySQL', 'Oracle SQL', 'DynamoDB', 'MongoDB'],
  tools: ['Docker', 'Kubernetes', 'Git', 'Kafka', 'Postman', 'OpenAPI', 'Grafana', 'Splunk'],
  architectures: ['RESTful APIs','Microservices', 'Microfrontend', 'Backend for Frontend']
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="mb-16">
      <h2 className="text-sm font-bold uppercase tracking-widest text-[#ccd6f6] mb-8 lg:hidden">Skills</h2>
      
      {(Object.entries(skills) as [SkillCategory, string[]][]).map(([category, items]) => (
        <div key={category} className="mb-5">
          <h4 className="text-sm font-semibold mb-2 text-[#a8b2d1] capitalize">{category}</h4>
          <ChipList items={items} category={category} />
        </div>
      ))}
    </section>
  );
};

export default Skills;
