/**
 * @type{Component}
 */

export class Component {
/**
 * @constructor
 */
    constructor() {
        this.selector;
        this.template;
        this.component;
    }

/**
     * 
     * @returns {HTMLElementCollection}  
     */
    render (data){
        data = data || [];
        if (this.selector){
        let elements = window.document.getElementsByTagName(this.selector);
        for (let i=0,
            l = elements.length;
             i<l;
            elements[i].innerHTML = this.template(...data), i++
        );
        
        return elements;
        
        }
        
    }
}