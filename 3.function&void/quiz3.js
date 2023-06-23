"use strict";
{
    //(숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
    //1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
    //2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
    //3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
    let count = 0;
    function marry(person) {
        if (person.earnings >= 10000) {
            count += person.earnings / 10000;
        }
        if (person.house === true) {
            count += 500;
        }
        if (person.charm === '상') {
            count += 100;
        }
        return count >= 600 && '결혼가능';
    }
    const marrayGirl = {
        earnings: 10000,
        house: true,
        charm: '상',
    };
    console.log(marry(marrayGirl));
}
