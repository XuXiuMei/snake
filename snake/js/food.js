/**
 * Created by Administrator on 2017/8/23.
 */
define(function(require,exports,module){
    var Super=require('./sp.js');
    var util=require('./util.js');
    function Food(options){
        options=options||{};
        /* this.width=options.width||20;
         this.height=options.height||20;*/
        Super.call(this,options);
        this.color=options.color||'orange';
        this.element=document.createElement('div');
        this.init();
    }
    Food.prototype.init=function(){
        var div=this.element;
        div.style.width=this.width+'px';
        div.style.height=this.height+'px';
        div.style.backgroundColor=this.color;
        div.style.position='absolute';
        this.render();
        this.map.appendChild(div);
    }
    Food.prototype.render=function(){
        var div=this.element;
        var randomLeft=util.getRandomIntInclusive(0,this.map.offsetWidth/this.width-1);
        var randomTop=util.getRandomIntInclusive(0,this.map.offsetHeight/this.height-1);
        div.style.left=randomLeft*this.width+'px';
        div.style.top=randomTop*this.height+'px';
    }
    module.exports=Food;
})