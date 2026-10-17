/**
 * PREPOSITIONS - Quiz Application Logic
 * Trường Cao đẳng Công nghệ Thủ Đức (TDC)
 * 
 * Features:
 * - 20 Comprehensive Questions on English Prepositions
 * - Single docked frame on Mobile & iPad
 * - Strictly NO hints during test; Detailed explanations & Vietnamese translations post-submission
 * - Live Visitor Counter & Student Sign-in Tracking for GitHub deployment
 * - Teacher Admin Panel with CSV export
 */

// 20-Question Data Array
const QUIZ_DATA = [
  {
    id: 1,
    question: "1. More and more rare animals are ________ danger of extinction.",
    options: [
      { key: "A", text: "for" },
      { key: "B", text: "on" },
      { key: "C", text: "at" },
      { key: "D", text: "in" }
    ],
    answer: "D",
    translation: "Ngày càng có nhiều loài động vật quý hiếm đang đứng trước nguy cơ tuyệt chủng.",
    explanation: "Cụm cố định (Collocation): 'in danger of (something/extinction)' có nghĩa là đang gặp nguy hiểm, có nguy cơ (bị tuyệt chủng). Ngược lại là cụm 'out of danger' (đã qua cơn nguy hiểm). Không dùng các giới từ khác như 'for', 'on' hay 'at' với cụm từ này."
  },
  {
    id: 2,
    question: "2. He may be quick________ understanding but he isn’t capable ________ remembering anything.",
    options: [
      { key: "A", text: "at, of" },
      { key: "B", text: "in, of" },
      { key: "C", text: "on, at" },
      { key: "D", text: "of, at" }
    ],
    answer: "A",
    translation: "Anh ấy có thể nhanh hiểu bài nhưng lại không có khả năng ghi nhớ bất cứ điều gì.",
    explanation: "• Vế 1: Cấu trúc tính từ 'quick at (doing) something' có nghĩa là nhanh nhẹn, tiếp thu nhanh trong việc gì (ở đây là 'understanding' - hiểu bài/hiểu vấn đề).\n• Vế 2: Cấu trúc cố định 'capable of + V-ing/noun' mang nghĩa là có năng lực, khả năng làm việc gì.\nDo đó kết hợp cả hai vế là cặp giới từ 'at, of' (Đáp án A)."
  },
  {
    id: 3,
    question: "3. According to the boss, John is the most suitable ________ the position of executive secretary.",
    options: [
      { key: "A", text: "about" },
      { key: "B", text: "with" },
      { key: "C", text: "for" },
      { key: "D", text: "of" }
    ],
    answer: "C",
    translation: "Theo lời sếp, John là người phù hợp nhất cho vị trí thư ký điều hành.",
    explanation: "Cấu trúc tính từ đi với giới từ: 'suitable for somebody/something' mang nghĩa là phù hợp, thích hợp cho một công việc, vị trí hoặc mục đích cụ thể nào đó. Các giới từ như 'about', 'with', 'of' không kết hợp với 'suitable' trong ngữ cảnh này."
  },
  {
    id: 4,
    question: "4. The teacher explained the competition’s rules ________ the students very carefully.",
    options: [
      { key: "A", text: "to" },
      { key: "B", text: "with" },
      { key: "C", text: "for" },
      { key: "D", text: "of" }
    ],
    answer: "A",
    translation: "Giáo viên đã giải thích các quy định của cuộc thi cho các bạn học sinh một cách rất cẩn thận.",
    explanation: "Cấu trúc động từ: 'explain something TO somebody' nghĩa là giải thích, giảng giải điều gì cho ai nghe. Lưu ý rất hay gặp trong đề thi: tiếng Việt hay nói 'giải thích với ai' nhưng trong tiếng Anh bắt buộc phải dùng giới từ 'to', không dùng 'with' hay 'for'."
  },
  {
    id: 5,
    question: "5. It was most generous ________ you to lend me the money.",
    options: [
      { key: "A", text: "for" },
      { key: "B", text: "of" },
      { key: "C", text: "with" },
      { key: "D", text: "from" }
    ],
    answer: "B",
    translation: "Bạn thật là hào phóng khi đã cho tôi mượn số tiền đó.",
    explanation: "Cấu trúc câu đánh giá tính cách, phẩm chất của một người: 'It is/was + [Tính từ chỉ tính cách, thái độ] + OF somebody + to-V' (Thật là... đối với ai đó khi đã làm gì). Các tính từ như: generous, kind, nice, polite, rude, careless... luôn đi với giới từ 'of'. Do đó đáp án đúng là B. of."
  },
  {
    id: 6,
    question: "6. He apologized ________not being able to complete the poem.",
    options: [
      { key: "A", text: "in" },
      { key: "B", text: "to" },
      { key: "C", text: "at" },
      { key: "D", text: "for" }
    ],
    answer: "D",
    translation: "Anh ấy đã xin lỗi vì không thể hoàn thành bài thơ.",
    explanation: "Cấu trúc động từ xin lỗi: 'apologize (to somebody) FOR (doing) something' nghĩa là xin lỗi (ai) vì chuyện gì/vì đã làm gì. Phía sau là hành động 'not being able to complete the poem' (lý do xin lỗi) nên ta dùng giới từ 'for'."
  },
  {
    id: 7,
    question: "7. They had met ________ chance at university and finished up getting married.",
    options: [
      { key: "A", text: "on" },
      { key: "B", text: "in" },
      { key: "C", text: "at" },
      { key: "D", text: "by" }
    ],
    answer: "D",
    translation: "Họ tình cờ gặp nhau ở trường đại học và cuối cùng đã tiến tới hôn nhân.",
    explanation: "Cụm trạng từ cố định (Fixed idiom): 'by chance' (đồng nghĩa với 'by accident') có nghĩa là tình cờ, ngẫu nhiên, không sắp đặt trước. Trái nghĩa với nó là cụm 'on purpose' (cố ý). Do đó đáp án chính xác là D. by."
  },
  {
    id: 8,
    question: "8. We don’t approve ________ hunting animals for sport.",
    options: [
      { key: "A", text: "on" },
      { key: "B", text: "of" },
      { key: "C", text: "with" },
      { key: "D", text: "to" }
    ],
    answer: "B",
    translation: "Chúng tôi không tán thành việc săn bắn động vật để làm trò tiêu khiển.",
    explanation: "Cấu trúc động từ đi kèm giới từ: 'approve OF somebody/something / doing something' có nghĩa là tán thành, đồng ý hoặc ủng hộ việc gì. Trái nghĩa là 'disapprove of'. Động từ 'approve' không đi với 'on', 'with' hay 'to'."
  },
  {
    id: 9,
    question: "9. In England, schooling is compulsory ________ all children from the age of 5 to 16.",
    options: [
      { key: "A", text: "to" },
      { key: "B", text: "from" },
      { key: "C", text: "for" },
      { key: "D", text: "of" }
    ],
    answer: "C",
    translation: "Ở nước Anh, việc đi học là bắt buộc đối với tất cả trẻ em từ 5 đến 16 tuổi.",
    explanation: "Cấu trúc tính từ: 'compulsory FOR somebody' nghĩa là mang tính bắt buộc đối với đối tượng nào. 'Compulsory' mang nghĩa cưỡng bách, bắt buộc (trái nghĩa với 'optional' - tự chọn). Đi kèm với đối tượng chịu sự áp dụng quy định là giới từ 'for'."
  },
  {
    id: 10,
    question: "10. Many women today prefer wearing modern clothing ________ traditional clothing.",
    options: [
      { key: "A", text: "to" },
      { key: "B", text: "with" },
      { key: "C", text: "from" },
      { key: "D", text: "on" }
    ],
    answer: "A",
    translation: "Nhiều phụ nữ ngày nay thích mặc trang phục hiện đại hơn trang phục truyền thống.",
    explanation: "Cấu trúc so sánh sở thích: 'prefer something TO something' hoặc 'prefer V-ing TO V-ing' (thích cái gì hơn cái gì). Trong tiếng Anh chuẩn, cấu trúc với 'prefer' dùng giới từ 'to' để liên kết đối tượng được so sánh, không dùng 'than' hay 'with/from'. Do đó đáp án đúng là A. to."
  },
  {
    id: 11,
    question: "11. We all agree ________you. Let’s start ________ once.",
    options: [
      { key: "A", text: "with, at" },
      { key: "B", text: "to, to" },
      { key: "C", text: "for, in" },
      { key: "D", text: "on, with" }
    ],
    answer: "A",
    translation: "Tất cả chúng tôi đều đồng ý với bạn. Chúng ta hãy bắt đầu ngay lập tức nhé.",
    explanation: "• Vế 1: Động từ 'agree WITH somebody' có nghĩa là tán thành, đồng ý với quan điểm của ai đó.\n• Vế 2: Thành ngữ chỉ thời gian 'at once' mang nghĩa là ngay lập tức, không chậm trễ (tương đương 'immediately').\nDo đó kết hợp cả hai vế là cặp giới từ 'with, at' (Đáp án A)."
  },
  {
    id: 12,
    question: "12. We are all responsible ________ keeping the environment clean and clear.",
    options: [
      { key: "A", text: "for" },
      { key: "B", text: "of" },
      { key: "C", text: "to" },
      { key: "D", text: "about" }
    ],
    answer: "A",
    translation: "Tất cả chúng ta đều có trách nhiệm giữ gìn môi trường trong lành và sạch đẹp.",
    explanation: "Cấu trúc tính từ: 'responsible FOR something / doing something' nghĩa là chịu trách nhiệm về việc gì hoặc một nhiệm vụ nào đó. (Lưu ý: 'responsible to somebody' nghĩa là báo cáo, chịu trách nhiệm trước ai/cấp trên). Ở đây phía sau là việc giữ gìn môi trường nên dùng 'for'."
  },
  {
    id: 13,
    question: "13. Please fill the glass ________ cold water.",
    options: [
      { key: "A", text: "for" },
      { key: "B", text: "with" },
      { key: "C", text: "of" },
      { key: "D", text: "to" }
    ],
    answer: "B",
    translation: "Làm ơn hãy rót đầy ly nước này bằng nước lạnh.",
    explanation: "Cấu trúc động từ: 'fill something WITH something' nghĩa là đổ đầy, rót đầy hoặc lấp đầy vật gì bằng chất liệu/chất lỏng gì. (Lưu ý tránh nhầm với tính từ 'full of': The glass is full OF cold water). Do đó đáp án chính xác là B. with."
  },
  {
    id: 14,
    question: "14. I’m sure you are tired ________ doing this work.",
    options: [
      { key: "A", text: "of" },
      { key: "B", text: "for" },
      { key: "C", text: "from" },
      { key: "D", text: "to" }
    ],
    answer: "A",
    translation: "Tôi chắc chắn rằng bạn đã cảm thấy chán ngấy với việc làm công việc này.",
    explanation: "Cụm tính từ quen thuộc: 'tired OF (doing) something' có nghĩa là chán ngấy, ngán ngẩm, không còn hứng thú với việc gì lặp đi lặp lại. (Phân biệt với 'tired from' là mệt mỏi về thể xác do lao động). Do đó đáp án là A. of."
  },
  {
    id: 15,
    question: "15. Our discussion turned ________ a big fight.",
    options: [
      { key: "A", text: "in" },
      { key: "B", text: "to" },
      { key: "C", text: "at" },
      { key: "D", text: "into" }
    ],
    answer: "D",
    translation: "Cuộc thảo luận của chúng tôi đã biến thành một trận cãi vã lớn.",
    explanation: "Cụm động từ (Phrasal Verb): 'turn into something' có nghĩa là biến đổi, chuyển biến thành một trạng thái hoặc sự vật khác (ở đây từ một cuộc thảo luận biến tướng thành một trận tranh cãi/ẩu đả gay gắt). Do đó chọn D. into."
  },
  {
    id: 16,
    question: "16. His colleague was convicted ________ theft.",
    options: [
      { key: "A", text: "by" },
      { key: "B", text: "of" },
      { key: "C", text: "with" },
      { key: "D", text: "into" }
    ],
    answer: "B",
    translation: "Đồng nghiệp của anh ấy đã bị kết án về tội trộm cắp.",
    explanation: "Cấu trúc pháp lý: 'to convict somebody OF a crime' nghĩa là tuyên án, kết tội ai về một tội danh nào đó. Ở dạng bị động: 'be convicted OF something' (bị kết án phạm tội gì). Do đó giới từ chuẩn xác là B. of."
  },
  {
    id: 17,
    question: "17. These classes are different ________ other classes because the students are disabled.",
    options: [
      { key: "A", text: "in" },
      { key: "B", text: "of" },
      { key: "C", text: "from" },
      { key: "D", text: "with" }
    ],
    answer: "C",
    translation: "Những lớp học này khác biệt so với các lớp học khác vì học sinh ở đây là người khuyết tật.",
    explanation: "Cấu trúc tính từ so sánh khác biệt: 'different FROM somebody/something' có nghĩa là khác biệt, không giống với ai hay cái gì. Cụm từ chuẩn mực và phổ biến nhất trong tiếng Anh là 'different from'. Do đó đáp án là C. from."
  },
  {
    id: 18,
    question: "18. Their parents seemed satisfied ________ their progress.",
    options: [
      { key: "A", text: "with" },
      { key: "B", text: "to" },
      { key: "C", text: "in" },
      { key: "D", text: "at" }
    ],
    answer: "A",
    translation: "Bố mẹ của họ có vẻ rất hài lòng với sự tiến bộ của họ.",
    explanation: "Cấu trúc tính từ miêu tả cảm xúc, thái độ: 'satisfied WITH something' có nghĩa là cảm thấy hài lòng, vừa ý hoặc thỏa mãn với một kết quả, thành tích nào đó. Do đó đáp án chính xác là A. with."
  },
  {
    id: 19,
    question: "19. Whether or not you're given a car depends ________ your position in the company.",
    options: [
      { key: "A", text: "for" },
      { key: "B", text: "of" },
      { key: "C", text: "in" },
      { key: "D", text: "on" }
    ],
    answer: "D",
    translation: "Việc bạn có được cấp xe hơi hay không tùy thuộc vào chức vụ của bạn trong công ty.",
    explanation: "Cấu trúc động từ đi kèm giới từ: 'depend ON somebody/something' có nghĩa là phụ thuộc vào, tùy thuộc vào điều gì hoặc ai đó. (Đôi khi có thể dùng 'upon', nhưng không bao giờ dùng 'for', 'of', hay 'in'). Do đó đáp án là D. on."
  },
  {
    id: 20,
    question: "20. He’s color-blind and can’t distinguish ________ red ________ green easily.",
    options: [
      { key: "A", text: "both, and" },
      { key: "B", text: "between, and" },
      { key: "C", text: "from, to" },
      { key: "D", text: "neither, nor" }
    ],
    answer: "B",
    translation: "Anh ấy bị mù màu nên không thể dễ dàng phân biệt được giữa màu đỏ và màu xanh lá cây.",
    explanation: "Cấu trúc động từ phân biệt: 'distinguish BETWEEN A AND B' có nghĩa là phân biệt sự khác nhau giữa hai đối tượng A và B. (Ngoài ra còn có cấu trúc 'distinguish A from B', nhưng phương án C lại viết 'from, to' là không chính xác). Do đó đáp án đúng là B. between, and."
  }
];

