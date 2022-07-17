let domDocument;

export const setDomDocument = (doc) => {
  domDocument = doc;
};

const appendChild = (parent, child) => {
  if (Array.isArray(child))
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  else
    parent.appendChild(
      child?.nodeType ? child : domDocument.createTextNode(child)
    );
};

export const createElement = (tag, props, ...children) => {
  if (typeof tag === 'function') {
    const out = tag({ ...props }, children);
    if (Array.isArray(out)) return out.filter((o) => o !== false);
    return out;
  }

  const isSvg = tag === 'svg';
  const element = domDocument.createElementNS(
    'http://www.w3.org/2000/svg',
    tag
  );

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
    if (child !== false) appendChild(element, child);
  });

  return element;
};

export const createFragment = (props, ...children) => children;
