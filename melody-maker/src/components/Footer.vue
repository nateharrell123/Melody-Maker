<template>
    <div class="footer-container">
    <div class="follow-me">
        <span class="title">Let's connect! ツ</span>
        <b-row style="text-align:center;">
            <b-col cols="3" align-self="center">
                    <svg @click="toLinkedIn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        class="social-icon"
                        width="40" height="40"
                        viewBox="0 0 30 30"
                        >
                        <!-- style=" fill:#1AAAAA;">     -->
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z">
                        </path>
                    </svg>
            </b-col>
            <b-col cols="3" align-self="center">
                <svg @click="toGit" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    class="social-icon"
                    width="40" height="40"
                    viewBox="0 0 24 24">    
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z">
                </path>
                </svg>
            </b-col>
            <b-col cols="3" align-self="center">
                <svg @click="toInsta" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    class="social-icon"
                    width="40" height="40"
                    viewBox="0 0 24 24"> 
                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z">
                    </path>
                </svg>
            </b-col>
            <b-col cols="3" align-self="center">
            <svg @click="toTube" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            class="social-icon"
                width="40" height="40"
                viewBox="0 0 50 50">
            <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z">
            </path>
            </svg>
            </b-col>
        </b-row>
    </div>
    <div style="padding-bottom:50px;"/>
    </div>
</template>

<script>
export default {
    name: "Footer",
    methods: {
        toLinkedIn(){
            window.open('https://www.linkedin.com/in/nate-harrell/')
        },
        toGit(){
            window.open('https://github.com/nateharrell123')
        },
        toInsta(){
            window.open('https://www.instagram.com/nateharrell/')
        },
        toTube(){
            window.open('https://www.youtube.com/c/NateHarrell')
        }
    }
}
</script>
<style scoped>
.footer-container{
    background:#32363b;
    padding-bottom:50px;
    width:500px;
    height:75px;
    margin:auto;
}
.follow-me{
    margin:auto;
}
.social-icon{
    fill:#1AAAAA;
    transition: background 1s;
}
.social-icon:hover{
    fill:white;
}
.title{
  font-family: "Montserrat";
    color: #9AAAAA;
    padding-left:5px;
}

</style>