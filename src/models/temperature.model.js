import {Model} from"./model.model";
/**
 * @type{Temperature}
 */

export class Temperature extends Model {

    /**
     * @constructor
     * @param {Temperature} temperature
     */
    constructor(){
       super({
        min: 0,
        max: 0,
        temp: 0
       });

    }
}