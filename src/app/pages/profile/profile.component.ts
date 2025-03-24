import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Profile component works!</p>
  
  <a href="
  web+stellar:pay?destination=GDMBM7P2ZVD64DSMQJIR67CZFWU7EQRI4YMRLZ2XOYT3V7YUBGZ4RXHF&amount=1&asset_code=EURMTL&asset_issuer=GACKTN5DAZGWXRWB2WLM6OPBDHAMT6SJNGLJZPQMEZBUR4JUGBX2UK7V&memo=sign&memo_type=text">Login with Sunce Wallet</a>
  
  
  `,
  styles: ''
})
export class ProfileComponent {}
