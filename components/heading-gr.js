document.write(`
  <section id="navigation">

  <!-- Nav Bar -->
  <nav class="navbar navbar-dark navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="home-gr.html">
        <img src="./images/mike.jpg" alt="icon" width="25" height="25" class="navbar-img d-inline-block align-text-top"> Μιχάλης Χατζάκης</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse flex-row-reverse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <script src="components/main-menu-gr.js"></script>
        </ul>
      </div>
    </div>
  </nav>
  </section>
  `);