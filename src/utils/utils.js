export function getInitialSection() {
  const saved = localStorage.getItem("activeSection");
  return saved || "Home";
}