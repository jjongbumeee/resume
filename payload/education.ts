import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Jeonbuk National University',
      subTitle: 'Computer-Science Engineering Major Bachelor',
      startedAt: '2016-03',
      // endedAt: '2010-02',
    },
    {
      title: 'Buram High School',
      subTitle: 'Graduated',
      startedAt: '2013-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
