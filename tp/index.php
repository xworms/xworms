<html lang="tokipona">
  <head>
    <link href="/style.css" rel="stylesheet">
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preload" href="/tp/sitelen-pona-pona.otf" as="font" crossorigin="anonymous" />
    <link rel="preload" href="/fonts/Female Underwear.ttf" as="font" crossorigin="anonymous" />
    <link rel="preload" href="/fonts/MTF Memory.ttf" as="font" crossorigin="anonymous" />
    <link rel="preload" href="/fonts/Play With Fire.ttf" as="font" crossorigin="anonymous" />
    <link rel="preload" href="/fonts/Whitelisa.ttf" as="font" crossorigin="anonymous" />
  </head>
  <body style="font-family:'sitelen pona pona'">
    <div class="tim-dat">
      <p id="tim" style="font-family:'Sofia Sans'"></p>
      <p id="dat"></p>
      <img id="sideWorm" src="worm.svg" style="width:50px">
    </div>
      <img id="wormCursor" src="worm.svg" style="display:none;transform:translate(0px,0px);">
    <div class="big-div" id="piss">
      <svg id="svg">
        <circle class="orb" id="cursor1" r="40px" fill="#999"></circle>
        <circle class="orb" id="cursor2" r="20px" fill="#ccc"></circle>
        <circle class="orb" id="cursor3" r="11px" fill="#999"></circle>
        <circle class="orb" id="cursor4" r="8px" fill="#ccc"></circle>
        <circle class="orb" id="cursor5" r="5px" fill="#999"></circle>
      </svg>
      <div class="the-container">
        <div style="font-family:'Sofia Sans'">The Worm</div>
        <div class="the-worm" style="font-family:'sitelen pona pona'">
          <span>mi</span>
          <span>soweli</span>
          <span>linja</span>
          <span>a</span>
        </div>
        <div class="worm-links" style="font-family:'Sofia Sans'">
          <a href="https://www.replit.com/@68">wepoi</a>
          <a href="https://www.youtube.com/@syake">jutu</a>
          <a href="https://www.soundcloud.com/ikkura">sewi ijo kalama</a>
          <a onclick="toggle('copy')">Tuisuko</a>
          <divider> </divider>
          <a onclick="font()" style="cursor:pointer;font-family:'sitelen pona pona';font-size: 1.5vw">sitelen o ante</a>
        </div>
        <p class="orb-message">sike li tawa e ni...</p>
      </div>
      <a class="scroll" href="#more">▼</a>
    </div>
    <span id="more"></span>
    <div class="nav">
      <a href="/">mi soweli linja a</a>
      <a href="https://replit.com/@68">Wepoi @68</a>
      <a href="https://replit.com/@-g">Wepoi @-g</a>
      <a onclick="toggle('popUp')">ijo ni o luka o</a>
    </div>
    <div class="the">
      <img class="giant-earthworm" src="worm.svg"></img>
      <section>
        <h1>pi mi .</h1>
        <img src="worm.svg" style="width:6vw"></img>
        <i><p id="wotd" onclick="newWord()"></p></i>
        <div id="links">
          <a href="https://replco.repl.co" target="_blank" id="1">
            <worm>
              <span>ale pini<br>
              replco.repl.co</span>
              <img src="/replco.png"></img>
            </worm>
          </a>
          <a href="https://mikan.68.repl.co" target="_blank" id="2">
            <worm>
              <span>Mikan<br>
              mikan.68.repl.co</span>
              <img src="/mikan.png"></img>
            </worm>
          </a>
          <a href="https://ceilingpizza.repl.co" target="_blank" id="3">
            <worm>
              <span>Ceiling Pizza<br>
                ceilingpizza.repl.co</span>
              <img src="/ceilingpizza.png"></img>
            </worm>
          </a>
          <button class="l" onClick="move(-1)"><</button>
          <button class="r" onClick="move(1)">></button>
        </div>
      </section>
      <section>
        <h1>pi ni .</h1>
        <br>
        <div style="font-family:'monospace'">
        <?php
          foreach($_SERVER as $key => $value){
          echo '<h2>'.$key.': '.$value."</h2>";
          }
        ?>
        </div>
      </section>
      <!-- <section>
        <canvas id="juego"></canvas>
      </section> -->
      <p id="thenyoud"></p>
    </div>
    <div id="popUp" style="display:none;">
      <h1 id="title">Is your refrigerator running?</h1>
      <p id="description"></p>
      <button id="yes" onclick="refrigerator('yes')">Yes</button><br><br>
      <button id="no" onclick="refrigerator('no')">No</button>
      <button id="okay" onclick="toggle('popUp')" style="display:none;">Okay</button>
      <img src="/frij.jpg" id="fridge" style="display:none;">
    </div>
    <div id="copy" style="display:none">
      <p>Discord username <b>worm68</b> copied</p>
      <button id="okay" onclick="toggle('copy')">k thx</button>
    </div>
    <script>setInterval(function(){tpTime()},100)</script>
    <script src="script.js"></script>
  </body>
</html>