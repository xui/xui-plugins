xui.extend({
  /**
  * 
  * This executes a callback only when the element appears on the DOM
  * 
  * @param {Function} callback Function that will be called when the element appears on the DOM. 
  * @return self
  * @example
  * 
  * ### DOMNodeAppear 
  *  
  * syntax:
  *
  *    DOMNodeAppear(callback);
  * 
  * example: 
  * 
  *    x$('#node').DOMNodeAppear(function () {
  *      //do something
  *    });
  * 
  */
  DOMNodeAppear: function(callback) {
    var self = this,
        head = x$('head'),

        //Options of animation
        options = {
          keyframes: "@keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } } @-moz-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } } @-webkit-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } } @-ms-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } } @-o-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }, ",
          selector: self.selector,
          stylesClass: self.selector.replace(".", ""),
          styles: self.selector + " { animation-name: nodeInserted; -webkit-animation-name: nodeInserted; animation-duration: 0.001s; -webkit-animation-duration: 0.001s; }"
        },

        //list of events
        events = 'animationstart webkitAnimationStart oanimationstart MSAnimationStart'.split(' '),

        //Callback of dom node appear
        animationStart = function (event) {
          var target = x$(event.target),
          targetSelector = x$(options.selector);

          targetSelector = targetSelector[targetSelector.length -1];

          if ((event.animationName === 'nodeInserted' && target[0] === targetSelector) && typeof callback === 'function') {
            callback.call(target[0], target);
          }
        };

    //if the keyframes aren't present, add them in a style element
    if(!x$("style.domnodeappear-keyframes").length) {
      head.bottom("<style class='domnodeappear-keyframes'>" + options.keyframes + "</style>");
    }

    //add animation to selected element
    head.bottom("<style class=\"" + options.stylesClass + "-animation\">" + options.styles + "</style>")

    //Attaches events to the document
    events.forEach(function (eventString) {
      x$(document).on(eventString, animationStart);
    });

    return this;
  }
});

//It just exists to get the selector
//It saves the reference of the xui and replaces the main "find" in order to save the selector
(function (window) {
  var _find = xui.fn.find;

  xui.fn.find = function (q, context) {
    var Xui = new _find(q, context);
    Xui.selector = q;
    return Xui;
  };
}(window));
