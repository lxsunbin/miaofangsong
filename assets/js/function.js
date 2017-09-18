/*
 * @Author: Toma 
 * @Date: 2017-09-15 11:06:42 
 * @Last Modified by: Toma
 * @Last Modified time: 2017-09-18 16:25:03
 * @description: 功能函数整合
 */
//提示框
var Layout=function(){
    var $this={};
    $this.notifyError=null;
    //失败
    $this.showError=function(msg,delay){
        if($this.notifyError){
            $this.notifyError.update('update',msg);
            return;
        };
        $this.notifyError=$.notify({
            icon: 'icon iconfont icon-cuo',
            title: '',
            message: msg
        },{
            // settings
            element: 'body',
            type: "danger",
            placement: {
                from: "top",
                align: "center"
            },
            offset: {
                y: 80,
            },
            onClosed:function(){
                $this.notifyError=null;
            },
            z_index: 30000,
            delay: delay || 5000,
            timer: 600,
            template: '<div data-notify="container" class="col-xs-8 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><i class="font24 mr5" data-notify="icon"></i> <span data-notify="title">{1}</span> <span data-notify="message" style="vertical-align:super">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
        });
    };
    $this.notifyMessage = null ;
    //成功
    $this.showMessage = function(msg){
        if($this.notifyMessage){
            $this.notifyMessage.update("message", msg);
            return ;
        }
        $this.notifyMessage = $.notify({
            icon: 'icon iconfont icon-dui',
            title: '',
            message: msg
        },{
            // settings
            element: 'body',
            type: "info",
            placement: {
                from: "top",
                align: "center"
            },
            offset: {
                y: 80,
            },
            onClosed: function(){
                $this.notifyMessage = null ;
            },
            z_index: 30000,
            delay: 3000,
            timer: 600,
            template: '<div data-notify="container" class="col-xs-8 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><i data-notify="icon" class="font24 mr5"></i> <span data-notify="title">{1}</span> <span  style="vertical-align:super" data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
        });
    }
    return $this;
}();

