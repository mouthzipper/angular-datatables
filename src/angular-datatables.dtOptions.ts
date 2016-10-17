import 'jquery';
import 'datatables.net';
declare var $: any;

export class DTOptions {

  bAutoWidth: boolean;

  constructor() {
    this.bAutoWidth = $.fn.DataTable.defaults.bAutoWidth;
  }
}
