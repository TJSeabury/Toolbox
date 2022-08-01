export default async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(null), ms);
  });
}