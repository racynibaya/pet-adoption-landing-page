"use strict";

const heroSectionEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    console.log(entry);

    const { isIntersecting } = entry;

    if (!isIntersecting) {
      document.querySelector(".header").classList.add("sticky");
    } else {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    root: null,
    rootMargin: "-80px",
    threshold: 0,
  }
);

const navIconEl = [
  document.querySelector(".icon--open"),
  document.querySelector(".icon--close"),
];

navIconEl.forEach((el) => {
  el.addEventListener("click", (e) => {
    document.querySelector(".header").classList.toggle("nav-open");
  });
});

// navIconEl.addEventListener("click", (e) => {});
