/**
 * Created by Administrator on 2017/8/24.
 */
define(function(require,exports,module){
   var Food=require('./food.js')
   var Snake=require('./snake.js')
    var self;
    function Game(){
        self=this;
        self.food=new Food();
        self.snake=new Snake();
        self.timer=0;
        self.interval=500;

    }
    Game.prototype.init=function(){
        var btnStart = document.querySelector('#btn_start');
        btnStart.addEventListener('click',self.start);
        document.addEventListener('keydown', self.handleKeyDown)
    }
    Game.prototype.start=function(){
        self.timer=window.setInterval(function(){
            self.snake.move(self.food,self)
        },self.interval)
    }
    Game.prototype.stop=function(){
        window.clearInterval(self.timer);
    }
    Game.prototype.pause=function(){
        window.clearInterval(self.timer);
    }
    Game.prototype.handleKeyDown=function(e) {
        switch (e.keyCode) {
            case 37:
                self.snake.direction = 'left';
                break;
            case 38:
                self.snake.direction = 'up';
                break;
            case 39:
                self.snake.direction = 'right';
                break;
            case 40:
                self.snake.direction = 'down';
                break;
        }
    }
    /*  window.Game = Game;*/
   module.exports=Game;


})

/*

var btnStart=document.querySelector('#btn_start');
btnStart.addEventListener('click',function(){
    var timer=window.setInterval(function(){
        snake.move(food)
    },200)
    window.timer=timer;
})
document.addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 37:
            snake.direction='left';
            break;
        case 38:
            snake.direction='up';
            break;
        case 39:
            snake.direction='right';
            break;
        case 40:
            snake.direction='down';
            break;
    }*/
