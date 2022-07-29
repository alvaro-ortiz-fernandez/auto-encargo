import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerPostingComponent } from './employer-posting.component';

describe('EmployerPostingComponent', () => {
  let component: EmployerPostingComponent;
  let fixture: ComponentFixture<EmployerPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerPostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
