import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCEPComponent } from './api-cep.component';

describe('ApiCEPComponent', () => {
  let component: ApiCEPComponent;
  let fixture: ComponentFixture<ApiCEPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiCEPComponent]
    });
    fixture = TestBed.createComponent(ApiCEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
