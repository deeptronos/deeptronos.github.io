// const createDynamicFooter = (foot) => { // TBH I don't think a footer would improve this site
//   const footer = document.createElement("footer");
//   footer.id = "footer";
//   footer.classList.add("container-fluid");
//   footer.classList.add("rounded-top");
//   footer.classList.add("p-3");
//   footer.classList.add("mt-3"); // allows for appropriate margin between footer and >vh page content!
//   // footer.classList.add("mt-auto");
//   // footer.classList.add("position-absolute");
//   footer.classList.add("bottom-0");
//   footer.textContent = "footer :D";
//   return footer;
// };

// document.body.addEventListener("htmx:afterSettle", function (event) {
//   if (event.target.id == "mainContent") {
//     const images = event.target.querySelectorAll("img");
//     if (images.length == 0) {
//       const old_footer = document.getElementById("footer");
//       if (old_footer != null) {
//         old_footer.remove();
//       }

//       console.log("no images, placing footer immediately.");
//       const view_area = document.getElementById("mainPage");
//       view_area.appendChild(createDynamicFooter());
//       const footer = document.getElementById("footer");
//       footer.classList.add("position-absolute");
//     } else {
//       let loadedCount = 0;
//       images.forEach((img) => {
//         if (img.complete) {
//           loadedCount++;
//         } else {
//           img.addEventListener("load", checkAllLoaded);
//           img.addEventListener("error", checkAllLoaded); // handle!
//         }
//       });
//       function checkAllLoaded() {
//         loadedCount++;
//         if (loadedCount == images.length) {
//           const old_footer = document.getElementById("footer");
//           if (old_footer != null) {
//             old_footer.remove();
//           }

//           console.log("All images loaded, placing footer.");
//           const view_area = document.getElementById("mainPage");
//           view_area.appendChild(createDynamicFooter());
//           const footer = document.getElementById("footer");
//           footer.classList.add("position-sticky");
//         }
//       }
//     }
//   }
// });
