<template>
  <div class="panel">
    <!-- body -->
    <transition name="panel-fade" @enter="enter" @before-leave="beforeLeave" @leave="leave">
      <div class="panel__body" v-show="ifShowBody">
        <slot></slot>
      </div>
    </transition>
    <!-- footer -->
    <div class="panel__footer">
      <slot name="header">更多</slot>
      <i
        v-if="showIcon"
        class="panel__header__icon"
        :class="{[`arrow--${iconClass}`]: true}"
        @click="iconClick"
      ></i>
    </div>
  </div>
</template>
<script>
import velocity from "velocity-animate";

export default {
  name: "ezy-panel",
  props: {
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      iconClass: "up",
      bodyHeight: 0
    };
  },
  computed: {
    ifShowBody() {
      var c = true;
      switch (this.iconClass) {
        case "up":
          c = true;
          break;
        case "down":
          c = false;
          break;
      }
      return c;
    }
  },
  methods: {
    iconClick() {
      var self = this;
      switch (this.iconClass) {
        case "up":
          this.iconClass = "down";

          break;
        case "down":
          this.iconClass = "up";

          break;
      }
    },
    enter(el, done) {
      var self = this;
      velocity(
        el,
        { height: self.bodyHeight + "px" },
        { duration: 500, complete: done }
      );
    },
    beforeLeave(el, done) {
      this.bodyHeight = el.clientHeight;
    },
    leave(el, done) {
      el.style.height = el.clientHeight + "px";
      velocity(el, { height: "0px" }, { duration: 500, complete: done });
    }
  }
};
