import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UbicanosPage } from './ubicanos.page';

describe('UbicanosPage', () => {
  let component: UbicanosPage;
  let fixture: ComponentFixture<UbicanosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicanosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
