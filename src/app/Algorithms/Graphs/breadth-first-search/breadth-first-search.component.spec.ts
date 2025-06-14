import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadthFirstSearchComponent } from './breadth-first-search.component';

describe('BreadthFirstSearchComponent', () => {
  let component: BreadthFirstSearchComponent;
  let fixture: ComponentFixture<BreadthFirstSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadthFirstSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadthFirstSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
