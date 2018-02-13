import { Model } from "../model.model";

/**
 * @type{ApiToken}
 */

export class ApiToken extends Model{

    /**
     * @constructor
     * @param {String} token 
     */
    constructor(token){
        super({
            token: token
        })
        
    }
}