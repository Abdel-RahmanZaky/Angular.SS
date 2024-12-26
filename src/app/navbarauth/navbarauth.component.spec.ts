import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarauthComponent } from './navbarauth.component';

describe('NavbarauthComponent', () => {
  let component: NavbarauthComponent;
  let fixture: ComponentFixture<NavbarauthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarauthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
