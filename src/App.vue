<script>
    export default {
        data () {
            return {
                tab: null,
                items: [
                    'Последние действия', 'Настройки', 'Фото профиля', 'Показ уведомление'
                ]
            }
        }
    }
</script>

<template>
    <v-app class="blue-grey lighten-4">
        <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-flex d-flex xs12>
                    <v-layout wrap align-start justify-space-between row fill-height>
                        <v-flex>
                            <v-card class="v_card_content">
                                <v-card-avatar>
                                    <v-img class="img"
                                            src="/profesor1.jpg"
                                            aspect-ratio="2.75"
                                    ></v-img>
                                </v-card-avatar>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline">Chilat Sergiu</h3>
                                        <p>Администратор</p>
                                    </div>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                        <v-flex>
                            <v-layout>
                                <v-flex d-flex xs12>
                                    <v-card>
                                        <h4 class="mt-3 ml-3">Информация о пользователя</h4>
                                        <v-list two-line>
                                            <v-list-tile @click="">

                                                <v-list-tile-action>
                                                    <v-icon color="black">contact_mail</v-icon>
                                                </v-list-tile-action>

                                                <v-list-tile-content>
                                                    <v-list-tile-title>E-mail</v-list-tile-title>
                                                    <v-list-tile-sub-title>chilatsergiu@gmail.com</v-list-tile-sub-title>
                                                </v-list-tile-content>

                                                <v-list-tile-action>
                                                    <v-icon color="black">chat</v-icon>
                                                </v-list-tile-action>

                                            </v-list-tile>

                                            <v-list-tile @click="">

                                                <v-list-tile-action>
                                                    <v-icon color="black">phone</v-icon>
                                                </v-list-tile-action>


                                                <v-list-tile-content>
                                                    <v-list-tile-title>Telephone</v-list-tile-title>
                                                    <v-list-tile-sub-title>37360333284</v-list-tile-sub-title>
                                                </v-list-tile-content>

                                            </v-list-tile>
                                            <v-divider inset></v-divider>
                                            <v-list-tile @click="">

                                                <v-list-tile-action>
                                                    <v-icon color="black">calendar_today</v-icon>
                                                </v-list-tile-action>


                                                <v-list-tile-content>
                                                    <v-list-tile-title>Date of Birth</v-list-tile-title>
                                                    <v-list-tile-sub-title>23.07.1984</v-list-tile-sub-title>
                                                </v-list-tile-content>

                                            </v-list-tile>

                                            <v-list-tile @click="">

                                                <v-list-tile-action>
                                                    <v-icon color="black">calendar_today</v-icon>
                                                </v-list-tile-action>

                                                <v-list-tile-content>
                                                    <v-list-tile-title>Date of Registration</v-list-tile-title>
                                                    <v-list-tile-sub-title>2016-11-29 14:00:31</v-list-tile-sub-title>
                                                </v-list-tile-content>

                                            </v-list-tile>
                                            <v-divider inset></v-divider>
                                            <v-list-tile @click="">

                                                <v-list-tile-action>
                                                    <v-icon color="black">calendar_today</v-icon>
                                                </v-list-tile-action>

                                                <v-list-tile-content>
                                                    <v-list-tile-title>Date Last Edited</v-list-tile-title>
                                                    <v-list-tile-sub-title></v-list-tile-sub-title>
                                                </v-list-tile-content>

                                            </v-list-tile>
                                        </v-list>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-flex d-flex xs-9 ml-3>
                        <div>
                            <v-toolbar color="white" tabs>
                                <v-toolbar-side-icon></v-toolbar-side-icon>

                                <v-toolbar-title>Page title</v-toolbar-title>

                                <v-spacer></v-spacer>

                                <v-btn icon>
                                    <v-icon>search</v-icon>
                                </v-btn>

                                <v-btn icon>
                                    <v-icon>more_vert</v-icon>
                                </v-btn>

                                <template v-slot:extension>
                                    <v-tabs
                                            v-model="tab"
                                            color="white"
                                            align-with-title
                                    >
                                        <v-tabs-slider color="blue"></v-tabs-slider>

                                        <v-tab v-for="item in items" :key="item">
                                            {{ item }}
                                        </v-tab>
                                    </v-tabs>
                                </template>
                            </v-toolbar>

                            <v-tabs-items v-model="tab">
                                <v-timeline>
                                    <v-timeline-item
                                            v-for="n in 4"
                                            :key="n"
                                    >
                                        <template v-slot:icon>
                                            <v-avatar>
                                                <img src="/profesor.png">
                                            </v-avatar>
                                        </template>
                                        <template v-slot:opposite>
                                            <span>It is perfect</span>
                                        </template>
                                        <v-card>
                                            <v-card-title class="headline">Dialog</v-card-title>
                                            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at.</v-card-text>
                                        </v-card>
                                    </v-timeline-item>
                                </v-timeline>
                                <v-layout v-if="tab === 'Настройки'">
                                    <v-flex xs12 sm6 offset-sm3>
                                        <v-card>
                                            <v-img
                                                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                                                    aspect-ratio="2.75"
                                            ></v-img>

                                            <v-card-title primary-title>
                                                <div>
                                                    <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                                                    <div> {{ card_text }} </div>
                                                </div>
                                            </v-card-title>

                                            <v-card-actions>
                                                <v-btn flat color="orange">Share</v-btn>
                                                <v-btn flat color="orange">Explore</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-tabs-items>
                        </div>
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-container>
    </v-app>
</template>

<style>
    h3{
        text-transform: uppercase;
    }
    h4{
        font-weight: normal;
        font-size: 16px;
        color: grey;
    }
    .img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
    .flex > .v_card_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 10px;
    }
    p{
        text-align: center;
    }
</style>