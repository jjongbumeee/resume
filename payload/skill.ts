import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      level: 3,
    },
    {
      title: 'C/C++',
      level: 3,
    },
    {
      title: 'AWS / GCP',
      level: 2,
    },
    {
      title: 'Python',
      level: 1,
    },
    {
      title: 'Apache',
      level: 1,
    },
    {
      title: 'Java',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'PostgreSQL',
      level: 2,
    },
    {
      title: 'MySQL',
      level: 2,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Javascript',
      level: 3,
    },
    {
      title: 'Vue.js',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Unix/Linux',
    },
    {
      title: 'Mac OSX',
    },
    {
      title: 'Webstorm',
    },
    {
      title: 'Git',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
