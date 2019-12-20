import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 10; i++) {
  tmpl += `<contacts-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('contacts-${i < 9 ? `0${i + 1}` : (i + 1)}')"></contacts-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="contacts-temp" />`

@Component({
  selector: 'contacts',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class ContactsComponent {

  getContent(id) {
    // var $temp = $("#contacts-temp");
    // $temp.val($(id).html()).select();
    // document.execCommand("copy");
    // $temp.remove();
    window.parent.postMessage({
      'func': 'parentFunc',
      'message': $(id).html()
    }, "*");
  }
}
