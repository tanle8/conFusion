import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Feedback, ContactType } from "../shared/feedback";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // Declare a variable named feedbackForm with typed FormGroup
  feedbackForm: FormGroup;
  // Declare a variable named feedback with typed Feedback we created before
  feedback: Feedback;
  contactType = ContactType;

  constructor(private formbuilder: FormBuilder) {
    this.createForm();

   }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.formbuilder.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    })
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
