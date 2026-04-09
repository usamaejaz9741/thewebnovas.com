document.addEventListener('visibilitychange',function(){
    if ( document.visibilityState === 'hidden' ) {
       socketHelper.tabSwitch("OFFLINE");
    } else {
      socketHelper.tabSwitch("ONLINE");
    }
 });