import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  name = 'olaf';
  // products: IProduct[] = [];
  term = ''
  loading = false
  // products$: Observable<IProduct[]>

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {

  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })
  }

}
