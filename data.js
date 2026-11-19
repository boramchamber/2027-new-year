/*
 * 초대장 내용은 이 파일만 고치면 됩니다.
 * - 값을 '' (빈칸)으로 두면 초대장에서 그 줄이 보이지 않습니다.
 * - 곡을 추가할 때는 program 목록에 { title, note, composer, art, desc } 한 묶음을 더 넣습니다.
 * - 그림(art.js)·화면 모양(index.html)은 따로 있고, 글자·곡목은 여기만 고치면 됩니다.
 * - 카카오톡 미리보기 제목·설명은 index.html 위쪽 og: 줄에서 따로 고칩니다.
 */
window.INVITE = {
  orchestra: '보람챔버오케스트라',
  title: '보람챔버 신년음악회',
  subtitle: '2027 NEW YEAR CONCERT',

  date: '2027-01-06',   // 공연 날짜 (YYYY-MM-DD)
  time: '',             // 공연 시간 (예: '19:30') — 미정이면 빈칸
  doorsOpen: '',        // 입장 시작 시간 (예: '19:00') — 없으면 빈칸

  venue: {
    name: '',           // 공연장 이름 — 미정이면 빈칸 ("추후 안내"로 표시)
    address: '',        // 주소 — 넣으면 지도 바로가기 버튼이 나타납니다
    parking: ''         // 주차 안내 — 없으면 빈칸
  },

  admission: '무료',

  greeting: [
    // 작은 폰에서도 한 줄에 들어가도록 한 줄을 짧게(공백 포함 20자 안팎) 씁니다
    '새해의 첫 선율을 함께 나누고 싶습니다.',
    '음악이 좋아 모인 단원들이',
    '정성껏 준비한 무대를 선보입니다.',
    '귀한 걸음 하시어',
    '따뜻한 박수로 함께해 주세요.'
  ],

  // 묶음(group)별 곡 목록. 곡 순서 = 초대장에 보이는 순서
  // - composer : 작곡가를 모르면 '' (화면에 안 보임)
  // - desc     : 일반 관객용 쉬운 설명 1~2문장. 사실로 확인된 것만 씁니다.
  // - art      : 곡 그림 이름 (art.js) — autumn·ocean·grandpa·graduation·toreador·waltz·candle·together
  program: [
    {
      group: '전체 합주',
      en: 'Tutti',
      desc: '단원 모두가 함께 들려드리는 무대입니다.',
      pieces: [
        { title: 'The Ludlows', note: '영화 〈가을의 전설〉 OST', composer: 'J. Horner', art: 'autumn',
          desc: '브래드 피트가 주연한 영화 〈가을의 전설〉의 대표 선율이에요. 끝없는 들판과 붉은 가을 노을이 떠오르는, 웅장하면서도 그리운 음악입니다.' },
        { title: "How Far I'll Go", note: '디즈니 〈모아나〉 OST', composer: 'L. M. Miranda', art: 'ocean',
          desc: '바다 너머 더 먼 곳으로 나아가고 싶은 소녀 모아나의 마음을 담은 노래예요. 새해, 새로운 꿈을 꾸는 모든 분께 드립니다.' },
        { title: "Grandpapa's Eleven Month", note: '할아버지의 11개월', composer: '', art: 'grandpa',
          desc: "제목은 '할아버지의 11개월'이라는 뜻이에요. 할아버지와 함께한 계절을 떠올리며 들어 보세요." },
        { title: 'Pomp and Circumstance', note: '위풍당당 행진곡', composer: 'E. Elgar', art: 'graduation',
          desc: '졸업식에서 한 번쯤 들어 보셨을 바로 그 곡! 영국 작곡가 엘가의 행진곡으로, 새 출발을 축하하는 당당한 선율입니다.' },
        { title: 'The Toreadors', note: '오페라 〈카르멘〉 중', composer: 'G. Bizet', art: 'toreador',
          desc: '오페라 〈카르멘〉에서 투우사들이 경기장에 들어서는 장면의 음악이에요. 신나는 리듬에 저절로 박수가 나옵니다.' }
      ]
    },
    {
      group: '앙상블',
      en: 'Ensemble',
      desc: '몇 명의 단원이 작은 편성으로 들려드리는 무대입니다.',
      pieces: [
        { title: 'The Last Waltz', note: '영화 〈올드보이〉 OST', composer: '', art: 'waltz',
          desc: '영화 〈올드보이〉에 흐르는 왈츠예요. 쿵-짝-짝, 세 박자에 맞춰 춤추듯 흐르는 선율이 애틋하게 마음을 울립니다.' },
        { title: 'Ave Maria', note: '', composer: '', art: 'candle',
          desc: "'아베 마리아'는 라틴어로 '마리아님, 기뻐하소서'라는 기도의 첫마디예요. 촛불을 켜 둔 듯 고요하고 따뜻한 노래입니다." },
        { title: '사랑으로', note: '', composer: '', art: 'together',
          desc: "'내가 살아가는 동안에 할 일이 또 하나 있지' — 많은 분이 따라 부를 수 있는 우리 노래예요. 서로를 아끼는 마음을 담아 들려드립니다." }
      ]
    }
  ],
  programNote: '곡목은 변경될 수 있습니다.',

  conductor: {
    name: '윤영일',
    // 약력 — 한 줄에 한 항목씩 넣습니다. 비워 두면 초대장에 약력 줄이 보이지 않습니다.
    profile: [
      // '○○대학교 음악대학 졸업',
    ]
  },

  performers: [
    // { role: '지휘', name: '홍길동' },
  ],

  contact: ''           // 문의처 (예: '문의 · 인스타그램 @boramchamber') — 없으면 빈칸
};
