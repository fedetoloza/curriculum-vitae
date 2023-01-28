const sidebarCollapse = document.getElementById("sidebarCollapse");
const sidebar = document.getElementById("sidebar");

sidebarCollapse.addEventListener("click", () => {
  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");

    sidebarCollapse.children[0].innerHTML = '<i class="fas fa-times"></i>';
  } else {
    sidebar.classList.add("active");
    sidebarCollapse.children[0].innerHTML = '<i class="fas fa-bars"></i>';
  }
});
