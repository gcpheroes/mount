// script.js

// ─── Question Data ─────────────────────────────────────────────────────────
const questions = [
  {
    "question": "Mountkirk Games wants you to design their new testing strategy. How should the test coverage differ from their existing backends on the other platforms?",
    "options": [
      "Tests should scale well beyond the prior approaches",
      "Unit tests are no longer required, only end-to-end tests",
      "Tests should be applied after the release is in the production environment",
      "Tests should include directly testing the Google Cloud Platform (GCP) infrastructure"
    ],
    "answer": [
      "Tests should scale well beyond the prior approaches"
    ],
    "multiple": false
  },
  {
    "question": "Mountkirk Games has deployed their new backend on Google Cloud Platform (GCP). You want to create a through testing process for new versions of the backend before they are released to the public. You want the testing environment to scale in an economical way. How should you design the process?",
    "options": [
      "Create a scalable environment in GCP for simulating production load",
      "Use the existing infrastructure to test the GCP-based backend at scale",
      "Build stress tests into each component of your application using resources internal to GCP to simulate load",
      "Create a set of static environments in GCP to test different levels of load \u05d2\u20ac\" for example, high, medium, and low"
    ],
    "answer": [
      "Create a scalable environment in GCP for simulating production load"
    ],
    "multiple": false
  },
  {
    "question": "Mountkirk Games wants to set up a continuous delivery pipeline. Their architecture includes many small services that they want to be able to update and roll back quickly. Mountkirk Games has the following requirements:\n\u2711 Services are deployed redundantly across multiple regions in the US and Europe\n\u2711 Only frontend services are exposed on the public internet\n\u2711 They can provide a single frontend IP for their fleet of services\n\u2711 Deployment artifacts are immutable\nWhich set of products should they use?",
    "options": [
      "Google Cloud Storage, Google Cloud Dataflow, Google Compute Engine",
      "Google Cloud Storage, Google App Engine, Google Network Load Balancer",
      "Google Kubernetes Registry, Google Container Engine, Google HTTP(S) Load Balancer",
      "Google Cloud Functions, Google Cloud Pub/Sub, Google Cloud Deployment Manager"
    ],
    "answer": [
      "Google Kubernetes Registry, Google Container Engine, Google HTTP(S) Load Balancer"
    ],
    "multiple": false
  },
  {
    "question": "Mountkirk Games' gaming servers are not automatically scaling properly. Last month, they rolled out a new feature, which suddenly became very popular. A record number of users are trying to use the service, but many of them are getting 503 errors and very slow response times. What should they investigate first?",
    "options": [
      "Verify that the database is online",
      "Verify that the project quota hasn't been exceeded",
      "Verify that the new feature code did not introduce any performance bugs",
      "Verify that the load-testing team is not running their tool against production"
    ],
    "answer": [
      "Verify that the project quota hasn't been exceeded"
    ],
    "multiple": false
  },
  {
    "question": "Mountkirk Games needs to create a repeatable and configurable mechanism for deploying isolated application environments. Developers and testers can access each other's environments and resources, but they cannot access staging or production resources. The staging environment needs access to some services from production.\nWhat should you do to isolate development environments from staging and production?",
    "options": [
      "Create a project for development and test and another for staging and production",
      "Create a network for development and test and another for staging and production",
      "Create one subnetwork for development and another for staging and production",
      "Create one project for development, a second for staging and a third for production"
    ],
    "answer": [
      "Create one project for development, a second for staging and a third for production"
    ],
    "multiple": false
  },
  {
    "question": "Mountkirk Games wants to set up a real-time analytics platform for their new game. The new platform must meet their technical requirements.\nWhich combination of Google technologies will meet all of their requirements?",
    "options": [
      "Kubernetes Engine, Cloud Pub/Sub, and Cloud SQL",
      "Cloud Dataflow, Cloud Storage, Cloud Pub/Sub, and BigQuery",
      "Cloud SQL, Cloud Storage, Cloud Pub/Sub, and Cloud Dataflow",
      "Cloud Dataproc, Cloud Pub/Sub, Cloud SQL, and Cloud Dataflow",
      "Cloud Pub/Sub, Compute Engine, Cloud Storage, and Cloud Dataproc"
    ],
    "answer": [
      "Cloud Dataflow, Cloud Storage, Cloud Pub/Sub, and BigQuery"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. Mountkirk Games wants to migrate from their current analytics and statistics reporting model to one that meets their technical requirements on Google Cloud Platform.\nWhich two steps should be part of their migration plan? (Choose two.)",
    "options": [
      "Evaluate the impact of migrating their current batch ETL code to Cloud Dataflow.",
      "Write a schema migration plan to denormalize data for better performance in BigQuery.",
      "Draw an architecture diagram that shows how to move from a single MySQL database to a MySQL cluster.",
      "Load 10 TB of analytics data from a previous game into a Cloud SQL instance, and run test queries against the full dataset to confirm that they complete successfully.",
      "Integrate Cloud Armor to defend against possible SQL injection attacks in analytics files uploaded to Cloud Storage."
    ],
    "answer": [
      "Evaluate the impact of migrating their current batch ETL code to Cloud Dataflow.",
      "Write a schema migration plan to denormalize data for better performance in BigQuery."
    ],
    "multiple": true
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. You need to analyze and define the technical architecture for the compute workloads for your company, Mountkirk Games. Considering the Mountkirk Games business and technical requirements, what should you do?",
    "options": [
      "Create network load balancers. Use preemptible Compute Engine instances.",
      "Create network load balancers. Use non-preemptible Compute Engine instances.",
      "Create a global load balancer with managed instance groups and autoscaling policies. Use preemptible Compute Engine instances.",
      "Create a global load balancer with managed instance groups and autoscaling policies. Use non-preemptible Compute Engine instances."
    ],
    "answer": [
      "Create a global load balancer with managed instance groups and autoscaling policies. Use non-preemptible Compute Engine instances."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. Mountkirk Games wants to design their solution for the future in order to take advantage of cloud and technology improvements as they become available. Which two steps should they take? (Choose two.)",
    "options": [
      "Store as much analytics and game activity data as financially feasible today so it can be used to train machine learning models to predict user behavior in the future.",
      "Begin packaging their game backend artifacts in container images and running them on Google Kubernetes Engine to improve the ability to scale up or down based on game activity.",
      "Set up a CI/CD pipeline using Jenkins and Spinnaker to automate canary deployments and improve development velocity.",
      "Adopt a schema versioning tool to reduce downtime when adding new game features that require storing additional player data in the database.",
      "Implement a weekly rolling maintenance process for the Linux virtual machines so they can apply critical kernel patches and package updates and reduce the risk of 0-day vulnerabilities."
    ],
    "answer": [
      "Store as much analytics and game activity data as financially feasible today so it can be used to train machine learning models to predict user behavior in the future.",
      "Begin packaging their game backend artifacts in container images and running them on Google Kubernetes Engine to improve the ability to scale up or down based on game activity."
    ],
    "multiple": true
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. Mountkirk Games wants you to design a way to test the analytics platform's resilience to changes in mobile network latency. What should you do?",
    "options": [
      "Deploy failure injection software to the game analytics platform that can inject additional latency to mobile client analytics traffic.",
      "Build a test client that can be run from a mobile phone emulator on a Compute Engine virtual machine, and run multiple copies in Google Cloud Platform regions all over the world to generate realistic traffic.",
      "Add the ability to introduce a random amount of delay before beginning to process analytics files uploaded from mobile devices.",
      "Create an opt-in beta of the game that runs on players' mobile devices and collects response times from analytics endpoints running in Google Cloud Platform regions all over the world."
    ],
    "answer": [
      "Deploy failure injection software to the game analytics platform that can inject additional latency to mobile client analytics traffic."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. For this question, refer to the Mountkirk Games case study. You need to analyze and define the technical architecture for the database workloads for your company, Mountkirk Games. Considering the business and technical requirements, what should you do?",
    "options": [
      "Use Cloud SQL for time series data, and use Cloud Bigtable for historical data queries.",
      "Use Cloud SQL to replace MySQL, and use Cloud Spanner for historical data queries.",
      "Use Cloud Bigtable to replace MySQL, and use BigQuery for historical data queries.",
      "Use Cloud Bigtable for time series data, use Cloud Spanner for transactional data, and use BigQuery for historical data queries."
    ],
    "answer": [
      "Use Cloud Bigtable for time series data, use Cloud Spanner for transactional data, and use BigQuery for historical data queries."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. For this question, refer to the Mountkirk Games case study. Which managed storage option meets Mountkirk's technical requirement for storing game activity in a time series database service?",
    "options": [
      "Cloud Bigtable",
      "Cloud Spanner",
      "BigQuery",
      "Cloud Datastore"
    ],
    "answer": [
      "Cloud Bigtable"
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. For this question, refer to the Mountkirk Games case study. You are in charge of the new Game Backend Platform architecture. The game communicates with the backend over a REST API.\nYou want to follow Google-recommended practices. How should you design the backend?",
    "options": [
      "Create an instance template for the backend. For every region, deploy it on a multi-zone managed instance group. Use an L4 load balancer.",
      "Create an instance template for the backend. For every region, deploy it on a single-zone managed instance group. Use an L4 load balancer.",
      "Create an instance template for the backend. For every region, deploy it on a multi-zone managed instance group. Use an L7 load balancer.",
      "Create an instance template for the backend. For every region, deploy it on a single-zone managed instance group. Use an L7 load balancer."
    ],
    "answer": [
      "Create an instance template for the backend. For every region, deploy it on a multi-zone managed instance group. Use an L7 load balancer."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. You need to optimize batch file transfers into Cloud Storage for Mountkirk Games' new Google Cloud solution. The batch files contain game statistics that need to be staged in Cloud Storage and be processed by an extract transform load (ETL) tool. What should you do?",
    "options": [
      "Use gsutil to batch move files in sequence.",
      "Use gsutil to batch copy the files in parallel.",
      "Use gsutil to extract the files as the first part of ETL.",
      "Use gsutil to load the files as the last part of ETL."
    ],
    "answer": [
      "Use gsutil to batch copy the files in parallel."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. You are implementing Firestore for Mountkirk Games. Mountkirk Games wants to give a new game programmatic access to a legacy game's Firestore database. Access should be as restricted as possible. What should you do?",
    "options": [
      "Create a service account (SA) in the legacy game's Google Cloud project, add a second SA in the new game's IAM page, and then give the Organization Admin role to both SAs.",
      "Create a service account (SA) in the legacy game's Google Cloud project, give the SA the Organization Admin role, and then give it the Firebase Admin role in both projects.",
      "Create a service account (SA) in the legacy game's Google Cloud project, add this SA in the new game's IAM page, and then give it the Firebase Admin role in both projects.",
      "Create a service account (SA) in the legacy game's Google Cloud project, give it the Firebase Admin role, and then migrate the new game to the legacy game's project."
    ],
    "answer": [
      "Create a service account (SA) in the legacy game's Google Cloud project, add this SA in the new game's IAM page, and then give it the Firebase Admin role in both projects."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. Mountkirk Games wants to limit the physical location of resources to their operating Google Cloud regions. What should you do?",
    "options": [
      "Configure an organizational policy which constrains where resources can be deployed.",
      "Configure IAM conditions to limit what resources can be configured.",
      "Configure the quotas for resources in the regions not being used to 0.",
      "Configure a custom alert in Cloud Monitoring so you can disable resources as they are created in other regions."
    ],
    "answer": [
      "Configure an organizational policy which constrains where resources can be deployed."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. You need to implement a network ingress for a new game that meets the defined business and technical requirements. Mountkirk Games wants each regional game instance to be located in multiple Google Cloud regions. What should you do?",
    "options": [
      "Configure a global load balancer connected to a managed instance group running Compute Engine instances.",
      "Configure kubemci with a global load balancer and Google Kubernetes Engine.",
      "Configure a global load balancer with Google Kubernetes Engine.",
      "Configure Ingress for Anthos with a global load balancer and Google Kubernetes Engine."
    ],
    "answer": [
      "Configure Ingress for Anthos with a global load balancer and Google Kubernetes Engine."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. Your development teams release new versions of games running on Google Kubernetes Engine (GKE) daily. You want to create service level indicators (SLIs) to evaluate the quality of the new versions from the user's perspective. What should you do?",
    "options": [
      "Create CPU Utilization and Request Latency as service level indicators.",
      "Create GKE CPU Utilization and Memory Utilization as service level indicators.",
      "Create Request Latency and Error Rate as service level indicators.",
      "Create Server Uptime and Error Rate as service level indicators."
    ],
    "answer": [
      "Create Request Latency and Error Rate as service level indicators."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. Mountkirk Games wants you to secure the connectivity from the new gaming application platform to Google Cloud. You want to streamline the process and follow\nGoogle-recommended practices. What should you do?",
    "options": [
      "Configure Workload Identity and service accounts to be used by the application platform.",
      "Use Kubernetes Secrets, which are obfuscated by default. Configure these Secrets to be used by the application platform.",
      "Configure Kubernetes Secrets to store the secret, enable Application-Layer Secrets Encryption, and use Cloud Key Management Service (Cloud KMS) to manage the encryption keys. Configure these Secrets to be used by the application platform.",
      "Configure HashiCorp Vault on Compute Engine, and use customer managed encryption keys and Cloud Key Management Service (Cloud KMS) to manage the encryption keys. Configure these Secrets to be used by the application platform."
    ],
    "answer": [
      "Configure Workload Identity and service accounts to be used by the application platform."
    ],
    "multiple": false
  },
  {
    "question": "For this question, refer to the Mountkirk Games case study. Your development team has created a mobile game app. You want to test the new mobile app on Android and iOS devices with a variety of configurations. You need to ensure that testing is efficient and cost-effective. What should you do?",
    "options": [
      "Upload your mobile app to the Firebase Test Lab, and test the mobile app on Android and iOS devices.",
      "Create Android and iOS VMs on Google Cloud, install the mobile app on the VMs, and test the mobile app.",
      "Create Android and iOS containers on Google Kubernetes Engine (GKE), install the mobile app on the containers, and test the mobile app.",
      "Upload your mobile app with different configurations to Firebase Hosting and test each configuration."
    ],
    "answer": [
      "Upload your mobile app to the Firebase Test Lab, and test the mobile app on Android and iOS devices."
    ],
    "multiple": false
  },
];

questions.sort(() => Math.random() - 0.5);

// ─── State & DOM References ───────────────────────────────────────────────────
let currentQuestion   = 0;
let score             = 0;
let showingFeedback   = false;
let quizStartTime     = new Date();
let totalTimeSeconds  = 90 * 60;
let countdownInterval = null;
let userAnswers = [];

const questionEl = document.getElementById("question");
const optionsEl  = document.getElementById("options");
const nextBtn    = document.getElementById("nextBtn");
const finishBtn  = document.getElementById("finishTestBtn");
const resultEl   = document.getElementById("result");
const timerEl    = document.getElementById("timer");

// ─── Utility Functions ───────────────────────────────────────────────────────
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function normalize(str) {
  return str
    .replace(/\\/g, "")     // remove all backslashes
    .replace(/\s+/g, " ")   // collapse whitespace/newlines into single spaces
    .trim();
}

function updateProgress() {
  const pct = (currentQuestion / questions.length) * 100;
  document.getElementById("progressBar").style.width = `${pct}%`;
  document.getElementById("progressText").textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;
}

// ─── Render Question ─────────────────────────────────────────────────────────
function loadQuestion() {
  showingFeedback    = false;
  resultEl.innerHTML = "";
  nextBtn.textContent = "Submit";

  const q         = questions[currentQuestion];
  const shuffled  = shuffleArray([...q.options]);
  const inputType = q.multiple ? "checkbox" : "radio";

  // break the question into lines, render any image-URL as an <img>
  const html = q.question
    .split('\n')
    .map(line => {
      const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
      if (m) {
        return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
      }
      // otherwise escape & wrap in a paragraph
      return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
    })
    .join('');
  questionEl.innerHTML = html;
  optionsEl.innerHTML    = "";

  shuffled.forEach(option => {
    const li    = document.createElement('li');
    const label = document.createElement('label');
    label.className = 'option';
  
    const input = document.createElement('input');
    input.type  = inputType;
    input.name  = 'option';
    input.value = option;
  
    const span = document.createElement('span');
    if (option.match(/\.(jpe?g|png|gif|webp)$/i)) {
      const img = document.createElement('img');
      img.src    = option;
      img.alt    = 'Option image';
      img.style.maxWidth = '100%';
      img.style.height   = 'auto';
      span.appendChild(img);
    } else {
      span.textContent = option;
    }
  
    input.addEventListener('change', () => {
      document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
      label.classList.add('selected');
    });
  
    label.append(input, span);
    li.appendChild(label);
    optionsEl.appendChild(li);
  });


  // wire up the “selected” highlight
  optionsEl.querySelectorAll(`input[name="option"]`).forEach(input => {
    input.addEventListener("change", () => {
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      input.parentElement.classList.add("selected");
    });
  });

  updateProgress();
  finishBtn.style.display = currentQuestion === questions.length - 1 ? "block" : "none";
}



// ─── Timer ────────────────────────────────────────────────────────────────────
function updateTimerDisplay() {
  const h = Math.floor(totalTimeSeconds / 3600);
  const m = Math.floor((totalTimeSeconds % 3600) / 60);
  const s = totalTimeSeconds % 60;

  let parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);

  timerEl.textContent = `Time Remaining: ${parts.join(" ")}`;
  totalTimeSeconds--;

  if (totalTimeSeconds < 0) {
    clearInterval(countdownInterval);
    alert("Time's up! Submitting your quiz.");
    showResult();
  }
}

function startTimer() {
  updateTimerDisplay();
  countdownInterval = setInterval(updateTimerDisplay, 1000);
}

// ─── Submission & Feedback ───────────────────────────────────────────────────
nextBtn.addEventListener("click", () => {
  const currentQ       = questions[currentQuestion];
  const selectedInputs = Array.from(
    document.querySelectorAll("input[name='option']:checked")
  );

  if (!showingFeedback) {
    if (selectedInputs.length === 0) {
      alert("Please select at least one option.");
      return;
    }

    // Normalize selected vs. correct
    const selectedNorm = selectedInputs.map(i => normalize(i.value));
    const correctNorm  = currentQ.answer.map(a => normalize(a));

    const isCorrect =
      selectedNorm.length === correctNorm.length &&
      correctNorm.every(ans => selectedNorm.includes(ans));

    const selectedRaw = selectedInputs.map(input => input.value); // preserve original formatting
      userAnswers[currentQuestion] = {
        selected: selectedRaw,
        correct: currentQ.answer,
        question: currentQ.question,
        explanation: currentQ.explanation
      };


    // Disable & highlight in one pass
    optionsEl.querySelectorAll("input[name='option']").forEach(input => {
      input.disabled = true;
      const valNorm = normalize(input.value);
      const lbl     = input.parentElement;

      if (correctNorm.includes(valNorm))       lbl.classList.add("correct");
      else if (input.checked)                  lbl.classList.add("incorrect");
    });

    // Show feedback message
    resultEl.innerHTML = isCorrect
      ? `<p style="color:green;">✅ Correct!</p>`
      : `<p style="color:red;">❌ Incorrect.</p>
         <p>Correct Answer:<br><strong>${currentQ.answer.join("<br>")}</strong></p>`;
    
    
    // ⬇️ Add this below the feedback
    if (currentQ.explanation) {
      resultEl.innerHTML += `<p class="explanation"><strong>Explanation:</strong> ${currentQ.explanation}</p>`;
    }

    
    if (isCorrect) score++;
    showingFeedback     = true;
    nextBtn.textContent = (currentQuestion < questions.length - 1)
      ? "Next Question"
      : "See Result";

  } else {
    // Move to next question or finish
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function formatDuration(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const parts = [];
  if (h) parts.push(`${h}h`);
  if (m || h) parts.push(`${m}m`);
  parts.push(`${s}s`);
  return parts.join(" ");
}

function saveScoreToHistory(score, total) {
  const endTime = new Date();
  const duration = formatDuration(Math.floor((endTime - quizStartTime) / 1000));

  const record = {
    score,
    total,
    date: endTime.toLocaleString(),
    duration
  };

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  history.push(record);
  localStorage.setItem("quizScoreHistory", JSON.stringify(history));
}

function displayScoreHistory() {
  const container = document.querySelector(".container");
  const historyDiv = document.getElementById("scoreHistory");
  if (historyDiv) historyDiv.remove();

  let history = JSON.parse(localStorage.getItem("quizScoreHistory")) || [];
  if (history.length === 0) return;

  const div = document.createElement("div");
  div.id = "scoreHistory";
  div.style.display = "none";
  div.innerHTML = `
    <h3>Score History</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr><th>#</th><th>Score</th><th>Time Taken</th><th>Date</th></tr>
      </thead>
      <tbody>
        ${history.map((r, i) => `
          <tr>
            <td>${i + 1}</td>
            <td>${r.score} / ${r.total}</td>
            <td>${r.duration}</td>
            <td>${r.date}</td>
          </tr>`).join("")}
      </tbody>
    </table>
    
    <div style="margin-top: 10px;">
      <button id="clearHistoryBtn">Clear History</button>
      <button id="restartFromHistoryBtn" style="margin-left: 10px;">Restart Quiz</button>
    </div>
    <hr>
  `;
  container.insertBefore(div, document.getElementById("quiz"));

  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    if (confirm("Clear all score history?")) {
      localStorage.removeItem("quizScoreHistory");
      displayScoreHistory();
    }
  });

  document.getElementById('restartFromHistoryBtn').addEventListener('click', () => {
    if (confirm("Do you want to restart the quiz?")) {
      // Reset quiz state
      score = 0;
      currentQuestion = 0;
      showingFeedback = false;
      quizStartTime = new Date();
  
      // Reset timer
      clearInterval(countdownInterval);
      totalTimeSeconds = 90 * 60; // reset to your default duration
      updateTimerDisplay();
      startTimer();

      // Hide score history section
      const historySection = document.getElementById("scoreHistory");
      if (historySection) historySection.style.display = "none";
  
      // Shuffle and reload quiz
      questions.sort(() => Math.random() - 0.5);
      document.getElementById("quiz").style.display = "block";
      document.getElementById("finalResult").style.display = "none";
      const summary = document.getElementById("summaryPage");
      if (summary) summary.style.display = "none";
  
      loadQuestion();
    }
  });

}


// Helper functions:

function renderAnswerHTML(answers) {
  return answers.map(ans => {
    if (ans.match(/\.(jpe?g|png|gif|webp)$/i)) {
      return `<img src="${ans}" alt="Answer image" style="max-width:100%;height:auto;margin:6px 0;">`;
    }
    return `<p>${ans}</p>`;
  }).join("");
}

function renderQuestionHTML(text) {
  return text.split('\n').map(line => {
    const m = line.trim().match(/(https?:\/\/\S+\.(?:png|jpe?g|gif|webp))/i);
    if (m) {
      return `<img src="${m[1]}" alt="Question image" style="max-width:100%;height:auto;margin:12px 0;">`;
    }
    return `<p>${line.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`;
  }).join('');
}


// ─── Show Result & Restart ───────────────────────────────────────────────────
function showResult() {
  clearInterval(countdownInterval);
  saveScoreToHistory(score, questions.length);

  document.getElementById("quiz").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("finalResult").innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <button id="restartQuizBtn" style="margin-top: 16px;">Restart Quiz</button>
  `;
  finishBtn.style.display = "none";

  displayScoreHistory();
  document.getElementById("scoreHistory").style.display = "block";

  document.getElementById("restartQuizBtn").addEventListener("click", () => {
    score = 0;
    currentQuestion = 0;
    showingFeedback = false;
    quizStartTime = new Date();

    clearInterval(countdownInterval);
    totalTimeSeconds = 90 * 60;
    startTimer();

    questions.sort(() => Math.random() - 0.5);
    document.getElementById("quiz").style.display = "block";
    document.getElementById("finalResult").style.display = "none";
    loadQuestion();
  });

  const summaryDiv = document.getElementById("summaryPage");
  summaryDiv.innerHTML = "<h3>Question Summary</h3>";

  userAnswers.forEach((entry, index) => {
    const isCorrect =
      entry.selected.length === entry.correct.length &&
      entry.correct.every(ans => entry.selected.includes(ans));

    const explanationHTML = entry.explanation
      ? `<p><strong>Explanation:</strong><br>${entry.explanation}</p>`
      : "";

    const questionHTML = `
      <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 12px;">
        <p><strong>Q${index + 1}:</strong></p>
        ${renderQuestionHTML(entry.question)}
        <p><strong>Your Answer:</strong><br>${renderAnswerHTML(entry.selected)}</p>
        <p><strong>Correct Answer:</strong><br>${renderAnswerHTML(entry.correct)}</p>
        <p>${isCorrect ? "✅ Correct" : "❌ Incorrect"}</p>
        ${explanationHTML}
      </div>
    `;

    summaryDiv.innerHTML += questionHTML;
  });

    
    // Hide quiz and show summary
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalResult").style.display = "block";
    document.getElementById("scoreHistory").style.display = "block";
    summaryDiv.style.display = "block";

}


// ─── Bootstrap ───────────────────────────────────────────────────────────────

finishBtn.style.display = "none";
loadQuestion();
startTimer();
