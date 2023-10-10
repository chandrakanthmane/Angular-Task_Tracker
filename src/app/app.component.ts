import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UIService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTask:boolean=false;

  subscription: Subscription;

  constructor(private uiService: UIService){
    this.subscription= this.uiService.onToggle().subscribe((value) => this.showTask= value);
    //alert(this.showAddTask);
  }
}
