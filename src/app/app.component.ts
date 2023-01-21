import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatStepper} from "@angular/material/stepper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _formBuilder: FormBuilder) {}
  GameStateType = GameState;
  state: GameState = GameState.INTRODUCTION;
  title = 'hugoroza';
  @ViewChild('stepper') private myStepper?: MatStepper;


  nextStep() {
    this.myStepper?.next();
  }

  startHelp(): void {
    this.state = GameState.HELP;
  }

  plateNameGroup = this._formBuilder.group({
    plateName: ['', Validators.pattern("FULLSPÄCKAD|fullspäckad")],
  });
  shouldShowShot: boolean = false;
  shouldShowRevelFirst: boolean = false;

  ngOnInit(): void {
  }

  snapBalloonLine() {
    this.state = GameState.PARTY;
  }

  finish() {
    this.state = GameState.MISSING_BALOON
    setTimeout(() => {
      this.shouldShowShot = true;
      console.log("should show shot")
    }, 5000)
    setTimeout(() => {
      this.shouldShowShot = false;
    }, 11500)
    setTimeout(() => {
      this.shouldShowRevelFirst = true;
    }, 11500)

  }
}


enum GameState {
  INTRODUCTION,
  HELP,
  PARTY,
  MISSING_BALOON
}
