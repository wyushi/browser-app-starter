function component(): HTMLElement {
  const element: HTMLElement = document.createElement('div');
  element.innerHTML += 'Hello, webpack';
  return element;
}

const element: HTMLElement = component();
document.body.appendChild(element);