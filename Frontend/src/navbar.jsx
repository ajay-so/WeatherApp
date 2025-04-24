
export default function NavBar() {
  const styles = { fontSize: "24px", fontWeight: "bold", color: "green" }
  return (
    <div className="sticky-top">
      <nav style={{ height: "70px" }} className="navbar bg-light shadow-sm border-bottom border-info">
        <div className="container-fluid container d-flex  justify-content-between">
          <div>
            <a style={styles} className="navbar-brand">Weather App</a>
          </div>
          <div>
            <div className="rounded-circle"> <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="rounded-circle" alt="profile_image"  style={{ width: "40px", height: "40px"}}/></div>
          </div>
        </div>
      </nav>
    </div>
  )
}
