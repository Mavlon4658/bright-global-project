<script>

export default {
  name: "About",
  data () {
    return {
      options: [
        {
          head: 'Вариант 1',
          body: [
            {
              description: 'Месячный бухучет (консультации + в пределах 100 транзакций)',
              title: '2,000 AED в месяц'
            },
            {
              description: 'Каждые последующий 100 транзакций',
              title: '+1,000 AED в месяц'
            },
          ]
        },
        {
          head: 'Вариант 2',
          body: [
            {
              description: 'Квартальный учет для малого бизнеса если компания уже зарегистрирована к НДС (до 10 документов в месяц, до 2х сотрудников)',
              title: '5,000 AED за квартал (декларация по НДС в цене)'
            },
          ]
        },
        {
          head: 'Вариант 3',
          body: [
            {
              description: 'Квартальный учет для малого бизнеса без регистрации к НДС (до 10 документов в месяц, до 2х сотрудников)',
              title: '3,000 AED за квартал'
            },
          ]
        },
        {
          head: 'Другие услуги',
          body: [
            {
              description: 'Внесение в учет транзакций за предыдущие периоды',
              title: 'цена договорная'
            },
            {
              description: 'Регистрация к НДС (VAT)',
              title: '2,000 AED разово'
            },
            {
              description: 'Подача НДС (VAT) отчета',
              title: '2,000 AED ежеквартально'
            },
            {
              description: 'Подача запроса на возврат НДС (форма VAT 311)',
              title: 'цена договорная'
            },
            {
              description: 'Регистрация к Корпоративному налогу',
              title: '600 AED разово (для компаний уже зарегистрированных к НДС), 1,000 AED разово (для первичной регистрации в FTA'
            },
            {
              description: 'Внесение обязательных изменений в информации о компании',
              title: '500 AED'
            },
            {
              description: 'Регистрация доступа к goAML порталу в Финансовой Полиции',
              title: '1,000 AED'
            },
            {
              description: 'Консультация базовая',
              title: '1,000 AED в час'
            },
            {
              description: 'Организация проведения аудита (подготовка и передача всей документации для проведения аудита, взаимодействие с аудитором по всем вопросам в отчетности компании)',
              title: '2,000 AED разово'
            },
            {
              description: 'Лицензия на бухгалтерский софт Quickbooks Online',
              title: '100 AED'
            },
          ]
        },
      ]
    }
  }
}
</script>


<template>
  <div class="about">
    <Container>
      <h2 class="about__title">Базовый прайслист</h2>
      <p class="about__subtitle">
        <span>Цены не включают 5% НДС</span>
        <img src="@/assets/images/warning.svg" alt="">
      </p>

      <div class="options">
        <div class="option" v-for="(option, i) in options" :key="i">
          <div class="option_head">
            <img src="@/assets/images/option-icon.svg" alt="">
            <h3>{{ option.head }}</h3>
          </div>
          <div class="option_body">
            <div class="option_body__item" v-for="(body, n) in option.body" :key="n">
              <p>{{ body.description }}</p>
              <h4>{{ body.title }}</h4>
            </div>
          </div>
        </div>
      </div>

    </Container>
  </div>
</template>
