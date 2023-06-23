{
  //Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
  let name: string = 'hyeminpark';
  let age: number = 29;
  let region: string = '부산';

  //Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
  let favorite: {
    name: string;
    song: string;
  } = {
    name: '순순희(기태)',
    song: '그대가 내 안에 박혔다(그내박)',
  };

  //Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
  type Project = {
    member: string[];
    days: number;
    started: boolean;
  };
  let project: Project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
  };
}
