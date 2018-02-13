import {Component} from "./../component.component";
import {default as template} from "./city.component.html";

/**
 * @type {City}
 */

export class City extends Component {

 /**
  * 
  * @param {*} model 
  * @param {*} api 
  */
    constructor (model, api){
        super();
        this.selector = "city";
        this.template = template;
        this.getModel = ()=>{
            return model;
        }
        this.getApi = ()=>{
            return api;
        }
        this.geolocation();
    }

    geolocation(){
        navigator.geolocation.getCurrentPosition(
            (e)=>{
                this.api(e.coords.latitude, e.coords.longitude);
            },
            (e)=>{
                this.exception("Geolocation","Can't determine your position");

            },
            
        );
    }
    
    api(lat, lng){
        this.getModel().set("name", "-");
        this.render();  
        // faire une requete
   var xhr = new XMLHttpRequest;
   xhr.open("GET", this.getApi().getEndPoint(lat,lng));
   console.log(this.getApi().getEndPoint(lat,lng));
   xhr.onload = ()=>{
        if (200 == xhr.status){
           //transformer du texte en JSON
            let response = window.JSON.parse(xhr.response);
            this.getModel().set("name", response.name);
            this.getModel().set("sunset", response.sys.sunset);
            this.getModel().set("sunrise", response.sys.sunrise);
            this.getModel().get("climat").set("humidity", response.main.humidity);
            this.getModel().get("climat").set("wind", response.wind.speed);
            this.getModel().get("climat").set("pression", response.main.pressure);
            this.getModel().get("climat").set("description", response.weather[0].main);
            
            this.getModel().get("climat").get("temperature").set("min", response.main.temps_min);
            this.getModel().get("climat").get("temperature").set("max", response.main.temps_max);
            this.getModel().get("climat").get("temperature").set("temperature", response.main.temp);

            this.render();

            return;
        }
        xhr.onerror();
   };
   xhr.onerror = ()=>{
    this.exception(
        "Informations",
        "Can't read information",
        "Retry",
         ()=> {this.api(lat,lng);}
        
    )
   };
   xhr.send();

   

    }

    exception(title, message, btnText,confirm){
        console.log(btnText);
        console.log(confirm);
        this.getModel().set("name", "-");
        this.render();
        window.ui.dialog.alert(title, message)
        .onconfirm(btnText, confirm);
        
    }
    
    render (){
        let elements = super.render([this.getModel()]);
        for (let i = 0; i<elements.length; i++){
        window.componentHandler.downgradeElements(elements[i]);
        window.componentHandler.upgradeDom();
    }
    }
}