import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private route: Router, private uiService: UIService){}
onback(){
  //this.uiService.onAddTask();
  this.route.navigateByUrl('/task');
}
}
