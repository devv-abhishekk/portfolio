import { useState, useEffect, useRef } from 'react';

export const useTypingEffect = (
  words = [],
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  delayAfterDelete = 500
) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Keep stable ref of words to prevent reference changes from resetting the effect
  const wordsRef = useRef(words);
  useEffect(() => {
    wordsRef.current = words;
  }, [words]);

  useEffect(() => {
    const currentWords = wordsRef.current;
    if (!currentWords || currentWords.length === 0) return;

    const fullWord = currentWords[wordIdx];
    let timer;

    if (!isDeleting && subText === fullWord) {
      // Pause at the end of the typed word before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && subText === "") {
      // Pause briefly after deletion before starting next word
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % currentWords.length);
      }, delayAfterDelete);
    } else {
      // Type or delete next character
      const currentSpeed = isDeleting ? deleteSpeed : typeSpeed;
      const nextChar = isDeleting
        ? fullWord.slice(0, subText.length - 1)
        : fullWord.slice(0, subText.length + 1);

      timer = setTimeout(() => {
        setSubText(nextChar);
      }, currentSpeed);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, wordIdx, typeSpeed, deleteSpeed, pauseDuration, delayAfterDelete]);

  return subText;
};
