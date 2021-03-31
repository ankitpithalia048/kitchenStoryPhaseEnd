import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css'],
})
export class AdditemComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formSubmitted!: boolean;
  formControls: any;
  userForm!: FormGroup;
  i: number = 0;
  value!:string;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required]],
      description: ['', Validators.required],
    });
    this.formControls = this.userForm.controls;
  }

  AddItemSubmitted(event: any) {
    this.formSubmitted = true;
    const nm = event.name;
    const pr = event.price;
    const des = event.description;

    this.value = nm + '+' + pr + '+' + des;
    // console.log(value);
    if (this.userForm.invalid) {
      return;
    } else {
      this.i = parseInt(localStorage.getItem('index') || '{}');
      if (localStorage.getItem('index') == null) {
        localStorage.setItem('index', '0');

        this.i = 0;
      }
      localStorage.setItem('item' + this.i, this.value);
      console.log(localStorage.getItem('item' + this.i));
      ++this.i;
      console.log(' i = ' + this.i);
      localStorage.setItem('index', this.i.toString());

      console.log(localStorage.getItem('index'));
      window.location.reload();
      
    }
  }


}
