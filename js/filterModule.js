/**
 * Created by CNY on 2017/6/8.
 */
angular.module('filterModule', []).factory('funcCom2',function () {
    return {
        testFunc: function () {
            alert(123456);
        }
    };
});