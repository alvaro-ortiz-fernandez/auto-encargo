import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerPostingComponent } from './worker-posting.component';

describe('WorkerPostingComponent', () => {
  let component: WorkerPostingComponent;
  let fixture: ComponentFixture<WorkerPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerPostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkerPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