// ==========================================================================
// STATE MANAGEMENT
// ==========================================================================
const state = {
  currentIndex: 0,
  userAnswers: new Array(QUIZ_DATA.length).fill(null),
  isSubmitted: false,
  timerSeconds: 0,
  timerInterval: null,
  theme: "light",
  viewMode: "desktop",
  visitCount: 0,
  student: {
    name: "Sinh viên TDC",
    id: "",
    className: ""
  }
};

// DOM Elements
const elements = {
  appRoot: document.getElementById("app-root"),
  visitorCountText: document.getElementById("visitor-count-text"),
  studentNameTag: document.getElementById("student-name-tag"),
  avatarCircle: document.getElementById("avatar-circle"),
  btnEditStudent: document.getElementById("btn-edit-student"),
  timerDisplay: document.getElementById("timer-display"),
  themeToggle: document.getElementById("btn-theme-toggle"),
  themeIcon: document.getElementById("theme-icon"),

  // Progress & Navigator
  answeredCount: document.getElementById("answered-count"),
  progressBarFill: document.getElementById("progress-bar-fill"),
  questionPillGrid: document.getElementById("question-pill-grid"),

  // Question Card (Single Frame)
  currentQBadge: document.getElementById("current-q-badge"),
  statusTag: document.getElementById("status-tag"),
  questionText: document.getElementById("question-text"),
  optionsGroup: document.getElementById("options-group"),
  explanationBox: document.getElementById("explanation-box"),
  expBadge: document.getElementById("exp-badge"),
  expTranslation: document.getElementById("exp-translation"),
  expExplanation: document.getElementById("exp-explanation"),

  // Buttons inside Card
  btnPrev: document.getElementById("btn-prev"),
  btnNext: document.getElementById("btn-next"),
  btnSubmit: document.getElementById("btn-submit"),
  btnQuickSubmit: document.getElementById("btn-quick-submit"),

  // Modals
  resultModal: document.getElementById("result-modal"),
  confirmModal: document.getElementById("confirm-modal"),
  studentModal: document.getElementById("student-modal"),
  adminModal: document.getElementById("admin-modal"),
  fullReviewModal: document.getElementById("full-review-modal"),

  // Result Elements
  resultScore: document.getElementById("result-score"),
  resultRating: document.getElementById("result-rating"),
  statCorrect: document.getElementById("stat-correct"),
  statWrong: document.getElementById("stat-wrong"),
  statTime: document.getElementById("stat-time"),
  breakdownGrid: document.getElementById("breakdown-grid"),

  // Student Form
  inputStudentName: document.getElementById("input-student-name"),
  inputStudentId: document.getElementById("input-student-id"),
  inputStudentClass: document.getElementById("input-student-class"),
  formStudent: document.getElementById("form-student")
};

