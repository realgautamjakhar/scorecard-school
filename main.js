const tabBtns = document.querySelectorAll("#tab-btn");
const tabContent = document.querySelectorAll("#tab-content");

// Add click event listeners to the tab buttons and changing style adding tailwind classes
tabBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.setAttribute("aria-selected", true);
    btn.classList.remove("bg-gray-200");
    btn.classList.add("bg-gray-300");
    const btnIndex = btn.getAttribute("data-tabIndex");
    tabBtns.forEach((btn2) => {
      if (btn2.getAttribute("data-tabIndex") !== btnIndex) {
        btn2.classList.remove("bg-gray-300");
        btn2.classList.add("bg-gray-200");
        btn2.setAttribute("aria-selected", false);
      }
    });
    tabContent.forEach((content) => {
      if (content.getAttribute("data-tab-content") === btnIndex) {
        content.classList.remove("hidden");
        content.classList.add("grid");
      } else {
        content.classList.remove("grid");
        content.classList.add("hidden");
      }
    });
  });
});

// // Define a callback function to be called when a mutation occurs
// const mutationCallback = (mutationsList, observer) => {
//   for (let mutation of mutationsList) {
//     if (
//       mutation.type === "attributes" &&
//       mutation.attributeName === "aria-selected"
//     ) {
//       const selectedBtn = document.querySelector(
//         "#tab-btn[aria-selected='true']"
//       );
//       const idx = selectedBtn.getAttribute("data-tabIndex");
//       // renderContent(idx);
//       tabContent.forEach((content) => {
//         if (content.getAttribute("data-tab-content") === idx) {
//           content.classList.remove("hidden");
//           content.classList.add("grid");
//         } else {
//           content.classList.remove("grid");
//           content.classList.add("hidden");
//         }
//       });
//     }
//   }
// };

// // Create a new MutationObserver and start observing changes to the attributes of the tab buttons
// const observer = new MutationObserver(mutationCallback);
// tabBtns.forEach((btn) => {
//   observer.observe(btn, { attributes: true });
// });
