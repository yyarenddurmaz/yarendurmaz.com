const form = document.getElementById("my-contact-form");
const status = document.getElementById("form-status");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Form verilerini paketle
        const data = new FormData(event.target);

        status.innerHTML = "Gönderiliyor...";
        status.className = "status-sending";
        status.style.display = "block";

        try {
            const response = await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                status.innerHTML = "Mesajınız başarıyla gönderildi! Teşekkürler.";
                status.className = "status-success";
                form.reset();
            } else {
                status.innerHTML = "Oops! Mesajınızı gönderirken bir sorun oluştu.";
                status.className = "status-error";
            }
        } catch (error) {
            status.innerHTML = "Bağlantı hatası. Lütfen daha sonra tekrar deneyin.";
            status.className = "status-error";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // Kopyalama (Ctrl+C / Cmd+C) işlemini engelle
    document.addEventListener('copy', (e) => {
        e.preventDefault();
    });
    document.addEventListener('selectstart', (e) => e.preventDefault());
});