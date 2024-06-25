import { addDays, format } from 'date-fns';

export const initialTeam = ['Ömer', 'Emre', 'Gökhan', 'Enis'];

const date = new Date();

export const initialTasks = [
  {
    id: 1,
    title: 'Projeyi baştan sona oku',
    description:
      'Bugün öğrendiklerimizden hangilerini projede kullanabiliriz, hangi kısımları mevcut bilgimizle yapabiliriz?',
    people: ['Ömer', 'emre'],
    deadline: format(addDays(date, 2), 'yyyy-MM-dd'),
    status: 'yapıldı',
  },
  {
    id: 2,
    title: 'Projede neler yapmalıyız, bir liste çıkar',
    description:
      'Projede neler yapmamız gerekiyor? Aklımıza gelen her adımı yazalım.',
    people: ['Ömer'],
    deadline: format(addDays(date, -1), 'yyyy-MM-dd'),
    status: 'yapılacak',
  },
  {
    id: 3,
    title: 'Yapılacaklar listesini sıraya koy',
    description:
      'Hangi adımdan başlasak daha iyi olur? Yapılacakları doğru sıraya koymaya çalışmak da bize fikir verebilir.',
    people: ['emre'],
    deadline: format(addDays(date, 4), 'yyyy-MM-dd'),
    status: 'yapılacak',
  },
  {
    id: 4,
    title: 'Yazmaya başla!',
    description:
      'Unutma, en iyi öğretmen tecrübedir. Çok takılmadığın sürece konu tekrarı yapma. Sadece takıldığın yerleri araştır.',
    people: ['Ömer', 'emre'],
    deadline: format(addDays(date, 10), 'yyyy-MM-dd'),
    status: 'yapılacak',
  },
];
