const sections = document.querySelectorAll("section[id]")  // Only sections with id
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link") 

  window.addEventListener("scroll", () => {
    let current = "" 
    const scrollPosition = window.scrollY + window.innerHeight  
    const pageHeight = document.documentElement.scrollHeight 

    // Detect current section
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70  // Offset for navbar
      const sectionHeight = section.clientHeight 

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id") 
      }
    }) 

    // If at the very bottom of the page → last nav link is active
    if (Math.ceil(scrollPosition) >= pageHeight-200) {
      const lastLink = navLinks[navLinks.length - 1] 
      current = lastLink.getAttribute("href").substring(1) 
    }

    // Update nav link classes
    navLinks.forEach(link => {
      link.classList.remove("active") 
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active") 
      }
    }) 
  }) 