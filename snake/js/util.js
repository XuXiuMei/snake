/**
 * Created by Administrator on 2017/8/23.
 */
define(function(require,exports,module){
    var util= {
        getRandomIntInclusive: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

    }
    module.exports=util;
})