import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  img: string= '';

  constructor() {}

  async tomarFoto(){
    const foto = await Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    })
  
    if(foto){
      this.img = 'data:image/jpeg;base64,'+ foto.base64String;
    }
  
  }
  

}
