<button onclick="openMultipleUrls()">複数のURLを開く</button>

<script>
function openMultipleUrls() {
  const urls = [
    "https://www.example.com",
    "https://www.google.com",
    "https://www.yahoo.co.jp"
  ];

  urls.forEach(url => {
    window.open(url, "_blank");
  });
}
</script>
