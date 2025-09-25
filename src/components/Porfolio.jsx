import './style.css';

const Porfolio = () => {
    return (
        <div id="portfolio">
            <header>
                <nav>
                    <div className="logo">[Logo hoặc tên viết tắt của bạn]</div>
                    <ul>
                        <li><a href="#gioi-thieu">Giới thiệu</a></li>
                        <li><a href="#du-an">Dự án</a></li>
                        <li><a href="#lien-he">Liên hệ</a></li>
                    </ul>
                </nav>
            </header>
            <section id="gioi-thieu" className="hero">
                <div className="hero-content">
                    <h1>Xin chào, tôi là [Tên của bạn]</h1>
                    <p>Tôi là một [nghề nghiệp/mô tả ngắn gọn]. Tôi đam mê [những điều bạn đam mê] và thích tạo ra [những thứ bạn tạo ra].</p>
                    <a href="#du-an" className="btn">Xem dự án của tôi</a>
                </div>
                <div className="hero-image">
                    <hr width="50%" align="left"/>
                    <h1>Hình của bạn</h1>
                    <hr width="50%" align="left"/>
                </div>
            </section>
            <section id="du-an" className="projects">
                <h2>Dự án của tôi</h2>
                <div className="project-grid">
                    <div className="project-item">
                        <hr width="50%" align="left"/>
                    <h1>Hình dự án 1 của bạn</h1>
                    <hr width="50%" align="left"/>
                        <h3>Dự án 1</h3>
                        <p>Mô tả ngắn gọn về dự án 1.</p>
                        <a href="#" className="btn btn-secondary">Quay về trước</a>
                    </div>
                    <div className="project-item">
                        <hr width="50%" align="left"/>
                    <h1>Hình của bạn</h1>
                    <hr width="50%" align="left"/>
                        <h3>Dự án 2</h3>
                        <p>Mô tả ngắn gọn về dự án 2.</p>
                        <a href="#" className="btn btn-secondary">Quay về trước</a>
                    </div>
                    {/* Thêm các dự án khác vào đây */}
                </div>
            </section>
            <section id="lien-he" className="contact">
                <h2>Liên hệ</h2>
                <p>Hãy liên hệ với tôi qua các kênh sau:</p>
                <ul>
                    <li>Email: <a href="mailto:[email của bạn]">[email của bạn]</a></li>
                    <li>LinkedIn: <a href="[link LinkedIn của bạn]">LinkedIn</a></li>
                    <li>GitHub: <a href="[link GitHub của bạn]">GitHub</a></li>
                </ul>
            </section>
            <footer>
                <p>© [Năm] [Tên của bạn]. Tất cả các quyền được bảo lưu.</p>
            </footer>
        </div>
    );
}

export default Porfolio;