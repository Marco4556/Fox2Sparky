function replaceText(node, find, replace) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(find, replace);
  } else {
    for (let child of node.childNodes) {
      replaceText(child, find, replace);
    }
  }
}


function applyReplacements(node = document.body) {
  replaceText(node, /volpi artiche/gi, "Sugar");
  replaceText(node, /volpe artica/gi, "Sugar");
  replaceText(node, /volpi rosse/gi, "Sparky");
  replaceText(node, /volpe rossa/gi, "Sparky");
  replaceText(node, /volpi/gi, "Sparky");
  replaceText(node, /volpe/gi, "Sparky");

  replaceText(node, /arctic foxes/gi, "Sugars");
  replaceText(node, /arctic fox/gi, "Sugar");
  replaceText(node, /red foxes/gi, "Sparkies");
  replaceText(node, /red fox/gi, "Sparky");
  replaceText(node, /foxes/gi, "Sparkies");
  replaceText(node, /fox/gi, "Sparky");
}

// Apply replacements to initial page load
applyReplacements();

// Watch for dynamically added content
const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    // Apply replacements to added nodes
    for (let node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
        applyReplacements(node);
      }
    }
  }
});

// Start observing the document for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});