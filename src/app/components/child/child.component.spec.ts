import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should call checkIfTextLonger', () => {
    it('and return true', () => {
      expect(component.checkIfTextLonger('text is longer than 10 characters')).toBeTrue();
    });

    it('and return false', () => {
      expect(component.checkIfTextLonger('or not')).toBeFalse();
    });
  });
});
