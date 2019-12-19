import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 20; i++) {
  tmpl += `<headers-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('headers-${i < 9 ? `0${i + 1}` : (i + 1)}')"></headers-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="headers-temp" />`

@Component({
  selector: 'headers',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class HeadersComponent {

  getContent(id) {
    var $temp = $("#headers-temp");
    $temp.val($(id).html()).select();
    document.execCommand("copy");
    $temp.remove();
  }
}
