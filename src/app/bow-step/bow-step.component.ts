import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-bow-step',
  templateUrl: './bow-step.component.html',
  styleUrls: ['./bow-step.component.css']
})
export class BowStepComponent implements OnInit {

  @Output()
  sectionFinished: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  bowSection = this._formBuilder.group({
    lockerName: ['', [Validators.required, Validators.pattern("Filip Chum")]],
  });

  arrowSection = this._formBuilder.group({
    bridgeNum: ['', [Validators.required, Validators.pattern("120-004")]],
  });


  emitIfValid() {
    if (this.arrowSection.valid) {
      console.log("EMITTED")
      this.sectionFinished.emit();
    }
  }


}
