import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 33; i++) {
  tmpl += `<features-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('features-${i < 9 ? `0${i + 1}` : (i + 1)}')"></features-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="features-temp" />`

@Component({
  selector: 'features',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class FeaturesComponent {

  getContent(id) {
    var $temp = $("#features-temp");
    $temp.val($(id).html()).select();
    document.execCommand("copy");
    $temp.remove();
  }
}
