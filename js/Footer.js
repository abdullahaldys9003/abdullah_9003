function Footer() {
  return(
    `  <div class="container p-4">
    <section class="mb-4">
      <!-- WhatsApp -->
      <a class="btn btn-outline-dark btn-floating m-1" href="https://wa.me/yourwhatsapplink" role="button">
        <i class="fab fa-whatsapp"></i>
      </a>

      <!-- Facebook -->
      <a class="btn btn-outline-dark btn-floating m-1" href="https://www.facebook.com/yourfacebookprofile" role="button">
        <i class="fab fa-facebook-f"></i>
      </a>

      <!-- Instagram -->
      <a class="btn btn-outline-dark btn-floating m-1" href="https://www.instagram.com/yourinstagramprofile" role="button">
        <i class="fab fa-instagram"></i>
      </a>

      <!-- Telegram -->
      <a class="btn btn-outline-dark btn-floating m-1" href="https://t.me/yourtelegramlink" role="button">
        <i class="fab fa-telegram"></i>
      </a>
    </section>
  </div>
`
    );
}

document.querySelector("footer").innerHTML = Footer();