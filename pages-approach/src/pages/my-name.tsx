import { useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";

const MyNamePage: NextPageWithLayout = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(null);

    useEffect(() => {
        setLoading(true);

        fetch("/api/hello")
            .then((res) => res.json())
            .then((data) => setName(data.name))
            .catch((err) => console.error("Error fetching API:", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <>Loading, please wait...</>
    }

    return <>My name is: {name}</>
}

MyNamePage.getLayout = function getLayout(page) {
    return <div style={{ backgroundColor: "grey" }}>
        {page}
    </div>
}

export default MyNamePage;