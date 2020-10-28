// Dialog.js
// You will need a div that has id darken.

var darken = false;

function displayDialog(innerHTML) {
    if (!darken) {
        darken = true;
        document.getElementById('darken').style = "pointer-events: all; background: rgba(0,0,0,0.5); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
        document.getElementById('darken').innerHTML = "<div style=\"opacity: 1; background-color: rgba(255, 255, 255, 0.5); border: 1px solid black; display: block; width: 50%; height: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)\">" + innerHTML + "</div>";
    } else {
        darken = false;
        document.getElementById('darken').style = "pointer-events: none; background: rgba(0,0,0,0); width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; z-index: 15";
        document.getElementById('darken').innerHTML = "";
    }
}
