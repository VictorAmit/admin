import { Menu } from 'ant-design-vue'
const { Item, SubMenu, Divider } = Menu

export default {
  name: 'CuiMenu',
  props: {
    menuData: {
      required: true,
    },
    theme: {
      required: false,
      default: 'dark',
    },
    mode: {
      required: false,
      default: 'inline',
    },
    collapsed: {
      required: false,
      default: false,
    },
  },
  data() {
    return {
      openKeys: [],
      selectedKeys: [],
      cachedOpenKeys: [],
    }
  },
  computed: {
    rootSubmenuKeys: vm => {
      let keys = []
      vm.menuData.forEach(item => {
        keys.push(item.key)
      })
      return keys
    },
  },
  created() {
    this.updateMenu()
  },
  watch: {
    collapsed(val) {
      if (val) {
        this.cachedOpenKeys = this.openKeys
        this.openKeys = []
      } else {
        this.openKeys = this.cachedOpenKeys
      }
    },
    $route: function () {
      this.updateMenu()
    },
  },
  methods: {
    renderIcon: function () {
      return null
    },
    renderMenuItem: function (h, menu, pIndex, index) {
      return h(
        Item,
        {
          disabled: true,
          key: menu.key ? menu.key : 'item_' + pIndex + '_' + index,
        },
        [
          menu.url
            ? menu.target
              ? h('a', { attrs: { href: menu.url, target: menu.target ? menu.target : '' } }, [
                this.renderIcon(h, menu.icon),
                h('span', [menu.title]),
              ])
              : h('router-link', { props: { to: menu.url } }, [
                this.renderIcon(h, menu.icon),
                h('span', [menu.title]),
              ])
            : h('span', [menu.title]),
        ]
      )
    },
    renderSubMenu: function (h, menu, pIndex, index) {
      var this2_ = this
      var subItem = [
        h('span', { slot: 'title' }, [
          this.renderIcon(h, menu.icon),
          h('span', [menu.title]),
        ]),
      ]
      var itemArr = []
      var pIndex_ = pIndex + '_' + index
      menu.children.forEach(function (item, i) {
        itemArr.push(this2_.renderItem(h, item, pIndex_, i))
      })
      return h(
        SubMenu,
        { key: menu.key ? menu.key : 'submenu_' + pIndex + '_' + index },
        subItem.concat(itemArr)
      )
    },
    renderItem: function (h, menu, pIndex, index) {
      if (menu.divider) {
        return h(Divider)
      }
      if (!menu.invisible) {
        return menu.children
          ? this.renderSubMenu(h, menu, pIndex, index)
          : this.renderMenuItem(h, menu, pIndex, index)
      }
    },
    renderMenu: function (h, menuTree) {
      var this2_ = this
      var menuArr = []
      menuTree.forEach(function (menu, i) {
        menuArr.push(this2_.renderItem(h, menu, '0', i))
      })
      return menuArr
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      )
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    updateMenu() {
      // let routes = this.$route.matched.concat();
      // this.selectedKeys = [routes.pop().key ? routes.pop().key : ''];
      // let openKeys = [];
      // routes.forEach(item => {
      //   openKeys.push(item.key);
      // });
      // this.collapsed || this.mode === "horizontal"
      //   ? (this.cachedOpenKeys = openKeys)
      //   : (this.openKeys = openKeys);
    },
  },
  render(h) {
    return h(
      Menu,
      {
        props: {
          theme: this.$props.theme,
          mode: this.$props.mode,
          openKeys: this.openKeys,
          selectedKeys: this.selectedKeys,
        },
        on: {
          openChange: this.onOpenChange,
          select: obj => {
            this.selectedKeys = obj.selectedKeys
            this.$emit('select', obj)
          },
        },
      },
      this.renderMenu(h, this.menuData)
    )
  },
}
