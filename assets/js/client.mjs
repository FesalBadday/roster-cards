"use strict";
// import students module
import { students } from './students.mjs';

// forEach loop to build social media and return them back the cards loop
const getSocialMedia = (getSocialMedia) => {
  let data = '';
  getSocialMedia.forEach((socialMedia) => {
    data += `<a href="${socialMedia.link}" target="_blank"><i class="bi bi-github"></i></a>`;
  });
  return data;
};

// forEach loop to build badges and return them back the cards loop
const getBadges = (getBadges) => {
  let data = '';
  getBadges.forEach((badges) => {
    data += `<i class="${badges.value}" title="${badges.name}"></i>`;
  });
  return data;
};

// forEach loop to build the cards
students.forEach(student => {
  document.querySelector('section').innerHTML +=
    `<article>
      <div class="badges">
        ${getBadges(student.badges)}
      </div>
      <img src="assets/images/students/${student.img}" alt="${student.studentName}">
      <div>
        <h2>${student.studentName}</h2>
        <p>${student.favLang}</p>
        <p class="title">${student.bio}</p>
        <p class="social">${getSocialMedia(student.socialMedia)}</p>
      </div>
    </article>`;
});