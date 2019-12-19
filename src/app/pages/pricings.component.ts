import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 10; i++) {
  tmpl += `<pricings-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('pricings-${i < 9 ? `0${i + 1}` : (i + 1)}')"></pricings-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="pricings-temp" />`

@Component({
  selector: 'pricings',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class PricingsComponent {

  getContent(id) {
    var $temp = $("#pricings-temp");
    $temp.val($(id).html()).select();
    document.execCommand("copy");
    $temp.remove();
  }
}
