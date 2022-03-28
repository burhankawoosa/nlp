import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nlplvl1',
  templateUrl: './nlplvl1.component.html',
  styleUrls: ['./nlplvl1.component.css']
})
export class Nlplvl1Component implements OnInit {

  files: any;
  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void { }
 
  onFileSelect(event: any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.files = file;
    console.log(file);

  }
}

  onClickUpload(){
    const formData = new FormData();
    formData.append('file', this.files);
    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => console.log(res)
    );
  }
  }

