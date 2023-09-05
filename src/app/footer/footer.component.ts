import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private icons: string[] = ['facebook','instagram','linkedIn', 'twitter', 'youtube']

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.icons.forEach(iconAdress => {
      this.matIconRegistry.addSvgIcon(
        iconAdress,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`../../assets/icons/${iconAdress}.svg`)
      );
    })
    
  }
}