// ==========================================================================
// VISITOR TRACKING & STORAGE
// ==========================================================================
const STORAGE_PREFIX = "tdc_prepositions_";
const STORAGE_KEY_VISITS = `${STORAGE_PREFIX}visits_count`;
const STORAGE_KEY_SESSION = `${STORAGE_PREFIX}has_visited`;
const STORAGE_KEY_SUBMISSIONS = `${STORAGE_PREFIX}submissions`;
const STORAGE_KEY_STUDENT = `${STORAGE_PREFIX}current_student`;
const STORAGE_KEY_THEME = `${STORAGE_PREFIX}theme`;

async function initVisitorTracking() {
  let localVisits = parseInt(localStorage.getItem(STORAGE_KEY_VISITS) || "135", 10);

  // If new browser session, increment local count
  if (!sessionStorage.getItem(STORAGE_KEY_SESSION)) {
    localVisits += 1;
    localStorage.setItem(STORAGE_KEY_VISITS, localVisits.toString());
    sessionStorage.setItem(STORAGE_KEY_SESSION, "true");
  }

  state.visitCount = localVisits;
  if (elements.visitorCountText) {
    elements.visitorCountText.textContent = localVisits.toLocaleString();
  }

  // Load saved student if exists
  const savedStudent = localStorage.getItem(STORAGE_KEY_STUDENT);
  if (savedStudent) {
    try {
      state.student = JSON.parse(savedStudent);
      updateStudentUI();
    } catch (e) {}
  }

  // Attempt to synchronize with public counter API for GitHub Pages live tracking
  try {
    const isNew = !sessionStorage.getItem(`${STORAGE_PREFIX}api_hit_done`);
    const endpoint = isNew 
      ? "https://api.counterapi.dev/v1/tdc_quiz_prepositions_vn/visits/up"
      : "https://api.counterapi.dev/v1/tdc_quiz_prepositions_vn/visits";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const res = await fetch(endpoint, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.count === "number") {
        sessionStorage.setItem(`${STORAGE_PREFIX}api_hit_done`, "true");
        // Keep the higher count between cloud and local
        const cloudCount = Math.max(data.count, localVisits);
        state.visitCount = cloudCount;
        localStorage.setItem(STORAGE_KEY_VISITS, cloudCount.toString());
        if (elements.visitorCountText) {
          elements.visitorCountText.textContent = cloudCount.toLocaleString();
        }
      }
    }
  } catch (err) {
    // Graceful fallback to local counter
  }
}

