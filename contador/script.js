// Fecha del cumpleaños de Cayita: 2 de marzo de 2025
const targetDate = new Date("March 2, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "🎉 ¡Feliz cumpleaños Cayita! 🎂";
        sendNotification();
        clearInterval(interval);
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function sendNotification() {
    if (Notification.permission === "granted") {
        new Notification("🎉 ¡Ya es el cumpleaños de Cayita! 🎂", {
            body: "¡Corre a felicitarla!",
            icon: "https://cdn-icons-png.flaticon.com/512/869/869636.png"
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("🎉 ¡Ya es el cumpleaños de Cayita! 🎂", {
                    body: "¡Corre a felicitarla!",
                    icon: "https://cdn-icons-png.flaticon.com/512/869/869636.png"
                });
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
});

function resetCountdown() {
    location.reload();
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
