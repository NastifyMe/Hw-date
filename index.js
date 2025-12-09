
const selector = '#timer-1'
elementos = {
  days: document.querySelector(`${selector} [data-value="days"]`),
  hours: document.querySelector(`${selector} [data-value="hours"]`),
  mins: document.querySelector(`${selector} [data-value="mins"]`),
  secs: document.querySelector(`${selector} [data-value="secs"]`),
};

class CountdownTimer {
    constructor({endDate}){
        this.endTime = endDate
    }

    getTimeToEnd(){
      const now = Date.now()
      const diff = this.endTime - now

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      return { days, hours, mins, secs, diff };
    }
    start() {
      this.update = setInterval(() => {
        const time = this.getTimeToEnd()

        if (time.diff <= 0){
          clearInterval(this.update)
          return
        }

        elementos.days.textContent = time.days;
        elementos.hours.textContent = time.hours;
        elementos.mins.textContent = time.mins;
        elementos.secs.textContent = time.secs;
      }, 1000)
    }
    
}
const timer = new CountdownTimer({
    endDate: new Date("Jan 1, 2026 00:00:00"),
  });

  timer.start()