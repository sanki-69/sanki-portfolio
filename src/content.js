// All site text, in English and Mongolian, following the CV (CV-Erdene-Tuvshinsanaa-new.pdf).
// Edit here to change what the site says.

export const EMAIL = 'sanki0715@gmail.com'
export const PHONE = '+976 9596 6907'
export const PHONE_LINK = 'tel:+97695966907'

export const content = {
  en: {
    fullName: 'Tuvshinsanaa Erdene',
    nick: 'Sanki',
    title: 'Developer & UI/UX Designer',
    nav: { about: 'About', work: 'Work', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    headline: ['Developer &', 'UI/UX Designer'],
    sub: "Hi, I'm Tuvshinsanaa (Sanki), a Computer Science graduate from MUST.",
    open: 'Open to work',
    contactBtn: 'Contact me',
    langLabel: 'Language',

    aboutL: 'About',
    aboutHead: 'A developer building web app systems with React, MongoDB and Python.',
    about: [
      'I graduated in Computer Science from MUST in 2026. For my thesis I built an AI-powered shopping chatbot for Mongolian users and defended it successfully.',
    ],
    stats: [
      ['2026', 'B.Sc. Computer Science, MUST'],
      ['3.04', 'GPA'],
      ['2025', 'Internship, iTrip LLC'],
    ],
    facts: [
      'Figma by day, Python by night',
      'Builds for Mongolian users',
      "Sings when no one's listening",
    ],
    cols: [
      { label: 'Roles I want', items: ['Frontend Developer', 'UI/UX Designer', 'AI Developer'] },
      { label: 'Personal skills', items: ['Teamwork', 'Communication', 'Responsibility', 'Initiative', 'Working under pressure'] },
      { label: 'Interests', items: ['Chess', 'Volleyball', 'Table tennis', 'Cycling', 'Swimming', 'Singing'] },
    ],

    workL: 'Selected work',
    workHead: 'Projects: AI Shop and ClutchZone.',
    live: 'Visit live site',
    projects: [
      {
        id: 'w-chatbot', yr: '2026', title: 'AI Shop',
        role: 'AI-powered online shopping chatbot · Bachelor thesis',
        points: [
          'Built a web system for Mongolian users with product search, translation, an advisory chatbot and price comparison.',
          'Developed a browser extension that collects product data from foreign online stores and explains it in Mongolian.',
          'Integrated an AI API into a chatbot that gives product advice in Mongolian.',
          'Owned every stage: planning, development, testing and documentation.',
        ],
        stack: ['React', 'TypeScript', 'Python', 'AI API', 'MongoDB', 'Browser Extension'],
        url: 'https://aishop-rho.vercel.app',
        image: 'aishop',
      },
      {
        id: 'w-clutchzone', yr: '2026', title: 'ClutchZone',
        role: 'Online shop for gaming gear · Ulaanbaatar',
        points: [
          'An online shop for gaming gear such as mouse cases, mousepads, skates and grip tape, with category filters.',
          'Products and prices load from a REST API, and every order is saved through it.',
          'The cart removes the delivery fee automatically at three or more items.',
          'Checkout copies the order text and opens a Messenger chat, so customers order in one step.',
        ],
        stack: ['React', 'Vite', 'REST API', 'Render'],
        url: 'https://clutchzone.ub.mn',
        image: 'clutchzone',
      },
    ],

    expL: 'Experience',
    expHead: 'Experience and education.',
    timeline: [
      {
        when: '2025', org: 'iTrip LLC', role: 'Professional intern (UI/UX, Frontend)',
        points: [
          'Redesigned the Flight Search Results UI/UX for the ZUGA project in Figma and proposed UX improvements.',
          'Researched and proposed React Virtuoso, a virtualized list, to render large flight datasets fast.',
          'Built a To-Do List web app in React.',
          'Coordinated design and development with the team to meet requirements.',
        ],
      },
      {
        when: '2022 – 2026', org: 'Mongolian University of Science and Technology (MUST)', role: 'B.Sc. Computer Science · GPA 3.04',
        points: [],
      },
    ],

    skillsL: 'Skills',
    skillsHead: 'What I work with.',
    groups: [
      { label: 'Programming languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'] },
      { label: 'Frontend', items: ['React', 'Next.js', 'React Virtuoso'] },
      { label: 'Backend & databases', items: ['FastAPI', 'REST API', 'MongoDB', 'PostgreSQL'] },
      { label: 'Artificial intelligence', items: ['Large language models (LLM)', 'AI API integration', 'Chatbot development'] },
      { label: 'Design', items: ['Figma', 'UI/UX design'] },
      { label: 'Languages', items: ['English, advanced'] },
    ],

    contactL: 'Contact',
    cta: ['Need a developer', 'who designs?'],
    emailL: 'Email', copy: 'Copy', copied: 'Copied',
    phoneL: 'Phone', locL: 'Based in', loc: 'Ulaanbaatar, Mongolia',
    made: 'Designed and built in Ulaanbaatar', top: 'Back to top',
  },

  mn: {
    fullName: 'Э. Түвшинсанаа',
    nick: 'Санки',
    title: 'Developer & UI/UX Designer',
    nav: { about: 'Миний тухай', work: 'Бүтээл', experience: 'Туршлага', skills: 'Ур чадвар', contact: 'Холбоо барих' },
    headline: ['Developer &', 'UI/UX Designer'],
    sub: 'Сайн байна уу, би Түвшинсанаа (Санки), ШУТИС компьютерийн ухааны төгсөгч.',
    open: 'Ажлын санал хүлээж байна',
    contactBtn: 'Холбогдох',
    langLabel: 'Хэл',

    aboutL: 'Миний тухай',
    aboutHead: 'React, MongoDB, Python дээр суурилсан вэб апп систем хөгжүүлэгч.',
    about: [
      'ШУТИС-ийн Компьютерын ухааны хөтөлбөрийг 2026 онд төгссөн. Бакалаврын ажлаараа Монгол хэрэглэгчдэд зориулсан хиймэл оюунд суурилсан онлайн худалдааны чатботыг бүтээж, амжилттай хамгаалсан.',
    ],
    stats: [
      ['2026', 'Бакалавр, Компьютерын ухаан, ШУТИС'],
      ['3.04', 'Голч дүн'],
      ['2025', 'Мэргэжлийн дадлага, Ай Трип ХХК'],
    ],
    facts: [
      'Өдөр Figma, шөнө Python',
      'Монгол хэрэглэгчдэд зориулж бүтээдэг',
      'Хэн ч сонсохгүй үед дуулдаг',
    ],
    cols: [
      { label: 'Хүсэж буй ажил', items: ['Frontend хөгжүүлэгч', 'UI/UX дизайнер', 'Хиймэл оюуны хөгжүүлэгч'] },
      { label: 'Хувь хүний ур чадвар', items: ['Багаар ажиллах', 'Харилцааны чадвар', 'Хариуцлага', 'Шинийг санаачлах', 'Ачаалалтай орчинд ажиллах'] },
      { label: 'Сонирхол', items: ['Шатар', 'Гар бөмбөг', 'Ширээний теннис', 'Дугуй', 'Усан спорт', 'Дуулах'] },
    ],

    workL: 'projects',
    workHead: 'Төслүүд: AI onlineshop ба ClutchZone.',
    live: 'Сайтыг үзэх',
    projects: [
      {
        id: 'w-chatbot', yr: '2026', title: 'AI Shop',
        role: 'AI онлайн худалдааны чатбот · Бакалаврын ажил',
        points: [
          'Монгол хэрэглэгчдэд зориулсан бүтээгдэхүүн хайлт, орчуулга, зөвлөх чатбот, үнийн харьцуулалт бүхий вэб систем хөгжүүлсэн.',
          'Browser extension хөгжүүлж, гадаадын цахим худалдааны сайтуудаас бүтээгдэхүүний мэдээлэл цуглуулж, Монгол хэлээр тайлбарлах шийдэл хэрэгжүүлсэн.',
          'AI API-г системд нэгтгэж, хэрэглэгчид бүтээгдэхүүний талаар Монгол хэлээр зөвлөгөө өгөх чатбот бүтээсэн.',
          'Төлөвлөлт, хөгжүүлэлт, туршилт, баримтжуулалтын бүх үе шатыг хариуцаж гүйцэтгэсэн.',
        ],
        stack: ['React', 'TypeScript', 'Python', 'AI API', 'MongoDB', 'Browser Extension'],
        url: 'https://aishop-rho.vercel.app',
        image: 'aishop',
      },
      {
        id: 'w-clutchzone', yr: '2026', title: 'ClutchZone',
        role: 'Тоглоомын хэрэгслийн онлайн дэлгүүр · Улаанбаатар',
        points: [
          'Mouse case, mousepad, skate, griptape зэрэг тоглоомын хэрэгслийг ангиллаар шүүж үздэг онлайн дэлгүүр.',
          'Бараа, үнийн мэдээллийг REST API-аас ачаалж, захиалга бүрийг API-аар бүртгэдэг.',
          '3 болон түүнээс дээш бараа авахад сагс хүргэлтийн төлбөрийг автоматаар хасдаг.',
          'Захиалгын текстийг автоматаар хуулж, Messenger чат нээдэг тул хэрэглэгч нэг алхмаар захиална.',
        ],
        stack: ['React', 'Vite', 'REST API', 'Render'],
        url: 'https://clutchzone.ub.mn',
        image: 'clutchzone',
      },
    ],

    expL: 'Туршлага',
    expHead: 'Ажлын туршлага ба боловсрол.',
    timeline: [
      {
        when: '2025', org: '«Ай Трип» ХХК', role: 'Мэргэжлийн дадлагажигч (UI/UX, Frontend)',
        points: [
          'Figma ашиглан ZUGA төслийн V2-ийн (UI/UX) шинэчлэлт сайжруулантанд дээр ажилсан.',
          'Их хэмжээний нислэгийн өгөгдлийг хурдан харуулах React Virtuoso (virtualized list) шийдлийг судалж, санал болгосон.',
          'React дээр To-Do List вэб програм хөгжүүлсэн.',
          'Дизайн, хөгжүүлэлтийн ажлыг багтайгаа шаардлагын дагуу уялдуулсан.',
        ],
      },
      {
        when: '2022 – 2026', org: 'Шинжлэх Ухаан, Технологийн Их Сургууль (ШУТИС)', role: 'Бакалавр, Компьютерын ухаан · Голч дүн 3.04',
        points: [],
      },
    ],

    skillsL: 'Ур чадвар',
    skillsHead: 'Ашигладаг технологиуд.',
    groups: [
      { label: 'Програмчлалын хэл', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'] },
      { label: 'Frontend', items: ['React', 'Next.js', 'React Virtuoso'] },
      { label: 'Backend, өгөгдлийн сан', items: ['FastAPI', 'REST API', 'MongoDB', 'PostgreSQL'] },
      { label: 'Хиймэл оюун', items: ['Том хэлний загвар (LLM)', 'AI API интеграци', 'Чатбот хөгжүүлэлт'] },
      { label: 'Дизайн', items: ['Figma', 'UI/UX дизайн'] },
      { label: 'Гадаад хэл', items: ['Англи хэл, ахисан түвшин'] },
    ],

    contactL: 'Холбоо барих',
    cta: ['Дизайн хийдэг', 'хөгжүүлэгч хэрэгтэй юу?'],
    emailL: 'Имэйл', copy: 'Хуулах', copied: 'Хуулсан',
    phoneL: 'Утас', locL: 'Байршил', loc: 'Улаанбаатар, Монгол',
    made: 'Улаанбаатарт зохиож бүтээв', top: 'Дээш буцах',
  },
}
