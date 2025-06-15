import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmsVisualizationComponent } from './algorithms-visualization.component';

describe('AlgorithmsVisualizationComponent', () => {
  let component: AlgorithmsVisualizationComponent;
  let fixture: ComponentFixture<AlgorithmsVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgorithmsVisualizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmsVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
