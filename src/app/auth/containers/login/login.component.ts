import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil, tap, filter } from 'rxjs/operators';
import * as fromAuth from 'app/auth/reducers/auth.reducer';
import * as authActions from 'app/auth/actions/auth.actions';
import { ILoginModel } from './login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public login: ILoginModel;
  private _ngUnsubscribe: Subject<any> = new Subject();
  constructor(
    private _fb: FormBuilder,
    private _store: Store<fromAuth.IState>
  ) {}
  public ngOnInit() {
    this.createForm();
    this.initForm();
    this.onChanges();
  }
  public onSubmit() {
    this._store.dispatch(new authActions.SetUser(this.login.username));
  }
  public ngOnDestroy() {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }
  private createForm() {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  private initForm() {}
  private onChanges() {
    // when the form changes and it is valid, set the login object
    this.loginForm.valueChanges
      .pipe(
        takeUntil(this._ngUnsubscribe),
        filter(value => this.loginForm.valid)
      )
      .subscribe(value => {
        this.login = {
          username: value.username,
          password: value.password
        };
      });
  }
}
