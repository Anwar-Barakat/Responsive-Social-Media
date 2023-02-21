const menuItem = document.querySelectorAll(".nav-link");

const messagesNotification = document.getElementById("messages-notification");

const messages = document.querySelector(".right .messages");

const message = messages.querySelectorAll(".message");

const messageSearch = document.querySelector("#message-search");

const changeActiveItem = () => {
    menuItem.forEach((item) => {
        item.classList.remove("active");
    });
};

menuItem.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");

        if (item.id != "notifications")
            document.querySelector(".notifications-popup").style.display =
                "none";
        else {
            document.querySelector(".notifications-popup").style.display =
                "block";
            document.querySelector(
                "#notifications .notification-count"
            ).style.display = "none";
        }
    });
});

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((user) => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            console.log(name.indexOf(val));
            user.style.display = "flex";
        } else {
            user.style.display = "none";
        }
    });
};

messageSearch.addEventListener("keyup", searchMessage);

messagesNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display =
        "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});