function recordSubmission(score, total, timeFormatted) {
  const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");

  const record = {
    id: Date.now(),
    name: state.student.name || "Sinh viên TDC",
    studentId: state.student.id || "N/A",
    className: state.student.className || "N/A",
    score: score,
    total: total,
    percentage: Math.round((score / total) * 100),
    timeSpent: timeFormatted,
    date: new Date().toLocaleString("vi-VN")
  };

  submissions.unshift(record);
  localStorage.setItem(STORAGE_KEY_SUBMISSIONS, JSON.stringify(submissions));
}

function updateStudentUI() {
  if (elements.studentNameTag) {
    elements.studentNameTag.textContent = state.student.name || "Sinh viên TDC";
  }
  if (elements.avatarCircle) {
    const firstLetter = (state.student.name || "T").trim().charAt(0).toUpperCase();
    elements.avatarCircle.textContent = firstLetter || "T";
  }
}

function saveStudentProfile(e) {
  if (e) e.preventDefault();
  const name = elements.inputStudentName.value.trim();
  const id = elements.inputStudentId.value.trim();
  const className = elements.inputStudentClass.value.trim();

  state.student = {
    name: name || "Sinh viên TDC",
    id: id,
    className: className
  };

  localStorage.setItem(STORAGE_KEY_STUDENT, JSON.stringify(state.student));
  updateStudentUI();
  elements.studentModal.classList.remove("open");
}

