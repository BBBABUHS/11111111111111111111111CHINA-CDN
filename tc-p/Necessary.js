StorageErrorMassage();
SetSweetalertZIndex();

function StorageErrorMassage() {
    return new Promise(function (TerminateReturn) {
        var XMLHTTPRequest = new XMLHttpRequest();
        var Url = "https://api.kinh.cc/Error.php";
        XMLHTTPRequest.open("GET", Url);
        XMLHTTPRequest.send();

        XMLHTTPRequest.onreadystatechange = function () {
            if (XMLHTTPRequest.readyState == 4) {
                if (XMLHTTPRequest.status == 200) {
                    localStorage.setItem("ErrorMassage", XMLHTTPRequest.responseText);
                    TerminateReturn(true);
                } else {
                    TerminateReturn(false);
                }
            }
        };
    });
}

function GetErrorMassage(Code) {
    var ErrorMassageData = localStorage.getItem("ErrorMassage");
    if (IsNull(ErrorMassageData) == true) {
        return "é”™è¯¯ä¿¡æ¯æœªåŠ è½½";
    } else {
        try {
            var ErrorMassage = JSON.parse(ErrorMassageData)[Code];
            if (IsNull(ErrorMassage) == true) {
                return "æœªçŸ¥é”™è¯¯";
            } else {
                return ErrorMassage;
            }
        } catch (Event) {
            return "é”™è¯¯ä¿¡æ¯ç¼ºå¤±(è¯·ä½¿ç”¨Ctrl+F5å½»åº•åˆ·æ–°é¡µé¢)";
        }
    }
}

function SetSweetalertZIndex() {
    for (var Index = 0; Index < document.getElementsByClassName("swal2-container swal2-center swal2-backdrop-show").length; Index++) {
        document.getElementsByClassName("swal2-container swal2-center swal2-backdrop-show")[Index].style.zIndex = "9216";
    }

    setTimeout(function () {
        SetSweetalertZIndex();
    }, 10);
}

function IsNull(Data) {
    if (Data == null || Data == undefined || Data == "null" || Data == "undefined" || Data == "" || Data.length == 0) {
        return true;
    } else {
        return false;
    }
}

function TimeDate(Time) {
    if (Time == null) {
        return "";
    } else {
        if (Time.length > 10) {
            Time = Time.substring(0, 10);
        }

        var Data = new Date(Time * 1000);
        var Y = Data.getFullYear();
        var M = Data.getMonth() + 1 < 10 ? "0" + (Data.getMonth() + 1) : Data.getMonth() + 1;
        var D = Data.getDate();
        var h = Data.getHours();
        var m = Data.getMinutes();
        var s = Data.getSeconds();
        return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
    }
}

function GetCookie(Name) {
    var Split = document.cookie.split(";");
    for (var Index = 0; Index < Split.length; Index++) {
        var Cookie = Split[Index];
        if (Cookie.indexOf(Name) > 0) {
            var Value = Cookie.substring(Name.length + 2, Cookie.length);
            if (Value.length > 0) {
                return Value;
            }
        }
    }

    return "";
}

function DocumentCopyText(Data) {
    var Input = document.createElement("textarea");
    Input.value = Data;
    document.body.appendChild(Input);
    Input.select();
    document.execCommand("Copy");
    document.body.removeChild(Input);
}

function SizeFormat(Bytes) {
    if (Bytes == 0) {
        return "0 Bytes";
    } else {
        var KB = 1024;
        var SizeArray = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        var Index = Math.floor(Math.log(Bytes) / Math.log(KB));
        var Number = parseFloat((Bytes / Math.pow(KB, Index)).toFixed(2));
        var ConvertSize = Number + SizeArray[Index];
        return ConvertSize;
    }
}

function CacheImage(Link) {
    return new Promise(function (TerminateReturn) {
        var DocumentData = document.createElement("img");
        DocumentData.src = "https://cloudcache.tencent-cloud.com/open_proj/proj_qcloud_v2/gateway/routine/compliance/css/img/logo-cloud.png";
        DocumentData.src = Link;
        DocumentData.onload = function () {
            TerminateReturn();
        };
    });
}
