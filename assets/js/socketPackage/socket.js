var socket;

$(function () {

    socket = io(socketUrl + '/chatInit', {
        withCredentials: false,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        reconnectionAttempts: Infinity
    });
    socket.on('connect', function () {
        var ipParsed = atob(ip);
        var visitorsDetails = {
            ip: ipParsed,
            url: url,
            date: getDateTime(),
            type: "visitorEnter",
            websiteId: authCode,
            debug: isDebug
        };
        socket.emit("visitorData", visitorsDetails);
    });
    socket.on('visitorInit', function () {
    });
    
    socket.on('disconnect', function () {
        var ipParsed = atob(ip);
        var visitorsDetails = {
            ip: ipParsed,
            url: url,
            date: getDateTime(),
            type: "disconnect",
            websiteId: authCode,
            debug: isDebug
        };
        socket.emit("disconnected", visitorsDetails);
        console.log("socket disconnected");
    });

});

var socketHelper = {

    tabSwitch: function (type) {
        var ipParsed = atob(ip);
        var visitorsDetails = {
            ip: ipParsed,
            url: url,
            date: getDateTime(),
            type: type,
            websiteId: authCode,
            debug: isDebug
        };
        socket.emit("tabSwitch", visitorsDetails);
    },

    chatAutoInit: function () {
        var ipParsed = atob(ip);
        var visitorsDetails = {
            ip: ipParsed,
            url: url,
            date: getDateTime(),
            type: "visitorChatAutoInit",
            websiteId: authCode,
            debug: isDebug
        };
        socket.emit("chatAutoInit", visitorsDetails);
    },
    chatEventInit: function (object) {
        console.log("event here");
        var ipParsed = atob(ip);
        var visitorsDetails = {
            ip: ipParsed,
            url: url,
            date: getDateTime(),
            type: "visitorChatEventInit",
            websiteId: authCode,
            debug: isDebug
        };
        socket.emit("chatEventInit", visitorsDetails);
    }
}

function getDateTime() {
    var currentdate = new Date();
    var datetime = currentdate.getFullYear() + "-" + (currentdate.getMonth() + 1) + "-" + currentdate.getDate() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
    return datetime;
}