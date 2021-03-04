# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

----------------------------------
Front: TypeScript/JavaScript, React, Node.js, Express, MySQL или MongoDB

### Функциональные требования. 

Требуется разработать сайт для фанфиков ("Мордор — техногенная цивилизация, опороченная победителями").
  
1) Неаутентифицированным пользователи могут только читать произведения 
   (доступен поиск, недоступно создание произведений, комментарии, лайки и рейтинги).
 
2) Аутентифицированные пользователи имеют доступ ко всему, кроме админки.
 
3) Админка позволяет управлять пользоователями (просматривать, блокировать, удалять, назначать админами). 
   Администратор видит каждую страницу пользователя и каждое произведение как автор 
   (например, может редактировать или создать от имени пользователя с его страницы новое произведение).
 
4) Требуется поддерживать аутентификацию через социальные сети 
   (не менее 3, как минимум одна из Facebook/Twitter/VK).
 
5) На каждой странице доступен полнотекстовый поиск по сайту 
   (результаты поиска — всегда произведения, например, если текст найден в комментарии к произведению, 
   что должно быть возможно, то выводится ссылка на произведение).
 
6) У каждого пользователя есть его личная страница, 
   на которой он управляет списком своих произведений (таблица с фильтраций и сортировками, 
   возможность создать/удалить/редактировать произведение/открыть в режиме чтения), 
   поля с информаций о пользователе (in-place editing) 
   и "медальки" (последние — задание со звездочкой).
 
7) Каждое произведение состоит из: 
   название, краткое описание, 
   жанр (из фиксированного набора жанров, например, "Фантастика", "Эротика" и проч.), 
   тэги (вводится несколько тэгов, необходимо автодополнение - когда пользователь начинает вводить тэг, 
   выпадает список с вариантами слов, которые уже вводились ранее на сайте). 
   Помимо этого, произведение состоит из "глав" - название главы, блок текста с поддержкой форматирования markdown и одной опциональной картинкой. 
   Глава автомагически формируют оглавление с автонумерацией и набор элементов управления для перехода по главам. 
   На странице произведения главы можно добавлять/удалять/открывать на редактирование/изменять порядок при помощи drag-n-drop (автомагическая перенумерация).
 
8) Все картинки сохраняются в облаке, все картинки загружаются драг-н-дропом.
 
9) На главной странице отображаются: 
   последние обновленные произведения, 
   произведения с самыми большими рейтингами, 
   облако тэгов.
 
10) При открытие произведения в режиме чтения в конце отображаются комментарии 
    (общие на всю произведение, не отдельно по главам). Комментарии линейные, нельзя комментировать комментариий, новый добавляется только "в хвост". Необходимо реализовать автоматическую подгрузку комментариев — если у меня открыта страница с комментариями и кто-то другой добавляет новый, он у меня автомагически появляется (возможна задержка в 2-5 секунд).
 
11) Каждый пользовать может проставить "рейтинг" (от 1 до 5 звездочек) произведения 
    (не более одного от одного пользователя на произведение) — средний рейтинг отображется у произведения. У каждой главы (в конце главы в режиме чтения) пользователь может поставить лайк (не более одного на одну главу от одного пользователя).
 
12) Сайт должен поддерживать два языка: русский и английский (пользователь выбирает и выбор сохраняется). 
    Сайт должен поддерживать два оформления (темы): светлое и темное (пользователь выбирает и выбор сохраняется).

### NFR: 
Обязательно: 
1) Bootstrap (или любой другой CSS-фреймворк), 
2) адаптивная вёрстка, поддержка разных разрешений (в том числе телефон), 
3) ORM для доступа к данным, 
4) движок для полнотекстового поиск (или средствами базы, 
5) или отдельный движок — НЕ ПОЛНОЕ СКАНИРОВАНИЕ селектами).





