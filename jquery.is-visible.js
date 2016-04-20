(function($) {
    $.fn.isVisible = function(fn) {
        function findHidden(el) {
            var p;
            while(el) {
                p = el.parent();
                if(!p || p[0].tagName.toLowerCase()=='body') {
                    return false;
                }
                if(p.is(':visible')) {
                    return el;
                } else {
                    el = p;
                }
            }
            return false;
        }

        this.each(function() {
            var el = $(this);
            if(el.is(':visible')) {
                fn.call(el);
            } else {
                var hidden = findHidden(el);
                if(hidden) {
                    hidden.one('show', function() {
                        el.isVisible(fn);
                    });
                }
            }
        });
    }
})(jQuery);