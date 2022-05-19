import { isNull, nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number  = 1;
  searchMode: boolean | undefined;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    
  }

  listProducts(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handleSearchProducts();
    }else{
      this.handleListproducts();
    }
    //this.handleListproducts();
  }

  handleListproducts(){
    // check if "Id" param is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId) {
        // get the "id" and convert it to number
        this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      
    }else{
      // Not category id available...default category id 1
      this.currentCategoryId = 1;
    }

    // now get the products for given category ID
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  handleSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    // now search for the products using keywords
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    );
    console.log("Handle search products passed");
  }

}
