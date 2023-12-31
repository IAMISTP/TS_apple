{
  //     (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
  class User {
    private static x = 10;
    public static y = 20;
    protected z = 30;

    change(): number {
      return (User.x = 100);
    }
  }
  const user = new User();
  console.log(user.change());
  console.log(User.y);
  User.y = 200;
  console.log(User.y);

  // 누가 쓸 수 있고, 어디서 수정할 수 있는지 이런 것들이요.
  // 친구가 물어봤을 때 어떻게 답해줄 것입니까

  // 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만

  // x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.

  // User의 자식들은 x와 y를 쓸 수 없습니다.

  // 2. private static x는 class 내부에서만 수정가능합니다.

  // 3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯

  // 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데

  // 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다.
}
