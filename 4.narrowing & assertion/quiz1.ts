{
  function cleanNumber(x: (string | number)[]) {
    let arr: number[] = [];
    x.forEach((e) => {
      if (typeof e === 'string') {
        arr.push(parseInt(e));
      } else {
        arr.push(e);
      }
    });
    console.log(arr);
  }
  console.log(cleanNumber([123, '1']));
}
