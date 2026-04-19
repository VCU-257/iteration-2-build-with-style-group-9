document.addEventListener("DOMContentLoaded", () => {
  const sliders = [
    { input: "fm1", output: "rangeVal" },
    { input: "fm2", output: "rangeVal2" },
    { input: "fm3", output: "rangeVal3" },
  ];

  sliders.forEach(({ input, output }) => {
    const inp = document.getElementById(input);
    const out = document.getElementById(output);
    if (inp && out) {
      out.textContent = inp.value;
      inp.addEventListener("input", () => {
        out.textContent = inp.value;
      });
    }
  });

  const saveButtons = document.querySelectorAll(".save-btn");
  const savedCount = document.getElementById("savedCount");
  const saveSuccess = document.getElementById("saveSuccess");
  let savedTotal = 0;

  saveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const icon = button.querySelector("i");
      const isSaved = button.classList.toggle("saved");

      if (isSaved) {
        savedTotal++;
        icon.classList.remove("bi-bookmark");
        icon.classList.add("bi-bookmark-fill");
        saveSuccess.classList.remove("d-none");
      } else {
        savedTotal--;
        icon.classList.remove("bi-bookmark-fill");
        icon.classList.add("bi-bookmark");
      }

      savedCount.textContent = savedTotal;
    });
  });

  const filterForm = document.getElementById("filterForm");
  const keywordInput = document.getElementById("fm4");
  const eventItems = document.querySelectorAll(".event-item");
  const resultsCount = document.getElementById("resultsCount");
  const filterSuccess = document.getElementById("filterSuccess");
  const emptyState = document.getElementById("emptyState");

  function filterEvents() {
    const keyword = keywordInput.value.trim().toLowerCase();
    let visibleCount = 0;

    eventItems.forEach((item) => {
      const title = item.dataset.title.toLowerCase();
      const category = item.dataset.category.toLowerCase();

      const matchesKeyword =
        keyword === "" ||
        title.includes(keyword) ||
        category.includes(keyword);

      if (matchesKeyword) {
        item.classList.remove("d-none");
        visibleCount++;
      } else {
        item.classList.add("d-none");
      }
    });

    resultsCount.textContent = visibleCount;
    emptyState.classList.toggle("d-none", visibleCount !== 0);
  }

  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterEvents();
    filterSuccess.classList.remove("d-none");
  });
});