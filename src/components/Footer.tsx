import syringImg from "../imgs/syringe.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <p>
            <span>Powered with</span> <img src={syringImg} alt="syring" width="20px"/>{" "}
            <span>by <a className="author-link" href="https://knwtechs.com" target="_blank">KNW Technologies</a></span>
          </p>
          <p>Copyright @ 2022</p>
        </div>
      </div>
    </footer>
  );
}
