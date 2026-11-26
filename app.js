/*
 * 초대장 화면 틀과 동작. index.html 은 이 파일·style.css·data.js·art.js 를
 * 열 때마다 새로 받아 오는 껍데기라서, 여기를 고치면 push 후 바로 반영됩니다.
 */
// 금색 장식선 (제목 아래) — 가운데 마름모, 양옆 꽃잎, 선이 가운데서 양옆으로 그어지며 나타남
var ORN = '<svg class="orn" viewBox="0 0 160 18" aria-hidden="true">' +
  '<path class="ln" d="M70 9 H6 M90 9 H154" stroke="currentColor" stroke-width=".9"/>' +
  '<path d="M62 9 q5 -5.5 10 0 q-5 5.5 -10 0Z M88 9 q5 -5.5 10 0 q-5 5.5 -10 0Z" fill="none" stroke="currentColor" stroke-width=".9"/>' +
  '<path d="M80 2.5 l4.6 6.5 l-4.6 6.5 l-4.6 -6.5Z" fill="currentColor"/>' +
  '<circle cx="3" cy="9" r="1.5" fill="currentColor"/><circle cx="157" cy="9" r="1.5" fill="currentColor"/></svg>';

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
    <div class="card">
      <!-- 봉랍(와인색 밀랍 도장, 가운데 금색 음표) -->
      <svg class="seal" viewBox="0 0 60 60" aria-hidden="true">
        <defs><radialGradient id="seal-g" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#b0485a"/><stop offset=".55" stop-color="#7b2d3b"/><stop offset="1" stop-color="#4d1c2a"/></radialGradient></defs>
        <path d="M57.8 30.0 L58.7 32.5 L58.8 35.1 L57.7 37.4 L55.7 39.4 L53.6 41.0 L51.9 42.6 L50.9 44.6 L50.2 46.9 L49.3 49.3 L47.8 51.2 L45.7 52.4 L43.2 52.9 L40.8 53.2 L38.7 53.9 L36.8 55.2 L34.8 57.0 L32.5 58.6 L30.0 59.3 L27.5 58.7 L25.2 57.3 L23.1 55.6 L21.2 54.3 L19.0 53.6 L16.6 53.2 L14.2 52.6 L12.1 51.3 L10.7 49.3 L9.9 46.8 L9.3 44.5 L8.4 42.5 L6.8 40.8 L4.7 39.2 L2.7 37.3 L1.5 35.0 L1.4 32.5 L2.2 30.0 L3.4 27.7 L4.2 25.4 L4.4 23.1 L4.3 20.6 L4.5 18.1 L5.5 15.9 L7.4 14.2 L9.8 13.1 L12.2 12.2 L14.1 11.1 L15.5 9.3 L16.8 7.1 L18.3 4.9 L20.3 3.3 L22.7 2.7 L25.2 3.0 L27.7 3.5 L30.0 3.7 L32.3 3.4 L34.8 2.7 L37.4 2.3 L39.9 2.9 L41.9 4.5 L43.4 6.8 L44.6 9.1 L46.0 11.0 L47.8 12.2 L50.1 13.2 L52.4 14.3 L54.2 16.0 L55.1 18.3 L55.3 20.8 L55.2 23.2 L55.6 25.5 L56.5 27.7 L57.8 30.0Z" fill="url(#seal-g)"/>
        <circle cx="30" cy="30" r="20" fill="none" stroke="#e2bf7a" stroke-width="1" opacity=".85"/>
        <circle cx="30" cy="30" r="17.6" fill="none" stroke="#e2bf7a" stroke-width=".5" stroke-dasharray="1.2 1.8" opacity=".7"/>
        <path d="M27.5 37.5 V22 l9 -2.4 v13.6" fill="none" stroke="#f3d9a4" stroke-width="1.8" stroke-linejoin="round"/>
        <ellipse cx="25" cy="37.6" rx="3.3" ry="2.5" transform="rotate(-20 25 37.6)" fill="#f3d9a4"/><ellipse cx="34" cy="33.4" rx="3.3" ry="2.5" transform="rotate(-20 34 33.4)" fill="#f3d9a4"/>
        <ellipse cx="22" cy="20" rx="7" ry="3.4" transform="rotate(-35 22 20)" fill="#fff" opacity=".13"/>
      </svg>
      <svg class="cn tl" viewBox="0 0 26 26" aria-hidden="true"><path d="M2 24 V9 Q2 2 9 2 H24" fill="none" stroke="currentColor" stroke-width="1.1"/><path d="M6 24 V12 Q6 6 12 6 H24" fill="none" stroke="currentColor" stroke-width=".6" opacity=".7"/><circle cx="9" cy="9" r="1.6" fill="currentColor"/></svg><svg class="cn tr" viewBox="0 0 26 26" aria-hidden="true"><path d="M2 24 V9 Q2 2 9 2 H24" fill="none" stroke="currentColor" stroke-width="1.1"/><path d="M6 24 V12 Q6 6 12 6 H24" fill="none" stroke="currentColor" stroke-width=".6" opacity=".7"/><circle cx="9" cy="9" r="1.6" fill="currentColor"/></svg><svg class="cn bl" viewBox="0 0 26 26" aria-hidden="true"><path d="M2 24 V9 Q2 2 9 2 H24" fill="none" stroke="currentColor" stroke-width="1.1"/><path d="M6 24 V12 Q6 6 12 6 H24" fill="none" stroke="currentColor" stroke-width=".6" opacity=".7"/><circle cx="9" cy="9" r="1.6" fill="currentColor"/></svg><svg class="cn br" viewBox="0 0 26 26" aria-hidden="true"><path d="M2 24 V9 Q2 2 9 2 H24" fill="none" stroke="currentColor" stroke-width="1.1"/><path d="M6 24 V12 Q6 6 12 6 H24" fill="none" stroke="currentColor" stroke-width=".6" opacity=".7"/><circle cx="9" cy="9" r="1.6" fill="currentColor"/></svg>
      <!-- 새해 매화 가지 (카드 왼쪽 위·오른쪽 아래) -->
      <svg class="sprig" viewBox="0 0 120 46" aria-hidden="true">
      <path d="M6 38 Q40 30 62 22 Q86 14 114 12" fill="none" stroke="#6b3b2a" stroke-width="2" stroke-linecap="round"/>
      <path d="M50 26 Q56 36 54 42 M84 16 Q92 8 98 6" fill="none" stroke="#6b3b2a" stroke-width="1.6" stroke-linecap="round"/>
      <g fill="#e98a9a"><circle cx="30" cy="30" r="4"/><circle cx="25" cy="27" r="3.4"/><circle cx="34" cy="26" r="3.4"/><circle cx="27" cy="34" r="3.4"/><circle cx="34" cy="34" r="3.4"/></g>
      <circle cx="30" cy="30" r="1.6" fill="#f6d27a"/>
      <g fill="#f0a6b2"><circle cx="70" cy="18" r="3"/><circle cx="66" cy="16" r="2.6"/><circle cx="73" cy="14" r="2.6"/><circle cx="67" cy="21" r="2.6"/><circle cx="73" cy="21" r="2.6"/></g>
      <circle cx="70" cy="18" r="1.2" fill="#f6d27a"/>
      <circle cx="54" cy="42" r="3" fill="#e98a9a"/><circle cx="99" cy="6" r="2.6" fill="#f0a6b2"/><circle cx="108" cy="12" r="2" fill="#e98a9a"/>
    </svg>
      <svg class="sprig r" viewBox="0 0 120 46" aria-hidden="true">
      <path d="M6 38 Q40 30 62 22 Q86 14 114 12" fill="none" stroke="#6b3b2a" stroke-width="2" stroke-linecap="round"/>
      <path d="M50 26 Q56 36 54 42 M84 16 Q92 8 98 6" fill="none" stroke="#6b3b2a" stroke-width="1.6" stroke-linecap="round"/>
      <g fill="#e98a9a"><circle cx="30" cy="30" r="4"/><circle cx="25" cy="27" r="3.4"/><circle cx="34" cy="26" r="3.4"/><circle cx="27" cy="34" r="3.4"/><circle cx="34" cy="34" r="3.4"/></g>
      <circle cx="30" cy="30" r="1.6" fill="#f6d27a"/>
      <g fill="#f0a6b2"><circle cx="70" cy="18" r="3"/><circle cx="66" cy="16" r="2.6"/><circle cx="73" cy="14" r="2.6"/><circle cx="67" cy="21" r="2.6"/><circle cx="73" cy="21" r="2.6"/></g>
      <circle cx="70" cy="18" r="1.2" fill="#f6d27a"/>
      <circle cx="54" cy="42" r="3" fill="#e98a9a"/><circle cx="99" cy="6" r="2.6" fill="#f0a6b2"/><circle cx="108" cy="12" r="2" fill="#e98a9a"/>
    </svg>
      <div class="sec-label en">Invitation</div>
      <h2 class="sec-title serif foil">초대합니다</h2>
      ${ORN}
      <div id="greeting"></div>
    </div>

    <div class="welcome">
      <div class="w st" style="--i:6">
        <span class="ic"><svg viewBox="0 0 34 34" aria-hidden="true"><path d="M5 10 h24 v4 a3 3 0 0 0 0 6 v4 h-24 v-4 a3 3 0 0 0 0 -6Z" fill="#f3d9a4" stroke="#c08a3e" stroke-width="1.4"/><path d="M21 10 v14" stroke="#c08a3e" stroke-dasharray="2 2"/></svg></span>
        <b id="w-admission">입장 무료</b>편하게 오세요
      </div>
      <div class="w st" style="--i:7">
        <span class="ic"><svg viewBox="0 0 34 34" aria-hidden="true"><path d="M13 24 V8 l14 -3 v16" fill="none" stroke="#7b2d3b" stroke-width="2"/><ellipse cx="10" cy="24" rx="4" ry="3" fill="#7b2d3b"/><ellipse cx="24" cy="21" rx="4" ry="3" fill="#7b2d3b"/></svg></span>
        <b>영화음악·클래식</b>귀에 익은 곡들
      </div>
      <div class="w st" style="--i:8">
        <span class="ic"><svg viewBox="0 0 34 34" aria-hidden="true"><path d="M17 11 C14 5 5 6 6 13 C7 19 17 25 17 28 C17 25 27 19 28 13 C29 6 20 5 17 11Z" fill="#e2495b"/></svg></span>
        <b>누구나 환영</b>가족·친구와 함께
      </div>
    </div>
  </section>

  <section class="soft reveal">
    <div class="sec-label en">Information</div>
    <h2 class="sec-title serif foil">공연 안내</h2>
    ${ORN}
    <div class="ticket st" id="info"></div>
  </section>

  <section class="reveal stage" id="sec-conductor" hidden>
    <!-- 무대 조명 두 줄기(양쪽 위에서 사진 쪽으로, 천천히 흔들림) + 떠오르는 금빛 먼지 -->
    <div class="beams" aria-hidden="true"><i></i><i></i></div>
    <div class="dust" aria-hidden="true">${[8, 18, 27, 36, 47, 58, 66, 74, 83, 92, 13, 52, 88, 31].map(function (x, k) {
      return '<i style="--x:' + x + '%;--y:' + (18 + (k * 37) % 70) + '%;--d:' + (9 + (k * 5) % 7) + 's;--w:' + (k % 3 ? 2 : 3) + 'px;animation-delay:-' + (k * 1.3).toFixed(1) + 's"></i>';
    }).join('')}</div>
    <div class="sec-label en">Conductor</div>
    <h2 class="sec-title serif foil">지휘자 소개</h2>
    ${ORN}
    <div class="conductor">
      <figure class="portrait protect" id="conductor-photo" hidden>
        <div class="frame" id="conductor-frame"></div>
        <figcaption><span class="en">Conductor</span><b class="serif" id="conductor-name-photo"></b></figcaption>
      </figure>
      <div class="nameplate" id="conductor-nameplate">
        <svg class="baton" viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="30" fill="none" stroke="#d9b56e" stroke-opacity=".5"/>
          <path d="M18 46 L44 20" stroke="#f3eee4" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M16 48 L22 42" stroke="#d9b56e" stroke-width="5" stroke-linecap="round"/>
        </svg>
        <div class="role en">Conductor</div>
        <div class="name serif" id="conductor-name"></div>
      </div>
      <div class="now" id="conductor-now" hidden></div>
      <div class="awards" id="conductor-awards" hidden></div>
      <details class="bio" id="conductor-bio" hidden>
        <summary><span class="open-t">약력 자세히 보기</span><span class="close-t">약력 접기</span>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </summary>
        <div class="profile" id="conductor-profile"></div>
      </details>
    </div>
    <div class="performers" id="performers" hidden></div>
  </section>

  <section class="reveal booklet" id="sec-program">
    <svg class="staff" viewBox="0 0 400 70" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width=".8"><path d="M-20 20 C60 11 120 29 200 20 S340 11 420 20" /><path d="M-20 27 C60 18 120 36 200 27 S340 18 420 27" /><path d="M-20 34 C60 25 120 43 200 34 S340 25 420 34" /><path d="M-20 41 C60 32 120 50 200 41 S340 32 420 41" /><path d="M-20 48 C60 39 120 57 200 48 S340 39 420 48" /></g><g fill="currentColor"><g class="bob" style="animation-delay:0s"><ellipse cx="46" cy="33" rx="4.2" ry="3" transform="rotate(-20 46 33)"/><path d="M49.6 32 V14" stroke="currentColor" stroke-width="1.2"/></g><g class="bob" style="animation-delay:-1.2s"><ellipse cx="338" cy="27" rx="4.2" ry="3" transform="rotate(-20 338 27)"/><ellipse cx="356" cy="23" rx="4.2" ry="3" transform="rotate(-20 356 23)"/><path d="M341.6 26 V8 M359.6 22 V5" stroke="currentColor" stroke-width="1.2"/><path d="M341 8 L360 5 L360 8 L341 11Z"/></g><g class="bob" style="animation-delay:-2.1s"><ellipse cx="374" cy="45" rx="3.6" ry="2.6" transform="rotate(-20 374 45)"/><path d="M377 44 V29 q3 3 5 7" stroke="currentColor" stroke-width="1.1" fill="none"/></g></g></svg>
    <div class="sec-label en">Program</div>
    <h2 class="sec-title serif foil">이런 곡을 들려드려요</h2>
    ${ORN}
    <p class="program-hint">곡을 누르면 쉬운 설명이 펼쳐져요</p>
    <div id="program"></div>
    <p class="program-note" id="program-note"></p>
  </section>

  <section class="soft reveal" id="sec-map" hidden>
    <div class="sec-label en">Location</div>
    <h2 class="sec-title serif foil">오시는 길</h2>
    ${ORN}
    <div class="addr" id="addr"></div>
    <div class="btns">
      <a class="btn" id="naver" target="_blank" rel="noopener">네이버 지도</a>
      <a class="btn" id="kakao" target="_blank" rel="noopener">카카오맵</a>
      <button class="btn full" type="button" id="copy-addr">주소 복사</button>
    </div>
  </section>

  <footer class="reveal">
    <!-- 종이에서 눈 덮인 언덕을 넘어 밤하늘로 (표지와 짝) -->
    <svg class="hills" viewBox="0 0 400 64" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34 Q90 6 190 22 T400 12 V64 H0Z" fill="#7fa3dc" opacity=".35"/><path d="M44.0 16.0 L49.0 23.0 L47.0 23.0 L51.0 29.0 L48.0 29.0 L52.0 34.0 L36.0 34.0 L40.0 29.0 L37.0 29.0 L41.0 23.0 L39.0 23.0Z" fill="#18244f"/><path d="M41.6 20.0 L44.0 16.0 L46.4 20.0 Z" fill="#fff" opacity=".85"/><path d="M58.0 21.6 L62.0 27.2 L60.4 27.2 L63.6 32.0 L61.2 32.0 L64.4 36.0 L51.6 36.0 L54.8 32.0 L52.4 32.0 L55.6 27.2 L54.0 27.2Z" fill="#18244f"/><path d="M56.1 24.8 L58.0 21.6 L59.9 24.8 Z" fill="#fff" opacity=".85"/><path d="M338.0 8.1 L343.2 15.4 L341.1 15.4 L345.4 21.8 L342.2 21.8 L346.4 27.0 L329.6 27.0 L333.8 21.8 L330.6 21.8 L334.9 15.4 L332.8 15.4Z" fill="#18244f"/><path d="M335.5 12.3 L338.0 8.1 L340.5 12.3 Z" fill="#fff" opacity=".85"/><path d="M354.0 14.6 L358.0 20.2 L356.4 20.2 L359.6 25.0 L357.2 25.0 L360.4 29.0 L347.6 29.0 L350.8 25.0 L348.4 25.0 L351.6 20.2 L350.0 20.2Z" fill="#18244f"/><path d="M352.1 17.8 L354.0 14.6 L355.9 17.8 Z" fill="#fff" opacity=".85"/><path d="M0 40 Q60 22 130 33 T260 29 T400 24 V64 H0Z" fill="#1f2d63"/><path d="M0 40 Q60 22 130 33 T260 29 T400 24" fill="none" stroke="#fff" stroke-width="3" opacity=".9"/></svg>
    <div class="night">
      <canvas id="snow2" aria-hidden="true"></canvas>
      <div class="stars" aria-hidden="true"><i style="left:6%;top:12%;--d:2.4s;--s:3px;animation-delay:-0.0s"></i><i style="left:17%;top:30%;--d:3.1s;--s:2px;animation-delay:-0.5s"></i><i style="left:28%;top:8%;--d:3.8s;--s:2px;animation-delay:-0.9s"></i><i style="left:39%;top:22%;--d:4.5s;--s:3px;animation-delay:-1.4s"></i><i style="left:52%;top:6%;--d:2.4s;--s:2px;animation-delay:-1.8s"></i><i style="left:63%;top:18%;--d:3.1s;--s:2px;animation-delay:-2.2s"></i><i style="left:71%;top:34%;--d:3.8s;--s:3px;animation-delay:-2.7s"></i><i style="left:84%;top:10%;--d:4.5s;--s:2px;animation-delay:-3.1s"></i><i style="left:93%;top:26%;--d:2.4s;--s:2px;animation-delay:-3.6s"></i><i style="left:11%;top:52%;--d:3.1s;--s:3px;animation-delay:-4.0s"></i><i style="left:33%;top:46%;--d:3.8s;--s:2px;animation-delay:-4.5s"></i><i style="left:58%;top:40%;--d:4.5s;--s:2px;animation-delay:-5.0s"></i><i style="left:88%;top:48%;--d:2.4s;--s:3px;animation-delay:-5.4s"></i><i style="left:46%;top:62%;--d:3.1s;--s:2px;animation-delay:-5.9s"></i><i style="left:22%;top:70%;--d:3.8s;--s:2px;animation-delay:-6.3s"></i><i style="left:77%;top:66%;--d:4.5s;--s:3px;animation-delay:-6.8s"></i><i style="left:96%;top:70%;--d:2.4s;--s:2px;animation-delay:-7.2s"></i></div>
      <svg class="moon" viewBox="0 0 40 40" aria-hidden="true"><path d="M26 6 A15 15 0 1 0 34 30 A12 12 0 1 1 26 6Z" fill="#fff4d6"/></svg>
      <div class="ft">
        <div class="sec-label en">See you in the New Year</div>
        <p class="closing serif">새해 첫 음악회에서<br>뵙겠습니다<small id="closing-date"></small></p>
        ${ORN}
        <p class="contact" id="contact" hidden></p>
        <div class="btns">
          <button class="btn primary full" type="button" id="share">초대장 공유하기</button>
          <button class="btn full" type="button" id="calendar" hidden>내 캘린더에 추가</button>
        </div>
        <p class="copy" id="copyright"></p>
        <p class="rights">이 초대장의 사진·그림·글은 보람챔버오케스트라에 저작권이 있으며<br>허락 없이 복제·배포·다른 곳에 사용할 수 없습니다.</p>
      </div>
    </div>
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
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var cvs = document.querySelector('#cover-art svg'); if (cvs && cvs.pauseAnimations) cvs.pauseAnimations();
  }
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
    // 한 줄씩 차례로 나타남
    $('greeting').innerHTML = '<p class="serif">' + D.greeting.map(function (x, k) { return '<span class="st" style="--i:' + k + '">' + esc(x) + '</span>'; }).join('') + '</p>' +
      '<p class="sign st" style="--i:' + D.greeting.length + '"><span class="serif">' + esc(D.orchestra) + '</span> 드림</p>';
  }
  if (D.admission) $('w-admission').textContent = '입장 ' + D.admission;

  // 배경음악 (mp3) — 화면에 티 나지 않게: 첫 터치에 재생 → 반복, ♪ 버튼으로 끄고 켬
  (function () {
    var B = D.bgm;
    if (!B || !B.file) return;
    // 공연 당일 정해진 시각(quietFrom)부터는 음악 없음 — ♪ 버튼도 안 보임. 페이지를 열어 둔 채 그 시각이 지나도 멈춤
    var quietAt = B.quietFrom ? Date.parse(B.quietFrom) : NaN;
    function quiet() { return !isNaN(quietAt) && Date.now() >= quietAt; }
    if (quiet()) return;
    var au = new Audio(B.file);
    au.loop = true; au.preload = 'none'; au.volume = B.volume || 0.7;
    var fab = document.createElement('button');
    fab.type = 'button'; fab.className = 'music-fab';
    fab.setAttribute('aria-label', '배경음악 켜기/끄기');
    fab.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V6l10-2v12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="6.5" cy="18" r="2.6" fill="currentColor"/><circle cx="16.5" cy="16" r="2.6" fill="currentColor"/></svg><i class="slash"></i>';
    document.body.appendChild(fab);
    var on = false;
    function paint() { fab.classList.toggle('on', on); }
    function shut() { on = false; au.pause(); stopListening(); if (fab.parentNode) fab.parentNode.removeChild(fab); clearInterval(watch); }
    var watch = setInterval(function () { if (quiet()) shut(); }, 20000);
    function sound(v) {
      if (v && quiet()) { shut(); return; }
      on = v; paint();
      if (v) { var pr = au.play(); if (pr && pr.catch) pr.catch(function () { on = false; paint(); }); }
      else au.pause();
    }
    var evs = ['touchend', 'click', 'keydown'];
    function stopListening() { evs.forEach(function (n) { document.removeEventListener(n, first, true); }); }
    function first(e) {
      if (e.target && e.target.closest && e.target.closest('.music-fab')) return;
      stopListening(); sound(true);
    }
    evs.forEach(function (n) { document.addEventListener(n, first, true); });
    fab.onclick = function () { stopListening(); sound(!on); };
    // 다른 앱으로 나가면 잠시 멈추고, 돌아오면 이어서
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) au.pause(); else if (quiet()) shut(); else if (on) au.play().catch(function () {});
    });
  })();

  // 공연 안내 — 와인색 공연 티켓 (큰 날짜 · 일시/장소 · 절취선 너머 '입장 무료')
  var pad2 = function (n) { return (n < 10 ? '0' : '') + n; };
  var DOW = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var rows = [];
  var when = esc(dateText) + (D.time ? ' ' + esc(timeText(D.time)) : '');
  rows.push(['일시', when + (D.doorsOpen ? '<span class="sub">' + esc(timeText(D.doorsOpen)) + ' 입장 시작</span>' : '')]);
  if (D.venue && D.venue.name) {
    rows.push(['장소', esc(D.venue.name) + (D.venue.address ? '<span class="sub">' + esc(D.venue.address) + '</span>' : '')]);
  } else {
    rows.push(['장소', '추후 안내 예정', 'pending']);
  }
  var flake = '<svg class="tk-flake" viewBox="-50 -50 100 100" aria-hidden="true"><g stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none">' +
    [0, 60, 120, 180, 240, 300].map(function (a) {
      return '<g transform="rotate(' + a + ')"><path d="M0 0 V-44 M0 -28 l-9 -9 M0 -28 l9 -9 M0 -14 l-6 -6 M0 -14 l6 -6"/></g>';
    }).join('') + '</g></svg>';
  $('info').innerHTML = flake +
    '<div class="tk-main">' +
      '<div class="tk-head en">' + esc(D.subtitle || '') + '</div>' +
      '<div class="tk-date"><b class="en">' + pad2(p[1]) + '.' + pad2(p[2]) + '</b><span><i class="en">' + DOW[day.getDay()] + '</i>' + p[0] + '</span></div>' +
      '<dl class="tk-rows">' + rows.map(function (r) {
        return '<div><dt>' + r[0] + '</dt><dd' + (r[2] ? ' class="' + r[2] + '"' : '') + '>' + r[1] + '</dd></div>';
      }).join('') + '</dl>' +
    '</div>' +
    '<div class="tk-stub"><span class="en">Admission</span><b class="serif">' + esc(D.admission ? '입장 ' + D.admission : '초대') + '</b></div>' +
    '<i class="notch t"></i><i class="notch b"></i>';

  // 프로그램 — 묶음마다 1번부터
  var groups = (D.program || []).filter(function (g) { return g.pieces && g.pieces.length; });
  if (groups.length) {
    $('program').innerHTML = groups.map(function (g) {
      var head = g.group
        ? '<div class="group st">' + (g.en ? '<div class="g-en en">' + esc(g.en) + '</div>' : '') +
          '<h3 class="serif">' + esc(g.group) + '</h3>' + (g.desc ? '<p>' + esc(g.desc) + '</p>' : '') + '</div>'
        : '';
      // 한 줄 목록: 작은 그림 + 제목 — 누르면 설명이 펼쳐짐 (설명 없는 곡은 펼치기 없음)
      var items = g.pieces.map(function (s, k) {
        var meta = [s.note ? esc(s.note) : '', s.composer ? '<span class="nw">' + esc(s.composer) + '</span>' : ''].filter(Boolean).join(' · ');
        var art = ART[s.art] || '';
        var x = (ART.thumbX && ART.thumbX[s.art]) || 85;
        art = art.replace('viewBox="0 0 320 150"', 'viewBox="' + x + ' 0 150 150"');
        var row = '<span class="no en">' + pad2(k + 1) + '</span><span class="thumb">' + art + '</span>' +
          '<span class="txt"><span class="t serif">' + esc(s.title) + '</span>' +
          (meta ? '<span class="m">' + meta + '</span>' : '') + '</span>';
        var st = ' st" style="--i:' + (k + 1);
        if (!s.desc) return '<div class="piece' + st + '"><div class="row">' + row + '<span></span></div></div>';
        return '<details class="piece' + st + '"><summary class="row">' + row +
          '<svg class="chev" viewBox="0 0 20 20" aria-hidden="true"><path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</summary><p class="d">' + esc(s.desc) + '</p></details>';
      }).join('');
      return head + '<div class="pieces">' + items + '</div>';
    }).join('');
    $('program-note').textContent = D.programNote || '';
  } else {
    $('sec-program').hidden = true;
  }

  // 지휘자 — 사진(포스터처럼 이름을 겹침)·현재 직함·수상 배지·약력(눌러서 펼침). 비어 있으면 숨김
  var C = D.conductor;
  if (C && C.name) {
    $('conductor-name').textContent = C.name;
    $('conductor-name-photo').textContent = C.name;
    if (C.photo) {
      $('conductor-frame').innerHTML = '<img src="' + esc(C.photo + (C.photo.indexOf('?') < 0 ? (window.BUST || '') : '')) + '" alt="지휘자 ' + esc(C.name) + '">';
      $('conductor-photo').hidden = false;
      $('conductor-nameplate').hidden = true;
    }
    var now = (C.now || []).filter(Boolean);
    if (now.length) { $('conductor-now').innerHTML = now.map(function (x) { return '<p>' + esc(x) + '</p>'; }).join(''); $('conductor-now').hidden = false; }

    var prof = (C.profile || []).filter(function (g) { return g && (typeof g === 'string' || (g.items && g.items.length)); })
      .map(function (g) { return typeof g === 'string' ? { items: [g] } : g; });
    // '수상' 묶음은 월계관 배지로 따로 보여 줌 ("…부문 2위" → 배지 안 '2위', 아래 대회 이름)
    var awards = prof.filter(function (g) { return g.head === '수상'; });
    if (awards.length) {
      $('conductor-awards').innerHTML = awards[0].items.map(function (x) {
        var m = String(x).match(/^(.*?)\s*(\d+\s*위|대상|최우수상|우수상|금상|은상|동상|특별상)$/);
        var rank = m ? m[2] : '', name = m ? m[1] : x;
        return '<div class="award">' + laurel(rank) + '<div class="nm">' + esc(name) + '</div></div>';
      }).join('');
      $('conductor-awards').hidden = false;
    }
    var rest = prof.filter(function (g) { return g.head !== '수상'; });
    if (rest.length) {
      $('conductor-profile').innerHTML = rest.map(function (g) {
        return '<div class="pg">' + (g.head ? '<h4>' + esc(g.head) + '</h4>' : '') +
          '<ul>' + g.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
      }).join('');
      $('conductor-bio').hidden = false;
    }
    $('sec-conductor').hidden = false;
  }
  // 금색 월계관 (가운데 순위 글자)
  function laurel(rank) {
    // 원(가운데 40,42 반지름 27)의 왼쪽 호를 따라 잎 7장, 오른쪽은 좌우 대칭
    var leaves = '';
    for (var k = 0; k < 7; k++) {
      var th = 112 + k * 21, rad = th * Math.PI / 180;
      var x = 40 + Math.cos(rad) * 27, y = 42 + Math.sin(rad) * 27, rot = th + 90 + 28;
      var op = (0.6 + k * 0.06).toFixed(2);
      leaves += '<ellipse cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="6.4" ry="2.7" transform="rotate(' + rot + ' ' + x.toFixed(1) + ' ' + y.toFixed(1) + ')" fill="#d9b56e" opacity="' + op + '"/>' +
        '<ellipse cx="' + (80 - x).toFixed(1) + '" cy="' + y.toFixed(1) + '" rx="6.4" ry="2.7" transform="rotate(' + (-rot) + ' ' + (80 - x).toFixed(1) + ' ' + y.toFixed(1) + ')" fill="#d9b56e" opacity="' + op + '"/>';
    }
    return '<svg class="laurel" viewBox="0 0 80 80" aria-hidden="true">' +
      '<path d="M22 66 Q40 78 58 66" fill="none" stroke="#d9b56e" stroke-width="1.4"/>' + leaves +
      (rank ? '<text x="40" y="49" text-anchor="middle" font-size="17" font-weight="700" fill="#f6e3b4" font-family="Gowun Batang, serif">' + esc(rank) + '</text>' : '') +
      '</svg>';
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
  function fall(cv, count, floorR, noteShare) {
    var ctx = cv && cv.getContext && cv.getContext('2d');
    if (!ctx || !ctx.ellipse || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var notes = [], W, H, dpr = Math.min(window.devicePixelRatio || 1, 2), seen = true;
    var size = function () { W = cv.offsetWidth; H = cv.offsetHeight; cv.width = W * dpr; cv.height = H * dpr; };
    size(); window.addEventListener('resize', size);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { seen = es[0].isIntersecting; }).observe(cv);
    var spawn = function (n, top) {
      n.x = Math.random() * W; n.y = top ? -20 : Math.random() * H * .72;
      // 음표 noteShare · 나머지는 눈(동그란 눈 80% · 눈 결정 20%)
      var r = Math.random();
      n.kind = r < noteShare ? Math.floor(Math.random() * 5) : (Math.random() < .8 ? 5 : 6);
      n.sc = n.kind === 5 ? Math.random() * .8 + .6 : Math.random() * .55 + .55;   // 크기
      n.v = n.kind >= 5 ? Math.random() * .3 + .2 : Math.random() * .35 + .25;      // 떨어지는 속도 (눈은 조금 더 천천히)
      n.w = Math.random() * Math.PI * 2;           // 좌우 흔들림
      n.rot = (Math.random() - .5) * .6;           // 기울기
      n.spin = (Math.random() - .5) * .006;
      n.a = Math.random() * .35 + .5;              // 투명도
      return n;
    };
    for (var i = 0; i < count; i++) notes.push(spawn({}, false));
    (function tick() {
      requestAnimationFrame(tick);
      if (!seen) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      var floor = H * floorR;
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
    })();
  }
  fall($('snow'), 44, .86, .5);     // 표지: 눈 40% · 눈 결정 10% · 음표 5종 50%, 눈밭 근처에서 사라짐
  fall($('snow2'), 26, 1.02, .2);   // 맺음 밤하늘: 눈 위주, 음표 조금
})();
