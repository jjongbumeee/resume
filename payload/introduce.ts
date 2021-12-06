import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '도전적이고 활발한 활동을 좋아하는 개발자입니다. 관심 분야는 백엔드 개발 분야입니다.',
    '특히, 새로운 서비스를 개발하고, 서비스의 성능을 개선하는 작업을 좋아합니다.',
  ],
  sign: 'Daniel Jung',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
