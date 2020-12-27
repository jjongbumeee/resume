import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Litmus',
      descriptions: [
        { content: '전북대학교 컴퓨터공학부에서 이용하는 온라인저지 서비스' },
        { content: 'ALPS 동아리원들이 개발, 관리, 운영 중(Private repo)' },
        { content: 'Project Management & Contributor' },
        {
          content: 'Github Capture Image Link',
          href:
            'https://raw.githubusercontent.com/jjongbumeee/jjongbumeee.github.io/master/asset/alps-jbnu_litmus.png',
        },
        {
          content: 'Service Link',
          href: 'http://litmus.jbnu.ac.kr/',
        },
      ],
    },
  ],
};

export default openSource;
