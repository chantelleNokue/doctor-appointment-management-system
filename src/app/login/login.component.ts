import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pattient } from '../patient';
import { PatientServiceService } from '../patient-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  patient : Pattient = new Pattient();

  constructor(private patientService: PatientServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }


  savePatient(){
     this.patientService.logedPatient(this.patient).subscribe( data =>{
     if(data.response=="You are loged in"){
      this.gotoPatientLogin()
     }
    } ,    error =>console.log("you are not available"));

   }


 gotoPatientLogin(){
    this.router.navigate(["/description"])


   }


 onSubmit(){
  console.log(this.patient);
  this.savePatient();
 }

}
