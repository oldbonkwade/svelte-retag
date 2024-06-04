<!-- <svelte:options customElement={{ tag: "c-accordionitem", shadow: "none" }} /> -->

<script>
  import { AccordionItem } from "flowbite-svelte";
</script>

<AccordionItem>
  <slot name="header"></slot>
  <div>Some copy</div>
</AccordionItem>
