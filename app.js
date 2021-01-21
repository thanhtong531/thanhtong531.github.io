function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).split('').map(
        c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''));
}

function accept() {
    alert("Yêu cậu ♥");
}

function reject() {
    let vw = Math.max(document.documentElement.clientWidth ?? 0, window.innerWidth ?? 0);
    let vh = Math.max(document.documentElement.clientHeight ?? 0, window.innerHeight ?? 0);

    document.querySelector("body").style.overflow = "hidden";
    document.getElementById("rejectPlaceholder").style.display = "inline";
    let bt = document.getElementById("rejectBtn");
    bt.style.position = "absolute";
    bt.style.marginLeft = "-100px";
    bt.style.marginTop = "-25px";
    bt.style.top = (Math.floor(Math.random() * (vh - 50)) + 25) + "px";
    bt.style.left = (Math.floor(Math.random() * (vw - 200)) + 100) + "px";
}

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    let fcn = "Crush";
    let crushName = urlParams.get("c");
    let B64CrushName = urlParams.get("ce");
    if (B64CrushName) {
        try {
            fcn = b64DecodeUnicode(B64CrushName);
        } catch (_) {
            fcn = crushName ?? "Crush";
        }
    } else if (crushName) {
        fcn = crushName;
    }

    document.getElementById("crushName").innerText = fcn;
}