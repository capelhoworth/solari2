import React from "react";

function TopTen({data}) {
    console.log(data)
    return(
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
}

export default TopTen;