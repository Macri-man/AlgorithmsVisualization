import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVLTreesComponent } from './avltrees.component';

describe('AVLTreesComponent', () => {
  let component: AVLTreesComponent;
  let fixture: ComponentFixture<AVLTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AVLTreesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AVLTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
