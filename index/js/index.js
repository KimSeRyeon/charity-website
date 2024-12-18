// // 초기 상태에서 .panel과 .txt_wrap 숨기기
// $(function () {
//    $(".panel li").hide(); // .panel 이미지 숨기기
//    $(".txt_wrap").hide(); // .txt_wrap 숨기기

//    // .panel 슬라이드 및 텍스트 교체
//    let i = 0;
//    let total = $(".panel li").length;

//    function fade() {
//       $(".panel li").stop().fadeOut();
//       $(".panel li").eq(i).stop().fadeIn();
//       $(".panel li").removeClass("on");
//       $(".panel li").eq(i).addClass("on");
//       $(".txt li").hide();
//       $(".txt li").eq(i).show();
//       $(".progress_bar li div").stop().css({ width: "0" });
//       $(".progress_bar li")
//          .eq(i)
//          .children("div")
//          .stop()
//          .animate({ width: "100%" }, 1000);
//    }

//    start();

//    // 타이머 설정 (자동으로 이미지 전환)
//    function start() {
//       timer = setInterval(function () {
//          if (i == total - 1) {
//             i = 0;
//          } else {
//             i++;
//          }
//          fade();
//       }, 2000);
//    }

//    // 버튼 클릭 시
//    $(".next").on("click", function () {
//       clearInterval(timer);
//       if (i == total - 1) {
//          i = 0;
//       } else {
//          i++;
//       }
//       fade();
//       start();
//    });

//    $(".prev").on("click", function () {
//       clearInterval(timer);
//       if (i == 0) {
//          i = total - 1;
//       } else {
//          i--;
//       }
//       fade();
//       start();
//    });

//    $(".play_bar .pause").on("click", function () {
//       clearInterval(timer);
//       $(".play_bar .play").show();
//       $(".play_bar .pause").hide();
//    });

//    $(".play_bar .play").on("click", function () {
//       start();
//       $(".play_bar .play").hide();
//       $(".play_bar .pause").show();
//    });

//    $(".progress_bar li").on("click", function () {
//       clearInterval(timer);
//       i = $(this).index();
//       fade();
//       start();
//    });
// });

document.querySelectorAll("header li").forEach((item, index) => {
   item.addEventListener("click", () => {
      const container = document.getElementById("container");
      container.style.transition = "margin-top 0.5s ease";
      container.style.marginTop = `-${index * 100}vh`;
   });
});

//gsap 스크롤 이벤트 page5
//gsap 스크롤 이벤트 page5
$(function () {
   let list = gsap.utils.toArray(".con5 .list li");

   // 전체 list를 가로로 이동시키는 애니메이션
   let listTimeline = gsap.timeline({
      scrollTrigger: {
         trigger: ".con5",
         pin: true,
         scrub: 2,
         start: "center center",
         end: "200%",
         markers: false,
         invalidateOnRefresh: true,
         onLeave: () => {
            // page5를 벗어나면 리스트가 초기 위치로 돌아가도록 설정
            gsap.to(list, {
               xPercent: 0,
               duration: 1,
               ease: "power1.inOut",
               onComplete: () => {
                  // ScrollTrigger 관련 타임라인 초기화
                  listTimeline.scrollTrigger.kill(); // ScrollTrigger 비활성화
                  listTimeline.clear(); // 타임라인 초기화
               },
            });
         },
      },
   });

   // 리스트 이동 타임라인 설정
   listTimeline.to(list, {
      xPercent: -100 * (list.length - 2), // 전체 슬라이드를 2칸 제외하고 이동
   });

   // listA 항목에 대해 y, rotation 애니메이션 적용
   gsap.to(".con5 .list li.a", {
      y: 50,
      rotation: 20,
      scrollTrigger: {
         trigger: ".con5",
         scrub: 2,
         end: "200%",
         invalidateOnRefresh: true,
      },
   });

   // listB 항목에 대해 y, rotation 애니메이션 적용
   gsap.to(".con5 .list li.b", {
      y: -50,
      rotation: -20,
      scrollTrigger: {
         trigger: ".con5",
         scrub: 2,
         end: "200%",
         invalidateOnRefresh: true,
      },
   });

   // listC 항목에 대해 y, rotation 애니메이션 적용
   gsap.to(".con5 .list li.c", {
      y: 30,
      rotation: 20,
      scrollTrigger: {
         trigger: ".con5",
         scrub: 2,
         end: "200%",
         invalidateOnRefresh: true,
      },
   });

   // Photo Album Title 애니메이션 (스크롤 시 등장)
   gsap.from(".con5 .textBox h2", {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
         trigger: ".con5 .textBox h2",
         start: "top center",
         end: "bottom 10%",
         scrub: 3,
         markers: false,
         invalidateOnRefresh: true,
      },
   });

   // Photo Album Description 애니메이션 (스크롤 시 등장)
   gsap.from(".con5 .textBox p", {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
         trigger: ".con5 .textBox p",
         start: "top center",
         end: "bottom 10%",
         scrub: 3,
         markers: false,
         invalidateOnRefresh: true,
      },
   });
});
