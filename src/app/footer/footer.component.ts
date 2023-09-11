import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DataAccessService } from '../shared/services/data-access/data-access.service';
import { FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { SubscriptionBody } from '../shared/interfaces/interfaces';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private icons: string[] = ['facebook', 'instagram', 'linkedIn', 'twitter', 'youtube']
  public emailInput: FormControl<string | null> = new FormControl('');
  public subForm = this.formBuilder.group({
    email: ['', Validators.required]
  });

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, public dataAccess: DataAccessService, private formBuilder: FormBuilder) {
    this.icons.forEach(iconAdress => {
      this.matIconRegistry.addSvgIcon(
        iconAdress,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/icons/${iconAdress}.svg`)
      );
    })
  }
  public postSubscription() {
    let email: SubscriptionBody = this.subForm.value

    const headers = new HttpHeaders
    headers.set('Content-Type', 'application/json')


    this.dataAccess.postSubscription(email, { headers: headers }).subscribe(({
      next: (res) => {
        console.log(res);
        this.subForm.reset();
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    })
    );
  }

}
