import Work1 from '../../src/assets/Work5.png';
import Work2 from '../../src/assets/Work1.webp';
import Work3 from '../../src/assets/Work1.webp';
import Work4 from '../../src/assets/Work1.webp';
import Work5 from '../../src/assets/Work1.webp';

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: 'Visual Voices (Assistive App)',
    category: 'app',
    demoUrl: '#', // Not hosted yet
    sourceUrl: '#', // Private repo or local
    status: 'development',
  },
  {
    id: 2,
    image: Work2,
    title: 'Image-to-Text Converter',
    category: 'web',
    demoUrl: '#', // Add link if hosted
    sourceUrl: 'https://github.com/siddhiiagrawall/images-to-text.git',
    status: 'completed',
  },
  {
    id: 3,
    image: Work3,
    title: 'Project Management System',
    category: 'web',
    demoUrl: '#', // Add Netlify/Render link if deployed
    sourceUrl: 'https://github.com/siddhiiagrawall/project_management',
    status: 'completed',
  },
  {
    id: 4,
    image: Work4,
    title: 'AI Resume Builder',
    category: 'web',
    demoUrl: '#', // Add demo if hosted
    sourceUrl: 'https://github.com/siddhiiagrawall/ai-resume-builder',
    status: 'completed',
  },
  {
    id: 5,
    image: Work5,
    title: 'CPU Scheduling Simulator (C++)',
    category: 'app',
    demoUrl: '#',
    sourceUrl: 'https://github.com/siddhiiagrawall/scheduler',
    status: 'completed',
  },
];

export const projectsNav = [
	{
		name: 'all',
	},
	{
		name: 'app',
	},
	{
		name: 'web',
	},
];
