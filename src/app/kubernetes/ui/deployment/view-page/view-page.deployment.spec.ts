/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {MockBackend} from "@angular/http/testing";
import {RequestOptions, BaseRequestOptions, Http} from "@angular/http";
import {RestangularModule} from "ng2-restangular";
import {DeploymentViewPage} from "./view-page.deployment";
import {DeploymentViewWrapperComponent} from "../view-wrapper/view-wrapper.deployment";
import {DeploymentViewToolbarComponent} from "../view-toolbar/view-toolbar.deployment";
import {DeploymentViewComponent} from "../view/view.deployment";

import {MomentModule} from "angular2-moment";
import {EntriesPipe} from "../../../../common/entries.pipe";
import {DeploymentScaleDialog} from "../scale-dialog/scale-dialog.deployment";
import {ModalModule} from "ng2-modal";
import {FormsModule} from "@angular/forms";
import {KuberentesStoreModule} from "../../../kubernetes.store.module";

describe('DeploymentViewPage', () => {
  let deployment: DeploymentViewPage;
  let fixture: ComponentFixture<DeploymentViewPage>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [

          KuberentesStoreModule,
          FormsModule,
          MomentModule,
          ModalModule,
          RouterTestingModule.withRoutes([]),
          RestangularModule.forRoot(),
        ],
        declarations: [
          DeploymentViewPage,
          DeploymentViewWrapperComponent,
          DeploymentViewToolbarComponent,
          DeploymentViewComponent,
          DeploymentScaleDialog,
          EntriesPipe,
        ],
        providers: [
          MockBackend,
          { provide: RequestOptions, useClass: BaseRequestOptions },
          {
            provide: Http, useFactory: (backend, options) => {
              return new Http(backend, options);
            }, deps: [MockBackend, RequestOptions],
          },
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentViewPage);
    deployment = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(deployment).toBeTruthy(); });
});
