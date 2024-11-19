  let checkList = {
  'Страница': [
    { name: ' Верхнее поле - 2см', checked: false },
    { name: ' Нижнее поле - 2см', checked: false },
    { name: ' Левое поле - 3см', checked: false },
    { name: ' Правое поле - 1,50см', checked: false }
  ],
  'Глава': [
    { name: ' Каждая глава с новой страницы', checked: false },
    {
      name: ' Название главы - в начале свой порядковый номер, выделен жирным шрифтом',
      checked: false
    },
    { name: ' Выравнивание - по ширине', checked: false },
    { name: ' Шрифт - Times New Roman', checked: false },
    { name: ' Размер шрифта - 14px', checked: false },
    { name: ' Первая строка - 1,25см', checked: false }
  ],
  'Абзац': [
    { name: ' Оступы - 0', checked: false },
    { name: ' Интервалы - 0', checked: false },
    { name: ' Междустрочный интервал - 1,5', checked: false }
  ],
  'Содержание': [
    { name: ' Заголовок - по центру, не жирный, 14px', checked: false },
    { name: ' Все темы из дневника присутствуют', checked: false },
    { name: ' Заключение', checked: false },
    { name: ' Список используемых источников', checked: false },
    { name: ' У каждой темы есть страница', checked: false },
    { name: ' Номер страницы - 2', checked: false }
  ],
  'Введение': [
    { name: ' Введение начинается с новой страницы', checked: false },
    {
      name: ' Название раздела имеет отступ первой строки 1,25 и выделено жирным шрифтом',
      checked: false
    },
    { name: ' Содержимое во ввдение не менее 1 страницы', checked: false },
    { name: ' Краткое содержание по каждой теме из дневника', checked: false },
    { name: ' Номер страницы - 3', checked: false }
  ],
  'Заключение': [
    { name: ' Заключение начинается с новой страницы', checked: false },
    { name: ' Содержимое не менее, чем половина страницы', checked: false },
    { name: ' Номер страницы заключения, совпадает с содержанием', checked: false }
  ],
  'Список используемых источников': [
    { name: ' Не менее 10 книг', checked: false },
    { name: ' Книги должны быть актуальные, не старее 5 лет', checked: false }
  ],
  'Изображение': [
    { name: ' Выравнивание - по центру', checked: false },
    { name: ' Выравнивание подписи - по центру', checked: false },
    {
      name: ' Каждое изображение имеет нумерацию в формате: Рисунок 1 - название.',
      checked: false
    }
  ],
  'Таблица': [
    { name: ' Наименование таблицы - по центру, над таблицей', checked: false },
    { name: ' Границы таблицы - четко видны, не отличаются по всему документу', checked: false },
    { name: ' Текст в ячейке - по центру', checked: false },
    { name: ' Таблицы не переносятся на следующую страницу', checked: false }
  ]
}

const container = document.getElementById('checklist');
for (const category in checkList) {
    const
        categoryBlock = document.createElement('div'),
        categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category;
    categoryBlock.className = 'checklist_block';
    categoryTitle.className = 'title_checklist';
    const list = document.createElement('ul');
    list.className = 'checklist';
    checkList[category].forEach(item => {
      const listItem = document.createElement('li');
      listItem.className = 'checklist_items';
      // Создаем чекбокс
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
      checkbox.checked = item.checked;
      // Создаем текстовый label
      const label = document.createElement('label');
      label.textContent = item.name;
      label.className = 'checklist_text';
      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      list.appendChild(listItem);
    });
    container.appendChild(categoryBlock)
    categoryBlock.appendChild(categoryTitle);
    categoryBlock.appendChild(list);
}
