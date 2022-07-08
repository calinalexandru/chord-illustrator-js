const appendChild = (parent, child) => {
  if (Array.isArray(child)) child.forEach(nestedChild => appendChild(parent, nestedChild));else parent.appendChild(child?.nodeType ? child : document.createTextNode(child));
};

export const createElement = (tag, props, ...children) => {
  console.log('createElement', tag, props, children);
  if (typeof tag === 'function') return tag({ ...props,
    children
  });
  const element = document.createElement(tag);
  Object.entries(props || {}).forEach(([name, value]) => {
    element.setAttribute(name, value.toString());
  });
  children.forEach(child => {
    appendChild(element, child);
  });
  return element;
};
export const createFragment = (props, ...children) => children;