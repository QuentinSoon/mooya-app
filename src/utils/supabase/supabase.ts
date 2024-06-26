'use client';

import { createClient } from './client';

export const HandleSignWithGoogle = async () => {
	const supabase = createClient();
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `${location.origin}/auth/callback`,
		},
	});
	if (error) {
		console.error(error);
		return;
	}
};

export async function HandleLogout() {
	try {
		const supabase = createClient();
		const { error } = await supabase.auth.signOut();
		if (error) throw error;
		// Redirect to login or perform other cleanup actions
		window.location.reload();
	} catch (error) {
		console.error('Logout failed:', error);
	}
}
