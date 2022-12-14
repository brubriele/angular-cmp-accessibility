import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular - Treinamento ALURA | Componentes Acessíveis';
  public form: FormGroup;
  public test: string = null;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: null,
        disabled: false
      }]
    })
  }

  public submit(): void {
    // this.form.get('yesNoAnswer').disable()
    console.log(this.form.value)
  }

}



