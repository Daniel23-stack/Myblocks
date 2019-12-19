import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 22; i++) {
  tmpl += `<call-to-action-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('call-to-action-${i < 9 ? `0${i + 1}` : (i + 1)}')"></call-to-action-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="call-to-action-temp" />`

@Component({
  selector: 'call-to-action',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class CallToActionComponent {

  getContent(id) {
    var $temp = $("#call-to-action-temp");
    $temp.val($(id).html()).select();
    document.execCommand("copy");
    $temp.remove();
  }
}
