import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div
            style={{
                width: "250px",
                minHeight: "100vh",
                background: "#1e293b",
                color: "white",
                padding: "20px"
            }}
        >

            <h2>Menu</h2>

            <br />

            <div>
                <Link to="/dashboard">
                    Dashboard
                </Link>
            </div>

            <br />

            <div>
                <Link to="/rooms">
                    Rooms
                </Link>
            </div>

            <br />

            <div>
                <Link to="/complaints">
                    Complaints
                </Link>
            </div>

            <br />

            <div>
                <Link to="/payments">
                    Payments
                </Link>
            </div>

            <br />

            <div>
                <Link to="/attendance">
                    Attendance
                </Link>
            </div>

        </div>
    );
}

export default Sidebar;