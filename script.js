
// panggil dan jalankan class number dan operator
function view(val) {
    document.getElementById("viewer").value += val;
}

// jalankan class clean
function clean() {
    document.getElementById("viewer").value = "";
}

// panggil dan jalankan class backspace
function backspace() {
    var val = document.getElementById("viewer").value;
    document.getElementById("viewer").value = val.substring(
        0,
        val.length - 1
    );
}

// panggil dan jalankan class equal
function equal() {
    var val = document.getElementById("viewer").value;
    if (val) {
        document.getElementById("viewer").value = eval(val);
    }
}
