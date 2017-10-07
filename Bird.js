(function(Game){
    function Bird(option){
        //属性
        this.ctx=option.ctx;
        this.x=option.x||100;
        this.y=option.y||100;
        this.img=option.img;
        this.width=this.img.width/3;
        this.height=this.img.height;

        //加速下落的数据
        this.a=0.0005;
        this.speed=0;
        this.maxSpeed=0.5
        this.maxAngle=45;
        this.angle=0;
        this.index=0;//当前的播放的图片
    }

    Bird.prototype={
        constructor:Bird,
        //接受时间差
        draw:function(Dvalue){

            //加速下落 v=v0+at;
            //S=V0t+1/2*a*t*t;  //移动的距离S
            this.speed=this.speed+this.a*Dvalue;
            this.y=this.y+this.speed*Dvalue+1/2*this.a*Dvalue*Dvalue;
            // this.x+=5;

            //限定速度
            if(this.speed>this.maxSpeed){
                this.speed=this.maxSpeed;
            }
            //旋转头部(旋转的角度=当前速度/最大速度*最大角度)
            var angle=this.speed/this.maxSpeed*this.maxAngle;

            this.ctx.save();
            this.ctx.translate(this.x,this.y);
            this.ctx.rotate(angle*Math.PI/180); //弧度

            this.ctx.drawImage(this.img,this.index*this.width,0,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);

            this.ctx.restore();
            this.index++;
            this.index%=3;
        }
    }

    Game.Bird=Bird;
})(Game);
