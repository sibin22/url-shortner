import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'urlShortner';
  outputText: any;
  output:boolean=false ;

ngOnInIt(){
  this.output=false ;

}

  shortenUrl(value:any) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url',value);

    const options = {
      method: 'POST',
      url: 'https://shorturl9.p.rapidapi.com/functions/api.php',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'ba73ef9b6fmsh673be1f20a56d5fp1e47b0jsn754ffe50d2b1',
        'X-RapidAPI-Host': 'shorturl9.p.rapidapi.com'
      },
      data: encodedParams,
    };

    axios.request(options)
      .then(response => {
        this.outputText=response.data.url
        if(this.outputText===undefined)
          {  this.output=false }
          else{this.output=true}
      })
      .catch(error => {
        console.error(error);

      });
  }
  
  copyToClipboard() {
    const inputElement = document.createElement('input');
    inputElement.value = this.outputText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
  }
}






