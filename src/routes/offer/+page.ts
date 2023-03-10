import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export function load() {

  return {
    title: 'Offer',
    content: 'Testing'
  };

  throw error(404, 'Not found');
}