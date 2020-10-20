import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile_2019.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '정종범',
    small: '(Daniel Jung)',
  },
  contact: [
    {
      title: 'danieltiger60@gmail.com',
      link: 'mailto:danieltiger60@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'Github',
      link: 'https://github.com/jjongbumeee',
      icon: faGithub,
    },
  ],
  notice: {
    title: '이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
