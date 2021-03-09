$(function () {
    $("#beolvas").on("click", beolvas);




});
var telefonkonyvem = [];
function beolvas() {
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result);
            telefonkonyvem = JSON.parse(result);
            console.log(telefonkonyvem);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!");
        }
    });



}

function kiir() {
    $("article").empty();
    for (var i = 0; i < telefonkonyvem.length; i++) {
        var nev = telefonkonyvem[i].nev;
        var tel = telefonkonyvem[i].tel;
        var kep = telefonkonyvem[i].kep;

        var elem = "<div> <h2>" + nev + "</h2><p>" + tel + "</p><p>" + kep + "</p><button>Töröl</button></div>";

        $("article").append(elem);
    }
//        var nev = $("nev").val();
//        var tel = $("tel").val();
//        var kep = $("kep").val();

}

function adatuld() {
    var szemely = {
        nev: $("nev").val(),
        tel: $("tel").val(),
        kep: $("kep").val()
    };
    
    $.ajax({
        type: "POST",
        url: "beir.php",
        success: function (ujSzemely) {
            
            telefonkonyvem.push(JSON.parse(ujSzemely));
            console.log(telefonkonyvem);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!");
        }
    });



}