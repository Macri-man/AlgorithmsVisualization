import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdmondsKarpComponent } from './edmonds-karp.component';

describe('EdmondsKarpComponent', () => {
  let component: EdmondsKarpComponent;
  let fixture: ComponentFixture<EdmondsKarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdmondsKarpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdmondsKarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
