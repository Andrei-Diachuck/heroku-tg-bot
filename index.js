process.env.NTBA_FIX_319 = 1;//без этой строки не работает]
const TelegramBot = require("node-telegram-bot-api");
const debug = require("./helpers")
const TOKEN = "838023694:AAHyZIwY8G8sGGwlJACivbEtduGcaZkakZQ";
console.log("bot has been start");
const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
})

bot.on("message", msg => {
  console.log(msg);
  const { id } = msg.chat

  if(msg.text.toLowerCase() === "звонить"){
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "бармен") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "завидно") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "каталог") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "творог") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О". Это универсальное слово так что не важно на какую букву "О" вы поставите ударение.`)
  }else if (msg.text.toLowerCase() === "красивее") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "обеспечение") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "Е"`)
  }else if (msg.text.toLowerCase() === "облегчить") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "свекла") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Ё"`)
  }else if (msg.text.toLowerCase() === "тирамису") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "У"`)
  }else if (msg.text.toLowerCase() === "феномен") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "вандалы") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "А"`)
  }else if (msg.text.toLowerCase() === "жалюзи") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "жерло") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "искра") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "кружева") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "привет") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "баловать") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "А"`)
  }else if (msg.text.toLowerCase() === "бочковое") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "О"`)
  }else if (msg.text.toLowerCase() === "водопровод") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на четвертую букву "О"`)
  }else if (msg.text.toLowerCase() === "газопровод") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на третью букву "О"`)
  }else if (msg.text.toLowerCase() === "мусоропровод") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на четвертую букву "О"`)
  }else if (msg.text.toLowerCase() === "нефтопровод") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "О"`)
  }else if (msg.text.toLowerCase() === "электропровод") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "О"`)
  }else if (msg.text.toLowerCase() === "договор") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на третью букву "О"`)
  }else if (msg.text.toLowerCase() === "завидно") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "квартал") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "А"`)
  }else if (msg.text.toLowerCase() === "красивее") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "кулинария") {
    bot.sendMessage(id, `${msg.text}, тут ударение можно поставить как на букву "А" так и на букву "И"`)
  }else if (msg.text.toLowerCase() === "маркетинг") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "мастерски") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "наращенные") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Ё"`)
  }else if (msg.text.toLowerCase() === "новорожденный") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Ё"`)
  }else if (msg.text.toLowerCase() === "откупорить") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "У"`)
  }else if (msg.text.toLowerCase() === "петля") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е", (петлЯ – уместно в обиходной речи)`)
  }else if (msg.text.toLowerCase() === "пуловер") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "танцовщик") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "танцовщица") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "торты") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "тотчас") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "туфля") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "У"`)
  }else if (msg.text.toLowerCase() === "черпать") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "спасибо") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И", тебе спасибо что воспользовался моим ботом ❤️`)
  }else if (msg.text.toLowerCase() === "коридор") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "О"`)
  }else if (msg.text.toLowerCase() === "кульминация") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "крови") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О", но так же ударение можно ставить и на букву "И"`)
  }else if (msg.text.toLowerCase() === "меланхолия") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "поняла") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "жила") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "ждала") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "А"`)
  }else if (msg.text.toLowerCase() === "пришла") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "родила") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "ничего") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "нечего") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "Е"`)
  }else if (msg.text.toLowerCase() === "щавель") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "решать") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "безударную") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "алкоголь") {
    bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "О"`)
  }else if (msg.text.toLowerCase() === "алфавит") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "аналог") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "А"`)
  }else if (msg.text.toLowerCase() === "анатом") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "А"`)
  }else if (msg.text.toLowerCase() === "апостров") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "О"`)
  }else if (msg.text.toLowerCase() === "аристократия") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "А"`)
  }else if (msg.text.toLowerCase() === "асбест") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "асимметрия") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "И"`)
  }else if (msg.text.toLowerCase() === "атлет") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "афера") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "балованный") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "банты") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "баржа") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "А"`)
  }else if (msg.text.toLowerCase() === "бензопровод") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на третью букву "О"`)
  }else if (msg.text.toLowerCase() === "бухгалтеры") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "бытие") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "валовой") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "О"`)
  }else if (msg.text.toLowerCase() === "вероисповедание") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "Е"`)
  }else if (msg.text.toLowerCase() === "ветеринария") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "вечеря") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "Е"`)
  }else if (msg.text.toLowerCase() === "взяла") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "включишь") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "воздухопровод") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на четвертую букву "О"`)
  }else if (msg.text.toLowerCase() === "возраст") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "ворожея") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Я"`)
  }else if (msg.text.toLowerCase() === "воспринять") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Я"`)
  }else if (msg.text.toLowerCase() === "генезис") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "Е"`)
  }else if (msg.text.toLowerCase() === "герб") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е", во мн. числе гербЫ`)
  }else if (msg.text.toLowerCase() === "гофрированный") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "О"`)
  }else if (msg.text.toLowerCase() === "граффити") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "И"`)
  }else if (msg.text.toLowerCase() === "гренадер") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е", не гренадёр!!!!`)
  }else if (msg.text.toLowerCase() === "гренки") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "диоприя") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "И"`)
  }else if (msg.text.toLowerCase() === "дипломированный") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "И"`)
  }else if (msg.text.toLowerCase() === "диптих") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "И"`)
  }else if (msg.text.toLowerCase() === "диспансер") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "добела") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "добыча") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Ы"`)
  }else if (msg.text.toLowerCase() === "догмат") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "еретик") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "забронировать") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "завсегдатай") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "А"`)
  }else if (msg.text.toLowerCase() === "заговор") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "закупорить") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "У"`)
  }else if (msg.text.toLowerCase() === "заплесневеть") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "Е"`)
  }else if (msg.text.toLowerCase() === "заржаветь") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "А", но можно и на "Е"`)
  }else if (msg.text.toLowerCase() === "зевота") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "знамение") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "знахарка") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "А"`)
  }else if (msg.text.toLowerCase() === "зубчатый") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "избалованный") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "иконопись") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "инженерия") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "Е"`)
  }else if (msg.text.toLowerCase() === "инкогнито") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "О"`)
  }else if (msg.text.toLowerCase() === "инспектор") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "искра") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "искриться") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "И"`)
  }else if (msg.text.toLowerCase() === "исповедание") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "исчерпать") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "каучук") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "У"`)
  }else if (msg.text.toLowerCase() === "кровоточить") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "кухонный") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "У"`)
  }else if (msg.text.toLowerCase() === "лектор") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "лекторы") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "лекторов") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "маркировать") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "А"`)
  }else if (msg.text.toLowerCase() === "мизерный") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "мозаичный") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "мышление") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "намерение") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "Е"`)
  }else if (msg.text.toLowerCase() === "начать") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет вторую на букву "А"`)
  }else if (msg.text.toLowerCase() === "начал") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "А"`)
  }else if (msg.text.toLowerCase() === "начала") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на третью букву "А"`)
  }else if (msg.text.toLowerCase() === "недуг") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "У"`)
  }else if (msg.text.toLowerCase() === "несессер") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на третью букву "Е"`)
  }else if (msg.text.toLowerCase() === "обетованный") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "обнял") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "ободрить") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "одновременный") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "Е", но можно и на вторую "Е"`)
  }else if (msg.text.toLowerCase() === "озорничать") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "опошлить") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "О"`)
  }else if (msg.text.toLowerCase() === "опрометью") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "О"`)
  }else if (msg.text.toLowerCase() === "оптовый") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "О"`)
  }else if (msg.text.toLowerCase() === "осведомиться") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "оседлый") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "отрочество") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "О"`)
  }else if (msg.text.toLowerCase() === "простыня") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Я"`)
  }else if (msg.text.toLowerCase() === "простыней") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "простынь") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "противень") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "развитая") {
      bot.sendMessage(id, `${msg.text}, РазвитАя(промышленность), РАзвитая(деятельность), РазвИтая(раскрученная)`)
  }else if (msg.text.toLowerCase() === "ракушка") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "У"`)
  }else if (msg.text.toLowerCase() === "ретировать") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "рефлексия") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "Е"`)
  }else if (msg.text.toLowerCase() === "ржаветь") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А", но можно и на "Е"`)
  }else if (msg.text.toLowerCase() === "симметрия") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "И"`)
  }else if (msg.text.toLowerCase() === "синергия") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "И"`)
  }else if (msg.text.toLowerCase() === "сирота") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А", мн. число сирОты, сирОт`)
  }else if (msg.text.toLowerCase() === "сливовый") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "сосредоточение") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на третью букву "О"`)
  }else if (msg.text.toLowerCase() === "страховщик") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "тефтели") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на любую букву "Е"`)
  }else if (msg.text.toLowerCase() === "тортов") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "О"`)
  }else if (msg.text.toLowerCase() === "трансфер") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "триптих") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "И"`)
  }else if (msg.text.toLowerCase() === "тренеты") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "Е"`)
  }else if (msg.text.toLowerCase() === "уведомить") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "углубить") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "украинский") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "И"`)
  }else if (msg.text.toLowerCase() === "усугубить") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "факсимиле") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "И"`)
  }else if (msg.text.toLowerCase() === "фетиш") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "хаос") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О", но можно и на букву "А"`)
  }else if (msg.text.toLowerCase() === "характерный") {
      bot.sendMessage(id, `${msg.text}, ХарАктерный(человек), ХарактЕрный(поступок)`)
  }else if (msg.text.toLowerCase() === "ходатай") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "А"`)
  }else if (msg.text.toLowerCase() === "ходатайство") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на первую букву "А"`)
  }else if (msg.text.toLowerCase() === "цедра") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "черстветь") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на вторую букву "Е"`)
  }else if (msg.text.toLowerCase() === "шарфы") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "шарфоф") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "А"`)
  }else if (msg.text.toLowerCase() === "шасси") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "шелковица") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "щавель") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "щепоть") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О"`)
  }else if (msg.text.toLowerCase() === "щиколотка") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "И"`)
  }else if (msg.text.toLowerCase() === "экскурс") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Э"`)
  }else if (msg.text.toLowerCase() === "эксперт") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Е"`)
  }else if (msg.text.toLowerCase() === "экспорт") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Э"`)
  }else if (msg.text.toLowerCase() === "ягодицы") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Я"`)
  }else if (msg.text.toLowerCase() === "языковой") {
      bot.sendMessage(id, `${msg.text}, тут языковОй(отн. к речи), языкОвый(отн. к языку как анатомич. органу)`)
  }else if (msg.text.toLowerCase() === "языковый") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "О", языкОвый(отн. к языку как анатомич. органу), языковОй(отн. к речи)`)
  }else if (msg.text.toLowerCase() === "ясли") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Я", не яслЕй, и не Ясель`)
  }else if (msg.text.toLowerCase() === "яслей") {
      bot.sendMessage(id, `${msg.text}, тут ударение будет на букву "Я", не яслЕй, и не Ясель`)
  } else{
    bot.sendMessage(id, `Привет, ${msg.from.first_name}, я такого слова еще не знаю`)
  }

})

