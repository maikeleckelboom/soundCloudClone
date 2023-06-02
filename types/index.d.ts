export type NavItem = {
  name?: string
  icon?: string
  children?: NavItem[]
} & ({
  href: string;
  value: string;
  children?: never
} | {
  children: NavItem[];
  href?: never;
  value?: never;
})