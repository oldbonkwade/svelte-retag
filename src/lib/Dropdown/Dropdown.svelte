<!-- <svelte:options customElement="{{ tag: "c-dropdown", shadow: 'none' }}" /> -->

<script>
  // import { Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte';
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  // import { ChevronDownOutline } from 'flowbite-svelte-icons';
</script>

<Button>Dropdown button</Button>
<Dropdown>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
