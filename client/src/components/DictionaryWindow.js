import React, { useEffect, useState } from "react";

function Dictionary(props) {
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        if (isClosed) {
            props.isShown(false);
        }
    }, [isClosed])

    return (
        <div className="dictionary__wrapper shown">
            <span className="close" onClick={() => { setIsClosed(true) }}></span>

            <p className="dictionary__name">{props.name}</p>

            <div className="dictionary__form">
                <input
                    className="dictionary__form__word"
                    type="text"
                />
                <input
                    className="dictionary__form__trans"
                    type="text"
                />
            </div>
        </div>
    );
}

export default Dictionary;