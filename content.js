function replaceTextSparky(node) {
  const find = /fox/gi;
  const replace = "Sparky";

  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(find, replace);
  } else {
    for (let child of node.childNodes) {
      replaceTextSparky(child);
    }
  }
}

function replaceTextSparkies(node) {
  const find = /foxes/gi;
  const replace = "Sparkies";

  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(find, replace);
  } else {
    for (let child of node.childNodes) {
      replaceTextSparkies(child);
    }
  }
}

function replaceTextSugar(node) {
  const find = /arctic fox/gi;
  const replace = "Sugar";

  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(find, replace);
  } else {
    for (let child of node.childNodes) {
      replaceTextSugar(child);
    }
  }
}

function replaceTextSugars(node) {
  const find = /arctic foxes/gi;
  const replace = "Sugars";

  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(find, replace);
  } else {
    for (let child of node.childNodes) {
      replaceTextSugars(child);
    }
  }
}

replaceTextSugars(document.body);
replaceTextSugar(document.body);
replaceTextSparkies(document.body);
replaceTextSparky(document.body);