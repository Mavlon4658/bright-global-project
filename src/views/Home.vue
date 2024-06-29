<script>
export default {
  name: "Home"
}
</script>

<template>
  <!-- Home -->
  <section class="home">
    <Container class="home__container">
      <div class="home__left">
        <h1 class="home__title">Bright Global Accounting</h1>
        <p class="home__description">Ваш бизнес в цифрах – наша профессия. Бухгалтерские услуги нового уровня.</p>
        <a href="#" class="btn_blue">Свяжитесь с нами</a>
      </div>
      <div class="home__right">
        <img src="@/assets/images/home-card.png" alt="">
        <img src="@/assets/images/home-card-2.png" alt="">
      </div>
      <ul class="home__card">
        <li class="home__card_item">
          <img src="@/assets/images/home-card-bg.png" alt="" class="home__card_item__bg">
          <div class="card_head">
            <h3>01</h3>
            <h4>Ведение бухгалтерии</h4>
          </div>
          <p>Сложно поддерживать свежими и актуальными все ежедневные финансовые операции и выполнять банковские сверки. Наша команда облегчит вам эту задачу, ведя точный учет всех ваших финансовых транзакций.</p>
        </li>
        <li class="home__card_item">
          <img src="@/assets/images/home-card-bg.png" alt="" class="home__card_item__bg">
          <div class="card_head">
            <h3>02</h3>
            <h4>Проверка отчетности</h4>
          </div>
          <p>Мы убедимся, что все цифры в вашем главном журнале правильные и актуальные. С нашей помощью вы всегда будете в курсе состояния ваших отчетов.</p>
        </li>
        <li class="home__card_item">
          <img src="@/assets/images/home-card-bg.png" alt="" class="home__card_item__bg">
          <div class="card_head">
            <h3>03</h3>
            <h4>Поддержка аудита</h4>
          </div>
          <p>Аудит – это важный процесс, требующий внимания и тщательности. Мы поможем вам в проведении аудита за финансовый год.</p>
        </li>
      </ul>
    </Container>
  </section>
  <!-- Home end -->

  <!-- Business -->
  <section class="business">
    <Container>
      <div class="business__top">
        <div class="business__content">
          <h2 class="business__title">Безупречная Бухгалтерия для Вашего Бизнеса</h2>
          <p class="business__description">Сделайте первый шаг к успешному и беззаботному ведению бухгалтерии – позвоните нам сегодня. Мы готовы ответить на все ваши вопросы, обсудить ваши потребности и предложить оптимальные решения для вашего бизнеса.</p>
          <a href="#" class="btn_blue">Свяжитесь с нами</a>
        </div>
        <ul>
          <li class="business__card">
            <div class="business__card_head">
              <img src="@/assets/images/business-card-1.svg" alt="">
              <h3>Профессионализм <br> и опыт</h3>
            </div>
            <p>Наша команда состоит из сертифицированных бухгалтеров с многолетним опытом работы. Мы всегда следуем лучшим практикам и стандартам бухгалтерии.</p>
          </li>
          <li class="business__card">
            <div class="business__card_head">
              <img src="@/assets/images/business-card-2.svg" alt="">
              <h3>Широкий <br> спектр услуг</h3>
            </div>
            <p>Мы предлагаем полный набор бухгалтерских услуг, от ведения бухгалтерии и сверки счетов до поддержки аудита и создания финансовых отчетов. Независимо от ваших потребностей, мы готовы помочь.</p>
          </li>
        </ul>
      </div>
      <ul class="business__bottom">
        <li class="business__card">
          <div class="business__card_head">
            <img src="@/assets/images/business-card-3.svg" alt="">
            <h3>Прозрачность и <br> надежность</h3>
          </div>
          <p>Мы ценим доверие наших клиентов и стремимся к полной прозрачности нашей работы. Все финансовые операции и отчеты будут подробно и понятно описаны, чтобы вы всегда были в курсе состояния ваших финансов.</p>
        </li>
        <li class="business__card">
          <div class="business__card_head">
            <img src="@/assets/images/business-card-4.svg" alt="">
            <h3>Индивидуальный <br> подход</h3>
          </div>
          <p>Мы уважаем уникальность каждого бизнеса и стремимся предложить решения, которые наилучшим образом соответствуют вашим нуждам и целям.</p>
        </li>
      </ul>
    </Container>
  </section>
  <!-- Business end -->
</template>
