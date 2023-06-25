{
  //     (숙제3) 이런거 어떻게 만들게요
  // 웹 요소 애니메이팅하는거 이런 것의 기초 격인데
  // let 네모 = new Square(30, 30, 'red');
  // 네모.draw()
  // 네모.draw()
  // 네모.draw()
  // 네모.draw()
  // 이렇게 네모.draw()를 할 때마다
  // index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가
  // 가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
  // ▲ 저는 네모.draw() 이걸 8번 적고 새로고침 해봤더니 8개의 박스가 생기네요
  // Square라는 class를 어떻게 만들면 될까요?
  // html css 기초학력이 흔들리는 분들은 좌절을 느낄 수 있는데 생각보다 별거 아닙니다.
  // 그리고 심심하면 타입지정도 해봅시다.

  class Square {
    constructor(
      private width: number,
      private height: number,
      private background: string
    ) {}
    draw() {
      const div = document.createElement('div');
      const body = document.querySelector('body');

      const test = body?.getBoundingClientRect();
      const bodyRect = body?.getBoundingClientRect();
      const maxWidth = bodyRect?.width;
      const maxHeight = bodyRect?.height;
      div.style.width = `${this.width}px`;
      div.style.height = `${this.height}px`;
      div.style.backgroundColor = this.background;
      div.style.position = 'absolute';
      if (typeof maxWidth === 'number') {
        console.log(Math.floor(Math.random() * (maxWidth - 0 + 1)) + 0);

        div.style.left = `${
          Math.floor(Math.random() * (maxWidth - 0 + 1)) + 0
        }px`;
      }
      if (typeof maxHeight === 'number') {
        console.log(Math.floor(Math.random() * (maxHeight - 0 + 1)) + 0);

        div.style.top = `${
          Math.floor(Math.random() * (maxHeight - 0 + 1)) + 0
        }px`;
      }
      body?.appendChild(div);
    }
  }

  let 네모 = new Square(30, 30, 'red');
  네모.draw();
  네모.draw();
  네모.draw();
  네모.draw();
  네모.draw();
  네모.draw();
  네모.draw();
}
