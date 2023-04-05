import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Inbox', icon: 'heart' },
    { title: 'Açai', url: '/acai', icon: 'heart' },
    { title: 'Bacaba', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Cupuaçu', url: '/folder/Archived', icon: 'heart' },
    { title: 'Taperebá', url: '/folder/Trash', icon: 'heart' },
    { title: 'Murici', url: '/folder/Spam', icon: 'heart' },
    { title: 'Cacau', url: '/folder/Spam', icon: 'heart' },
  ];

}
