import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appoinmnt } from '../appoinmnt';
import { AppoinmntService } from '../appoinmnt.service';
import { EventEmitterService } from '../event-emitter.service';




@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  appoinmnt: Appoinmnt = new Appoinmnt();


  constructor(private appoinmntService: AppoinmntService,
     private eventEmitterService: EventEmitterService
     ,private router: Router) { }


  ngOnInit(): void {
  }
  firstComponentFunction(){
    this.eventEmitterService.onFirstComponentButtonClick();
  }

  saveAppoinmnt() {
    this.appoinmntService.makeAppoinment(this.appoinmnt).subscribe(data =>{
        console.log(data)
        this.gotoAppinmntView()
    },
    error => console.log(error)
    );
  }

  gotoAppinmntView(){
    this.router.navigate(['/appoinments/:id'])
  }

  onSubmitt(){
    console.log(this.appoinmnt);
    this.saveAppoinmnt();

  }


}
