$(function () {

    $("#beolvas").on("click", beolvas);
    $("#kuld").on("click", adBeir);
      
      $("article").delegate(".torol","click", adatTorol);
        $("article").delegate(".szerkeszt","click", adatSzerkeszt);
          $("#megse").on("click", adatMegse);
            $("#modosit").on("click", adatModosit);
      
});
var telefonkonyvem = [];
function kiir() {
//    var nev = $("#nev").val();
//    var tel = $("#tel").val();
//    var kep = $("#kep").val();
    $("article").empty();
    for (var i = 0; i < telefonkonyvem.length; i++) {
        var nev = telefonkonyvem[i].nev;
        var ID = telefonkonyvem[i].ID;
        var tel = telefonkonyvem[i].tel;
        var kep = telefonkonyvem[i].kep;
        var elem = "<div><h2>" + nev + "</h2><p>" + tel + "</p> <p>" + kep + "</p><button id="+ID+" class='torol'>Töröl</button><button id="+i+" class='szerkeszt'>Szerkeszt</button></div>";
        $("article").append(elem);
    }



}

function adatModosit(){
    
       var editszemely = {
        ID: $("#id2").val(),
        nev: $("#nev2").val(),
        tel: $("#tel2").val(),
        kep: $("#kep2").val()

    };


    console.log("Módosit");
        console.log(editszemely);

    $.ajax({
        type: "PUT",
        url: "modosit.php",
        data: editszemely,
        success: function () {

      
           beolvas();
        },
        error: function () {
            alert("Hiba az adatok mentésekor(uj)");
        }
    });
    
    
}
function adatMegse(){
    
    $(".szerkesztes").addClass("elrejt");
}



function adatSzerkeszt(){
    console.log("modosit");
    var index = $(this).attr("id");
    console.log(index);
    
    $(".szerkesztes").removeClass("elrejt");
     $("#id2").val(telefonkonyvem[index].ID);
     $("#nev2").val(telefonkonyvem[index].nev);
       $("#tel2").val(telefonkonyvem[index].tel);
      $("#kep2").val(telefonkonyvem[index].kep);
    
        

}


function beolvas() {
    $.ajax({
        type: "GET",
        url: "feldolgoz.php",
        success: function (result) {
            console.log(result); /*JSONn formátumban várjuk az AB eredményeit*/
            telefonkonyvem = JSON.parse(result);
            console.log(telefonkonyvem); /*JSONn formátumban várjuk az AB eredményeit*/
            kiir();
        },
        error: function () {
            alert("Hiba az adatok betöltésekor!");
        }
    });
}
function adBeir() {
//    var nev = $("#nev").val();
//    var tel = $("#tel").val();
//    var kep = $("#kep").val();
    var szemely = {

        nev: $("#nev").val(),
        tel: $("#tel").val(),
        kep: $("#kep").val()

    };



    $.ajax({
        type: "POST",
        url: "beir.php",
        data: szemely,
        success: function (ujszemely) {

            console.log(ujszemely);
            telefonkonyvem = JSON.parse(ujszemely);
            console.log(telefonkonyvem);
            kiir();
        },
        error: function () {
            alert("Hiba az adatok mentésekor");
        }
    });
    
}
function adatTorol(){
      var id=$(this).attr("id");
      var aktelem = $(this).closest("div");
    console.log(id);
  
  
  
      $.ajax({
        type: "DELETE",
        url: "torles.php?ID="+id,
        success: function () {
            console.log("Törlés");
            aktelem.remove();
        },
        error: function () {
            alert("Hiba az adatok törlésekor!");
        }
    });
}


