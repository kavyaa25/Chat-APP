export function streamResponse(fullText, callback) {
  let index = 0;

  const interval = setInterval(() => {
    callback(fullText.slice(0, index));
    index++;

    if (index > fullText.length) clearInterval(interval);
  }, 20);
}
