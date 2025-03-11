import React, { useState, useEffect } from "react";

const texts = ["Signifiya 2k25", "Coming Soon...", "Loading..."];

const Typewriter = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenTexts = 1000; // 1 sec before next text

    useEffect(() => {
        let timer;
        if (!isDeleting && displayText === texts[textIndex]) {
            timer = setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        } else {
            timer = setTimeout(() => {
                setDisplayText((prev) =>
                    isDeleting ? prev.slice(0, -1) : texts[textIndex].slice(0, prev.length + 1)
                );
            }, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, textIndex]);

    return (
        <h1 className="orbitron text-white font-light md:text-[4.5vw] text-[13vw]">
            {displayText}
            <span className="animate-ping">|</span> {/* Blinking cursor */}
        </h1>
    );
};

export default Typewriter;
