import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { OrderDto } from '../models/orderDto';

@Component({
  selector: 'app-order-summarycomponent',
  standalone: false,
  templateUrl: './order-summarycomponent.html',
  styleUrl: './order-summarycomponent.css'
})
export class OrderSummarycomponent {
 
  constructor(private route: ActivatedRoute,private orderservice: OrderService,private router: Router)
{
}
orderSummary?: OrderDto;
obj?:OrderDto;
total?:any;
 showDialog: boolean = false;
  ngOnInit(){
    const data=this.route.snapshot.queryParams['data'];
    this.obj=JSON.parse(data);
    this.obj.userid=1;
    this.orderSummary=this.obj;

    this.total=this.orderSummary.fooditemlist.reduce((accumulator, currentvalue) => accumulator + (currentvalue.price * currentvalue.quantity), 0);
  }

  saveOrder(){
  this.orderservice.saveOrder(this.orderSummary).subscribe(
    (response:any)  => {
      this.showDialog=true;
     
    }
    ,
    (error:any) => {
      console.error('Failed to save order:', error);
  });
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']);
  }

}

