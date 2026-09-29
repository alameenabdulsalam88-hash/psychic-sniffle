const modal = document.getElementById("toolModal");
const modalContent = document.getElementById("modalContent");
const toast = document.getElementById("toast");


function openTool(type) {

  const tools = {

    keyword: `
      <h2>Keyword Research Tool</h2>

      <p>
        Enter a topic and get starter keyword ideas.
      </p>

      <input
        id="kw"
        placeholder="e.g. online business"
      >

      <button
        class="action"
        onclick="keywordResult()"
      >
        Find Keywords
      </button>

      <div id="toolResult"></div>
    `,


    profit: `
      <h2>Website Profit Calculator</h2>

      <p>
        Estimate monthly profit from traffic and RPM.
      </p>

      <input
        id="traffic"
        type="number"
        placeholder="Monthly visitors"
      >

      <input
        id="rpm"
        type="number"
        placeholder="Revenue per 1,000 visitors (USD)"
        value="15"
      >

      <input
        id="expenses"
        type="number"
        placeholder="Monthly expenses (USD)"
        value="100"
      >

      <button
        class="action"
        onclick="profitResult()"
      >
        Calculate Profit
      </button>

      <div id="toolResult"></div>
    `,


    seo: `
      <h2>Quick SEO Audit</h2>

      <p>
        Enter a website URL for a simple starter checklist.
      </p>

      <input
        id="url"
        placeholder="https://example.com"
      >

      <button
        class="action"
        onclick="seoResult()"
      >
        Audit Website
      </button>

      <div id="toolResult"></div>
    `,


    email: `
      <h2>Email Subject Tester</h2>

      <p>
        Write a subject line and get a simple score.
      </p>

      <input
        id="subject"
        placeholder="Your subject line"
      >

      <button
        class="action"
        onclick="emailResult()"
      >
        Test Subject
      </button>

      <div id="toolResult"></div>
    `

  };


  modalContent.innerHTML = tools[type];

  modal.classList.add("show");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );
}


function closeTool() {

  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


modal.addEventListener("click", function(e) {

  if (e.target === modal) {
    closeTool();
  }

});


/* KEYWORD TOOL */

function keywordResult() {

  const value =
    document.getElementById("kw").value.trim()
    || "online business";


  const ideas = [

    `${value} for beginners`,
    `best ${value} tools`,
    `how to start ${value}`,
    `${value} ideas`,
    `${value} strategies`,
    `cheap ${value} solutions`

  ];


  document.getElementById("toolResult").innerHTML = `

    <div class="result">

      ${ideas.join(" · ")}

    </div>

  `;
}


/* PROFIT CALCULATOR */

function profitResult() {

  const traffic =
    Number(
      document.getElementById("traffic").value
    ) || 0;


  const rpm =
    Number(
      document.getElementById("rpm").value
    ) || 0;


  const expenses =
    Number(
      document.getElementById("expenses").value
    ) || 0;


  const revenue =
    traffic / 1000 * rpm;


  const profit =
    revenue - expenses;


  document.getElementById("toolResult").innerHTML = `

    <div class="result">

      Estimated revenue:
      $${revenue.toFixed(2)}

      <br>

      Estimated monthly profit:
      $${profit.toFixed(2)}

    </div>

  `;
}


/* SEO TOOL */

function seoResult() {

  const url =
    document.getElementById("url").value.trim();


  document.getElementById("toolResult").innerHTML = `

    <div class="result">

      Starter audit for
      ${url || "your website"}:

      <br><br>

      ✓ Check page title

      <br>

      ✓ Check meta description

      <br>

      ✓ Check H1 heading

      <br>

      ✓ Check image alt text

      <br>

      ✓ Check mobile speed

      <br>

      ✓ Check HTTPS

      <br>

      ✓ Check internal links

      <br>

      ✓ Check sitemap

    </div>

  `;
}


/* EMAIL SUBJECT TESTER */

function emailResult() {

  const subject =
    document.getElementById("subject").value.trim();


  if (!subject) {

    document.getElementById("toolResult").innerHTML = `

      <div class="result">

        Enter a subject line first.

      </div>

    `;

    return;
  }


  let score = 50;


  if (
    subject.length >= 25 &&
    subject.length <= 55
  ) {
    score += 20;
  }


  if (/[0-9]/.test(subject)) {
    score += 10;
  }


  if (/[!?]/.test(subject)) {
    score += 5;
  }


  if (
    /\b(how|why|new|free|guide|today|you)\b/i
      .test(subject)
  ) {
    score += 15;
  }


  score = Math.min(score, 100);


  document.getElementById("toolResult").innerHTML = `

    <div class="result">

      Subject score:
      ${score}/100

    </div>

  `;
}


/* NEWSLETTER */

function subscribe(e) {

  e.preventDefault();

  showToast(
    "Thanks! You're on the StarterHub list."
  );

  e.target.reset();

}


/* TOAST */

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");


  setTimeout(
    () => toast.classList.remove("show"),
    3000
  );

}


/* MOBILE MENU */

document
  .querySelector(".menu-btn")
  .addEventListener("click", () => {

    document
      .querySelector(".nav-links")
      .classList.toggle("open");

  });


/* DARK MODE */

document
  .getElementById("themeBtn")
  .addEventListener("click", () => {

    document.body.classList.toggle("dark");

  });


/* SEARCH */

document
  .getElementById("searchBtn")
  .addEventListener("click", () => {

    showToast(
      "Search is ready to connect to your site search."
    );

  });