<template>
    <v-app id="inspire">
      <v-layout row justify-center>
        <v-toolbar app dark color="primary darken-1" class="hidden-xs-and-down">
          <v-avatar
            color="green"
            size="48"
            class="mr-2"
          >
            <span class="white--text headline">SA</span>
          </v-avatar>
          <v-toolbar-title class="font-weight-bold">SoftArray</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
          <v-btn
            v-for="item in nav"
            :key="item.icon"
            to="#"
            :title="item.title"
            flat
          >{{ item.text }}</v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-toolbar app dark color="primary darken-3" class="hidden-sm-and-up mb-0 pb-0">
          <v-toolbar-title>SoftArray</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <v-toolbar-side-icon dark slot="activator"></v-toolbar-side-icon>
            <v-card>
              <v-toolbar flat color="primary darken-2">
                <v-toolbar-title>SoftArray</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click.native="dialog = false">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-toolbar>

              <v-list>
                <v-list-tile
                  v-for="(item, index) in nav"
                  :key="index"
                  to="#"
                >
                  <v-list-tile-action>
                    <v-icon v-if="item.icon">{{item.icon}}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title :title="item.title">{{ item.text }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-dialog>

        </v-toolbar>
      </v-layout>
  <!------------End Top Navbar---------------------->

  <!------------Start Carousal Slider---------------------->
        <v-container fluid class="ma-0 pa-0">
          <v-carousel
            cycle
            height="550"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item>
              <v-img
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="display-3 yellow--text font-weight-bold">
                    Welcome to SoftArray
                  </div>
                </v-row>
              </v-img>
            </v-carousel-item>
            <v-carousel-item>
              <v-img
              src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="display-3 yellow--text font-weight-bold">
                    Welcome to SoftArray
                  </div>
                </v-row>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-container>
        <!------------Start Carousal Slider---------------------->
    <!-----End cover photo section----->


    <!-----Start input field----->
        <v-form>
          <v-container class="grey lighten-3 pa-5 py-12">
            <v-row class="pt-5">
              <v-col
                cols="12"
                md="4"
                sm="12"
              >
                <v-text-field
                  v-model="first"
                  label="Name"
                  outlined
                  shaped
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="12"
              >
                <v-text-field
                  v-model="email"
                  label="First Name"
                  outlined
                  shaped
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
                sm="12"
              >
                <v-text-field
                  v-model="subscribe"
                  label="Subscribe"
                  outlined
                  shaped
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
    <!-----End Input field----->

    <!-----Start Our Services----->
      <v-container class="grey lighten-5 py-6">
        <div>
          <h3 class="text-center display-3 pa-5 mt-5 primary--text">Our Services</h3>
        </div>

        <v-row class="px-5 pb-5 mb-9">
          <v-col
            cols="4"
            md="4"
            sm="12"
          >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="/giphy (1).gif"
              height="200px"
            ></v-img>

            <v-card-title>
              Web Design
            </v-card-title>

            <v-card-subtitle class="pt-1">
              We take care of everything behind the design to make it work flawlessly.
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                View Details
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  We design and develop a variety of applications for Windows including specialized and custom software.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          </v-col>

          <v-col
            cols="4"
            md="4"
            sm="12"
          >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="/Coder-giphy.gif"
              height="200px"
            ></v-img>

            <v-card-title>
              Windows Applications
            </v-card-title>

            <v-card-subtitle class="pt-1">
              We design and develop a variety of applications for Windows software.
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                View Details
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  We design and develop a variety of applications for Windows including specialized and custom software.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          </v-col>
          <v-col
            cols="4"
            md="4"
            sm="12"
          >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="/giphy (2).gif"
              height="200px"
            ></v-img>

            <v-card-title>
              iOS/MacOS Apps
            </v-card-title>

            <v-card-subtitle class="pt-1">
              We also develops multipurpose applications for iOS and MacOS systems and devices.
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                View Details
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  We design and develop a variety of applications for Windows including specialized and custom software.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          </v-col>
          <v-col
            cols="4"
            md="4"
            sm="12"
          >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="/giphy.gif"
              height="200px"
            ></v-img>

            <v-card-title>
              QA & Testing
            </v-card-title>

            <v-card-subtitle class="pt-1">
              We pay a lot of attention to QA and Testing to ensure the best quality of our software.
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                View Details
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  We design and develop a variety of applications for Windows including specialized and custom software.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          </v-col>
          <v-col
            cols="4"
            md="4"
            sm="12"
          >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="/giphy (3).gif"
              height="200px"
            ></v-img>

            <v-card-title>
              UX & UI Design
            </v-card-title>

            <v-card-subtitle class="pt-1">
              We develop stunning and eye-catching websites as per the today’s business trend
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                View Details
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  We design and develop a variety of applications for Windows including specialized and custom software.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          </v-col>
          <v-col
            cols="4"
            md="4"
            sm="12"
          >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-img
              src="/search-giphy.gif"
              height="200px"
            ></v-img>

            <v-card-title>
              Database Management
            </v-card-title>

            <v-card-subtitle class="pt-1">
              We provides top-notch database management solutions for businesses worldwide.
            </v-card-subtitle>

            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                View Details
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  We design and develop a variety of applications for Windows including specialized and custom software.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
          </v-col>
        </v-row>
      </v-container>
    <!-------------Start Our Services----->



    <!-----------Start Pricing Table----->
      <v-container class="grey lighten-4 pa-5 py-9">
        <div>
          <h3 class="text-center display-3 pa-5 mt-5 primary--text">Pricing Plans</h3>
        </div>
        <v-row class="pa-5">
          <v-timeline
          align-top

          >
          <v-timeline-item
            icon="mdi-star"
            fill-dot
            :dense="$vuetify.breakpoint.smAndDown"
          >
            <v-card
              color="error"
              dark
            >
              <v-card-title class="title">
                BASIC
                <span class="ml-auto display-1">$ 399</span>
              </v-card-title>
              <v-card-text class="white text--primary">
                <p class="py-3">Concept development UI design.Configuration management Software quality assurance, App integration. We pay a lot of attention to QA and Testing procedures to ensure the best quality of our software.</p>
                <v-btn
                  color="primary"
                  class="mx-0"
                  outlined
                >
                  Order Now
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            icon="mdi-buffer"
            fill-dot
          >
            <v-card
              color="green lighten-1"
              dark
            >
              <v-card-title class="title">
                Optimal
                <span class="ml-auto display-1">$ 459</span>
              </v-card-title>
              <v-card-text class="white text--primary">
                <p class="py-3">Concept development UI design.Configuration management Software quality assurance, App integration. We pay a lot of attention to QA and Testing procedures to ensure the best quality of our software.</p>
                <v-btn
                  color="primary"
                  class="mx-0"
                  outlined
                >
                  Order Now
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            icon="mdi-airballoon"
            fill-dot
          >
            <v-card
              color="orange lighten-2"
              dark
            >
              <v-card-title class="title">
                Ultimate
                <span class="ml-auto display-1">$ 549</span>
              </v-card-title>
              <v-card-text class="white text--primary">
                <p class="py-3">Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                <v-btn
                  color="primary"
                  class="mx-0"
                  outlined
                >
                  Order Now
                </v-btn>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        </v-row>
      </v-container>
    <!------------End Pricing Table----------------->


    <!----------------Start Meet the CEO------------------>
      <v-container class="grey lighten-5 py-6">
        <div>
          <h3 class="text-center display-3 pa-5 mt-5 primary--text">Meet the CEO</h3>
        </div>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias saepe excepturi autem libero corporis hic ex perferendis assumenda consectetur quaerat neque dolore, dolores maiores.</p>

        <v-row class="px-5 pb-5 mb-9">
          <v-col
            cols="4"
            md="4"
            sm="12"
          >
            <v-card
                max-width="375"
                class="mx-auto"
              >
                <v-img
                  src="https://ca.slack-edge.com/TRXMNEQR0-URZ1J7NAF-10494826d8d0-512"
                  height="300px"
                  dark
                >
                  <v-row class="fill-height">
                    <v-card-title>
                      <v-btn
                        dark
                        icon
                      >
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn
                        dark
                        icon
                        class="mr-4"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>

                      <v-btn
                        dark
                        icon
                      >
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </v-card-title>

                    <v-spacer></v-spacer>

                    <v-card-title class="white--text pl-12 pt-12">
                      <div class="display-1 pl-12 pt-12">
                        Ismail Hossain
                      </div>
                    </v-card-title>
                  </v-row>
                </v-img>

                <v-list two-line>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-phone
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>(650) 555-1234</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>(323) 555-6789</v-list-item-title>
                      <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-email
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>ismailplusbd1994@gmail.com</v-list-item-title>
                      <v-list-item-subtitle>Personal</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>softarray@gmail.com</v-list-item-title>
                      <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-map-marker
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>Raozan, Chattogram</v-list-item-title>
                      <v-list-item-subtitle>Orlando, Bangladesh</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
          </v-col>
          <v-col
            cols="4"
            md="4"
            sm="12"
          >
            <v-card
                max-width="375"
                class="mx-auto"
              >
                <v-img
                  src="https://ca.slack-edge.com/TRXMNEQR0-U01654FTKUZ-62dc73c3584a-512"
                  height="300px"
                  dark
                >
                  <v-row class="fill-height">
                    <v-card-title>
                      <v-btn
                        dark
                        icon
                      >
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn
                        dark
                        icon
                        class="mr-4"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>

                      <v-btn
                        dark
                        icon
                      >
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </v-card-title>

                    <v-spacer></v-spacer>

                    <v-card-title class="white--text pl-12 pt-12">
                      <div class="display-1 pl-12 pt-12">
                        Mr. YUSUF
                      </div>
                    </v-card-title>
                  </v-row>
                </v-img>

                <v-list two-line>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-phone
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>(650) 555-1234</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>(323) 555-6789</v-list-item-title>
                      <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-email
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>mdyusufbinnur@gmail.com</v-list-item-title>
                      <v-list-item-subtitle>Personal</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>softarray@gmail.com</v-list-item-title>
                      <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-map-marker
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>Raozan, Chattogram</v-list-item-title>
                      <v-list-item-subtitle>Orlando, Bangladesh</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
          </v-col>
          <v-col
            cols="4"
            md="4"
            sm="12"
          >
            <v-card
                max-width="375"
                class="mx-auto"
              >
                <v-img
                  src="https://ca.slack-edge.com/TRXMNEQR0-U019LU6KHL4-0b8c2fb46bb7-512"
                  height="300px"
                  dark
                >
                  <v-row class="fill-height">
                    <v-card-title>
                      <v-btn
                        dark
                        icon
                      >
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>

                      <v-spacer></v-spacer>

                      <v-btn
                        dark
                        icon
                        class="mr-4"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>

                      <v-btn
                        dark
                        icon
                      >
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </v-card-title>

                    <v-spacer></v-spacer>

                    <v-card-title class="white--text pl-12 pt-12">
                      <div class="display-1 pl-12 pt-12">
                        Rubaiyat Faisal
                      </div>
                    </v-card-title>
                  </v-row>
                </v-img>

                <v-list two-line>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-phone
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>(650) 555-1234</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>(323) 555-6789</v-list-item-title>
                      <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon>mdi-message-text</v-icon>
                    </v-list-item-icon>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-email
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>rubaiyatayonfaisal@gmail.com</v-list-item-title>
                      <v-list-item-subtitle>Personal</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-list-item>
                    <v-list-item-action></v-list-item-action>

                    <v-list-item-content>
                      <v-list-item-title>softarray@gmail.com</v-list-item-title>
                      <v-list-item-subtitle>Work</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider inset></v-divider>

                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="indigo">
                        mdi-map-marker
                      </v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>Raozan, Chattogram</v-list-item-title>
                      <v-list-item-subtitle>Orlando, Bangladesh</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
          </v-col>

        </v-row>
      </v-container>
    <!-----------------End Meet the CEO----------------->


    <!-----------------Start footer----------------->
        <v-row class="ma-0 pa-0">
          <v-col
            cols="12"
            md="12"
            sm="12"
            class="ma-0 pa-0"
          >
            <v-footer
            dark
            padless
          >
            <v-card
              class="flex"
              flat
              tile
            >
              <v-card-title class="teal">
                <strong class="subheading py-4">Get connected with SoftArray on social networks!</strong>

                <v-spacer></v-spacer>

                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4"
                  dark
                  icon
                >
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-title>

              <v-card-text class="py-2 white--text text-center">
                Copyright &copy; {{ new Date().getFullYear() }} — <strong>SoftArray</strong> | All Right Reserved.
              </v-card-text>
            </v-card>
          </v-footer>
          </v-col>
        </v-row>
    <!-----------------End Meet the CEO------------------->




    </v-app>
</template>





<script>
export default {
  data () {
    return {
      dialog: false,
      nav: [
        {
          icon: 'home',
          text: 'Home',
          title: 'Back to Home page',
          active: true
        },
        {
          icon: 'info',
          text: 'About',
          title: 'About this demo',
          active: false
        },
        {
          icon: 'assignment_turned_in',
          text: 'Team',
          title: 'Some stuff that needs doing',
          active: false
        },
        {
          icon: 'email',
          text: 'Contact',
          title: 'Our Contact info',
          active: false
        },
      ],
      first: 'John',                           // for 'text fields'
      email: 'Doe',
      subscribe: 'softarray@gamil.com',
      show: false,                            // for 'our services'

      icons: [                                // for 'footer'
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      // colors: [
      //     'indigo',
      //     'warning',
      //     'pink darken-2',
      //     'red lighten-1',
      //     'deep-purple accent-4',
      // ],
      // slides: [
      //   'First',
      //   'Second',
      //   'Third',
      //   'Fourth',
      //   'Fifth',
      // ],
    }
  }
}
</script>


<style scoped>
.v-responsive__content{
  margin-top: 0px;
  padding-top: 0px;
}
</style>
