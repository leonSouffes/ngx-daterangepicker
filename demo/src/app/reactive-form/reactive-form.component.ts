import { Component } from '@angular/core';
import dayjs from 'dayjs/esm';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { LocaleConfig } from '../../../../src/daterangepicker';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  form: UntypedFormGroup;
  form2: UntypedFormGroup;
  locale: LocaleConfig = {
    format: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    displayFormat: 'YYYY-MM-DD'
  };

  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      selected: [
        {
          startDate: dayjs('2015-11-24T00:00Z'),
          endDate: dayjs('2015-11-26T00:00Z')
        },
        Validators.required
      ]
    });

    this.form2 = this.fb.group({
      selected: [
        {
          startDate: '2019-12-11T18:30:00.000Z',
          endDate: '2019-12-12T18:29:59.000Z'
        },
        Validators.required
      ]
    });
  }

  submit(): void {
    // eslint-disable-next-line no-console
    console.log(this.form.value);
  }

  submit2(): void {
    // eslint-disable-next-line no-console
    console.log(this.form2.value);
  }

  toggleDisable(form: UntypedFormGroup): void {
    if (form.disabled) {
      form.enable();
    } else {
      form.disable();
    }
  }
}
