//(숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
//파라미터와 return 타입지정도 잘 해봅시다.

function print(name?: string): void {
  if (name) {
    console.log(`안녕하세요 ${name}`);
  }
  console.log('이름이 없습니다.');
  //   if (typeof name === 'string') {
  //     console.log(`안녕하세요 ${name}`);
  //   }
  //   console.log('이름이 없습니다.');
}

print('홍길동');
print();
