export default function getRandomForSlice(data, chooseNum) {
  return Math.floor(Math.random() * data.length - chooseNum);
}
