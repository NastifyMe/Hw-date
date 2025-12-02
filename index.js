// // Клас таймера зворотного відліку
// class CountdownTimer {
//     constructor({ selector, targetDate }) {
//       // Зберігаємо селектор і дату
//       this.selector = selector;
//       this.targetDate = targetDate;
  
//       // Знаходимо елементи DOM всередині таймера
//       this.refs = {
//         days: document.querySelector(`${selector} [data-value="days"]`),
//         hours: document.querySelector(`${selector} [data-value="hours"]`),
//         mins: document.querySelector(`${selector} [data-value="mins"]`),
//         secs: document.querySelector(`${selector} [data-value="secs"]`),
//       };
  
//       // Запускаємо оновлення таймера
//       this.start();
//     }
  
//     start() {
//       // Оновлюємо таймер відразу, щоб не чекати 1 секунду
//       this.updateTime();
  
//       this.intervalId = setInterval(() => {
//         this.updateTime();
//       }, 1000);
//     }
  
//     updateTime() {
//       const now = Date.now(); // Поточна дата в мс
//       const time = this.targetDate - now; // Різниця
  
//       // Якщо час вийшов — зупиняємо таймер
//       if (time <= 0) {
//         clearInterval(this.intervalId);
//         this.updateDOM(0, 0, 0, 0);
//         return;
//       }
  
//       // Формули з умови (з коментарями):
  
//       const days = Math.floor(time / (1000 * 60 * 60 * 24));
  
//       const hours = Math.floor(
//         (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
  
//       const mins = Math.floor(
//         (time % (1000 * 60 * 60)) / (1000 * 60)
//       );
  
//       const secs = Math.floor((time % (1000 * 60)) / 1000);
  
//       // Оновлюємо DOM
//       this.updateDOM(days, hours, mins, secs);
//     }
  
//     updateDOM(days, hours, mins, secs) {
//       // Підставляємо значення в HTML
//       this.refs.days.textContent = days;
//       this.refs.hours.textContent = this.pad(hours);
//       this.refs.mins.textContent = this.pad(mins);
//       this.refs.secs.textContent = this.pad(secs);
//     }
  
//     // Допоміжний метод для формату 01, 02, 03
//     pad(value) {
//       return String(value).padStart(2, "0");
//     }
//   }

  
//   new CountdownTimer({
//     selector: "#timer-1",
//     targetDate: new Date("Jan 1, 2026 00:00:00"),
//   });
  





class CountdownTimer {
    constructor({selector, endDate}){
        this.container = selector
        this.endTime = endDate

        this.elementos = {
            days: document.querySelector(`${selector} [data-value="days"]`),
            hours: document.querySelector(`${selector} [data-value="hours"]`),
            mins: document.querySelector(`${selector} [data-value="mins"]`),
            secs: document.querySelector(`${selector} [data-value="secs"]`),
          };

        //   updateTime() {
        //     const now = Date.now()
        //     const diff = this.endTime - now
        //   }
    }
}

new CountdownTimer({
    container: '#timer-1',
    endTime: new Date("Jan 1, 2026 00:00:00"),
  });