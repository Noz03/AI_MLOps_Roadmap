// Dữ liệu roadmap chi tiết kèm Link trực tiếp
const roadmapData = [
    {
        id: "phase1",
        title: "1. Nền tảng Khoa học Máy tính",
        shortSource: "CS50x + CS50 SQL",
        desc: "<b>Nội dung:</b><br>• <b>Quản lý bộ nhớ với C:</b> Hiểu sâu về Stack vs Heap, Pointer (con trỏ), Memory Leak và tối ưu hóa tài nguyên phần cứng.<br>• <b>Cấu trúc dữ liệu lõi:</b> Tự triển khai Hash Tables, Linked Lists, Trees để hiểu độ phức tạp thuật toán O(n).<br>• <b>SQL Design:</b> Chuẩn hóa dữ liệu (1NF-3NF), thiết kế lược đồ ERD và viết các câu lệnh JOIN phức tạp.<br>• <b>Database Engine:</b> Hiểu cơ chế B-Tree Indexing hoạt động dưới tầng đĩa cứng.<br><br><b>Mục tiêu kiến thức:</b> Làm chủ tư duy hệ thống và thiết kế database chuẩn chỉnh, làm nền móng cho kiến trúc backend quy mô lớn.",
        stack: ["C", "Python", "SQL", "PostgreSQL", "Database Design", "Indexing Optimization"],
        links: [
            { name: "CS50x: Introduction to Computer Science (Harvard)", url: "https://cs50.harvard.edu/x/" },
            { name: "CS50 SQL: Introduction to Databases (Harvard)", url: "https://cs50.harvard.edu/sql/" }
        ]
    },
    {
        id: "phase2",
        title: "2. Backend & API",
        shortSource: "CS50 Web + FastAPI",
        desc: "<b>Nội dung:</b><br>• <b>Django Monolithic:</b> Học mô hình MTV, Middlewares, ORM và các tiêu chuẩn bảo mật (CSRF, XSS).<br>• <b>FastAPI & Async:</b> Chuyển sang lập trình bất đồng bộ (AsyncIO) để xử lý hàng ngàn request đồng thời (Non-blocking I/O).<br>• <b>API Standards:</b> Thiết kế chuẩn RESTful API, Dependency Injection và Swagger/OpenAPI.<br>• <b>Authentication:</b> Triển khai xác thực phân quyền với JWT và OAuth2.<br><br><b>Mục tiêu kiến thức:</b> Xây dựng Backend bảo mật, hiệu năng cao. Hiểu sự khác biệt giữa kiến trúc truyền thống và API hiện đại cho AI.",
        stack: ["Django", "FastAPI", "RESTful API Design", "Asynchronous Programming", "JWT/OAuth2", "Web Security"],
        links: [
            { name: "CS50 Web: Web Programming with Python (Harvard)", url: "https://cs50.harvard.edu/web/" },
            { name: "FastAPI Official Documentation & Tutorial", url: "https://fastapi.tiangolo.com/" }
        ]
    },
    {
        id: "ddia",
        title: "📖 Kiến trúc Hệ thống Phân tán",
        shortSource: "DDIA (Martin Kleppmann)",
        desc: "<b>Nội dung:</b><br>• <b>Scalability:</b> Phân biệt Vertical vs Horizontal Scaling, Load Balancing kỹ thuật điều phối tải.<br>• <b>Storage & Retrieval:</b> Hiểu sâu về LSM-trees vs B-trees và cách Database lưu trữ dữ liệu thực tế.<br>• <b>Distributed Systems:</b> Giải quyết bài toán Replication, Sharding, đồng bộ dữ liệu và định lý CAP.<br>• <b>Caching:</b> Sử dụng Redis để giảm tải cho database và tăng tốc độ phản hồi hệ thống.<br><br><b>Mục tiêu kiến thức:</b> Sở hữu tầm nhìn System Architect. Thiết kế hệ thống High Availability, Fault Tolerance cho hàng triệu người dùng.",
        stack: ["System Architecture", "Distributed Systems", "Scalability", "Redis (Caching)", "Database Sharding/Replication"],
        links: [
            { name: "Sách: Designing Data-Intensive Applications (O'Reilly)", url: "https://dataintensive.net/" }
        ]
    },
    {
        id: "phase3",
        title: "3. Thuật toán AI",
        shortSource: "CS50 AI (Harvard)",
        desc: "<b>Nội dung:</b><br>• <b>Search Algorithms:</b> Giải quyết bài toán tìm đường và tối ưu hóa với thuật toán A*, BFS, DFS.<br>• <b>Adversarial Search:</b> Xây dựng logic trò chơi đối kháng bằng Minimax và Alpha-Beta Pruning.<br>• <b>Uncertainty:</b> Làm việc với xác suất, mô hình Markov và mạng Bayes.<br>• <b>Logic & Optimization:</b> Constraint Satisfaction và các mô hình logic mệnh đề cho bài toán lập lịch.<br><br><b>Mục tiêu kiến thức:</b> Hình thành tư duy giải thuật AI nền tảng, sẵn sàng cho các vòng phỏng vấn Technical tại Big Tech.",
        stack: ["Python Algorithms", "Graph Search (A*)", "Adversarial Search", "Probabilistic Models", "Logic & Optimization"],
        links: [
            { name: "CS50 AI: Introduction to AI with Python (Harvard)", url: "https://cs50.harvard.edu/ai/" }
        ]
    },
    {
        id: "phase4",
        title: "4. Deep Learning & MLOps",
        shortSource: "Fast.ai + FSDL",
        desc: "<b>Nội dung:</b><br>• <b>Neural Networks:</b> Huấn luyện mô hình Deep Learning (CNN, RNN, Transformers) bằng PyTorch.<br>• <b>LLMs & RAG:</b> Xây dựng Retrieval-Augmented Generation, kết nối mô hình ngôn ngữ với dữ liệu riêng qua Vector DB.<br>• <b>Data Pipeline:</b> Xây dựng luồng thu thập và tiền xử lý dữ liệu tự động.<br>• <b>Model Tracking:</b> Sử dụng Weights & Biases để theo dõi độ chính xác và phát hiện Data Drift.<br><br><b>Mục tiêu kiến thức:</b> Khép kín vòng đời sản phẩm AI. Tích hợp AI vào sản phẩm thực tế, có giá trị thương mại.",
        stack: ["PyTorch", "Transformers", "LLMs Integration", "RAG Architecture", "Vector Databases (Qdrant/pgvector)", "MLflow/W&B"],
        links: [
            { name: "Practical Deep Learning for Coders (Fast.ai)", url: "https://course.fast.ai/" },
            { name: "Full Stack Deep Learning (FSDL)", url: "https://fullstackdeeplearning.com/" }
        ]
    },
    {
        id: "phase5",
        title: "5. Vận hành Hạ tầng",
        shortSource: "90DaysOfDevOps",
        desc: "<b>Nội dung:</b><br>• <b>Linux & Shell:</b> Làm chủ Ubuntu, viết Bash script tự động hóa quản trị server.<br>• <b>Dockerization:</b> Đóng gói Backend và AI thành các Container đồng nhất.<br>• <b>Orchestration:</b> Dùng Kubernetes để tự động nhân bản (Auto-scaling) và tự sửa lỗi (Self-healing).<br>• <b>CI/CD:</b> Thiết lập luồng GitHub Actions để tự động hóa Test và Deployment.<br>• <b>Observability:</b> Dùng Prometheus/Grafana để theo dõi tài nguyên hệ thống theo thời gian thực.<br><br><b>Mục tiêu kiến thức:</b> Hoàn thiện chân dung MLOps/Platform Engineer, có khả năng xây dựng hạ tầng máy chủ AI trên Cloud.",
        stack: ["Linux/Bash Scripting", "Docker", "Kubernetes", "CI/CD (GitHub Actions)", "Prometheus & Grafana"],
        links: [
            { name: "90DaysOfDevOps by Michael Cade (GitHub Repository)", url: "https://github.com/MichaelCade/90DaysOfDevOps" }
        ]
    }
];

