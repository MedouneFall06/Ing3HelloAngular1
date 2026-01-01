import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantsClasseComponent } from './etudiants-classe.component';

describe('EtudiantsClasseComponent', () => {
  let component: EtudiantsClasseComponent;
  let fixture: ComponentFixture<EtudiantsClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantsClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantsClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
