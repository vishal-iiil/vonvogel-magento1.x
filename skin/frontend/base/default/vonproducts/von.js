/**
 * Created by Carson on 2018/5/25.
 */

var $ = jQuery;
(function () {
    var defaultConfig = {
        keyId:'',
        country:null,
        ele:null
    };
    var str = {
        contentHtml: '   <div class="von_content">' +
        '   <div id="labH1"></div>' +
        '   <h1 class="labH1 text-center visible-xs visible-sm">VON VOGEL DESIGN LAB</h1>' +
        '<div class="row">' +
        '   <div class="col-md-3 col-sm-3 col-xs-12">' +
        '    <div class="row left-box" id="categoryListDIv">' +

        '   </div>' +
        '   </div>' +
        '   <div class="col-md-6 col-sm-9 col-xs-12">' +
        '   <h1 class="text-center labH1 hidden-sm hidden-xs">VON VOGEL DESIGN LAB</h1>' +
        '<div class="design-watch">' +
        '   <div class="design-watch-image-outer-box">' +
        '   <div class="design-watch-image-box">' +
        '   <div class="copy">' +
        '  <img class="hidden-img img-responsive" src="http://vonvogel-design.com/images/small/1.12.10.10.png" alt="">' +
        '   </div>' +
        '   <div class="watch-dis-text">' +
        '   Please select <br>' +
        'your components' +
        '</div>' +
        '<div class="peijian-box">' +
        '   <img id="cylinder-watch" class="design-watch-image img-responsive"' +
        'src="" alt="">' +
        '   </div>' +
        '   <div class="peijian-box">' +
        '   <img id="bracelet-watch" class="design-watch-image img-responsive"' +
        'src="" alt="">' +
        '   </div>' +
        '   <div class="peijian-box">' +
        '   <img id="cases-watch" class="design-watch-image img-responsive"' +
        'src="" alt="">' +
        '   </div>' +
        '   </div>' +
        '   </div>' +
        '   </div>' +
        '   </div>' +
        '   <div class="col-md-3 text-center share-box hidden-sm hidden-xs">' +
        '   <div class="share">' +
        '   <span style="color: #65afdb">Share to&nbsp;</span>' +
        '<a href="mailto:*" class="ge email"><i class="fas fa-envelope"></i></a>&nbsp;' +
        '<a class="ge shareFacebook"><i class="fab fa-facebook-f"></i></a>&nbsp;' +
        '<a class="ge shareTwitter"><i class="fab fa-twitter"></i></a>&nbsp;' +
        '<a class="ge" href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>&nbsp;' +
        '<a class="ge" href="https://www.snaphotmobi.com/" target="_blank"><i class="fab fa-snapchat-ghost"></i></a>' +
        '   </div>' +
        '   <div class="watch-info">' +
        '   <div class="box-deliver-top"></div>' +
        '   <div class="watch-info-content">' +
        '   <div class="cylinderInfo cyInfo-box">' +
        '   <span class="cy_description"></span><br>' +
        '    <span class="cy_price"></span>' +
        '  <span class="reset remove_cy">Remove</span>' +
        '   </div>' +
        '   <div class="caseInfo caInfo-box">' +
        '   <span class="ca_description"></span><br>' +
        '   <span class="ca_price"></span>' +
        '   <span class="reset remove_ca">Remove</span>' +
        '   </div>' +
        '   <div class="braceletInfo brInfo-box">' +
        '   <span class="br_description"></span><br>' +
        '   <span class="br_price"></span>' +
        '   <span class="reset remove_br"><b>Remove</b></span>' +
        '   </div>' +
        '   </div>' +
        '   <div class="box-deliver-bottom"></div>' +
        '<div class="text-left">' +
        'Order today and we ship for FREE your custom made timepiece already tomorrow.' +
        '</div>' +
        '   </div>' +
        '   <div class="addToBag">' +
        '   <div class="addTo">' +
        '   <span class="addTo_left">' +
        '   1' +
        '   </span>' +
        '   <span class="addTo_right add-to-bag">' +
        '   Add To Bag' +
        '</span>' +
        '</div>' +
        '</div>' +
        '<div class="totalPrice">' +
        '   Total' +
        '   <span class="to_price">190</span>' +
        '   </div>' +
        '   <div>' +
        '   <a class="fa fa-download download">Download your watch</a>' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-12">' +
        '   <div class="row">' +
        '   <div class="col-md-6 col-sm-12 col-md-offset-3 col-xs-12 text-center">' +
        '   <a class="top-down" id="topBtn">' +
        '   <img src="http://vonvogel-design.com/images/small/designOwn-btn/up.png" alt="">' +
        '   </a>' +
        '   </div>' +
        '   </div>' +
        '   <div class="row" id="bottom-box">' +
        '   <div class="col-md-3 col-sm-1 text-right btn-rt-b hidden-sm hidden-xs">' +
        '   <a class="left-right leftBtn" id="leftBtn">' +
        '   <img src="http://vonvogel-design.com/images/small/designOwn-btn/left.png" alt="">' +
        '   </a>' +
        '   </div>' +
        '   <div class="btn-rt-b leftBtn-box visible-sm visible-xs">' +
        '   <a class="left-right leftBtn">' +
        '   <img src="http://vonvogel-design.com/images/small/designOwn-btn/left.png" alt="">' +
        '   </a>' +
        '   </div>' +
        '   <div class="col-md-6 col-sm-10 col-xs-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-0">' +
        '   <div class="outerBox">' +
        '   <div class="gestureBox">' +
        '   <div class="innerBox">' +
        '   <div class="gestureRight">' +
        '   <img src="./images/btn/gestureIcon.png" class="img-responsive" alt="">' +
        '   </div>' +
        '   <div class="gestureLeft">' +
        '   <img src="./images/btn/gestureIcon.png" class="img-responsive" alt="">' +
        '   </div>' +
        '   </div>' +
        '   </div>' +
        '   <div id="owlBox"></div>' +
        '   </div>' +
        '   </div>' +
        '   <div class="col-md-2 col-sm-1 btn-rt-b hidden-sm hidden-xs">' +
        '   <a class="left-right rightBtn" id="rightBtn">' +
        '   <img src="http://vonvogel-design.com/images/small/designOwn-btn/right.png" alt="">' +
        '   </a>' +
        '   </div>' +
        '   <div class="btn-rt-b rightBtn-box visible-sm visible-xs">' +
        '   <a class="left-right rightBtn">' +
        '   <img src="http://vonvogel-design.com/images/small/designOwn-btn/right.png" alt="">' +
        '   </a>' +
        '   </div>' +
        '   </div>' +
        '   <div class="row">' +
        '   <div class="col-md-6 col-sm-12 col-md-offset-3 col-xs-12 text-center">' +
        '   <a class="top-down" id="downBtn">' +
        '   <img src="http://vonvogel-design.com/images/small/designOwn-btn/down.png" alt="">' +
        '   </a>' +
        '   </div>' +
        '   </div>' +
        '   </div>' +
        '   <div class="col-sm-12 col-xs-12 info-box visible-sm visible-xs">' +
        '   <div class="share">' +
        '   <span style="color: #65afdb">Share to&nbsp;</span>' +
        '<a href="mailto:*" class="ge email"><i class="fas fa-envelope"></i></a>&nbsp;' +
        '<a class="ge shareFacebook" href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>&nbsp;' +
        '<a class="ge shareTwitter" href="https://mashable.com/category/twitter/" target="_blank"><i class="fab fa-twitter"></i></a>&nbsp;' +
        '<a class="ge" href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>&nbsp;' +
        '<a class="ge" href="https://www.snaphotmobi.com/" target="_blank"><i class="fab fa-snapchat-ghost"></i></a>' +
        '   </div>' +
        '   <div class="watch-info">' +
        '   <div class="box-deliver-top"></div>' +
        '   <div class="watch-info-content">' +
        '   <div class="row">' +
        '   <div class="col-xs-10 col-xs-offset-1 cyInfo-box">' +
        '   <span class="cy_description"></span><br>' +
        '   <span class="cy_price"></span>' +
        '   <span class="reset remove_cy">Remove</span>' +
        '   </div>' +
        '   <div class="col-xs-10 caseInfo col-xs-offset-1 caInfo-box">' +
        '   <span class="ca_description"></span> <br>' +
        '   <span class="ca_price"></span>' +
        '   <span class="reset remove_ca">Remove</span>' +
        '   </div>' +
        '   <div class="col-xs-10 braceletInfo col-xs-offset-1 brInfo-box">' +
        '   <span class="br_description"></span><br>' +
        '   <span class="br_price"></span>' +
        '   <span class="reset remove_br"><b>Remove</b></span>' +
        '   </div>' +
        '    <div class="col-xs-10 braceletInfo col-xs-offset-1">' +
        'Order today and we ship for FREE your custom made timepiece already tomorrow.' +
        '</div>' +
        '   <div class="col-xs-6  col-xs-offset-1">' +
        '   <div class="addToBag">' +
        '   <div class="addTo">' +
        '   <span class="addTo_left">' +
        '   1' +
        '   </span>' +
        '   <span class="addTo_right add-to-bag">' +
        '   Add To Bag' +
        '</span>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-10  col-xs-offset-1 col-sm-4">' +
        '   <div class="totalPrice">' +
        '   Total' +
        '   <span class="to_price">190</span>' +
        '   </div>' +
        '   <div class="text-center">' +
        '   <a class="fa fa-download download">Download your watch</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="box-deliver-bottom"></div>' +
        '   </div>' +
        '   </div>' +
        '   </div>' +
        '   </div>' +
        '<div class="modal fade" id="signatureModel" tabindex="-1" role="dialog" aria-labelledby="loginModal">' +
        '    <div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
        '<h4 class="modal-title" id="signatureLabel">Fill in your signature to name</h4>' +
        '</div>' +
        '<div class="modal-body">' +
        '   <div class="form-group">' +
        '   <label for="loginName" >Full Name</label>' +
        '<input type="text" class="form-control" id="signature" placeholder="Full name">' +
        '   </div>' +
        '   <button type="submit" class="btn btn-primary" id="signatureBtn">Submit</button>' +
        '   </div>' +
        '   </div>' +
        '   </div>' +
        '</div>'
    };

    var contentCss = '';

    var comOwl = false;
    var loadJsTimes = 0;
    var dynamicLoading = {
        css: function(path){
            if(!path || path.length === 0){
                throw new Error('argument "path" is required !');
            }
            var head = document.getElementsByTagName('head')[0];
            var link = document.createElement('link');
            link.href = path;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            head.appendChild(link);
        }
    };
    //dynamicLoading.css("http://vonvogel-design.com/css/bootstrap.min.css");
    dynamicLoading.css("http://vonvogel-design.com/js/layer/skin/default/layer.css");
    dynamicLoading.css("http://vonvogel-design.com/css/owl.carousel.min.css");
    dynamicLoading.css("http://vonvogel-design.com/css/owl.theme.default.min.css");

    $.getScript("http://vonvogel-design.com/js/layer/layer.js");
    $.getScript("http://vonvogel-design.com/js/bootstrap.min.js");
    $.getScript("http://vonvogel-design.com/js/owl.carousel.js",function(){  //加载test.js,成功后，并执行回调函数
        comOwl = true;
    });
    


    var targetHost = 'http://vonvogel-design.com';
    var currentS = '';
    var typeShare = 'download';
    var showComponents = true;
    var nextShow = true;
    var previousShow = false;
    var productList = [];
    var cylinder_watch = {};
    var cases_watch = {};
    var bracelet_watch = {};
    var bottomBoxHeight = 200;
    var categoryId2;
    var categoryId;
    var screenWidth = window.screen.width;
    var showGestrue = true;


    var ele = null;

    var allCountryList = [];
    function getDistributorList(){
        var url = getRootPath() + '/proxy.php?csurl='+targetHost+'/system/getDistributorList';
        $.get(url, function (data) {
            if(data.length>0){
                for(var item in data){
                    var country = 'Global';
                    if(data[item].country == defaultConfig.country){
                        country = defaultConfig.country;
                        break;
                    }
                }
                defaultConfig.country = country;
            }else{
                defaultConfig.country = 'Global';
            }
            if(comOwl==true){
                init();
                getCategory();
            }else{
                window.setTimeout(function () {
                    loadJsTimes++;
                    if(loadJsTimes<4){
                        goInit();
                    }else{
                        comOwl = false;
                        layer.msg("Load Js error. Trying to reload!", {time: 2000, icon: 2});
                        loadJsTimes = 0;
                    }
                },2000);
            }

        });
    }
    function goInit() {
        if(comOwl==true){
            init();
            getCategory();
        }else{
            window.setTimeout(function () {
                loadJsTimes++;
                if(loadJsTimes<4){
                    goInit();
                }else{
                    comOwl = false;
                    layer.msg("Load Js error. Trying to reload!", {time: 2000, icon: 2});
                    loadJsTimes = 0;
                }
            },2000);
        }
        // getDistributorList();
    }


    var initVon = function (params) {
        if(params.ele==undefined){
            window.alert("please set this content`s parent element!");
        }else{
            if(params.keyId==undefined){
                window.alert("please set this keyId number!");
            }else{
                defaultConfig.keyId = params.keyId;
                defaultConfig.ele = params.ele;
                window.setTimeout(function () {
                    getCountry();
                },2000)
            }
        }
    };

    function getCountry() {
        $.ajax({
            type: "post",
            url: getRootPath() + "/proxy.php?csurl="+targetHost+"/component/getCountry",
            data: {
                keyId: defaultConfig.keyId,
            },
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                if (data.country !=  undefined) {
                    defaultConfig.country = data.country;
                    goInit();
                    afterGetCountry();
                } else {
                    layer.msg("Get country error.", {time: 4000, icon: 2});

                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                layer.msg("Connection error.", {time: 2000, icon: 2});
            }
        });
    }
    function afterGetCountry() {
        ele = $('#'+defaultConfig.ele);
        var style = document.createElement('style');
        ele.append(style);
        style.innerText = contentCss;
        ele.append(str.contentHtml);

        $('#topBtn').click(function () {
            getPreviousNext('previous');
        });
        $('#downBtn').click(function () {
            getPreviousNext('next');
        });

        $('.remove_cy').click(function () {
            cylinder_watch = {};
            setMessage();
            setWatch();
        });
        $('.remove_ca').click(function () {
            cases_watch = {};
            setMessage();
            setWatch();
        });
        $('.remove_br').click(function () {
            bracelet_watch = {};
            setMessage();
            setWatch();
        });

        $('.download').click(function () {
            typeShare = 'download';
            if(bracelet_watch.articleNo==undefined&&cases_watch.articleNo==undefined&&cylinder_watch.articleNo==undefined){
                layer.msg("Pls select your components.", {time: 2000, icon: 2})
            }else{

                $('#signatureModel').modal('show');

            }
        });
        $("#signatureBtn").click(function () {
            var signatureStr = $('#signature').val();
            $('#signatureModel').modal('hide');
            if(typeShare=='download'){
                downloadWatch(signatureStr);
            }else{
                facebookShare(signatureStr);
            }
        });
        $('.shareTwitter').click(function () {
            var url = 'http://twitter.com/home/';
            var title = 'Twitter Share';
            window.open(url, title);
        });
        $('.shareFacebook').click(function () {
            typeShare = 'facebook';
            if(bracelet_watch.articleNo==undefined&&cases_watch.articleNo==undefined&&cylinder_watch.articleNo==undefined){
                layer.msg("Pls select your component.", {time: 2000, icon: 2});
            }else{
                $('#signatureModel').modal('show');
            }
        });

        $('.add-to-bag').click(function () {
            addToBag();
        });
    }

    function addToBag() {
        var data = {};
        var ids = [];
        var productIds = '';
        if(cylinder_watch.articleNo!=undefined){
            var cy = JSON.stringify(cylinder_watch);
            data.cy = JSON.parse(cy);
            data.cy.url = targetHost+cylinder_watch.url;
            ids.push(cylinder_watch.productId);
        }
        if(cases_watch.articleNo!=undefined){
            var ca = JSON.stringify(cases_watch);
            data.ca = JSON.parse(ca);
            data.ca.completeUrl = targetHost+cases_watch.completeUrl;
            data.ca.url = targetHost+cases_watch.url;
            ids.push(cases_watch.productId);
        }
        if(bracelet_watch.articleNo!=undefined){
            var br = JSON.stringify(bracelet_watch);
            data.br = JSON.parse(br);
            data.br.completeUrl = targetHost+bracelet_watch.completeUrl;
            data.br.url = targetHost+bracelet_watch.url;
            ids.push(bracelet_watch.productId);
        }
        var jsonData = JSON.stringify(data);
        productIds = ids.join(',');

        $.ajax({
            type: "post",
            url: getRootPath() + "/proxy.php?csurl="+targetHost+"/component/addCount",
            data: {
                keyId: defaultConfig.keyId,
                productIds:productIds
            },
            dataType: "json"
        });

        $('#vonData').val(jsonData);
        $('#vonData').click();
    }

    function init() {
        setWatch();
        // setMessage();
        setDefaultWatch();
        setBtnDisabled();
    }

    function setLineHeight() {
        setTimeout(function () {
            bottomBoxHeight = $('#owlBox').outerHeight();
            var top = bottomBoxHeight / 2 - 20;
            $('.btn-rt-b').css('height', bottomBoxHeight + 'px');
            $('.left-right').css({'padding-top': top + 'px', 'height': bottomBoxHeight + 'px'});
        },500);
    }
    function setBtnDisabled() {
        if(nextShow==true){
            $('#downBtn').css({'opacity': '1','cursor':'pointer'});
        }else{
            $('#downBtn').css({'opacity': '0','cursor':'default'});
        }
        if(previousShow==true){
            $('#topBtn').css({'opacity': '1','cursor':'pointer'});
        }else{
            $('#topBtn').css({'opacity': '0','cursor':'default'});
        }
        //璁剧疆 宸﹀彸鎸夐挳鏄惁鍙敤 ...
        var a = $('.owl-item');
    }
    function getProductDetail(productId) {
        var selectedProductId = '';
        if(cylinder_watch.articleNo!=undefined){
            selectedProductId+=cylinder_watch.productId+',';
        }
        if(cases_watch.articleNo!=undefined){
            selectedProductId+=cases_watch.productId+',';
        }
        if(bracelet_watch.articleNo!=undefined){
            selectedProductId+=bracelet_watch.productId;
        }
        $.ajax({
            type: "post",
            url: getRootPath() + "/proxy.php?csurl="+targetHost+"/designs/getProductById",
            data: {
                productId: productId,
                selectedProductId:selectedProductId,
                country: defaultConfig.country
            },
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                if (data.flag) {
                    if(data.proDetail.categoryName=='Cases'){
                        cases_watch = data.proDetail;
                        if(data.relatedProduct!=undefined){
                            bracelet_watch.url = data.relatedProduct.url;
                        }
                    }else if(data.proDetail.categoryName=="Cylinder"){
                        cylinder_watch = data.proDetail;
                    }else if(data.proDetail.categoryName=="Bracelets"){
                        bracelet_watch = data.proDetail;
                        if(data.relatedProduct!=undefined){
                            cases_watch.url = data.relatedProduct.url;
                        }
                    }
                    currentS = data.proDetail.currency;
                    setWatch();
                } else {
                    layer.msg("Loading error Pls refresh.", {time: 4000, icon: 2});
                    return false;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                layer.msg("Connection error.", {time: 2000, icon: 2})
            }
        });
    }
    function traverse(data) {
        var scrollImg = '';
        if(categoryId==1){
            scrollImg = 'cy_scroll_img';
        }else if(categoryId==6){
            scrollImg = 'ca_scroll_img';
        }else if(categoryId==7){
            scrollImg = 'br_scroll_img';
        }
        $("#owl").remove();
        var owlInner = $('<div class="clean second" id="owl"></div>');
        $("#owlBox").append(owlInner);
        for (var i = 0; i < data.length; i++) {
            var imgSrc = targetHost + data[i].url;
            var str = '<div class="item">' +
                '<div class="img-box m-t">' +
                '<a>' +
                '<img data-id="' + data[i].productId + '"' + 'data-p-id="' + categoryId + '"' +
                ' src=' + imgSrc +
                ' alt=""' +
                ' class="img-responsive scroll_img selectProduct ' +scrollImg+'">' +
                '</a>' +
                '</div>' +
                '</div>';
            $("#owl").append(str);
        }
    }
    function b(data,callback) {
        traverse(data);
        callback();
    }
    function c() {
        var owl = $("#owl");
        owl.on('initialized.owl.carousel', function (event) {
            var items = event.item.count;
            var item = event.item.index;
            var size = event.page.size;
            var aa = item == 0||item == null ? true : false;
            var bb = items - item <= size ? true : false;
            aa ? $('.leftBtn').css({'opacity': '0', 'cursor': 'default'}) : $('.leftBtn').css({
                'opacity': '1',
                'cursor': 'pointer'
            });
            bb ? $('.rightBtn').css({'opacity': '0', 'cursor': 'default'}) : $('.rightBtn').css({
                'opacity': '1',
                'cursor': 'pointer'
            });
            setLineHeight();
        });
        owl.owlCarousel({
            callbacks: true,
            margin: 10,
            items: 3,
            dots: false,
            autoplay: false,
            mouseDrag: true,
            touchDrag: true,
            nav: false,
            loop: false,
            addClassActive: true,
            afterInit: true,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 4
                }
            }
        });
        owl.on('changed.owl.carousel', function (event) {
            var items = event.item.count;
            var item = event.item.index;
            var size = event.page.size;
            var aa = item == 0 ? true : false;
            var bb = items - item == size ? true : false;
            aa ? $('.leftBtn').css({'opacity': '0', 'cursor': 'default'}) : $('.leftBtn').css({
                'opacity': '1',
                'cursor': 'pointer'
            });
            bb ? $('.rightBtn').css({'opacity': '0', 'cursor': 'default'}) : $('.rightBtn').css({
                'opacity': '1',
                'cursor': 'pointer'
            });
        });
        owl.on('dragged.owl.carousel', function (event) {
            showGestrue ? $('.gestureBox').css('display', 'none') : '';
        });
        // 绗簩灞�宸﹀彸 鎸夐挳浜嬩欢
        $('.leftBtn').click(function () {
            owl.trigger('prev.owl.carousel');
            setBtnDisabled();
        });
        $('.rightBtn').click(function () {
            owl.trigger('next.owl.carousel');
            setBtnDisabled();
        });

        $('.selectProduct').parent().click(function () {
            var pId = $('.selectProduct').attr('data-p-id');
            if(pId==1){
                $('.selectProduct').css('transform', 'scale(1.5)');
                $(this).find('.selectProduct').first().css('transform', 'scale(1.7)');
            }else if(pId==6){
                $('.selectProduct').css('transform', 'scale(1.3)');
                $(this).find('.selectProduct').first().css('transform', 'scale(1.5)');
            }else if(pId==7){
                $('.selectProduct').css('transform', 'scale(1.1)');
                $(this).find('.selectProduct').first().css('transform', 'scale(1.3)');
            }
            var productId = $(this).find('.selectProduct').first().attr('data-id');
            getProductDetail(productId);
        });
        setBtnDisabled();
    }
    function setWatch() {
        //显示单个 组件时
        if(cases_watch.url!=undefined){
            if(bracelet_watch.url!=undefined||cylinder_watch.url!=undefined){
                $('#cases-watch').attr('src', targetHost+cases_watch.url);
            }else{
                $('#cases-watch').attr('src', targetHost+cases_watch.completeUrl);
            }
        }else{
            $('#cases-watch').attr('src','');
        }
        if(bracelet_watch.url!=undefined){
            if(bracelet_watch.categoryId2==13){
                if(cylinder_watch.url!=undefined){
                    $('#cylinder-watch').attr('src', targetHost+bracelet_watch.url);
                    $('#bracelet-watch').attr('src', targetHost+cylinder_watch.url);
                    if(cases_watch.url!=undefined){
                        $('#cases-watch').attr('src', targetHost+cases_watch.url);
                    }
                }else{
                    if(cases_watch.url!=undefined){
                        $('#bracelet-watch').attr('src', targetHost+bracelet_watch.url);
                        $('#cases-watch').attr('src', targetHost+cases_watch.url);
                    }else{
                        $('#bracelet-watch').attr('src', targetHost+bracelet_watch.completeUrl);
                    }
                }
            }else{
                if(cylinder_watch.url!=undefined){
                    $('#bracelet-watch').attr('src', targetHost+bracelet_watch.url);
                    $('#cylinder-watch').attr('src', targetHost+cylinder_watch.url);
                }else{
                    $('#cylinder-watch').attr('src', '');
                    if(cases_watch.url!=undefined){
                        $('#bracelet-watch').attr('src', targetHost+bracelet_watch.url);
                    }else{
                        $('#bracelet-watch').attr('src', targetHost+bracelet_watch.completeUrl);
                    }
                }
            }
        }else{
            $('#bracelet-watch').attr('src', '');
            if(cylinder_watch.url!=undefined){
                $('#cylinder-watch').attr('src', targetHost+cylinder_watch.url);
            }else{
                $('#cylinder-watch').attr('src','');
            }
        }
        if (bracelet_watch.url == undefined &&
            cylinder_watch.url == undefined &&
            cases_watch.url == undefined) {
            showComponents = true;
        } else {
            showComponents = false;
        }
        showComponents ? $('.watch-dis-text').css('display', 'block') : $('.watch-dis-text').css('display', 'none');
        setMessage();
    }
    function setDefaultWatch() {
        var productIds = window.localStorage.getItem('productIds');
        if(productIds==undefined||productIds==''){
        }else{
            var productIdArr = productIds.split(",");
            for(var i=0;i<productIdArr.length;i++){
                getProductDetail(productIdArr[i]);
            }
            window.localStorage.setItem('productIds','');
        }
    }
    function setMessage() {
        if (cylinder_watch.price == undefined) {
            $('.cyInfo-box').css('display', 'none');
        } else {
            $('.cy_price').text(toThousands(cylinder_watch.price)+' '+currentS);
            $('.cy_description').text(cylinder_watch.description);
            $('.cyInfo-box').css('display', 'block');
            // currencyS = cylinder_watch.currency;
        }
        if (cases_watch.price == undefined) {
            $('.caInfo-box').css('display', 'none');
        } else {
            $('.caInfo-box').css('display', 'block');
            $('.ca_price').text(toThousands(cases_watch.price)+' '+currentS);
            $('.ca_description').text(cases_watch.description);
            // currencyS = cases_watch.currency;
        }
        if (bracelet_watch.price == undefined) {
            $('.brInfo-box').css('display', 'none');
        } else {
            $('.brInfo-box').css('display', 'block');
            $('.br_price').text(toThousands(bracelet_watch.price)+' '+currentS);
            $('.br_description').text(bracelet_watch.description);
            // currencyS = bracelet_watch.currency;
        }
        var totalPrice = 0;
        totalPrice = cylinder_watch.price != undefined ? totalPrice + parseInt(cylinder_watch.price) : totalPrice + 0;
        totalPrice = cases_watch.price != undefined ? totalPrice + parseInt(cases_watch.price) : totalPrice + 0;
        totalPrice = bracelet_watch.price != undefined ? totalPrice + parseInt(bracelet_watch.price) : totalPrice + 0;
        $('.to_price').text(toThousands(totalPrice)+' '+currentS)
    }

    function a() {
        c();
        init();
    }
    function defaultCategory(item) {
        categoryId = item.categoryId;
        $.ajax({
            type: "post",
            url: getRootPath() + "/proxy.php?csurl="+targetHost+"/designs/getProByCId",
            data: {
                categoryId: categoryId,
                country: defaultConfig.country
            },
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                if (data.flag) {
                    if (data.productList.length > 0) {
                        productList = data.productList;
                        previousShow = false;
                        nextShow = data.nextShow;
                        categoryId2 = data.productList[0].categoryId2;
                        b(productList, a);
                    }else{
                        layer.msg("No data! Pls select other country and try again.", {time: 2000, icon: 2});
                        nextShow = false;
                        $('.leftBtn').css({'opacity': '0', 'cursor': 'default'});
                        productList = [];
                        b(productList, a);
                    }
                } else {
                    layer.msg("Loading error Pls refresh.", {time: 2000, icon: 2});
                    return false;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                layer.msg("Connection error.", {time: 2000, icon: 2})
            }
        });
    }
    function selectCategory() {
        var cId = $(this).attr('data-id');
        categoryId = cId;
        $.ajax({
            type: "post",
            url: getRootPath() + "/proxy.php?csurl="+targetHost+"/designs/getProByCId",
            data: {
                categoryId: categoryId,
                country: defaultConfig.country
            },
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                if (data.flag) {
                    if (data.productList.length > 0) {
                        productList = data.productList;
                        nextShow = data.nextShow;
                        previousShow = false;
                        categoryId2 = data.productList[0].categoryId2;
                        b(productList, c);
                    }else{
                        layer.msg("No data.", {time: 2000, icon: 2});
                        nextShow = false;
                        $('.leftBtn').css({'opacity': '0', 'cursor': 'default'});
                        productList = [];
                        b(productList, a);
                    }
                } else {
                    layer.msg("Loading error Pls refresh.", {time: 2000, icon: 2});
                    return false;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                layer.msg("Connection error.", {time: 2000, icon: 2})
            }
        });

        $('.left-img-box').removeClass('top-select-active');
        $(this).addClass('top-select-active');
    }
    function getPreviousNext(type){
        $.ajax({
            type: "post",
            url: getRootPath() + "/proxy.php?csurl="+targetHost+"/designs/getProByNextOrPerv",
            data: {
                categoryId: categoryId2 ,
                country: defaultConfig.country,
                controType:type
            },
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                if (data.flag) {
                    if (data.productList.length > 0) {
                        productList = data.productList;
                        nextShow = data.nextShow;
                        previousShow = data.previousShow;
                        categoryId2 = data.productList[0].categoryId2;
                        b(productList, c);
                    }
                } else {
                    layer.msg("Loading error Pls refresh.", {time: 2000, icon: 2});
                    return false;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                layer.msg("Connection error.", {time: 2000, icon: 2})
            }
        });
    }

    function getCategory() {
        $.ajax({
            type: "post",
            url: getRootPath() + "/proxy.php?csurl="+targetHost+"/designs/getCategory",
            data: {parentId: null},
            dataType: "json",
            success: function (data, textStatus, jqXHR) {
                if (data.flag) {
                    var cateLis = data.categoryLis;
                    if (cateLis != null && cateLis.length > 0) {
                        var str = "";
                        for (var i = 0; i < cateLis.length; i++) {
                            var cls = cateLis[i].categoryName.toLocaleLowerCase();
                            var cls = "";
                            if (i == 0) {
                                cls = " top-select-active";
                            } else {
                                cls = "";
                            }
                            str += '<div class="col-xs-4 min-h col-sm-12" >'
                                + '<div class="left-img-box' + cls + '" data-id="' + cateLis[i].categoryId + '" data-name="' + cateLis[i].categoryName + '">'
                                + '<img src="' + targetHost + cateLis[i].url + '"  class="img-responsive " alt="">'
                                + '</div> </div>';
                        }
                        $("#categoryListDIv").empty().append(str);
                        defaultCategory(cateLis[0]);
                        $('.left-img-box').click(selectCategory);
                        //allFun();
                    }
                } else {
                    layer.msg("Loading error Pls refresh.", {time: 2000, icon: 2});
                    return false;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                layer.msg("Connection error.", {time: 2000, icon: 2})
            }
        });
    }

    function watchReset() {
        cylinder_watch = {};
        cases_watch = {};
        bracelet_watch = {};
        setWatch();
        setMessage();
    }

    function downloadWatch(signatureStr) {
        var generateImage = '';
        if(cylinder_watch.articleNo!=undefined){
            if(cases_watch.articleNo!=undefined){
                if(bracelet_watch.articleNo!=undefined){
                    if(bracelet_watch.categoryId2==13){
                        generateImage += '?imagePath3='+cylinder_watch.url;
                        generateImage += '&imagePath2='+cases_watch.url;
                        generateImage += '&imagePath1='+bracelet_watch.url;
                    }else{
                        generateImage += '?imagePath1='+cylinder_watch.url;
                        generateImage += '&imagePath2='+cases_watch.url;
                        generateImage += '&imagePath3='+bracelet_watch.url;
                    }
                }else{
                    generateImage += '?imagePath1='+cylinder_watch.url;
                    generateImage += '&imagePath2='+cases_watch.url;
                }
            }else{
                if(bracelet_watch.articleNo!=undefined){
                    if(bracelet_watch.categoryId2==13){
                        generateImage += '?imagePath3='+cylinder_watch.url;
                        generateImage += '&imagePath1='+bracelet_watch.url;
                    }else{
                        generateImage += '?imagePath1='+cylinder_watch.url;
                        generateImage += '&imagePath3='+bracelet_watch.url;
                    }
                }else{
                    generateImage += '?imagePath1='+cylinder_watch.url;
                }
            }
        }else{
            if(cases_watch.articleNo!=undefined){
                if(bracelet_watch.articleNo!=undefined){
                    generateImage += '?imagePath2='+cases_watch.url;
                    generateImage += '&imagePath3='+bracelet_watch.url;
                }else{
                    generateImage += '?imagePath2='+cases_watch.completeUrl;
                }
            }else{
                if(bracelet_watch.articleNo!=undefined){
                    generateImage += '?imagePath13='+bracelet_watch.completeUrl;
                }
            }
        }
        if(signatureStr==undefined||signatureStr==''||signatureStr==null){

        }else{
            generateImage += '&name='+signatureStr;
        }
        var url = targetHost+'/share/downloadImage'+generateImage;
        window.open(url);
    }
    function facebookShare(signatureStr) {
        var generateImage = {};
        var articleNo = '';
        if(cylinder_watch.articleNo!=undefined){
            if(bracelet_watch.articleNo!=undefined){
                if(bracelet_watch.categoryId2==13){
                    generateImage.imagePath3 = cylinder_watch.url;
                    generateImage.imagePath1 = bracelet_watch.url;
                }else{
                    generateImage.imagePath1 = cylinder_watch.url;
                    generateImage.imagePath3 = bracelet_watch.url;
                }
            }else{
                generateImage.imagePath1 = cylinder_watch.url;
            }
        }else{
            if(bracelet_watch.articleNo!=undefined){
                if(bracelet_watch.categoryId2==13){
                    generateImage.imagePath1 = bracelet_watch.url;
                }else{
                    generateImage.imagePath3 = bracelet_watch.url;
                }
            }
        }
        if(cases_watch.articleNo!=undefined){
            generateImage.imagePath2 = cases_watch.url;
        }
        generateImage.articleNo = articleNo;
        generateImage.type = 'facebook';
        if(signatureStr==undefined||signatureStr==''||signatureStr==null){

        }else{
            generateImage.name = signatureStr;
        }

        wLeft = window.screenLeft ? window.screenLeft : window.screenX;
        wTop = window.screenTop ? window.screenTop : window.screenY;
        var left = wLeft + (window.innerWidth / 2) - (600 / 2);
        var top = wTop + (window.innerHeight / 2) - (400 / 2);
        var firstUrl = targetHost+'/facebookShare.jsp';
        var newWin = window.open(firstUrl,'Facebook', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=400, top=' + top + ', left=' + left);
        $.ajax({
            type: "post",
            url: targetHost + "/share/generateImage",
            data: generateImage,
            dataType: "text",
            success: function (data, textStatus, jqXHR) {
                var shareUrl = targetHost+data;
                newWin.location.href = shareUrl;
                // popupwindow(shareUrl,'Facebook', 600, 400);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                layer.msg("Connection error.", {time: 2000, icon: 2})
            }
        });
    }

    function getRootPath() {
        var curWwwPath = window.document.location.href;
        var pathName = window.document.location.pathname;
        var pos = curWwwPath.indexOf(pathName);
        var localhostPaht = curWwwPath.substring(0, pos);
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        var str    = window.location.host;
        var substr = "localhost";
        if(isContains(str,substr)){
            return 'http://localhost';
            //return 'http://vonvogel-design.com';

        }else{
            return (localhostPaht+projectName);
        }
    }
    function isContains(str, substr) {
        return str.indexOf(substr) >= 0;
    }
    function toThousands(num) {
        if(num!=undefined){
            var result = '';
            var str = num.toString();
            var strNum = 0;
            var strF = '';
            var strB = '';
            if(str.indexOf('.') > 0){
                strNum = str.indexOf('.');
                strF = str.substring(0,strNum);
                strB = str.substring(strNum,str.length)
                while (strF.length > 3) {
                    result = ',' + strF.slice(-3) + result;
                    strF = strF.slice(0, strF.length - 3);
                }
                if (strF) { result = strF + result; }
                return result+strB;
            }else{
                while (str.length > 3) {
                    result = ',' + str.slice(-3) + result;
                    str = str.slice(0, str.length - 3);
                }
                if (str) { result = str + result; }
                return result;
            }
        }
    }

    return $.initVon = initVon;
})($);
