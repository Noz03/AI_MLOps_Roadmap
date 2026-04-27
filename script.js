// Dữ liệu roadmap chi tiết
const roadmapData = [
    {
        id: "phase1",
        title: "1. Nền tảng Khoa học Máy tính",
        sources: "CS50x + CS50 SQL (Harvard University)",
        desc: "<b>Nội dung:</b> Học ngôn ngữ C để thao tác với bộ nhớ (con trỏ, cấp phát động), cấu trúc dữ liệu (Linked Lists, Hash Tables, Trees). Học Python cơ bản. Chuyển sang SQL thuần túy, thiết kế lược đồ ERD, chuẩn hóa dữ liệu (1NF-3NF), và hiểu cơ chế B-Tree Indexing.<br><br><b>Mục tiêu:</b> Nắm vững tư duy máy tính cốt lõi. Có khả năng thiết kế schema database thực tế không dư thừa, tối ưu hóa tốc độ truy vấn, làm nền tảng vững chắc cho kiến trúc backend.",
        stack: ["C", "Python", "SQL", "Relational DB", "Indexing"],
        isParallel: false
    },
    {
        id: "phase2",
        title: "2. Backend & API Tốc độ cao",
        sources: "CS50 Web + FastAPI (Official Docs)",
        desc: "<b>Nội dung:</b> Xây dựng Monolithic Web với Django (mô hình MTV, ORM, bảo mật CSRF/XSS). Chuyển đổi sang kiến trúc Micro-APIs với FastAPI. Xử lý bất đồng bộ (async/await), Pydantic validation, CORS, và JWT Authentication.<br><br><b>Mục tiêu:</b> Tự tin thiết kế Backend từ web truyền thống đến các API tốc độ siêu cao chuẩn RESTful. Tạo ra một 'bộ khung thép' backend chịu tải tốt để bọc các model AI ở giai đoạn sau.",
        stack: ["Django", "FastAPI", "Uvicorn", "RESTful API", "Web Security"],
        isParallel: false
    },
    {
        id: "ddia",
        title: "📖 Kiến trúc Hệ thống Phân tán",
        sources: "Designing Data-Intensive Applications (Martin Kleppmann)",
        desc: "<b>Nội dung:</b> Phân tích kiến trúc của các hệ thống lớn. Học về Replication, Sharding, ACID Transactions, hệ thống Batch/Stream Processing, và cơ chế hoạt động của Redis, Kafka.<br><br><b>Mục tiêu:</b> Phá vỡ rào cản tư duy 'chạy trên localhost'. Sở hữu mindset của một System Architect để thiết kế luồng dữ liệu (Data Pipeline) không bị nghẽn cổ chai, chịu tải hàng triệu request.",
        stack: ["Distributed Systems", "Caching", "Load Balancing", "Scalability"],
        isParallel: true
    },
    {
        id: "phase3",
        title: "3. Thuật toán AI",
        sources: "CS50 AI (Harvard University)",
        desc: "<b>Nội dung:</b> Lập trình Python các thuật toán kinh điển: Tìm kiếm không gian trạng thái (DFS, BFS, A*), Trò chơi đối kháng (Minimax, Alpha-Beta Pruning), Logic mệnh đề, Xác suất (Bayesian Networks), và Machine Learning cơ bản (Q-Learning).<br><br><b>Mục tiêu:</b> Củng cố tư duy giải thuật Python cực bén. Vũ khí tối thượng để vượt qua các bài kiểm tra thuật toán (LeetCode) và logic hệ thống tại vòng phỏng vấn của các tập đoàn công nghệ lớn.",
        stack: ["Graph Search (A*)", "Minimax", "Optimization", "Probabilistic Models"],
        isParallel: false
    },
    {
        id: "phase4",
        title: "4. Deep Learning & MLOps",
        sources: "Practical DL for Coders (Fast.ai) + FSDL",
        desc: "<b>Nội dung:</b> Dùng Fast.ai/PyTorch huấn luyện mô hình (Top-down approach). Học FSDL để đưa AI lên Production: Xây dựng RAG kết nối Vector DB (pgvector), quản lý API của LLMs (OpenAI), và tracking model bằng Weights & Biases.<br><br><b>Mục tiêu:</b> Làm chủ toàn bộ vòng đời ứng dụng AI. Không chỉ 'train model' mà tích hợp thành công AI vào một sản phẩm thực tế, có giá trị thương mại cao.",
        stack: ["PyTorch", "Fastai", "LLMs", "Vector DB", "FSDL", "RAG"],
        isParallel: false
    },
    {
        id: "phase5",
        title: "5. Vận hành Hạ tầng",
        sources: "90DaysOfDevOps (Michael Cade)",
        desc: "<b>Nội dung:</b> Viết Bash script quản trị Linux. Đóng gói ứng dụng Backend/AI bằng Docker. Dùng Kubernetes để điều phối nhân bản server. Thiết lập CI/CD bằng GitHub Actions. Cài đặt Prometheus & Grafana giám sát tài nguyên (CPU, RAM).<br><br><b>Mục tiêu:</b> Trở thành MLOps/Platform Engineer thực thụ. Có khả năng tự động hóa triển khai, tự tay đưa hệ thống lên môi trường Cloud một cách an toàn và chịu tải khổng lồ.",
        stack: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
        isParallel: false
    }
];

// Khởi tạo các DOM Element
const roadmapContainer = document.getElementById('roadmap-container');
const infoDisplay = document.getElementById('info-display');

// Render toàn bộ node ra HTML
function renderRoadmap() {
    roadmapContainer.innerHTML = roadmapData.map(item => `
        <div class="node ${item.isParallel ? 'parallel-node' : ''}" onclick="showDetail('${item.id}', this)">
            <div class="node-box">
                <span class="node-title">${item.title}</span>
                <span class="node-source">Nguồn: ${item.sources}</span>
            </div>
        </div>
    `).join('');
}

// Cập nhật thông tin chi tiết khi click
function showDetail(id, element) {
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
    if(element) element.classList.add('active');

    const phase = roadmapData.find(p => p.id === id);
    
    infoDisplay.innerHTML = `
        <h2 class="info-title">${phase.title}</h2>
        <span class="source-label">📍 Source: ${phase.sources}</span>
        <p class="info-desc" style="line-height: 1.6;">${phase.desc}</p>
        <h3 style="margin-top:30px; font-size:1rem; border-bottom: 1px solid #333; padding-bottom:10px;">Tech Stack</h3>
        <div class="tech-grid">
            ${phase.stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
    `;
}

// Chạy lần đầu
renderRoadmap();
showDetail('phase1', document.querySelector('.node'));