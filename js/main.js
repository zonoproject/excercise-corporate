  // インクルード
fetch("header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
    // ドロワーメニュー
    const target = document.getElementById("menu");
    target.addEventListener('click', () => {
      target.classList.toggle('open');
      const nav = document.getElementById("nav");
      nav.classList.toggle('in');
    });
  });

  fetch("footer.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });

  fetch("page_contact.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      if (!data == null) {
        // ignore
      }
      document.querySelector(".page-contact__wrap").innerHTML = data;
    })
    .catch(error => {
      // ignore
    });