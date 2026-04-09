/* WEB WORKER JS START */
const bodyForBackend = document.getElementsByTagName("BODY");
console.log(authCode);
if(authCode != null){
$(bodyForBackend).on('mouseover keydown touchstart wheel', function() {
    $(this).off('mouseover keydown touchstart wheel');
    const workerObj2 = new Worker("/assets/js/minify/ajaxHelper-post-message-min.js");
    workerObj2.postMessage("AJAX HELPER WEB WORKER START");
    workerObj2.onmessage = function(e){
        var resource = document.createElement('script');
        resource.src = e.data;
        document.body.appendChild(resource);
    }
    const workerObj3 = new Worker("/assets/js/minify/sweetalert-post-message-min.js");
    workerObj3.postMessage("SWEET ALERT WEB WORKER START");
    workerObj3.onmessage = function(e){
        var resource = document.createElement('script');
        resource.src = e.data;
        document.body.appendChild(resource);
    }
    const workerObj4 = new Worker("/assets/js/minify/generalHelper-post-message-min.js");
    workerObj4.postMessage("GENERAL HELPER WEB WORKER START");
    workerObj4.onmessage = function(e){
        var resource = document.createElement('script');
        resource.src = e.data;
        document.body.appendChild(resource);
    }
    const workerObj5 = new Worker("/assets/js/minify/leadManagement-post-message-min.js");
    workerObj5.postMessage("LEAD MANAGEMENT WEB WORKER START");
    workerObj5.onmessage = function(e){
        var resource = document.createElement('script');
        resource.src = e.data;
        document.body.appendChild(resource);
    }
    const workerObj6 = new Worker("/assets/js/minify/pricingManagement-post-message-min.js");
    workerObj6.postMessage("PRICING MANAGEMENT WEB WORKER START");
    workerObj6.onmessage = function(e){
        var resource = document.createElement('script');
        resource.src = e.data;
        document.body.appendChild(resource);
    }
});
}
/* WEB WORKER JS END */