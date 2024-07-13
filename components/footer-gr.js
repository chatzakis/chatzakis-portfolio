document.write(`
    <!-- Contact -->

    <div id="animated-background-dark">
        <section id="contact" class="">
            <h3 class="text-center">Επικοινωνήστε μαζί μου!</h3>

            <div class="row justify-content-center mt-3">
                <div class="col-lg-5 text-center">
                    <a class="nav-link" href="#about"><i class="fa-solid fa-envelope"></i> chatzakisdev (at) gmail.com</a>
                    <a class="nav-link" href="#"><i class="fa-solid fa-location-dot"></i> Θεσσαλονίκη, Ελλάδα</a>
                    <div class="tool btn btn-light"><i class="fa-regular fa-file"></i> Βιογραφικό
                        <span class="tooltiptext">Ζητήστε το βιογραφικό μου με email ✉ ή στο LinkedIn 😊</span>
                    </div>
                    <div class="social-buttons mt-3">
                        <a class="btn btn-primary btn-lg" href="https://www.linkedin.com/in/michail-chatzakis-871284260/" target="_blank" role="button"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                        <a class="btn btn-primary btn-lg" href="https://github.com/chatzakis/" target="_blank" role="button"><i class="fa-brands fa-github"></i> GitHub</a>
                    </div>
                </div>
                
            </div>
        </section>


        <!-- Footer -->
        <footer id="footer">
            <p>© Copyright Michael Chatzakis
                <script>
                const date = new Date();
                document.write(date.getFullYear());
                </script>
            </p>
        </footer>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js"></script>
    <script>
        VANTA.NET({
            el: "#animated-background-dark",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.20,
            scaleMobile: 1.00,
            color: 0x598f92,
            backgroundColor: 0x31363f
        })
    </script>
`);