import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('loginForm')
  form!: NgForm; 
  hide = true;
  messageService: any;
  onSubmit(){
    console.log(this.form);
  }

  ngAfterViewInit() {
    this.messageService.addAll(
    [{key: 'tc', severity: 'info',
    summary: '30 Nov 2020', detail: 'Important message 1'},
    {key: 'tc', severity: 'info',
    summary: '30 Nov 2020', detail: 'Important message 2'}]);
  }
}
