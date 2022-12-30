let childItems = document.querySelectorAll(".ul-children");
let main = document.querySelector(".main");
let data = [];
let hamburger = document.querySelector('.menu');
let textHeader = document.querySelector('.text-header')


hamburger.addEventListener(('click'), (e) => {
    textHeader.classList.toggle('active_bur')
    closeLi()
});


function closeLi(){
  childItems.forEach((e) => {
    e.addEventListener('click', () => {
        textHeader.classList.remove('active_bur')
        hamburger.classList.remove('active_bur')
        hamburger.classList.remove('opened')
    } )
  })
}

fetch("../data.json")
  .then((a) => a.json())
  .then((a) => { data = a;  planetsInfoItems(a.planets[0])});


function planetsInfoItems(el) {
  console.log(el);
  let  {name,overview: {content,source},rotation,revolution,radius,temperature,images: {planet,internal,geology}} = el;
          main.innerHTML = `
      <div class="box-header container d-flex justify-content-between align-items-center">
            <div class="img">
                <img src=${planet} alt="${name}">
              </div>

              <div class="img-fact">
                  <div class="box-text2">
                  <h1 class="title-planets">${name}</h1>
                  <p class="text-fact">${content}</p>
                  <strong>
                      Source : <a href="${source}">Wikipedia</a> 
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/>
                      </svg>
                  </strong>
                  </div>
                  <div class="btns d-flex">
                      <div class="btns-btn btnActive" onclick="src('${planet}')"><b>01</b> OVERVIEW</div>
                      <div class="btns-btn" onclick="src('${internal}')"><b>02</b> <span>Internal</span> Structure</div>
                      <div class="btns-btn" onclick="src('${geology}')"><b>03</b> Surface <span>Geology</span></div>
                  </div>

              </div>

      </div>

      <footer class="footer container d-flex justify-content-between align-items-center">
                <div class="box">
                  <div class="box-title">ROTATION TIME</div>
                      <div class="anim-box d-flex align-items-center">
                          <div class="box-text">${rotation}</div>
                      </div>
                </div>

                  <div class="box">
                  <div class="box-title">REVOLUTION TIME</div>
                  <div class="anim-box d-flex align-items-center">
                        <div class="box-text">${revolution}</div>
                  </div>
                  </div>

                  <div class="box">
                  <div class="box-title">radius</div>
                  <div class="anim-box d-flex align-items-center">
                    <div class="box-text">${radius}</div>
                  </div>
                  </div>

                  <div class="box">
                  <div class="box-title">AVERAGE TEMP.</div>
                  <div class="anim-box d-flex align-items-center">
                    <div class="box-text">${temperature}</div>
                  </div>
                  </div>
      </footer>
        `;
}



childItems.forEach((e,index) => {
  e.addEventListener("click", () => {
    childItems.forEach((b) => {
      b.classList.remove("active")
    })
    e.classList.add("active");
    planetsInfoItems(data.planets[index])
  });
});


function src(newsrc) {
  let image = document.querySelector('.img img').src = newsrc;
}