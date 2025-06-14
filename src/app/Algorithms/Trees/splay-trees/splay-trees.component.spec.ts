import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplayTreesComponent } from './splay-trees.component';

describe('SplayTreesComponent', () => {
  let component: SplayTreesComponent;
  let fixture: ComponentFixture<SplayTreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplayTreesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplayTreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
