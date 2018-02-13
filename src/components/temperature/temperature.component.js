import {Component} from "./../component.component";
import {default as template} from "./temperature.component.html";

/**
 * @type {Temperature}
 */

export class Temperature extends Component {

 /**
 * @constructor
 */
    constructor (){
        
        super();
        this.selector = "temperature";
        this.template = template;
    }


    
}