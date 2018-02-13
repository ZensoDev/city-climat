import {Model} from"./model.model";
/**
 * @type{Climat}
 */

export class Climat extends Model {

    /**
     * @constructor
     * @param {Temperature} temperature
     */
    constructor(temperature){
       super({
        humidity: 0,
        wind: 0,
        pressure:0,
        description: "",
        temperature: temperature
       });

    }
}