import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appoinmnt } from '../appoinmnt';
import { AppoinmntService } from '../appoinmnt.service';
import { EventEmitterService } from '../event-emitter.service';



@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})
export class AppoinmentsComponent implements OnInit {
  panelOpenState = false;
  appoinmnt: Appoinmnt[];
   seeitt: boolean= false;
   id: number;





  constructor(private appoinmntService: AppoinmntService,
    private route: ActivatedRoute,
    private router: Router,private eventEmitterService: EventEmitterService
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']


    if (this.eventEmitterService.subsVar==undefined) {
      this.eventEmitterService.subsVar = this.eventEmitterService.
      invokeFirstComponentFunction.subscribe((name:string) => {
        this. getAppinmty();
      });
    }
  }

  getAppinmty(){
    this.appoinmntService.getAppnmntsList().subscribe(data => {
      this.appoinmnt = data;
    });
  }

  deleteAppnmntss(id: number) {
    this.appoinmntService.deleteAppnmnt(id).subscribe(
      data => {
        console.log('deleted response', data);
        this.getAppinmty();
      }
    )
  }

  // deleteAppoinmt(id: number){
  //   this.appoinmntService.deltAppmnt(id).subscribe(data =>{
  //     console.log("deleted");
  //    }


  //   )

  // }













}
