import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Profile component works!</p>

  <div id="qrcode"></div>

  <button (click)="login()">Login</button>
  
  <a href="
  web+stellar:pay?destination=GDMBM7P2ZVD64DSMQJIR67CZFWU7EQRI4YMRLZ2XOYT3V7YUBGZ4RXHF&amount=1&asset_code=EURMTL&asset_issuer=GACKTN5DAZGWXRWB2WLM6OPBDHAMT6SJNGLJZPQMEZBUR4JUGBX2UK7V&memo=sign&memo_type=text">Login with Sunce Wallet</a>
  
  
  `,
  styles: ''
})
export class ProfileComponent {
  async login() {
    debugger;

    try {
      const response = await fetch('https://eurmtl.me/remote/sep07/auth/init', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          domain: window.location.hostname,
          nonce: Math.random().toString(36).substring(2)
        })
      });

      debugger;

      if (!response.ok) {
        throw new Error('Response was not OK');
      }

      const { qr_path, uri, status_url } = await response.json();

      // Отображаем QR-код **
      document.getElementById("qrcode")!.innerHTML = `
        <img src="${qr_path}" alt="QR Code">
        <p>Or use the link: <a href="${uri}">SEP-07</a></p>
      `;

      // Запускаем опрос статуса
      async function pollStatus() {
        try {
          const statusResponse = await fetch(status_url);
          const statusData = await statusResponse.json();
          
          if (statusData.authenticated) {
            alert(`Authentication successful!\nAddress: ${statusData.client_address}`);
          } else {
            setTimeout(pollStatus, 5000);
          }
        } catch (err) {
          console.error('Status check error:', err);
          setTimeout(pollStatus, 5000);
        }
      }
      
      pollStatus();
    } catch (err) {
      console.error(err);
      alert('An error occurred while initializing authentication');
    }

  }
}
