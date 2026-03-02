function updateClock() {
    const d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    const ampm = h >= 12 ? "PM" : "AM";

    h = h % 12;
    h = h === 0 ? 12 : h;

    h = String(h).padStart(2, "0");
    m = String(m).padStart(2, "0");
    s = String(s).padStart(2, "0");

    document.getElementById("clock").innerText =
        `${h}:${m}:${s} ${ampm}`;
}

updateClock();
setInterval(updateClock, 1000);
