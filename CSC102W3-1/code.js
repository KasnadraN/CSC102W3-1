function countdownTimer() {
    //countdownTimer will go from 50 to 0 by 5s
    console.log("CountdownTimer() started");
    var currTime = 50;
    document.getElementById("CountDis").innerHTML = currTime + " sec";

    //45 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 5000);

    //40 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 10000);

    //35 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 15000);

    //30 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 20000);

    //25 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 25000);

    //20 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 30000);

    //15 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 35000);

    //10 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 40000);

    //5 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = currTime + " sec";
    }, 45000);

    //0 sec display
    setTimeout(function () {
        currTime = currTime - 5;
        console.log(currTime);
        document.getElementById("CountDis").innerHTML = "Blassoff!!!!";
    }, 50000);
}
