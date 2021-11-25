<template>
  <v-app-bar style="margin-top: 0px">
    <div>
      <v-system-bar app style="background: white">
        <v-spacer></v-spacer>
        <v-icon>mdi-wifi-strength-4</v-icon>
        <v-icon>mdi-signal-cellular-outline</v-icon>
        <v-icon>mdi-battery</v-icon>
        <span>12:30</span>
      </v-system-bar>
    </div>

    <v-container>
      <v-card
        class="overflow-hidden"
        style="position: absolute; top: 2.5%; right: 0; width: 100%"
      >
        <v-app-bar
          absolute
          color="#fcb69f"
          dark
          shrink-on-scroll
          src="https://picsum.photos/1920/1080?random"
          scroll-target="#scrolling-techniques-2"
          style="padding-top: 0.8rem"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            ></v-img>
          </template>

          <v-app-bar-title style="padding-bottom: 2vh"></v-app-bar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-2"
          class="overflow-y-auto"
          max-height="600"
        >
          <v-container style="height: 128px"></v-container>
        </v-sheet>
      </v-card>
    </v-container>
  </v-app-bar>
</template>