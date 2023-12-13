/* Додайте додатковий контент або стилізації, які не пов'язані з фоновим зображенням */
body {
    margin: 0;
    padding: 0;
    background-image: url('friends1.jpg'); /* Замініть 'friends1.jpg' на відповідний шлях до вашого файлу в папці public */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    width: 1000px; /* Задайте бажану максимальну ширину */
    margin: 0 auto; /* Вирівняти контейнер по центру */
    padding: 2em;
    background-color:  rgb(198, 222, 255);/* Білий фон */
    color: black; /* Колір тексту */
    font-family: 'Courier New', monospace;
  
    /* Додайте інші стилізації для вашого контенту */
  }
  
  
  nav a {
    color:  #80b4e1; /* Синьо-голубий колір тексту */
    text-decoration: none;
    padding: 0.5em 1em;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  /* Підсвічування при наведенні */
  nav a:hover {
    background-color:  #80b4e1; /* Темно-синьо-голубий фон при наведенні */
    color: white;
  }
  
  /* Підсвічування при натисканні */
  nav a:active {
    background-color: #506a7f; /* Ще темніший синьо-голубий фон при натисканні */
  }
  
  header {
    background-color: #80b4e1; /* Синьо-голубий фон заголовку */
    color: white;
    text-align: center;
    padding: 1em;
  }
  
  nav {
    background-color: #cce4fc; /* Темно-синьо-голубий фон навігації */
    padding: 1em;
  }
  
  footer {
    background-color: #80b4e1; /* Синьо-голубий фон футера */
    color: white;
    text-align: center;
    padding: 1em;
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  
  /* Додайте новий стиль для авторського права */
  footer p {
    margin: 0; /* Видаляє внутрішні відступи, щоб текст був точно посередині */
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 1em;
  }
  
  main {
    padding: 2em;
  }
  
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }
  
  main {
    flex: 1;
  }
  /* Додайте ці стилі в ваш файл style.css */
  /* Додайте ці стилі в ваш файл style.css */
  
