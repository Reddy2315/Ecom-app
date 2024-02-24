// import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";

@Component({
    selector: 'product-info',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'
    ]
})
export class ProductComponent implements OnInit {

    products: any[] = [];
    

    constructor(private productService: ProductService, private router: Router) {

    }

    // ngOnInit(): void {

    //    this.products=this.service.getProducts().subscribe((data) => this.products=data);
    // }
    ngOnInit(): void {
        this.getProductsList();

    }
    private getProductsList() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data; // Assign data to this.products inside the subscription callback
        });
    }
    updateProduct(id: any) {
        this.router.navigate(['/update-product', id]);
    }

    // deleteProduct(id: any) {
    //     this.productService.deleteProduct(id).subscribe(data => {
    //         console.log(data);
    //         this.getProductsList();
    //     })
    // }

    confirmDelete(id: any): void {
        // Display confirmation alert
        if (confirm("Are you sure you want to delete this product?")) {
          // If user confirms, call the deleteProduct method
          this.deleteProduct(id);
        }
      }
    
      deleteProduct(id:any): void {
        // Implement the logic to delete the product here
        // For example, call a method from the ProductService
        this.productService.deleteProduct(id).subscribe(
          () => {
            console.log('Product deleted successfully.');
            // Optionally, navigate to another page after deletion
            this.getProductsList();
            
          },
          (error) => {
            console.error('Error deleting product:', error);
          }
        );
      }

    productDetails(id: any) {
        this.router.navigate(['/product-details', id]);
        
    }
    //    msg:String= "http://localhost:8081/Ecom/ProductResource/products"; 

    // id:number=1001;
    // name:string="Laptop";
    // price:number=56500.25;

    // products:any;
    // constructor(private http:HttpClient){

    // }
    // ngOnInit(): void {
    //   let res=this.http.get("http://localhost:8081/Ecom/ProductResource/products");
    //    res.subscribe((data) => this.products=data);
    // }


}