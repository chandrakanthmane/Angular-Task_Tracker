import { Component, OnDestroy, OnInit } from '@angular/core';
import { UIService} from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  title = 'task tracker';
  showAddTask: boolean =false;
  subscription: Subscription;

  constructor(private uiService: UIService,private route: Router){
    this.subscription= this.uiService.onToggle().subscribe((value) => this.showAddTask= value);
    //alert(this.showAddTask);
  }

  ngOnInit(): void {
    
  }

  toggleBtn(){
    this.uiService.onAddTask();
  }

  onRoute(router: string){
    return this.route.url === router;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
