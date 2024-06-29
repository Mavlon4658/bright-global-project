<script>
export default {
    name: "Header"
}
</script>

<template>
    <header class="header">
        <Container class="header__container">
            <router-link to="/" class="header__logo">
                <img src="@/assets/images/header-logo.svg" alt="">
            </router-link>
            <ul class="header__nav">
                <li>
                    <router-link class="header__nav_link" to="/">Генератор WPS файлов</router-link>
                </li>
                <li>
                    <router-link class="header__nav_link" to="/">Прайслист</router-link>
                </li>
                <li>
                    <button>RU</button>
                </li>
            </ul>
        </Container>
    </header>
</template>