import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidequestComponent } from './sidequest.component';

describe('SidequestComponent', () => {
  let component: SidequestComponent;
  let fixture: ComponentFixture<SidequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
