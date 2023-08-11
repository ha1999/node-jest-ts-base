export default function waitTime(time: number) {
  return new Promise((resolve, _reject) => setTimeout(resolve, time * 1000))
}
