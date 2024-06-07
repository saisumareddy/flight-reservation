import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minDate: Date;
  flightDetails = this._formBuilder.group({
    departure:['',Validators.required],
    destination:['',Validators.required],
    departuredate:['',Validators.required],
    returndate:['',Validators.required],
    flightclass:['',Validators.required],
    passengers: ['', Validators.required],
  });
  get departure():any { return this.flightDetails.get('departure'); }
  get destination():any { return this.flightDetails.get('destination'); }
  get departuredate():any { return this.flightDetails.get('departuredate'); }
  get returndate():any { return this.flightDetails.get('returndate'); }
  get flightclass():any { return this.flightDetails.get('flightclass'); }
  get passengers():any { return this.flightDetails.get('passengers'); }

  personalInformation= this._formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
    
  });
  cities: string[] = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Surat"
  ];
  get email():any { return this.personalInformation.get('email'); }
  get firstname():any { return this.personalInformation.get('firstname'); }
  get lastname():any { return this.personalInformation.get('lastname'); }
  get phone():any { return this.personalInformation.get('phone'); }
  classes:string[] = ['Economy','Business','First Class','Premium Economy']
  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog) {
    this.minDate = new Date();
  }
  confirmedScreen = false;
  openDialog(): void {
    const ref = this.dialog.open(DialogComponent, { disableClose: true });
    ref.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.confirmedScreen = result;
    });
  }
  closeConfirmedScreen() {
    this.personalInformation.reset();
    this.flightDetails.reset();
    this.confirmedScreen = false

  }
}

