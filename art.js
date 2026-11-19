/*
 * 초대장 그림 (직접 그린 SVG). data.js 의 art: '이름' 으로 골라 씁니다.
 * 표지는 cover(땅)·sky(밤하늘)·garland(알전구 줄), 곡별 그림은 나머지 이름입니다.
 */
(function () {
  var A = {};

  // 표지 땅: 눈 덮인 언덕 위 불 켜진 음악당, 눈 쌓인 소나무, 첼로 켜는 눈사람, 가로등
  A.cover =
    '<svg viewBox="0 0 400 210" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
    '<defs><radialGradient id="cv-halo"><stop offset="0" stop-color="#ffe2a0" stop-opacity=".9"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient>' +
    '<linearGradient id="cv-snow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e2eaf8"/></linearGradient></defs>' +
    '<circle cx="282" cy="128" r="96" fill="url(#cv-halo)" opacity=".45"/>' +
    // 먼 언덕과 먼 숲
    '<path d="M0 148 Q70 124 140 138 T280 130 T400 136 V210 H0Z" fill="#c8d7f1"/>' +
    pines([[118, 140, .45], [132, 138, .35], [150, 141, .4], [196, 136, .38], [212, 134, .3], [372, 136, .42], [386, 138, .32]], '#8fa7d3', false) +
    // 가까운 눈밭
    '<path d="M0 170 Q90 150 200 162 T400 156 V210 H0Z" fill="url(#cv-snow)"/>' +
    '<ellipse cx="282" cy="167" rx="86" ry="9" fill="#ffe1a0" opacity=".5"/>' +
    // 음악당
    '<rect x="244" y="120" width="76" height="44" fill="#7a3444"/>' +
    '<path d="M236 122 L282 94 L328 122Z" fill="#8c3d4e"/>' +
    '<path d="M231 123 L282 90 L333 123 Q327 127 321 123 L282 99 L243 123 Q237 127 231 123Z" fill="#ffffff"/>' +
    '<circle cx="282" cy="111" r="5" fill="#ffd36b"/>' +
    win(252) + win(268) + win(290) + win(306) +
    '<path d="M276 164 V147 Q282 138 288 147 V164Z" fill="#ffc24d"/>' +
    '<circle cx="282" cy="141" r="3.4" fill="none" stroke="#3d7a52" stroke-width="1.8"/><circle cx="282" cy="144.4" r="1.1" fill="#d6413f"/>' +
    '<rect x="240" y="161" width="84" height="5" rx="2.5" fill="#ffffff"/>' +
    // 가로등
    '<circle cx="214" cy="134" r="12" fill="#ffe7a8" opacity=".45"/>' +
    '<path d="M214 166 V137" stroke="#3a3550" stroke-width="1.8"/><rect x="210" y="130" width="8" height="8" rx="2" fill="#ffe08a" stroke="#3a3550" stroke-width="1.2"/>' +
    // 눈사람 첼리스트 (활이 오가고, 몸이 흔들리고, 음표가 피어오름 — SVG 자체 애니메이션)
    '<ellipse cx="150" cy="176" rx="20" ry="3" fill="#c9d6ee" opacity=".8"/>' +
    '<g transform="translate(150 176) scale(1.35) translate(-150 -176)"><g>' +
    '<animateTransform attributeName="transform" type="rotate" values="-1.6 150 176;1.6 150 176;-1.6 150 176" dur="2.8s" repeatCount="indefinite"/>' +
    // 몸
    '<circle cx="144" cy="162" r="11" fill="#ffffff" stroke="#d3ddef"/><circle cx="144" cy="143" r="8" fill="#ffffff" stroke="#d3ddef"/>' +
    '<circle cx="144" cy="157" r=".9" fill="#2f2f45"/>' +
    '<path d="M136 149 Q144 153 152 149 L153 152 Q144 157 135 152Z" fill="#d6413f"/><path d="M148 151 l2.4 8 -4 -1Z" fill="#d6413f"/>' +
    '<rect x="135" y="132.5" width="18" height="3" rx="1" fill="#2f2f45"/><rect x="138.5" y="123" width="11" height="10" rx="1" fill="#2f2f45"/><rect x="138.5" y="130" width="11" height="2" fill="#c0463f"/>' +
    '<circle cx="141.5" cy="141.5" r=".95" fill="#2f2f45"/><circle cx="146.5" cy="141.5" r=".95" fill="#2f2f45"/><path d="M144 144 l5 1.2 -5 1.2Z" fill="#f08a3c"/>' +
    '<path d="M141.5 147 q2.5 1.6 5 0" fill="none" stroke="#2f2f45" stroke-width=".6" stroke-linecap="round"/>' +
    // 첼로 (몸 앞에 비스듬히)
    '<g transform="rotate(-14 160 172)">' +
    '<path d="M160 171.5 V177.5" stroke="#4a4a55" stroke-width=".9"/>' +
    '<ellipse cx="160" cy="150" rx="7" ry="7.8" fill="#5a2a12"/><ellipse cx="160" cy="163" rx="8.4" ry="9.2" fill="#5a2a12"/>' +
    '<ellipse cx="160" cy="150" rx="6.2" ry="7" fill="#a0522d"/><ellipse cx="160" cy="163" rx="7.6" ry="8.4" fill="#a0522d"/>' +
    '<ellipse cx="158" cy="160" rx="3" ry="5" fill="#c06a3a" opacity=".45"/>' +
    '<path d="M156.4 156.5 q-1 2.2 0 4.4 M163.6 156.5 q1 2.2 0 4.4" fill="none" stroke="#3a1a0a" stroke-width=".7" stroke-linecap="round"/>' +
    '<rect x="159.2" y="133" width="1.8" height="24" rx=".6" fill="#2a1a12"/>' +
    '<rect x="157.6" y="160" width="5" height="1.1" fill="#e8d2a0"/><path d="M158.6 165 h3 l-.6 4 h-1.8Z" fill="#2a1a12"/>' +
    '<path d="M159.6 134 V165 M160.6 134 V165" stroke="#f3e3c0" stroke-width=".25"/>' +
    '<circle cx="160.1" cy="131.6" r="1.9" fill="#7a3a1c"/>' +
    '</g>' +
    // 왼손 (지판을 쥠)
    '<path d="M151 151 Q155 147 157.6 141.6" fill="none" stroke="#6b4a2b" stroke-width="1.3" stroke-linecap="round"/>' +
    '<path d="M157.6 141.6 l1.6 -.6 M157.6 141.6 l1.5 .8" stroke="#6b4a2b" stroke-width=".8" stroke-linecap="round"/>' +
    // 오른팔 + 활 (현 위를 오감)
    '<g>' +
    '<animateTransform attributeName="transform" type="translate" values="-2.6 .5;2.6 -.5;-2.6 .5" dur="1.4s" repeatCount="indefinite"/>' +
    '<animateTransform attributeName="transform" type="rotate" additive="sum" values="-4 146 161;4 146 161;-4 146 161" dur="1.4s" repeatCount="indefinite"/>' +
    '<path d="M138 156 Q141 161 146 161" fill="none" stroke="#6b4a2b" stroke-width="1.3" stroke-linecap="round"/>' +
    '<path d="M145 161.6 L180 155.2" stroke="#4a2a18" stroke-width="1" stroke-linecap="round"/>' +
    '<path d="M146 162.9 L179.4 156.5" stroke="#f2ead8" stroke-width=".55"/>' +
    '<rect x="144.6" y="160.4" width="2.6" height="2.6" rx=".5" fill="#2a1a12"/>' +
    '</g>' +
    // 피어오르는 음표
    '<text x="166" y="140" font-size="7" fill="#fff6dc" font-family="serif" opacity="0">♪' +
    '<animate attributeName="opacity" values="0;.95;0" dur="2.6s" repeatCount="indefinite"/>' +
    '<animateTransform attributeName="transform" type="translate" values="0 0;5 -18" dur="2.6s" repeatCount="indefinite"/></text>' +
    '<text x="170" y="146" font-size="6" fill="#fff6dc" font-family="serif" opacity="0">♫' +
    '<animate attributeName="opacity" values="0;.9;0" dur="2.6s" begin="1.3s" repeatCount="indefinite"/>' +
    '<animateTransform attributeName="transform" type="translate" values="0 0;7 -16" dur="2.6s" begin="1.3s" repeatCount="indefinite"/></text>' +
    '</g></g>' +
    // 가까운 소나무 (작은 전구 장식)
    pines([[42, 176, 1.15], [76, 178, .85], [356, 168, 1.0], [384, 172, .72]], '#2e5d4f', true) +
    '<path d="M0 194 Q100 180 200 190 T400 186 V210 H0Z" fill="#fffaf2"/>' +
    '</svg>';
  function win(x) {
    return '<rect x="' + (x - 3) + '" y="127" width="16" height="22" rx="8" fill="#ffe7a8" opacity=".35"/>' +
      '<rect x="' + x + '" y="130" width="10" height="16" rx="5" fill="#ffd36b"/>' +
      '<rect x="' + (x - 1) + '" y="146" width="12" height="2.4" rx="1.2" fill="#ffffff"/>';
  }
  function pines(list, color, lights) {
    var out = '', bulbs = ['#ffd36b', '#ff9e9e', '#ffe9b8'];
    list.forEach(function (t) {
      var x = t[0], y = t[1], s = t[2];
      var tier = function (top, w, h) {
        var ty = y - top * s, by = y - (top - h) * s, my = y - (top - h * .45) * s, qy = y - (top - h * .3) * s;
        return '<path d="M' + x + ' ' + ty + ' L' + (x - w * s) + ' ' + by + ' L' + (x + w * s) + ' ' + by + 'Z" fill="' + color + '"/>' +
          '<path d="M' + x + ' ' + ty + ' L' + (x - w * .55 * s) + ' ' + my + ' Q' + x + ' ' + qy + ' ' + (x + w * .55 * s) + ' ' + my + 'Z" fill="#ffffff"/>';
      };
      out += '<rect x="' + (x - 2 * s) + '" y="' + (y - 6 * s) + '" width="' + 4 * s + '" height="' + 6 * s + '" fill="#4a3428"/>' +
        tier(46, 10, 18) + tier(34, 14, 20) + tier(20, 18, 16);
      if (lights) {
        [[-6, 28], [5, 22], [-9, 14], [8, 10], [0, 36], [-2, 18]].forEach(function (b, i) {
          out += '<circle cx="' + (x + b[0] * s) + '" cy="' + (y - b[1] * s) + '" r="' + 1.4 * s + '" fill="' + bulbs[i % 3] + '"/>';
        });
      }
    });
    return out;
  }

  // 표지 하늘: 별, 초승달, 작은 금빛 불꽃 (표지 전체 뒤에 깔림)
  A.sky = (function () {
    var stars = [[22, 40, 1.1], [58, 88, .8], [96, 30, 1], [140, 64, .7], [176, 22, .9], [236, 44, .8], [268, 18, 1.1], [300, 70, .7], [346, 34, 1], [380, 80, .8],
      [30, 170, .7], [370, 160, .9], [16, 260, .8], [388, 250, .7], [44, 330, .9], [356, 320, .8], [120, 380, .6], [300, 400, .7], [24, 420, .7], [380, 430, .6]];
    var s = '<svg viewBox="0 0 400 640" preserveAspectRatio="xMidYMin slice" aria-hidden="true">' +
      '<defs><radialGradient id="sk-moon"><stop offset="0" stop-color="#fff6d8" stop-opacity=".5"/><stop offset="1" stop-color="#fff6d8" stop-opacity="0"/></radialGradient>' +
      '<mask id="sk-cres"><rect width="400" height="640" fill="#fff"/><circle cx="57" cy="126" r="15" fill="#000"/></mask></defs>' +
      '<circle cx="50" cy="132" r="40" fill="url(#sk-moon)"/>' +
      '<circle cx="50" cy="132" r="16" fill="#fff6d8" mask="url(#sk-cres)"/>';
    stars.forEach(function (t) { s += '<circle cx="' + t[0] + '" cy="' + t[1] + '" r="' + t[2] + '" fill="#ffffff" opacity=".8"/>'; });
    s += burst(350, 120, 16, '#ffd98a') + burst(330, 96, 8, '#ffb3b3') + burst(70, 300, 10, '#bfe3ff');
    return s + '</svg>';
  })();
  function burst(cx, cy, r, color) {
    var g = '<g stroke="' + color + '" stroke-width="1.1" stroke-linecap="round" opacity=".7">';
    for (var k = 0; k < 12; k++) {
      var a = k * Math.PI / 6, c = Math.cos(a), n = Math.sin(a);
      g += '<path d="M' + (cx + c * r * .45) + ' ' + (cy + n * r * .45) + ' L' + (cx + c * r) + ' ' + (cy + n * r) + '"/>';
    }
    return g + '</g><circle cx="' + cx + '" cy="' + cy + '" r="1.4" fill="' + color + '"/>';
  }

  // 표지 맨 위 알전구 줄장식
  A.garland = (function () {
    var cols = ['#ffd36b', '#ff9e9e', '#a8e6c9', '#ffe9b8', '#9ec5ff'];
    var segs = [[-6, 2, 45, 30, 100, 12], [100, 12, 150, 34, 200, 12], [200, 12, 250, 34, 300, 12], [300, 12, 355, 30, 406, 2]];
    var s = '<svg viewBox="0 0 400 44" preserveAspectRatio="xMidYMin slice" aria-hidden="true"><path d="M-6 2';
    segs.forEach(function (q) { s += ' Q' + q[2] + ' ' + q[3] + ' ' + q[4] + ' ' + q[5]; });
    s += '" fill="none" stroke="#e9d39a" stroke-opacity=".55" stroke-width="1.1"/>';
    var n = 0;
    segs.forEach(function (q) {
      for (var t = .15; t < 1; t += .2) {
        var u = 1 - t, x = u * u * q[0] + 2 * u * t * q[2] + t * t * q[4], y = u * u * q[1] + 2 * u * t * q[3] + t * t * q[5], c = cols[n++ % cols.length];
        s += '<circle cx="' + x + '" cy="' + (y + 4) + '" r="5.5" fill="' + c + '" opacity=".28"/>' +
          '<rect x="' + (x - 1.2) + '" y="' + (y - .5) + '" width="2.4" height="2" fill="#c9b27a"/>' +
          '<ellipse cx="' + x + '" cy="' + (y + 4) + '" rx="2.3" ry="3.3" fill="' + c + '"/>';
      }
    });
    return s + '</svg>';
  })();

  // 가을의 전설 — 노을 진 가을 들판
  A.autumn =
    '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs><linearGradient id="au-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f9d27f"/><stop offset=".6" stop-color="#ef9a5c"/><stop offset="1" stop-color="#c85d48"/></linearGradient></defs>' +
    '<rect width="320" height="150" fill="url(#au-sky)"/>' +
    '<circle cx="232" cy="88" r="24" fill="#fff0c4" opacity=".9"/>' +
    '<path d="M0 98 L40 70 L80 90 L130 54 L182 88 L222 66 L272 94 L320 70 V150 H0Z" fill="#8f4a5b" opacity=".55"/>' +
    '<path d="M0 116 Q80 98 160 112 T320 106 V150 H0Z" fill="#c06a32"/>' +
    '<path d="M0 134 Q100 118 200 130 T320 126 V150 H0Z" fill="#7d3b22"/>' +
    '<rect x="58" y="86" width="6" height="44" fill="#4b2417"/>' +
    '<circle cx="61" cy="80" r="19" fill="#d9822b"/><circle cx="46" cy="90" r="13" fill="#eaa83c"/><circle cx="76" cy="90" r="14" fill="#c56622"/>' +
    '<g stroke="#5a2a18" stroke-width="2"><path d="M190 108 V124 M222 106 V122 M254 105 V121 M286 106 V122"/><path d="M186 112 H292 M186 118 H292" stroke-width="1.4"/></g>' +
    '<g fill="#e07a28"><ellipse cx="104" cy="58" rx="4" ry="2" transform="rotate(30 104 58)"/><ellipse cx="128" cy="84" rx="4" ry="2" transform="rotate(-20 128 84)"/><ellipse cx="92" cy="104" rx="4" ry="2" transform="rotate(50 92 104)"/></g>' +
    '<path d="M150 36 q5 -5 10 0 q5 -5 10 0 M176 48 q4 -4 8 0 q4 -4 8 0" fill="none" stroke="#6b3030" stroke-width="1.6"/>' +
    '</svg>';

  // 모아나 — 바다 위 돛단배
  A.ocean =
    '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs><linearGradient id="oc-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3d8ea6"/><stop offset=".55" stop-color="#a9d8cf"/><stop offset="1" stop-color="#ffd7a3"/></linearGradient>' +
    '<linearGradient id="oc-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f8aa0"/><stop offset="1" stop-color="#1c5874"/></linearGradient></defs>' +
    '<rect width="320" height="94" fill="url(#oc-sky)"/>' +
    '<circle cx="222" cy="92" r="22" fill="#fff3d3"/>' +
    '<path d="M246 94 Q262 76 280 94Z" fill="#2c6b5a"/><path d="M262 84 l2 -14 M264 72 q-8 -2 -12 4 M264 72 q8 -3 12 3" stroke="#2c6b5a" stroke-width="2" fill="none"/>' +
    '<rect y="92" width="320" height="58" fill="url(#oc-sea)"/>' +
    '<g stroke="#fff3d3" stroke-linecap="round" opacity=".8"><path d="M206 100 H238" stroke-width="2.4"/><path d="M212 108 H232" stroke-width="2"/><path d="M216 116 H228" stroke-width="1.6"/></g>' +
    '<g fill="none" stroke="#ffffff" stroke-opacity=".35" stroke-width="1.5"><path d="M10 124 q10 -6 20 0 t20 0"/><path d="M150 134 q10 -6 20 0 t20 0"/><path d="M250 130 q10 -6 20 0 t20 0"/></g>' +
    '<path d="M66 114 Q100 124 138 114 L132 121 Q100 129 72 121Z" fill="#4a2a1e"/>' +
    '<path d="M100 114 V62" stroke="#4a2a1e" stroke-width="2"/>' +
    '<path d="M100 112 Q86 80 106 52 Q112 84 130 106Z" fill="#f6e7c8" stroke="#c48a58" stroke-width="1.2"/>' +
    '<g fill="#fff"><circle cx="40" cy="20" r="1.4"/><circle cx="74" cy="34" r="1"/><circle cx="160" cy="16" r="1.2"/><circle cx="292" cy="26" r="1"/></g>' +
    '</svg>';

  // 할아버지의 11개월 — 창가의 안락의자와 달력
  A.grandpa =
    '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs><linearGradient id="gp-wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e2c0"/><stop offset="1" stop-color="#e8c595"/></linearGradient>' +
    '<radialGradient id="gp-lamp"><stop offset="0" stop-color="#fff2c4"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs>' +
    '<rect width="320" height="150" fill="url(#gp-wall)"/>' +
    '<rect x="206" y="20" width="92" height="72" rx="4" fill="#2e3a5e"/>' +
    '<circle cx="276" cy="38" r="8" fill="#fbeec4"/>' +
    '<g fill="#fff" opacity=".85"><circle cx="222" cy="36" r="1.6"/><circle cx="240" cy="58" r="1.4"/><circle cx="262" cy="72" r="1.6"/><circle cx="286" cy="64" r="1.3"/><circle cx="230" cy="80" r="1.4"/></g>' +
    '<path d="M252 20 V92 M206 56 H298" stroke="#8a5a3a" stroke-width="3"/>' +
    '<rect x="206" y="20" width="92" height="72" rx="4" fill="none" stroke="#8a5a3a" stroke-width="4"/>' +
    '<rect y="126" width="320" height="24" fill="#b98352"/>' +
    '<circle cx="176" cy="54" r="46" fill="url(#gp-lamp)" opacity=".8"/>' +
    '<path d="M176 56 V128" stroke="#5a3a28" stroke-width="2.4"/><path d="M164 128 H188" stroke="#5a3a28" stroke-width="3"/>' +
    '<path d="M162 38 H190 L196 56 H156Z" fill="#f2c46a"/>' +
    '<rect x="78" y="58" width="62" height="56" rx="16" fill="#9e3e3e"/>' +
    '<rect x="70" y="98" width="78" height="24" rx="9" fill="#b84d4c"/>' +
    '<rect x="64" y="86" width="14" height="32" rx="6" fill="#8e3434"/><rect x="140" y="86" width="14" height="32" rx="6" fill="#8e3434"/>' +
    '<path d="M74 122 V130 M144 122 V130" stroke="#5a3a28" stroke-width="3"/>' +
    '<path d="M84 72 h46 v24 h-46Z" fill="#e8b65a" opacity=".55"/>' +
    '<rect x="24" y="26" width="36" height="42" rx="3" fill="#fffaf0" stroke="#c9a77a"/>' +
    '<rect x="24" y="26" width="36" height="10" rx="3" fill="#c0463f"/>' +
    '<text x="42" y="60" text-anchor="middle" font-size="18" font-family="Georgia,serif" fill="#7a3a2a">11</text>' +
    '</svg>';

  // 위풍당당 행진곡 — 졸업 모자와 꽃가루
  A.graduation =
    '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs><linearGradient id="gr-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f3b6e"/><stop offset="1" stop-color="#6a3a6c"/></linearGradient>' +
    '<radialGradient id="gr-glow" cx=".5" cy="1"><stop offset="0" stop-color="#ffd98a" stop-opacity=".7"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></radialGradient></defs>' +
    '<rect width="320" height="150" fill="url(#gr-bg)"/>' +
    '<rect width="320" height="150" fill="url(#gr-glow)"/>' +
    cap(96, 70, -18, 1.2) + cap(176, 44, 12, 1) + cap(238, 92, -6, 1.3) +
    '<g>' + confetti() + '</g>' +
    '<g fill="none" stroke="#e8c26a" stroke-width="2" stroke-linecap="round"><path d="M120 146 Q160 124 200 146"/></g>' +
    '</svg>';
  function cap(x, y, r, s) {
    return '<g transform="translate(' + x + ' ' + y + ') rotate(' + r + ') scale(' + s + ')">' +
      '<path d="M-12 3 V13 Q0 19 12 13 V3Z" fill="#1d1d2e"/>' +
      '<path d="M-24 0 L0 -10 L24 0 L0 10Z" fill="#26263c" stroke="#3c3c58" stroke-width=".8"/>' +
      '<path d="M0 0 L15 7 V18" stroke="#f2c14e" stroke-width="1.6" fill="none"/><circle cx="15" cy="19" r="2.2" fill="#f2c14e"/>' +
      '</g>';
  }
  function confetti() {
    var c = ['#f2c14e', '#f48fb1', '#7fd3e0', '#ffffff', '#ffb36b'], out = '';
    var pts = [[30, 30], [56, 112], [140, 20], [150, 104], [206, 26], [276, 40], [290, 120], [24, 82], [120, 128], [258, 14], [196, 128], [70, 22]];
    pts.forEach(function (p, i) {
      out += '<rect x="' + p[0] + '" y="' + p[1] + '" width="6" height="3" rx="1" fill="' + c[i % c.length] + '" transform="rotate(' + (i * 37 % 180) + ' ' + p[0] + ' ' + p[1] + ')"/>';
    });
    return out;
  }

  // 카르멘 투우사 — 투우장과 붉은 천
  A.toreador =
    '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs><linearGradient id="to-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7bd52"/><stop offset="1" stop-color="#e26a31"/></linearGradient></defs>' +
    '<rect width="320" height="150" fill="url(#to-sky)"/>' +
    '<circle cx="62" cy="40" r="18" fill="#fff0c2" opacity=".9"/>' +
    '<rect y="70" width="320" height="42" fill="#fbe2b6"/>' +
    arches() +
    '<rect y="66" width="320" height="5" fill="#b8452a"/>' +
    flags() +
    '<rect y="110" width="320" height="40" fill="#e9b97c"/>' +
    '<path d="M0 112 H320" stroke="#b8452a" stroke-width="2"/>' +
    '<path d="M176 56 Q232 34 266 66 Q258 112 204 132 Q190 96 176 56Z" fill="#c8102e"/>' +
    '<path d="M200 70 Q226 82 230 122" stroke="#8f0b20" stroke-width="3" fill="none" opacity=".7"/>' +
    '<path d="M172 54 L270 64" stroke="#5a2a18" stroke-width="3" stroke-linecap="round"/>' +
    '<g transform="translate(92 124)"><circle r="7" fill="#c8102e"/><circle r="4" fill="#9a0c22"/><path d="M4 4 q10 4 14 -2 q-8 -4 -14 2Z" fill="#3f7a3a"/></g>' +
    '</svg>';
  function arches() {
    var s = '';
    for (var i = 0; i < 10; i++) {
      var x = 8 + i * 32;
      s += '<path d="M' + x + ' 110 V90 Q' + x + ' 78 ' + (x + 12) + ' 78 Q' + (x + 24) + ' 78 ' + (x + 24) + ' 90 V110Z" fill="#c2603a"/>';
    }
    return s;
  }
  function flags() {
    var s = '', cols = ['#c8102e', '#f2c14e'];
    for (var i = 0; i < 6; i++) {
      var x = 28 + i * 54;
      s += '<path d="M' + x + ' 66 V46" stroke="#5a2a18" stroke-width="1.4"/><path d="M' + x + ' 46 L' + (x + 14) + ' 50 L' + x + ' 55Z" fill="' + cols[i % 2] + '"/>';
    }
    return s;
  }

  // 올드보이 마지막 왈츠 — 축음기와 조명
  A.waltz =
    '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs><radialGradient id="wa-bg" cx=".5" cy=".4"><stop offset="0" stop-color="#6a3256"/><stop offset="1" stop-color="#2b1530"/></radialGradient>' +
    '<linearGradient id="wa-spot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4d6" stop-opacity=".5"/><stop offset="1" stop-color="#fff4d6" stop-opacity="0"/></linearGradient>' +
    '<linearGradient id="wa-horn" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#b9822f"/><stop offset="1" stop-color="#f6d488"/></linearGradient></defs>' +
    '<rect width="320" height="150" fill="url(#wa-bg)"/>' +
    '<path d="M150 0 H176 L232 150 H92Z" fill="url(#wa-spot)"/>' +
    '<ellipse cx="160" cy="138" rx="70" ry="8" fill="#000" opacity=".25"/>' +
    '<rect x="122" y="108" width="68" height="28" rx="3" fill="#7d3f22"/><rect x="126" y="112" width="60" height="4" fill="#9a5530"/>' +
    '<ellipse cx="152" cy="106" rx="28" ry="5" fill="#141414"/><ellipse cx="152" cy="106" rx="6" ry="1.5" fill="#c0463f"/>' +
    '<path d="M170 106 L176 94" stroke="#d9b36a" stroke-width="2"/>' +
    '<path d="M174 96 Q186 80 198 62 L222 36 Q240 66 214 78 Q196 86 180 100Z" fill="url(#wa-horn)"/>' +
    '<ellipse cx="226" cy="54" rx="8" ry="20" transform="rotate(35 226 54)" fill="#8a5a22" opacity=".55"/>' +
    '<g fill="#f6d488" font-family="serif"><text x="248" y="40" font-size="20">♪</text><text x="266" y="72" font-size="16" opacity=".8">♫</text><text x="70" y="56" font-size="16" opacity=".6">♩</text><text x="92" y="90" font-size="13" opacity=".5">♪</text></g>' +
    '<text x="34" y="128" font-size="12" font-family="Georgia,serif" fill="#f6d488" opacity=".7" letter-spacing="3">1 · 2 · 3</text>' +
    '</svg>';

  // 아베 마리아 — 스테인드글라스와 촛불
  A.candle =
    '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs><linearGradient id="av-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f2650"/><stop offset="1" stop-color="#3e2a56"/></linearGradient>' +
    '<radialGradient id="av-glow"><stop offset="0" stop-color="#ffe3a3" stop-opacity=".55"/><stop offset="1" stop-color="#ffe3a3" stop-opacity="0"/></radialGradient>' +
    '<clipPath id="av-arch"><path d="M120 128 V58 Q120 24 160 14 Q200 24 200 58 V128Z"/></clipPath></defs>' +
    '<rect width="320" height="150" fill="url(#av-bg)"/>' +
    '<circle cx="160" cy="70" r="90" fill="url(#av-glow)"/>' +
    '<g clip-path="url(#av-arch)">' +
    '<rect x="110" y="0" width="100" height="140" fill="#4a7fc1"/>' +
    '<path d="M110 60 L160 40 L210 60 V90 L160 70 L110 90Z" fill="#b23a48"/>' +
    '<path d="M110 90 L160 70 L210 90 V128 H110Z" fill="#e8b64c"/>' +
    '<path d="M140 0 L160 40 L180 0Z" fill="#4d9b7a"/>' +
    '<circle cx="160" cy="54" r="10" fill="#f6e2a2"/>' +
    '<g stroke="#1b1b2e" stroke-width="2.4" fill="none"><path d="M160 14 V128 M120 90 H200 M110 60 L160 40 L210 60 M110 90 L160 70 L210 90"/></g>' +
    '</g>' +
    '<path d="M120 128 V58 Q120 24 160 14 Q200 24 200 58 V128Z" fill="none" stroke="#c9a55c" stroke-width="3"/>' +
    candle(84, 108, 24) + candle(104, 116, 16) + candle(216, 112, 20) + candle(236, 118, 14) +
    '<rect y="132" width="320" height="18" fill="#2a1c3c"/>' +
    '</svg>';
  function candle(x, y, h) {
    return '<circle cx="' + (x + 5) + '" cy="' + (y - 6) + '" r="16" fill="url(#av-glow)"/>' +
      '<rect x="' + x + '" y="' + y + '" width="10" height="' + h + '" rx="2" fill="#fbf1dc"/>' +
      '<path d="M' + (x + 5) + ' ' + (y - 12) + ' q5 7 0 10 q-5 -3 0 -10Z" fill="#ffcf5a"/>';
  }

  // 사랑으로 — 해 아래 손잡은 가족
  A.together =
    '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs><linearGradient id="tg-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8cdb8"/><stop offset=".6" stop-color="#fbd9a8"/><stop offset="1" stop-color="#f7b780"/></linearGradient></defs>' +
    '<rect width="320" height="150" fill="url(#tg-sky)"/>' +
    '<circle cx="160" cy="112" r="46" fill="#fff0c8"/>' +
    '<path d="M0 126 Q160 98 320 126 V150 H0Z" fill="#d98a5f"/>' +
    '<path d="M0 140 Q160 120 320 140 V150 H0Z" fill="#b8603f"/>' +
    '<path d="M110 100 H206" stroke="#5a2a2a" stroke-width="3" stroke-linecap="round"/>' +
    person(110, 72, 1) + person(142, 80, .8) + person(174, 80, .8) + person(206, 72, 1) +
    '<path transform="translate(160 22) scale(1.2)" d="M0 4 C-4 -4 -14 -2 -12 7 C-10 14 0 18 0 22 C0 18 10 14 12 7 C14 -2 4 -4 0 4Z" fill="#e2495b"/>' +
    '<path transform="translate(118 40) scale(.6)" d="M0 4 C-4 -4 -14 -2 -12 7 C-10 14 0 18 0 22 C0 18 10 14 12 7 C14 -2 4 -4 0 4Z" fill="#ef7a86" opacity=".8"/>' +
    '<path transform="translate(204 44) scale(.5)" d="M0 4 C-4 -4 -14 -2 -12 7 C-10 14 0 18 0 22 C0 18 10 14 12 7 C14 -2 4 -4 0 4Z" fill="#ef7a86" opacity=".7"/>' +
    '</svg>';
  function person(x, y, s) {
    var h = 34 * s, r = 7 * s, w = 9 * s;
    return '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="#5a2a2a"/>' +
      '<path d="M' + (x - w) + ' ' + (y + h + 8) + ' Q' + (x - w) + ' ' + (y + r + 4) + ' ' + x + ' ' + (y + r + 4) + ' Q' + (x + w) + ' ' + (y + r + 4) + ' ' + (x + w) + ' ' + (y + h + 8) + 'Z" fill="#5a2a2a"/>';
  }

  // 여인의 향기 (Por una Cabeza) — 조명 아래 반도네온과 붉은 장미
  A.tango =
    '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<defs><linearGradient id="tg2-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a2233"/><stop offset="1" stop-color="#2a0f1a"/></linearGradient>' +
    '<linearGradient id="tg2-spot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1d6" stop-opacity=".42"/><stop offset="1" stop-color="#fff1d6" stop-opacity="0"/></linearGradient></defs>' +
    '<rect width="320" height="150" fill="url(#tg2-bg)"/>' +
    '<path d="M142 0 H184 L252 150 H72Z" fill="url(#tg2-spot)"/>' +
    '<rect y="118" width="320" height="32" fill="#3a1520"/><path d="M0 118 H320" stroke="#c9a55c" stroke-opacity=".35"/>' +
    '<ellipse cx="160" cy="122" rx="62" ry="5" fill="#000" opacity=".35"/>' +
    // 반도네온: 양쪽 나무 상자 + 가운데 주름통
    '<rect x="134" y="66" width="52" height="40" fill="#241a1c"/>' +
    (function () { var l = ''; for (var x = 138; x < 186; x += 6) l += '<path d="M' + x + ' 66 V106" stroke="#e8dcc4" stroke-opacity=".75" stroke-width="1.2"/>'; return l; })() +
    '<rect x="110" y="60" width="26" height="52" rx="4" fill="#1b1214" stroke="#c9a55c" stroke-width="1.4"/>' +
    '<rect x="184" y="60" width="26" height="52" rx="4" fill="#1b1214" stroke="#c9a55c" stroke-width="1.4"/>' +
    (function () { var b = ''; [[117, 70], [127, 70], [117, 80], [127, 80], [117, 90], [127, 90], [192, 72], [202, 72], [192, 84], [202, 84], [192, 96], [202, 96]].forEach(function (p) { b += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="2.4" fill="#f1e2bd"/>'; }); return b; })() +
    // 붉은 장미
    '<path d="M196 130 Q226 124 250 110" fill="none" stroke="#3f7a3a" stroke-width="2.4" stroke-linecap="round"/>' +
    '<path d="M216 125 q8 -10 16 -6 q-6 8 -16 6Z M232 118 q2 10 10 10 q-2 -8 -10 -10Z" fill="#4d8b45"/>' +
    '<circle cx="254" cy="106" r="11" fill="#c8102e"/><circle cx="247" cy="101" r="6" fill="#d8283f"/><circle cx="260" cy="100" r="6" fill="#b10d27"/>' +
    '<path d="M250 106 q4 -6 9 -2 q-2 5 -7 4" fill="none" stroke="#7d0a1c" stroke-width="1.6"/>' +
    '<g fill="#f6d488" font-family="serif"><text x="66" y="50" font-size="18" opacity=".8">♪</text><text x="88" y="78" font-size="13" opacity=".55">♫</text><text x="244" y="52" font-size="15" opacity=".7">♩</text></g>' +
    '</svg>';

  // 곡 목록의 작은 정사각형 그림에서 보여 줄 가로 시작 위치 (그림 폭 320 중 150 만큼 보임)
  A.thumbX = { autumn: 20, ocean: 66, grandpa: 40, graduation: 85, toreador: 140, waltz: 100, candle: 85, together: 85, tango: 92 };

  window.ART = A;
})();
