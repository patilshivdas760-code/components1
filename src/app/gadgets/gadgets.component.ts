import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.scss']
})
export class GadgetsComponent implements OnInit {
      
  isformvalid : boolean = false;
  gadget_name : string = "god gifted";
  gadget_id : string = "1234";
  gadget_des : string = `<p class="alert alert-success">  <strong>  nature view </strong></p>`
  image_urls : string = `https://picsum.photos/536/354`;



  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isformvalid=true
    }, 3000);
  }

}
