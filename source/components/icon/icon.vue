<script>
export default {
  props: {
    name: {
      type: String,
      default: 'user'
    },
    size: {
      type: [String, Number],
      default: 16
    },
    color: {
      type: String,
      default: '#000000'
    },
    className: {
      type: String
    }
  },
  computed: {
    icon() {
      const xml = require(`!xml-loader!../../../node_modules/@descco/ui-core/lib/images/svg/icon/${this.name}.svg`);
      const t = xml.svg.$.viewBox.split(' ');

      return {
        color: this.color,
        style: {
          height: this.size,
          width: this.size
        },
        width: t[2],
        height: t[3],
        path: xml.svg.path[0]['$']
      };
    },
    box() {
      return `0 0 ${this.icon.width} ${this.icon.height}`;
    }
  }
};
</script>

<template>
  <svg
    verticalAlign="middle"
    :viewBox="box"
    :class="className"
    :fill="icon.color"
    :width="icon.width"
    :height="icon.height"
    :style="icon.style"
  >
    <path :d="icon.path.d" />
  </svg>
</template>
