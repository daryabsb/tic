<template>
    <ParalaxSlide>
        <div class="map-container w-3/4 mx-auto">
            <img src="~/assets/img/map.png">
            <div class="point dubai tippy" title="Dubai"></div>
            <div class="point abudhabi tippy" title="Abu Dhabi"></div>
            <div class="point sulaimani tippy" title="Iraq"></div>
            <div class="point cairo tippy" title="Egypt"></div>
            <div class="point delhi tippy" title="India"></div>
            <div class="point japan tippy" title="Japan"></div>



            <div class="point south-africa tippy" title="South Africa"></div>
            <div class="point kenya tippy" title="Kenya"></div>
            <div class="point london tippy" title="United Kingdom"></div>
            <div class="point nairobi tippy" title="Nairobi"></div>



        </div>
    </ParalaxSlide>

</template>

<style lang="scss" scoped>
html,
body {
    height: 100%;
}

body {
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
}


$primary: #c10000;

.map-container {
    padding: 3.2rem .8rem;
    position: relative;
    display: inline-block;

    img {
        width: 100%;
    }

    .point {
        cursor: pointer;
        position: absolute;
        width: 1.4rem;
        height: 1.4rem;
        background-color: $primary;
        border-radius: 50%;
        transition: all .3s ease;
        will-change: transform, box-shadow;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 0 rgba($primary, 0.4);
        animation: pulse 3s infinite;

        &:hover {
            animation: none;
            transform: translate(-50%, -50%) scale3D(1.35, 1.35, 1);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        }
    }



    .dubai {
        top: 41%;
        left: 62%;
    }

    .south-africa {
        top: 67%;
        left: 54%;
    }

    .kenya {
        top: 57%;
        left: 57%;
    }

    .london {
        top: 27%;
        left: 45%;
    }

    .abudhabi {
        top: 45%;
        left: 62%;
    }

    .nairobi {
        top: 54%;
        left: 53%;
    }


    .cairo {
        top: 40%;
        left: 53%;
    }

    .sulaimani {
        top: 34%;
        left: 58%;
    }



    .delhi {
        top: 45%;
        left: 68%;
    }

    .japan {
        top: 34%;
        left: 86%;
    }


}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba($primary, 0.5);
    }

    70% {
        box-shadow: 0 0 0 25px rgba($primary, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba($primary, 0);
    }
}
</style>