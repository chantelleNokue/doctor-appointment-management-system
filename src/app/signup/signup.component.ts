import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { Pattient } from '../patient';
import { PatientServiceService } from '../patient-service.service';
import { FormGroup} from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';







export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm = new FormControl('', [Validators.pattern(/\s/), Validators.required]);



  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  patient : Pattient = new Pattient();




  constructor(private patientService: PatientServiceService
    ,private router : Router) { }

  ngOnInit(): void {

  }

  savePatient(){
     this.patientService.createPatient(this.patient).subscribe( data =>{
    console.log(data);
    this.gotoPatientLogin();
    },
    error =>console.log(error));
   }


 gotoPatientLogin(){
  this.router.navigate(["/login"])
   }


 onSubmit(){
  console.log(this.patient);
  this.savePatient();
 }





}
