// Lecture data - easily editable
const lectures = [
    {
        title: "AI Artwork (ComfyUI)",
        status: "active",
        period: "2026.03 ~ 2026.03",
        desc: "ComfyUI를 활용한 AI 이미지 생성 실습. Stable Diffusion 워크플로우 설계부터 LoRA 활용까지."
    },
    {
        title: "Web Development",
        status: "active",
        period: "2026.03 ~ 2026.03",
        desc: "HTML/CSS/JavaScript 기초부터 React 실전 프로젝트까지. 포트폴리오 제작 포함."
    },
    {
        title: "Vibe Coding Web",
        status: "upcoming",
        period: "2026.04 (예정)",
        desc: "Claude Code를 활용한 바이브코딩 웹 서버 구축. AI와 함께하는 실무 개발 경험."
    },
    {
        title: "AI Agent",
        status: "upcoming",
        period: "2026.04 (예정)",
        desc: "AI 에이전트 설계와 구현. Claude API, MCP, 자동화 워크플로우 실습."
    }
];

const statusMap = {
    active: { label: "Opening", css: "badge-active" },
    upcoming: { label: "Upcoming", css: "badge-upcoming" },
    completed: { label: "Completed", css: "badge-completed" }
};

function renderCards() {
    const grid = document.getElementById("lectureGrid");
    grid.innerHTML = lectures.map(lec => {
        const badge = statusMap[lec.status] || statusMap.upcoming;
        return `
            <div class="card">
                <span class="card-badge ${badge.css}">${badge.label}</span>
                <h3>${lec.title}</h3>
                <p class="card-meta">${lec.period}</p>
                <p class="card-desc">${lec.desc}</p>
            </div>
        `;
    }).join("");
}

document.addEventListener("DOMContentLoaded", renderCards);
