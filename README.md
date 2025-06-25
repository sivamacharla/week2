# Web Development Project 3 - Flashcards App

Submitted by: **Siva Macharla Vimjam**

This web app: A flashcard application that displays a set of cards one at a time. Each card shows either a question or answer, flips on correct input to reveal the other side, and includes features like answer checking, streak tracking, shuffle mode, and mastery removal.

Time spent: **4 hours** spent in total

---

## Required Features

The following required functionality is completed:

-  The app displays the title of the card set, a short description, and the total number of cards.
-  A list of card pairs is created using an array of objects, each containing `question` and `answer`.
-  A single card is displayed at a time.
-  Only one half of the card is shown initially.
-  A clearly labeled input box and submit button allow the user to enter a guess before seeing the answer.
-  Clicking the submit button with an incorrect answer shows visual feedback (`Try again!`).
-  Clicking the submit button with a correct answer shows the correct answer (`Correct!`) and flips the card.
-  Users can navigate forward and backward through the cards using next/previous buttons.
-  Wrap-around navigation is **not allowed** — buttons are disabled at the ends.

---

## Stretch Features

The following **stretch** features are implemented:

-  **Shuffle button** randomizes the card sequence.
-  Cards remain in sequence unless shuffled.
-  User answers are accepted even if partially correct (ignores case, punctuation, extra spaces).
-  Current and longest streak counters are displayed and updated:
  - **Current Streak** increments on correct answers.
  - **Longest Streak** updates if current exceeds max.
  -  Incorrect answers reset current streak.
-  A **"Mark as Mastered"** button removes the current card from the pool.
-  When all cards are mastered, a congratulatory message is shown.
-  Cards contain images in addition to or in place of text.
-  Cards are styled differently based on difficulty (easy/medium/hard) and subject.

---

## Demo

### Video Walkthrough
Here's a walkthrough of the implemented features:

<img src="https://submissions.us-east-1.linodeobjects.com/web102/5b-e8Y4H.gif" title="Video Walkthrough" alt="Video Walkthrough" />

---

## Notes

- Implementing state-driven card flipping only after a correct guess required careful state management.
- Input had to reset correctly between cards to avoid leaking prior values.
- Streak and mastery logic had to be managed cleanly to avoid removing wrong cards.
- Extra attention was paid to accessibility, button disabling, and mobile-friendly layout.

---

## License

Copyright 2025 Siva Macharla Vimjam

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at:

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
