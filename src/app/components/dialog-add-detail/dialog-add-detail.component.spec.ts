import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDetailComponent } from './dialog-add-detail.component';

describe('DialogAddDetailComponent', () => {
  let component: DialogAddDetailComponent;
  let fixture: ComponentFixture<DialogAddDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
