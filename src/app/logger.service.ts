import {Injectable} from '@angular/core';

// import ...

@Injectable()
export class LoggerService{
  log(message:string){
    console.log(message)
  }
}
