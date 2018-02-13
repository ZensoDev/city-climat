import { Component } from "./component.component";

/**
 * @type{MetaComponent}
 */

export class MetaComponent extends Component {
/**
 * @constructor
 */
    constructor() {
        super();
        this.component;
    }

/**
     * 
     * @returns {HTMLElement}  
     */
    render (){
        super.render();
        if (this.component){
            for (let i=0; i <this.component.length; i++){
                this.component[i].render();
            }
        }
    }
}