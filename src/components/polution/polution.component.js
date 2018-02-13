import {Component} from "./../component.component";
import {default as template} from "./polution.component.html";

/**
 * @type {Polution}
 */

export class Polution extends Component {

 /**
 * @constructor
 */
    constructor (){
        
        super();
        this.selector = "polution";
        this.template = template;
    }


    
}