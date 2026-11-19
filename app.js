/*
 * 초대장 화면 틀과 동작. index.html 은 이 파일·style.css·data.js·art.js 를
 * 열 때마다 새로 받아 오는 껍데기라서, 여기를 고치면 push 후 바로 반영됩니다.
 */
document.getElementById('app').innerHTML = `

  <header class="cover">
    <div class="sky" id="cover-sky"></div>
    <canvas id="snow" aria-hidden="true"></canvas>
    <div class="garland" id="cover-garland"></div>
    <div class="eyebrow en" id="subtitle"></div>
    <h1 class="serif" id="title"></h1>
    <p class="tagline serif">새해, 음악으로 따뜻하게 만나요</p>
    <div class="when serif" id="when"></div>
    <div><span class="dday" id="dday" hidden></span></div>
    <div class="scene" id="cover-art"></div>
  </header>

  <section class="greeting reveal" id="sec-greeting">
    <!-- 새해 매화 가지 -->
    <svg class="sprig" viewBox="0 0 120 46" aria-hidden="true">
      <path d="M6 38 Q40 30 62 22 Q86 14 114 12" fill="none" stroke="#6b3b2a" stroke-width="2" stroke-linecap="round"/>
      <path d="M50 26 Q56 36 54 42 M84 16 Q92 8 98 6" fill="none" stroke="#6b3b2a" stroke-width="1.6" stroke-linecap="round"/>
      <g fill="#e98a9a"><circle cx="30" cy="30" r="4"/><circle cx="25" cy="27" r="3.4"/><circle cx="34" cy="26" r="3.4"/><circle cx="27" cy="34" r="3.4"/><circle cx="34" cy="34" r="3.4"/></g>
      <circle cx="30" cy="30" r="1.6" fill="#f6d27a"/>
      <g fill="#f0a6b2"><circle cx="70" cy="18" r="3"/><circle cx="66" cy="16" r="2.6"/><circle cx="73" cy="14" r="2.6"/><circle cx="67" cy="21" r="2.6"/><circle cx="73" cy="21" r="2.6"/></g>
      <circle cx="70" cy="18" r="1.2" fill="#f6d27a"/>
      <circle cx="54" cy="42" r="3" fill="#e98a9a"/><circle cx="99" cy="6" r="2.6" fill="#f0a6b2"/><circle cx="108" cy="12" r="2" fill="#e98a9a"/>
    </svg>
    <div class="sec-label en">Invitation</div>
    <h2 class="sec-title serif">초대합니다</h2>
    <div id="greeting"></div>

    <div class="welcome">
      <div class="w">
        <svg viewBox="0 0 34 34" aria-hidden="true"><path d="M5 10 h24 v4 a3 3 0 0 0 0 6 v4 h-24 v-4 a3 3 0 0 0 0 -6Z" fill="#f3d9a4" stroke="#c08a3e" stroke-width="1.4"/><path d="M21 10 v14" stroke="#c08a3e" stroke-dasharray="2 2"/></svg>
        <b id="w-admission">입장 무료</b>편하게 오세요
      </div>
      <div class="w">
        <svg viewBox="0 0 34 34" aria-hidden="true"><path d="M13 24 V8 l14 -3 v16" fill="none" stroke="#7b2d3b" stroke-width="2"/><ellipse cx="10" cy="24" rx="4" ry="3" fill="#7b2d3b"/><ellipse cx="24" cy="21" rx="4" ry="3" fill="#7b2d3b"/></svg>
        <b>영화음악·클래식</b>귀에 익은 곡들
      </div>
      <div class="w">
        <svg viewBox="0 0 34 34" aria-hidden="true"><path d="M17 11 C14 5 5 6 6 13 C7 19 17 25 17 28 C17 25 27 19 28 13 C29 6 20 5 17 11Z" fill="#e2495b"/></svg>
        <b>누구나 환영</b>가족·친구와 함께
      </div>
    </div>
  </section>

  <section class="soft reveal">
    <div class="sec-label en">Information</div>
    <h2 class="sec-title serif">공연 안내</h2>
    <div class="info" id="info"></div>
  </section>

  <section class="reveal" id="sec-conductor" hidden>
    <div class="sec-label en">Conductor</div>
    <h2 class="sec-title serif">지휘자 소개</h2>
    <div class="conductor">
      <div class="photo protect" id="conductor-photo" hidden></div>
      <svg class="baton" id="conductor-baton" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="30" fill="#fff" stroke="#ecdfcb"/>
        <path d="M18 46 L44 20" stroke="#4d1c2a" stroke-width="2.4" stroke-linecap="round"/>
        <path d="M16 48 L22 42" stroke="#c08a3e" stroke-width="5" stroke-linecap="round"/>
        <path d="M46 14 q3 4 0 8 M50 18 q3 4 0 8" fill="none" stroke="#c08a3e" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
      <div class="role">지휘</div>
      <div class="name serif" id="conductor-name"></div>
      <div class="now" id="conductor-now" hidden></div>
      <div class="profile" id="conductor-profile" hidden></div>
    </div>
    <div class="performers" id="performers" hidden></div>
  </section>

  <section class="soft reveal" id="sec-program">
    <div class="sec-label en">Program</div>
    <h2 class="sec-title serif">이런 곡을 들려드려요</h2>
    <p class="program-hint">곡을 누르면 쉬운 설명이 펼쳐져요</p>
    <div id="program"></div>
    <p class="program-note" id="program-note"></p>
  </section>

  <section class="reveal" id="sec-map" hidden>
    <div class="sec-label en">Location</div>
    <h2 class="sec-title serif">오시는 길</h2>
    <div class="addr" id="addr"></div>
    <div class="btns">
      <a class="btn" id="naver" target="_blank" rel="noopener">네이버 지도</a>
      <a class="btn" id="kakao" target="_blank" rel="noopener">카카오맵</a>
      <button class="btn full" type="button" id="copy-addr">주소 복사</button>
    </div>
  </section>

  <footer>
    <p class="closing serif">새해 첫 음악회에서 뵙겠습니다<small id="closing-date"></small></p>
    <p class="contact" id="contact" hidden></p>
    <div class="btns">
      <button class="btn primary full" type="button" id="share">초대장 공유하기</button>
      <button class="btn full" type="button" id="calendar" hidden>내 캘린더에 추가</button>
    </div>
    <p class="copy" id="copyright"></p>
    <p class="rights">이 초대장의 사진·그림·글은 보람챔버오케스트라에 저작권이 있으며<br>허락 없이 복제·배포·다른 곳에 사용할 수 없습니다.</p>
  </footer>
`;

