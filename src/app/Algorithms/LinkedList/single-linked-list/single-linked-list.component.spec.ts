import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLinkedListComponent } from './single-linked-list.component';

describe('SingleLinkedListComponent', () => {
  let component: SingleLinkedListComponent;
  let fixture: ComponentFixture<SingleLinkedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleLinkedListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleLinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
