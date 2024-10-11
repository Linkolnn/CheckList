// Неудивляйесь говнокоду, я просто хочу спать

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
      { name: ' Наименование таблицы - поin центру, над таблицей', checked: false },
      { name: ' Границы таблицы - четко видны, не отличаются по всему документу', checked: false },
      { name: ' Текст в ячейке - по центру', checked: false },
      { name: ' Таблицы не переносятся на следующую страницу', checked: false }
    ]
  }

function changeColor() {
  let text = document.querySelector('.checklist_text');
  text.className = "checklist_text_check";
}

function Page() {
  let checklist = checkList.Страница
  for (key in checklist) {
    let name = checklist[key].name
    document.querySelector('.checklist_page').innerHTML += `
      <li class="checklist_items">
          <p id="text" class="checklist_text">${name}</p>
          <input id="checkbox" class="checkbox" onchange="changeColor()" type="checkbox">
      </li>
`
  }
}

function Title() {
  let checklist = checkList.Глава
  for (key in checklist) {
    let name = checklist[key].name
    document.querySelector('.checklist_title').innerHTML += `
      <li class="checklist_items">
          <p class="checklist_text">${name}</p>
          <input id="checkbox" class="checkbox" onchange="changeColor()" type="checkbox">
      </li>
`
  }
}

function Paragraph() {
  let checklist = checkList.Абзац
  for (key in checklist) {
    let name = checklist[key].name
    document.querySelector('.checklist_paragraph').innerHTML += `
      <li class="checklist_items">
          <p class="checklist_text">${name}</p>
          <input id="checkbox" class="checkbox" onchange="changeColor()" type="checkbox">
      </li>
`
  }
}

function Content() {
  let checklist = checkList.Содержание
  for (key in checklist) {
    let name = checklist[key].name
    document.querySelector('.checklist_content').innerHTML += `
      <li class="checklist_items">
          <p class="checklist_text">${name}</p>
          <input id="checkbox" class="checkbox" onchange="changeColor()" type="checkbox">
      </li>
`
  }
}

function Intro() {
  let checklist = checkList.Введение
  for (key in checklist) {
    let name = checklist[key].name
    document.querySelector('.checklist_intro').innerHTML += `
      <li class="checklist_items">
          <p class="checklist_text">${name}</p>
          <input id="checkbox" class="checkbox" onchange="changeColor()" type="checkbox">
      </li>
`
  }
}

function Conclusion() {
  let checklist = checkList.Заключение
  for (key in checklist) {
    let name = checklist[key].name
    document.querySelector('.checklist_conclusion').innerHTML += `
      <li class="checklist_items">
          <p class="checklist_text">${name}</p>
          <input id="checkbox" class="checkbox" onchange="changeColor()" type="checkbox">
      </li>
`
  }
}

function Sourse() {
  let checklist = checkList["Список используемых источников"]
  for (key in checklist) {
    let name = checklist[key].name
    document.querySelector('.checklist_sourse').innerHTML += `
      <li class="checklist_items">
          <p class="checklist_text">${name}</p>
          <input id="checkbox" class="checkbox" onchange="changeColor()" type="checkbox">
      </li>
`
  }
}

function Img() {
  let checklist = checkList.Изображение
  for (key in checklist) {
    let name = checklist[key].name
    document.querySelector('.checklist_img').innerHTML += `
      <li class="checklist_items">
          <p class="checklist_text">${name}</p>
          <input id="checkbox" class="checkbox" onchange="changeColor()" type="checkbox">
      </li>
`
  }
}

function Table() {
  let checklist = checkList.Таблица
  for (key in checklist) {
    let name = checklist[key].name
    document.querySelector('.checklist_table').innerHTML += `
      <li class="checklist_items">
          <p class="checklist_text">${name}</p>
          <input id="checkbox" class="checkbox" onchange="changeColor()" type="checkbox">
      </li>
`
  }
}
  function renderList() {
    Page()
    Title()
    Paragraph()
    Content()
    Intro()
    Conclusion()
    Sourse()
    Img()
    Table()
  }
  renderList()
