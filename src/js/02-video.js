import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


 const iframe = document.querySelector('iframe');
 const player = new Player(iframe);


 const saveCurrentTime = throttle((currentTime) => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000);


  // Отримання збереженого часу відтворення з локального сховища
const savedTime = localStorage.getItem('videoplayer-current-time');

// Встановлення збереженого часу відтворення, якщо він доступний
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}

// Відстеження події timeupdate для оновлення часу відтворення
player.on('timeupdate', ({ seconds }) => {
  saveCurrentTime(seconds);
});







