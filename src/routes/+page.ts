/** @type {import('./$types').PageLoad} */
// @ts-ignore
export function load({ params }) {
    return {
        post: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        }
    };
}