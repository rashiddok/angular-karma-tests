import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ContanctFormComponent } from './contanct-form.component';

describe('ContanctFormComponent', () => {
  let component: ContanctFormComponent;
  let fixture: ComponentFixture<ContanctFormComponent>;
  const routes: Routes = []

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContanctFormComponent ],
      imports: [FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContanctFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set submitted to true', () => {
    component.onSubmit()
    expect(component.submitted).toBeTruthy()
  });

  it(`should not call onSubmit method`, () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    let el: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement
    el.click()
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  })

  it(`should call onSubmit method`, () => {
    const controls = {
      firstname:'firstname',
      surname:'surname',
      dateofbirth:'dateofbirth'
    }
    component.userForm.controls[controls.firstname].setValue('Alex');
    component.userForm.controls[controls.surname].setValue('Ivanov');
    component.userForm.controls[controls.dateofbirth].setValue('2022-02-02');
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    let el: HTMLElement = fixture.debugElement.query(By.css('button')).nativeElement
    el.click()
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  })
});
