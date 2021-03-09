<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="hu">
    <head>
        <meta charset="UTF-8">
        <title>Váradi Zsolt</title>
        <link href="formazas.css" rel="stylesheet" type="text/css"/>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/2.3.0/mustache.min.js"></script>
        <script src="feldolgoz.js" type="text/javascript"></script>
    </head>
    <body>
        <main>
            <header><h1>Telefonkönyv</h1></header>
            <nav>
                <ul>

                    <li id="beolvas"><a href="#">Beolvas</a></li>
                </ul>

            </nav>

            <section>
                <label for="nev">név:</label>
                <input id="nev" name="nev" type="text" value="Valaki Vagyok">
                <label for="tel">tel:</label>
                <input type="text" id="tel" name="tel" value="03-30-1234-567">
                <label for="kep">kép:</label>
                <input type="text" id="kep" name="kep">
                <br>
                <button id="kuld">Küld</button>

            </section>  
              
            <section class="elrejt szerkesztes">
            
                    <label for="id2">ID:</label>
                    <input type="text" id="id2" name="id2" >
                           <label for="nev2">név:</label>
                    <input type="text" id="nev2" name="nev2" >
                           <label for="tel2">tel:</label>
                    <input type="text" id="tel2" name="tel2">
                    <label for="kep2">kép:</label>
                    <input type="text" id="kep2" >
                    <br>
                    <button id="modosit">Módosít</button>
                    <br>
                    <button id="megse">Mégse</button>
<br>
          
            </section>
                   
            <article>


            </article>
        </main>
    </body>
</html>
