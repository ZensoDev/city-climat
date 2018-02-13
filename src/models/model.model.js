/**
 * @type{Model}
 */

export class Model {

    /**
     * @constructor
     * @param {Object} obj
     */
    constructor(obj){
        /**
         * @param {String}
         * @returns {*}
         */
        this.get = (name, defaultValue) =>{
            return obj[name] || defaultValue;
        }

        /**
         * @param {String} name
         * @returns {*} value
         */
        this.set = (name, value) =>{
            obj[name] = value;
        }
       
       

    }
}