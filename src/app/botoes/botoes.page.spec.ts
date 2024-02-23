import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotoesPage } from './botoes.page';

describe('BotoesPage', () => {
  let component: BotoesPage;
  let fixture: ComponentFixture<BotoesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BotoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
