<template>

    <div class="hero-slider" data-carousel>
        <div class="carousel-cell"
            style="background-image:url(https://68.media.tumblr.com/57836ee52bc9355ad7c5fed5abf91ccc/tumblr_oiboo6MaRS1slhhf0o1_1280.jpg);">
            <div class="overlay"></div>
            <div class="inner">
                <h3 class="subtitle">Slide 1</h3>
                <h2 class="title">Flickity Parallax</h2>
                <a href="https://flickity.metafizzy.co/" target="_blank" class="btn">Tell me more</a>
            </div>
        </div>
        <div class="carousel-cell"
            style="background-image:url(https://68.media.tumblr.com/c40636a5a0d4aa39c335c8db40d2144f/tumblr_omc7z7Xv8N1slhhf0o1_1280.jpg);">
            <div class="overlay"></div>
            <div class="inner">
                <h3 class="subtitle">Slide 2</h3>
                <h2 class="title">Flickity Parallax</h2>
                <a href="https://flickity.metafizzy.co/" target="_blank" class="btn">Tell me more</a>
            </div>
        </div>
        <div class="carousel-cell"
            style="background-image:url(https://68.media.tumblr.com/3beb13a4167aa8b5c4743eac17bf351c/tumblr_o8nyvtiHfC1slhhf0o1_1280.jpg);">
            <div class="overlay"></div>
            <div class="inner">
                <h3 class="subtitle">Slide 3</h3>
                <h2 class="title">Flickity Parallax</h2>
                <a href="https://flickity.metafizzy.co/" target="_blank" class="btn">Tell me more</a>
            </div>
        </div>
    </div>

</template>

<script setup>





</script>
<style lang="scss" >
$font-family-primary: 'Montserrat', sans-serif;
$font-family-secondary: 'Roboto Slab', serif;

body {
    background-color: #000;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, transparentize(#0E1D33, 0.2), transparentize(#0E1D33, 0.8));
}

.hero-slider {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .carousel-cell {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        .inner {
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            text-align: center;

            .subtitle {
                font-family: $font-family-secondary;
                font-size: 2.2rem;
                line-height: 1.2em;
                font-weight: 200;
                font-style: italic;
                letter-spacing: 3px;
                color: rgba(255, 255, 255, 0.5);
                margin-bottom: 5px;
            }

            .title {
                font-family: $font-family-primary;
                font-size: 3rem;
                line-height: 1.2em;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin-bottom: 40px;
            }

            .btn {
                border: 1px solid #fff;
                padding: 14px 18px;
                text-transform: uppercase;
                font-family: $font-family-primary;
                font-size: 0.8rem;
                letter-spacing: 3px;
                color: #fff;
                text-decoration: none;
                transition: all .2s ease;

                &:hover {
                    background: #fff;
                    color: #000;
                }
            }
        }
    }

    .flickity-prev-next-button {
        width: 80px;
        height: 80px;
        background: transparent;

        &:hover {
            background: transparent;
        }

        .arrow {
            fill: white;
        }
    }

    .flickity-page-dots {
        bottom: 30px;

        .dot {
            width: 30px;
            height: 4px;
            opacity: 1;
            background: rgba(255, 255, 255, 0.5);
            border: 0 solid white;
            border-radius: 0;

            &.is-selected {
                background: #ff0000;
                border: 0 solid #ff0000;
            }
        }
    }
}
</style>