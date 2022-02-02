import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportServicesHandyman } from 'src/app/models/ServicesHandyman';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_handyman:['',Validators.required],
      id_service:['',Validators.required],
      start_date:['',Validators.required],
      start_time:['',Validators.required],
      end_date:['',Validators.required],
      end_time:['',Validators.required],
      week:['',[Validators.required, Validators.minLength(1), Validators.maxLength(2)]]
    })
   }

  ngOnInit(): void {
  }

  createReport(){
    const Report: ReportServicesHandyman = {
      id_handyman: this.form.value.id_handyman,
      id_service: this.form.value.id_service,
      start_date: this.form.value.start_date,
      start_time: this.form.value.start_time,
      end_date: this.form.value.end_date,
      end_time: this.form.value.end_time,
      week: this.form.value.week,
    }
    console.log(Report);
  }

}
