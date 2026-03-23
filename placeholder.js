document.querySelectorAll('script[type="text/placeholder"]').forEach(script => {
  const paragraphs = parseInt(script.dataset.paragraphs) || 1;
  const linesPerParagraph = parseInt(script.dataset.lines) || 10;
  const animation = script.dataset.animation || 'glow';

  for (let p = 0; p < paragraphs; p++) {
    placeholderLinesAtScript(script, linesPerParagraph, animation);
  }
});

function placeholderLinesAtScript(currentScript, lineCount = 10, animation = 'glow') {
  const container = document.createElement('div');
  container.className = animation === 'wave' ? 'placeholder-wave' : 'placeholder-glow';
  container.style.marginBottom = '1rem'; // space between paragraphs

  const minWords = 3;
  const maxWords = 6;

  for (let i = 0; i < lineCount; i++) {
    const line = document.createElement('div');
    const wordCount = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;

    for (let j = 0; j < wordCount; j++) {
      const word = document.createElement('span');
      const width = Math.floor(Math.random() * 50) + 20; // 20%-70%
      word.className = 'placeholder';
      word.style.width = width + '%';
      word.style.display = 'inline-block';
      word.style.marginRight = '4px';
      line.appendChild(word);
    }

    container.appendChild(line);
  }

  currentScript.parentNode.insertBefore(container, currentScript.nextSibling);
}