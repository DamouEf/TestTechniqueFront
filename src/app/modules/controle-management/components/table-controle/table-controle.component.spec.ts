import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableControleComponent } from './table-controle.component';

describe('TableControleComponent', () => {
  let component: TableControleComponent;
  let fixture: ComponentFixture<TableControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableControleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
