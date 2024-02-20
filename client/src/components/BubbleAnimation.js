import React, {useRef} from "react";

function BubbleAnimation() {
    const bubbles = useRef([]);
    const bubblesArray = [];

    function bubbleRender() {
        for (let i = 0; i <= 9; i++) {
            bubblesArray.push(
                <div className={`bubble__item x${i}`} ref={bubble => bubbles.current[i] = bubble}>
                            {bubbleSizing(i)}
                    </div>
            )
        }

        return bubblesArray;
    }

    function bubbleSizing(bubbleId) {
        let randomSize = Math.floor(Math.random() * (200 - 50) + 50);
        
        if (bubbles.current[bubbleId]) {
            bubbles.current[bubbleId].style.width = `${randomSize}px`
            bubbles.current[bubbleId].style.height = `${randomSize}px`
        }
        

    }

    return(
        <div className="bubble__wrapper">
            {bubbleRender()}
        </div>
    );
}

export default BubbleAnimation;