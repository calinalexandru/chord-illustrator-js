const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  else
    parent.appendChild(
      child?.nodeType ? child : document.createTextNode(child)
    );
};

export const createElement = (tag, props, ...children) => {
  if (typeof tag === 'function') {
    return tag({ ...props }, children);
  }

  const isSvg = tag === 'svg';
  const element = document.createElementNS('http://www.w3.org/2000/svg', tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    const nameKebap = name.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    if (isSvg) {
      element.setAttributeNS(
        'http://www.w3.org/2000/xmlns/',
        'xmlns:xlink',
        'http://www.w3.org/1999/xlink'
      );
      element.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    }
    if (typeof value === 'object') {
      const comp = Object.keys(value)
        .map((v) => `${v}:${value[v]}`)
        .join(';');
      element.setAttributeNS(null, isSvg ? name : nameKebap, comp);
    } else {
      element.setAttributeNS(null, isSvg ? name : nameKebap, value);
    }
  });

  children.forEach((child) => {
    appendChild(element, child);
  });

  return element;
};

export const createFragment = (props, ...children) => children;
