import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';
  @Output("serCreated") serverCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  @Output("bpCreated")blueprintCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContent') serverContentInput : ElementRef;//Instead of passing the element it passes the reference to the element
  //Good for one way data transfer but not recommended when we are doing two way data binding
  //basically should not change element through this
  
  onAddServer(namedInputServer:HTMLInputElement) {
    this.serverCreated.emit({
      serverName:namedInputServer.value, 
      serverContent:this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(namedInputServer:HTMLInputElement) {

    this.blueprintCreated.emit({
      serverName:namedInputServer.value, 
      serverContent:this.serverContentInput.nativeElement.value
    });
  }
  }

