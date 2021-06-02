setInterval(() => {
    let time = new Date()
    let hour =time.toLocaleTimeString();
    document.getElementById('clock-area').innerHTML = hour
})