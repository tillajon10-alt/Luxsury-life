import "./location.css";
function Location() {
  return (
    <>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          href="https://yandex.uz/maps/org/algoritm_it_center/97234694621/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Algoritm IT Center
        </a>
        <a
          href="https://yandex.uz/maps/21314/namangan/category/educational_center/184106168/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          O‘quv markazi Namanganda
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/org/algoritm_it_center/97234694621/?ll=71.674173%2C41.003280&z=18.72"
          width="1280"
          height="400"
          frameBorder="1"
          allowFullScreen={true}
          style={{ position: "relative", border: "1px solid #ccc" }}
          title="Algoritm IT Center Map"
        />
        <div className="main">
          <div className="main__text">
            <div className="left">
              <h2 className="main__text--title">Location of our Hotelos</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                industry. Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="right">
              <input type="text" placeholder="Enter email Please" className="main__input" />
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
