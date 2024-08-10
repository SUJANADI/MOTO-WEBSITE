// (function() {
//   "use strict";

//   /**
//    * Apply .scrolled class to the body as the page is scrolled down
//    */
//   function toggleScrolled() {
//     const selectBody = document.querySelector('body');
//     const selectHeader = document.querySelector('#header');
//     if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
//     window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
//   }

//   document.addEventListener('scroll', toggleScrolled);
//   window.addEventListener('load', toggleScrolled);

//   /**
//    * Mobile nav toggle
//    */
//   const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

//   function mobileNavToogle() {
//     document.querySelector('body').classList.toggle('mobile-nav-active');
//     mobileNavToggleBtn.classList.toggle('bi-list');
//     mobileNavToggleBtn.classList.toggle('bi-x');
//   }
//   mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

//   /**
//    * Highlight active nav link based on current URL
//    */
//   function highlightActiveNavLink() {
//     const currentLocation = window.location.href;
//     const navLinks = document.querySelectorAll('.navmenu a');

//     navLinks.forEach(link => {
//       if (currentLocation.includes(link.href)) {
//         link.classList.add('active');
//       } else {
//         link.classList.remove('active');
//       }
//     });
//   }

//   highlightActiveNavLink(); // Call initially to highlight the correct link on page load

//   /**
//    * Scrollspy functionality for navigation menu
//    */
//   function navmenuScrollspy() {
//     const sections = document.querySelectorAll('.section'); // Assuming sections have a class 'section'

//     sections.forEach(section => {
//       const navLinks = document.querySelectorAll('.navmenu a[href="#' + section.id + '"]');
//       const scrollPosition = window.scrollY;

//       if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
//         navLinks.forEach(link => link.classList.add('active'));
//       } else {
//         navLinks.forEach(link => link.classList.remove('active'));
//       }
//     });
//   }

//   window.addEventListener('load', navmenuScrollspy);
//   document.addEventListener('scroll', navmenuScrollspy);

//   /**
//    * Hide mobile nav on same-page/hash links
//    */
//   document.querySelectorAll('.navmenu a').forEach(navmenu => {
//     navmenu.addEventListener('click', () => {
//       if (document.querySelector('.mobile-nav-active')) {
//         mobileNavToogle();
//       }
//       highlightActiveNavLink(); // Highlight the clicked link
//     });
//   });

//   /**
//    * Toggle mobile nav dropdowns
//    */
//   document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
//     navmenu.addEventListener('click', function(e) {
//       e.preventDefault();
//       this.parentNode.classList.toggle('active');
//       this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
//       e.stopImmediatePropagation();
//     });
//   });

//   /**
//    * Preloader
//    */
//   const preloader = document.querySelector('#preloader');
//   if (preloader) {
//     window.addEventListener('load', () => {
//       preloader.remove();
//     });
//   }

//   /**
//    * Scroll top button
//    */
//   let scrollTop = document.querySelector('.scroll-top');

//   function toggleScrollTop() {
//     if (scrollTop) {
//       window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
//     }
//   }
//   scrollTop.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });

//   window.addEventListener('load', toggleScrollTop);
//   document.addEventListener('scroll', toggleScrollTop);

//   /**
//    * Animation on scroll function and init
//    */
//   function aosInit() {
//     AOS.init({
//       duration: 600,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     });
//   }
//   window.addEventListener('load', aosInit);

//   /**
//    * Initiate glightbox
//    */
//   const glightbox = GLightbox({
//     selector: '.glightbox'
//   });

//   /**
//    * Init isotope layout and filters
//    */
//   document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
//     let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
//     let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
//     let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

//     let initIsotope;
//     imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
//       initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
//         itemSelector: '.isotope-item',
//         layoutMode: layout,
//         filter: filter,
//         sortBy: sort
//       });
//     });

//     isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
//       filters.addEventListener('click', function() {
//         isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
//         this.classList.add('filter-active');
//         initIsotope.arrange({
//           filter: this.getAttribute('data-filter')
//         });
//         if (typeof aosInit === 'function') {
//           aosInit();
//         }
//       }, false);
//     });

//   });

//   /**
//    * Frequently Asked Questions Toggle
//    */
//   document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
//     faqItem.addEventListener('click', () => {
//       faqItem.parentNode.classList.toggle('faq-active');
//     });
//   });

//   /**
//    * Init swiper sliders
//    */
//   function initSwiper() {
//     document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
//       let config = JSON.parse(
//         swiperElement.querySelector(".swiper-config").innerHTML.trim()
//       );

//       if (swiperElement.classList.contains("swiper-tab")) {
//         initSwiperWithCustomPagination(swiperElement, config);
//       } else {
//         new Swiper(swiperElement, config);
//       }
//     });
//   }

//   window.addEventListener("load", initSwiper);

