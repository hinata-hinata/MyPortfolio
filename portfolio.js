"use strict";


const slidesData = [
  {
    image: "img/20250822_171252.jpg",
    text: "青春18きっぷや各県のお得な切符を利用した電車旅にはまっています。車窓を眺めながらぼんやりする時間が最高です。特に人口の少ない地域のローカル線はずっと乗っていたいと思うほど心地よいです。電車旅の欠点を挙げるとするならば、体が痛くなることや通勤通学時間帯の混雑でしょうか。グリーン席の使用である程度は解消できそうですが、私は年中金欠のため利用したことがありません。将来は何も気にしないでグリーン車に乗れるような人間になりたいです。"
  },
  {
    image: "img/20250820_132220.jpg",
    text: "近畿以西に行くときは大体通る関ケ原。以前から気にはなっていましたが乗り換え時間の問題でなかなか観光する予定が取れませんでした。ですが、目的地が休館日で急遽時間ができたため観光することができました。自分がいかに日本史について無知であったかを痛感しました。蛇足ですが、この文章を書いている時点でこの時学んだことはほとんど忘れてしまいました。お土産で家紋の入った美濃焼きのおちょこを購入したのですが、普段水を飲むときに使用するほどお気に入りです。"
  },
  {
    image: "img/20250302_143020.jpg",
    text: "左は和歌山県の無人島、友ヶ島です。友ヶ島は旧日本軍の要塞施設として使用された島であり、今でもその名残を見ることが可能です。私はアニメの聖地巡礼として訪れましたが、アニメを視聴していなくても楽しめること間違いなしです。私が画像の場所を訪れたときは私以外に観光客がいなかったため、時間が止まったような静謐な雰囲気に包まれていました。1つ注意点ですが、島内をすべて回るとなるとかなり広い範囲を移動する必要がでてくるため、夏の観光はお勧めしません。"
  },
  {
    image: "img/20251011_150737.jpg",
    text: "左は千葉県の佐原という場所です。北総の小江戸と呼ばれるとおり当時の歴史を感じられる街並みが色濃く残っています。タイムスリップをしてきたのではないかと思うほど衝撃を受けました。さらに、佐原は伊能忠敬が17歳から50歳までに住んだ場所であり彼の暮らしていた旧宅や記念館を見学することができます。月並みですが、彼の生き方から何歳からでも本人のやる気次第で成し遂げられるのだなと感じました。私が佐原を訪れたときはあいにくの雨だったため、次は晴れの日に行ってみたいです。"
  },
  {
    image: "img/ほっとゆだ.jpg",
    text: "「いわてホリデーパス」というJRの切符を使用して訪れたときの写真です。この駅は北上駅と横手駅のほぼ真ん中、日本有数の豪雪地帯に位置します。私が訪れたときは、建物の前が雪でふさがれてしまい中に入れないほどの積雪量でした。建物が雪で埋まる光景を目にしたのはこれが初めてです。非常に珍しいことに、この駅には温泉が併設されており観光客が気軽に入浴できるようになっています。温泉は温度別に３つに分かれていて、自分の好みの温度の湯に入ることができます。"
  }
];



const sliderInner = document.getElementById("sliderInner");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

/* ===== スライド生成 ===== */
slidesData.forEach(data => {
  const slide = document.createElement("div");
  slide.className = "slide";

  slide.innerHTML = `
    <div class="image-area">
      <img src="${data.image}" alt="">
    </div>
    <div class="text-area">
      <p>${data.text}</p>
    </div>
  `;

  sliderInner.appendChild(slide);
});
const slideCount = slidesData.length;

function updateSlide() {
  sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slideCount;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  updateSlide();
});

// let index = 0;

// const imageEl = document.getElementById("slide-image");
// const textEl = document.getElementById("slide-text");

// function renderSlide() {
//   imageEl.src = slides[index].image;
//   textEl.textContent = slides[index].text;
// }

// document.querySelector(".prev").addEventListener("click", () => {
//   index = (index - 1 + slides.length) % slides.length;
//   renderSlide();
// });

// document.querySelector(".next").addEventListener("click", () => {
//   index = (index + 1) % slides.length;
//   renderSlide();
// });

// renderSlide();


const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");
const modalImg = document.getElementById("modal-img");

cards.forEach(card => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalText.textContent = card.dataset.text;
    // modal.style.display = "block";
    modalImg.src = card.dataset.img;
    modal.classList.add("active");

  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
