import { Component, OnInit } from '@angular/core';
// import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) {

  }
  product: Product = new Product;

  ngOnInit(): void {
    this.product = {
      id: "",
      name: "",
      price: "",
    }

  }
  saveProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
      this.goToProductList();
    },
      error => console.log(error)
    );

  }
  goToProductList() {
    this.router.navigate(['/product-info'])
  }

  // onSubmit(myForm:any){
  //   console.log(myForm.value);
  //   window.alert("Successfully added a Product!");
  //   this.saveProduct();
  // }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const id = Number(myForm.value.id);
      const price = Number(myForm.value.price);
  
      if (!isNaN(id) && !isNaN(price) && typeof myForm.value.name === 'string') {
        window.alert("Successfully added a Product!");
        this.saveProduct();
      } else {
        window.alert("Fill correct Details");
      }
    } else {
      window.alert('Fill all required details! Product is not added. Try again!');
    }
  }
  
}
export class Product{
  id:any;
  name:any;
  price:any;
}