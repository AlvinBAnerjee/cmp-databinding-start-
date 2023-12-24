import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent {

  newServerName = '';
  newServerContent = '';
  @Output("serCreated") serverCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  @Output("bpCreated")blueprintCreated=new EventEmitter<{serverName: string, serverContent: string}>();

  
  onAddServer(namedInputServer:HTMLInputElement,namedInputBlueprint:HTMLInputElement) {
    this.serverCreated.emit({serverName:namedInputServer.value, serverContent:namedInputBlueprint.value});
  }

  onAddBlueprint(namedInputServer:HTMLInputElement,namedInputBlueprint:HTMLInputElement) {

    this.blueprintCreated.emit({serverName:namedInputServer.value, serverContent:namedInputBlueprint.value});
  }
  }

