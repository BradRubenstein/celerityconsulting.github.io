window.showOnScrollSetup = () => {
  const callback = function(entries) {
    console.log("Toggle is-visible")
    entries.forEach(entry => {
      console.log( entry );
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  };
  const observer = new IntersectionObserver(callback);

  const targets = document.querySelectorAll(".show-on-scroll");
  targets.forEach(function(target) {
    observer.observe(target);
  });
  console.log("ShowOnScroll Setup Complete")
};
