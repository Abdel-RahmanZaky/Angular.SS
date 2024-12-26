import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStubjectComponent } from './student-stubject.component';

describe('StudentStubjectComponent', () => {
  let component: StudentStubjectComponent;
  let fixture: ComponentFixture<StudentStubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentStubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentStubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
