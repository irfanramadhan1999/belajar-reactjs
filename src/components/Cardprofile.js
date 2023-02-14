import acsent from "../assets/acsent.png";
import '../css/style.css';
import profile from "../assets/profile.png";

// menyimpan  css ke dalam variable.
const wraper = {
  backgroundColor: "#00B6DF",
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${acsent})`,
  backgroundPosition: "bottom right",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const Cardprofile = () => {
  return (
    <body>
      <div style={wraper}>
        {/* 2. Css file */}
        <div className="card">
          <img src={profile} alt="" className="image-card" />
          <div className="jobdesk"> Front End Developer </div>
          <div className="name"> Irfan Ramadhani </div>
          <div className="deskripsi">
            work correctly both with client - side routing and a non - root
            public URL.Learn how to configure a non - root public URL by running
            `npm run build.
          </div>
          <button className="button">Contact Me</button>
        </div>

        <div className="card">
          <img src={profile} alt="" className="image-card" />
          <div className="jobdesk"> Front End Developer </div>
          <div className="name"> Irfan Ramadhani </div>
          <div className="deskripsi">
            yang berlebihan dan memungkinkan Anda untuk memulai mengembangkan
            aplikasi React dengan cepat dan mudah. Alat ini juga menyediakan
            seperangkat skrip yang memudahkan pengembangan, di antaranya
            hot-reloading untuk perubahan cepat dan pengujian terhadap aplikasi
            Anda.
          </div>
          {/* css inline */}
          <button className="button" style={{ backgroundColor: "yellow" }}>
            Contact Me
          </button>
        </div>

        <div className="card">
          <img src={profile} alt="" className="image-card" />
          <div className="jobdesk"> Front End Developer </div>
          <div className="name"> Irfan Ramadhani </div>
          <div className="deskripsi">
            work correctly both with client - side routing and a non - root
            public URL.Learn how to configure a non - root public URL by running
            `npm run build.
          </div>
          <button className="button">Contact Me</button>
        </div>
      </div>
    </body>
  );
};

export default Cardprofile;
