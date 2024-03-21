const ratingItemsList = document.querySelectorAll('.rating__item');

ratingItemsList.forEach(item => {
    const ratingContainer = item.closest('.rating');

    // Получаем уникальный ключ для сохранения и загрузки значения рейтинга
    const ratingKey = `rating_${ratingContainer.dataset.id}`;

    // Загружаем значение рейтинга из localStorage при загрузке страницы
    const savedRatingValue = localStorage.getItem(ratingKey);
    if (savedRatingValue && item.dataset.itemValue === savedRatingValue) {
        // Если значение найдено, устанавливаем его для текущего элемента и родительского контейнера
        ratingContainer.dataset.totalValue = savedRatingValue;
    }

    item.addEventListener('click', () => {
        const itemValue = item.dataset.itemValue;

        // Устанавливаем значение рейтинга для родительского контейнера
        ratingContainer.dataset.totalValue = itemValue;

        // Сохраняем значение рейтинга в localStorage
        localStorage.setItem(ratingKey, itemValue);
    });
});
