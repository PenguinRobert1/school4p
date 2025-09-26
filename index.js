function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



(function() {
  const galaxyElement = document.getElementById('galaxy');
  galaxyElement.style.position = 'absolute';
  galaxyElement.style.top = '0px';
  galaxyElement.style.left = '0px';
})();

    (function() {
      const mainElement = document.getElementById('main');
      mainElement.style.position = 'absolute';
      mainElement.style.top = '7px';
      mainElement.style.left = '10px';
    })();

    // Modal logic for viewing a larger galaxy image
    (function() {
      const openBtn = document.getElementById('openGalaxyBtn');
      const modal = document.getElementById('galaxyModal');
      const closeBtn = document.getElementById('closeGalaxyBtn');
      const modalImage = document.getElementById('modalImage');

      if (!openBtn || !modal) return; // nothing to do

      function openModal() {
        modal.setAttribute('aria-hidden', 'false');
        // optional: lock focus, prevent background scroll
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      openBtn.addEventListener('click', function () {
        // use the same source as the thumbnail; could swap to higher-res if available
        const thumb = openBtn.querySelector('img');
        if (thumb && modalImage) modalImage.src = thumb.src;
        openModal();
      });

      if (closeBtn) closeBtn.addEventListener('click', closeModal);

      // close when clicking outside the image
      modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
      });

      // close on escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
          closeModal();
        }
      });
    })();