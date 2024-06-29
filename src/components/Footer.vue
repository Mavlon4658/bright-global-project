<script>
export default {

}
</script>

<template>
    <footer class="footer">
        <Container>
            <div class="footer__top">
                <router-link to="/" class="footer__logo">
                    <img src="@/assets/images/footer-logo.svg" alt="">
                </router-link>
                <div class="footer__nav">
                    <div class="footer__nav_item">
                        <a href="#">
                            <img src="@/assets/images/footer-nav-icon-1.svg" alt="">
                            <span>+971566797475</span>
                        </a>
                        <a href="#">
                            <img src="@/assets/images/footer-nav-icon-2.svg" alt="">
                            <span>elena@bga.ae</span>
                        </a>
                    </div>
                    <div class="footer__nav_item">
                        <a href="#">
                            <img src="@/assets/images/footer-nav-icon-3.svg" alt="">
                            <span>+@mayustup</span>
                        </a>
                        <a href="#">
                            <img src="@/assets/images/footer-nav-icon-4.svg" alt="">
                            <span>JLT, Dubai, UAE</span>
                        </a>
                    </div>
                    <div class="footer__nav_item">
                        <a href="#">
                            <img src="@/assets/images/footer-nav-icon-5.svg" alt="">
                            <span>+39140 IFZA <br> (показать pdf)</span>
                        </a>
                    </div>
                    <div class="footer__nav_item">
                        <p>Генератор WPS файлов</p>
                        <p>Прайслист</p>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <p>Copyright © 2024</p>
                <p>Политика конфиденциальности</p>
            </div>
        </Container>
    </footer>
</template>