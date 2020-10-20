import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
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
