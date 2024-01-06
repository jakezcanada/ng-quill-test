import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Quill from 'quill';
import { QuillBinding } from 'y-quill';
import { WebsocketProvider } from 'y-websocket';
import * as Y from 'yjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('editorRef') editorRef!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    console.log(this.editorRef);
    const quill = new Quill(this.editorRef.nativeElement, {
      modules: {
        toolbar: true    // Snow includes toolbar by default
      },
      theme: 'snow'
    });
    // const ydoc = new Y.Doc();
    // const provider = new WebsocketProvider(
    //   'ws://localhost:3000',
    //   'room-1',
    //   ydoc
    // );
    // const ytext = ydoc.getText('note-1');
    // const binding = new QuillBinding(ytext, quill, provider.awareness);
  }
}