bot.onText(/\/start/, msg => {
  console.log(msg);
  const { id } = msg.chat
  bot.sendMessage(id, `Привет, ${msg.text}. Этот бот покажет тебе на какую букву падает ударение, нужно только написать ему слово.`)
})

bot.onText(/\/help/, msg => {
  console.log(msg);
  const { id } = msg.chat
  bot.sendMessage(id, `Привет, ${msg.text}. Этот бот покажет тебе на какую букву падает ударение, нужно только написать ему слово.`)
})
/*bot.on("message", msg => {
  console.log(msg);
  bot.sendMessage(msg.chat.id, `Привет, ${msg.text}. Этот бот еще не работает, просим прощения`, {
    reply_markup: {
      keyboard: [
        ["А-Д", "Е-И"],
        ["К-О", "П-У"],
        ["Ф-Ш", "Щ-Я"]
      ]
    }
  })

})

bot.on("message", msg => {
  const chatId = msg.chat.id
  bot.sendMessage(chatId, "Инлайн клавиатура", {
    reply_markup: {
      inline_keyboard:[
        [{
          text: "Google",
          url: "https://www.google.com"
        },
        {
          text: "Reply",
          callback_data: "reply"
        },
        {
          text: "Forward",
          callback_data: "forward"
        }
      ],
        [
          {
            text: "А",
            callback_data: "1"
          },
          {
          text: "Б",
          callback_data: "1"
        }]
      ]
    }
  })
})
bot.on("callback_query", query => {
  //bot.sendMessage(query.message.chat.id, debug(query))
  bot.answerCallbackQuery(query.id, `${query.data}`)
})*/
