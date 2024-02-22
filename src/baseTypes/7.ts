/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
// Оголошення перерахування для днів тижня
enum Week {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
let weekend: boolean;

function isWeekend(day: Week): boolean {
  if (day === Week.Saturday || day === Week.Sunday) {
    return (weekend = true);
  }
  return (weekend = false);
}
