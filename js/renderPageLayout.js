function MainNavigation() {
  document.write(`
  <!-- Start Navbar  -->
  <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
  <div class="container">
  <button class="navbar-toggler text-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <span class="navbar-toggler-icon"> </span>
    </button>
    <div class="d-block d-lg-none">
      <a class="navbar-brand h-50 w-50" href="index.html"><img src="images/logo2.png" alt="" class="nav-logo mx-auto img-fluid"></a>
    </div>
    <div class="d-lg-none d-block">
    <a href="" class="header__icon text-decoration-none link-primary text-danger">
    <img src="images/global.svg" alt="">
  </a>
  <a href="log-in.html" class="header__icon text-decoration-none link-primary text-danger link-primary">
  <img src="images/profile.svg" alt="">
</a>
    </div>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-secondary link-primary fw-medium fw-500" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary link-primary fw-medium fw-500" href="about-us.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary link-primary fw-medium fw-500" href="services.html">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary link-primary fw-medium fw-500" href="faq.html">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary link-primary fw-medium fw-500" href="location.html">Locations</a>
        </li>
        
      </ul>
      <div>
        <a class="navbar-brand me-7" href="index.html"><img src="images/logo.png" alt="" class=""></a>
      </div>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center d-flex">
      <div>
      <a href="" class="header__icon text-decoration-none link-primary text-danger">
        <img src="images/global.svg" alt="">
        <span>العربية</span>
      </a>
    
      <a href="profile.html" class="header__icon text-decoration-none link-primary text-danger link-primary mx-2">
      <img src="images/profile.svg" alt="">
    </a>
      <a href="contact-us.html" class="header__icon text-decoration-none link-primary text-danger link-primary mx-2">
      <img src="images/headphone.svg" alt="">
    </a>
      <a href="" class="header__icon text-decoration-none link-primary text-danger link-primary mx-2" data-bs-toggle="modal" data-bs-target="#SearchModal">
      <img src="images/search-normal.svg" alt="">
    </a>
    
  </div>
</ul>
</div>
</div>
</nav>
<!-- popup search  -->
<div class="modal fade" id="SearchModal" tabindex="-1" aria-labelledby="SearchModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg">
<div class="modal-content">
  <div class="modal-header border-0">
    <h1 class="modal-title fs-5" id="SearchModalLabel"></h1>
    <button type="button" class="btn-close text-dark" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body py-5 h-100">
  <div class=" d-flex justify-content-center">
  <form method="post" action="/contact#ContactFooter" id="ContactFooter" accept-charset="UTF-8" class="footer__newsletter newsletter-form col-11">
    <input type="hidden" class="form-control" name="form_type" value="customer" />
    <input type="hidden" class="form-control" name="utf8" value="✓" />
    <input type="hidden" class="form-control" name="contact[tags]" value="newsletter">
    <div class="newsletter-form__field-wrapper">
    <div class="field border border-warning rounded-3">
    <input
      id="NewsletterForm--footer"
      type="search"
      name="contact[search]"
      class="form-control border-0 inp-search"
      value=""
      aria-required="true"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="search"
      
      placeholder="Search here...."
      required
    >
    <button type="submit" class="newsletter-form__button field__button form-control border-0 text-warning" name="commit" id="Subscribe" aria-label="Subscribe">
      <img src="images/search-normal.svg" alt="">
    </button>
    
    </div>
    </div>
  </form>
  </div>
  <div class="py-8 col-11">
  </div>
  </div>
</div>
</div>
</div>
<!--end popup search  -->
  <!-- End Navbar  -->
  `);
}
function MainFooter() {
  document.write(`
  <!-- Start Footer  -->
  <footer class="text-center bg-primary py-5">
  <div class="bg-footer">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-start">
        <div class="col-lg-3 d-flex align-items-center justify-content-start">
          <img src="images/Group 8.png" alt="" width="100" class="img-fluid">
        </div>
<!-- border  -->
<div class="border-bottom border-white mt-4 w-35 text-center d-sm-none d-flex mx-auto"></div>
<h5 class="mt-4 text-white  d-flex flex-column justify-content-start align-items-start d-block d-lg-none">Quick links</h5>
        <div class="col-lg-3 col-6">
          <div class=" hover-links d-flex flex-column justify-content-start align-items-start">
              <a href="index.html" class="text-white text-decoration-none link-secondary mx-3 mx-sm-0">Home</a>
              <a href="about-us.html" class="text-white text-decoration-none link-secondary mx-3 mx-sm-0">About</a>
              <a href="contact-us.html" class="text-white text-decoration-none link-secondary mx-3 mx-sm-0">Contact us</a>
          </div>
        </div>
        <div class="col-lg-3 col-6">
          <div class=" hover-links d-flex flex-column justify-content-start align-items-start">
              <a href="services.html" class="text-white text-decoration-none link-secondary mx-3 mx-sm-0">Services</a>
              <a href="location.html" class="text-white text-decoration-none link-secondary mx-3 mx-sm-0">Location</a>
              <a href="faq.html" class="text-white text-decoration-none link-secondary mx-3 mx-sm-0">FAQ</a>
          </div>
        </div>
        <!-- border  -->
  <div class="border-bottom border-white mt-4 w-35 text-center d-sm-none d-flex mx-auto"></div>
        <div class="col-lg-3 d-flex flex-column justify-content-lg-start mt-4 mt-lg-0">
          <div class="d-flex flex-column justify-content-lg-start align-items-start">
            <h6 class="text-white">get in touch</h6>
            <div class="social-links d-flex">
              <a href="" class="d-flex align-items-center justify-content-center rounded-5 mx-1 facebook fs-5 text-decoration-none" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="" class="d-flex align-items-center justify-content-center rounded-5 mx-1 tiktok fs-5 text-decoration-none" target="_blank"><i class="bi bi-twitter"></i></a>
              <a href="" class="d-flex align-items-center justify-content-center rounded-5 mx-1 instagram fs-5 text-decoration-none" target="_blank"><i class="bi bi-instagram"></i></a>
              <a href="#" class="d-flex align-items-center justify-content-center rounded-5 mx-1 whatsapp fs-5 text-decoration-none" target="_blank"><i class="bi bi-whatsapp"></i></a>
              <a href="#" class="d-flex align-items-center justify-content-center rounded-5 mx-1 phone fs-5 text-decoration-none" target="_blank"><i class="fa-solid fa-phone"></i></a>
              <a href="#" class="d-flex align-items-center justify-content-center rounded-5 mx-1 linkedin fs-5 text-decoration-none" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#" class="d-flex align-items-center justify-content-center rounded-5 mx-1 envelope fs-5 text-decoration-none" target="_blank"><i class="fa-solid fa-envelope"></i></a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <!-- border  -->
  <div class="border-bottom border-white mt-4 w-35 text-center d-sm-none d-flex mx-auto"></div>
  <!-- second -->
  <div class="py-1">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-12 mt-3">
          <span class="fs-6 text-white">@copyright.all right deserved</span>
          <p class="fs-7 text-white mt-3">Powered by <a href="https://emcan-group.com/en" class="text-decoration-none text-white" target="_blank">Emcan</a> </p>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-- End Footer  -->
  `);
}

