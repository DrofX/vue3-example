<template>
  <div id="app">
    <b-navbar shadow>
      <template slot="start">
        <b-navbar-item class="navbar__title">
          Vue 3 Example
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="columns">
      <div class="column is-2 column__menu">
        <b-menu>
          <b-menu-list label="Menu">
            <b-menu-item
              label="Custom store"
              icon="information-outline"
              tag="router-link"
              to="/"
            />
          </b-menu-list>
        </b-menu>
      </div>
      <div class="column">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.navbar__title {
  font-size: 1.5rem;
  font-weight: 400;
}

.column__menu {
  height: calc(100vh - 52px);
  border-right: 1px solid whitesmoke;
}
</style>
