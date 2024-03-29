import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  id:any;
  product: Product = new Product;
  constructor(private activateRoute:ActivatedRoute,
    private productService:ProductService,
    private router:Router){}
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.params['id'];
    this.product=new Product();
    this.productService.getProductById(this.id).subscribe(data=>{
      this.product=data;
    })
  }

  goBack(): void {
    // Navigate back to the previous page
    this.router.navigate(['/product-info']);
  }

}
