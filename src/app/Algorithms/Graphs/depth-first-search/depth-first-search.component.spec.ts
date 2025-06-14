import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepthFirstSearchComponent } from './depth-first-search.component';

describe('DepthFirstSearchComponent', () => {
  let component: DepthFirstSearchComponent;
  let fixture: ComponentFixture<DepthFirstSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepthFirstSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepthFirstSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
