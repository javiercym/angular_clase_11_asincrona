import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  
  public formLogin!: FormGroup;
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void{
    
  }
}
