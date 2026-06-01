import { useState, useEffect } from 'react';

export const useTypingEffect = (
  words = [],
  typeSpeed = 60,
  deleteSpeed = 30,
  pauseDuration = 2500,
  delayAfterDelete = 200
) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    let timer;
    const fullWord = words[wordIdx];

    const currentSpeed = isDeleting ? deleteSpeed : typeSpeed;
    const nextChar = isDeleting
      ? fullWord.slice(0, subText.length - 1)
      : fullWord.slice(0, subText.length + 1);

    timer = setTimeout(() => {
      setSubText(nextChar);
    }, currentSpeed);

    if (!isDeleting && subText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && subText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
      }, delayAfterDelete);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, wordIdx, words, typeSpeed, deleteSpeed, pauseDuration, delayAfterDelete]);

  return subText;
};
