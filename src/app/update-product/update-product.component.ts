import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  id: any;
  product: Product = new Product;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(
      (data: Product) => {
        this.product = data; // Ensure that 'data' is of type 'Product'
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      const id = Number(myForm.value.id);
      const price = Number(myForm.value.price);

      if (!isNaN(id) && !isNaN(price) && typeof myForm.value.name === 'string') {
        window.alert("Successfully updated a Product!");
        this.productService.updateProduct(this.id, this.product).subscribe(
          data => {
            console.log(data);
            this.goToProductList();
          },
          error => console.log(error)
        );
      } else {
        window.alert("Fill correct Details");
      }
    } else {
      window.alert('Fill all required details! Product is not updated. Try again!');
    }
  }
  
  goToProductList() {
    this.router.navigate(['/product-info'])
  }
}





