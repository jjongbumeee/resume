// import { link } from 'fs';
import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'GrandChild(손주)',
      startedAt: '2020-10',
      endedAt: '2020-10',
      where: '제 6회 온라인 아이디어 해커톤(전북권)',
      descriptions: [
        { content: '라즈베리파이를 이용한 OCR-TTS 결합 프로젝트' },
        { content: '카메라와 스피커를 통해 저시력자들에게 활자를 읽어주는 프로토타입 개발' },
        { content: 'Python, Google Cloud Vision API 이용' },
        {
          content: '아이디어 해커톤 우수상 수상작',
          weight: 'MEDIUM',
        },
        {
          content: 'Github Link',
          href: 'https://github.com/jjongbumeee/grandChild',
        },
      ],
    },
    {
      title: 'MagicSora(가명)',
      startedAt: '2020-01',
      endedAt: '2020-10',
      where: 'Toy Project',
      descriptions: [
        { content: '웹 프레임워크 기초를 다지기 위해 시작한 학습용 프로젝트' },
        { content: 'Frontend : Vue.js, HTML, CSS' },
        { content: 'Backend : Node.js Express & MySQL' },
        {
          content: '배포 서버',
          href: 'http://203.254.143.175:8081',
        },
        {
          content: 'Github Link',
          href: 'https://github.com/jjongbumeee/magicSora',
        },
      ],
    },
    {
      title: 'Jeonju Cultural life',
      startedAt: '2019-07',
      endedAt: '2019-12',
      where: '전주문화',
      descriptions: [
        { content: '전주시 문화관광 활성화를 위한 안드로이드 어플리케이션 제작' },
        { content: 'Open API 이용, 사용자 인증(OAuth), 게시판 구현, 데이터 파싱 작업 진행' },
        {
          content: '2019 전주시 공공데이터 활용 공모전 최우수상 수상작',
          weight: 'MEDIUM',
        },
        {
          content: 'Google Play 출시 프로젝트',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Google Play 링크',
              href: 'https://play.google.com/store/apps/details?id=csejeonju2019.go.kr.insta',
            },
          ],
        },
        {
          content: 'Github Link',
          href: 'https://github.com/jjongbumeee/Jeonju_culturallife',
        },
      ],
    },
    {
      title: 'Merge Calendar',
      startedAt: '2019-03',
      endedAt: '2019-06',
      where: 'Windows Programming Lecture',
      descriptions: [
        { content: 'Google, Naver 등의 캘린더 서비스를 통합하여 관리하는 앱 개발' },
        { content: '앱을 통해 해당 서비스의 일정을 불러오거나 수정' },
        { content: 'C#, XAML, WPF를 이용한 윈도우 애플리케이션' },
        { content: '윈도우즈 프로그래밍 수업 프로젝트' },
        {
          content: 'Github Link',
          href: 'https://github.com/jjongbumeee/Merge_Calendar',
        },
      ],
    },
  ],
};

export default project;
