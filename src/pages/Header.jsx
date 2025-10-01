import { Link } from "react-router-dom";
const Header = () => {
    return(
        <>
            <header>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <Link to="/modarch"><img src="https://www.modarchindia.com/assets/frontend/images/modarchindia/logo-green.png" /></Link>
                        </div>
                        <div className="col-md-8">
                        <ul className="nav nav-pills justify-content-center">
                            <li className="nav-item"><a href="#" className="nav-link">Featured</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Mixed Land-Use</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Commercial</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Residential</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Hospitality</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Interiors</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Institutionals</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Miscellaneous</a></li>
                        </ul>
                        </div>
                        <div className="col-md-2 text-center">
                            <a href="" class="btn btn-primary w-100 text-center">Get in Touch with Us</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;