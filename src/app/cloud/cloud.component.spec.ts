import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CloudComponent } from './cloud.component';

describe('CloudComponent', () => {
  let component: CloudComponent;
  let fixture: ComponentFixture<CloudComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
