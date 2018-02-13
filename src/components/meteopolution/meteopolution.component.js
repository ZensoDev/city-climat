import {MetaComponent} from "./../meta-component.component";


/**
 * @type {Meteopolution}
 */

export class Meteopolution extends MetaComponent {

 /**
 * @constructor
 * @param {Component} meteopolution
 */
    constructor (
        climat,
        temperature,
        polution){
        
        super();
        this.component = [climat, temperature, polution];
        
    }


    
}