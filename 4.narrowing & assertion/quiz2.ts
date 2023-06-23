// 다음과 같은 함수를 만들어보십시오.
//지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
/*과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
철수쌤같은 선생님 object 자료를 집어넣으면 
그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
그리고 타입지정도 엄격하게 해보도록 합시다. */
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };

type Subject = {
  subject: string | string[];
};
function lastSubject({ subject }: Subject) {
  if (typeof subject === 'string') {
    return subject;
  } else if (Array.isArray(subject)) {
    return subject[subject.length - 1];
  } else {
    return '없쪄'
  }
}
console.log(lastSubject(철수쌤));
console.log(lastSubject(영희쌤));
console.log(lastSubject(민수쌤));
console.log(lastSubject({hello:'hi'});
