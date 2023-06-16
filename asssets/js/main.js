let btn = document.querySelector(".btn");
let imgBlock = document.querySelector(".img");
btn.onclick = function () {
  this.style.animation = "lose 1s linear forwards";
  let img = document.createElement("div");
  img.classList.add("main-content");
  img.innerHTML = ` <img
                    src="./asssets/img/background.png"
                    alt=""
                  />

                  <div class="decoration-block">
                    <div class="decoration-wire">
                      <img src="./asssets/icon/wire.svg" alt="">
                      <div class="pinwheel pinwheel-1">
                      <img src="./asssets/img/pinwheel-1.png" alt="" />
                    </div>
                    <div class="pinwheel pinwheel-2">
                      <img src="./asssets/img/pinwheel-2.png" alt="" />
                    </div>
                    </div>

                    <div class="decoration-wire">
                      <img src="./asssets/icon/wire.svg" alt="">
                      <div class="pinwheel pinwheel-1">
                      <img src="./asssets/img/pinwheel-1.png" alt="" />
                    </div>
                    <div class="pinwheel pinwheel-2">
                      <img src="./asssets/img/pinwheel-2.png" alt="" />
                    </div>
                    </div>
                  </div>

                  <div class="content">
                    <div class="content-blocktext1">
                        <span>H</span>
                        <span>A</span>
                        <span>P</span>
                        <span>P</span>
                        <span>Y</span>
                    </div>

                    <div class="content-blocktext2">
                      <span>B</span>
                      <span>I</span>
                      <span>R</span>
                      <span>T</span>
                      <span>H</span>
                      <span>D</span>
                      <span>A</span>
                      <span>Y</span>
                    </div>

                    <div class="img-btn">
                      <button>Nhấn tiếp vô đây nèeeee</button>
                    </div>
                  </div>
      `;
  imgBlock.appendChild(img);
};
