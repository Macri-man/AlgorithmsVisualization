import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedianofTwoSortedArraysComponent } from './medianof-two-sorted-arrays.component';

describe('MedianofTwoSortedArraysComponent', () => {
  let component: MedianofTwoSortedArraysComponent;
  let fixture: ComponentFixture<MedianofTwoSortedArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedianofTwoSortedArraysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedianofTwoSortedArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
