import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  
  public validarFormulario!: FormGroup;
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void{
    this.validarFormulario = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(10)
          
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      text:['',
        [
          Validators.required
        ]
      ]
    })
  }

}
