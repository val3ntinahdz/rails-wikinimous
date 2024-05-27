// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", function() {
  var editor = ace.edit("ace-editor");
  editor.setTheme("ace/theme/solarized_light");
  editor.session.setMode("ace/mode/javascript");
  editor.setOptions({
    maxLines: Infinity,
    showLineNumbers: true,
    showGutter: true,
    useSoftTabs: true,
    tabSize: 2
  });

  // Sincronizar contenido del editor con el campo oculto
  var hiddenField = document.getElementById('article_content');
  editor.session.on('change', function() {
    hiddenField.value = editor.getValue();
  });

  // Establecer el valor inicial del editor desde el campo oculto
  editor.setValue(hiddenField.value);
});
