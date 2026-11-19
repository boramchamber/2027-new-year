/*
 * 초대장 내용은 이 파일만 고치면 됩니다.
 * - 값을 '' (빈칸)으로 두면 초대장에서 그 줄이 보이지 않습니다.
 * - 곡을 추가할 때는 program 목록에 { title: '...', note: '...', composer: '...' }, 한 줄을 더 넣습니다.
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
  // 작곡가를 모르면 composer 를 '' 로 둡니다 (화면에 안 보임)
  program: [
    {
      group: '전체 합주',
      pieces: [
        { title: 'The Ludlows', note: '영화 〈가을의 전설〉 OST', composer: 'J. Horner' },
        { title: "How Far I'll Go", note: '디즈니 〈모아나〉 OST', composer: 'L. M. Miranda' },
        { title: "Grandpapa's Eleven Month", note: '할아버지의 11개월', composer: '' },
        { title: 'Pomp and Circumstance', note: '위풍당당 행진곡', composer: 'E. Elgar' },
        { title: 'The Toreadors', note: '오페라 〈카르멘〉 중', composer: 'G. Bizet' }
      ]
    },
    {
      group: '앙상블',
      pieces: [
        { title: 'The Last Waltz', note: '영화 〈올드보이〉 OST', composer: '' },
        { title: 'Ave Maria', note: '', composer: '' },
        { title: '사랑으로', note: '', composer: '' }
      ]
    }
  ],
  programNote: '곡목은 변경될 수 있습니다.',

  performers: [
    // { role: '지휘', name: '홍길동' },
  ],

  contact: ''           // 문의처 (예: '문의 · 인스타그램 @boramchamber') — 없으면 빈칸
};
