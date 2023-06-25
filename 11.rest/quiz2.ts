{
  //     (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
  // 함수( { user : 'kim', comment : [3,5,4], admin : false } )
  // 어떻게 코드를 짜야할까요?
  // (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
  // (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
  type Type = {
    user: string;
    comment: number[];
    admin: boolean;
  };
  let userInfo = ({ user, comment, admin }: Type) => {
    console.log(user, comment, admin);
  };
  userInfo({ user: 'kim', comment: [3, 5, 4], admin: false });
}
