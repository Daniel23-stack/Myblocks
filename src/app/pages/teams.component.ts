import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 8; i++) {
  tmpl += `<teams-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('teams-${i < 9 ? `0${i + 1}` : (i + 1)}')"></teams-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="teams-temp" />`

@Component({
  selector: 'teams',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class TeamsComponent {

  getContent(id) {
    var $temp = $("#teams-temp");
    $temp.val($(id).html()).select();
    document.execCommand("copy");
    $temp.remove();
  }
}
