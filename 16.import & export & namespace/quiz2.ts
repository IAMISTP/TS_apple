// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다

// 이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고

// 아무것도 return 해주지 않아야합니다.

// 함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데

// 이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요
export type TypeFunction = (a?: object) => void;