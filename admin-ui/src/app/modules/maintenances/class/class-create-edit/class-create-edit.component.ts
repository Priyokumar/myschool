import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiEndpoint } from 'src/app/modules/shared/model/shared.model';
import { IStandard } from '../../model/standard';

@Component({
  selector: 'app-class-create-edit',
  templateUrl: './class-create-edit.component.html',
  styleUrls: ['./class-create-edit.component.css']
})
export class ClassCreateEditComponent implements OnInit {

  standardForm: FormGroup;
  standardId: number;
  standard: IStandard;

  idCtrl = new FormControl('', null);
  nameCtrl = new FormControl('', Validators.required);
  descriptionCtrl = new FormControl('', Validators.required);
  sectiontrl = new FormControl('', null);
  errorMessage: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.standardForm = new FormGroup({
      idCtrl: this.idCtrl,
      nameCtrl: this.nameCtrl,
      descriptionCtrl: this.descriptionCtrl
    });

    this.activatedRoute.params.subscribe(params => {
      this.standardId = params.id;
      if (this.standardId) {
        this.getStandard();
      }
    });
  }

  ngOnInit() {
  }

  getStandard() {

    this.http.get<any>(ApiEndpoint.STANDARD + '/' + this.standardId).subscribe(data => {
      this.standard = data.data;
      this.setForm();
    }, err => {
      console.error(err);
      if (err.error && err.error.apiMessage) {
        this.errorMessage = err.error.apiMessage.detail;
      } else {
        this.errorMessage = err.message;
      }
    });
  }

  public save() {

    const standardPayload: IStandard = {

     description: this.descriptionCtrl.value,
     id: this.standardId,
     name: this.nameCtrl.value,
     sections: []

    };

    this.saveOrUpdateHttpObservable(standardPayload).subscribe(data => {

      this.router.navigate(['/admin/maintenances/classes']);

    }, err => {
      console.error(err);
      if (err.error && err.error.apiMessage) {
        this.errorMessage = err.error.apiMessage.detail;
      } else {
        this.errorMessage = err.message;
      }
    });
  }

  private saveOrUpdateHttpObservable(standardPayload: IStandard) {

    if (this.standardId) {
      return this.http.put(ApiEndpoint.STANDARD + '/' + this.standardId, standardPayload);
    } else {
      return this.http.post(ApiEndpoint.STANDARD, standardPayload);
    }
  }

  public setForm() {

    this.idCtrl.setValue(this.standard.id);
    this.descriptionCtrl.setValue(this.standard.description);
    this.nameCtrl.setValue(this.standard.name);

  }

}
