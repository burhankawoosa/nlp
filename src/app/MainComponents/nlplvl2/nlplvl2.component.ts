import { Component, OnInit } from '@angular/core';
interface Label {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-nlplvl2',
  templateUrl: './nlplvl2.component.html',
  styleUrls: ['./nlplvl2.component.css']
})


export class Nlplvl2Component implements  OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  onFileSelect(event: any){
    console.log(event);

  }

  labels: Label[] = [
    {value: 'cc-0', viewValue: 'Cheif Complaint'},
    {value: 'hpi-1', viewValue: 'History Of Present Illness'},
    {value: 'mh-2', viewValue: 'Medical History'},
  ];
}
