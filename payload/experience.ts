import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '현대카드',
      position: 'ML Engineer(Associate)',
      startedAt: '2021-12',
      descriptions: [
        'MLOps',
        'Data pipeline 구축',
        '현대카드 3층 서비스(개인 맞춤형 할인, 쿠폰, 이벤트 추천) 운영',
      ],
      skillKeywords: ['Node.js', 'Kubernetes', 'Airflow', 'ArgoCD', 'Kubeflow'],
    },
    {
      title: 'WELT(주)',
      position: '인턴 / ICT 학점연계 프로젝트 인턴십',
      startedAt: '2021-03',
      endedAt: '2021-12',
      descriptions: [
        '백엔드 개발 업무 담당',
        '실시간 로그, 에러 알림 시스템 개발 담당',
        'Audit Log(감사 로그) 시스템 개발',
        '참여수기 공모전 우수상 수상',
      ],
      skillKeywords: ['Node.js', 'Kubernetes', 'Redis', 'RabbitMQ', 'PostgreSQL'],
    },
    {
      title: 'Epic Mobile',
      position: '학점연계 현장실습',
      startedAt: '2020-07',
      endedAt: '2020-09',
      descriptions: [
        '자바스크립트를 이용한 데이터 파싱',
        'Google Apps Script를 이용한 MongoDB collection update 자동화 업무',
        '데이터 수집 업무',
      ],
      skillKeywords: ['JavaScript', 'Google Apps Script', 'MongoDB', 'Git'],
    },
  ],
};

export default experience;
