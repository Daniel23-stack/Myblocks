import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 34; i++) {
  tmpl += `<contents-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('contents-${i < 9 ? `0${i + 1}` : (i + 1)}')"></contents-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="contents-temp" />`

@Component({
  selector: 'contents',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class ContentsComponent {

  getContent(id) {
    var $temp = $("#contents-temp");
    $temp.val($(id).html()).select();
    document.execCommand("copy");
    $temp.remove();
  }
}
