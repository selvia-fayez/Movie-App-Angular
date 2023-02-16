import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mediaitem',
  templateUrl: './mediaitem.component.html',
  styleUrls: ['./mediaitem.component.css']
})
export class MediaitemComponent {
  @Input() item:any;   
}
