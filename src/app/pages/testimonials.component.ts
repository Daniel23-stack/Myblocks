import { Component } from '@angular/core';
declare var $: any;

let tmpl = '';
for (let i = 0; i < 10; i++) {
  tmpl += `<testimonials-${i < 9 ? `0${i + 1}` : (i + 1)} class="block" (click)="getContent('testimonials-${i < 9 ? `0${i + 1}` : (i + 1)}')"></testimonials-${i < 9 ? `0${i + 1}` : (i + 1)}>`
}
tmpl += `<input class="textBox" type="text" id="testimonials-temp" />`

@Component({
  selector: 'testimonials',
  template: tmpl,
  styleUrls: ['../app.component.css']
})

export class TestimonialsComponent {

  getContent(id) {
    var $temp = $("#testimonials-temp");
    $temp.val($(id).html()).select();
    document.execCommand("copy");
    $temp.remove();
  }
}
