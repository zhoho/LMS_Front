document.addEventListener("DOMContentLoaded", function () {
  var cancelBtn = document.querySelector(".cancel-btn");

  cancelBtn.addEventListener("click", function () {
    var userResponse = confirm(
      "All information you've created so far will disappear. Do you want to continue?"
    );
    if (userResponse) {
      window.location.href = "course.html"; // 여기에 이동하려는 페이지의 URL을 적으세요.
    }
  });
});
