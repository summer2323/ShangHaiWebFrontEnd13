(function(Game){
    function Sky(option){
        //属性
        this.ctx=option.ctx;
        this.img=option.img;
        this.index=option.index;
        this.x=0;
        this.y=0;
        this.width=this.img.width;
        this.height=this.img.height;
        this.offset=0;
        // father.call(this,option);
        this.scaleWdith=this.ctx.canvas.height/this.img.height*this.img.width;
        this.x=this.index*this.scaleWdith; //最终图片的宽
    }

    Sky.prototype={
        constructor:Sky,
        draw:function(){
            this.offset-=3;
            if(this.offset<-this.scaleWdith){
                this.offset=0; //
            }
            var x=this.x+this.offset;

            this.ctx.drawImage(this.img,0,0,this.width,this.height,x,this.y,this.scaleWdith,this.ctx.canvas.height);
        }
    }

    Game.Sky=Sky;
})(Game);
