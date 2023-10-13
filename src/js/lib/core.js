const $ = function(selector) {
  return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
  if (!selector) {
    return this; // Возвращаем пустой объект
  }
  Object.assign(this, document.querySelectorAll(selector));

  return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;