import ClipLoader from "react-spinners/ClipLoader";

function Loader() {

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px"
            }}
        >

            <ClipLoader size={50} />

        </div>
    );
}

export default Loader;