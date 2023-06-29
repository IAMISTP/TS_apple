export {}; //export 를 사용하면 로컬로 지정됨
type Age = number;
let 나이: Age = 20;
declare global {
  type Dog = string;
}
