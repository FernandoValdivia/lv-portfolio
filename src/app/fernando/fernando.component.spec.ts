import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FernandoComponent } from './fernando.component';

describe('FernandoComponent', () => {
  let component: FernandoComponent;
  let fixture: ComponentFixture<FernandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FernandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FernandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
