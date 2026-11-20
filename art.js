/*
 * 초대장 그림 (직접 그린 SVG). data.js 의 art: '이름' 으로 골라 씁니다.
 * 표지는 cover(땅)·sky(밤하늘)·garland(알전구 줄), 곡별 그림은 나머지 이름입니다.
 */
(function () {
  var A = {};

  // 표지 땅: 눈 덮인 언덕, 무대 뒤 불 켜진 음악당, 나무 무대 위 눈사람 오케스트라와 지휘자 캐릭터
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
    // 음악당
    '<rect x="244" y="120" width="76" height="44" fill="#7a3444"/>' +
    '<path d="M236 122 L282 94 L328 122Z" fill="#8c3d4e"/>' +
    '<path d="M231 123 L282 90 L333 123 Q327 127 321 123 L282 99 L243 123 Q237 127 231 123Z" fill="#ffffff"/>' +
    '<circle cx="282" cy="111" r="5" fill="#ffd36b"/>' +
    win(252) + win(268) + win(290) + win(306) +
    '<path d="M276 164 V147 Q282 138 288 147 V164Z" fill="#ffc24d"/>' +
    '<circle cx="282" cy="141" r="3.4" fill="none" stroke="#3d7a52" stroke-width="1.8"/><circle cx="282" cy="144.4" r="1.1" fill="#d6413f"/>' +
    '<rect x="240" y="161" width="84" height="5" rx="2.5" fill="#ffffff"/>' +
    // 무대 양옆 소나무 (작은 전구 장식, 밑동은 무대 뒤로)
    pines([[14, 166, 1.2], [388, 164, 1.0]], '#2e5d4f', true) +
    // 무대 — 눈밭 위 나무 무대(앞면 와인색·금색 테·무대 앞 조명), 음악당은 무대 뒤 배경
    '<defs><linearGradient id="st-top" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c99566"/><stop offset="1" stop-color="#9c6539"/></linearGradient></defs>' +
    '<path d="M0 158 Q200 149 400 156 L400 187 Q200 194 0 187Z" fill="url(#st-top)"/>' +
    '<path d="M0 158 Q200 149 400 156 L400 160.5 Q200 153.5 0 162.5Z" fill="#ffffff" opacity=".85"/>' +
    '<g stroke="#7d4b27" stroke-opacity=".35" stroke-width=".7" fill="none"><path d="M0 168 Q200 160 400 166"/><path d="M0 177 Q200 171 400 176"/></g>' +
    '<ellipse cx="282" cy="171" rx="96" ry="11" fill="#ffe1a0" opacity=".32"/>' +
    '<path d="M0 187 Q200 194 400 187 L400 199 Q200 206 0 199Z" fill="#7a3444"/>' +
    '<path d="M0 187 Q200 194 400 187" fill="none" stroke="#d9b56e" stroke-width="1.4"/>' +
    (function () { var l = ''; for (var x = 20; x < 400; x += 40) { var y = 189.5 + 3.2 * (1 - Math.pow((x - 200) / 200, 2)); l += '<ellipse cx="' + x + '" cy="' + (y - 4) + '" rx="9" ry="5" fill="#ffe7a8" opacity=".28"/><circle cx="' + x + '" cy="' + y + '" r="1.6" fill="#ffe08a"/>'; } return l; })() +
    // 플루트 눈사람 (뒷줄 왼쪽) — 원근감을 위해 조금 작게
    flutist(126, 166, 1.15) +
    // 클라리넷 눈사람 (뒷줄 가운데) — 원근감을 위해 조금 작게
    clarinetist(186, 166, 1.15) +
    // [뒷줄 보면대]
    // [피아노]
    // 바이올린 눈사람 (앞줄 왼쪽)
    violinist(64, 184, 1.35) +
    // 첼로 눈사람 (앞줄 오른쪽) — 나무 의자에 앉아 첼로를 켬 (활이 오가고, 몸이 흔들리고, 음표가 피어오름)
    '<g transform="translate(90 8)">' +
    '<ellipse cx="148" cy="177" rx="22" ry="3" fill="#6e4424" opacity=".35"/>' +
    '<g transform="translate(150 176) scale(1.35) translate(-150 -176)">' +
    // 의자
    '<path d="M137 164 L136 177 M153 164 L154 177" stroke="#6b4a2b" stroke-width="1.6" stroke-linecap="round"/>' +
    '<path d="M136.5 171.5 H153.5" stroke="#6b4a2b" stroke-width=".9"/>' +
    '<rect x="133.5" y="161" width="23" height="3.2" rx="1.2" fill="#8a5a3a"/>' +
    '<g>' +
    '<animateTransform attributeName="transform" type="rotate" values="-1.8 145 162;1.8 145 162;-1.8 145 162" dur="2.8s" repeatCount="indefinite"/>' +
    // 몸 (의자 위에 앉음)
    '<circle cx="145" cy="151.5" r="10.5" fill="#ffffff" stroke="#d3ddef"/><circle cx="145" cy="133" r="7.8" fill="#ffffff" stroke="#d3ddef"/>' +
    '<path d="M137 139 Q145 143 153 139 L154 142 Q145 147 136 142Z" fill="#d6413f"/><path d="M149 141 l2.4 7.5 -4 -1Z" fill="#d6413f"/>' +
    '<rect x="136" y="122.6" width="18" height="3" rx="1" fill="#2f2f45"/><rect x="139.5" y="113" width="11" height="10" rx="1" fill="#2f2f45"/><rect x="139.5" y="120" width="11" height="2" fill="#c0463f"/>' +
    '<circle cx="142.5" cy="131.5" r=".95" fill="#2f2f45"/><circle cx="147.5" cy="131.5" r=".95" fill="#2f2f45"/><path d="M145 134 l5 1.2 -5 1.2Z" fill="#f08a3c"/>' +
    '<path d="M142.5 137 q2.5 1.6 5 0" fill="none" stroke="#2f2f45" stroke-width=".6" stroke-linecap="round"/>' +
    // 첼로 (무릎 사이에 세움, 위가 연주자 쪽으로 살짝 기욺)
    '<g transform="translate(-5 -4) rotate(-9 160 172)">' +
    '<path d="M160 171.5 V181" stroke="#4a4a55" stroke-width=".9"/>' +
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
    '<path d="M152.5 143 Q155 139.5 155.2 135.2" fill="none" stroke="#6b4a2b" stroke-width="1.3" stroke-linecap="round"/>' +
    '<path d="M155.2 135.2 l1.6 -.6 M155.2 135.2 l1.5 .8" stroke="#6b4a2b" stroke-width=".8" stroke-linecap="round"/>' +
    // 오른팔 + 활 (현 위를 오감)
    '<g>' +
    '<animateTransform attributeName="transform" type="translate" values="-2.6 .5;2.6 -.5;-2.6 .5" dur="1.4s" repeatCount="indefinite"/>' +
    '<animateTransform attributeName="transform" type="rotate" additive="sum" values="-4 142 157;4 142 157;-4 142 157" dur="1.4s" repeatCount="indefinite"/>' +
    '<path d="M137 147 Q138.5 153 142 157" fill="none" stroke="#6b4a2b" stroke-width="1.3" stroke-linecap="round"/>' +
    '<path d="M141 157.6 L176 151.2" stroke="#4a2a18" stroke-width="1" stroke-linecap="round"/>' +
    '<path d="M142 158.9 L175.4 152.5" stroke="#f2ead8" stroke-width=".55"/>' +
    '<rect x="140.6" y="156.4" width="2.6" height="2.6" rx=".5" fill="#2a1a12"/>' +
    '</g>' +
    // 피어오르는 음표
    '<text x="163" y="130" font-size="7" fill="#fff6dc" font-family="serif" opacity="0">♪' +
    '<animate attributeName="opacity" values="0;.95;0" dur="2.6s" repeatCount="indefinite"/>' +
    '<animateTransform attributeName="transform" type="translate" values="0 0;5 -18" dur="2.6s" repeatCount="indefinite"/></text>' +
    '<text x="167" y="136" font-size="6" fill="#fff6dc" font-family="serif" opacity="0">♫' +
    '<animate attributeName="opacity" values="0;.9;0" dur="2.6s" begin="1.3s" repeatCount="indefinite"/>' +
    '<animateTransform attributeName="transform" type="translate" values="0 0;7 -16" dur="2.6s" begin="1.3s" repeatCount="indefinite"/></text>' +
    '</g></g>' +
    '</g>' +
    // [앞줄 보면대]
    // 지휘자 악보대(지휘대 바로 앞 — 지휘대 위에 선 지휘자 가슴 높이)
    musicStand(327, 184, 1.2, 1, 36) +
    // 지휘자 캐릭터 — 사진에서 오린 얼굴 + 졸라맨 몸, 12초짜리 지휘 (아래 maestro 함수)
    maestro() +
    '<path d="M0 204 Q100 199 200 204 T400 202 V210 H0Z" fill="#fffaf2"/>' +
    '</svg>';
  // 지휘자 캐릭터: 12초 동안 6마디(4/4, 한 박 0.5초) 지휘 — 보통 → 여리게 → 점점 크게 → 세게 → 크게 원을 그리며 끝맺음
  // 지휘봉 팔은 위팔·아래팔·손목 3마디 관절. 손이 실제 4/4 지휘 도형을 그리도록 각 순간의 손 위치에서 관절 각도를 계산함.
  function maestro() {
    var T = 12, N = 192, S = [0, -37], L1 = 9, L2 = 8;
    var PAT = [[0, .95], [.15, .25], [.85, .65], [.55, .05], [-1, .65], [-.55, 0], [-.15, .45], [0, -1]];   // 반 박마다: 1박·튐·2박(안쪽)·튐·3박(바깥)·튐·4박·위
    var CUT = [[0, .95], [-.9, .2], [-.6, -.9], [.4, -1], [.9, -.1], [.15, .55], [.15, .55], [0, -1]];      // 마지막 마디: 크게 원 → 끝맺음 → 멈춤 → 준비
    function amp(t) { return t < 4 ? 6.5 : t < 6 ? 3.2 : t < 8 ? 3.2 + (t - 6) / 2 * 5.3 : 8.5; }
    function pt(h) {
      h = ((h % 48) + 48) % 48;
      var tab = h >= 40 ? CUT : PAT, q = tab[h % 8], a = (h === 47) ? amp(0) : amp(h * 0.25);
      return [-11 + q[0] * a, -34 + q[1] * a];
    }
    function cr(p0, p1, p2, p3, u) {
      var u2 = u * u, u3 = u2 * u;
      return [0, 1].map(function (k) {
        return .5 * (2 * p1[k] + (-p0[k] + p2[k]) * u + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * u3);
      });
    }
    function hand(t) {   // 지휘봉 손 위치
      var x = t / 0.25, h = Math.floor(x), u = x - h;
      return cr(pt(h - 1), pt(h), pt(h + 1), pt(h + 2), u);
    }
    function lerp(a, b, w) { return [a[0] + (b[0] - a[0]) * w, a[1] + (b[1] - a[1]) * w]; }
    function sm(w) { w = Math.max(0, Math.min(1, w)); return w * w * (3 - 2 * w); }
    function other(t) {  // 반대 손 — 지휘자가 왼쪽(연주자)을 보므로 이 손도 늘 왼쪽 앞으로만: 평소엔 옆에 내려 둠 → 여리게(가슴 높이, 손바닥 아래) → 점점 들어 올림 → 세게·끝맺음은 지휘봉 손과 같은 방향으로 함께 → 다시 내려놓음
      var r = hand(t), f = function (k) { return [Math.min(-6, -11 + (r[0] + 11) * k + 3), -34 + (r[1] + 34) * k + 2.5]; };   // 몸 오른쪽으로 넘어가지 않게
      var rest = [-2.6 + .2 * Math.sin(t * 2.1), -22.6], soft = [-12, -32 + .35 * Math.sin(t * 9)], high = [-11.5, -47];
      if (t < 3.5) return rest;
      if (t < 4) return lerp(rest, soft, sm((t - 3.5) / .5));
      if (t < 6) return soft;
      if (t < 8) return lerp(soft, high, sm((t - 6) / 2));
      if (t < 8.5) return lerp(high, f(.6), sm((t - 8) / .5));
      if (t < 11.5) return f(.6);
      return lerp(f(.6), rest, sm((t - 11.5) / .5));
    }
    function ikOut(tg, prev) {  // 반대 팔: 첫 자세는 팔꿈치가 낮은 풀이, 그다음부터는 늘 바로 앞 자세와 가까운 풀이 — 팔꿈치가 중간에 뒤집히지 않음
      var p = ik(tg, 1), q = ik(tg, -1);
      if (prev) {
        var dist = function (v) { return Math.abs(((v[0] - prev[0]) % 360 + 540) % 360 - 180); };
        return dist(p) <= dist(q) ? p : q;
      }
      var ey = function (v) { return Math.sin(v[0] * Math.PI / 180); };
      return ey(p) >= ey(q) ? p : q;
    }
    function ik(tg, elbowSign) {
      var dx = tg[0] - S[0], dy = tg[1] - S[1], d = Math.max(1.5, Math.min(L1 + L2 - .3, Math.sqrt(dx * dx + dy * dy)));
      var phi = Math.atan2(dy, dx), a = Math.acos(Math.max(-1, Math.min(1, (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d))));
      var t1 = phi + elbowSign * a, ex = S[0] + L1 * Math.cos(t1), ey = S[1] + L1 * Math.sin(t1);
      var t2 = Math.atan2(tg[1] - ey, tg[0] - ex) - t1;
      return [t1 * 180 / Math.PI, t2 * 180 / Math.PI];
    }
    function unwrap(arr) { for (var k = 1; k < arr.length; k++) { while (arr[k] - arr[k - 1] > 180) arr[k] -= 360; while (arr[k] - arr[k - 1] < -180) arr[k] += 360; } return arr; }
    function ictus(t) {   // 박을 짚는 순간 몸이 살짝 내려앉음
      var near = Math.round(t / .5) * .5, k = (t >= 10 && t < 11) || t >= 11.5 ? 0 : 1;
      var b = Math.exp(-Math.pow((t - near) / .08, 2)) * k * (amp(t) / 8);
      return b + 1.3 * Math.exp(-Math.pow((t - 11.25) / .1, 2));
    }
    function lean(t) { return t < 4 ? 0 : t < 6 ? 1.2 * sm((t - 4) / .5) : t < 8 ? 1.2 - 4.2 * sm((t - 6) / 2) : t < 11 ? -3 : -3 + 3 * sm((t - 11) / 1); }

    var A1 = [], A2 = [], B1 = [], B2 = [], FL = [], BOB = [], LN = [], NOD = [];
    for (var k = 0; k <= N; k++) {
      var t = (k % N) * T / N, r = ik(hand(t), -1), o = ikOut(other(t), B1.length ? [B1[B1.length - 1]] : null), bo = ictus(t);
      A1.push(r[0]); A2.push(r[1]); B1.push(o[0]); B2.push(o[1]);
      FL.push(t >= 11.25 && t < 11.75 ? 18 : 22 + 12 * Math.sin(2 * Math.PI * t / .5) * (amp(t) / 8));
      BOB.push(.9 * bo); LN.push(lean(t)); NOD.push(-2 + 5 * bo + .5 * lean(t));
    }
    unwrap(A1); unwrap(A2); unwrap(B1); unwrap(B2);
    var f = function (v) { return v.toFixed(1); };
    var rot = function (arr, cx, cy, extra) {
      return '<animateTransform attributeName="transform" type="rotate"' + (extra || '') + ' values="' + arr.map(function (v) { return f(v) + ' ' + cx + ' ' + cy; }).join(';') + '" dur="12s" repeatCount="indefinite"/>';
    };
    var legs = BOB.map(function (b) { var hy = f(-22 + b); return 'M0 ' + hy + ' L-6 -5 M0 ' + hy + ' L6 -5'; }).join(';');
    var ink = 'fill="none" stroke="#1d1f2b" stroke-width="2.1" stroke-linecap="round"';
    var ink2 = 'fill="none" stroke="#3a3e52" stroke-width="2" stroke-linecap="round"';

    return '<ellipse cx="350" cy="185" rx="20" ry="3" fill="#6e4424" opacity=".35"/>' +
      '<g transform="translate(350 176) scale(1.25)">' +
      // 지휘대 — 높이를 2배로(2026-11-20), 금색 테와 앞판
      '<rect x="-14" y="-5" width="28" height="12.6" rx="1.2" fill="#7a3444"/>' +
      '<rect x="-11.5" y="-1.6" width="23" height="6.6" rx=".8" fill="none" stroke="#d9b56e" stroke-width=".6" opacity=".8"/>' +
      '<rect x="-15" y="-5.6" width="30" height="2" rx=".8" fill="#8c3d4e"/><path d="M-15 -5.4 H15" stroke="#d9b56e" stroke-width=".8"/>' +
      '<path d="M0 -22 L-6 -5 M0 -22 L6 -5" ' + ink + ' stroke-width="2.3"><animate attributeName="d" values="' + legs + '" dur="12s" repeatCount="indefinite"/></path>' +
      '<g>' +
      '<animateTransform attributeName="transform" type="translate" values="' + BOB.map(function (b) { return '0 ' + f(b); }).join(';') + '" dur="12s" repeatCount="indefinite"/>' +
      rot(LN, 0, -22, ' additive="sum"') +
      '<path d="M0 -22 V-40" ' + ink + ' stroke-width="2.3"/>' +
      '<path d="M-3 -41.5 L0 -40 L-3 -38.5Z M3 -41.5 L0 -40 L3 -38.5Z" fill="#c0463f"/>' +
      // 반대 손(멀리 있는 팔이라 지휘봉 팔 뒤에, 조금 옅게): 위팔 → 아래팔 → 펼친 손
      '<g>' + rot(B1, 0, -37) + '<path d="M0 -37 H9" ' + ink2 + '/>' +
      '<g>' + rot(B2, 9, -37) + '<path d="M9 -37 H17" ' + ink2 + '/>' +
      '<path d="M17 -37 l2.2 -1.4 M17 -37 l2.6 0 M17 -37 l2.2 1.4" stroke="#3a3e52" stroke-width=".9" stroke-linecap="round"/>' +
      '</g></g>' +
      // 지휘봉 팔: 위팔 → 아래팔 → 손목(지휘봉)
      '<g>' + rot(A1, 0, -37) + '<path d="M0 -37 H9" ' + ink + '/>' +
      '<g>' + rot(A2, 9, -37) + '<path d="M9 -37 H17" ' + ink + '/>' +
      '<g>' + rot(FL, 17, -37) + '<path d="M17 -37 H30" stroke="#ffffff" stroke-width="1.1" stroke-linecap="round"/>' +
      '<circle cx="30.4" cy="-37" r="1.5" fill="#fff6c8"><animate attributeName="opacity" values=".25;1;.25" dur=".5s" repeatCount="indefinite"/></circle>' +
      '</g></g></g>' +
      // 얼굴 (사진에서 머리·얼굴만 오린 것, 배경 투명) — 박자에 맞춰 까딱
      '<g>' + rot(NOD, 0, -40) +
      '<image href="' + (window.ART_BASE || '') + 'conductor-face-v2.png" x="-10.6" y="-64.6" width="21.2" height="25.5"/>' +
      '</g>' +
      '</g></g>';
  }
  // 눈사람 연주자 공통 틀 — 첼로 눈사람과 같은 비율(의자 높이 15·몸통 반지름 10.5·머리 7.8). 원점 = 의자 밑 땅.
  //  cfg: scarf(목도리 색), hat(모자 그림), tilt(고개 기울기 °), sway(몸 흔들림 [각도, 초]), play(악기·팔 그림), notes(음표 위치 [x,y])
  function snowPlayer(x, y, sc, cfg) {
    var sw = cfg.sway || [1.6, 2.8];
    var notes = (cfg.notes || []).map(function (n, i) {
      return '<text x="' + n[0] + '" y="' + n[1] + '" font-size="' + (7 - i) + '" fill="#fff6dc" font-family="serif" opacity="0">' + (i ? '♫' : '♪') +
        '<animate attributeName="opacity" values="0;.95;0" dur="2.6s" begin="' + (i * 1.3 + (cfg.delay || 0)) + 's" repeatCount="indefinite"/>' +
        '<animateTransform attributeName="transform" type="translate" values="0 0;' + (5 + i * 2) + ' -16" dur="2.6s" begin="' + (i * 1.3 + (cfg.delay || 0)) + 's" repeatCount="indefinite"/></text>';
    }).join('');
    return '<ellipse cx="' + x + '" cy="' + (y + 1) + '" rx="' + 15 * sc + '" ry="' + 2.2 * sc + '" fill="#6e4424" opacity=".35"/>' +
      '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')">' +
      '<path d="M-8 -12 L-9 1 M8 -12 L9 1" stroke="#6b4a2b" stroke-width="1.6" stroke-linecap="round"/>' +
      '<path d="M-8.5 -5 H8.5" stroke="#6b4a2b" stroke-width=".9"/><rect x="-11.5" y="-15" width="23" height="3.2" rx="1.2" fill="#8a5a3a"/>' +
      '<g><animateTransform attributeName="transform" type="rotate" values="' + (-sw[0]) + ' 0 -14;' + sw[0] + ' 0 -14;' + (-sw[0]) + ' 0 -14" dur="' + sw[1] + 's" repeatCount="indefinite"/>' +
      '<circle cx="0" cy="-24.5" r="10.5" fill="#ffffff" stroke="#d3ddef"/>' +
      '<g transform="rotate(' + (cfg.tilt || 0) + ' 0 -37)">' +
      '<circle cx="0" cy="-43" r="7.8" fill="#ffffff" stroke="#d3ddef"/>' +
      '<circle cx="-2.5" cy="-44.5" r=".95" fill="#2f2f45"/><circle cx="2.5" cy="-44.5" r=".95" fill="#2f2f45"/><path d="M0 -42 l5 1.2 -5 1.2Z" fill="#f08a3c"/>' +
      (cfg.mouth === false ? '' : '<path d="M-2.5 -39 q2.5 1.6 5 0" fill="none" stroke="#2f2f45" stroke-width=".6" stroke-linecap="round"/>') +
      (cfg.hat || '') + '</g>' +
      '<path d="M-8 -37 Q0 -33 8 -37 L9 -34 Q0 -29 -9 -34Z" fill="' + cfg.scarf + '"/><path d="M4 -35 l2.4 7.5 -4 -1Z" fill="' + cfg.scarf + '"/>' +
      '<circle cx="0" cy="-26" r=".9" fill="#2f2f45"/><circle cx="0" cy="-21.5" r=".9" fill="#2f2f45"/>' +
      (cfg.play || '') + notes +
      '</g></g>';
  }
  function TW() { return 'fill="none" stroke="#6b4a2b" stroke-width="1.3" stroke-linecap="round"'; }   // 나뭇가지 팔 (함수라서 그림 만들기 전에도 쓸 수 있음)

  // 바이올린 눈사람: 바이올린을 턱에 끼고 활을 길게 그음, 고개는 악기 쪽으로
  function violinist(x, y, sc) {
    var violin =
      '<g transform="translate(7.5 -35.2) rotate(24) scale(1.25)">' +
      '<ellipse cx="-1.6" cy="0" rx="4.1" ry="3.7" fill="#5a2a12"/><ellipse cx="3.7" cy="0" rx="3.4" ry="3.1" fill="#5a2a12"/>' +
      '<ellipse cx="-1.6" cy="0" rx="3.4" ry="3" fill="#b4602c"/><ellipse cx="3.7" cy="0" rx="2.7" ry="2.4" fill="#b4602c"/>' +
      '<path d="M.7 -1.4 q.6 1.4 0 2.8 M2.3 -1.4 q-.6 1.4 0 2.8" fill="none" stroke="#3a1a0a" stroke-width=".45"/>' +
      '<rect x="6.4" y="-.6" width="7" height="1.2" rx=".4" fill="#2a1a12"/><circle cx="14" cy="0" r="1.15" fill="#7a3a1c"/>' +
      '<ellipse cx="-4.9" cy=".4" rx="1.4" ry="1.1" fill="#2a1a12"/>' +
      '<path d="M-3.4 0 H13" stroke="#f3e3c0" stroke-width=".22"/>' +
      '</g>';
    var leftHand = '<path d="M7 -27.5 Q14 -24.5 20.2 -29.6" ' + TW() + '/><path d="M20.2 -29.6 l1.4 -1 M20.2 -29.6 l1.6 .3" stroke="#6b4a2b" stroke-width=".8" stroke-linecap="round"/>';
    var bow =
      '<g>' +
      '<animateTransform attributeName="transform" type="translate" values="-4.5 .9;4.5 -.9;-4.5 .9" dur="1.6s" repeatCount="indefinite"/>' +
      '<animateTransform attributeName="transform" type="rotate" additive="sum" values="-3 -10 -30;3 -10 -30;-3 -10 -30" dur="1.6s" repeatCount="indefinite"/>' +
      '<path d="M-8.5 -25 Q-11 -27.5 -10 -30.2" ' + TW() + '/>' +
      '<path d="M-10.4 -30.4 L24.5 -37.8" stroke="#4a2a18" stroke-width=".85" stroke-linecap="round"/>' +
      '<path d="M-9.8 -29.3 L24.1 -36.5" stroke="#f2ead8" stroke-width=".45"/>' +
      '<rect x="-11.6" y="-31.4" width="2.4" height="2.4" rx=".5" fill="#2a1a12"/>' +
      '</g>';
    return snowPlayer(x, y, sc, {
      scarf: '#3f8a5a', tilt: 9, sway: [1.4, 3.2], delay: .4,
      hat: '<ellipse cx="-1.2" cy="-50" rx="8.8" ry="3.4" fill="#8e2f3c"/><circle cx="-1.6" cy="-53.2" r="1.1" fill="#8e2f3c"/>',
      play: violin + leftHand + bow, notes: [[16, -46], [20, -42]]
    });
  }
  // 플루트 눈사람: 플루트를 옆으로 들고 숨을 불어 넣음 — 악기와 팔이 함께 살짝 오르내리고, 입김이 피어오름
  function flutist(x, y, sc) {
    var keys = ''; for (var k = 0; k < 7; k++) keys += '<circle cx="' + (-6 - k * 2.6) + '" cy="' + (-38.9 + k * .32) + '" r=".42" fill="#7d8796"/>';
    var flute =
      '<g>' +
      '<animateTransform attributeName="transform" type="rotate" values="-2 0 -39.5;2.5 0 -39.5;-2 0 -39.5" dur="2.4s" repeatCount="indefinite"/>' +
      '<path d="M3.2 -39.9 L-26 -36.6" stroke="#9aa4b3" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M3.2 -40.3 L-26 -37" stroke="#e7ecf3" stroke-width=".7" stroke-linecap="round"/>' +
      '<ellipse cx="-.6" cy="-39.7" rx=".9" ry=".55" fill="#3a3f4a"/>' + keys +
      '<path d="M7.4 -29 Q2 -33 -4.6 -38.2" ' + TW() + '/><path d="M-4.6 -38.2 l-1 -1.3 M-4.6 -38.2 l-1.5 -.2" stroke="#6b4a2b" stroke-width=".8" stroke-linecap="round"/>' +
      '<path d="M-8 -28.5 Q-13.5 -31 -17.2 -37.2" ' + TW() + '/><path d="M-17.2 -37.2 l-.6 -1.5 M-17.2 -37.2 l-1.5 -.6" stroke="#6b4a2b" stroke-width=".8" stroke-linecap="round"/>' +
      '</g>';
    var puff = function (d) {
      return '<circle cx="-1.2" cy="-38" r=".9" fill="#ffffff" opacity="0">' +
        '<animate attributeName="opacity" values="0;.85;0" dur="2.4s" begin="' + d + 's" repeatCount="indefinite"/>' +
        '<animateTransform attributeName="transform" type="translate" values="0 0;-3 -5" dur="2.4s" begin="' + d + 's" repeatCount="indefinite"/>' +
        '<animate attributeName="r" values=".6;1.6" dur="2.4s" begin="' + d + 's" repeatCount="indefinite"/></circle>';
    };
    return snowPlayer(x, y, sc, {
      scarf: '#3d6fb6', sway: [1.2, 3.4], mouth: false, delay: .9,
      hat: '<path d="M-7.6 -45 Q0 -58 7.6 -45" fill="none" stroke="#e98a9a" stroke-width="1.4"/><circle cx="-7.9" cy="-44" r="2.7" fill="#f3a6b4"/><circle cx="7.9" cy="-44" r="2.7" fill="#f3a6b4"/>',
      play: flute + puff(0) + puff(1.2), notes: [[-30, -42], [-26, -46]]
    });
  }
  // 클라리넷 눈사람: 클라리넷을 물고 신이 나면 벨(아래 끝)을 들어 올림 — 악기·두 손이 함께 움직이고 고개가 따라 까딱임
  function clarinetist(x, y, sc) {
    var rings = ''; [-34, -29, -24, -19.5].forEach(function (yy) { var xx = (yy + 39) * .19; rings += '<path d="M' + (xx - 1.2) + ' ' + yy + ' h2.4" stroke="#c7ccd6" stroke-width=".55"/>'; });
    var keys = ''; [-31.5, -27, -22].forEach(function (yy) { var xx = (yy + 39) * .19; keys += '<circle cx="' + (xx + .2) + '" cy="' + yy + '" r=".45" fill="#c7ccd6"/>'; });
    var clar =
      '<g>' +
      '<animateTransform attributeName="transform" type="rotate" values="0 0 -39;-14 0 -39;-3 0 -39;-10 0 -39;0 0 -39" keyTimes="0;.3;.5;.75;1" dur="3.2s" repeatCount="indefinite"/>' +
      '<path d="M0 -39.4 L4.6 -15.5" stroke="#1e1e26" stroke-width="2.1" stroke-linecap="round"/>' +
      '<path d="M-.4 -40.6 L.1 -38.2" stroke="#2c2c36" stroke-width="1.3" stroke-linecap="round"/>' +
      rings + keys +
      '<path d="M3.3 -16.6 L6.4 -17.2 L8.4 -12.2 L1.6 -10.9Z" fill="#1e1e26"/><path d="M1.6 -10.9 L8.4 -12.2" stroke="#c7ccd6" stroke-width=".6"/>' +
      '<path d="M-8 -28.5 Q-4.5 -33 .9 -33.8" ' + TW() + '/><path d="M.9 -33.8 l1.3 -.6 M.9 -33.8 l1.4 .5" stroke="#6b4a2b" stroke-width=".8" stroke-linecap="round"/>' +
      '<path d="M8 -24 Q6.5 -22.5 3.7 -22.8" ' + TW() + '/><path d="M3.7 -22.8 l-1.3 -.6 M3.7 -22.8 l-1.3 .6" stroke="#6b4a2b" stroke-width=".8" stroke-linecap="round"/>' +
      '</g>';
    return snowPlayer(x, y, sc, {
      scarf: '#e0b12f', sway: [2, 1.6], mouth: false, delay: .2,
      hat: '<path d="M-7.6 -47 Q0 -60 7.6 -47Z" fill="#3d5fa6"/><rect x="-8" y="-48.4" width="16" height="2.8" rx="1.2" fill="#2e4a86"/><circle cx="0" cy="-56.8" r="2.1" fill="#ffffff"/>',
      play: clar, notes: [[12, -18], [15, -23]]
    });
  }
  // 보면대 — 원점 = 받침 아래 땅. face: 1 이면 오른쪽(연주자가 오른쪽), -1 이면 왼쪽으로 기울임. tall: 기둥 높이
  function musicStand(x, y, sc, face, tall) {
    var h = tall || 28, top = -h - 4;
    var lines = ''; for (var k = 0; k < 3; k++) lines += '<path d="M-6.4 ' + (top - 4.6 + k * 2.2) + ' H6.4" stroke="#b9ae98" stroke-width=".35"/>';
    var dots = '<circle cx="-4" cy="' + (top - 3.7) + '" r=".6" fill="#4d4d5a"/><circle cx="-.5" cy="' + (top - 2.5) + '" r=".6" fill="#4d4d5a"/><circle cx="3" cy="' + (top - 1.4) + '" r=".6" fill="#4d4d5a"/>';
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')">' +
      '<ellipse cx="0" cy=".6" rx="8" ry="1.3" fill="#6e4424" opacity=".3"/>' +
      '<path d="M-6 0 L0 -5 L6 0 M0 -5 V0" fill="none" stroke="#2f2f3a" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M0 -5 V' + (top + 2) + '" stroke="#2f2f3a" stroke-width="1.3"/>' +
      '<g transform="rotate(' + (face * -16) + ' 0 ' + (top + 1) + ')">' +
      '<rect x="-9" y="' + (top - 7.5) + '" width="18" height="10.5" rx="1" fill="#2f2f3a"/>' +
      '<rect x="-7.6" y="' + (top - 6.6) + '" width="15.2" height="8.2" fill="#fffdf3"/>' + lines + dots +
      '<rect x="-9.6" y="' + (top + 2.4) + '" width="19.2" height="1.6" rx=".6" fill="#2f2f3a"/>' +
      '</g></g>';
  }
  // 피아노 눈사람 — 옆모습으로 앉아 오른쪽(지휘자)을 보며 그랜드 피아노를 침. 원점 = 건반 앞 땅.
  //  두 손이 번갈아 건반 위에서 통통 튀고 가끔 신나게 높이 들림, 몸이 앞뒤로 들썩, 고개 까딱, 줄무늬 털모자 꼬리가 펄럭, 열린 뚜껑에서 음표가 튀어나옴
  function pianist(x, y, sc) {
    var K = '#1b1b24', A = function (attr, vals, dur, extra) { return '<animateTransform attributeName="transform" type="' + attr + '" values="' + vals + '" dur="' + dur + 's" repeatCount="indefinite"' + (extra || '') + '/>'; };
    // 그랜드 피아노 (옆모습: 왼쪽 건반, 오른쪽 꼬리, 뚜껑 열림)
    var blackKeys = ''; [-6.2, -4.8, -2.6, -1.2, .2].forEach(function (k) { blackKeys += '<rect x="' + k + '" y="-23.4" width=".8" height="1" fill="' + K + '"/>'; });
    var piano =
      '<ellipse cx="22" cy=".8" rx="34" ry="2.4" fill="#6e4424" opacity=".35"/>' +
      '<rect x="3" y="-14" width="3" height="14" rx=".6" fill="' + K + '"/><rect x="49" y="-13" width="3" height="13" rx=".6" fill="' + K + '"/>' +
      '<circle cx="4.5" cy=".2" r=".9" fill="#d9b56e"/><circle cx="50.5" cy=".2" r=".9" fill="#d9b56e"/>' +
      '<path d="M15 -12 L16 -3 L20 -3 L21 -12Z" fill="' + K + '"/><rect x="15.6" y="-2.6" width="4.8" height="1.1" rx=".4" fill="#d9b56e"/>' +
      // 뚜껑(열림)과 받침대
      '<path d="M7 -27 L56 -27 L17 -55 L10 -51Z" fill="#2c2c38"/><path d="M7 -27 L17 -55" stroke="#d9b56e" stroke-width=".6"/>' +
      '<path d="M33 -27 L28 -45" stroke="' + K + '" stroke-width="1"/>' +
      // 몸통
      '<path d="M0 -27 H36 Q56 -27 57 -20.5 Q58 -14 49 -13 H0Z" fill="' + K + '"/>' +
      '<path d="M2 -25.6 H36 Q51 -25.6 54 -21.5" fill="none" stroke="#4a4a5c" stroke-width=".8"/>' +
      '<path d="M0 -14.4 H48" stroke="#d9b56e" stroke-width=".5" opacity=".7"/>' +
      // 건반
      '<path d="M-7.4 -19 H1 V-13 H-4.6 Q-7.4 -13 -7.4 -15.8Z" fill="' + K + '"/>' +
      '<rect x="-7.4" y="-22.2" width="8" height="3.6" rx=".6" fill="' + K + '"/><rect x="-7.4" y="-23.6" width="8" height="1.6" fill="#fffdf6"/>' + blackKeys +
      // 악보대와 악보
      '<path d="M1 -27 L4.4 -36.5 L6 -36.5 L2.6 -27Z" fill="' + K + '"/><path d="M2.6 -29 L5.4 -36 L9.4 -35 L6.6 -28Z" fill="#fffdf3"/>' +
      '<path d="M3.6 -30.4 L7.6 -29.4 M4.3 -32.2 L8.3 -31.2 M5 -34 L9 -33" stroke="#b9ae98" stroke-width=".3"/>';
    // 의자
    var bench = '<path d="M-26 -12 L-27 0 M-13 -12 L-12 0" stroke="#3a2a22" stroke-width="1.5" stroke-linecap="round"/><rect x="-28" y="-14.4" width="17" height="3" rx="1" fill="#5a3a2a"/>';
    // 털모자 꼬리 (펄럭)
    var tail = '<g>' + A('rotate', '-12 -18 -54;16 -18 -54;-12 -18 -54', .8) +
      '<path d="M-18 -54 Q-26 -60 -32 -53" fill="none" stroke="#d6413f" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M-21 -56.8 l.8 2.4 M-25 -57.4 l.2 2.6 M-28.6 -55.6 l-.6 2.4" stroke="#ffffff" stroke-width="1"/>' +
      '<circle cx="-32.6" cy="-52.4" r="2.4" fill="#ffffff"/></g>';
    var head = '<g>' + A('rotate', '-5 -18 -36;6 -18 -36;-5 -18 -36', .8) +
      '<circle cx="-18" cy="-43" r="7.8" fill="#ffffff" stroke="#d3ddef"/>' +
      '<circle cx="-13.8" cy="-44.6" r=".95" fill="#2f2f45"/><path d="M-15.4 -46.6 q1.6 -1 3 .2" fill="none" stroke="#2f2f45" stroke-width=".45"/>' +
      '<path d="M-11 -42.2 l6.2 1.1 -6.2 1.2Z" fill="#f08a3c"/>' +
      '<path d="M-15.8 -38.8 q2.4 2.2 5 .2" fill="none" stroke="#2f2f45" stroke-width=".6" stroke-linecap="round"/>' +
      '<circle cx="-14.6" cy="-40.6" r="1.3" fill="#f3a6b4" opacity=".55"/>' +
      tail +
      '<path d="M-26 -45.5 Q-18 -60 -10 -45.5Z" fill="#d6413f"/><path d="M-24.6 -49.6 Q-18 -53 -11.4 -49.6" fill="none" stroke="#ffffff" stroke-width="1.2"/>' +
      '<rect x="-26.6" y="-47" width="17.4" height="3" rx="1.3" fill="#ffffff"/>' +
      '</g>';
    // 두 손: 번갈아 통통, 마지막 박에 둘 다 높이 (3.2초 주기)
    var hand = function (begin, x2, y2) {
      return '<g>' + A('translate', '0 0;0 -2;0 0;0 -2;0 0;0 -2;0 0;0 -7;0 0', 3.2, ' begin="' + begin + 's"') +
        '<path d="M-14 -29.5 Q-9 -31.5 ' + x2 + ' ' + y2 + '" ' + TW() + '/>' +
        '<path d="M' + x2 + ' ' + y2 + ' l1.4 -1 M' + x2 + ' ' + y2 + ' l1.7 .1 M' + x2 + ' ' + y2 + ' l1.3 1" stroke="#6b4a2b" stroke-width=".7" stroke-linecap="round"/></g>';
    };
    var body = '<g>' + A('rotate', '-3 -19 -14;4 -19 -14;-3 -19 -14', 1.6) +
      '<circle cx="-19" cy="-24.5" r="10.5" fill="#ffffff" stroke="#d3ddef"/>' +
      '<circle cx="-11.2" cy="-26" r=".9" fill="#2f2f45"/><circle cx="-10.4" cy="-21.6" r=".9" fill="#2f2f45"/>' +
      hand(.2, -6.2, -24.4) +
      head +
      '<path d="M-13.4 -36.2 l-2.4 -1.6 v3.2Z M-13.4 -36.2 l2.4 -1.6 v3.2Z" fill="#2f2f45"/>' +
      hand(0, -3, -24.6) +
      '</g>';
    // 열린 뚜껑에서 튀어나오는 음표
    var pop = function (nx, ny, ch, d, dx) {
      return '<text x="' + nx + '" y="' + ny + '" font-size="7" fill="#fff6dc" font-family="serif" opacity="0">' + ch +
        '<animate attributeName="opacity" values="0;1;0" dur="2.4s" begin="' + d + 's" repeatCount="indefinite"/>' +
        '<animateTransform attributeName="transform" type="translate" values="0 0;' + dx + ' -18" dur="2.4s" begin="' + d + 's" repeatCount="indefinite"/></text>';
    };
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + sc + ')">' + piano + bench + body +
      pop(30, -34, '♪', 0, 6) + pop(40, -32, '♫', .8, 8) + pop(22, -38, '♩', 1.6, 4) + '</g>';
  }
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

  // 캐논변주곡 — 결혼식 종 두 개와 리본, 아래 오선지에 같은 선율이 돌림노래처럼 겹겹이
  A.bells = (function () {
    var bell = function (x, y, r) {
      return '<g transform="translate(' + x + ' ' + y + ') rotate(' + r + ')">' +
        '<path d="M0 0 C-3 0 -12 5 -13 20 L-16 27 H16 L13 20 C12 5 3 0 0 0Z" fill="url(#bl-gold)"/>' +
        '<path d="M-16 27 H16" stroke="#a87a2a" stroke-width="1.6"/><circle cx="0" cy="30" r="3" fill="#a87a2a"/>' +
        '<path d="M-6 6 Q-9 14 -9 22" stroke="#fff6d8" stroke-width="1.6" stroke-linecap="round" opacity=".7" fill="none"/></g>';
    };
    var note = function (x, y, c) { return '<ellipse cx="' + x + '" cy="' + y + '" rx="3" ry="2.2" transform="rotate(-20 ' + x + ' ' + y + ')" fill="' + c + '"/><path d="M' + (x + 2.7) + ' ' + y + ' V' + (y - 11) + '" stroke="' + c + '" stroke-width="1.1"/>'; };
    var voices = '', cols = ['#7b2d3b', '#c08a3e', '#d9738a'], mel = [0, -3, -6, -3, 0, 3];
    cols.forEach(function (c, v) { mel.forEach(function (m, k) { var x = 40 + v * 34 + k * 40; if (x < 300) voices += note(x, 128 + m - v * 1.2, c); }); });
    var staff = ''; for (var k = 0; k < 5; k++) staff += '<path d="M14 ' + (116 + k * 4) + ' H306" stroke="#b08d5a" stroke-width=".6" opacity=".55"/>';
    return '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<defs><linearGradient id="bl-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4de"/><stop offset="1" stop-color="#f4d6a6"/></linearGradient>' +
      '<linearGradient id="bl-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f8dc8c"/><stop offset="1" stop-color="#c99536"/></linearGradient></defs>' +
      '<rect width="320" height="150" fill="url(#bl-bg)"/>' +
      '<g fill="#f2b3c0"><circle cx="40" cy="22" r="5"/><circle cx="58" cy="14" r="4"/><circle cx="262" cy="16" r="4.5"/><circle cx="282" cy="26" r="5"/></g>' +
      '<g fill="#ffffff"><circle cx="48" cy="18" r="3.2"/><circle cx="272" cy="20" r="3.4"/></g>' +
      staff + voices +
      '<g transform="translate(160 60) scale(1.6) translate(-160 -50)">' +
      bell(140, 40, -14) + bell(180, 40, 14) +
      '<path d="M160 34 q-16 -14 -20 0 q4 8 20 0Z M160 34 q16 -14 20 0 q-4 8 -20 0Z" fill="#ffffff" stroke="#e7c9cf"/>' +
      '<path d="M158 36 l-7 16 M162 36 l7 16" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"/><circle cx="160" cy="34" r="3" fill="#f2b3c0"/>' +
      '</g>' +
      '<g fill="#c08a3e"><path d="M110 30 l1.4 3.4 3.4 1.4 -3.4 1.4 -1.4 3.4 -1.4 -3.4 -3.4 -1.4 3.4 -1.4Z"/><path d="M212 26 l1.2 3 3 1.2 -3 1.2 -1.2 3 -1.2 -3 -3 -1.2 3 -1.2Z"/></g>' +
      '</svg>';
  })();

  // 사랑의 인사 — 하트 봉인을 한 연애편지, 작은 장미 꽃다발, 떠오르는 하트
  A.letter = (function () {
    var heart = function (x, y, sc, c, op) { return '<path transform="translate(' + x + ' ' + y + ') scale(' + sc + ')" d="M0 4 C-4 -4 -14 -2 -12 7 C-10 14 0 18 0 22 C0 18 10 14 12 7 C14 -2 4 -4 0 4Z" fill="' + c + '" opacity="' + (op || 1) + '"/>'; };
    var rose = function (x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="6" fill="#c8102e"/><circle cx="' + (x - 2) + '" cy="' + (y - 2) + '" r="3.4" fill="#e0304b"/><path d="M' + (x - 2.5) + ' ' + y + ' q2.5 -3 5 0" fill="none" stroke="#8a0a20" stroke-width="1"/>'; };
    return '<svg viewBox="0 0 320 150" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<defs><linearGradient id="lt-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdeef0"/><stop offset="1" stop-color="#f5c3cc"/></linearGradient></defs>' +
      '<rect width="320" height="150" fill="url(#lt-bg)"/>' +
      heart(60, 26, .7, '#ef8fa0', .7) + heart(262, 20, .9, '#ef8fa0', .6) + heart(240, 104, .55, '#ffffff', .8) + heart(78, 100, .5, '#ffffff', .8) +
      // 편지지(봉투 위로 살짝 나옴)
      '<g transform="rotate(-6 160 80)">' +
      '<rect x="118" y="34" width="84" height="60" rx="3" fill="#fffdf7" stroke="#ead7c4"/>' +
      '<path d="M128 46 H192 M128 54 H186 M128 62 H190" stroke="#c9a6a0" stroke-width="1.3" stroke-linecap="round"/>' +
      // 봉투
      '<rect x="108" y="62" width="104" height="62" rx="4" fill="#ffffff" stroke="#e5cfd3"/>' +
      '<path d="M108 66 L160 100 L212 66" fill="none" stroke="#e5cfd3" stroke-width="1.6"/>' +
      '<path d="M108 124 L148 92 M212 124 L172 92" stroke="#f0dde1" stroke-width="1.2"/>' +
      heart(160, 88, .62, '#c0243d') +
      '</g>' +
      // 장미 꽃다발
      '<path d="M98 132 L86 104 M98 132 L96 100 M98 132 L108 104" stroke="#3f7a3a" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M88 116 q-8 -2 -10 -8 q8 0 10 8Z M104 116 q8 -2 10 -8 q-8 0 -10 8Z" fill="#4d8b45"/>' +
      rose(86, 100) + rose(97, 95) + rose(109, 101) +
      '<path d="M91 124 L105 124 L101 132 L95 132Z" fill="#f6d9a0"/>' +
      '</svg>';
  })();

  // 곡 목록의 작은 정사각형 그림에서 보여 줄 가로 시작 위치 (그림 폭 320 중 150 만큼 보임)
  A.thumbX = { autumn: 20, ocean: 66, grandpa: 40, graduation: 85, toreador: 140, waltz: 100, candle: 85, together: 85, tango: 92, bells: 85, letter: 70 };

  window.ART = A;
})();
