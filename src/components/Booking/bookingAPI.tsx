// Генератор псевдослучайных чисел с заданным seed
const seededRandom = function (seed: number): () => number {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return function () {
    return (s = (s * a) % m) / m;
  };
};

// Симуляция API для получения доступных времён
const fetchAPI = function (date: Date): string[] {
  const result: string[] = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }

  return result;
};

// Тип формы можно уточнить при необходимости
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  occasion: string;
  guests: string;
  reserveNumber: number;
}

// Симуляция отправки данных формы
const submitAPI = function (formData: FormData): boolean {
  console.log(formData);
  return true;
};

export { fetchAPI, submitAPI };
