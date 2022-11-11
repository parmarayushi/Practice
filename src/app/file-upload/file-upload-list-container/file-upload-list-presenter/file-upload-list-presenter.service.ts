import { Injectable } from '@angular/core';

@Injectable()
export class FileUploadListPresenterService {

  constructor() { }
  public showFile(content: string, type: string) {
    let base64 = content.split(',')[1];
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: type });
    const url = URL .createObjectURL(blob);
    window.open(url);
  }
}
