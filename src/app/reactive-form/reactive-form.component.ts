import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
genders = ['male', 'female', 'not-prefer']

signupForm!:FormGroup;

ngOnInit(){
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'gender': new FormControl('male', Validators.required),
      'hobbies': new FormArray([])
    });
}

onSubmitForm(){
  console.log(this.signupForm);
  
}

get hobbiesControls() {
  return (this.signupForm.get('hobbies') as FormArray).controls;
}

onAddHobby(){
const control = new FormControl(null,Validators.required);
(<FormArray>this.signupForm.get('hobbies')).push(control)
}


}
