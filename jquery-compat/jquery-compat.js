xui.extend({
    /**
     * Adds more DOM nodes to the existing element list.
     */
    add: function(q) {
        [].push.apply(this, slice(xui(q)));
        return this.set(this.reduce());
    },

    /**
     * Pops the last selector from XUI
     */
    end: function () {
        return this.set(this.cache || []);
    },

    /**
     * Sets the `display` CSS property to `block`.
     */
    show: function() {
        return this.setStyle('display','block');
    },

    /**
     * Sets the `display` CSS property to `none`.
     */
    hide: function() {
        return this.setStyle('display','none');
    },

    /**
     * Gets or sets `data` attributes on elements.
     */
    data: function(attr, val) {
        if (arguments.length == 2) {
            return this.attr('data-' + attr, val);
        } else {
            return this.attr('data-' + attr);
        }
    }
});
