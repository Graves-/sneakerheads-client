export const imports = {
  'src/components/UI/BrandDropdown/BrandDropdown.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-ui-brand-dropdown-brand-dropdown" */ 'src/components/UI/BrandDropdown/BrandDropdown.mdx'),
  'src/components/UI/SneakerDropdown/SneakerDropdown.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-ui-sneaker-dropdown-sneaker-dropdown" */ 'src/components/UI/SneakerDropdown/SneakerDropdown.mdx'),
  'src/components/UI/SneakerList/SneakerList.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-ui-sneaker-list-sneaker-list" */ 'src/components/UI/SneakerList/SneakerList.mdx'),
}
