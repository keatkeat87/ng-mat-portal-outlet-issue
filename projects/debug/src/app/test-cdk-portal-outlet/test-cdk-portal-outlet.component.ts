import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, Injector, ElementRef, ResolvedReflectiveFactory, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { CdkPortalOutlet, ComponentPortal, TemplatePortal, DomPortalOutlet } from '@angular/cdk/portal';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  templateUrl: './test-cdk-portal-outlet.component.html',
  styleUrls: ['./test-cdk-portal-outlet.component.scss']
})
export class TestCdkPortalOutletComponent implements OnInit {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  @ViewChild('dymanicTemplate', { read: TemplateRef, static: true })
  dymanicTemplateRef: TemplateRef<any>;

  @ViewChild('container', { read: ViewContainerRef, static: true })
  viewContainerRef: ViewContainerRef;

  @ViewChild(CdkPortalOutlet, { static: true })
  outlet: CdkPortalOutlet;

  @ViewChild('domOutlet', { read: ElementRef , static: true })
  domOutlet: ElementRef<HTMLElement>;


  ngOnInit() { }

  // append dynamic component to outlet with view container ref
  click1() {
    const portal = new ComponentPortal(DynamicComponent, this.viewContainerRef, this.viewContainerRef.injector);
    this.outlet.attachComponentPortal(portal);
  }

  // append dynamic component to outlet without view container ref
  click2() {
    const portal = new ComponentPortal(DynamicComponent, null, null);
    this.outlet.attachComponentPortal(portal);
  }

  // append dynamic template to outlet with view container ref
  click3() {
    const portal = new TemplatePortal(this.dymanicTemplateRef, this.viewContainerRef);
    this.outlet.attachTemplatePortal(portal);
  }
  // append dynamic template to outlet without view container ref
  click4() {
    const portal = new TemplatePortal(this.dymanicTemplateRef, null);
    this.outlet.attachTemplatePortal(portal);
  }

  // append dynamic component to dom outlet with view container ref
  click5() {
    const portal = new ComponentPortal(DynamicComponent, this.viewContainerRef, this.viewContainerRef.injector);
    const outlet = new DomPortalOutlet(this.domOutlet.nativeElement, this.componentFactoryResolver, this.applicationRef, this.injector);
    outlet.attachComponentPortal(portal);
  }

  // append dynamic component to dom outlet without view container ref
  click6() {
    const portal = new ComponentPortal(DynamicComponent, null, null);
    const outlet = new DomPortalOutlet(this.domOutlet.nativeElement, this.componentFactoryResolver, this.applicationRef, this.injector);
    outlet.attachComponentPortal(portal);
  }

}
