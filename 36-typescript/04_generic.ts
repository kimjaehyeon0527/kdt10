function numArrLen(arr: number[]): number {
  return arr.length;
}
function strArrLen(arr: string[]): number {
  return arr.length;
}

console.log(numArrLen([1, 2, 3, 4])); // 4
console.log(strArrLen(['a', 'b', 'c'])); // 3

// generic
// 선언할 때 타입을 지정하기 어려운 경우 존재
// = 데이터 타입을 외부에서 지정 (사용하는 곳에서 ex(console.log))
// = 생성 시점에서 타입을 명시
// = "재사용성 증가"
// => 타입을 변수처럼 사용하는 것.
// = 형태는 주로 <T>를 사용함. --> 사용 시 T는 type만 작성 가능
function arrLen<T>(arr: T[]): number {
  return arr.length;
}

console.log(arrLen<number>([1, 2, 3])); // 3
console.log(arrLen<string>(['a', 'b', 'c'])); // 3

//////////////////////////////////////////////////
function print3<T>(x: T, y: T): void {
  console.log(x, y);
}
print3<string>('wow', '어려워요');

function print4<T, U>(x: T, y: U): void {
  console.log(x, y);
}
print4<string, number>('hihihi', 333);

// interface와 generic
interface Phone<T> {
  company: string;
  createAt: Date;
  option: T;
}
const iphone13Pro: Phone<string> = {
  company: 'apple',
  createAt: new Date('2022-10-01'),
  option: 'sliver',
};

// type iphoneOption = {
//   color: string;
//   storage: number;
// };

// const iphone13Pro: Phone<iphoneOption> = {
//   company: 'apple',
//   createAt: new Date('2022-10-01'),
//   option: {
//     color: 'sliver',
//     storage: 128,
//   },
// };

// console.log(iphone13Pro);