// ==========================================================================
// CORE QUIZ CONTROLLER
// ==========================================================================
function initQuiz() {
  buildNavigatorPills();
  renderQuestion(0);
  startTimer();
  initTheme();
  initVisitorTracking();
  attachEvents();
}

// Build question navigator grid (1 to 20)
function buildNavigatorPills() {
  elements.questionPillGrid.innerHTML = "";
  QUIZ_DATA.forEach((q, idx) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "q-pill";
    pill.id = `q-pill-${idx}`;
    pill.textContent = idx + 1;
    pill.title = `Câu hỏi ${idx + 1}`;
    pill.addEventListener("click", () => {
      goToQuestion(idx);
    });
    elements.questionPillGrid.appendChild(pill);
  });
  updateNavigatorPills();
}

// Update active and answered state of pills
function updateNavigatorPills() {
  QUIZ_DATA.forEach((q, idx) => {
    const pill = document.getElementById(`q-pill-${idx}`);
    if (!pill) return;

    pill.className = "q-pill";
    if (idx === state.currentIndex) {
      pill.classList.add("active");
    }

    if (state.isSubmitted) {
      // Review mode: green if correct, red if wrong
      const userAns = state.userAnswers[idx];
      if (userAns === q.answer) {
        pill.classList.add("correct-pill");
      } else {
        pill.classList.add("wrong-pill");
      }
    } else {
      // Taking quiz mode: green if answered
      if (state.userAnswers[idx] !== null) {
        pill.classList.add("answered");
      }
    }
  });

  // Update progress bar
  const answeredTotal = state.userAnswers.filter(a => a !== null).length;
  elements.answeredCount.textContent = answeredTotal;
  const percent = (answeredTotal / QUIZ_DATA.length) * 100;
  elements.progressBarFill.style.width = `${percent}%`;
}

