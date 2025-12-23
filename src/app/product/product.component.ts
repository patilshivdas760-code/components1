import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
       isformvalid : boolean = false;
      product_name : string = " vibes ";
      product_id : string = " 123";
      product_description : string = `<p class ="alert alert-info"> <strong> serenity </strong> </p>`;
      img_src: string =`https://picsum.photos/536/358` ;


  ngOnInit(): void {
    setTimeout(() => {
      this.isformvalid = true;
    }, 3000);
  }
}
