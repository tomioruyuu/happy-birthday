let btn = document.querySelector(".btn");
let imgBlock = document.querySelector(".img");
btn.onclick = function () {
  // THÊM HIỆU ỨNG CHO NÚT ĐẦU TIÊN BIẾN MẤT
  this.style.animation = "lose 1s linear forwards";

  // XOÁ NÚT VÀ BÓNG
  setTimeout(() => {
    // this.remove()
    document.querySelector(".balls").remove();
  }, 2800);

  // TẠO PHẦN ẢNH
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

                    <div class="avatar-block">
                      <img src="./asssets/img/imgWire-1.png" alt="">
                      <img src="./asssets/img/imgWire-4.png" alt="">
                    </div>

                    <div class="img-btn">
                      <button>Nhấn tiếp vô đây nèeeee</button>
                    </div>
                  </div>
      `;
  imgBlock.appendChild(img);

  // NHẤN VÀO CHỮ HIỆN TRÊN ẢNH
  let imgBtn = document.querySelector(".img-btn");
  let content1 = document.querySelector(".content-blocktext1");
  let content2 = document.querySelector(".content-blocktext2");
  let spanBlock = document.querySelectorAll(".content span");
  console.log(spanBlock);
  imgBtn.onclick = function () {
    // HIỆU ỨNG PHÀN CHỮ
    Object.assign(content1.style, {
      transform: "translateY(-50vh) translateX(-50px)",
      scale: "0.5",
      transition: "2s",
    });

    Object.assign(content2.style, {
      transform: "translateY(-80vh) translateX(25vw)",
      scale: "0.5",
      transition: "2s",
    });

    spanBlock.forEach((spanItem) => {
      Object.assign(spanItem.style, {
        animation: "none",
        color: "#fff",
        letterSpacing: "0.2em",
        textShadow: " 0 0 10px #06FF00, 0 0 10px #06FF00, 0 0 10px #06FF00",
        animation: "changeColor 5s linear infinite",
        animationDelay: "2.5s"
      });
    });

    // THÊM HIỆU ỨNG MỜ DẦN CHO NÚT TRONG ẢNH
    this.style.animation = " remove 1.5s linear forwards";

    // THÊM HIỆU ỨNG MỜ DẦN CHO CHỮ VÀ 2 BÊN CHONG CHÓNG
    let decorationBlock = document.querySelector(".decoration-block");
    decorationBlock.style.animation = "remove 1.5s linear forwards";

    setTimeout(function () {
      this.remove();
      content.remove();
      decorationBlock.remove();
    }, 3000);

    let emotionBlock = document.createElement("div");
    emotionBlock.classList.add("block-emotion");
    emotionBlock.innerHTML = `
                    <div class="emotion-email">
                              <div class="emotion-emai__content">
                                <div class="emotion-emai__content-heading">
                                  <i class="fa-solid fa-heart heart"></i>
                                  <h2>Mừng sinh nhật bé tròn 18 tuồi</h2>
                                  <i class="fa-solid fa-heart heart"></i>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                                  obcaecati? Sed laudantium officia nobis sapiente perferendis
                                  perspiciatis rem tenetur quis ad sequi incidunt porro, error
                                  cumque quos, nisi laboriosam ratione. Asperiores, perspiciatis ex
                                  eius incidunt tempora, voluptatum odio consequuntur rerum quo
                                  ducimus quis dolorum obcaecati non facilis saepe. Est a, maiores
                                  enim recusandae tenetur adipisci asperiores quam provident. Est,
                                  distinctio. Quis ut provident vera voluptate ratione repellat,
                                  fugiat labore sunt reprehenderit amet quisquam voluptatem illo nam
                                  eaque pariatur et? Temporibus fugiat veniam excepturi vero id
                                  omnis quae quibusdam repudiandae accusantium eligendi!
                                </p>
                              </div>
                    </div>
    `;

    imgBlock.appendChild(emotionBlock);
  };
};
