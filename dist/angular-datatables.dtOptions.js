"use strict";
require('jquery');
require('datatables.net');
var DTOptions = (function () {
    function DTOptions() {
        this.bAutoWidth = $.fn.DataTable.defaults.bAutoWidth;
    }
    return DTOptions;
}());
exports.DTOptions = DTOptions;
//# sourceMappingURL=angular-datatables.dtOptions.js.map