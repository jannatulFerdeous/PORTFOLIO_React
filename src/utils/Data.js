// Data.js or Data.jsx
import frontendIcon from '../assets/img/frontend-icon.png';
import backendIcon from '../assets/img/backend-icon.png';
import toolIcon from '../assets/img/Tool-icon.png';
import softSkillsIcon from '../assets/img/softSkills-icon.png';
import ProgramIcon from '../assets/img/program-icon.png';
import MLIcon from '../assets/img/ML-icon.png';

export const SKILLS = [
  {
    title: 'Frontend',
    icon: frontendIcon,
    skills: [
      { skills: 'HTML5', percentage: '98%' },
      { skills: 'CSS3', percentage: '90%' },
      { skills: 'Tailwind CSS', percentage: '99%' },
      { skills: 'Bootstrap', percentage: '70%' },
      { skills: 'Javascript', percentage: '75%' },
      { skills: 'React.js', percentage: '90%' },
      { skills: 'Next.js', percentage: '80%' },
      { skills: 'Redux', percentage: '96%' },
      { skills: 'Typescript', percentage: '80%' },
    ],
  },
  {
    title: 'Backend',
    icon: backendIcon,
    skills: [
      { skills: 'Django', percentage: '60%' },
      { skills: 'Node.js', percentage: '10%' },
    ],
  },
  {
    title: 'Tools',
    icon: toolIcon,
    skills: [
      { skills: 'Git & GitHub', percentage: '80%' },
      { skills: 'Linux', percentage: '70%' },
      { skills: 'Latex OverLeaf', percentage: '90%' },
      { skills: 'Visual Studio Code', percentage: '80%' },
      { skills: 'PyCharm', percentage: '80%' },
      { skills: 'Postman', percentage: '10%' },
    ],
  },
  {
    title: 'Programming Language',
    icon: ProgramIcon,
    skills: [
      { skills: 'C', percentage: '90%' },
      { skills: 'Javascript', percentage: '90%' },
      { skills: 'Python', percentage: '80%' },
      { skills: 'Java(Basic)', percentage: '40%' },
    ],
  },
  {
    title: 'ML Libraries',
    icon: MLIcon,
    skills: [
      { skills: 'Numpy', percentage: '80%' },
      { skills: 'Keras', percentage: '70%' },
      { skills: 'Pandas', percentage: '90%' },
      { skills: 'TensorFlow', percentage: '60%' },
      { skills: 'PyTorch', percentage: '90%' },
      { skills: 'Scikit-learn', percentage: '90%' },
    ],
  },

  {
    title: 'Soft Skills',
    icon: softSkillsIcon,
    skills: [
      { skills: 'Problem Solving', percentage: '80%' },
      { skills: 'Collaboration', percentage: '90%' },
      { skills: 'Attention to Details', percentage: '80%' },
    ],
  },
];
