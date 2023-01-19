import { error } from '@sveltejs/kit';

export function GET() {
    throw error(400, {
        message: 'Error Test'
    });
}