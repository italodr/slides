// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
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
