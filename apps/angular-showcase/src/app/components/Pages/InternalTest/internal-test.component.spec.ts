import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternalTestComponent } from './internal-test.component';

describe('InternalTestComponent', () => {
  let component: InternalTestComponent;
  let fixture: ComponentFixture<InternalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