function includeSidebar() {
  document.write(`
  <!--========= start sidebar  =========-->
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header bg-white border-bottom">
    <img src="images/logo.png" alt="" class="" />
    <button type="button" class="btn-close text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body bg-white hover-links">
  <form>
  <div class="border rounded-2 d-flex">
  <input type="search" class="form-control border-0 bg-transparent" placeholder="search.." required>
  <button class="btn btn-dark rounded-2"><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>
  </form>
    <ul class="navbar-nav ms-auto me-auto mb-lg-0 d-flex px-3">
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-primary" href="index.html">Home</a>
      </li>
      <li class="nav-item me-3 fw-bold">
      <a class="nav-link text-black link-primary" href="about-us.html">About Us</a>
      </li>
      <li class="nav-item me-3 fw-bold">
      <a class="nav-link text-black link-primary" href="contact-us.html">Contact Us</a>
      </li>
      <li class="nav-item me-3 fw-bold">
      <a class="nav-link text-black link-primary" href="reservation.html">Reservation</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-primary" href="log-in.html">Login</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-primary" href="sign-up.html">Sign Up</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-primary" href="services.html">Services</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
          <a class="nav-link text-black active link-primary" href="faq.html">FAQ</a>
      </li>
      <li class="nav-item me-3 fw-bold ">
      <a class="nav-link text-black active link-primary" href="profile.html">
      <img src="images/global.svg" alt="">
      language</a>
      </li>
    
    
      
    
    </ul>
  </div>
</div>
<!--========= end sidebar  =========-->
  `);
}



