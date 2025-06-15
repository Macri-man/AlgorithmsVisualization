import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLinkedListComponent } from './double-linked-list.component';

describe('DoubleLinkedListComponent', () => {
  let component: DoubleLinkedListComponent;
  let fixture: ComponentFixture<DoubleLinkedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoubleLinkedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleLinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
