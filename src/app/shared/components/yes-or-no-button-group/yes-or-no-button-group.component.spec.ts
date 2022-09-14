import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesOrNoButtonGroupComponent } from './yes-or-no-button-group.component';

describe('YesOrNoButtonGroupComponent', () => {
  let component: YesOrNoButtonGroupComponent;
  let fixture: ComponentFixture<YesOrNoButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesOrNoButtonGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesOrNoButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
