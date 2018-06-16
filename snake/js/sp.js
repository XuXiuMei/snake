/**
 * Created by Administrator on 2017/8/25.
 */
define(function(require,exports,module){
    function Super(options){
        var options=options||{};
        this.width=options.width||40;
        this.height=options.height||40;
        this.map=document.querySelector('.map');
    }
   module.exports=Super;
})