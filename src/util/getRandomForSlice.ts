/* eslint-disable @typescript-eslint/no-explicit-any */
export default function getRandomForSlice(data: any[], chooseNum: number) {
  return Math.floor(Math.random() * data.length - chooseNum);
}
