function ProfilePage() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (

        <div
            style={{
                padding: "30px"
            }}
        >

            <h1>
                User Profile
            </h1>

            <br />

            <h3>
                Name: {user?.name}
            </h3>

            <h3>
                Email: {user?.email}
            </h3>

            <h3>
                Role: {user?.role}
            </h3>

        </div>
    );
}

export default ProfilePage;