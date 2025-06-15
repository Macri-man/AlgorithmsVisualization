import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-line',
  imports: [ CommonModule, DragDropModule ],
  templateUrl: './line.component.html',
  styleUrl: './line.component.scss'
})
export class LineComponent
{
  @Input() x1!: number;
  @Input() y1!: number;
  @Input() x2!: number;
  @Input() y2!: number;

  @Output() x1Change = new EventEmitter<number>();
  @Output() y1Change = new EventEmitter<number>();
  @Output() x2Change = new EventEmitter<number>();
  @Output() y2Change = new EventEmitter<number>();

  get controlX()
  {
    return (this.x1 + this.x2) / 2;
  }

  get controlY()
  {
    return (this.y1 + this.y2) / 2 - 50;
  }

  get path(): string
  {
    return `M${this.x1} ${this.y1} Q ${this.controlX} ${this.controlY} ${this.x2} ${this.y2}`;
  }

  onDragEnd1(event: any)
  {
    const { x, y } = event.source.getFreeDragPosition();
    this.x1Change.emit(x + 6); // adjust based on handle size
    this.y1Change.emit(y + 6);
  }

  onDragEnd2(event: any)
  {
    const { x, y } = event.source.getFreeDragPosition();
    this.x2Change.emit(x + 6);
    this.y2Change.emit(y + 6);
  }
}