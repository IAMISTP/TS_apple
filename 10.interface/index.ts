{
  interface Student {
    name: string;
  }
  interface Teacher extends Student {
    age: number;
  }

  const teacher: Teacher = {
    name: 'kim',
    age: 30,
  };
}
