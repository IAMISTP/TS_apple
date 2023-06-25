{
  type Fish = {
    swim: string;
  };
  type Bird = { fly: string };

  function 함수(animal: Fish | Bird) {
    if ('swim' in animal) {
      return animal.swim;
    }
  }

  const result = 함수({ swim: '바다' });
  console.log(result);

  type Car = {
    wheel: '4개';
    color: string;
  };
  type Bike = {
    wheel: '2개';
    color: string;
  };

  function 타다(x: Car | Bike) {
    if (x.wheel === '4개') {
      console.log('type 이 Car 이다.');
    }
  }
}
