import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 12; i++) {
  tmpl += `<forms-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('forms-${i < 9 ? `0${i + 1}` : (i + 1)}')"></forms-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="forms-temp" />`

@Component({
  selector: 'forms',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class FormsComponent {

  getContent(id) {
    // var $temp = $("#forms-temp");
    // $temp.val($(id).html()).select();
    // document.execCommand("copy");
    // $temp.remove();
    window.parent.postMessage({
      'func': 'parentFunc',
      'message': $(id).html()
    }, "*");
  }
}
