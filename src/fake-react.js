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
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([name, value]) => {
    console.log('name', name);
    console.log('value', value);
    if (typeof value === 'string') {
      element.setAttribute(name, value.toString());
    } else if (typeof value === 'object') {
      element.setAttribute(
        name,
        Object.keys(value)
          .map((v) => `${v}:${value[v]}`)
          .join(';')
      );
    }
  });

  children.forEach((child) => {
    appendChild(element, child);
  });

  return element;
};

export const createFragment = (props, ...children) => children;
