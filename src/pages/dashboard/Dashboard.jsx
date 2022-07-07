import Button from "../../components/common/button/Button";
import HoverImage from "../../components/homepage/hover-image/HoverImage";
import "./Dashboard.css";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  return (
      <div className="dashboard">
        <div className="story story-1st">
          <div className="left">
            <h1 style={{ fontSize: "3rem" }}>
              Tạo đội bóng và tìm kiếm đối thủ của bạn
            </h1>
            <p style={{ fontSize: "1.1rem" }}>
              Quản lý đội bóng của bạn dễ dàng. Tìm kiếm đối thủ phù hợp với đội
              bóng của bạn.
            </p>
            <Button
              text="Tao Doi Bong"
              height="3rem"
              width="10rem"
              fontSize="1rem"
              action={(e) => navigate('/create')}
            />
          </div>
          <div className="right">
            {/* <img src={require('../../assets/messi.jpg')} alt='' /> */}
          </div>
        </div>
        <div className="story story-2nd">
          <img
            src={require("../../assets/thay-park.jpg")}
            alt=""
            style={{ width: "671px", height: "450px" }}
          />
          <div className="right">
            <h1 style={{ fontSize: "2.5rem", marginBottom: "5rem" }}>
              Nhanh chóng và tiện lợi
            </h1>
            <div className="two-child-div">
              <div className="child">
                <img
                  src={require("../../assets/tactics.png")}
                  style={{ width: "5rem" }}
                  alt=""
                />
                <h3>Tổ chức đội bóng</h3>
                <p>
                  Tạo đội bóng, thêm thành viên, quản lý thông tin đội bóng,
                  nhắn tin, tổ chức chiến thuật.
                </p>
              </div>
              <div className="child">
                <img
                  src={require("../../assets/handshake.png")}
                  style={{ width: "5rem" }}
                  alt=""
                />
                <h3>Tìm kiếm đối thủ</h3>
                <p>
                  Tìm kiếm đối thủ phù hợp về trình độ dựa trên bảng phân hạng
                  đội bóng.
                </p>
              </div>
            </div>
            <Button
              text="Đăng ký ngay"
              height="3rem"
              width="10rem"
              fontSize="1rem"
              action={(e) => navigate('/register')}
            />
          </div>
        </div>
        <div className="story story-3rd">
          <div className="title">
            <h1 style={{ fontSize: "2.5rem", margin: 0 }}>
              Đa dạng các chức năng
            </h1>
            <p style={{ textAlign: "center" }}>
              Cung cấp mọi công cụ để bạn tổ chức một trận đấu.
            </p>
          </div>
          <div className="grid">
            <HoverImage image="pep.jpg" text="Quản lý thông tin đội bóng" />
            <HoverImage image="battay.jpg" text="Bắt đối phù hợp" />
            <HoverImage image="strategy.jpg" text="Điều chỉnh chiến thuật" />
            <HoverImage
              image="feedback.jpg"
              text="Trao đổi tin nhắn trực tuyến"
            />
            <HoverImage image="statistics.jpg" text="Lịch sử đấu và thống kê" />
            <HoverImage image="ranking.jpg" text="Xếp hạng đội bóng" />
          </div>
        </div>
        <div className="story story-4th">
          <h1 style={{ fontSize: "2.5rem" }}>Đánh giá của người dùng</h1>
          <img
            src={require("../../assets/reviews.png")}
            style={{ height: "11rem" }}
            alt=""
          />
        </div>
        <div className="story story-5th">
          <h1 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>
            Subscribe để nhận thông báo mới nhất
          </h1>
          <div className="row">
            <input type="text" placeholder="Nhập email của bạn" />
            <Button text="Subscribe" height="3rem" width="7rem" />
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Dashboard;
