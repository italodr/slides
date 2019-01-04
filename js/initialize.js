// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
  history: true,
  dependencies: [
    { src: '../plugin/markdown/marked.js' },
    { src: '../plugin/markdown/markdown.js' },
    { src: '../plugin/zoom-js/zoom.js', async: true },
    { src: '../plugin/notes/notes.js', async: true },
    {
      src: '../plugin/highlight/highlight.js',
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    },
    {
      src: '../plugin/external/external.js',
      condition: function() {
        return !!document.querySelector('[data-external]');
      }
    }
  ]
});

function onDocumentReady(fn) {
  const complete = document.readyState === 'complete';
  const notLoading = document.readyState !== 'loading';
  const ready = document.attachEvent ? complete : notLoading;
  if (ready) {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

onDocumentReady(function() {
  document.addEventListener('click', function(event) {
    var link = event.target.getAttribute('href');
    if (link && link.substring(0, 4) === 'http') {
      event.target.setAttribute('target', '_blank');
    }
  });
});
