import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatCard,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatInput,
  MatInputModule,
  MatLabel,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZJZTKHCM.js";
import {
  AuthService,
  CommonModule,
  NgIf,
  Router,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZW45IP4B.js";

// src/app/features/auth/login.component.ts
function LoginComponent_mat_spinner_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 20);
  }
}
function LoginComponent_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Login to Dashboard");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_p_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.authService = inject(AuthService);
    this.router = inject(Router);
    this.loading = signal(false);
    this.errorMessage = signal("");
    this.hidePassword = signal(true);
    this.loginForm = this.fb.nonNullable.group({
      username: ["manager", Validators.required],
      password: ["password", [Validators.required, Validators.minLength(4)]]
    });
  }
  submit() {
    if (this.loginForm.invalid || this.loading()) {
      return;
    }
    this.loading.set(true);
    this.errorMessage.set("");
    this.authService.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.loading.set(false);
        void this.router.navigate(["/dashboard"]);
      },
      error: (error) => {
        this.loading.set(false);
        this.errorMessage.set(error?.error?.message ?? "Unable to login. Please try again.");
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 68, vars: 7, consts: [[1, "page-shell", "login-shell"], [1, "ambient-orb", "orb-left"], [1, "ambient-orb", "orb-right"], [1, "hero-copy"], [1, "pill"], [1, "benefits"], [1, "login-card"], [1, "brand-row"], [1, "brand-badge"], [1, "login-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "username", "autocomplete", "username"], ["matSuffix", ""], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "login-button", 3, "disabled"], ["diameter", "20", 4, "ngIf"], [4, "ngIf"], [1, "credential-box"], ["class", "error-message", 4, "ngIf"], ["diameter", "20"], [1, "error-message"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "div", 1)(2, "div", 2);
        \u0275\u0275elementStart(3, "section", 3)(4, "span", 4);
        \u0275\u0275text(5, "Hackathon Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "AI Resource Allocation Optimizer");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, " Assign work smarter, rebalance instantly, and visualize risk before delivery gets blocked. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 5)(11, "article")(12, "mat-icon");
        \u0275\u0275text(13, "auto_graph");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div")(15, "h3");
        \u0275\u0275text(16, "Performance feedback loop");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18, "Productivity scores evolve as outcomes improve or slip.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "article")(20, "mat-icon");
        \u0275\u0275text(21, "hub");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div")(23, "h3");
        \u0275\u0275text(24, "One-click rebalance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "See safer assignments before applying them to the live plan.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "article")(28, "mat-icon");
        \u0275\u0275text(29, "dashboard_customize");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div")(31, "h3");
        \u0275\u0275text(32, "Customer-friendly presentation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34, "Four-panel executive view tuned for a clean demo experience.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(35, "mat-card", 6)(36, "div", 7)(37, "div", 8)(38, "mat-icon");
        \u0275\u0275text(39, "hub");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div")(41, "h2");
        \u0275\u0275text(42, "Welcome back");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, "Use the seeded manager account for the full optimizer demo.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "form", 9);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_45_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(46, "mat-form-field", 10)(47, "mat-label");
        \u0275\u0275text(48, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275element(49, "input", 11);
        \u0275\u0275elementStart(50, "mat-icon", 12);
        \u0275\u0275text(51, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "mat-form-field", 10)(53, "mat-label");
        \u0275\u0275text(54, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(55, "input", 13);
        \u0275\u0275elementStart(56, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_56_listener() {
          return ctx.hidePassword.set(!ctx.hidePassword());
        });
        \u0275\u0275elementStart(57, "mat-icon");
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "button", 15);
        \u0275\u0275template(60, LoginComponent_mat_spinner_60_Template, 1, 0, "mat-spinner", 16)(61, LoginComponent_span_61_Template, 2, 0, "span", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 18)(63, "span");
        \u0275\u0275text(64, "Demo credentials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "strong");
        \u0275\u0275text(66, "manager / password");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(67, LoginComponent_p_67_Template, 2, 1, "p", 19);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(45);
        \u0275\u0275property("formGroup", ctx.loginForm);
        \u0275\u0275advance(10);
        \u0275\u0275property("type", ctx.hidePassword() ? "password" : "text");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.hidePassword() ? "visibility" : "visibility_off");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading() || ctx.loginForm.invalid);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading());
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.errorMessage());
      }
    }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButtonModule, MatButton, MatIconButton, MatCardModule, MatCard, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatIconModule, MatIcon, MatInputModule, MatInput, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.login-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(360px, 440px);\n  gap: 48px;\n  align-items: center;\n  padding: 48px clamp(24px, 4vw, 64px);\n  min-height: 100vh;\n  overflow: hidden;\n}\n.hero-copy[_ngcontent-%COMP%] {\n  max-width: 680px;\n  position: relative;\n  z-index: 1;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 10px 16px;\n  border-radius: 999px;\n  background: rgba(20, 99, 183, 0.14);\n  color: var(--brand-dark);\n  font-weight: 700;\n  letter-spacing: 0.02em;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: clamp(2.8rem, 5vw, 4.4rem);\n  line-height: 1.05;\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 18px 0 0;\n  font-size: 1.08rem;\n  color: var(--text-muted);\n  line-height: 1.7;\n  max-width: 620px;\n}\n.benefits[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  margin-top: 34px;\n}\n.benefits[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50px 1fr;\n  gap: 16px;\n  align-items: start;\n  padding: 18px 20px;\n  background: rgba(255, 255, 255, 0.72);\n  border: 1px solid rgba(20, 99, 183, 0.08);\n  border-radius: 20px;\n  box-shadow: var(--shadow);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.benefits[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 16px;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(20, 99, 183, 0.16),\n      rgba(36, 160, 107, 0.16));\n  color: var(--brand);\n}\n.benefits[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 6px;\n}\n.benefits[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.login-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 28px;\n  border-radius: 28px;\n  border: 1px solid rgba(20, 99, 183, 0.12);\n  box-shadow: var(--shadow);\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n}\n.brand-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60px 1fr;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 24px;\n}\n.brand-badge[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand) 0%,\n      #2e7dd3 100%);\n  color: white;\n}\n.brand-row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: var(--text-muted);\n}\n.login-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.login-button[_ngcontent-%COMP%] {\n  height: 52px;\n  border-radius: 16px;\n  font-weight: 700;\n}\n.credential-box[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 16px 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(20, 99, 183, 0.1),\n      rgba(36, 160, 107, 0.12));\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: var(--brand-dark);\n}\n.credential-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin: 16px 0 0;\n  color: var(--danger);\n  font-weight: 600;\n}\n.ambient-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 320px;\n  height: 320px;\n  border-radius: 50%;\n  filter: blur(28px);\n  opacity: 0.4;\n}\n.orb-left[_ngcontent-%COMP%] {\n  background: rgba(20, 99, 183, 0.22);\n  top: -80px;\n  left: -100px;\n}\n.orb-right[_ngcontent-%COMP%] {\n  background: rgba(36, 160, 107, 0.2);\n  right: -120px;\n  bottom: 40px;\n}\n@media (max-width: 960px) {\n  .login-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding-top: 28px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"], changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login.component.ts", lineNumber: 282 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-QTJ76N22.js.map
