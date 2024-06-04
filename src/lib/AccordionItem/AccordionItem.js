import svelteRetag from 'svelte-retag';
import AccordionItem from './AccordionItem.svelte';

svelteRetag({
component: AccordionItem,
tagname: 'c-accordionitem',

// Optional:
attributes: true, // Forward all attributes to your component, or set to explicit list of attributes, e.g. ['greetperson'] or leave empty
shadow: false, // Use the light DOM
// href: '/your/stylesheet.css', // Only necessary if shadow is true
});