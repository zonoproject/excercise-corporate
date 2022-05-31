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

  const pageContact = document.querySelector(".page-contact__wrap");
  if (pageContact !== null) {
    fetch("page_contact.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        pageContact.innerHTML = data;
      });
  } else {

  };