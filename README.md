# Cтраницf поиска сотрудников с предпросмотром профиля Profile Viewer

## Описание
Profile Viewer - это веб-приложение, которое позволяет просматривать профили пользователей. Приложение позволяет выполнять поиск пользователей по их идентификатору или имени, а также просматривать дополнительные сведения о каждом пользователе.

## Использование
1. На главной странице приложения располагается боковая панель (SideBar), где можно выполнить поиск пользователей и просмотреть результаты.

2. Введите идентификатор или имя пользователя в поле ввода "Поиск сотрудников" и нажмите Enter или кнопку "Поиск". Поисковой ввод провалидирован таким образом, чтобы пользователь мог вводить только валидные символы - латиница, цифры, символы "," или " ", о чем уведомляет соответствующий тултип. Данное поведение позволит избежать ошибок с вводом неверных параметров запроса.

3. После ввода запроса и нажатия Enter или кнопки "Поиск" в списке результатов отобразятся пользователи, соответствующие введенному запросу.

4. Выберите пользователя из списка, чтобы просмотреть его профиль. Полная информация о пользователе будет отображена в центральной части приложения.

## Компоненты
### SideBar
Боковая панель, которая содержит поле ввода для поиска пользователей и список результатов.

### UserList
Компонент, отображающий список пользователей на основе введенного запроса.

### UserProfile
Компонент, отображающий полную информацию о выбранном пользователе.

### SearchInput
Компонент для ввода текста для поиска пользователей.

## Технологии
- React.js
- ReduxTooklit, RTK Query
- SCSS
- TypeScript
- Vite

## Автор
Михаил Фомин [GitHub](https://github.com/mihail-fomin)

