import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '도전적이고 활발한 활동을 좋아하는 개발자 지망생입니다. 관심 분야는 클라우드 컴퓨팅, 가상화 분야입니다.',
    '구체적인 추가 관심분야와 진로를 탐색 중 이며, 다양한 시도를 진행 중 입니다.',
  ],
  sign: 'Daniel Jung',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
