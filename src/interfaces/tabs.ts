export interface TabProps {
  title: string
}

export interface TabState {
  selectedIndex: number
  tabs: VNode<TabProps>[]
  count: number
}
