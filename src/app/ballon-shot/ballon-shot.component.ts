import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-ballon-shot',
  templateUrl: './ballon-shot.component.html',
  styleUrls: ['./ballon-shot.component.css']
})
export class BallonShotComponent implements OnInit {
  animationHasEnded: boolean = false;
  leftToPanic: boolean = false;

  @Output()
  balloonFound: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder) {}

  spotNameGroup = this._formBuilder.group({
    spotName: ['', [Validators.pattern("Onen svět|Langova rozhledna|rozhledna")]],
  });


  ngOnInit(): void {
    setTimeout(() => {
      this.animationHasEnded = true;
    }, 4500)


    setTimeout(() => {
      this.leftToPanic = true;
    }, 6500)
  }

  emitIfValid() {
    if (this.spotNameGroup.valid && this.spotNameGroup.value.spotName?.length != 0) {
      this.balloonFound.emit();
    }
  }
}
