const HOUSES = [
  {
    type: 'Single-storey',
    img: './images/Atamam.jpg',
    title: '"Ataman"',
    square: 'Square: 128m',
    sizes: 'Sizes: 7x7',
    constructionDates: 'Construction dates: 13 days',
    rooms: 'Rooms: 2',
    typeHouse: 'Type house: Frame',
    price: 'Price: from 1 780 000$',
  },

  {
    type: 'Single-storey',
    img: './images/Atamam.jpg',
    title: '"Cascade"',
    square: 'Square: 138m',
    sizes: 'Sizes: 3x7',
    constructionDates: 'Construction dates: 11 days',
    rooms: 'Rooms: 2',
    typeHouse: 'Type house: Frame',
    price: 'Price: from 1 380 000$',
  },
  {
    type: 'With a garage',
    img: './images/Atamam.jpg',
    title: '"Aurora"',
    square: 'Square: 108m',
    sizes: 'Sizes: 7x9',
    constructionDates: 'Construction dates: 16 days',
    rooms: 'Rooms: 5',
    typeHouse: 'Frame',
    price: 'from 1 780 000$',
  },
  {
    type: 'With a garage',
    img: './images/Atamam.jpg',
    title: '"Serene"',
    square: 'Square: 208m',
    sizes: 'Sizes: 9x9',
    constructionDates: 'Construction dates: 12 days',
    rooms: 'Rooms: 3',
    typeHouse: 'Frame',
    price: 'from 1 340 000$',
  },
  {
    type: 'With a garage',
    img: './images/Atamam.jpg',
    title: '"Zenith"',
    square: 'Square: 128m',
    sizes: 'Sizes: 6x9',
    constructionDates: 'Construction dates: 12 days',
    rooms: 'Rooms: 5',
    typeHouse: 'Frame',
    price: 'from 1 180 000$',
  },
  {
    type: 'With panoramic windows',
    img: './images/Atamam.jpg',
    title: '"Vanguard"',
    square: 'Square: 208m',
    sizes: 'Sizes: 4x4',
    constructionDates: 'Construction dates: 17 days',
    rooms: 'Rooms: 3',
    typeHouse: 'Frame',
    price: 'from 1 780 000$',
  },
  {
    type: 'Three-storey',
    img: './images/Atamam.jpg',
    title: '"Elysium"',
    square: 'Square: 138m',
    sizes: 'Sizes: 6x6',
    constructionDates: 'Construction dates: 24 days',
    rooms: 'Rooms: 4',
    typeHouse: 'Frame',
    price: 'from 1 780 000$',
  },
  {
    type: 'With a basement',
    img: './images/Atamam.jpg',
    title: '"Nebula"',
    square: 'Square: 118m',
    sizes: 'Sizes: 5x9',
    constructionDates: 'Construction dates: 10 days',
    rooms: 'Rooms: 6',
    typeHouse: 'Frame',
    price: 'from 1 780 000$',
  },
  {
    type: 'Two-storied',
    img: './images/Atamam.jpg',
    title: '"Harmony"',
    square: 'Square: 103m',
    sizes: 'Sizes: 3x9',
    constructionDates: 'Construction dates: 12 days',
    rooms: 'Rooms: 2',
    typeHouse: 'Frame',
    price: 'from 1 780 000$',
  },
  {
    type: 'With an attic',
    img: './images/Atamam.jpg',
    title: '"Pinnacle"',
    square: 'Square: 168m',
    sizes: 'Sizes: 9x9',
    constructionDates: 'Construction dates: 11 days',
    rooms: 'Rooms: 1',
    typeHouse: 'Frame',
    price: 'from 1 780 000$',
  },
]

const FILTER_BUTTONS = [
  'Single-storey',
  'With a garage',
  'With panoramic windows',
  'Three-storey',
  'With a basement',
  'Two-storied',
  'With an attic',
  'Watch all',
]

let wrapper = document.createElement('div')
wrapper.className = 'wrapper'

let navigation = document.createElement('div')
navigation.className = 'wrapper__navigation'

document.body.append(wrapper)
wrapper.append(navigation)

