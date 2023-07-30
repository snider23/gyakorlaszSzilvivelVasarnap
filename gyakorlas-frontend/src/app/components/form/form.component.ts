import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private formService: FormService) {
    this.form= this.formBuilder.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  sendData(){
    const data= this.form.value;
    console.log(data)
    this.formService.sendDataToBackend(data).subscribe({
      next: value => {}, //itt jön a data
      error: err => {},
      complete: () => console.log('Form has saved');
    });
  }
}
