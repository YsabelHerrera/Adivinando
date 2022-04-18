import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-entered-number',
  templateUrl: './get-entered-number.component.html',
})
export class GetEnteredNumberComponent implements OnInit {
  ejercicioForm!:FormGroup;
  guessedNumber!: number;
  error: boolean = false;
  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
    this.ejercicioForm = this.formBuilder.group({
      enteredNumber: [1, [Validators.min(1), Validators.max(10000000000), Validators.required]]

    })

    this.ejercicioForm.get('enteredNumber')?.valueChanges.subscribe( cantidad => {
      console.log(cantidad)
    

      if (cantidad > 10000000000){
        this.error = true;
        this.ejercicioForm.controls['enteredNumber'].setValue(10000000000)
      }
    })
  }



  onSubmit() {
    let enteredNumber = this.ejercicioForm.value.enteredNumber
    this.guessedNumber = enteredNumber*1
    console.log(this.ejercicioForm.value.enteredNumber)
    alert("El número que has ingresado es:  "  +  this.guessedNumber) 
  }
}
