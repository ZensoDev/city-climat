//module
var app = (function(){
    var tva = 19.6666; // variable private 
    return {
        // tva: 19.6, // variable public tva
        getTVA: function(){
            // return this.tva; pour une variable public
            return tva;
        }
    }


})();

console.log(app.getTVA());