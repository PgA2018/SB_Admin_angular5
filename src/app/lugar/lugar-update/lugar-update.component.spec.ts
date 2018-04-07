import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarUpdateComponent } from './lugar-update.component';

describe('LugarUpdateComponent', () => {
  let component: LugarUpdateComponent;
  let fixture: ComponentFixture<LugarUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
