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
    console.log('name', name);
    console.log('value', value);
    // const nameFirst = name === 'xmlnsXlink' ? 'xmlns:xlink' : name;
    const nameKebap = name.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    // console.log('nameKebap', nameKebap);
    // if (isSvg) {
    //   element.setAttributeNS(
    //     'http://www.w3.org/2000/xmlns/',
    //     'xmlns:xlink',
    //     'http://www.w3.org/1999/xlink'
    //   );
    //   element.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    // }
    if (typeof value === 'string') {
      // if (isSvg) element.setAttribute(name, value.toString());
      // else element.setAttributeNS(null, nameKebap, value.toString());
      element.setAttributeNS(null, nameKebap, value.toString());
    } else if (typeof value === 'object') {
      const comp = Object.keys(value)
        .map((v) => `${v}:${value[v]}`)
        .join(';');
      // if (isSvg) element.setAttribute(name, comp);
      // else element.setAttributeNS(null, nameKebap, comp);
      element.setAttributeNS(null, nameKebap, comp);
    }
  });

  children.forEach((child) => {
    appendChild(element, child);
  });

  return element;
};

export const createFragment = (props, ...children) => children;
