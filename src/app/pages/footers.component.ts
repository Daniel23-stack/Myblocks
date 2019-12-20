import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 12; i++) {
  tmpl += `<footers-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('footers-${i < 9 ? `0${i + 1}` : (i + 1)}')"></footers-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="footers-temp" />`

@Component({
  selector: 'footers',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class FootersComponent {

  getContent(id) {
    // var $temp = $("#footers-temp");
    // $temp.val($(id).html()).select();
    // document.execCommand("copy");
    // $temp.remove();
    window.parent.postMessage({
      'func': 'parentFunc',
      'message': $(id).html()
    }, "*");
  }
}