// Render question and options inside the SINGLE frame
function renderQuestion(index) {
  state.currentIndex = index;
  const qData = QUIZ_DATA[index];

  // Header inside card
  elements.currentQBadge.textContent = `CÂU ${qData.id} / ${QUIZ_DATA.length}`;

  const isAnswered = state.userAnswers[index] !== null;
  if (state.isSubmitted) {
    const isCorrect = state.userAnswers[index] === qData.answer;
    elements.statusTag.className = `status-tag ${isCorrect ? "done" : ""}`;
    elements.statusTag.style.backgroundColor = isCorrect ? "var(--success-light)" : "var(--danger-light)";
    elements.statusTag.style.color = isCorrect ? "var(--success-dark)" : "var(--danger)";
    elements.statusTag.textContent = isCorrect ? "✓ Trả lời Đúng" : "✗ Trả lời Sai";
  } else {
    elements.statusTag.className = `status-tag ${isAnswered ? "done" : ""}`;
    elements.statusTag.style.backgroundColor = "";
    elements.statusTag.style.color = "";
    elements.statusTag.textContent = isAnswered ? "Đã chọn đáp án" : "Chưa làm";
  }

  // Question Text (Strictly NO hints during quiz)
  elements.questionText.textContent = qData.question;

  // Options List inside the SAME frame
  elements.optionsGroup.innerHTML = "";
  const selectedKey = state.userAnswers[index];

  qData.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option-btn";
    btn.dataset.key = opt.key;

    let badgeHtml = "";

    if (state.isSubmitted) {
      btn.disabled = true;
      if (opt.key === qData.answer) {
        btn.classList.add("correct");
        badgeHtml = `<span class="answer-badge badge-correct">✓ Đáp án đúng</span>`;
      }
      if (opt.key === selectedKey && selectedKey !== qData.answer) {
        btn.classList.add("wrong");
        badgeHtml = `<span class="answer-badge badge-wrong">✗ Lựa chọn của bạn</span>`;
      }
      if (opt.key === selectedKey && selectedKey === qData.answer) {
        badgeHtml = `<span class="answer-badge badge-correct">✓ Bạn đã chọn đúng</span>`;
      }
    } else {
      if (opt.key === selectedKey) {
        btn.classList.add("selected");
      }
      btn.addEventListener("click", () => selectOption(index, opt.key));
    }

    btn.innerHTML = `
      <span class="option-key">${opt.key}</span>
      <span class="option-text">${opt.text}</span>
      ${badgeHtml}
    `;

    elements.optionsGroup.appendChild(btn);
  });

  // Explanation and Translation Box inside the SAME frame
  // Strictly shown ONLY after submission
  if (state.isSubmitted) {
    elements.explanationBox.style.display = "block";
    elements.expBadge.textContent = `Đáp án đúng: ${qData.answer}`;
    elements.expTranslation.textContent = qData.translation;
    elements.expExplanation.textContent = qData.explanation;
  } else {
    elements.explanationBox.style.display = "none";
  }

  // Footer Navigation State
  elements.btnPrev.disabled = index === 0;
  elements.btnNext.disabled = index === QUIZ_DATA.length - 1;

  if (state.isSubmitted) {
    elements.btnSubmit.textContent = "Xem kết quả";
  } else {
    elements.btnSubmit.textContent = "Nộp bài thi";
  }

  updateNavigatorPills();
}

// Select an option during the quiz
function selectOption(qIndex, key) {
  if (state.isSubmitted) return;

  state.userAnswers[qIndex] = key;
  renderQuestion(qIndex);

  // Auto advance to next question smoothly after 280ms if not on last question
  if (qIndex < QUIZ_DATA.length - 1) {
    setTimeout(() => {
      if (state.currentIndex === qIndex && !state.isSubmitted) {
        goToQuestion(qIndex + 1);
      }
    }, 280);
  }
}

function goToQuestion(index) {
  if (index < 0 || index >= QUIZ_DATA.length) return;
  renderQuestion(index);
}

