import {Component} from "./../component.component";
import {default as template} from "./climat.component.html";

/**
 * @type {Climat}
 */

export class Climat extends Component {

 /**
 * @constructor
 */
    constructor (){
        
        super();
        this.selector = "climat";
        this.template = template;
    }


    
}