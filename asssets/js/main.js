let btn = document.querySelector(".btn");
let imgBlock = document.querySelector(".img");
btn.onclick = function () {
  // THÊM HIỆU ỨNG CHO NÚT ĐẦU TIÊN BIẾN MẤT
  this.style.animation = "lose 1s linear forwards";

  // XOÁ NÚT VÀ BÓNG
  setTimeout(() => {
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

                    <div class="gift-block">
                      <img src="./asssets/img/gift-1.png" alt="">
                      <img src="./asssets/img/gift-9.png" alt="">
                      <img src="./asssets/img/gift-6.png" alt="">
                      <img src="./asssets/img/gift-2.png" alt="">
                      <img src="./asssets/img/gift-4.png" alt="">
                      <img src="./asssets/img/gift-8.png" alt="">
                      <img src="./asssets/img/gift-7.png" alt="">
                      <img src="./asssets/img/gift-5.png" alt="">
                      
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
                      <img src="./asssets/img/imgWire-3.png" alt="">
                      <img src="./asssets/img/imgWire-2.png" alt="">
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

  let avatarBlock = document.querySelectorAll(".avatar-block img");

  imgBtn.onclick = function () {
    // HIỆU ỨNG PHÀN CHỮ
    Object.assign(content1.style, {
      transform: "translateY(-50vh) translateX(-125px)",
      transition: "1.5s",
      animation: "smallLetter 1.5s linear 1.5s forwards ",
    });

    Object.assign(content2.style, {
      transform: "translateY(-80vh) translateX(25vw)",
      transition: "1.5s",
      animation: "smallLetter 1.5s linear 1.5s forwards ",
    });

    // THÊM CÁC HIỆU ỨNG CHO CHỮ
    spanBlock.forEach((spanItem) => {
      Object.assign(spanItem.style, {
        color: "#fff",
        animation: "varyColor 5s linear 4.5s infinite",
      });
      setTimeout(() => {
        spanItem.style.textShadow =
          "0 0 10px #00DFA2, 0 0 12px #00DFA2, 0 0 15px #00DFA2";
      }, 5000);
    });

    // CHO HAI ẢNH TRÊN ĐẦU RA KHỎI TRANG WEB
    Object.assign(avatarBlock[0].style, {
      animation: "removeImgTop 2s linear forwards",
    });

    Object.assign(avatarBlock[1].style, {
      animation: "removeImgTop 2s linear forwards",
    });

    avatarBlock[2].style.animation = "removeFromRight 2s linear forwards";
    avatarBlock[3].style.animation = "removeFromLeft 2s linear forwards";

    // THÊM HIỆU ỨNG MỜ DẦN CHO NÚT TRONG ẢNH
    this.style.animation = " remove 1.5s linear forwards";

    // THÊM HIỆU ỨNG MỜ DẦN CHO CHỮ VÀ 2 BÊN CHONG CHÓNG
    let decorationBlock = document.querySelector(".decoration-block");
    decorationBlock.style.animation = "remove 1.5s linear forwards";

    // LÀM MỜ PHẦN QUÀ
    let giftblock = document.querySelectorAll('.gift-block img')
    giftblock.forEach(giftItem => {
      giftItem.style.animation = 'opacity 1s linear forwards'
    })
    setTimeout(function () {
      this.remove();
      decorationBlock.remove();
      document.querySelector('.avatar-block').remove()
      giftblock.remove()
    }, 3000);

    let emotionBlock = document.createElement("div");
    emotionBlock.classList.add("block-emotion");
    emotionBlock.innerHTML = `
                    <div class="emotion-email">
                              <div class="emotion-emai__content">
                                <div class="emotion-emai__content-heading">
                                  <i class="fa-solid fa-heart heart"></i>
                                  <h2>Mừng sinh nhật Hoài 18 tuồi</h2>
                                  <i class="fa-solid fa-heart heart"></i>
                                </div>
                                <p>
                                Cảm ơn Hoài!! Người đã mang đến cho mình niềm vui trong cuộc
                                sống và vô vàn hứng khởi trong công việc và học tập. Nhân ngày
                                sinh nhật Hoài, mình chúc bé luôn xinh tươi, yêu đời, thành công
                                trong cuộc sống. Bước sang tuổi mới, độ tuổi này sẽ mang đến
                                nhiều áp lực về cuộc sống hơn, mong bé có vững vàng trong sự
                                nghiệp và học tập, mình sẽ sát cánh và giúp Hoài có những khoảng thời gian
                                bình yên trong cuộc sống. Chúc Hoài sinh nhật vui vẻ!!
                                </p>
                              </div>
                    </div>
                    <div class="balloons-block">
                      <img src="./asssets/img/ballonImg-1.png" alt="">
                      <img src="./asssets/img/ballonImg-2.png" alt="">
                      <img src="./asssets/img/ballonImg-4.png" alt="">
                      <img src="./asssets/img/ballonImg-3.png" alt="">
                      <img src="./asssets/img/ballonImg-5.png" alt="">
                      <img src="./asssets/img/ballonImg-6.png" alt="">
                    </div>


    `;

    imgBlock.appendChild(emotionBlock);
  };
};
