import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickymortyComponent } from './rickymorty.component';

describe('RickymortyComponent', () => {
  let component: RickymortyComponent;
  let fixture: ComponentFixture<RickymortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickymortyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickymortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
