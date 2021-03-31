import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemModule } from '../list-user/itemModule';

@Component({
  selector: 'user-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router) { }
  userFound!: boolean;
  
  i: number = 0;
  info!: ItemModule[];
  searchSubmit!:boolean;

  formControls: any;
  searchForm!: FormGroup;

   searchText!:string;
   sname!:string;

  

  ngOnInit(): void {
    const check = sessionStorage.getItem("userLoggedIn");
    if(check){
      this.userFound=true;
    }
    // this.itemsPresent();
    console.log( this.info);
    this.searchForm = this.formBuilder.group({
      searchName: ''
      
    });
    this.formControls = this.searchForm.controls;
  }

  

  
  handelSearchSubmit(event:any){
    sessionStorage.setItem("searchItemName",event.searchName);
    this.router.navigate(['./SearchList']); 
    
  }


  logout(){
    sessionStorage.removeItem("userLoggedIn");
  }


}
