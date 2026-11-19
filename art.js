/*
 * 초대장 그림 (직접 그린 SVG). data.js 의 art: '이름' 으로 골라 씁니다.
 * 표지 그림은 cover, 곡별 그림은 나머지 이름입니다.
 */
(function () {
  var A = {};

  // 표지: 해 뜨는 언덕 위 불 켜진 음악당
  A.cover =
    '<svg viewBox="0 0 400 210" preserveAspectRatio="xMidYMax slice" aria-hidden="true">' +
    '<defs><radialGradient id="cv-sun"><stop offset="0" stop-color="#fff6dc"/><stop offset=".45" stop-color="#ffd98f"/><stop offset="1" stop-color="#ffc173" stop-opacity="0"/></radialGradient>' +
    '<radialGradient id="cv-win"><stop offset="0" stop-color="#ffe7a3"/><stop offset="1" stop-color="#ffb84d" stop-opacity="0"/></radialGradient></defs>' +
    '<circle cx="120" cy="150" r="110" fill="url(#cv-sun)" opacity=".55"/>' +
    '<circle cx="120" cy="150" r="34" fill="#fff1c9"/>' +
    '<path d="M0 150 Q50 118 110 136 T230 126 T400 132 V210 H0Z" fill="#a8576a" opacity=".75"/>' +
    '<path d="M0 172 Q80 146 180 162 T400 150 V210 H0Z" fill="#5b2c43"/>' +
    // 음악당
    '<circle cx="290" cy="128" r="54" fill="url(#cv-win)" opacity=".45"/>' +
    '<path d="M246 156 V124 H334 V156Z" fill="#3e1d31"/>' +
    '<path d="M240 124 L290 98 L340 124Z" fill="#4a2238"/>' +
    '<path d="M240 124 H340" stroke="#f3c77a" stroke-width="1.2" opacity=".7"/>' +
    '<circle cx="290" cy="114" r="5" fill="#ffd77f"/>' +
    '<rect x="254" y="131" width="10" height="16" rx="5" fill="#ffd77f"/>' +
    '<rect x="270" y="131" width="10" height="16" rx="5" fill="#ffd77f"/>' +
    '<rect x="300" y="131" width="10" height="16" rx="5" fill="#ffd77f"/>' +
    '<rect x="316" y="131" width="10" height="16" rx="5" fill="#ffd77f"/>' +
    '<path d="M284 156 V140 Q290 132 296 140 V156Z" fill="#ffc861"/>' +
    // 나무
    '<path d="M40 168 L52 136 L64 168Z M58 172 L68 148 L78 172Z M352 160 L362 134 L372 160Z" fill="#3a1b2c"/>' +
    // 음표
    '<g fill="#ffe2a6" font-family="serif"><text x="318" y="92" font-size="18" opacity=".9">♪</text><text x="342" y="74" font-size="14" opacity=".7">♫</text><text x="300" y="70" font-size="12" opacity=".6">♩</text></g>' +
    '<path d="M0 194 Q100 178 200 190 T400 186 V210 H0Z" fill="#fffaf2"/>' +
    '</svg>';

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

  // 곡 목록의 작은 정사각형 그림에서 보여 줄 가로 시작 위치 (그림 폭 320 중 150 만큼 보임)
  A.thumbX = { autumn: 20, ocean: 66, grandpa: 40, graduation: 85, toreador: 140, waltz: 100, candle: 85, together: 85 };

  window.ART = A;
})();
