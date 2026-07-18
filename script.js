document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("trackBtn");

  if (btn) {
    btn.addEventListener("click", function () {
      const trackingId = document.getElementById("trackingID").value.trim();

      if (trackingId === "") {
        alert("Please enter Tracking ID");
        return;
      }

      window.location.href =
        "track.html?tracking=" + encodeURIComponent(trackingId);
    });
  }
});