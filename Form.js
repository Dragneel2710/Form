class Form{
    constructor(){
     this.button = createRadio();
     this.button.option('yes');
     this.button.option('no');
     this.greet = createElement('h3');
     this.ques = createElement("h4");
     this.submit = createButton("submit");
    }
    display(){
        var heading = createElement('h2')
        heading.html("Forms")
        this.ques.html("Is 1+1 = 2");
        this.ques.position(200,140);
        heading.position(135,0);

        this.button.position(200,200);
        this.button.mousePressed(()=>{
            if(this.button.value() === "yes"){
                this.greet.html("YOU ARE CORRECT");
                this.greet.position(200,200);
                console.log(this.button.value())
            }
            else if(this.button.value() === "no"){
                this.greet.html("SORRY YOU ARE WRONG");
                this.greet.position(200,200);
                console.log(this.button.value())
            }
        });

        this.submit.mousePressed(()=>{
            this.button.hide();
            this.submit.hide();
            database.ref('Question1').set({
                'Question1' : this.button.value()
            })
        })
    }
}