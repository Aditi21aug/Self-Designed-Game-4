class Security {

    constructor(){

        this.access1 = createInput("")
        

        this.button1 = createButton('Submit');
       
        this.question=createElement("h2")
        
       
        this.warning = createElement("h1")
    }

    display(rand){
       
        this.access1.position(displayWidth/2,displayHeight/2);
        this.access1.style('background', 'white');  
        this.button1.position(displayWidth/2,displayHeight/2+30);
        this.button1.style('background', 'lightgrey');    
        this.question.position(displayWidth/2,displayHeight/2-50)
      // var rand = Math.round(random(0,4))
       this.question.html(q[rand]);
        this.button1.mousePressed(() => {
            switch(rand)
            {
                case 0:
                    {
                        if(system.authenticate(code.accessCode1,this.access1.value())){
                           // this.button1.hide();
                            this.access1.value = ""
                            score++;
                           // this.question.hide();
                            this.warning.hide();
                        }
                        else
                        {
                            this.warning.html("Wrong Try Again!")
                            this.warning.position(displayWidth/2,displayHeight/2-100)
                        }
                    }

                    case 1:
                    {
                        if(system.authenticate(code.accessCode2,this.access1.value())){
                            //this.button1.hide();
                            this.access1.value = ""
                            score++;
                            //this.question.hide();
                            this.warning.hide();
                        }
                        else
                        {
                            this.warning.html("Wrong Try Again!")
                            this.warning.position(displayWidth/2,displayHeight/2-100)
                        }
                    }

                    case 2:
                    {
                        if(system.authenticate(code.accessCode3,this.access1.value())){
                           // this.button1.hide();
                           this.access1.value = ""
                            score++;
                            //this.question.hide();
                            this.warning.hide();
                        }
                        else
                        {
                            this.warning.html("Wrong Try Again!")
                            this.warning.position(displayWidth/2,displayHeight/2-100)
                        }
                    }

                    case 3:
                    {
                        if(system.authenticate(code.accessCode4,this.access1.value())){
                            //this.button1.hide();
                            this.access1.value = ""
                            score++;
                           // this.question.hide();
                            this.warning.hide();
                        }
                        else
                        {
                            this.warning.html("Wrong Try Again!")
                            this.warning.position(displayWidth/2,displayHeight/2-100)
                        }
                    }

                    case 4:
                    {
                        if(system.authenticate(code.accessCode5,this.access1.value())){
                           // this.button1.hide();
                           this.access1.value = ""
                            score++;
                            //this.question.hide();
                            this.warning.hide();
                        }
                        else
                        {
                            this.warning.html("Wrong Try Again!")
                            this.warning.position(displayWidth/2,displayHeight/2-100)
                        }
                    }
            
            }
        
        });
    
        
    }
}