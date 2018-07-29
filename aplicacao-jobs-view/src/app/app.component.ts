import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Angular App!';
  cliente: Cliente;
  selectedValues: string[] = [];
  vicente: string = "";
  constructor(
  	//console.log("Entrou no construct"),
  private http: HttpClient,
  ){}

   firebaseUrl = 'firebase';

  snap = {};
  
  ngOnInit(): void {
  	console.log("Entrou no init");
  	this.http.get<Cliente>(this.firebaseUrl).subscribe(res =>
    this.cliente = res);
  }
   


}
