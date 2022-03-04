import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { comparePassword, forbiddenNameValidator } from '../common/functions';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  checkoutForm!: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuidler: FormBuilder
  ) {}

  ngOnInit(): void {
    this.checkoutForm = this.formBuidler.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern('^[a-zA-Z]+'),
          forbiddenNameValidator(['admin', 'manager']),
        ],
      ],
      address: ['', [Validators.required, Validators.minLength(4)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-z-]+.[a-z-.]+$'),
        ],
      ],
      pw: this.formBuidler.group(
        {
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
        },
        { validators: comparePassword }
      ),
    });
  }

  items = this.cartService.getItems();

  onSubmit() {
    this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