for (let i = 0; i < FILTER_BUTTONS.length; i++) {
  let btn = document.createElement('button')
  let btnText = document.createTextNode(FILTER_BUTTONS[i])
  btn.className = 'nav-btn'
  btn.append(btnText)
  navigation.append(btn)

  btn.addEventListener('click', function (e) {
    e.preventDefault()

    const SELECTED_TYPE = btn.textContent
    const CURRENT_HOUSE = []
    HOUSES.filter(function (item) {
      if (SELECTED_TYPE === item.type) {
        return console.log(CURRENT_HOUSE.push(item))
      } else if (SELECTED_TYPE === 'Watch all') {
        CURRENT_HOUSE.push(item)
      }
    })

    document.querySelector('.wrapper__cards').innerHTML = ''

    for (let i = 0; i < CURRENT_HOUSE.length; i++) {
      let card = document.createElement('div')
      card.className = 'wrapper__cards_card'
      cards.append(card)

      let img = document.createElement('img')
      img.src = CURRENT_HOUSE[i].img
      card.append(img)

      let card_content = document.createElement('div')
      card_content.className = 'wrapper__cards_card_content'
      card.append(card_content)

      let title = document.createElement('h2')
      title.textContent = CURRENT_HOUSE[i].title
      card_content.append(title)

      let info_house = document.createElement('div')
      info_house.className = 'wrapper__cards_card_content_info'
      card_content.append(info_house)

      let square_house = document.createElement('p')
      square_house.textContent = CURRENT_HOUSE[i].square
      info_house.append(square_house)

      let construction_dates_house = document.createElement('p')
      construction_dates_house.textContent = CURRENT_HOUSE[i].constructionDates
      info_house.append(construction_dates_house)

      let sizes_house = document.createElement('p')
      sizes_house.textContent = CURRENT_HOUSE[i].sizes
      info_house.append(sizes_house)

      let rooms_house = document.createElement('p')
      rooms_house.textContent = CURRENT_HOUSE[i].rooms
      info_house.append(rooms_house)

      let type_price = document.createElement('div')
      type_price.className = 'wrapper__cards_card_content_typePrice'
      card_content.append(type_price)

      let ul = document.createElement('ul')
      type_price.append(ul)

      let li1 = document.createElement('li')
      let span1 = document.createElement('span')
      span1.textContent = CURRENT_HOUSE[i].typeHouse
      li1.append(span1)
      ul.append(li1)

      let li2 = document.createElement('li')
      let span2 = document.createElement('span')
      span2.textContent = CURRENT_HOUSE[i].price
      li2.append(span2)
      ul.append(li2)

      let card_bottom = document.createElement('div')
      card_bottom.className = 'wrapper__cards_card_content_bottom'
      card_content.append(card_bottom)

      button_card = document.createElement('button')
      button_card.textContent = 'СМОТРЕТЬ ПРОЕКТЫ >'
      card_bottom.append(button_card)

      sber_card = document.createElement('img')
      sber_card.src = './images/sber.png'
      card_bottom.append(sber_card)

      layout_house_card = document.createElement('p')
      layout_house_card.className = 'layout_house_card'
      layout_house_card.textContent = 'Индивидуальная планировка дома'
      card_bottom.append(layout_house_card)
    }
  })
}

let cards = document.createElement('div')
cards.className = 'wrapper__cards'
wrapper.append(cards)

for (let i = 0; i < HOUSES.length; i++) {
  let card = document.createElement('div')
  card.className = 'wrapper__cards_card'
  cards.append(card)

  let img = document.createElement('img')
  img.src = HOUSES[i].img
  card.append(img)

  let card_content = document.createElement('div')
  card_content.className = 'wrapper__cards_card_content'
  card.append(card_content)

  let title = document.createElement('h2')
  title.textContent = HOUSES[i].title
  card_content.append(title)

  let info_house = document.createElement('div')
  info_house.className = 'wrapper__cards_card_content_info'
  card_content.append(info_house)

  let square_house = document.createElement('p')
  square_house.textContent = HOUSES[i].square
  info_house.append(square_house)

  let construction_dates_house = document.createElement('p')
  construction_dates_house.textContent = HOUSES[i].constructionDates
  info_house.append(construction_dates_house)

  let sizes_house = document.createElement('p')
  sizes_house.textContent = HOUSES[i].sizes
  info_house.append(sizes_house)

  let rooms_house = document.createElement('p')
  rooms_house.textContent = HOUSES[i].rooms
  info_house.append(rooms_house)

  let type_price = document.createElement('div')
  type_price.className = 'wrapper__cards_card_content_typePrice'
  card_content.append(type_price)

  let ul = document.createElement('ul')
  type_price.append(ul)

  let li1 = document.createElement('li')
  let span1 = document.createElement('span')
  span1.textContent = HOUSES[i].typeHouse
  li1.append(span1)
  ul.append(li1)

  let li2 = document.createElement('li')
  let span2 = document.createElement('span')
  span2.textContent = HOUSES[i].price
  li2.append(span2)
  ul.append(li2)

  let card_bottom = document.createElement('div')
  card_bottom.className = 'wrapper__cards_card_content_bottom'
  card_content.append(card_bottom)

  button_card = document.createElement('button')
  button_card.textContent = 'СМОТРЕТЬ ПРОЕКТЫ >'
  card_bottom.append(button_card)

  sber_card = document.createElement('img')
  sber_card.src = './images/sber.png'
  card_bottom.append(sber_card)

  layout_house_card = document.createElement('p')
  layout_house_card.className = 'layout_house_card'
  layout_house_card.textContent = 'Индивидуальная планировка дома'
  card_bottom.append(layout_house_card)
}
