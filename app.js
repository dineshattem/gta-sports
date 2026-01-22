const input = document.getElementById("playerSearch");
const cards = Array.from(document.querySelectorAll("#playerGrid .pCard"));

if (input) {
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach(c => {
      const name = (c.dataset.name || "").toLowerCase();
      c.style.display = name.includes(q) ? "" : "none";
    });
  });
}
