xui.extend({
		
    appears: function(callback) {
        var self = this;

		    return this;
    }
});

//It just exists to get the selector
//It saves the reference of the xui and replaces the main "find" in order to save the selector
(function (window) {
	var _xui = xui;
	window.x$ = window.xui = xui = function(q, context) {	
			var Xui = new _xui.fn.find(q, context);
			Xui.selector = q;
	    return Xui;
	};
}(window));