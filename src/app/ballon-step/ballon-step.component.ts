import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-ballon-step',
  templateUrl: './ballon-step.component.html',
  styleUrls: ['./ballon-step.component.css']
})
export class BallonStepComponent implements OnInit {

  @Output()
  sectionFinished: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  letterSection = this._formBuilder.group({
    bornNum: ['', [Validators.required, Validators.pattern("19258070722")]],
  });

  balloonSection = this._formBuilder.group({
    phoneNum: ['', [Validators.pattern("603765287|603 765 287|\\+420603765287|\\+420 603 765 287")]],
  });


  emitIfValid() {
    if (this.balloonSection.valid) {
      console.log("EMITTED")
      this.sectionFinished.emit();
    }
  }
}