const roadmapContainer = document.getElementById('roadmap-container');
const modalOverlay = document.getElementById('info-modal');
const modalBody = document.getElementById('modal-body-content');
const desktopDisplay = document.getElementById('info-display');

// Render Timeline
function renderRoadmap() {
    roadmapContainer.innerHTML = roadmapData.map(item => `
        <div class="node ${item.isParallel ? 'parallel-node' : ''}" onclick="showDetail('${item.id}', this)">
            <div class="node-box">
                <span class="node-title">${item.title}</span>
                <span class="node-source">Nguồn: ${item.shortSource}</span>
            </div>
        </div>
    `).join('');
}

// Logic hiển thị (PC hoặc Mobile)
function showDetail(id, element) {
    document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
    if(element) element.classList.add('active');

    const phase = roadmapData.find(p => p.id === id);
    
    // Tự động sinh danh sách link
    const linksHTML = phase.links.map(link => `
        <a href="${link.url}" target="_blank" style="color: #00e5ff; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; padding: 5px 0; transition: opacity 0.2s;" onmouseover="this.style.opacity='0.8'" onmouseout="this.style.opacity='1'">
            🔗 ${link.name}
        </a>
    `).join('');

    // Sắp xếp lại thứ tự cấu trúc HTML
    const contentHTML = `
        <h2 class="content-title">${phase.title}</h2>
        <div class="content-desc" style="line-height: 1.6;">${phase.desc}</div>
        
        <h3 style="margin-top:35px; font-size:1.1rem; border-bottom: 1px solid #333; padding-bottom:10px; color:#fff;">Tech Stack</h3>
        <div class="tech-grid">
            ${phase.stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>

        <h3 style="margin-top:35px; font-size:1.1rem; border-bottom: 1px solid #333; padding-bottom:10px; color:#fff;">📍 NGUỒN HỌC LIỆU</h3>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 15px;">
            ${linksHTML}
        </div>
    `;

    // Nếu màn hình <= 900px (Mobile/Tablet) -> Dùng Cửa sổ nổi
    if (window.innerWidth <= 900) {
        modalBody.innerHTML = contentHTML;
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden'; // Khóa cuộn nền
    } 
    // Nếu là PC -> Đẩy nội dung vào Panel bên phải
    else {
        desktopDisplay.innerHTML = contentHTML;
    }
}

// Đóng cửa sổ nổi
function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

// Đóng khi click nền mờ hoặc phím ESC
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
});

// Chạy lần đầu
renderRoadmap();
// Nếu là PC, tự động mở sẵn chặng 1
if (window.innerWidth > 900) {
    showDetail('phase1', document.querySelector('.node'));
}