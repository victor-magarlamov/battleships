function createCursor() {
  const element = document.getElementsByClassName(
    "ship--current"
  )[0] as HTMLElement;

  if (element) {
    element.style.left = `-1000px`;
    element.style.top = `-1000px`;
  }

  function move(x: number, y: number) {
    if (element) {
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
    }
  }

  function shipId() {
    return element ? element.dataset.id : -1;
  }

  return Object.freeze({
    move,
    shipId
  });
}

export { createCursor };
