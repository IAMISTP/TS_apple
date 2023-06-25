{
  //     (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
  // 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
  // (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
  // (조건2) Math.max() 사용금지 반복문이나 쓰셈

  function max(...numbers: number[]) {
    return numbers.reduce((a, b) => (a > b ? b : a));
  }
  console.log(max(1, 2, 3, 5, 10, 4));
}