(function () {
  var D = window.INVITE, ART = window.ART || {};
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var WEEK = ['일', '월', '화', '수', '목', '금', '토'];
  var p = D.date.split('-').map(Number);
  var day = new Date(p[0], p[1] - 1, p[2]);
  var dateText = p[0] + '년 ' + p[1] + '월 ' + p[2] + '일 (' + WEEK[day.getDay()] + ')';
  var dateShort = p[0] + '. ' + p[1] + '. ' + p[2] + '. ' + WEEK[day.getDay()] + '요일';
  var timeText = function (t) {
    if (!t) return '';
    var hm = t.split(':').map(Number), h = hm[0], m = hm[1] || 0;
    return (h < 12 ? '오전 ' : '오후 ') + (h % 12 === 0 ? 12 : h % 12) + '시' + (m ? ' ' + m + '분' : '');
  };

  // 표지
  $('subtitle').textContent = D.subtitle;
  var t = D.title.split(' ');
  $('title').innerHTML = t.length > 1
    ? '<span class="small">' + esc(t.slice(0, -1).join(' ')) + '</span>' + esc(t[t.length - 1])
    : esc(D.title);
  $('when').innerHTML = esc(dateShort) + (D.time ? '<span class="time">' + esc(timeText(D.time)) + '</span>' : '');
  $('cover-art').innerHTML = ART.cover || '';
  $('cover-sky').innerHTML = ART.sky || '';
  $('cover-garland').innerHTML = ART.garland || '';

  // D-day
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var diff = Math.round((day - today) / 86400000);
  if (diff >= 0) {
    $('dday').textContent = diff === 0 ? '오늘 공연합니다' : 'D-' + diff;
    $('dday').hidden = false;
  }

  // 인사말
  if (D.greeting && D.greeting.length) {
    $('greeting').innerHTML = '<p>' + D.greeting.map(esc).join('<br>') + '</p>' +
      '<p class="sign">' + esc(D.orchestra) + ' 드림</p>';
  }
  if (D.admission) $('w-admission').textContent = '입장 ' + D.admission;

  // 공연 안내
  var rows = [];
  var when = esc(dateText) + (D.time ? ' ' + esc(timeText(D.time)) : '');
  rows.push(['일시', when + (D.doorsOpen ? '<span class="sub">' + esc(timeText(D.doorsOpen)) + ' 입장 시작</span>' : '')]);
  if (D.venue && D.venue.name) {
    rows.push(['장소', esc(D.venue.name) + (D.venue.address ? '<span class="sub">' + esc(D.venue.address) + '</span>' : '')]);
  } else {
    rows.push(['장소', '추후 안내 예정', 'pending']);
  }
  if (D.admission) rows.push(['입장', esc(D.admission)]);
  $('info').innerHTML = rows.map(function (r) {
    return '<div class="row"><div class="k">' + r[0] + '</div><div class="v' + (r[2] ? ' ' + r[2] : '') + '">' + r[1] + '</div></div>';
  }).join('');

  // 프로그램 — 묶음마다 1번부터
  var groups = (D.program || []).filter(function (g) { return g.pieces && g.pieces.length; });
  if (groups.length) {
    $('program').innerHTML = groups.map(function (g) {
      var head = g.group
        ? '<div class="group">' + (g.en ? '<div class="g-en en">' + esc(g.en) + '</div>' : '') +
          '<h3 class="serif">' + esc(g.group) + '</h3>' + (g.desc ? '<p>' + esc(g.desc) + '</p>' : '') + '</div>'
        : '';
      // 한 줄 목록: 작은 그림 + 제목 — 누르면 설명이 펼쳐짐 (설명 없는 곡은 펼치기 없음)
      var items = g.pieces.map(function (s) {
        var meta = [s.note ? esc(s.note) : '', s.composer ? '<span class="nw">' + esc(s.composer) + '</span>' : ''].filter(Boolean).join(' · ');
        var art = ART[s.art] || '';
        var x = (ART.thumbX && ART.thumbX[s.art]) || 85;
        art = art.replace('viewBox="0 0 320 150"', 'viewBox="' + x + ' 0 150 150"');
        var row = '<span class="thumb">' + art + '</span>' +
          '<span class="txt"><span class="t serif">' + esc(s.title) + '</span>' +
          (meta ? '<span class="m">' + meta + '</span>' : '') + '</span>';
        if (!s.desc) return '<div class="piece"><div class="row">' + row + '<span></span></div></div>';
        return '<details class="piece"><summary class="row">' + row +
          '<svg class="chev" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</summary><p class="d">' + esc(s.desc) + '</p></details>';
      }).join('');
      return head + '<div class="pieces">' + items + '</div>';
    }).join('');
    $('program-note').textContent = D.programNote || '';
  } else {
    $('sec-program').hidden = true;
  }

  // 지휘자 — 사진·현재 직함·약력은 비어 있으면 숨김
  var C = D.conductor;
  if (C && C.name) {
    $('conductor-name').textContent = C.name;
    if (C.photo) {
      $('conductor-photo').innerHTML = '<img src="' + esc(C.photo + (C.photo.indexOf('?') < 0 ? (window.BUST || '') : '')) + '" alt="지휘자 ' + esc(C.name) + '">';
      $('conductor-photo').hidden = false;
      $('conductor-baton').style.display = 'none';
    }
    var now = (C.now || []).filter(Boolean);
    if (now.length) { $('conductor-now').innerHTML = now.map(esc).join('<br>'); $('conductor-now').hidden = false; }
    var prof = (C.profile || []).filter(function (g) { return g && (typeof g === 'string' || (g.items && g.items.length)); });
    if (prof.length) {
      $('conductor-profile').innerHTML = prof.map(function (g) {
        if (typeof g === 'string') g = { items: [g] };
        return '<div class="pg">' + (g.head ? '<h4>' + esc(g.head) + '</h4>' : '') +
          '<ul>' + g.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
      }).join('');
      $('conductor-profile').hidden = false;
    }
    $('sec-conductor').hidden = false;
  }

  // 함께하는 연주자
  if (D.performers && D.performers.length) {
    $('performers').innerHTML = D.performers.map(function (x) {
      return '<div class="p"><span class="role">' + esc(x.role) + '</span><span class="name">' + esc(x.name) + '</span></div>';
    }).join('');
    $('performers').hidden = false;
    $('sec-conductor').hidden = false;
  }

  // 오시는 길
  if (D.venue && D.venue.address) {
    var q = encodeURIComponent(D.venue.address);
    $('addr').innerHTML = '<div class="name">' + esc(D.venue.name || '') + '</div><div class="line">' + esc(D.venue.address) + '</div>' +
      (D.venue.parking ? '<div class="parking">' + esc(D.venue.parking) + '</div>' : '');
    $('naver').href = 'https://map.naver.com/p/search/' + q;
    $('kakao').href = 'https://map.kakao.com/link/search/' + q;
    $('copy-addr').onclick = function () { copy(D.venue.address, '주소를 복사했습니다'); };
    $('sec-map').hidden = false;
  }

  // 맺음 · 문의 · 저작
  $('closing-date').textContent = dateText + (D.time ? ' ' + timeText(D.time) : '');
  if (D.contact) { $('contact').textContent = D.contact; $('contact').hidden = false; }
  $('copyright').textContent = '© ' + p[0] + ' ' + D.orchestra + '. All rights reserved.';

  // 사진·그림은 길게 누르기·우클릭·끌어다 놓기로 저장되지 않게
  document.addEventListener('contextmenu', function (e) { if (e.target.closest && e.target.closest('.protect, img, svg')) e.preventDefault(); });
  document.addEventListener('dragstart', function (e) { if (e.target.closest && e.target.closest('.protect, img, svg')) e.preventDefault(); });

  // 공유
  function toast(msg) {
    var el = $('toast'); el.textContent = msg; el.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(function () { el.classList.remove('show'); }, 1800);
  }
  function copy(text, msg) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { toast(msg); }, function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); toast(msg); } catch (e) { toast('복사하지 못했습니다'); }
      document.body.removeChild(ta);
    }
  }
  $('share').onclick = function () {
    var data = { title: D.title, text: dateText + ' · ' + D.orchestra + ' ' + D.title + '에 초대합니다.', url: location.href };
    if (navigator.share) { navigator.share(data).catch(function () {}); }
    else { copy(location.href, '초대장 주소를 복사했습니다'); }
  };

  // 캘린더 (.ics) — 시간이 정해지면 나타납니다
  if (D.time) {
    $('calendar').hidden = false;
    $('calendar').onclick = function () {
      var hm = D.time.split(':').map(Number);
      var pad = function (n) { return (n < 10 ? '0' : '') + n; };
      var start = '' + p[0] + pad(p[1]) + pad(p[2]) + 'T' + pad(hm[0]) + pad(hm[1] || 0) + '00';
      var endH = hm[0] + 2;
      var end = '' + p[0] + pad(p[1]) + pad(p[2]) + 'T' + pad(endH) + pad(hm[1] || 0) + '00';
      var loc = D.venue ? [D.venue.name, D.venue.address].filter(Boolean).join(' ') : '';
      var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//boramchamber//invite//KO', 'BEGIN:VEVENT',
        'UID:' + D.date + '@boramchamber.github.io', 'DTSTAMP:' + start, 'DTSTART;TZID=Asia/Seoul:' + start,
        'DTEND;TZID=Asia/Seoul:' + end, 'SUMMARY:' + D.title, loc ? 'LOCATION:' + loc : '', 'END:VEVENT', 'END:VCALENDAR']
        .filter(Boolean).join('\r\n');
      var a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
      a.download = 'boramchamber-' + D.date + '.ics';
      a.click();
    };
  }

  // 스크롤하면 섹션이 부드럽게 나타남
  var secs = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    secs.forEach(function (s) { io.observe(s); });
  } else { secs.forEach(function (s) { s.classList.add('in'); }); }

  // 표지: 눈처럼 내리는 하얀 음표 (글꼴 대신 직접 그려 어느 휴대폰에서도 깨지지 않게)
  // 종류: 0 4분음표 ♩ · 1 8분음표 ♪ · 2 이어진 8분음표 ♫ · 3 이어진 16분음표 ♬ · 4 2분음표 · 5 눈송이 · 6 눈 결정
  var NOTE = {
    head: function (c, x, y, hollow) {
      c.save(); c.translate(x, y); c.rotate(-.38);
      c.beginPath(); c.ellipse(0, 0, 4.3, 3, 0, 0, Math.PI * 2);
      if (hollow) { c.lineWidth = 1.4; c.stroke(); } else { c.fill(); }
      c.restore();
    },
    stem: function (c, x, y1, y2) { c.fillRect(x - .7, y2, 1.4, y1 - y2); },
    beam: function (c, x1, y1, x2, y2) {
      c.beginPath(); c.moveTo(x1 - .7, y1); c.lineTo(x2 + .7, y2); c.lineTo(x2 + .7, y2 + 2.6); c.lineTo(x1 - .7, y1 + 2.6); c.closePath(); c.fill();
    },
    draw: function (c, kind) {
      if (kind === 5) { c.beginPath(); c.arc(0, 0, 2.5, 0, Math.PI * 2); c.fill(); return; }   // 동그란 눈송이
      if (kind === 6) {                                                                          // 육각 눈 결정
        c.lineWidth = 1.1; c.lineCap = 'round'; c.beginPath();
        for (var k = 0; k < 6; k++) {
          var a = k * Math.PI / 3, ca = Math.cos(a), sa = Math.sin(a);
          c.moveTo(0, 0); c.lineTo(ca * 6, sa * 6);
          var bx = ca * 3.6, by = sa * 3.6, b1 = a + .7, b2 = a - .7;
          c.moveTo(bx, by); c.lineTo(bx + Math.cos(b1) * 2, by + Math.sin(b1) * 2);
          c.moveTo(bx, by); c.lineTo(bx + Math.cos(b2) * 2, by + Math.sin(b2) * 2);
        }
        c.stroke(); return;
      }
      if (kind === 2 || kind === 3) {
        NOTE.head(c, 0, 0); NOTE.head(c, 10, -2);
        NOTE.stem(c, 3.8, -1, -15); NOTE.stem(c, 13.8, -3, -17);
        NOTE.beam(c, 3.8, -15, 13.8, -17);
        if (kind === 3) NOTE.beam(c, 3.8, -11, 13.8, -13);
        return;
      }
      NOTE.head(c, 0, 0, kind === 4);
      NOTE.stem(c, 3.8, -1, -15);
      if (kind === 1) {
        c.beginPath(); c.moveTo(3.1, -15); c.bezierCurveTo(4.5, -10.5, 10, -10, 8.4, -4);
        c.bezierCurveTo(8.6, -8, 5.6, -9.4, 3.1, -11); c.closePath(); c.fill();
      }
    }
  };
  var cv = $('snow'), ctx = cv.getContext && cv.getContext('2d');
  if (ctx && ctx.ellipse && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var notes = [], W, H, dpr = Math.min(window.devicePixelRatio || 1, 2);
    var size = function () { W = cv.offsetWidth; H = cv.offsetHeight; cv.width = W * dpr; cv.height = H * dpr; };
    size(); window.addEventListener('resize', size);
    var spawn = function (n, top) {
      n.x = Math.random() * W; n.y = top ? -20 : Math.random() * H * .72;
      // 눈 40% · 눈 결정 10% · 음표 5종 50%
      var r = Math.random();
      n.kind = r < .4 ? 5 : r < .5 ? 6 : Math.floor(Math.random() * 5);
      n.sc = n.kind === 5 ? Math.random() * .8 + .6 : Math.random() * .55 + .55;   // 크기
      n.v = n.kind >= 5 ? Math.random() * .3 + .2 : Math.random() * .35 + .25;      // 떨어지는 속도 (눈은 조금 더 천천히)
      n.w = Math.random() * Math.PI * 2;           // 좌우 흔들림
      n.rot = (Math.random() - .5) * .6;           // 기울기
      n.spin = (Math.random() - .5) * .006;
      n.a = Math.random() * .35 + .5;              // 투명도
      return n;
    };
    for (var i = 0; i < 44; i++) notes.push(spawn({}, false));
    (function tick() {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      var floor = H * .86;   // 눈밭 근처에서 사라짐
      notes.forEach(function (n) {
        n.y += n.v; n.w += .012; n.x += Math.sin(n.w) * .25; n.rot += n.spin;
        if (n.y > floor) spawn(n, true);
        var fade = Math.min(1, (floor - n.y) / 50, (n.y + 20) / 30);
        ctx.setTransform(dpr * n.sc, 0, 0, dpr * n.sc, dpr * n.x, dpr * n.y);
        ctx.rotate(n.rot);
        ctx.globalAlpha = Math.max(0, n.a * fade);
        ctx.fillStyle = ctx.strokeStyle = '#fffaf0';
        ctx.shadowColor = 'rgba(255,255,255,.7)'; ctx.shadowBlur = 6 * dpr * n.sc;
        NOTE.draw(ctx, n.kind);
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(tick);
    })();
  }
})();
