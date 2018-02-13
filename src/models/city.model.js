import {Model} from"./model.model";
/**
 * @type {City}
 */

export class City extends Model {

   /**
    * 
    * @param {*} polution 
    * @param {*} climat 
    */
    constructor(polution, climat){
       super({
        name: "",
        sunrise: 0,
        sunset:0,
        climat: climat,
        polution: polution
       });

    }
}