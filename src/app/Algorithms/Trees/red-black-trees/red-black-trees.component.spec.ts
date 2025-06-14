import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBlackTreesComponent } from './red-black-trees.component';

describe('RedBlackTreesComponent', () => {
  let component: RedBlackTreesComponent;
  let fixture: ComponentFixture<RedBlackTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedBlackTreesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedBlackTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
