import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDpmComponent } from './update-dpm.component';

describe('UpdateDpmComponent', () => {
  let component: UpdateDpmComponent;
  let fixture: ComponentFixture<UpdateDpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
