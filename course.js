document.addEventListener("DOMContentLoaded", function () {
  var writeBtn = document.querySelector(".write-btn");

  writeBtn.addEventListener("click", function () {
    window.location.href = "write.html"; // 이동하려는 페이지의 URL
  });
});
