$(function () {
  // Typeit JS Call
  $('.typing').typeIt({
    strings: ['Publisher', 'Designer'],
    breakLines: false,
    loop: true,
    loopDelay: 750,
    autoStart: true,
    cursor: true,
    speed: 110
  });

  //particles.min.js
  particlesJS('particles-js',

    {
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 3000
          }
        },
        "color": {
          "value": "#5ee7df"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#5ee7df"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.3,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 15,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false, // 라인 제거 옵션 수정 
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "top", // 파티클 방향 수정
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true, // 커서 롤오버반응 수정
            "mode": "repulse"
          },
          "onclick": {
            "enable": false, // 커서 클릭반응 수정
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 100,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 100,
            "size": 200,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      }
    }
  );

  // jarallax JS Call
  $('.jarallax').jarallax({
    speed: 0.2
  });

  // incrementalNumber Call;
  incrementalNumber();

  // jarallax JS Call
  $('.jarallax').jarallax({
    speed: 0.2
  });

  // 탭메뉴 설정
  var
    tabMenu = $('.tab-wrap>ul>li>a'),

    tabContent = $('.tab-wrap .tab-content'),
    progressBar1 = ('.progress-bar1'),
    progressBar2 = ('.progress-bar2'),
    progressBar3 = ('.progress-bar3'),
    progressBar4 = ('.progress-bar4'),
    filterBtn = $('.cbp-filter-item');

  // 2번탭 클릭 시 인크루멘탈 라이브러리 실행
  $('.tab2').click('start', function () {
    incrementalNumber();
  });


  // 자기소개 탭 버튼 활성화(flex)
  $('.tab1').addClass('tab-on').next().css('display', 'flex');

  tabMenu.click(function () {
    tabMenu.removeClass('tab-on');
    tabContent.css('display', 'none');
    $(this).addClass('tab-on').next().css('display', 'flex');
  });

  // 포트폴리오 필터 버튼 
  $('#filters-container>div:first-child').addClass('portfolio-filter-on').next().css('display', 'block');

  filterBtn.click(function () {
    filterBtn.removeClass('portfolio-filter-on');
    filterBtn.css('background-color', 'transparent');
    $(this).addClass('portfolio-filter-on')
  });

  //cubeportfolio
  $('#grid-container').cubeportfolio({
    filters: '#filters-container',
    gapHorizontal: 0,
    gapVertical: 0,
    animationType: 'slideLeft',
    mediaQueries: [{
        width: 1170,
        cols: 4
      },
      {
        width: 960,
        cols: 3
      },
      {
        width: 800,
        cols: 3
      },
      {
        width: 550,
        cols: 2
      },
      {
        width: 320,
        cols: 1
      }
    ]
  });

  // 포트폴리오 툴팁 활성화
  $('[data-toggle="tooltip"]').tooltip()

  // 연락처 복사&팝업
  var phoneNum = $('#contact .phone'),
    eMail = $('#contact .email');

  phoneNum.click('start', function () {
    $('#myphonenum').select();
    document.execCommand('copy')
    alert('연락처가 복사되었습니다!');
  });
  eMail.click('start', function () {
    $('#myemailadd').select();
    document.execCommand('copy')
    alert('메일 주소가 복사되었습니다!');
  });

});