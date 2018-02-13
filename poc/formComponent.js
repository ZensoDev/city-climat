//module
var formComponent = (function(){
     
    var formDefinition = [
        {
            tag :"input",
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
            messagevide:"Merci Prenom",
            attribute:{placeholder: "Prenom"}
        },
        {
            tag:"br",
        },
        {
            tag :"input",
            regex: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g,
            messagevide:"Merci de bien vouloir insérer un Nom correct dans ce champs s'il vous plait",
            attribute:{placeholder: "Nom"}
        },
        {
            tag:"br",
        },
        {
            tag :"input",
            regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            attribute:{placeholder: "Email"}
        },
        {
            tag:"br",
        },
        {
            tag :"input",
            regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            attribute:{placeholder: "Telephone"}
        },
        {
            tag:"br",
        },
        {
            tag :"input",
            regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            attribute:{placeholder: "Objet"}
        },
        {
            tag:"br",
        },
        {
            tag :"textarea",
            attribute:{placeholder: "Message"}
        },
        {
            tag:"br",
        },
        {
            tag :"input",
            regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            attribute:{type: "submit"}
        },
        {
            tag:"br",
        }
    
    ];

    function setAttribute(key){
        if(formDefinition[key].attribute){
            for(var subkey in formDefinition[key].attribute){
                this.setAttribute(subkey,formDefinition[key].attribute[subkey]);
            }
        }
    }

    function warning(message){
        this.previousSibling.innerHTML = message;
        this.style.borderColor = "red";
    }

    function clearWarning(){
        this.previousSibling.innerHTML = "";
        this.style.borderColor = "green";
    }
    /**
     * 
     * @this {HTMLElement} //appendChild est un élément Html
     */
    function setTextNode(key){
        if(formDefinition[key].text){
            this.appendChild(window.document.createTextNode(formDefinition[key].text));
        }
    }

    function functionBlur(){
        this.onBlur = function(){

            if(this.value){
                this.style.borderColor = "blue";
            }else {
                this.style.borderColor = "red";
            }
        }
    }

    return {
        render: function(){
            var formulaire = window.document.createElement("form");
            window.document.body.appendChild(formulaire);

            for (var key in formDefinition){
                var elem=window.document.createElement(formDefinition[key].tag);
                console.log(formDefinition[key].tag);
                if(formDefinition[key].tag=="input"){
                    if(formDefinition[key].messagevide){
                        elem.setAttribute("data-messagevide", formDefinition[key].messagevide);
                        console.log(elem.getAttribute("messagevide"));
                    }
                    
                    if(formDefinition[key].regex){
                        elem.setAttribute("data-regex", formDefinition[key].regex);
                        console.log(elem.getAttribute("data-regex"));
                            // this.onkeypress = function (Text) {this.style.borderColor = "orange"; };
                       


                        
                        
                        
                        // this.onkeypress = function () {
                        //     console.log(Text.value);
                        //     if (regex.test(Text[0].value)) {
                        //         alert("saisie OK");
                        //     }
                        // }
                        
                    }
                    
                }
                // if (si c un input) {
                //     on lui colle les events
                // }
                formulaire.appendChild(elem);
                setTextNode.call(elem, key);
                setAttribute.apply(elem, [key]);
                functionBlur.call(elem);
                elem.onfocus = function (){
                    clearWarning.call(this);
                }
                
                
            }
            
            formulaire.onsubmit = this.submit;
        },

        submit: function(event){
            
        
            var input = this.getElementsByTagName("input");
            var preventDefault = true; // si il y a une erreur, on changera à false pour ne pas envoyer le formulaire
            for (var key in input){
                if ("object" !== typeof input[key] || "submit" == input[key].type){
                    continue; //fin de la boucle for
                }
        
                if(!input[key].value){
                    //console.log(input[key]);
                    preventDefault = false;
                    alert("vide");
                }
                
            }
            return preventDefault;
        
        },

        

    }


})();
