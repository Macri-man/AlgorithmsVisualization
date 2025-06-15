import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropNodeComponent } from './drag-drop-node.component';

describe('DragDropNodeComponent', () => {
  let component: DragDropNodeComponent;
  let fixture: ComponentFixture<DragDropNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
