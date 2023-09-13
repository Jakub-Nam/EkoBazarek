import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataAccessService } from '../core/services/data-access/data-access.service';
import { FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionBody } from '../shared/interfaces/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public emailInput: FormControl<string | null> = new FormControl('');
  public subForm = this.formBuilder.group({
    email: ['', Validators.required]
  });

  constructor( 
    public dataAccess: DataAccessService,
     private formBuilder: FormBuilder,
     private _snackBar: MatSnackBar
     ) {
  }

  public postSubscription() {
    let email: SubscriptionBody = this.subForm.value

    const headers = new HttpHeaders
    headers.set('Content-Type', 'application/json')

    this.dataAccess.postSubscription(email, { headers: headers }).subscribe(({
      next: (res) => {
        this.openSnackBar("Subskrypcja powiodla się.")
        this.subForm.reset();
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    })
    );
  }

  public openSnackBar(message: string): void {
    this._snackBar.open(message, 'Zamknij', {
        duration: 3000,
        horizontalPosition: 'start',
        verticalPosition: 'top',
    });
}


}