//   /**
//    * Correct scrolling position upon page load for URLs containing hash links.
//    */
//   window.addEventListener('load', function(e) {
//     if (window.location.hash) {
//       if (document.querySelector(window.location.hash)) {
//         setTimeout(() => {
//           let section = document.querySelector(window.location.hash);
//           let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
//           window.scrollTo({
//             top: section.offsetTop - parseInt(scrollMarginTop),
//             behavior: 'smooth'
//           });
//         }, 100);
//       }
//     }
//   });

// /*RESPONSIVE VIDEO */

// // //get all vids
// // var video =  document.querySelectorAll('video')

// // //add source to video tag
// // function addSourceToVideo(element, src) {
// //     var source = document.createElement('source');
// //     source.src = src;
// //     source.type = 'video/mp4';
// // 	console.log(src);
// //     element.appendChild(source);
	
// // }

// // //determine screen size and select mobile or desktop vid
// // function whichSizeVideo(element, src) {
// // 	var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
// // 	if (windowWidth > 1200 ) {
// // 		addSourceToVideo( element, src.dataset.desktopVid);
// // 	} else {
// // 		addSourceToVideo(element, src.dataset.mobileVid);
// // 	}
// // }

// // //init only if page has videos
// // function videoSize() {
// // 	if (video !== undefined) {
// // 	video.forEach(function(element, index) {
// // 			whichSizeVideo(  
// // 				element, //element
// // 				element  //src locations
// // 			);	
// // 		});
// // 	}
// // }
// // videoSize();


// // //note IE11 polyfill needed for each, convert to for loop.

// // // Get all <iframe> tags
// // var iframes = document.querySelectorAll('iframe');

// // // Add source to <iframe> tag
// // function addSourceToIframe(element, src) {
// //     element.src = src;
// //     console.log(src);
// // }

// // // Determine screen size and select mobile or desktop video
// // function whichSizeVideo(element) {
// //     var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
// //     if (windowWidth > 1200) {
// //         addSourceToIframe(element, element.dataset.desktopVid);
// //     } else {
// //         addSourceToIframe(element, element.dataset.mobileVid);
// //     }
// // }

// // // Init only if page has <iframe> tags
// // function videoSize() {
// //     if (iframes.length > 0) {
// //         for (var i = 0; i < iframes.length; i++) {
// //             var element = iframes[i];
// //             whichSizeVideo(element);
// //         }
// //     }
// // }

// // videoSize();

// document.addEventListener("DOMContentLoaded", function() {
//   var videoElement = document.getElementById('background-video');
//   var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

//   if (windowWidth > 1199) {
//       videoElement.src = "assets/img/video/bg_video_website.mp4";
//   } else {
//       videoElement.src = "assets/img/video/website video animation vertical.mp4";
//   }
// });


// /*team video pause button */
// const videoContainer = document.getElementById('videoContainer');
// const video = document.getElementById('myVideo');
// const playButton = document.getElementById('playButton');

// playButton.addEventListener('click', () => {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// });

// video.addEventListener('play', () => {
//   videoContainer.classList.remove('paused');
// });

// video.addEventListener('pause', () => {
//   videoContainer.classList.add('paused');
// });

// })();


(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Highlight active nav link based on current URL
   */
  function highlightActiveNavLink() {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('.navmenu a');

    navLinks.forEach(link => {
      if (currentLocation.includes(link.href)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  highlightActiveNavLink(); // Call initially to highlight the correct link on page load

  /**
   * Scrollspy functionality for navigation menu
   */
  function navmenuScrollspy() {
    const sections = document.querySelectorAll('.section'); // Assuming sections have a class 'section'

    sections.forEach(section => {
      const navLinks = document.querySelectorAll('.navmenu a[href="#' + section.id + '"]');
      const scrollPosition = window.scrollY;

      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        navLinks.forEach(link => link.classList.add('active'));
      } else {
        navLinks.forEach(link => link.classList.remove('active'));
      }
    });
  }

  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('.navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
      highlightActiveNavLink(); // Highlight the clicked link
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /*RESPONSIVE VIDEO */
  // Video-related code here (commented out for clarity)

  document.addEventListener("DOMContentLoaded", function() {
    var videoElement = document.getElementById('background-video');
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

    if (windowWidth > 1199) {
        videoElement.src = "assets/img/video/bg_video_website.mp4";
    } else {
        videoElement.src = "assets/img/video/website video animation vertical.mp4";
    }
  });

  /*team video pause button */
  const videoContainer = document.getElementById('videoContainer');
  const video = document.getElementById('myVideo');
  const playButton = document.getElementById('playButton');

  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener('play', () => {
    videoContainer.classList.remove('paused');
  });

  video.addEventListener('pause', () => {
    videoContainer.classList.add('paused');
  });

  // iOS specific code
  // function isIOS() {
  //   return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  // }

  // window.addEventListener('load', function() {
  //   if (isIOS()) {
  //     var iosImage = document.createElement('img');
  //     iosImage.src = 'https://i.postimg.cc/sgkRKbjF/ios-img.png';  // Replace with the actual image URL
  //     iosImage.alt = 'iOS Only Image';
  //     iosImage.style.display = 'block';
  //     document.body.appendChild(iosImage);
  //   }
  // });

})();