// Timer
function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerSeconds = 0;
  state.timerInterval = setInterval(() => {
    state.timerSeconds++;
    elements.timerDisplay.textContent = formatTime(state.timerSeconds);
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// ==========================================================================
// SUBMIT & RESULT EVALUATION
// ==========================================================================
function openSubmitConfirm() {
  if (state.isSubmitted) {
    openResultModal();
    return;
  }

  const answeredCount = state.userAnswers.filter(a => a !== null).length;
  const confirmText = document.getElementById("confirm-text");
  if (confirmText) {
    if (answeredCount < QUIZ_DATA.length) {
      confirmText.innerHTML = `Bạn mới hoàn thành <strong>${answeredCount}/${QUIZ_DATA.length} câu</strong>.<br>Vẫn còn <strong>${QUIZ_DATA.length - answeredCount} câu</strong> chưa trả lời. Bạn có chắc chắn muốn nộp bài?`;
    } else {
      confirmText.innerHTML = `Bạn đã hoàn thành đủ <strong>${answeredCount}/${QUIZ_DATA.length} câu</strong>.<br>Bạn có muốn nộp bài và xem giải thích chi tiết ngay bây giờ?`;
    }
  }
  elements.confirmModal.classList.add("open");
}

function submitQuiz() {
  elements.confirmModal.classList.remove("open");
  stopTimer();
  state.isSubmitted = true;

  // Calculate score
  let correctCount = 0;
  QUIZ_DATA.forEach((q, idx) => {
    if (state.userAnswers[idx] === q.answer) {
      correctCount++;
    }
  });

  const wrongCount = QUIZ_DATA.length - correctCount;
  const timeFormatted = formatTime(state.timerSeconds);

  // Record submission in storage
  recordSubmission(correctCount, QUIZ_DATA.length, timeFormatted);

  // Update UI & Modal
  elements.resultScore.textContent = correctCount;
  elements.statCorrect.textContent = correctCount;
  elements.statWrong.textContent = wrongCount;
  elements.statTime.textContent = timeFormatted;

  let ratingText = "Cần cố gắng thêm!";
  if (correctCount >= 19) ratingText = "Xuất sắc! Tuyệt đối!";
  else if (correctCount >= 16) ratingText = "Rất tốt! Nắm vững giới từ!";
  else if (correctCount >= 12) ratingText = "Khá tốt! Ôn tập thêm các lỗi sai nhé!";
  else if (correctCount >= 10) ratingText = "Đạt yêu cầu. Hãy xem kỹ giải thích!";
  elements.resultRating.textContent = ratingText;

  // Build Result Breakdown Grid
  elements.breakdownGrid.innerHTML = "";
  QUIZ_DATA.forEach((q, idx) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "breakdown-item";
    const isCorrect = state.userAnswers[idx] === q.answer;
    item.classList.add(isCorrect ? "correct" : "wrong");

    const userAns = state.userAnswers[idx] || "—";
    item.innerHTML = `
      <span class="breakdown-q">Câu ${q.id}</span>
      <span class="breakdown-status">${isCorrect ? `✓ ${q.answer}` : `✗ (${userAns} -> ${q.answer})`}</span>
    `;

    item.addEventListener("click", () => {
      elements.resultModal.classList.remove("open");
      goToQuestion(idx);
    });

    elements.breakdownGrid.appendChild(item);
  });

  // Re-render current question to reveal answers & explanations
  renderQuestion(state.currentIndex);
  openResultModal();
}

function openResultModal() {
  elements.resultModal.classList.add("open");
}

function restartQuiz() {
  elements.resultModal.classList.remove("open");
  state.userAnswers = new Array(QUIZ_DATA.length).fill(null);
  state.isSubmitted = false;
  state.currentIndex = 0;
  buildNavigatorPills();
  renderQuestion(0);
  startTimer();
}

// ==========================================================================
// FULL REVIEW MODAL (Xem trọn bộ 20 câu một lúc)
// ==========================================================================
function openFullReviewModal() {
  const container = document.getElementById("full-review-content");
  container.innerHTML = "";

  QUIZ_DATA.forEach((q, idx) => {
    const userAns = state.userAnswers[idx];
    const isCorrect = userAns === q.answer;

    const card = document.createElement("div");
    card.className = "full-review-card";

    let optionsHtml = "";
    q.options.forEach(opt => {
      let optClass = "full-opt";
      let badge = "";
      if (opt.key === q.answer) {
        optClass += " correct";
        badge = `<span class="badge-tag correct">✓ Đáp án đúng</span>`;
      }
      if (opt.key === userAns && userAns !== q.answer) {
        optClass += " wrong";
        badge = `<span class="badge-tag wrong">✗ Bạn đã chọn</span>`;
      }
      if (opt.key === userAns && userAns === q.answer) {
        badge = `<span class="badge-tag correct">✓ Bạn đã chọn đúng</span>`;
      }

      optionsHtml += `
        <div class="${optClass}">
          <span class="opt-bullet">${opt.key}.</span>
          <span class="opt-text">${opt.text}</span>
          ${badge}
        </div>
      `;
    });

    card.innerHTML = `
      <div class="full-card-header">
        <span class="full-q-num">Câu ${q.id}</span>
        <span class="full-q-status ${isCorrect ? "correct" : "wrong"}">
          ${isCorrect ? "✓ Đúng" : `✗ Sai (Bạn chọn ${userAns || "trống"})`}
        </span>
      </div>
      <p class="full-q-text">${q.question}</p>
      <div class="full-options-list">
        ${optionsHtml}
      </div>
      <div class="full-exp-box">
        <div class="full-exp-line">
          <strong>🇻🇳 Dịch nghĩa:</strong> ${q.translation}
        </div>
        <div class="full-exp-line">
          <strong>📚 Giải thích:</strong> ${q.explanation}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  elements.fullReviewModal.classList.add("open");
}

// ==========================================================================
// ADMIN / TEACHER DASHBOARD & CSV EXPORT
// ==========================================================================
function openAdminModal() {
  const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");
  const visits = state.visitCount;

  document.getElementById("admin-visit-count").textContent = visits;
  document.getElementById("admin-submission-count").textContent = submissions.length;

  let avgScore = 0;
  if (submissions.length > 0) {
    const totalScore = submissions.reduce((sum, item) => sum + item.score, 0);
    avgScore = (totalScore / submissions.length).toFixed(1);
  }
  document.getElementById("admin-avg-score").textContent = `${avgScore} / 20`;

  const tbody = document.getElementById("admin-table-body");
  tbody.innerHTML = "";

  if (submissions.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 20px;">Chưa có lượt nộp bài nào được lưu.</td></tr>`;
  } else {
    submissions.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index + 1}</td>
        <td><strong>${item.name}</strong></td>
        <td>${item.studentId || "-"}</td>
        <td>${item.className || "-"}</td>
        <td><strong style="color: var(--primary);">${item.score} / ${item.total}</strong> (${item.percentage}%)</td>
        <td>${item.timeSpent}</td>
        <td><small style="color: var(--text-muted);">${item.date}</small></td>
      `;
      tbody.appendChild(tr);
    });
  }

  elements.adminModal.classList.add("open");
}

function exportSubmissionsCSV() {
  const submissions = JSON.parse(localStorage.getItem(STORAGE_KEY_SUBMISSIONS) || "[]");
  if (submissions.length === 0) {
    alert("Chưa có dữ liệu sinh viên nộp bài để xuất file.");
    return;
  }

  let csvContent = "\uFEFF"; // UTF-8 BOM for Excel
  csvContent += "STT,Họ và tên,MSSV,Lớp,Điểm số,Tổng câu,Tỉ lệ %,Thời gian làm bài,Thời điểm nộp\n";

  submissions.forEach((item, i) => {
    const row = [
      i + 1,
      `"${item.name.replace(/"/g, '""')}"`,
      `"${(item.studentId || "").replace(/"/g, '""')}"`,
      `"${(item.className || "").replace(/"/g, '""')}"`,
      item.score,
      item.total,
      item.percentage + "%",
      item.timeSpent,
      `"${item.date}"`
    ];
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `TDC_Prepositions_Results_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function clearSubmissions() {
  if (confirm("Bạn có chắc chắn muốn xóa tất cả lịch sử nộp bài của sinh viên trên máy này?")) {
    localStorage.removeItem(STORAGE_KEY_SUBMISSIONS);
    openAdminModal();
  }
}

// ==========================================================================
// THEME & VIEW SWITCHER
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || "light";
  setTheme(savedTheme);
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY_THEME, theme);
  elements.themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  setTheme(state.theme === "dark" ? "light" : "dark");
}

function setViewMode(mode) {
  state.viewMode = mode;
  elements.appRoot.classList.remove("desktop-mode", "ipad-mode", "mobile-mode");
  elements.appRoot.classList.add(`${mode}-mode`);

  document.querySelectorAll(".dev-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === mode);
  });
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================
function attachEvents() {
  // Navigation
  elements.btnPrev.addEventListener("click", () => goToQuestion(state.currentIndex - 1));
  elements.btnNext.addEventListener("click", () => goToQuestion(state.currentIndex + 1));
  elements.btnSubmit.addEventListener("click", openSubmitConfirm);
  if (elements.btnQuickSubmit) elements.btnQuickSubmit.addEventListener("click", openSubmitConfirm);

  // Submit Modal
  document.getElementById("btn-confirm-submit").addEventListener("click", submitQuiz);
  document.getElementById("btn-cancel-submit").addEventListener("click", () => elements.confirmModal.classList.remove("open"));
  document.getElementById("btn-close-confirm").addEventListener("click", () => elements.confirmModal.classList.remove("open"));

  // Result Modal
  document.getElementById("btn-close-result").addEventListener("click", () => elements.resultModal.classList.remove("open"));
  document.getElementById("btn-review").addEventListener("click", () => elements.resultModal.classList.remove("open"));
  document.getElementById("btn-restart").addEventListener("click", restartQuiz);
  document.getElementById("btn-view-all-20").addEventListener("click", () => {
    elements.resultModal.classList.remove("open");
    openFullReviewModal();
  });

  // Full Review Modal
  document.getElementById("btn-close-full-review").addEventListener("click", () => elements.fullReviewModal.classList.remove("open"));

  // Student Profile Modal
  if (elements.btnEditStudent) {
    elements.btnEditStudent.addEventListener("click", () => {
      elements.inputStudentName.value = state.student.name || "";
      elements.inputStudentId.value = state.student.id || "";
      elements.inputStudentClass.value = state.student.className || "";
      elements.studentModal.classList.add("open");
    });
  }
  document.getElementById("btn-close-student").addEventListener("click", () => elements.studentModal.classList.remove("open"));
  elements.formStudent.addEventListener("submit", saveStudentProfile);

  // Admin Modal
  document.getElementById("btn-admin-open").addEventListener("click", openAdminModal);
  document.getElementById("btn-close-admin").addEventListener("click", () => elements.adminModal.classList.remove("open"));
  document.getElementById("btn-export-csv").addEventListener("click", exportSubmissionsCSV);
  document.getElementById("btn-clear-data").addEventListener("click", clearSubmissions);

  // Theme Toggle
  elements.themeToggle.addEventListener("click", toggleTheme);

  // Device Switcher
  document.querySelectorAll(".dev-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setViewMode(btn.dataset.view);
    });
  });

  // Keyboard Shortcuts
  window.addEventListener("keydown", (e) => {
    // If modal is open, ignore
    if (document.querySelector(".modal-backdrop.open")) return;

    if (e.key === "ArrowLeft") {
      goToQuestion(state.currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      goToQuestion(state.currentIndex + 1);
    } else if (["1", "2", "3", "4"].includes(e.key)) {
      const keys = ["A", "B", "C", "D"];
      const key = keys[parseInt(e.key, 10) - 1];
      selectOption(state.currentIndex, key);
    } else if (["a", "b", "c", "d", "A", "B", "C", "D"].includes(e.key)) {
      selectOption(state.currentIndex, e.key.toUpperCase());
    }
  });
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", initQuiz);
