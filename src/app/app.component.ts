import { Component } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [ CanvasComponent, ToolBarComponent, NavBarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent
{
  title = 'AlgorithmsVisualization';
}
