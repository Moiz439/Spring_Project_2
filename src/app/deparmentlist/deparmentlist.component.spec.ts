import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentlistComponent } from './deparmentlist.component';

describe('DeparmentlistComponent', () => {
  let component: DeparmentlistComponent;
  let fixture: ComponentFixture<DeparmentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparmentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
