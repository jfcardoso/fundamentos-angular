import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages : string[] = [];

  login(message: string){
    alert(message);
    this.messages.push(message);
  }
  
  showAllLogs(){
    alert(this.messages);
    console.log(this.messages);
  }
}
