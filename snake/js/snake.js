/**
 * Created by Administrator on 2017/8/23.
 */
define(function(require,exports,module){
    var Super=require('./sp.js');

    var self;
    function Snake(options){
        self=this;
        options=options||{};
        /*  self.width=options.width||20;
         self.height=options.height||20;*/
        Super.call(self,options);
        self.direction='right';
        self.current='right';
        self.body=[
            {
                x:1,
                y:1,
                color:'hotpink',
                element:document.createElement('div')

            },
            {
                x:2,
                y:1,
                color:'hotpink',
                element:document.createElement('div')

            },
            {
                x:3,
                y:1,
                color:'greenyellow',
                element:document.createElement('div')

            }
        ]

        self.init();
    }
    Snake.prototype.init=function(){
        self.body.forEach(function(item){
            var div=item.element;
            div.style.width=self.width+'px';
            div.style.height=self.height+'px';
            div.style.backgroundColor=item.color;
            div.style.position='absolute';
            div.style.left=item.x*self.width+'px';
            div.style.top=item.y*self.height+'px';
            self.map.appendChild(div);
        })
    }
    Snake.prototype.move=function(food,game){
        self.check();
        var head=self.body[self.body.length-1];
        if(self.direction==='right'&&(head.x+1)*self.width>=800){
            return game.stop();
        }else if(self.direction==='left'&&(head.x-1)*self.width<0){
            return game.stop();
        }else if(self.direction==='down'&&(head.y+1)*self.height>=600){
            return game.stop();
        }else if(self.direction==='up'&&(head.y-1)*self.height<0){
            return game.stop();
        }
        for(var i=0;i<self.body.length-1;i++){
            var item=self.body[i];
            item.x=self.body[i+1].x;
            item.y=self.body[i+1].y;
            item.element.style.left=item.x*self.width+'px';
            item.element.style.top=item.y*self.height+'px';
        }
        switch(self.direction){
            case 'left':
                head.x -=1;
                head.element.style.left=head.x*self.width+'px';
                break;
            case 'right':
                head.x +=1;
                head.element.style.left=head.x*self.width+'px';
                break;
            case 'up':
                head.y -=1;
                head.element.style.top=head.y*self.height+'px';
                break;
            case 'down':
                head.y +=1;
                head.element.style.top=head.y*self.height+'px';
                break;
        }

        var foodLeft=food.element.offsetLeft;
        var foodTop=food.element.offsetTop;
        if(head.x*self.width===foodLeft&&head.y*self.height===foodTop){
            food.render();
            var last=self.body[0];
            self.body.unshift({
                x:last.x,
                y:last.y,
                color:last.color,
                element:document.createElement('div')
            })
            self.init();
        }
    }
    Snake.prototype.check=function(){
        if(self.direction==='right'&&self.current==='left'){
            self.direction='left';
        }else if(self.direction==='left'&&self.current==='right'){
            self.direction='right';
        }else if(self.direction==='up'&&self.current==='down'){
            self.direction='down';
        }else if(self.direction==='down'&&self.current==='up'){
            self.direction='up';
        }
        self.current=self.direction;
    }
    module.exports=Snake;
})