class Header {
  render() {
    const element = document.querySelector("div");
    const container = document.querySelector("header");
    element.className = "menu container";
    element.innerHTML = `  
      <nav class="navbar">
        <img
          id="logosize2"
          class="logo-2"
          src="/Assets/IMG/robot_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
        />
          <div class="socials">
            
            <a href="https://x.com/override_inc">
              <div class="social">
                <img src="/Assets/IMG/ICON/s2.svg" alt="" />
              </div>
            </a>
            <a href="https://www.instagram.com/jmmzz18">
              <div class="social">
                <img src="/Assets/IMG/ICON/s3.svg" alt="" />
              </div>
            </a>
          </div>
          <p>Simulación</p>
      </nav>
    `;

    container.appendChild(element);
  }
}

export default Header;
